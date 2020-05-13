const express = require("express");
const router = express.Router();

const BreweryController = require("../../controller/breweryController");
const breweryController = new BreweryController();

router.get("/", function(req, res) {
  breweryController.findAll(res);
});

router.get("/:id", function(req, res) {
  breweryController.findById(req, res);
});

router.get("/name/:name", function(req, res) {
  breweryController.findByName(req, res);
});

router.get("/addr/:addr", function(req, res) {
  breweryController.findByAddr(req, res);
});

router.get("/leftname/:leftN", function(req, res) {
  breweryController.findByLeftName(req, res);
});
router.get("/city/:city", function(req, res) {
  breweryController.findByCity(req, res);
});
router.get("/leftcity/:leftCity", function(req, res) {
  breweryController.findByLeftCity(req, res);
});

module.exports = router;
