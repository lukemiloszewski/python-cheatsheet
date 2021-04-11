---
title: Pytest
createdDate: 2021-04-11
updatedDate: 2021-04-11
published: true
---

## Test an exception being raised

```py
with pytest.raises(ValueError) as e:
	some_function_that_raises_error(...)
assert e.value.args[0] == "ValueError"
```

## Test multiple exceptions being raised within the same context

Wrap the exceptions within a tuple:

```py
with pytest.raises((KeyError, ValueError)):
    some_function_that_raises_error(...)
```

## Configuring command line arguments

In a `pytest.ini` file, use the `addopts` config parameter to set command line arguments:

```py
addopts = --maxfail=2 -rf
addopts = --ignore=file.py
```

When calling `pytest`, this will be extended as `pytest --maxfail=2 --ignore=file.py`

## Apply custom markers to test cases

You can add a decorator to your test functions to mark them with specific words/phrases.:

```py
@pytest.mark.slow_test
def test_function():
    value = slow_function()
    assert value is True
```

## Register custom markers

In a `pytest.ini` file, use the `markers` config parameter to register custom markers (where `slow_tests` is the custom marker):

```py
markers =
    slow_test: marks tests as slow (deselect with '-m "not slow"')
```

## List the runtime of each test

When calling `pytest`, use the `--durations=n` argument to list the duration of the slowest `n` tests, or the `--durations=0` argument to list the duration of all tests.
