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
        // let sql = "ALTER TABLE direccion ADD COLUMN letra VARCHAR(45)";
        // let sql = "ALTER TABLE direccion DROP COLUMN letra";
        // let sql = "DROP TABLE direccion";
        // let sql = "UPDATE marks SET mark = 0";
        // let sql = "SELECT first_name, last_name FROM students";
        // let sql = "SELECT * FROM teachers";
        // let sql = "DELETE FROM marks WHERE date < '2013-06-07'";
        // let sql = "UPDATE marks SET mark = 5 WHERE mark < 5";
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

