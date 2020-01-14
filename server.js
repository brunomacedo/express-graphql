import express from 'express'
import express_graphql from 'express-graphql'
import { buildSchema } from 'graphql'

// Init Express
const app = express()
const port = 4000

// GraphQL schema
const schema = buildSchema(`
  type Query {
    message: String
  }
`)

// Root resolver
const root = {
  message: () => 'Hello World!'
}

// Create an express server and a GraphQL endpoint
app.use('/graphql', express_graphql({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.listen(port, () => (
  console.log(`
    Express GraphQL Running On http://localhost:${port}/graphql?query=%7B%0A%20%20message%0A%7D
  `)
))
