# CrashReportsAPI
RESTful API created for managing crash report data in Montgomery.

## Run API localy
<<<<<<< HEAD
'''
=======

```
cd server
npm install
>>>>>>> 7d282bfe68a2ec0d77410b8bb4a6527c698391c1
npm start
'''

## Run API on Docker
<<<<<<< HEAD
'''
docker build -t docker-crash-reports-api
=======

```
cd server
docker build -t docker-crash-reports-api .
>>>>>>> 7d282bfe68a2ec0d77410b8bb4a6527c698391c1
docker run -dp 9000:3000 docker-crash-reports-api
'''

## HTTP requests
URL|request|functionality
--------------|--------------|--------------
/reports/|GET|get all reports in a list
/reports/{_id}|GET|get specific report by id
/reports/|POST|submit new report
/reports/{_id}|DELETE|remove report by id
/reports/{_id}|PUT|update data in report by id


