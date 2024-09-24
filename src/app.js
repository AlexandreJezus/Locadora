import e from "express";
import "dotenv/config";
import "./config/db.js";
import movie_router from "./routes/movie-route.js";

const app = e();

app.use(e.json());

app.listen(process.env.API_PORT, () => console.log("Server is running"));
