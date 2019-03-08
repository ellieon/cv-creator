import { Router } from 'express'


export default Router().get('/hello', (req, res) => {
    res.render("hello.njk", { name: req.query.name })
})

