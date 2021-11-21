const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/api/survey", controller.getSurveyList);
router.get("/api/survey/:index", controller.getFilteredSurveyList);
router.get("/api/interest/:index", controller.getFilteredInterest);
router.get("/api/vclist/:index", controller.getFilteredVcList);

router.post("/api/survey", controller.addSurveyItem);

router.get("/apis/:alias", controller.getQuery);
router.post("/apis/:alias", controller.postQuery);

module.exports = router;
