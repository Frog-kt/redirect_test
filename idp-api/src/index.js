const express = require("express");
const cors = require("cors");

const app = express();
// app.use(cors({ origin: "http://localhost:80"}));

app.get("/", (req, res) => {
	res.json({ success: true, message: "hello" });
});

// clientにリダイレクトするエンドポイント
app.get("/redirect", (req, res) => {
	console.log("redirect");
	res.redirect(302, "http://localhost:3030/callback");
});

app.listen(3001, () => {
	console.log("IdP api listening on port 3001");
});
