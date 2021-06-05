const express = require("express");
const router = express.Router();
const controller = require("../controllers/user");

const path = "user";

router.get(`/${path}`, controller.getData);
router.get(`/${path}/:id`, controller.getOneData);
router.post(`/${path}`, controller.postOneData);
router.put(`/${path}/:id`, controller.putOneData);
router.delete(`/${path}/:id`, controller.deleteOneData);

module.exports = router;
