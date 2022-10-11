const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('THIS IS ABOUT!')
  })


  
app.get('/hello', (req, res) => {
    
    const data = fs.readFileSync('index.html');
    res.end(data.toString());


  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})