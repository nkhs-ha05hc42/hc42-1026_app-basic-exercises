const selectOne972 = async (id) => {
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

export const q972Model = {
    selectOne972,

}