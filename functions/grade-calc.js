// arg : students score,  total possible score

// 15/20 => you got a C ( 75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let grade = function(studentScore = 18, totalScore = 20){
   let percent = (studentScore/totalScore)*100
   let letterGrade = ""
   if (percent<=100 && percent>=90){
    letterGrade = "A"
   }else if ( percent<=89 && percent>=80){
    letterGrade = "B"
   }else if ( percent<=79 && percent>=70){
    letterGrade = "C"
   }else if ( percent<=69 && percent>=60){
    letterGrade = "D"
   }else if ( percent<=59 && percent>=0){
    letterGrade = "F"
  
   }
   return `you got a ${letterGrade} : (${percent}%)`

}
let result = grade(15,20)
console.log(result)