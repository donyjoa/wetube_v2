import app from "./app";

const PORT = 4000;

const hi = () => console.log(`Listening on ${PORT}`);

app.listen(PORT, hi);
