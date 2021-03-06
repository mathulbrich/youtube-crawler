import { Client } from "pg";

export const executeUpdate = async(command: (client: Client) => Promise<void>) => {
    const client = new Client({ssl: true});
    try {
        await client.connect();
        await command(client);
    } finally {
        await client.end();
    }
};