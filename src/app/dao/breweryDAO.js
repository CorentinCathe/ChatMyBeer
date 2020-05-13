const Brewery = require("../model/brewery");

const daoCommon = require("./commons/daoCommon");

class BreweryDAO {
  constructor() {
    this.common = new daoCommon();
  }

  findAll() {
    const sqlRequest = "SELECT * FROM brewery";
    return this.common
      .findAll(sqlRequest)
      .then(rows => {
        const brewerys = rows.map(row => new Brewery(row));
        //console.info(brewerys);
        return brewerys;
      })
      .catch(err => console.log(err));
  }

  findById(id) {
    //console.log(id);
    let sqlRequest = "SELECT * FROM brewery b WHERE b.id=$id";
    let sqlParams = { $id: id };
    //console.log(sqlParams);
    return this.common
      .findOne(sqlRequest, sqlParams)
      .then(row => new Brewery(row));
  }

  findByName(name) {
    const sqlRequest = "SELECT * FROM brewery b where b.breweries = $name ";
    let sqlParams = { $name: name };
    return this.common
      .findAllWithParams(sqlRequest, sqlParams)
      .then(rows => {
        let brewerys = rows.map(row => new Brewery(row));
        if (!brewerys) brewerys = [];
        return brewerys;
      })
      .catch(err => console.log(err));
  }

  findByAddr(addr) {
    const sqlRequest = "SELECT * FROM brewery where address1 = $addr ";
    let sqlParams = { $addr: addr };
    return this.common
      .findAllWithParams(sqlRequest, sqlParams)
      .then(rows => {
        const brewerys = rows.map(row => new Brewery(row));
        return brewerys;
      })
      .catch(err => console.log(err));
  }

  findByLeftName(name) {
    let len = name.length;

    const sqlRequest =
      "SELECT * FROM brewery where substr(breweries,0,$leng+1)  = $name ";
    let sqlParams = { $name: name, $leng: len };
    return this.common
      .findAllWithParams(sqlRequest, sqlParams)
      .then(rows => {
        let brewerys = rows.map(row => new Brewery(row));
        if (!brewerys) {
          console.log("ici");
          return [];
        } else return brewerys;
      })
      .catch(err => console.log(err));
  }

  findByCity(cityName) {
    const sqlRequest = "SELECT * FROM brewery where city = $cityName ";
    let sqlParams = { $cityName: cityName };
    return this.common
      .findAllWithParams(sqlRequest, sqlParams)
      .then(rows => {
        const brewerys = rows.map(row => new Brewery(row));
        return brewerys;
      })
      .catch(err => console.log(err));
  }

  findByLeftCity(cityName) {
    let len = cityName.length;

    const sqlRequest =
      "SELECT * FROM brewery where substr(city,0,$leng+1)  = $cityName ";
    let sqlParams = { $cityName: cityName, $leng: len };
    return this.common
      .findAllWithParams(sqlRequest, sqlParams)
      .then(rows => {
        const brewerys = rows.map(row => new Brewery(row));
        return brewerys;
      })
      .catch(err => console.log(err));
  }
}

module.exports = BreweryDAO;
