---
title: Itertools
createdDate: 2021-04-17
updatedDate: 2021-04-17
published: true
---

## Make an iterator that aggregates elements from multiple iterables over the longest iterable length

Syntax:

``` py
itertools.zip_longest(*iterables, fillvalue=None)
```

If the iterables are of uneven length, missing values are filled-in with `fillvalue`. Iteration continues until the longest iterable is exhausted. For example:

``` py
a = [1,2,3]
b = [1,2]
for x in zip_longest(a, b, fillvalue=3):
    print(x)
```

Which returns: `(1: 1)`, `(2: 2)`, `(3: 3)`.
