const express = require("express");
const cors = require("cors");

const config = require("./config");
const mockRouter = require("./router/mock");

let app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", mockRouter);

app.listen(config.PORT, () => {
  console.log(`后台服务已经启动在端口：${config.PORT}`);
});
