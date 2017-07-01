module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/npi_db'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/npi_db'
  },
  production{
    client:'pg',
    connection: process.env.DATABASE_URL
  }
};
