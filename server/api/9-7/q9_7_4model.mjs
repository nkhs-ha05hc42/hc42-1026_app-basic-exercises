const updateOne974 = async (id,user_id, year,month,day,name,score) => { 
  const updateQuery = ` 
      UPDATE
          exams  
      SET         
          user_id = $2,
          year = $3,
          month = $4,
          day = $5,
          name = $6,
          score = $7
      WHERE    
         id = $1     
         RETURNING *; 
           `   
          const result = await query(updateQuery, [id,user_id, year,month,day,name,score])  
          return result.rows.at(0)
} 

export const q974Model = {
    updateOne974,

}