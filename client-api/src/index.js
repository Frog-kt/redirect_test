const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// コールバックエンドポイント
app.get("/callback", (req, res) => {});

app.listen(3000);
