# EmployeeCSV
Full stack application for sorcery academy
that stores CSV files contents.
built using react.js and spring boot.
registry is the backend folder.
frontend it the frontend folder.
Provided 3 types of sample files.

Spring boot dependencies:
spring-boot-starter-web
spring-boot-devtools
com.h2database:h2
mybatis-spring-boot-starter:3.0.0
org.projectlombok:lombok


tools:
JDK 17
node v14.20.1
gradle tool




To start the application 
Open up your IDE of choice (eclipse or intelij)
wait for application to configure
navigate to 
```
registry/src/main/java/com/sorcery/registry/EmployeeCsvApplication.java
```
right click and press 
```
"Run EmployeeCsvApplication.java"
```
then
navigate to 
open up the console in the folder and run 
```
npm install
```
wait for it to install all modules
after completion run
```
npm start
```
Proceed to [localhost:3000](http://localhost:3000/) in the web and thats it.


Created by Mykolas Sanda


Implementation:
Used Spring Boot as the backend server with an in-memory H2 database and MyBatis tool for SQL commands. This choice allowed me to ensure secure and efficient data storage and retrieval. For the frontend, I used React.js, and specifically utilized the useState and useEffect hooks for handling state updates and fetching data respectively. Additionally, I utilized the fetch method to handle DELETE, POST, and GET requests to and from the database, which made the communication between the frontend and backend seamless.
