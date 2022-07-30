const { join } = require('path')

require('dotenv').config({
  path: join(__dirname, '.env')
})

module.exports = {
  schema: process.env.NEXT_PUBLIC_SANITY_GRAPHQL_URI
}
