import express from "express";
import dotenv from "dotenv";
import diwakar from "./routes/auth.route.js"
import cors from "cors";


const app = express();

dotenv.config();

app.use(express.json());

app.use(cors());

const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World from !')
})

app.use('/api', diwakar);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
