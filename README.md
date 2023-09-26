# TodoList-with-authentication

dependencies required the backend setup
"dependencies": {
        "cors": "^2.8.5",
        "express": "^4.18.1",
        "mongoose": "^6.5.0",
        "nodemon": "^2.0.19"
      }

In order to run the backend file
follow the steps
   1 go into the backend folder  (terminal)
   2 write command in terminal.   nodemon index.js
  you will see "BE started at port 9002"
                "DB connected"

In order to start the frontend
in termal go to the react folder
    write command npm start

  1. login page will be displayed      (authentication using mongoDB)
  2. click on the register button and register your self
  3. once you registered, you will be able to login
  4. login using your email and password
  5. as you login a home page of TODO LIST will be displayed

TODO LIST
file location :- login-and-register-app > src > components > homepage > homepage.js
   in homepage.js file all the react codes are written for TODO LIST
   in homepage.css file the styling is given

TODO LIST functionalities
   create items
   delete items
   mark as read
Used local storage for storing the current data in the local storage so that the list does not got erased after refreshing.

  
   
