const express = require('express');

const cors = require('cors');

require('dotenv').config();

const { graphqlHTTP } = require('express-graphql');

const schema = require('./schema/schema');

const app = express();

app.use(cors());

app.use(
  '/graphql',

  graphqlHTTP({
    schema,

    graphiql: process.env.NODE_ENV === 'development',
  })
);

const port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log(`Server running on port ${port}, http://localhost:${port}`)
);
