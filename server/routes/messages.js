import express from "express";
import Message from "../models/messages.js"

const router = express.Router();

// POST: save a new message
router.post ("/", async (req, res) => {
    try {
        const newMessage = new Message(req.body);
        await newMessage.save();
        res.status(201).json({ message: "Message sent" });
    } catch (err) {
        res.status(500).json({ error: "Failed to send message" });
    }
});

// GET: Fetch all messages
router.get ("/", async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1});
        res.json(messages);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch messages" });
    }
});

export default router;