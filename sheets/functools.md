---
title: Functools
createdDate: 2021-04-17
updatedDate: 2021-04-17
published: true
---

## Apply some function of two arguments to reduce an iterable to a single value

Syntax: 
```py
functools.reduce(function, iterable[, initializer])
```

This applies some `function` of two arguments cumulatively to the items of iterable, from left to right, so as to reduce the iterable to a single value. For example:
```py
reduce(lambda x, y: x+y, [1, 2, 3, 4, 5])
```

Which calculates `((((1+2)+3)+4)+5)`.
