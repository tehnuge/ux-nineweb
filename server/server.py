import os
import sys
import csv
from flask import Flask, request, redirect, url_for
app = Flask(__name__, static_folder='../build', static_url_path='/')

sys.path.insert(0, os.path.dirname(__file__))

@app.route('/server', methods=['POST'])
def receive_form_data():
  data = request.get_json()
  write(data.values())
  return (data)

@app.route('/', defaults={'u_path': ''})
@app.route("/<string:u_path>")
@app.route('/<path:u_path>')
def catch_all(u_path):
  return app.send_static_file('index.html')


def write(row):
  with open('contacts.csv', mode='a') as contact_file:
    contact_writer = csv.writer(contact_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
    contact_writer.writerow(row)
