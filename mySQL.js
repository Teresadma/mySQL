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
        let sql = "";
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

