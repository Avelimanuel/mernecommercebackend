import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { smartkeyRouter } from "./routes/smartkey";

dotenv.config()



const port = process.env.PORT
const dbUri = process.env.DATABASE_URI

const app = express();



const dbConnection = async () => {
    try {
      await mongoose.connect(dbUri);
      console.log(`Database connected`);
      app.listen(port, () => {
        console.log(`Server runing on port ${port}`);
      });
    } catch (error) {
      console.log(`Connection to database has failed ${error}`);
    }
  };
  
  dbConnection();

app.use(cors())
app.use(express.json());


app.use("/smartkeys",smartkeyRouter)