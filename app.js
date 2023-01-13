const express = require("express");

// create an express app
const app = express();
const port = 3000;

// register view engine
app.set("view engine", "ejs");

app.listen(port, () => {
  console.log("Listening for requests on port " + port);
});

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs", (req, res) => {
  res.render("blogs", { title: "Blogs" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

// when none of those above matched, send 404 html page.
app.use((req, res) => {
  res.status(404).render("404");
});
