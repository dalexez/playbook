// Ejemplo 16: Ordenando una lista de objetos
const users = [
    { name: 'A', age: 150 },
    { name: 'B', age: 50 },
    { name: 'C', age: 100 },
    { name: 'D', age: 22 },
  ]
  
  users.sort((a, b) => { // podemos invocar una función
    if (a.age < b.age) return -1
    console.log("El elemento " + a.name + " es menor que: " + b.name)
    if (a.age > b.age) return 1
    console.log("El elemento " + a.name + " es mayor que: " + b.name)
    return 0
  })
  
  console.log("Ejemplo 16: Ordenando una lista de objetos por la edad")
  console.log(users) // sorted ascending


//  console.log(`${this.name} te saluda en español!`)