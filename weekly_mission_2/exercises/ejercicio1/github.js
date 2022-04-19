const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

const issue = {
  title: "Semana 2",
  repositoryNameAssociated: "LaunchXBackend",
  status: "Active",
  numberOfComments: 23,
  labels: "Live2",
  author: "MC",
  dateCreated: "17/04/2022",
  lastUpdate: "2 days ago",
  getTitleAndAuthor: function(){
    return this.title + this.author
  },
  getGeneralInfo: function(){
    return `This issue ${this.title} was created by ${this.author}`
  }
}

console.log("Nombre del issue: " + issue.title)
console.log("Comentarios totales en el issue: " + issue.numberOfComments)
console.log(issue.getGeneralInfo())


   