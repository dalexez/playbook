class Repo {
    constructor(name, author, language, numberOfCommits, stars, forks, issues_open, issues_close){
        this.name = name
        this.author = author
        this.language = language
        this.numberOfCommits = numberOfCommits
        this.stars = stars
        this. forks = forks
        this.issues_open = issues_open
        this.issues_close = issues_close
    }
    getTotalIssues(){
        return this.issues_open + this.issues_close
    }
    getGeneralInfo(){
        return `This repository ${this.name} was created by ${this.author}`
    }
}

class Issue {
    constructor(title, repositoryNameAssociated, status, numberOfComments, labels, author, dateCreated, lastUpdate){
        this.title = title
        this.repositoryNameAssociated = repositoryNameAssociated
        this.status = status
        this.numberOfComments = numberOfComments
        this.labels = labels
        this.author = author
        this.dateCreated = dateCreated
        this.lastUpdate = lastUpdate
    }
    getTitleAndAuthor(){
        return this.title + this.author
      }
    getGeneralInfo(){
        return `This issue ${this.title} was created by ${this.author}`
    }
}

class PullRequest {
    constructor(title, branchName, dateCreated, status, repositoryNameAssociated){
        this.title = title
        this.branchName = branchName
        this.dateCreated = dateCreated
        this.status = status
        this.repositoryNameAssociated = repositoryNameAssociated
    }
    getStatus(){
        return this.status
    }
    getTitleAndBranch(){
        return this.title + this.branchName
    }
}

const launchXBackend = new Repo("LaunchX", "Carlogilmar", "JavaScript", 100, 199, 299, 10, 10)
const issue = new Issue("Semana 2", "LaunchXBackend", "active", 23, "Live2", "MC", "17/04/2022", "2 days ago")
const blog = new PullRequest("Haciendo Correcciones", "Default", "16/04/2022", "open", "BlogLaunchX")
console.log(blog)