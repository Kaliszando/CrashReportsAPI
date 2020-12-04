import requests
import csv

url = 'http://localhost:3000/reports'

with open('crash_reports.csv') as file:
    csvFile = csv.DictReader(file)

    for line in csvFile:
        r = requests.post(url, json=line)
