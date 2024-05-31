import type { Task } from "@/types/task";
import { readFile, writeFile } from "node:fs/promises";

export default defineEventHandler(async (event) => {
    try {
        const { title, description } = await readBody(event);

        const filePath = "server/data/tasks.json";
        const data = await readFile(filePath, { encoding: "utf8" });

        const tasks: Task[] = JSON.parse(data);
        tasks.push({ title, description, completed: false, dateCreation: new Date().toLocaleDateString() });

        await writeFile(filePath, JSON.stringify(tasks));

        return { message: "Task added successfully" };
    } catch (error) {
        throw new Error("Failed to write file: " + error);
    }
});
