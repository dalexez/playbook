const profile = {
    name: "Daniel",
    rateStars: 5,
    messages: "welcome",
    payment: "creditcard",
    getTypePayment: function(){
        return this.payment
    },
    getGeneralInfo: function(){
        return `Usuario: ${this.name} tiene ${this.rateStars} estrellas`
    }
}

console.log(profile.getGeneralInfo())

const travel = {
    location: "Home",
    destination: "Work",
    modeUber: "UberX",
    price: 67.76,
    payment: "chash",
    getDestination: function(){
        return this.destination
    }
}

console.log("The user's destination is: " + travel.getDestination())