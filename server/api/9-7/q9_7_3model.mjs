
const insertOne973 = async (user_id, year, month, day, name, score) => {
  const insertQuery = `
      INSERT INTO exams(
          user_id,
          year,
          month,
          day,
          name,
          score
      )
      VALUES(
          $1,
          $2,
          $3,
          $4,
          $5,
          $6
      )
      RETURNING *;
  `

  const result = await query(insertQuery,[user_id, year, month, day, name, score])
  return result.rows.at(0)
}

export const q973Model = {

    insertOne973,

}