2019년 2월 14일 목요일

# Django 가상환경 설정과 주요 명령어

## pyenv, virtualenv 설치

```bash
> git clone https://github.com/pyenv/pyenv.git ~/.pyenv
> echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
> echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
> echo -e 'if command -v pyenv 1>/dev/null 2>&1; then\n  eval "$(pyenv init -)"\nfi' >> ~/.bashrc
> exec "$SHELL"
> git clone https://github.com/pyenv/pyenv-virtualenv.git $(pyenv root)/plugins/pyenv-virtualenv
> echo 'eval "$(pyenv virtualenv-init -)"' >> ~/.bashrc
> exec "$SHELL"
```

## 가상환경 생성 및 설정

```bash
> mkdir TEST
> cd TEST
> pyenv virtualenv 3.6.7 <VENV_NAME>
> pyenv local <VENV_NAME>
> pip install django
```

## Project 생성

```bash
> django-admin startproject <PROJECT_NAME> .
```

## App 생성

```bash
> python manage.py startapp <APP_NAME>
```

## Server 실행

```bash
> python manage.py runserver $IP:$PORT
```

## Migrations

```bash
> python manage.py makemigrations	# Table 생성
> python manage.py sqlmigrate articles 0001		# SQL로 어떻게 만드는지 보여줌
> python manage.py migrate			# DB에 적용
```

## Shell 실행

```bash
> python manage.py shell
```

```shell
# python console
> from articles.models import Article
> a = Article(title="와 여기서도 글이 써진다!!", content="장고 짱짱맨")
> a.save()
> Article.objects.all()
<QuerySet [<Article: Article object (1)>, <Article: Article object (2)>]>
> Article.objects.first()
<Article: 제목: happy, 내용: hacking>
```

> - Flask : Article.query.all()
> - Django : Article.objects.all()

## Admin 설정

```bash
> python manage.py createsuperuser
```
