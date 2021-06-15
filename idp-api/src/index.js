const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "http://localhost:8080", credentials: true }));

app.get("/", (req, res) => {
	res.json({ success: true, message: "hello" });
});

// clientにリダイレクトするエンドポイント
app.post("/redirect", (req, res) => {
	console.log("redirect");
	// res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE') // こいつが必要だった
	res.redirect(302, "http://localhost:3030/callback");
});

app.listen(3000, () => {
	console.log("IdP api listening on port 3000");
});
