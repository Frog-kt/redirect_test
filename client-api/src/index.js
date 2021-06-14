const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "http://localhost" }));

// コールバックエンドポイント
app.get("/callback", (req, res) => {
	console.log("callback");
	res.json({ success: true });
});

app.listen(3030, () => {
	console.log("client listening on port 3030");
});
