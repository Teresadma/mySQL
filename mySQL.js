const mysql = require ("mysql2/promise");

async function main()
{
    try {
        let connection = await mysql.createConnection(
            {
                host: "localhost",
                user: "root",
                password: "administrador",
                database: "dia1"
            }
        );
        console.log("Conexion correcta")
        /////////////DIA 1////////////////
        // let sql = "ALTER TABLE direccion ADD COLUMN letra VARCHAR(45)";
        // let sql = "ALTER TABLE direccion DROP COLUMN letra";
        // let sql = "DROP TABLE direccion";
        // let sql = "UPDATE marks SET mark = 0";
        // let sql = "SELECT first_name, last_name FROM students";
        // let sql = "SELECT * FROM teachers";
        // let sql = "DELETE FROM marks WHERE date < '2013-06-07'";
        // let sql = "UPDATE marks SET mark = 5 WHERE mark < 5";

        /////////////DIA 2///////////////////
        // let sql = "SELECT AVG (mark) FROM marks WHERE subject_id = 1";
        // let sql = "SELECT COUNT (*) FROM students";
        // let sql = "DELETE FROM marks WHERE mark > 5 AND (date>='2022-01-01' AND date<='2022-12-31')";
        // let sql = "SELECT * FROM students WHERE year = 2023";
        // let sql = "SELECT subject_id, COUNT (*) AS teachers FROM subject_teacher GROUP BY subject_id";
        // let sql = "SELECT  student_id, mark FROM marks WHERE student_id BETWEEN 1 AND 20 OR (mark > 8 AND (date>='2022-01-01' AND date<='2022-12-31'))";
        // let sql = "SELECT AVG (mark) FROM marks WHERE date>='2023-01-01' AND date<='2023-12-31' GROUP BY subject_id";
        // let sql = "SELECT AVG (mark) FROM marks WHERE date>='2023-01-01' AND date<='2023-12-31' GROUP BY student_id";


        let [result] = await connection.query(sql);
        console.log(result)
    }
    catch(err)
    {
        console.log(err)
        await connection.end();
    }
}
main();

