import { query } from "../../db/manager.mjs"

const deleteOne975 = async (id) => { 
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

export const q975Model = {
    deleteOne975,
}