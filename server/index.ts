import express, { Request, Response } from 'express'

const app = express()

app.get('/api/hello', (req: Request, res: Response) => {
  res.json({ hello: 'world' })
})

export const handler = app
