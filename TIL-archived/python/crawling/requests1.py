import requests

# GET
res = requests.get('http://httpbin.org/get')
print(res.text)

# POST
dic = {"id": 1, "name": "kim", "age": 10}
res = requests.post('http://httpbin.org/post', data=dic)
print(res.text)

res = requests.put('http://httpbin.org/put')
res = requests.delete('http://httpbin.org/delete')  