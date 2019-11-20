import CarsService from "../Services/CarsService.js";

let _cs = new CarsService()

function _draw() {
  let cars = _cs.Cars
  let template = ''
  cars.forEach(c => template += c.Template)
  document.getElementById('cars-cards').innerHTML = template
}

//Public
export default class CarsController {

}
