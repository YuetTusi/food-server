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

//用户评论 页号从0开始
router.get("/comments/:page", (req, res) => {
  const PAGE_SIZE = 5;
  const list = require("../mock/comments.json");
  let { page = 0 } = req.params;
  let { comments } = list.data;
  comments = comments.slice(page * PAGE_SIZE, page * PAGE_SIZE + 5);
  res.json({
    data: {
      comments,
      page_index: parseInt(page),
      poi_has_next_page: comments.length >= PAGE_SIZE,
      page_size: PAGE_SIZE
    }
  });
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

//外卖列表（条件查询）
router.get("/listparams/:page", (req, res) => {
  // const listparams = require("../mock/listparams.json");
  // res.json(listparams);
  const PAGE_SIZE = 5;
  const listparams = require("../mock/listparams.json");
  let { page = 0 } = req.params;
  let { poilist } = listparams.data;
  poilist = poilist.slice(page * PAGE_SIZE, page * PAGE_SIZE + 5);
  res.json({
    ...listparams,
    data: {
      ...listparams.data,
      page_index: parseInt(page),
      poi_has_next_page: poilist.length >= PAGE_SIZE,
      page_size: PAGE_SIZE,
      poilist
    }
  });
});

//订单
router.get("/orders/:page", (req, res) => {
  const PAGE_SIZE = 5;
  const orders = require("../mock/orders.json");
  let { page = 0 } = req.params;
  let { digestlist } = orders.data;
  digestlist = digestlist.slice(page * PAGE_SIZE, page * PAGE_SIZE + 5);
  res.json({
    ...orders,
    data: {
      ...orders.data,
      page_index: parseInt(page),
      poi_has_next_page: digestlist.length >= PAGE_SIZE,
      page_size: PAGE_SIZE,
      digestlist
    }
  });
});

//餐馆
router.get("/restaurant", (req, res) => {
  const restaurant = require("../mock/restaurant.json");
  res.json(restaurant);
});
module.exports = router;
