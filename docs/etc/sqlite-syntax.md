2019년 1월 29일 화요일

# SQLite 문법 {docsify-ignore-all}

## 1. Create
```sql
CREATE TABLE table_name (
   column_1 data_type, 
   column_2 data_type, 
   column_3 data_type
);
```

```sql
CREATE TABLE celebs (
   id INTEGER, 
   name TEXT, 
   age INTEGER
);
```


&nbsp;
## 2. Insert

```sql
INSERT INTO celebs (id, name, age)
VALUES (1, 'Justin Bieber', 22);
```


&nbsp;
## 3. Select

```sql
SELECT name FROM celebs;
SELECT * FROM celebs;
```

```sql
SELECT column1, column2
FROM table_name;
```


&nbsp;
### 1) AS

```sql
SELECT name AS 'Titles'
FROM movies;
```


&nbsp;
### 2) Distinct

```sql
SELECT DISTINCT genre
FROM movies;
```


&nbsp;
### 3) Like

```sql
SELECT *
FROM movies
WHERE name LIKE 'Se_en';
```

- `_` : 패턴을 유지시키면서 _에는 어떤 문자나 들어갈 수 있습니다.



```sql
SELECT *
FROM movies
WHERE name LIKE 'A%';
```

- `%` : 패턴에서 0개 이상의 어떤 문자나 매치시키는 와일드 카드입니다. 대소문자는 고려하지 않습니다.
  - `A%` : 'A'로 시작하는 `name`을 가진 영화
  - `%a` : 'a'로 끝나는 `name`을 가진 영화
  - `%man%` : `name`에 'man'이라는 단어를 포함하는 영화


&nbsp;
### 4) Where

```sql
SELECT *
FROM movies
WHERE imdb_rating > 8;
```


&nbsp;
### 5) Is Null

```sql
SELECT name
FROM movies
WHERE imdb_rating IS NOT NULL;
```


&nbsp;
### 6) Between

```sql
SELECT *
FROM movies
WHERE name BETWEEN 'A' AND 'J';
```

'A'부터 'J' _전까지_ 의 문자를 포함하는 `name`

```sql
SELECT *
FROM movies
WHERE year BETWEEN 1990 AND 1999;
```

1990부터 1999 _까지_ 의 숫자를 포함하는 `year`

- `BETWEEN` __문자1 AND 문자2__ : 문자2를 포함하지 _않습니다._
- `BETWEEN` __숫자1 AND 숫자2__ : 숫자2를 포함합니다.


&nbsp;
### 7) And

```sql
SELECT *
FROM movies
WHERE year BETWEEN 1990 AND 1999
	AND genre = 'romance';
```


&nbsp;
### 8) Or

```sql
SELECT *
FROM movies
WHERE year > 2014
	OR genre = 'action';
```


&nbsp;
### 9) Order By

```sql
SELECT *
FROM movies
WHERE imdb_rating > 8
ORDER BY name;
```

```sql
SELECT *
FROM movies
WHERE imdb_rating > 8
ORDER BY name DESC;
```

- `ORDER BY` 의 column은 반드시 `SELECT` 에서 표시되는 column일 필요가 없습니다.
- `ORDER BY` 는 (`WHERE`이 존재한다면) `WHERE` 다음에 옵니다.


&nbsp;
### 10) Limit

```sql
SELECT *
FROM movies
LIMIT 10;
```

```sql
SELECT *
FROM movies
ORDER BY imdb_rating DESC
LIMIT 3;
```


&nbsp;
### 11) Case (if-then logic)

- SQL의 if-then logic 입니다.
  - If the rating > 8, then it is Fantastic.
  - If the rating > 6, then it is Poorly Received.
  - Else, Avoid at All Costs.

```sql
SELECT name,
 CASE
  WHEN imdb_rating > 8 THEN 'Fantastic'
  WHEN imdb_rating > 6 THEN 'Poorly Received'
  ELSE 'Avoid at All Costs'
 END
FROM movies;
```

```sql
SELECT name,
 CASE
  WHEN imdb_rating > 8 THEN 'Fantastic'
  WHEN imdb_rating > 6 THEN 'Poorly Received'
  ELSE 'Avoid at All Costs'
 END AS 'Review'
FROM movies;
```

- `AS` : 길이가 긴 `CASE`문의 column 이름을 재정의합니다.


&nbsp;
## 4. Alter

```sql
ALTER TABLE celebs
ADD COLUMN twitter_handle TEXT;
```


&nbsp;
## 5. Update

```sql
UPDATE celebs
SET twitter_handle = '@taylorswift13'
WHERE id = 4;
```


&nbsp;
## 6. Delete

```sql
DELETE FROM celebs
WHERE twitter_handle IS NULL;
```


&nbsp;
## 7. Constraints

```sql
CREATE TABLE celebs (
	id INTEGER PRIMARY KEY,
    name TEXT UNIQUE,
    date_of_birth TEXT NOT NULL,
    date_of_death TEXT DEFAULT 'Not Applicable'
);
```


&nbsp;

출처 : [Codecademy] Learn SQL