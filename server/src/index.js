import express from 'express'
import db from './models'
const app = express()

app.get('/', (req, res) => res.send('hello world'))

app.listen(process.env.PORT || 3000, () => {
  db.sequelize
    .authenticate()
    .then(() => console.log(`app running on port ${process.env.PORT || 3000}`))
    .catch(err => console.log(`error on db: ${err}`))
})
