const express = require("express");
const server = express();
const hbs = require("hbs");
const path = require("path");
const port = 7641;

server.use(express.static(path.join(__dirname, "public")));
server.set("views", path.join(__dirname, "views"));
server.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "./views/partials"));


server.get(["/", "/home"], (req,res) => {
    res.render("home");
})

server.get("/about", (req, res) => {
    res.render("about");
})

server.get("/gallery", (req, res) => {
    const destinations = {destinations: [{
        place: "Manila",
        image: "/images/wts-manila.jpg"
    },
    {
        place: "Bohol",
        image: "/images/bohol.png"
    },
    {
        place: "Boracay",
        image: "/images/boracay.png"
    },
    {
        place: "Baguio",
        image: "/images/baguio.png"
    },
    {
        place: "Cagayan",
        image: "/images/Cagayan-boat.jpg"
    },
    {
        place: "Camiguin",
        image: "/images/camiguin.png"
    },
    {
        place: "Cebu",
        image: "/images/cebu.png"
    },
    {
        place: "Davao City",
        image: "/images/davao.png"
    },
    {
        place: "Ilocos Norte",
        image: "/images/ilocos.png"
    },
    {
        place: "Negros Oriental",
        image: "/images/negros-oriental.png"
    },
    {
        place: "Puerto Princesa",
        image: "/images/puerto-princesa.png"
    },
    {
        place: "Zambales",
        image: "/images/zambales.png"
    }
    ]}
    res.render("gallery", destinations);
})

// kickstart
server.listen(port, () => {
    console.log(`Your server is running @ http://localhost:${port}`);
})