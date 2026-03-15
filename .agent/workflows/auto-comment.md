---
description: Automated Code Commenting and Documentation
---

This workflow is used to ensure that the codebase remains well-documented and readable. It should be triggered after a new module is tested and verified, or when requested for a specific part of the system.

### Steps:

1. **Context Retrieval**:
   - Read the entire module directory (e.g., `backend/src/modules/[module-name]/`).
   - Identify undocumented functions, exported members, and complex logic blocks.

2. **JSDoc Generation**:
   // turbo
   - Add standard JSDoc comments to all exported functions in `service.js` and `controller.js`.
   - Include: `@param` types (if inferable), `@returns`, and a clear description of the operation.

3. **Logic Explanation**:
   - Add inline comments to explain non-obvious code (e.g., specific Mongoose populations, complex filters, or error handling branches).
   - Ensure comments explain "why" something is done, not just "what" (unless the what is cryptic).

4. **Consistency Check**:
   - Ensure the commenting style matches the rest of the project (e.g., matching the style of `auth` or `workspace` modules).
   - Verify that variable and function names are consistent with their comments.

5. **Final Review**:
   - Ensure no excessive "noise" comments are added (don't comment on obvious `return` statements).
   - Check for spelling and clarity.

### Usage:
Invoke this by saying **"/auto-comment [module-name]"** or asking to **"add comments to the [module-name] module"**.
