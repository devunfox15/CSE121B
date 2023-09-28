 const number = ['one', 'two', 'three'];

 const numberHtml = steps.map(function(number){
    return `<li>${number}</li>`;
 })
document.getElementById("myList").innerHTML = numberHtml.join();


const grades = ["A","B","A"];
function convertGradeToPoints(grade){
    let points = 0;
    if (grade === "A"){
        points = 4;
    } else if (grade === "B"){
        points = 3;
    }
    return points;
}
const GpaPoints = grades.map(convertGradeToPoints);
// reduced to get one gpa value
const pointsTotal = gpaPoints.reduce((total, item) => total + item);
const gpa = pointsTotal / gpaPoints.Length;

//activity 4 filter more
const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter(function (word) {
  return word.length < 6;
});

// indexof activity 5
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);