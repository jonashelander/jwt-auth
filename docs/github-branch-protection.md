# GitHub Branch Protection Notes

## Branch Protection

Branch protection adds rules to a branch.

Typical protected branch:

```
main
```

Purpose:

```
protect stable code
prevent accidental changes
enforce CI checks
```

---

## Required Status Checks

Branch protection can require CI checks to pass before merging.

Example rule:

```
Require status checks to pass before merging
```

If tests fail:

```
Merge blocked
```

If tests pass:

```
Merge allowed
```

---

## Status Checks

Status checks come from CI jobs.

Example CI job:

```yaml
jobs:
  test:
```

GitHub check name becomes:

```
test
```

This name must be selected in branch protection.

---

## Pull Request Requirement

Branch protection can require Pull Requests.

Example rule:

```
Require a pull request before merging
```

This prevents direct pushes to the protected branch.

Instead developers must use:

```
branch → pull request → merge
```

---

## Typical Protected Workflow

```
feature branch
↓
push
↓
create pull request
↓
CI runs
↓
tests pass
↓
merge into main
```

---

## Merge Blocking

If CI fails:

```
tests fail
↓
status check fails
↓
merge disabled
```

This prevents broken code from entering the protected branch.

---

## Purpose

Branch protection ensures:

```
stable main branch
verified code
controlled merges
```
