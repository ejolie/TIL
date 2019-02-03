# SQLite

## Create Table

```sqlite
CREATE TABLE table_name (
   column_1 data_type, 
   column_2 data_type, 
   column_3 data_type
);
```

```sqlite
CREATE TABLE celebs (
   id INTEGER, 
   name TEXT, 
   age INTEGER
);
```



## Insert

```sqlite
INSERT INTO celebs (id, name, age)
VALUES (1, 'Justin Bieber', 22);
```



## Select

```sqlite
SELECT name FROM celebs;
SELECT * FROM celebs;
```

```sqlite
SELECT column1, column2
FROM table_name;
```



### AS

```sqlite
SELECT name AS 'Titles'
FROM movies;
```



### Distinct

```sqlite
SELECT DISTINCT genre
FROM movies;
```



### Like

```sqlite
SELECT *
FROM movies
WHERE name LIKE 'Se_en';
```

* `_` : Can substitute any individual character here without breaking the pattern.



```sqlite
SELECT *
FROM movies
WHERE name LIKE 'A%';
```

* `%` : A wildcard character that matches zero or more missing letters in the pattern. Not case sensitive.
  * `A%` : All movies with names that begin with letter 'A'
  * `%a` : All movies that end with 'a'
  * `%man%` : Any movie that contains the word 'man' in its name



### Where

```sqlite
SELECT *
FROM movies
WHERE imdb_rating > 8;
```



### Is Null

```sqlite
SELECT name
FROM movies
WHERE imdb_rating IS NOT NULL;
```



### Between

```sqlite
SELECT *
FROM movies
WHERE name BETWEEN 'A' AND 'J';
```

Movies with `name`s that begin with letters 'A' up to, _but not including_ 'J'.

```sqlite
SELECT *
FROM movies
WHERE year BETWEEN 1990 AND 1999;
```

Movies with `year`s between 1990 up to, _and including_ 1999.

* `BETWEEN` __two letters__ : _not_ inclusive of the 2nd letter.
* `BETWEEN` __two numbers__ : inclusive of the 2nd letter.



### And

```sqlite
SELECT *
FROM movies
WHERE year BETWEEN 1990 AND 1999
	AND genre = 'romance';
```



### Or

```sqlite
SELECT *
FROM movies
WHERE year > 2014
	OR genre = 'action';
```



### Order By

```sqlite
SELECT *
FROM movies
WHERE imdb_rating > 8
ORDER BY name;
```

```sqlite
SELECT *
FROM movies
WHERE imdb_rating > 8
ORDER BY name DESC;
```

* `ORDER BY` 의 column은 반드시 `SELECT` 에서 표시되는 column일 필요가 없다.
* `ORDER BY` 는 (`WHERE`이 존재한다면) `WHERE` 다음에 온다. 



### Limit

```sqlite
SELECT *
FROM movies
LIMIT 10;
```

```sqlite
SELECT *
FROM movies
ORDER BY imdb_rating DESC
LIMIT 3;
```



### Case (if-then logic)

- If the rating > 8, then it is Fantastic.
- If the rating > 6, then it is Poorly Received.
- Else, Avoid at All Costs.

```sqlite
SELECT name,
 CASE
  WHEN imdb_rating > 8 THEN 'Fantastic'
  WHEN imdb_rating > 6 THEN 'Poorly Received'
  ELSE 'Avoid at All Costs'
 END
FROM movies;
```

```sqlite
SELECT name,
 CASE
  WHEN imdb_rating > 8 THEN 'Fantastic'
  WHEN imdb_rating > 6 THEN 'Poorly Received'
  ELSE 'Avoid at All Costs'
 END AS 'Review'
FROM movies;
```





## Alter

```sqlite
ALTER TABLE celebs
ADD COLUMN twitter_handle TEXT;
```



## Update

```sqlite
UPDATE celebs
SET twitter_handle = '@taylorswift13'
WHERE id = 4;
```



## Delete

```sqlite
DELETE FROM celebs
WHERE twitter_handle IS NULL;
```



## Constraints

```sqlite
CREATE TABLE celebs (
	id INTEGER PRIMARY KEY,
    name TEXT UNIQUE,
    date_of_birth TEXT NOT NULL,
    date_of_death TEXT DEFAULT 'Not Applicable'
);
```

