---
title: "Understanding Closures in JavaScript"
description: "Learn how closures work internally in JavaScript and how they help create powerful patterns for state management and encapsulation."
date: "2026-04-10"
tags: ["Backend"]
cover: "/images/backend-journey.png"
featured: false
category: "Technical"
duration: "10 min"
---

Closures are one of the most important concepts in JavaScript. They allow functions to access variables from their outer scope even after the outer function has finished executing.

## Why Closures Matter

Closures are commonly used for:
- Data privacy
- Function factories
- State preservation
- Event handlers

## Example

```js
function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const increment = counter();

console.log(increment());
console.log(increment());
```

The inner function still remembers the `count` variable because of closures.

## Final Thoughts

Understanding closures is essential for mastering JavaScript and writing better asynchronous and modular code.