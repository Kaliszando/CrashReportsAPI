# CrashReportsAPI

RESTful API created for managing crash report data in Montgomery.

## Run API localy

```
cd server
npm install
npm start
```

## Run API on Docker

```
cd server
docker build -t docker-crash-reports-api .
docker run -dp 9000:3000 docker-crash-reports-api
```

## HTTP requests

| URL             | request | functionality               |
| --------------- | ------- | --------------------------- |
| /reports/       | GET     | get all reports in a list   |
| /reports/{\_id} | GET     | get specific report by id   |
| /reports/       | POST    | submit new report           |
| /reports/{\_id} | DELETE  | remove report by id         |
| /reports/{\_id} | PUT     | update data in report by id |
