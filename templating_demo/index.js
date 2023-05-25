const express = require("express")
const app = express();
const path = require("path")
const redditData =  require("./data.json")

app.set('view engine', 'ejs'); //note: express requires ejs automatically
app.set('views', path.join(__dirname, '/views')) //note: allows you to start the app from outside the parent directory of views by explicity setting the path to the views directory

app.use(express.static(path.join(__dirname, 'public'))) //note: the "/" is added automatically in front of "public"

app.get('/', (req, res) => {
    res.render("home") //note: auto looks in the views folder, don't need to add .ejs
})
app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1; 
    res.render("random", {num}) //note: num = num:num, num is passed into the random.ejs file
})

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    const data = redditData[subreddit];   
    if(data){
        res.render('subreddit', { ...data }); //note: "..." spreads the data (or in other words, let's you access the data with needing "data." at the beginning)
    }
     else {
        res.render('notfound', { subreddit })
    }
})



app.listen(3000, () => {
    console.log("Listening on port 3000.")
})
