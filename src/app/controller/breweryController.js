const BreweryDAO = require("../dao/breweryDAO");
const Brewery = require("../model/brewery");

/* Load Controller Common function */
const ControllerCommon = require("./common/controllerCommon");

class BreweryController {
  constructor() {
    this.breweryDAO = new BreweryDAO();
    this.common = new ControllerCommon();
  }
  findAll(res) {
    this.breweryDAO
      .findAll()
      .then(this.common.findSuccess(res))
      .catch(this.common.findError(res));
  }

  findById(req, res) {
    let id = req.params.id;
    this.breweryDAO
      .findById(id)
      .then(this.common.findSuccess(res))
      .catch(this.common.findError(res));
  }

  findByName(req, res) {
    let name = req.params.name;
    this.breweryDAO
      .findByName(name)
      .then(this.common.findSuccess(res))
      .catch(this.common.findError(res));
  }

  findByAddr(req, res) {
    let addr = req.params.addr;
    this.breweryDAO
      .findByAddr(addr)
      .then(this.common.findSuccess(res))
      .catch(this.common.findError(res));
  }

  findByLeftName(req, res) {
    let leftname = req.params.leftN;
    this.breweryDAO
      .findByLeftName(leftname)
      .then(this.common.findSuccess(res))
      .catch(this.common.findError(res));
  }
  findByCity(req, res) {
    let cityName = req.params.city;
    this.breweryDAO
      .findByCity(cityName)
      .then(this.common.findSuccess(res))
      .catch(this.common.findError(res));
  }
  findByLeftCity(req, res) {
    let leftcity = req.params.leftCity;
    this.breweryDAO
      .findByLeftCity(leftcity)
      .then(this.common.findSuccess(res))
      .catch(this.common.findError(res));
  }
}
module.exports = BreweryController;
