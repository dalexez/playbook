const user = {
    name: "Daniel Espinoza",
    friends: 568,
    location: "Morelia",
    birthday: "19 Julio",
    notifications: 4,
    profilePicture: "profile.jpg",
    getGeneralInfo: function(){
        return `User: ${this.name} lives in ${this.location} and has ${this.friends}`
      }
}

console.log(user.getGeneralInfo())

const post = {
    privacy: "Public",
    post: "Hola estoy modelando informacion!",
    location: "Morelia",
    tagFriends: "Carlo",
    getLocation: function(){
        return `Este post fue hecho en: ${this.location}`
    }
}
console.log(post.getLocation())

const biography = {
    name: "Daniel Espinoza",
    profilePicture: "***.jpg",
    coverPhoto: "vacaiones.jpg",
    worksAt: "UMSNH",
    birthday: "19 Julio",
    phoneNumber: "92782",
    friends: 568,
    getFriends: function(){
        return this.friends
    }
}

console.log("Total friends: " + biography.getFriends())