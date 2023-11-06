const express = require("express"); 
const app = express();
app.use(express.static("public"));

app.get("/",(req, res) => {
    res.sendFile(__dirname + "/index.html")
});

app.get("/api/members", (req, res) => {
    const members = [];
    members [0]={
    name:"Ayden Wells Mathews",
    title:"Daughter of James and Jessica",
    currentAge:"19",
    birthday:"November 17th, 2003", 
    img:"ayden.jpg",
};
members [1]={
    name:"Jessica Rose Matthews",
    title:"Mom of Tristin, Ayden, and Riley, & Married to Aubrey, & Ex-wife to James",
    currentAge:"44",
    birthday:"November 29th, 1978", 
    img:"jessica.jpg",
};
members [2]={
    name:"James Downing Mathews III",
    title:"Dad of Tristin, and Ayden & Ex-husband to Jessica",
    currentAge:"45",
    birthday:"March 17th, 1978", 
    img:"james.jpg",
};
members [3]={
    name:"Aubrey Adam Matthews",
    title:"Step-dad of Tristin, and Ayden, Dad of Riley, & Husband to Jessica",
    currentAge:"45",
    birthday:"June 23rd, 1978", 
    img:"aubrey.jpg",
};
members [4]={
    name:"Tristin James Bradley Mathews",
    title:"Son of James and Jessica",
    currentAge:"24",
    birthday:"December 18th, 1998", 
    img:"tristin.jpg",
};
members [5]={
    name:"Riley Adam Matthews",
    title:"Son of Aubrey and Jessica",
    currentAge:"14",
    birthday:"January 4th, 2009", 
    img:"riley.jpg",
};
    res.json(members);
});

app.listen(3000, () => {
    console.log("I'm listening");
});