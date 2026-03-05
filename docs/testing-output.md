# Jest Test Structure

describe
Groups tests.

it
Defines a single test.

Example:

describe("Auth routes", () => {
  it("POST /api/auth/login returns 200", async () => {});
});

Output example:

Auth routes
  ✓ POST /api/auth/login returns 200
