// imports
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import userRoutes from "./routes/userRoutes.js";
import bodyParser from 'body-parser';

const app = express();
dotenv.config()

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
const DATABASE_URL = process.env.DB_URL;
connectDB(DATABASE_URL);

// Routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Authentication Server Running')
})
app.use("/auth", userRoutes)


// listen to port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));