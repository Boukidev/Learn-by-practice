import { readFile } from "node:fs/promises";

export default defineEventHandler(async (event) => {
    try {
        const filePath = "server/data/tasks.json";
        const data = await readFile(filePath, { encoding: "utf8" });

        return JSON.parse(data);
    } catch (err: any) {
        throw new Error("Failed to read file: " + err.message);
    }
});
