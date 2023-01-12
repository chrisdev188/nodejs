const express = require("express");

// create an express app
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("Listening for requests on port " + port);
});

app.get("/", (req, res) => {
  res.sendFile("./views/home.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.get("/blogs", (req, res) => {
  res.sendFile("./views/blogs.html", { root: __dirname });
});

// when none of those above matched, send 404 html page.
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
