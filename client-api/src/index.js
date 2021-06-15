const express = require("express");
const cors = require("cors");

const app = express();
// app.use(cors({ origin: "http://localhost" }));

// コールバックエンドポイント
app.get("/callback", (req, res) => {
	console.log("callback");
	res.header('Access-Control-Allow-Origin', '*') // こちらは*でOK
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE') // こいつが必要だった
	res.json({ success: true });
});

app.listen(3030, () => {
	console.log("client listening on port 3030");
});
