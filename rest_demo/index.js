const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid'); //note: ": uuid" renames "v4" to "uuid"
const methodOverride = require('method-override')

 
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended:true }))
app.use(methodOverride('_method'))

app.get('/tacos', (req,res) => {
    res.send("/GET tacos response")
}) 

app.post('/tacos', (req,res) => {
    console.log(req.body)
    res.send("/POST tacos response")
})

let comments = [
    { 
        id: uuid(),
        username: "Todd",
        comment: "Todd's comment"

    },
    { 
        id: uuid(),
        username: "Mike",
        comment: "Mike's comment"

    },
    { 
        id: uuid(),
        username: "Alice",
        comment: "Alice's comment"

    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

app.get('/comments/new', (req, res) => { // retrieves the form that allows one to submit a new comment 
    res.render('comments/new')
})
app.post('/comments', (req, res) => {  
    // console.log(req.body)
    const {username, comment} = req.body
    comments.push({username, comment, id: uuid() })
    //res.send('It Worked!') 
    res.redirect('/comments') // redirects to /comments, does a GET by default
})
app.get('/comments/:id', (req, res) => {
    const { id } = req.params
    const comment = comments.find(c => c.id === id)
    res.render('comments/show', { comment })

})
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params
    const comment = comments.find(c => c.id === id)
    res.render('comments/edit', { comment })

})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params
    const newComment = req.body.comment
    const currentComment = comments.find(c => c.id === id)
    currentComment.comment = newComment
    res.redirect('/comments')
})

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params
    comments = comments.filter(c => c.id !== id) //returns a new array so you need to reassign comments variable
    res.redirect('/comments') 

})
app.listen(3000, () => {
    console.log("Listening on port 3000.")
})