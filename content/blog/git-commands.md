---
title: "Advanced Git Commands Every Developer Should Know"
description: "Learn advanced Git commands such as stash, reset, rebase, bisect, grep, and diff to improve your workflow and maintain a cleaner project history."
date: "2025-07-13"
tags: ["Backend"]
cover: "/blog/git-advanced.jpg"
featured: false
category: "Technical"
---

Git is one of the most important tools in modern software development. While most developers regularly use commands such as `git pull`, `git push`, and `git commit`, Git offers many advanced features that can dramatically improve productivity and make version control more efficient.

Understanding these commands can help you debug issues faster, maintain a cleaner project history, and collaborate more effectively with your team.

## Git Stash

When you're in the middle of implementing a feature and suddenly need to switch branches, committing unfinished code is not always the best option.

The `git stash` command allows you to temporarily save your uncommitted changes and return your working directory to a clean state.

Benefits of using stash:

- Switch branches safely
- Avoid creating unnecessary commits
- Store multiple sets of temporary changes

Example:

```bash
git stash
```

To restore your latest stashed changes:

```bash
git stash pop
```

You can also view all saved stashes:

```bash
git stash list
```

## Git Reset

The `git reset` command allows developers to move the current branch pointer to a previous commit.

This command is particularly useful when mistakes have been made and commits need to be adjusted or removed.

### Soft Reset

A soft reset moves the branch pointer while keeping changes staged.

```bash
git reset --soft <commit-hash>
```

Use this when you want to rewrite commit history but keep your changes ready for recommit.

### Mixed Reset

A mixed reset removes commits but keeps changes in the working directory.

```bash
git reset --mixed <commit-hash>
```

This is Git's default reset mode.

### Hard Reset

A hard reset completely removes commits and discards all associated changes.

```bash
git reset --hard <commit-hash>
```

This command should be used carefully because discarded changes cannot easily be recovered.

## Git Rebase

Many developers use merge operations to integrate changes from one branch into another.

However, repeated merges can clutter project history with numerous merge commits.

The `git rebase` command rewrites commit history by moving commits onto a new base.

Example:

```bash
git rebase main
```

Benefits of rebasing include:

- Cleaner commit history
- Easier code reviews
- Linear project timeline

### Real-World Example

Imagine working on a feature branch for several days while the main branch continues to evolve.

Instead of creating a merge commit, rebasing allows your work to appear as if it was built on top of the latest version of the main branch from the beginning.

This creates a cleaner and easier-to-understand commit history.

## Git Bisect

Debugging issues in large projects can be challenging.

When a bug appears, determining which commit introduced the issue can take considerable time.

Git provides the `git bisect` command to automate this process using a binary search algorithm.

Example:

```bash
git bisect start
git bisect bad
git bisect good <commit-hash>
```

Git will automatically check different commits and ask whether each one is "good" or "bad."

Eventually, it identifies the exact commit responsible for the issue.

### Why Git Bisect Matters

Instead of manually testing dozens or hundreds of commits, Git can narrow the search space dramatically.

This makes bug investigation significantly faster, especially in long-running projects.

## Git Grep

Searching through a large codebase manually can be time-consuming.

Git includes a powerful search utility called `git grep`.

Example:

```bash
git grep "functionName"
```

This command searches tracked files and quickly locates:

- Functions
- Variables
- Configuration values
- Error messages

### Real-World Example

Imagine inheriting a large backend project with hundreds of files.

If you need to find every occurrence of a specific API endpoint or service function, `git grep` can locate them instantly without requiring additional tools.

## Git Diff

Before committing changes, it is often useful to review exactly what has changed.

The `git diff` command compares differences between files, branches, or commits.

To compare uncommitted changes:

```bash
git diff
```

To compare branches:

```bash
git diff branch1..branch2
```

To compare commits:

```bash
git diff commit1 commit2
```

### Benefits of Git Diff

Using diff regularly helps developers:

- Catch mistakes before committing
- Review code changes carefully
- Understand modifications between releases

## Choosing the Right Command

Each command serves a different purpose:

| Command | Primary Use |
|----------|-------------|
| `git stash` | Temporarily save work |
| `git reset` | Undo commits |
| `git rebase` | Clean commit history |
| `git bisect` | Find problematic commits |
| `git grep` | Search repository content |
| `git diff` | Compare changes |

Understanding when to use each command can significantly improve your daily workflow.

## Final Thoughts

Git is far more powerful than the handful of commands most developers use every day.

Commands such as `git stash`, `git reset`, `git rebase`, `git bisect`, `git grep`, and `git diff` can help you work more efficiently, debug faster, and maintain a cleaner repository history.

Mastering these tools takes time, but the productivity gains are well worth the investment.

Whether you're working on personal projects, contributing to open source, or collaborating in a professional engineering team, these commands can become invaluable parts of your development workflow.