class Profile {
    constructor(name, rateStars, messages, payment){
        this.name = name
        this.rateStars = rateStars
        this.messages = messages
        this.payment = payment
    }
    getTypePayment(){
        return this.payment
    }
    getGeneralInfo(){
        return `Usuario: ${this.name} tiene ${this.rateStars} estrellas`
    }
}

class Travel {
    constructor(location, destination, modeUber, price, payment){
        this.location = location
        this.destination = destination
        this.modeUber = modeUber
        this.price = price
        this.payment = payment
    }
    getDestination(){
        return this.destination
    }
}

const profile = new Profile("Daniel", 5, "welcome", "creditcard")
const travel = new Travel("Home", "Work", "UberX", 67.76, "cash")
console.log(travel)