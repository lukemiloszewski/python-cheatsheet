---
title: Pandas
createdDate: 2021-03-07
updatedDate: 2021-03-07
published: true
---

## View first few elements in df
```
df.head()
```

## View last few elements in df
```
df.tail()
```

## View column names
```
df.columns
```

## Count number of values in df
```
df.count # = number of rows x columns
df.count() # = number of instances of each variable
```

## Add columns to df
```
df.assign()
```

## Delete column from df
```
df.drop()
```

## Get index of a specific column
```
df.columns.get_loc("column_name")
```