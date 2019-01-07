import requests
import json

url = 'http://www.naver.com/'
res = requests.get(url).text
parsed_data = json.loads(res)
print(parsed_data)