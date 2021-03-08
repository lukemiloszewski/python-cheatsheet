---
title: Pandas
createdDate: 2021-03-07
updatedDate: 2021-03-07
published: true
---

## View elements in df
```
# first few elements
df.head()

# last few elements
df.tail()
```

## View column names
```
df.columns
```

## Map old column values to new column values
```
# replace country names with capital names
mapping = {"France": "Paris", "Italy": "Rome", "Spain": "Madrid"}
df["Name"] = df["Name"].replace(mapping)
```

## Assign generic value to entire column
```
# make all entries in the column "Country" equal "South Africa"
df["Country"] = "South Africa"
```

## Reset df index
```
df = df.reset_index(drop=True)
```

## Rename column name
```
df = df.rename(columns={"OLD_NAME","NEW_NAME"})
```

## Drop null values
```
# drop null rows
df = df.dropna("index")

# drop null columns
df = df.dropna("columns")
```