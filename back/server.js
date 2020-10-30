const express = require("Express");
const app = express();
const bodyParser = require("body-parser")
const userRoute = require("../back/routes/userRoute");

app.use(bodyParser.json());

app.listen(3030, () => {
    console.log("ok")
});

app.use("/user", userRoute)