const mysql = require('mysql2')

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10,
})

async function DatabaseQuery(query, params) {
  const connection = pool.getConnection()
  const result = await connection.query(query, params)
  connection.release()

  return result[0]
}

module.exports = DatabaseQuery