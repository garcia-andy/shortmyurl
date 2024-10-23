import { createClient } from "@libsql/client/web";

export const connectToDb = async () => {
    const { TURSO_DATABASE_URL, TURSO_AUTH_TOKEN } = import.meta.env;
    
    return createClient({
      url: TURSO_DATABASE_URL,
      authToken: TURSO_AUTH_TOKEN,
    });
}

export const turso = await connectToDb();