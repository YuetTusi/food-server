const express = require("express");
const router = express.Router();

//外卖分类
router.get("/head", (req, res) => {
  const head = require("../mock/head.json");
  res.json(head);
});

// 外卖列表
router.get("/list", (req, res) => {
  const list = require("../mock/list.json");
  res.json(list);
});
// 外卖列表 页号从0开始
router.get("/list/:page", (req, res) => {
  const PAGE_SIZE = 5;
  const list = require("../mock/list.json");
  let { page = 0 } = req.params;
  let { poilist } = list.data;
  poilist = poilist.slice(page * PAGE_SIZE, page * PAGE_SIZE + 5);
  res.json({
    ...list,
    data: {
      ...list.data,
      page_index: parseInt(page),
      poi_has_next_page: poilist.length >= PAGE_SIZE,
      page_size: PAGE_SIZE,
      poilist
    }
  });
});

//用户评论
router.get("/comments", (req, res) => {
  const comments = require("../mock/comments.json");
  res.json(comments);
});

router.get("/evadata", (req, res) => {
  const evadata = require("../mock/evadata.json");
  res.json(evadata);
});

//外卖分类过滤
router.get("/filter", (req, res) => {
  const filter = require("../mock/filter.json");
  res.json(filter);
});

router.get("/food", (req, res) => {
  const food = require("../mock/food.json");
  res.json(food);
});

router.get("/listparams", (req, res) => {
  const listparams = require("../mock/listparams.json");
  res.json(listparams);
});

//订单
router.get("/orders", (req, res) => {
  const orders = require("../mock/orders.json");
  res.json(orders);
});

//餐馆
router.get("/restaurant", (req, res) => {
  const restaurant = require("../mock/restaurant.json");
  res.json(restaurant);
});
module.exports = router;
