const user = {
    name: "Daniel",
    username: "dalexez",
    location: "Mexico",
    following: 71,
    followers: 69,
    tweets: 50,
    age: 32,
    getFollowersAndFollowing: function(){
        return this.followers + this.following
    },
    
}

console.log(user.getFollowersAndFollowing())

const trending_topic = {
    topic: "Reforma energetica",
    tweets: 12000,
    location: "Mexico",
    position: 1,
    getGeneralInfo: function() {
        return `The trending topic: ${this.topic} has ${this.tweets} tweets on ${this.location}`
    }
}

console.log(trending_topic.getGeneralInfo())


const hashtag = {
    topic: "Entreteinment",
    tittle: "Moonknight",
    tweets: 23000,
    getGeneralInfo: function(){
        return `#${this.tittle} has ${this.tweets} tweets`
    }
}

console.log(hashtag.getGeneralInfo())