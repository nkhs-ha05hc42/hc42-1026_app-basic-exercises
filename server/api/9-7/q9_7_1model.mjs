import { query } from "../../db/manager.mjs"


const selectAll971 = async () => {  
    const results = await query(`  
        SELECT     
          *    
        FROM     
          exams;  
    `)  
    return results.rows 
}  

export const q971Model = {
    selectAll971
}