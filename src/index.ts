import cors = require('cors')
import express = require('express')

const app = express()
app.use(cors())
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send({
    foo: 'bar'
  })
})

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log('Server is running on port ' + port)
})
