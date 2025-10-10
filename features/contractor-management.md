# Contractor Management - Comprehensive Test Plan

## Application Overview

The Contractor Management module in the Birla Opus portal enables administrators to create, search, filter, update, and manage contractor profiles. Core capabilities include:

- Basic contractor information management
- Institutional/Retail contractor type selection
- Work location selection via hierarchical comboboxes (State, Area, District, Pincode, Territory)
- Listing grid with search, filters, and date range
- Success toasts and navigation feedback

## Conventions
- Fresh state before each scenario
- Use durable selectors (`data-testid`, role-based) in implementation
- Prefer realistic but synthetic data
- Seed: `tests/seed.spec.ts`

## Test Scenarios

### 1. Contractor Creation

#### 1.1 Create Contractor with Valid Details (Retail)
**Preconditions:**
- Logged in as admin and on dashboard

**Steps:**
1. Navigate to contractors section
2. Click "Create New"
3. Fill basic details:
   - First Name: "Auto"
   - Last Name: "Contractor"
   - Mobile No: "9999999998"
   - Email: "auto.contractor@example.com"
4. Ensure contractor type: Retail (default if applicable)
5. Select work location:
   - State: "Maharashtra"
   - Area: "Mumbai"
   - District: "Mumbai"
   - Pincode: "400001"
   - Territory: "APZ (Colaba)"
6. Submit
7. Confirm in the modal/dialog

**Expected Results:**
- Success toast is displayed
- Redirects/navigates back to Contractors list
- Newly created contractor is visible in the grid

**Failure Conditions:**
- Validation errors are shown for missing/invalid fields
- Network/server error shows user-friendly message; no duplicate records created

#### 1.2 Create Contractor with Valid Details (Institutional)
**Preconditions:**
- Logged in as admin and on dashboard

**Steps:**
1. Navigate to contractors section
2. Click "Create New"
3. Toggle/choose contractor type: Institutional
4. Fill basic details:
   - First Name: "John"
   - Last Name: "Doe"
   - Mobile No: "9234565592"
   - Email: "john.doe@example.com"
5. (If required) Fill institutional fields (e.g., Organization Name/Type)
6. Select work location:
   - State: "Andaman And Nicobar Islands"
   - Area: "Andaman & Nicobar"
   - District: "Nicobar"
   - Pincode: "744301"
   - Territory: "PP-0073 ()"
7. Submit and confirm

**Expected Results:**
- Success toast is displayed
- Contractor appears in list (searchable by email)

**Failure Conditions:**
- Institutional-only validations appear when fields are missing

#### 1.3 Client-Side Validation Errors
**Preconditions:**
- On create contractor form

**Steps:**
1. Leave required fields blank and attempt submit
2. Enter invalid email format and attempt submit
3. Enter invalid mobile number format and attempt submit

**Expected Results:**
- Field-level validation messages displayed
- Submit blocked until errors are resolved

**Failure Conditions:**
- Form submits with invalid data

#### 1.4 Server-Side Validation (Duplicates)
**Preconditions:**
- An existing contractor with Mobile/Email is already present

**Steps:**
1. Attempt to create contractor with duplicate Mobile No
2. Attempt to create contractor with duplicate Email

**Expected Results:**
- Server-side validation messages shown (e.g., duplicate detected)
- No new record created

**Failure Conditions:**
- Duplicate records are created

### 2. Listing, Search, and Filters

#### 2.1 Search by Common Fields
**Preconditions:**
- Contractors list visible

**Steps:**
1. Search by contractor name
2. Search by mobile number
3. Search by email

**Expected Results:**
- Results are filtered accordingly; "no results" message for non-existent queries

**Failure Conditions:**
- Irrelevant results shown; stale results after clearing search

#### 2.2 Filter by Registration Date Range
**Preconditions:**
- Contractors list visible

**Steps:**
1. Open date range filter
2. Select From: "2025-09-01"
3. Select To: "2025-09-19"
4. Apply/Submit filters

**Expected Results:**
- All visible rows have Registration Date within range
- At least one row or explicit empty-state message

**Failure Conditions:**
- Rows outside selected range are shown; date parsing issues

#### 2.3 Combined Filters
**Preconditions:**
- Contractors list visible

**Steps:**
1. Apply State filter (e.g., "Maharashtra")
2. Apply Territory filter (e.g., "APZ (Colaba)")
3. Apply Registration Date range

**Expected Results:**
- Results satisfy all filters simultaneously
- Clearing filters resets listing

**Failure Conditions:**
- Filters conflict or fail to reset

#### 2.4 Pagination and Sorting
**Preconditions:**
- Contractors list with > 1 page of results

**Steps:**
1. Paginate to next/previous pages
2. Sort by Registration Date ascending/descending

**Expected Results:**
- Pagination updates results correctly
- Sorting order applied correctly and persists for page

**Failure Conditions:**
- Duplicated/missing rows across pages; incorrect sort order

### 3. Contractor Profile Management

#### 3.1 Edit Contractor Details
**Preconditions:**
- At least one contractor exists

**Steps:**
1. Open edit for a specific contractor
2. Update Last Name and Email
3. Submit and confirm

**Expected Results:**
- Success toast displayed
- Listing shows updated details

**Failure Conditions:**
- Changes not persisted; navigation not returning to list

#### 3.2 Status Change (Activate/Deactivate)
**Preconditions:**
- Contractor exists and supports status toggle

**Steps:**
1. Open status change control
2. Change Active to Inactive (with reason if required)
3. Save

**Expected Results:**
- Status updated; visible indicator reflects current status
- Status history (if available) records the change

**Failure Conditions:**
- Status not updated; missing confirmation

### 4. Error Handling and Resilience

#### 4.1 Network Issues During Submission
**Preconditions:**
- On create or edit form

**Steps:**
1. Simulate slow network/timeout during submit
2. Retry after error

**Expected Results:**
- User-friendly error message
- Entered data preserved for retry
- No duplicates created upon retry

**Failure Conditions:**
- Silent failure; data loss; duplicated records

#### 4.2 Server Errors (5xx/4xx)
**Preconditions:**
- On list or form pages

**Steps:**
1. Trigger a handled server error (mock or known condition)

**Expected Results:**
- Clear error message and recovery guidance
- No broken UI state; navigation remains functional

**Failure Conditions:**
- Uncaught exceptions; blank screens

### 5. Permissions and Access Control

#### 5.1 Unauthorized User Cannot Access Contractors
**Preconditions:**
- Login as a user without contractor permissions

**Steps:**
1. Attempt to navigate to Contractors

**Expected Results:**
- Access denied message or redirect to dashboard/login

**Failure Conditions:**
- Unauthorized access granted

### 6. Cross-Browser and Viewport

#### 6.1 Cross-Browser Sanity
**Preconditions:**
- Supported browsers configured (Chromium, Chrome, Edge)

**Steps:**
1. Execute 1.1 and 2.2 scenarios in each configured browser

**Expected Results:**
- Consistent behavior and rendering

**Failure Conditions:**
- Browser-specific regressions

### 7. Regression Safeguards

#### 7.1 Smoke Set
- Execute: 1.1, 2.2, 3.1

#### 7.2 Full Regression
- Execute all scenarios

## Verification Criteria
- Every step has a clear verification (URL change, toast text, grid content)
- Assertions rely on robust locators and stable text
- Tests are independent and runnable in any order
