const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();
mongoose.connect("mongodb://localhost:27017/wikiDB");

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

const articleSchema = mongoose.Schema({
    title: String,
    content: String,
});

const Article = mongoose.model("Article", articleSchema);

////////////////////////////////Request Targeting All Articles //////////////////////////////////

app.route("/articles")
.get( (req, res) => {
    Article.find({}, (err, articles) => {
        if(err) { res.send(err); return; }
        else {
            res.send(articles);
        }
    });
})
.post( (req, res) => {
    const article = new Article({
        title: req.body.title,
        content: req.body.content,
    });
    article.save((err) => {
        if(err) { res.send(err); return; }
        else {
            res.send("Sucessfully added a new article!");
        }
    })
})
.delete( (req, res) => {
    Article.deleteMany({}, (err) => {
        if(err) { res.send(err); return; }
        else {  
            res.send("Successfully deleted all articles!");
        }
    })
});





app.listen(3000, () => {
    console.log("Server running at port 3000");
});