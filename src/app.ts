import express from "express";
import Service from "./helper/service";

const app = express();
new Service(app);

const port = 21525;
app.listen(port, () => {
    console.log(`Server is now listening on port ${port}...`);
});
