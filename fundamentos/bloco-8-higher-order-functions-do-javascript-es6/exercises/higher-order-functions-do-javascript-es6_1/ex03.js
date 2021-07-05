const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const correctExams = (rightAnswers,studentAnswers,callback) => {
    

}

const finalPoint = (rightAnswers, studentAnswers) => {
    let score = 0;
    for (let index = 0; index < rightAnswers.length; index += 1) {
        for (let index2 = 0; index2 < studentAnswers.length; index2 += 1) {
            if (rightAnswers[index] === studentAnswers[index2]) {
              return  score += 1
            } else if (studentAnswers[index2] === 'N.A') {
               return score = 0;
            } else {
              return  score -= 0.5;
            }
        }
    }
}

console.log(finalPoint())