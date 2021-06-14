const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "http://localhost"}));

app.get("/", (req, res) => {
	res.json({ success: true, message: "hello" });
});

// clientにリダイレクトするエンドポイント
app.post("/redirect", (req, res) => {
	console.log("redirect");
	// res.setHeader("Access-Control-Allow-Origin", "http://localhost:3030");
	res.redirect(302, "http://localhost:3030/callback");
});

app.listen(3000, () => {
	console.log("IdP api listening on port 3000");
});
