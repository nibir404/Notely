---
description: Automated Module Validation, MongoDB Testing, and Documentation
---

This workflow is triggered whenever a new backend module or service is created. Its goal is to ensure full-stack functional correctness (hitting the DB) and keep the project documentation up to date.

### Steps:

1. **Module Discovery & Code Review**:
   - Locate the new module in `backend/src/modules/`.
   - Identify: `*.model.js`, `*.service.js`, `*.controller.js`, and `*.routes.js`.
   - Verify that the module is correctly imported and used in `backend/src/server.js`.

2. **Database & Routing Verification**:
   - Confirm the module exports a Mongoose model.
   - Check if authentication middleware is required and correctly applied in `routes.js`.
   - Ensure `backend/src/core/config/env.js` has necessary variables for the module.

3. **Data-Driven Integration Testing**:
   // turbo
   - Create a temporary Node.js test script (e.g., `test-[module]-exec.js`) or `.http` file.
   - **Requirement**: The test MUST result in actual database entries (confirming MongoDB communication).
   - Test sequence:
     1. Register/Login (if auth is required).
     2. Create record (POST).
     3. Fetch record (GET/GET BY ID).
     4. Update record (PUT).
     5. Delete record (DELETE).

4. **Automated Documentation Update**:
   // turbo
   - Once tests pass, update the **Project Structure** section in `README.md`.
   - Add the new module folder and its key files to the tree view to maintain an elaborate and understandable map for other developers.

5. **Final Reporting**:
   - Summarize test status for each endpoint (Status 200/201 vs 400/500).
   - Highlight any schema improvements or security optimizations found during review.

6. **Cleanup**:
   // turbo
   - Remove all temporary testing files and logs.
   - Ensure no dummy test data remains in the production/dev database if possible (or note its existence).
