import cors = require('cors')
import express = require('express')
import { Request, Response } from 'express'

const app = express()
app.use(cors())
const port = 3000

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world')
})

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log('Server is running on port ' + port)
})
