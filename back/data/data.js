const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Zack:<caca123>@cluster0.rz9sd.gcp.mongodb.net/<e-learingdb>?retryWrites=true&w=majority",{useNewUrlParser: true,useUnifiedTopology: true });

Before((done) => {
    mongoose.connection.once("Open", () => {
        console.log("co");
        done();
    })
    .on("error", (error) => {
        console.log("pas co", error)
    })
})
