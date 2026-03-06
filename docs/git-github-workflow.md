# Git & GitHub Workflow Notes

## Branches

A **branch** is an independent line of development.

Example:

```
main
dev
feature/login
```

Common workflow:

```
main (stable)
  ↑
dev (integration)
  ↑
feature branches
```

---

## Remote

A **remote** is a reference to another repository.

Example:

```
origin → GitHub repository
```

Command example:

```
git push origin dev
```

Meaning:

```
push local branch "dev"
to remote repository "origin"
```

---

## Upstream Branch

An **upstream branch** connects a local branch to a remote branch.

Set with:

```
git push -u origin dev
```

After this you can use:

```
git push
git pull
```

Git now knows:

```
dev ↔ origin/dev
```

---

## Pull Request (PR)

A **Pull Request** proposes merging one branch into another.

Example:

```
dev → main
```

Purpose:

```
code review
CI checks
controlled merges
```

Creating a PR does **not** merge code.

---

## Closed Pull Requests

A closed PR:

```
does not merge code
remains in repository history
cannot be deleted
```

GitHub keeps PRs for:

```
history
discussion
review record
```

---

## Compare & Pull Request Button

GitHub shows:

```
Compare & pull request
```

when:

```
a branch has commits not in the base branch
and no PR existed yet for this branch pair
```

Example:

```
dev has commits not in main
```

---

## Why the Compare Button Sometimes Disappears

If a PR already existed between the branches:

```
dev → main
```

GitHub may instead show:

```
View pull request
```

or

```
Create pull request
```

This is only a UI change.

The functionality is identical.

---

## Creating a New Pull Request

If the compare banner is not visible:

```
Pull requests
→ New pull request
```

Select:

```
base: main
compare: dev
```

---

## CI (Continuous Integration)

CI runs automated checks when code changes.

Typical steps:

```
push code
↓
CI runs tests
↓
results shown in PR
```

---

## Required Status Checks

Branch protection can require CI to pass before merging.

Example rule:

```
Require status checks before merging
```

GitHub blocks merges if tests fail.

Example:

```
test ❌ failing
Merge blocked
```

---

## Typical Workflow

```
write code
↓
git commit
↓
git push
↓
open Pull Request
↓
CI runs
↓
tests pass
↓
merge into main
```
