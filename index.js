const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const s = {
  "Kimsangjun": 135,
  "Parksunjun": 516,
  "Kr": 181818,
  "Test": 9999
}

app.get('/ok', (req, res) => {
  res.json({
    "Scores": s,
    "code": 200,
    "message": "OK"
  })
})

app.get('/leaderboard', (req, res) => {
  res.json({
    "Scores": s,
    "code": 200,
    "message": "OK"
  })
})

app.post('/leaderboard', (req, res) => {
  console.log(req.body)
  res.status(201).json({
    "code": 201,
    "message": "Created"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
