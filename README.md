# DESELECT ASSIGNMENT

MERN application where one can view and add students.

## Installation

### Prerequisite

The project runs on nodejs & MongoDB so make sure you have both installed before installation and running of the project.

On your terminal

```
git clone https://github.com/Kimkykie/student-deselect.git
cd student-deselect
```

You will need to set 2 environmental variables, `DATABASE` and `PORT` in our server application.

```bash
cd server/
```

Rename `variable.sample.env` to `variables.env`

PORT is 5555 by default
For the DATABASE `mongodb://user:password@localhost:27017/student_deselect`, replace **user** and **password** with your mongo username and password.

### Client

To run our client application. While in the student-deselect folder

```
cd client
npm install
```

Once all dependencies are installed run `npm start` and the client will run on localhost, port 3000

http://localhost:3000/

### Server

To run our server application. While in the student-deselect folder

```
cd server
npm install
```

Once all dependencies are installed run `npm start` and the client will run on localhost, port 5555

The available GET routes are

http://localhost:5555/init - To seed our initial 9 students

http://localhost:5555/students/all - To all our students (Seeded + New)
