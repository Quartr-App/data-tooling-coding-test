import { Elysia } from "elysia";

const app = new Elysia();

app.listen(3000);

console.log(`Backend running at http://localhost:${app.server?.port}`);
