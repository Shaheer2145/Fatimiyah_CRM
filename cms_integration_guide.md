# Official Architecture Document: CMS-Integrated Web Application

**Date:** January 19, 2026
**Project:** Fatmiyah CRM & Website
**Subject:** Dynamic CMS Implementation & Backend Architecture Guide

---

## 1. Executive Summary
This document outlines the architectural strategy to transform the current static website into a dynamic, CMS-driven application. The goal is to allow non-technical administrators to manage website content (Menus, Page Text, Images, Footer) via a secure Admin Panel (CMS), while the Public Website dynamically renders this content from a centralized Database via a Node.js-based Backend API.

## 2. The "Three-Pillar" Architecture
To answer "how to connect all three," we must define them distinct roles within this single project.

### A. The Three Players
1.  **The Database (Storage Layer):** The single source of truth. It holds not just user data, but *website content* (e.g., "Home Page Welcome Text", "Header Menu Links").
2.  **The Backend (API Layer - Node.js):** The brain. It connects to the database and exposes strictly defined endpoints (e.g., `GET /api/content/header`). It runs on the server (Next.js API Routes).
3.  **The Frontend (Two Views):**
    *   **Public Website:** what normal visitors see. It fetches data from the Backend to decide what to show.
    *   **CMS Endpoint (Admin Panel):** A secure dashboard (`/dashboard/admin/cms`) where you *write* to the database.

### B. The Connection Diagram
```text
[ CMS Admin Panel ]        [ Public Website ]
       |                          ^
       | (Writes Data)            | (Reads Data)
       v                          |
   [ Backend API ] <------------->+
       |
       v
   [ Database ]
```

---

## 3. How the Content Management Works (Answering "What should be in the CMS")

To make the website fully manageable, you must "model" your UI components in the database.

### A. Core Models (Database Schema)
You need to create tables/collections for the following:

#### 1. `NavigationMenu` (For Header/Footer)
Instead of hardcoding links in `Header.js`, the DB stores them.
*   **Structure:** `id`, `label` (e.g., "Home"), `path` (e.g., "/"), `order` (e.g., 1), `type` (Header/Footer).

#### 2. `PageContent` (For dynamic text)
Everything currently written in your code (e.g., `<p>Welcome to Fatmiyah</p>`) moves to the DB.
*   **Structure:** `id`, `pageIdentifier` (e.g., "home"), `sectionIdentifier` (e.g., "hero_section"), `contentJSON` (The text/images).

#### 3. `MediaAssets`
*   **Structure:** URLs to images uploaded via the CMS.

### B. The Manager's Workflow (The "Click" Scenario)
Your manager described the flow accurately. Here is the technical breakdown of that user story:

1.  **Event:** A user visits the website (or clicks a Menu Item).
2.  **Request:** The Frontend Component (`Header.js`) triggers an effect: `useEffect(() => fetch('/api/menus/header'))`.
3.  **Processing:**
    *   The **API** receives the request.
    *   The **Backend** queries the **Database**: `SELECT * FROM menus WHERE type = 'header' ORDER BY order ASC`.
4.  **Response:** The DB returns the list. The API sends it to the Frontend as JSON.
5.  **Render:** The Frontend loops through the JSON and renders the links dynamically.
    *   *Result:* If you change "Home" to "Main" in the CMS, the website updates immediately without code changes.

---

## 4. Implementation Strategy (Node.js Backend Structure)

To keep the backend "familiar" and robust, we will use a **Controller-Service-Repository** pattern within your Next.js API routes.

### Directory Structure
```text
src/
├── app/
│   ├── api/                # API Layer (Controllers)
│   │   ├── content/
│   │   │   └── [slug]/route.js  # GET /api/content/home
│   │   └── menus/
│   │       └── route.js    # GET /api/menus, POST /api/menus
│   └── dashboard/
│       └── admin/
│           └── cms/        # The CMS Frontend Pages
├── lib/
│   ├── db.js               # Database Connection
│   └── services/           # Business Logic
│       ├── contentService.js
│       └── menuService.js
```

### Step-by-Step Implementation

#### Step 1: Create the "CMS" (Admin Frontend)
Create a page at `/dashboard/admin/cms`.
*   **Feature:** A list of pages (Home, About, Doctors).
*   **Action:** When "Home" is clicked, show a form with input fields for "Hero Title", "Hero Description", etc.
*   **Save:** When "Save" is clicked, send a `POST` request to `/api/content`.

#### Step 2: Build the Backend API
*   **Endpoint:** `/api/content`
*   **Logic:** Receives the JSON from the CMS form and performs an `UPSERT` (Update if exists, Insert if new) into the `PageContent` table in the DB.

#### Step 3: Connect the Public Website
Modify your existing components to stop using hardcoded text.
*   **Before:** `<h1>Welcome to Our Clinic</h1>`
*   **After:**
    ```javascript
    // In Page Component
    const { data } = useFetch('/api/content/home');
    return <h1>{data?.heroTitle || "Loading..."}</h1>;
    ```

---

## 5. Summary Checklist
To achieve your goal, you must execute these 4 tasks:
1.  [ ] **Model Data:** Design the DB Schema for Menus and Page Content.
2.  [ ] **Build API:** Create Node.js/Next.js APIs to `GET` and `POST` this content.
3.  **Build CMS UI:** Create the Admin forms to edit this data.
4.  **Refactor Frontend:** Replace hardcoded text in your 5 pages with API calls.
