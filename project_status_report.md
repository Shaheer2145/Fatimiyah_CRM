# Project Status & Estimate Report

**Date:** January 19, 2026
**Project:** Fatmiyah CRM
**Status:** Alpha / Frontend Prototype Phase

---

## 1. Executive Summary
This document serves as the **Master Estimate File**, detailing every asset, route, and feature currently implemented in the codebase.

**Current Composition:**
*   **Total APIs:** 7
*   **Total Pages (Routes):** 9
*   **Frontend Completion:** ~70% (Visuals/Layouts done)
*   **Backend Completion:** ~15% (Mock Data only, no DB)

---

## 2. API Inventory (The Backend)
**Total Count:** 7 Endpoints

These endpoints are currently active in `src/app/api`:

1.  **`/api/auth/login`**: Accepts email/password, checks against `users.json`, returns mock token.
2.  **`/api/auth/register`**: Accepts user details, simulates creating a new user.
3.  **`/api/appointments`**:
    *   `GET`: Returns list of appointments.
    *   `POST`: Creates a new appointment.
4.  **`/api/customer/appointments`**: Returns appointment history for a specific patient.
5.  **`/api/doctors`**: Returns list of all doctors with their specialties.
6.  **`/api/services`**: Returns listing of medical departments (Cardiology, etc.).
7.  **`/api/admin/stats`**: Returns summary metrics (Total Patients, Total Income) for the Admin Dashboard.

---

## 3. Route Inventory (The Frontend)
**Total Count:** 9 Unique Pages

These are the screens a user can navigate to:

1.  **Home (`/`)**: 
    *   Features: Hero Section, About Snippet, Services Carousel, FAQ, Footer.
2.  **Login (`/login`)**: 
    *   Features: Form with Email/Password validation, "Remember Me" toggle.
3.  **Register (`/register`)**: 
    *   Features: Multi-step form for Patient registration.
4.  **Doctors Directory (`/doctors`)**: 
    *   Features: Grid view of doctor profiles, filtering by specialty.
5.  **Department Details (`/departments/[slug]`)**: 
    *   Features: Dynamic page showing details for specific departments (e.g., /departments/cardiology).
6.  **Find Doctors (`/dashboard/find-doctors`)**: 
    *   Features: Search bar and advanced filtering for booking.
7.  **Patient Dashboard (`/dashboard/patient`)**: 
    *   Features: Welcome message, "Upcoming Appointments" card.
8.  **Doctor Dashboard (`/dashboard/doctor`)**: 
    *   Features: Schedule view (Mock), "Recent Patients" list.
9.  **Admin Dashboard (`/dashboard/admin`)**: 
    *   Features: Stats cards (Revenue, Users), User management table (Mock).

---

## 4. Component Breakdown (In-Depth)

### A. Core UI Components (`src/components`)
These are the building blocks used across pages:
*   **Header**: Responsive navigation bar with Mobile Menu (Hamburger) support.
*   **Footer**: Multi-column layout with links and newsletter input.
*   **Hero**: Main landing banner with "Book Appointment" CTA.
*   **DoctorList**: Reusable grid component for displaying doctor cards.
*   **MedicalDepartments**: Carousel/Grid showing icon + title of departments.
*   **FAQ**: Accordion-style list of common questions.
*   **NewsRoom**: Section displaying latest blog posts/news.
*   **AboutUs**: Text + Image section describing the clinic.

### B. Functional Logic
*   **AuthContext**: Manages the "Is Logged In" state.
*   **Mock Services**:
    *   `appointmentService.js`: Logic to filter/add appointments in memory.
    *   `newsService.js`: logic to fetch news items.

---

## 5. Backend Logic Breakdown
Currently, the backend is a **Simulation**.

*   **Data Source**: `src/lib/mockData/*.json`
    *   `appointments.json`: storage for booking records.
    *   `users.json`: Storage for registered users.
    *   `doctors.json`: Static list of doctor profiles.
*   **Service Layer**: `src/lib/services`
    *   This layer intercepts API calls and reads from the JSON files. It mimics a database driver.

---

## 6. Gap Analysis (What is Missing?)

To reach **Production**, the following features are estimated as **Pending**:

1.  **Database Integration**: 0% Complete. Needs MongoDB/PostgreSQL connection.
2.  **CMS Admin Panel**: 0% Complete. Interface to edit Home Page text does not exist.
3.  **Real Authentication**: 10% Complete. (UI is done, security is missing).
4.  **File Uploads**: 0% Complete. No way to upload Profile Pictures or Medical Reports.
