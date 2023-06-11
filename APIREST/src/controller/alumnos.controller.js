const {pool} = require("../database")

const getAlumnos = async (request, response) => 
{
    try
    {
        let sql;
        let params = [];

        if (request.params.student_id == null)
            sql = "SELECT * FROM students";
        else{
            sql = "SELECT * FROM students WHERE student_id = ? ";
            params = [request.params.student_id]};
        let [result] = await pool.query(sql,params);
        
        if (result.length > 0)
            response.send(result);
        else 
            response.send("-1");
    }
    catch(err)
    {
        console.log(err);
    }
}

const postAlumnos = async (request,response) =>
{
    try {
        console.log(request.body)
        let params = [];
        let sql = "INSERT INTO students (first_name, last_name, group_id, year) VALUES (?, ?, ?, ?)";
        params = [request.body.first_name,
                  request.body.last_name, 
                  request.body.group_id,
                  request.body.year]
        console.log(sql);
        let [result] = await pool.query(sql,params);
        console.log(result);

        if (result.insertId)
            response.send(String(result.insertId));
        else 
            response.send("-1");
    }
    catch (error)
    {
        response.send(error)
    }
}

const putAlumnos = async (request, response) => 
{
    try
    {
        console.log(request.body)
        let params = [];
        let sql = "UPDATE students SET first_name = ?, last_name = ?, group_id = ?, year = ? WHERE student_id = ?";
        params = [request.body.first_name,
                request.body.last_name,
                request.body.group_id,
                   request.body.year,
                request.body.student_id]
        console.log(sql);
        let [result] = await pool.query(sql,params);
        if (result)
            response.send(result);
        else 
            response.send("-1");

    }
    catch (error)
    {
        response.send(error)
    }
} 
  
const deleteAlumno = async (request,response) =>
{
    try
    {
        console.log(request.body)
        let params = [];
        let sql = "DELETE FROM students WHERE student_id = ?";
        console.log(sql);
        params = [request.body.student_id]
        let [result] = await pool.query(sql,params);
        if (result)
            response.send(result);
        else 
            response.send("-1");

    }
    catch (error)
    {
        response.send(error)
    }
}


module.exports = {getAlumnos, postAlumnos, putAlumnos, deleteAlumno}
