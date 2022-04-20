const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

//1.-Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
 console.log("Los explorers en la lista son:")
 explorers.forEach(explorer => console.log(explorer.name))
    
//2.-Imprime el stack de cada explorer, usa FOR EACH
console.log("\nStack de cada explorer:")
explorers.forEach(explorer => console.log(`El stack de el ${explorer.name} es: ${explorer.stack}`))

//3.-Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
console.log("\nArray con todos los stacks de los explorers")
//const stacks = explorers.map(function(explorer){ return explorer.stack})
const stacks = explorers.map(explorer => explorer.stack)
console.log(stacks)

//4.-Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
console.log('\nExplorers con "js" en su stack')
const explorersContainJs = explorers.filter((explorer) => explorer.stack.includes('js'))
explorersContainJs.forEach(explorer => console.log(explorer.name))
//console.log(explorersContainJs)

//5.-Busca el primer explorer que sea de la CDMX, usa FIND
console.log('\nPrimer Explorer que sea de la CDMX')
const explorerCDMX = explorers.find((explorer) => explorer.city = 'CDMX')
console.log(explorerCDMX.name)

//6.-Obtén la suma de todos los exercises_completed, usa REDUCE
const exercisesComleted = explorers.reduce((preValue, currValue) => preValue + currValue.exercises_completed, 0)
console.log(`\nEl total de ejercicios terminados por todos los explorers es: ${exercisesComleted}`)

//7.-Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
const frontEnd = explorers.some(explorer => explorer.missions.frontend.exercisesFinished === true)
console.log(`\nEl resultado es true de encontrar alguno o false si ninguno cumple: ${frontEnd}`)

//8.-Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
const onboardingFinished = explorers.every(explorer => explorer.missions.onboarding.isFinished === true )
console.log(`\nEsta funcion regresa true si todos los explorers terminaron el onboarding: ${onboardingFinished}`)