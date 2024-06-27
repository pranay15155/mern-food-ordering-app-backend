import express, { Request, Response, Application } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

import myUserRoute from "./routes/MyUserRoute";
// import { v2 as cloudinary } from "cloudinary";
// import myRestaurantRoute from "./routes/MyRestaurantRoute";
// import restaurantRoute from "./routes/RestaurantRoute";
// import orderRoute from "./routes/OrderRoute";

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Connected to database!"));

const app = express();
app.use(express.json()); //middleware
app.use(cors());

app.get("/health",async(req:Request,res:Response)=>{
  res.send({message:"health OK!"});
})

app.use("/api/my/user", myUserRoute);
// app.use("/api/my/restaurant", myRestaurantRoute);
// app.use("/api/restaurant", restaurantRoute);
// app.use("/api/order", orderRoute);

app.listen(7000, () => {
  console.log("server started on localhost:7000");
});

