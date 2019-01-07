import requests

res = requests.get('http://www.naver.com/')
# 에러 시 프로그램 중단 - res.raise_for_status()

if (res.status_code == requests.codes.ok):
  html = res.text
  print(html)