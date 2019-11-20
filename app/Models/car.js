export default class Car {
    constructor(data) {
        this._id = data._id
        this.make = data.make
        this.model = data.model
        this.year = data.year
        this.description = data.description
        this.img = data.img
        this.price = data.price]
    }

    get Template() {
        return `
        <div class="col-3">
            <div class="card">
                <img class="card-img-top" src="${this.img}" alt="Card image cap">
                <div class="card-body bg-dark text-white">
                    <h5 class="card-title"> Year: ${this.year}<br> Make: ${this.make}<br> Model: ${this.model}</h5>
                    <p class="card-text">Description: ${this.description}</p>
                    <p><sm>$ ${this.price}</sm></p>
                    <button class="btn btn-info" onclick="app.controllers.carCtrl.bid('${this._id}')">Bid</button>
                    <button class="btn btn-danger" onclick="app.controllers.carCtrl.delete('${this._id}')">Delete Car</button>
                </div >
            </div >
        </div >
            `
    }
}