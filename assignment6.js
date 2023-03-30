// https://expressjs.com/en/guide/routing.html


// REQUIRES
const express = require("express");
const app = express();
app.use(express.json());
const fs = require("fs");

// just like a simple web server like Apache web server
// we are mapping file system paths to the app's virtual paths
app.use("/js", express.static("./public/js"));
app.use("/css", express.static("./public/css"));
app.use("/img", express.static("./public/img"));

//Call back function
app.get("/", function (req, res) {
    //console.log(process.env);
    // retrieve and send an HTML document from the file system
    console.log("page hit");
    let doc = fs.readFileSync("./app/html/index.html", "utf8");
    res.send(doc);
});


app.get("/faculty", function (req, res) {

    let doc = fs.readFileSync("./app/data/faculty.js", "utf8");
    res.setHeader("Content-Type", "application/json");
    // just send the text stream
    res.send(doc);
});

app.get("/requirement", function (req, res) {

    let doc = fs.readFileSync("./app/data/requirement.js", "utf8");
    res.setHeader("Content-Type", "application/json");
    // just send the text stream
    res.send(doc);
});

app.get("/cost", function (req, res) {

    let doc = fs.readFileSync("./app/data/cost.js", "utf8");
    res.setHeader("Content-Type", "application/json");
    // just send the text stream
    res.send(doc);
});

app.get("/course", function (req, res) {

    let formatOfResponse = req.query["format"];

    // e.g.,: http://localhost:8000/weekdays?format=html
    // e.g.,: http://localhost:8000/weekdays?format=json
    if (formatOfResponse == "html") {
        // MIME type
        res.setHeader("Content-Type", "text/html");
        res.send(fs.readFileSync("./app/data/course.html", "utf8"));

    } else {
        // just send JSON message
        res.send({ status: "fail", msg: "Wrong format!" });
    }
});

app.get("/user_table", function (req, res) {

    const mysql = require('mysql');

    // Create a connection to the database
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'assignment6'
    });

    // Connect to the database
    connection.connect();

    // Query the user table
    connection.query('SELECT * FROM A01351217_user', function (error, users, fields) {
        if (error) {
            // in production, you'd really want to send an email to admin
            // or in the very least, log it. But for now, just console
            console.log(error);
        } else {
            // Create an HTML table to display the results
            let table = "<table><tr><th>ID</th><th>User Name</th><th>First Name</th><th>Last Name</th><th>Email</th><th>Password</th></tr>";
            for (let i = 0; i < users.length; i++) {
                table += "<tr><td>" + users[i].id + "</td><td>" + users[i].username + "</td><td>"
                    + users[i].first_name + "</td><td>" + users[i].last_name + "</td><td>"
                    + users[i].email + "</td><td>" + users[i].password + "</td></tr>";
            }
            table += "</table>";
            // Send the HTML table as the response
            res.send(table);
        }
    });

    // Close the database connection
    connection.end();
});

app.get("/user_timeline", function (req, res) {

    const mysql = require('mysql');

    // Create a connection to the database
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'assignment6'
    });

    // Connect to the database
    connection.connect();

    // Query the user table
    connection.query('SELECT * FROM A01351217_user_timeline WHERE A01351217_user_timeline.user_id = 1', function (error, users, fields) {
        if (error) {
            // in production, you'd really want to send an email to admin
            // or in the very least, log it. But for now, just console
            console.log(error);
        } else {
            // Create an HTML table to display the results
            let table = "<table><tr><th>Post ID</th><th>User ID</th><th>Post Date</th><th>Post Text</th><th>Post time</th><th>Post Views</th></tr>";
            for (let i = 0; i < users.length; i++) {
                table += "<tr><td>" + users[i].id + "</td><td>" + users[i].user_id + "</td><td>"
                    + users[i].post_date + "</td><td>" + users[i].post_text + "</td><td>"
                    + users[i].post_time + "</td><td>" + users[i].post_views + "</td></tr>";
            }
            table += "</table>";
            // Send the HTML table as the response
            res.send(table);
        }
        // Close the database connection
        connection.end();
    });
});

app.get("/user_timeline2", function (req, res) {

    const mysql = require('mysql');

    // Create a connection to the database
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'assignment6'
    });

    // Connect to the database
    connection.connect();

    // Query the user table
    connection.query('SELECT * FROM A01351217_user_timeline WHERE A01351217_user_timeline.user_id = 2', function (error, users, fields) {
        if (error) {
            // in production, you'd really want to send an email to admin
            // or in the very least, log it. But for now, just console
            console.log(error);
        } else {
            // Create an HTML table to display the results
            let table = "<table><tr><th>Post ID</th><th>User ID</th><th>Post Date</th><th>Post Text</th><th>Post time</th><th>Post Views</th></tr>";
            for (let i = 0; i < users.length; i++) {
                table += "<tr><td>" + users[i].id + "</td><td>" + users[i].user_id + "</td><td>"
                    + users[i].post_date + "</td><td>" + users[i].post_text + "</td><td>"
                    + users[i].post_time + "</td><td>" + users[i].post_views + "</td></tr>";
            }
            table += "</table>";
            // Send the HTML table as the response
            res.send(table);
        }
        // Close the database connection
        connection.end();
    });
});

app.get("/user_timeline3", function (req, res) {

    const mysql = require('mysql');

    // Create a connection to the database
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'assignment6'
    });

    // Connect to the database
    connection.connect();

    // Query the user table
    connection.query('SELECT * FROM A01351217_user_timeline WHERE A01351217_user_timeline.user_id = 3', function (error, users, fields) {
        if (error) {
            // in production, you'd really want to send an email to admin
            // or in the very least, log it. But for now, just console
            console.log(error);
        } else {
            // Create an HTML table to display the results
            let table = "<table><tr><th>Post ID</th><th>User ID</th><th>Post Date</th><th>Post Text</th><th>Post time</th><th>Post Views</th></tr>";
            for (let i = 0; i < users.length; i++) {
                table += "<tr><td>" + users[i].id + "</td><td>" + users[i].user_id + "</td><td>"
                    + users[i].post_date + "</td><td>" + users[i].post_text + "</td><td>"
                    + users[i].post_time + "</td><td>" + users[i].post_views + "</td></tr>";
            }
            table += "</table>";
            // Send the HTML table as the response
            res.send(table);
        }
        // Close the database connection
        connection.end();
    });
});

// RUN SERVER
async function init() {
    const mysql = require("mysql2/promise");

    // Create a connection to the database server
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
    });

    // Create the assignment6 database if it doesn't exist
    await connection.query("CREATE DATABASE IF NOT EXISTS assignment6");

    // Switch to the assignment6 database
    await connection.query("USE assignment6");

    // Create the A01351217_user table if it doesn't exist
    await connection.query(`CREATE TABLE IF NOT EXISTS A01351217_user (
        id int NOT NULL AUTO_INCREMENT,
        username varchar(30),
        first_name varchar(30),
        last_name varchar(30),
        email varchar(30),
        password varchar(30),
        PRIMARY KEY (id)
    )`);

    // Create the A01351217_user_timeline table if it doesn't exist
    await connection.query(`CREATE TABLE IF NOT EXISTS A01351217_user_timeline (
        id int NOT NULL AUTO_INCREMENT,
        user_id int,
        post_date date,
        post_text varchar(255),
        post_time time,
        post_views int,
        PRIMARY KEY (id),
        FOREIGN KEY (user_id) REFERENCES A01351217_user(id)
    )`);

    await connection.end();

    console.log("Listening on port " + port + "!");
}


// for page not found (i.e., 404)
app.use(function (req, res, next) {
    // this could be a separate file too - but you'd have to make sure that you have the path
    // correct, otherewise, you'd get a 404 on the 404 (actually a 500 on the 404)
    res.status(404).send("<html><head><title>Page not found!</title></head><body><p>Nothing here.</p></body></html>");
});


// RUN SERVER
let port = 8000;
app.listen(port, init);