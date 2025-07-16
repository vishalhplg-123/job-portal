import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js"
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

dotenv.config({});

const app = express();

// Middleware
const corsOptions = {
    origin: 'http://localhost:5173', // Fixed the URL
    credentials: true // Fixed the property name to 'credentials'
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Route
app.get("/home", (req, res) => { // Fixed 'rs' to 'res'
    return res.status(200).json({
        message: "I am coming from backend",
        success: true
    });
});

const PORT = process.env.PORT || 4000;


//api
app.use("/api/v1/user", userRoute)
app.use("/api/v1/company", companyRoute)
app.use("/api/v1/job", jobRoute)
app.use("/api/v1/application", applicationRoute);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running at port ${PORT}`);
});
