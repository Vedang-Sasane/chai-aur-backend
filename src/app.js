import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true, //Credentials (like cookies) are allowed to be included in cross-origin requests.
  })
);

app.use(express.json({ limit: "16kb" })); //JSON payloads
app.use(express.urlencoded({ extended: true, limit: "16kb" })); //Url-encoded payloads
app.use(express.static("public"));

app.use(cookieParser());

export { app };
