import { Router } from 'express'


export default Router().get('/', (req, res) => {
    res.render("index.njk", {
        name: req.query.name
    })
}).post("/", (req, res) => {
    res.redirect(`/hello?name=${req.body.firstname} ${req.body.lastname}`)
})

