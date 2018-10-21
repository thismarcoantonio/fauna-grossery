import express from 'express'
const app = express()

app.get('/', (req, res) => res.send('hello world'))

app.listen(9000, () => console.log('running at port 9000'))
