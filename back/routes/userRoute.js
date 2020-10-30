const express = require("Express");
const router = express.Router();
const {createUser, readUser} = require("../controllers/userControllers");

router.route("/create")
.get(readUserre)
.post(createUser)

module.exports = router;