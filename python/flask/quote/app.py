from flask import Flask, render_template
import requests
import json
# from bs4 import BeautifulSoup as bs

app = Flask(__name__)

@app.route('/index')
@app.route('/')
def index():
    res = requests.get('http://quotes.rest/qod.json')
    print(res)
    print(type(res))
    # print(quotes)
    # quote = quotes["quote"]
    # author = quotes["author"]
    # print(dic)
    return render_template('index.html')