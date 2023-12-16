import express from "express";
import fileUpload from "express-fileupload";
import helmet from "helmet";
import morgan from "morgan";
const app = express();
const PORT = 3000;

//Midleware
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  })
);

//Routes
app.get("/", (req, res) => {
  res.json({ message: "Hello Server in 3000" });
});

app.post("/files", (req, res) => {
  console.log(req.files);
  res.json({ message: "Upload file" });
});

//Start Server
app.listen(PORT, () => console.log(`Server on port ${PORT}`));
