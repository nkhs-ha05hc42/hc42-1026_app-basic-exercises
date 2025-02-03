import { query } from "../../db/manager.mjs" 
 
const insert1 = async (name, age) => { 
  const insertQuery = ` 
    INSERT INTO exams( 
      name, 
      age, 
      is_disabled 
    ) 
    VALUES( 
      $1, 
      $2, 
      true 
    ) 
    RETURNING *; 
  ` 
  const result = await query(insertQuery, [name, age]) 
  return result.rows.at(0) 
} 

const selectA = async () => { 
    const results = await query(` 
      SELECT 
        * 
      FROM 
        exams; 
    `) 
    return results.rows 
  } 
   
  const select1 = async (id) => { 
    const selectQuery = ` 
    SELECT 
      * 
    FROM 
      exams 
    WHERE 
      id = $1; 
    ` 
    const results = await query(selectQuery, [id]) 
    return results.rows.at(0) 
  } 
 
  const update1 = async (id, postcode, address) => { 
    const updateQuery = ` 
      UPDATE 
        exams 
      SET 
        postcode = $2, 
        address = $3 
      WHERE 
        id = $1 
      RETURNING *; 
    ` 
    const result = await query(updateQuery, [id, postcode, address]) 
    return result.rows.at(0) 
  } 

  const delete1 = async (id) => { 
    const deleteQuery = ` 
      DELETE FROM 
        exams 
      WHERE 
        id = $1 
      RETURNING *; 
    ` 
    const result = await query(deleteQuery, [id]) 
    return result.rows.at(0) 
  } 

export const Model = { 
  insert1,
  selectA,
  select1,
  update1, 
  delete1, 
} 