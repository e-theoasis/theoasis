import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"
import messengeRouter from "./routes/messages.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/messages", messengeRouter);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(5000, () => console.log("Server running on port 5000"));
    })
    .catch((err) => console.err("MongoDB connection error:", err))

app.post("/api/login", (req, res) => {
    const { email, password } = req.body;

    const ADMIN_EMAIL = "e.theoasis.properties@gmail.com";
    const ADMIN_PASS = "theoasis";

    if (email === ADMIN_EMAIL && password === ADMIN_PASS) {
        res.json({ success:true });
    } else {
        res.json ({ success: false});
    }
})