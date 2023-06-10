const {pool} = require("../database")

const getAlumnos = async (request, response) => 
{
    try
    {
        let sql;
        if (request.params.student_id == null)
            sql = "SELECT * FROM students";
        else
            sql = "SELECT * FROM students WHERE id=" + request.params.student_id;
        let [result] = await pool.query(sql);
        
        if (result)
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
        let sql = " INSERT INTO students (first_name,last_name,group_id,year) " + 
                  " VALUES ( '" + request.body.first_name + "','" +
                                 request.body.last_name + "','" + 
                                 request.body.group_id + "','" +
                                 request.body.year + "') ";
        console.log(sql);
        let [result] = await pool.query(sql);
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
        let sql = "UPDATE students SET first_name= ' " + request.body.first_name + 
                                     "',last_name='" + request.body.last_name + 
                                     "', group_id= '" + request.body.group_id + 
                                     "', year= '" + request.body.year + 
                                     "' WHERE student_id= '" + request.body.student_id + "'";
        console.log(sql);
        let [result] = await pool.query(sql);
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
        let sql = "DELETE FROM students WHERE student_id= '" + request.body.student_id + "'";
        console.log(sql);
        let [result] = await pool.query(sql);
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
