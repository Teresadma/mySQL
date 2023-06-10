const { response } = require("../app");
const {pool} = require("../database")


const getMediaAl = async (request,response) =>
{
    try {
        
        let sql = "SELECT AVG (mark) FROM marks WHERE student_id = '" + request.params.student_id + "'";
        console.log(sql);
        let [result] = await pool.query(sql);
        console.log(result);

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

const getAsignaturas = async (request,response) =>
{
    try
    {
        let sql = "SELECT title FROM subjects INNER JOIN marks ON (subjects.subject_id = marks.subject_id) WHERE student_id = '" + request.params.student_id + "'";
        console.log(sql);
        let [result] = await pool.query(sql);
        console.log(result);

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

const getAlumnos = async (request,response) =>
{
    try
    {
        let sql;
        sql = `SELECT first_name, last_name,title FROM subjects
        INNER JOIN subject_teacher ON (subjects.subject_id = subject_teacher.subject_id)
        INNER JOIN grupitos ON (subject_teacher.group_id = grupitos.group_id)
        INNER JOIN students ON (grupitos.group_id = students.group_id)`
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

const getImpartidasID = async (request,response) =>
{
    try
    {
        let sql = "SELECT title FROM subjects INNER JOIN subject_teacher ON (subjects.subject_id = subject_teacher.subject_id) INNER JOIN teachers ON (subject_teacher.teacher_id = teachers.teacher_id) WHERE teachers.teacher_id = '" + request.params.teacher_id + "'";
        let [result] = await pool.query(sql);
        
        if (result)
            response.send(result);
        else 
            response.send("-1");
    }
    catch
    {
        console.log(err);
    }
}

const getImpartidas = async (request,response) =>
{
    try
    {
        let sql;
        sql = `SELECT first_name, last_name,title FROM subjects
        INNER JOIN subject_teacher ON (subjects.subject_id = subject_teacher.subject_id)
        INNER JOIN teachers ON (subject_teacher.teacher_id = teachers.teacher_id)`
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
module.exports = {getMediaAl,getAsignaturas,getAlumnos, getImpartidasID,getImpartidas}
