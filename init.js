import "./db";
import app from "./app";

const PORT = 4000;

const start = () => console.log(`Listening on: http://localhost:${PORT}`);

app.listen(PORT, start);
