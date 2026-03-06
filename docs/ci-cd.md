# CI / CD Notes

## CI (Continuous Integration)

Continuous Integration means that code changes automatically trigger tests.

Typical flow:

```
push code
↓
CI pipeline starts
↓
tests run
↓
pass or fail reported
```

Purpose:

```
prevent broken code from entering main branch
```

---

## GitHub Actions

GitHub Actions is GitHub's CI system.

Workflows are defined in:

```
.github/workflows/
```

Example file:

```
.github/workflows/ci.yml
```

---

## Workflow Structure

Example:

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest
```

Explanation:

```
name → workflow name
on → when the workflow runs
jobs → tasks to execute
```

---

## Jobs

Jobs define tasks CI should run.

Example:

```yaml
jobs:
  test:
```

Job name becomes the status check name in GitHub.

Example result in Pull Request:

```
test ✓ passing
```

---

## Steps

Steps are actions inside a job.

Example:

```yaml
steps:
  - uses: actions/checkout@v4
  - run: npm install
  - run: npm test
```

Meaning:

```
checkout repository
install dependencies
run tests
```

---

## CI Goal

CI ensures:

```
tests always run
errors detected early
main branch stays stable
```
