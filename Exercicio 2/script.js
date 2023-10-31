


let students = [
  {
    name: "Bruno",
    test1: 7,
    test2: 8
  },

  {
    name: "Henrique",
    test1: 6,
    test2: 4
  },

  {
    name: "Vicente",
    test1: 10,
    test2: 8
  },

  {
    name: "Calastri",
    test1: 3,
    test2: 9
  },
]

function calculateMedia (students) {
  if ((students.test1 + students.test2) / 2 >= 7) {
    alert(`A média do aluno ${students.name} foi de: ${(students.test1 + students.test2) / 2}. Párabéns, você foi aprovado no concurso.`)
    
  }

    else {
      alert(`A média do aluno ${students.name} foi de: ${(students.test1 + students.test2) / 2}. Infelizmente você não foi aprovado no concurso, tente novamente.`)
    }

  }
  
  
for (let student of students) {
  calculateMedia(student)
}