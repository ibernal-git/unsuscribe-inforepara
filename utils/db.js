import mysql from 'serverless-mysql'

export const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    port: parseInt(process.env.MYSQL_PORT)
  }
})
console.log({
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  port: parseInt(process.env.MYSQL_PORT)
})

export async function query (q, values) {
  try {
    console.log(q, values)
    const results = await db.query(q, values)
    await db.end()
    console.log(`Los resultados: ${results}`)
    return results
  } catch (e) {
    console.log(e)
    throw Error(e.message)
  }
}
