const express = require("express");

// logger middleware
const morgan = require("morgan");

// create an express app
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("Listening for requests on port " + port);
});

// register view engine
app.set("view engine", "ejs");

// use static files
app.use(express.static("public"));

// use logger middleware
app.use(morgan("dev"));

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "How to set up React project with Vite and Tailwindcss.",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      title: "How to learn Nodejs.",
      description:
        "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
  ];
  res.render("index", { title: "Blogs", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

// when none of those above matched, send 404 html page.
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
