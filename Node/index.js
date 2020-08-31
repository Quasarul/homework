const express = require("express");
const skills = require("./custom_modules/skills");
const path = require("path");
const experience = require("./custom_modules/experience");
const studies = require("./custom_modules/studies");
const about = require("./custom_modules/about");
const projects = require("./custom_modules/projects");
// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;

// Create a new express app
const app = express();

// App main index file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/skills", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
        <title>Node|Express app</title>
    </head>
    <body>
        <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="/skills">Skills</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/experience">Experience</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/studies">Studies</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
              </li>
            </ul>
          </nav>
        <div class="container">
            <h1>Skills page</h1>
            <div id="main">
                <h3 class="text-primary">The model</h3>
                <code class='text-danger'><strong>${JSON.stringify(
                  skills
                )}</strong></code>
                <hr />
                <h3 class="text-primary">The data</h3>
                ${skills
                  .map((skill) => {
                    return `<ul class=""list-group"">
                    <li class="list-group-item">Name: ${skill.name}</li>
                    <li class="list-group-item">Value:${skill.value}</li>
                    </ul>`;
                  })
                  .join("")}
            </div>
        </div>
    </body>
    </html>
    `);
});

app.get("/experience", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
        <title>Node|Express app</title>
    </head>
    <body>
        <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/skills">Skills</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="/experience">Experience</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/studies">Studies</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
              </li>
            </ul>
          </nav>
        <div class="container">
            <h1>Experience page</h1>
            <div id="main">
                <h3 class="text-primary">The model</h3>
                <code class='text-danger'><strong>${JSON.stringify(
                  experience
                )}</strong></code>
                <hr />
                <h3 class="text-primary">The data</h3>
                ${experience
                  .map((experience) => {
                    return `<ul class=""list-group"">
                    <li class="list-group-item">Company : ${experience.companyName}</li>
                    <li class="list-group-item">Value:${experience.startDate}</li>
                    <li class="list-group-item">Value:${experience.endDate}</li>
                    </ul>`;
                  })
                  .join("")}
            </div>
        </div>
    </body>
    </html>
    `);
});

app.get("/studies", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
        <title>Node|Express app</title>
    </head>
    <body>
        <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/skills">Skills</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/experience">Experience</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="/studies">Studies</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
              </li>
            </ul>
          </nav>
        <div class="container">
            <h1>Studies page</h1>
            <div id="main">
                <h3 class="text-primary">The model</h3>
                <code class='text-danger'><strong>${JSON.stringify(
                  studies
                )}</strong></code>
                <hr />
                <h3 class="text-primary">The data</h3>
                ${studies
                  .map((study) => {
                    return `<ul class=""list-group"">
                    <li class="list-group-item">Institution Name : ${study.institutionName}</li>
                    <li class="list-group-item">Period:${study.period}</li>
                    <li class="list-group-item">Type:${study.type}</li>
                    </ul>`;
                  })
                  .join("")}
            </div>
        </div>
    </body>
    </html>
    `);
});

app.get("/about", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
        <title>Node|Express app</title>
    </head>
    <body>
        <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/skills">Skills</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/experience">Experience</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/studies">Studies</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="/about">About</a>
              </li>
            </ul>
          </nav>
        <div class="container">
            <h1>About page</h1>
            <div id="main">
                <h3 class="text-primary">The model</h3>
                <code class='text-danger'><strong>${JSON.stringify(
                  about
                )}</strong></code>
                <hr />
                <h3 class="text-primary">The data</h3>
                ${about
                  .map((info) => {
                    return `<ul class=""list-group"">
                    <li class="list-group-item">First Name : ${info.firstName}</li>
                    <li class="list-group-item">Period:${info.lastName}</li>
                    <li class="list-group-item">Type:${info.age}</li>
                    <li class="list-group-item">Type:${info.gender}</li>
                    <li class="list-group-item">Type:${info.address}</li>
                    <li class="list-group-item">Type:${info.phone}</li>
                    <li class="list-group-item">Type:${info.email}</li>
                    </ul>`;
                  })
                  .join("")}
            </div>
        </div>
    </body>
    </html>
    `);
});

app.get("/projects/:id", (req, res) => {
  let id = req.params.id;
  res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
            <!-- Latest compiled and minified CSS -->
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
            <title>Node|Express app</title>
        </head>
        <body>
            <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" href="/">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/skills">Skills</a>
                  </li>
                  <li class="nav-item active">
                    <a class="nav-link" href="/experience">Experience</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link href="/studies">Studies</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link href="/about">About</a>
                  </li>
                </ul>
              </nav>
            <div class="container">
                <h1>Projects page</h1>
                <div id="main">
                <h3 class="text-primary">The model</h3>
                <code class='text-danger'><strong>${JSON.stringify(
                  projects.filter((project) => project.id === parseInt(id))
                )}</strong></code>
                <hr />
                <h3 class="text-primary">The data</h3>
                ${projects
                  .map((project) => {
                    if (project.id == id) {
                      return `<ul class="list-group">
                            <li class="list-group-item">App name :${project.name}</li>
                            <li class="list-group-item">Description:${project.description}</li>
                            <li class="list-group-item">Image:${project.imageUrl}</li>
                            </ul>`;
                    }
                  })
                  .join("")}
                  
                </div>
            </div>
        </body>
        </html>
        `);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server started ... "));
