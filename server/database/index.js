const mysql = require('mysql2/promise')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {});
mongoose.connection.once("open", () => console.log("MongoDB connected!"));

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_NAME,
  waitForConnections: true,
  connectionLimit: 20,
  queueLimit: 0,
})

async function GetDatabaseConnection() {
  return await pool.getConnection()
}

async function DatabaseQuery(query, params) {
  const connection = await GetDatabaseConnection()
  const result = await connection.query(query, params)
  connection.release()

  return result[0]
}

module.exports = {
  pool,
  DatabaseQuery,
  GetDatabaseConnection,
}