2019년 2월 21일 목요일

# Django ORM

## `__repr__` 과 `__str__`을 쓰는 이유

## `def __repr__(self)`

```python
# models.py
def __repr__(self):
    return f'제목: {self.title}, 내용: {self.content}'
```

```bash
# python console
> Article.objects.all()
<QuerySet [제목: happy, 내용: hacking, 제목: 와 여기서도 글이 써진다!!, 내용: 장고 짱짱맨]
> Article.objects.first()
제목: happy, 내용: hacking
```

```bash
> for a in Article.objects.all():
>		print(a)
Article object (1)
Article object (2)
```

```bash
> for a in Article.objects.all()
>		a
제목: happy, 내용: hacking
제목: 와 여기서도 글이 써진다!!, 내용: 장고 짱짱맨
```

## `def __str__(self)`

```python
# models.py
def __str__(self):
    return f'제목: {self.title}, 내용: {self.content}'
```

```bash
# python console
> for a in Article.objects.all():
>		print(a)
제목: happy, 내용: hacking
제목: 와 여기서도 글이 써진다!!, 내용: 장고 짱짱맨
```

# ORM Query 조작

## 1. Create

```bash
# python console
# method 1
> a = Article(title="happy", content="hacking")
> a.save()
```

```bash
# method 2
> Article.objects.create(title="hey!", content="create")
```

## 2. Read

### Select

```bash
# python console
> Article.objects.filter(title="happy").all()
> Article.objects.filter(title="happy").first()
```

> - Flask : Article.query.filter_by(title="happy").all()
>
> - Django : Article.objects.filter(title="happy").all()

### Select By

```bash
# python console
> Article.objects.get(pk=1) 			# primary key
> Article.objects.get(id=1) 			# column : id
> Article.objects.get(title="happy")	# column : title
> Article.objects.filter(title="happy").first()	# get(title="happy")와 동일
```

### Count

```bash
# python console
> Article.objects.filter(content="hacking").count()
> len(Article.objects.all())
2
> Article.objects.all().count()
2
```

### order_by

```python
# python console
> Article.objects.order_by('id').all()	# 오름차순
> Article.objects.order_by('-id').all()	# 내림차순
```

## 3. Update

```bash
# python console
> a = Article.objects.get(id=1)
> a.content = "Thursday"
> a.save()
> Article.objects.get(id=1)
제목: happy, 내용: Thursday
```

## 4. Delete

```bash
# python console
> a = Article.objects.get(id=2)
> a.delete()
```

# Django CRUD

## 패키지 설치

```bash
> pip install django ipython django_extensions
```

## DB 실행

```bash
> sqlite3 db.sqlite3		# sqlite3으로 실행
> python manage.py dbshell	# DB shell 자동 실행(sqlite3)
```

```
> python manage.py shell
```

`ipython`, `django_extensions` 패키지 덕분에 주피터 노트북과 같은 환경에서 파이썬 콘솔을 사용할 수 있다.

```bash
> python manage.py shell_plus
```

장고에 들어간 모든 환경을 autoload 해준다. `from articles.models import Article` 과 같은 작업을 하지 않아도 된다.

# Django ORM Relationships

```bash
> Comment.objects.filter(article_id=1).all
> Article.objects.first().comment_set.all()
```

```bash
> Comment.objects.first().article
> Article.objects.all().get(pk=Comment.objects.first().article_id)
```
