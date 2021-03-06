import "reflect-metadata";
import { createConnection, Connection } from "typeorm";

let connection: Connection;

export async function connect()
{
    connection = await createConnection();
    await connection.synchronize(true);
}

export function close()
{
    connection && connection.close();
}

export { connection };