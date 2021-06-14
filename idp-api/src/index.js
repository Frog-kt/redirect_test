const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
	res.json({ success: true, message: "hello" });
});

// clientにリダイレクトするエンドポイント
app.post("/redirect", (req, res) => {
	res.redirect("http://localhost:3030/callback", 302);
});

app.listen(3001, () => {
	console.log("IdP api listening on port 3001");
});
