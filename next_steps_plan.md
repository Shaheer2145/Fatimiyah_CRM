# Roadmap: Phase 2 - Core Functionality & Backend Integration

## 1. Executive Summary
The current application is a frontend prototype with mock data and illustrative API routes. The next phase must focus on making the application functional by implementing a real database, secure authentication, and robust data management for Patients, Doctors, and Admins.

## 2. Backend Requirements (What to build next)

### A. Infrastructure Setup
*   **Database:** Connect a real database (PostgreSQL recommended via Supabase or Neon, or MongoDB).
*   **ORM:** Install and configure Prisma (for SQL) or Mongoose (for MongoDB) to manage schema.
*   **Authentication:** Replace mock auth with NextAuth.js (v5) or a provider like Clerk/Supabase Auth for secure handling of sessions and protected routes.

### B. New & Enhanced APIs
We currently have **7** APIs. To achieve functional parity with a standard CRM, we need approximately **15-20 additional API endpoints**.

#### Priority API Groups:

1.  **User Management (Admin & Self)**
    *   `GET /api/users/me` (Get current user profile)
    *   `PUT /api/users/me` (Update profile)
    *   `GET /api/admin/users` (List all users - Admin only)

2.  **Appointments (Full CRUD)**
    *   `GET /api/appointments` (List with filters: date, doctor, status)
    *   `GET /api/appointments/[id]` (Details)
    *   `PUT /api/appointments/[id]` (Reschedule/Status change: Pending -> Confirmed -> Completed)
    *   `DELETE /api/appointments/[id]` (Cancel)

3.  **Doctor Schedule**
    *   `GET /api/doctors/[id]/schedule` (View available slots)
    *   `PUT /api/doctors/[id]/schedule` (Manage availability)

4.  **Medical Records & Prescriptions**
    *   `POST /api/medical-records` (Doctor adds a record)
    *   `GET /api/medical-records/patient/[id]` (View history)
    *   `POST /api/prescriptions` (Create prescription)

5.  **CMS (Content Management)**
    *   `POST /api/departments` (Add new department)
    *   `PUT /api/departments/[id]` (Edit department)
    *   `DELETE /api/departments/[id]` (Remove department)
    *   *(Repeat for Services and News)*

## 3. Frontend Requirements (What to build next)

### A. Role-Based Dashboards
The current dashboards need to be expanded with real functionality.

*   **Patient Dashboard:**
    *   **"My Appointments" Page:** List upcoming (with countdown/join link) and past appointments.
    *   **"Medical History" Page:** View reports and prescriptions uploaded by doctors.
    *   **Settings:** Update mock profile data with real form submission.

*   **Doctor Dashboard:**
    *   **"My View" Calendar:** A robust calendar view of their schedule.
    *   **Appointment Manager:** Click an appointment to see patient details and "Start Consultation".
    *   **Consultation Mode:** A view to write notes and issue prescriptions during a visit.

*   **Admin Dashboard:**
    *   **User Manager:** Table to approve doctor registrations.
    *   **Content Editor:** Forms to update the "Services" and "News" sections of the public website without coding.

### B. Integration
*   **API Client:** Create a centralized API client (using `fetch` or `axios` or `tanstack-query`) to handle requests, error states, and loading states consistently.
*   **Route Protection:** Ensure `/dashboard/admin` is only accessible to users with `role: 'ADMIN'`.

## 4. Suggested Immediate Next Step
**Step 1: Database & Auth Setup**
Before building more UI, set up the storage layer.
1.  Initialize Prisma/DB.
2.  Define the schema (`User`, `Appointment`, `DoctorProfile`, `Record`).
3.  Update the existing "Register" API to actually create a user in the DB.

## 5. Integrated Architecture Recommendation

To create a "One Backend Structure" that is clean, scalable, and easy to connect to the frontend, follow this **Service-Repository Pattern** within your Next.js project.

### A. The "One Backend" Structure
Instead of scattering logic, organize your backend code in `src/lib` and `src/app/api`.

```text
src/
├── lib/
│   ├── db.js               # 1. Singleton Database Connection (Prisma Client)
│   ├── auth.js             # 2. Authentication Configuration (NextAuth)
│   └── services/           # 3. Business Logic Layer (The "Brain")
│       ├── userService.js
│       ├── appointmentService.js
│       └── doctorService.js
└── app/
    └── api/                # 4. API Routes (The "Doorway")
        └── [resource]/
            └── route.js    # Calls services, handles HTTP req/res
```

#### How it works:
1.  **`db.js`**: Connects to the database once. All other files import this.
2.  **`services/*.js`**: Contains the actual *work*. 
    *   *Example:* `appointmentService.create()` handles validation, DB insertion, and sending emails.
    *   *Rule:* Never write DB queries directly in `route.js`. Always write them here.
3.  **`api/**/route.js`**: Purely handles HTTP. It receives the request, calls a *Service* function, and creates a response.

### B. connecting Backend to Frontend
Do not make `fetch` calls directly inside your components. Create a centralized **Frontend API Client**.

#### 1. Create the Client Helper (`src/lib/apiClient.js`)
```javascript
// src/lib/apiClient.js
const API_BASE = '/api';

export const apiClient = {
  get: async (endpoint) => {
    const res = await fetch(`${API_BASE}${endpoint}`);
    if (!res.ok) throw new Error('API Error');
    return res.json();
  },
  post: async (endpoint, data) => {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('API Error');
    return res.json();
  }
};
```

#### 2. Usage in Components (Visual)
Now your frontend components stay clean.

```javascript
// src/components/BookAppointment.js
import { apiClient } from '@/lib/apiClient';

export default function BookAppointment() {
  const handleSubmit = async (formData) => {
    try {
      // clean connection to your "One Backend"
      const result = await apiClient.post('/appointments', formData);
      alert('Success: ' + result.message);
    } catch (error) {
      alert('Booking Failed');
    }
  };
  
  return <form onSubmit={...}>...</form>;
}
```

### C. Summary of Flow
**Frontend Component**  ➡️  **API Client** (`apiClient.js`)  ➡️  **HTTP Request**  ➡️  **Next.js API Route** (`/api/...`)  ➡️  **Service Layer** (`services/...`)  ➡️  **Database** (`Prisma`)
