---
description: Automated Module Validation and Testing
---

This workflow is triggered whenever a new backend module or service is created or significantly updated. Its goal is to ensure code quality and functional correctness using dummy data.

### Steps:

1. **Module Discovery**:
   - Locate the new module folder in `backend/src/modules/`.
   - Identify the core files: `*.model.js`, `*.service.js`, `*.controller.js`, and `*.routes.js`.

2. **Code Analysis**:
   - Review the `model` for required fields and data types.
   - Review the `service` logic for edge cases (e.g., missing data, duplicates).
   - Review the `controller` for correct status codes and response bodies.

3. **Preparation of Test Data**:
   // turbo
   - Create a temporary `test-[module].http` file in the module directory or root backend folder.
   - Populate it with sample POST/PUT requests using valid dummy data and intentionally invalid data.

4. **Execution**:
   // turbo
   - If the server is not running, start it using `npm run dev`.
   - Use `curl` or a temporary node script to execute the requests if the user doesn't have the REST Client extension active.

5. **Reporting**:
   - Provide a summary of the test results (Success/Failure for each endpoint).
   - Suggest any missing validations or security improvements (e.g., password hashing, input sanitization).

6. **Cleanup**:
   // turbo
   - Remove any temporary test files created during the process.
