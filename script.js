class student {
    constructor(id,name,grades,attendance) {
        this.id = id;
        this.name = name; 
        this.grades = grades;
        this.attendance = attendance;
        
    }
// Calculate Average 
calculateAverage() {
    let total =
    this.grades.reduce((sum, grade) => sum + grade,0);
    return total /
    this.grades.length;
}
//3. Calculate Grade
getGrade(average) {
    if (average >= 90) {
        return "A";
    } else if (average >= 80){
        return "B";
    } else if (average >= 70){
        return "C";
    } else if (average >= 60){
        return "D";
    } else if (average >=50){
        return "E";
    } else {
        return "F";
    }
    
}
//4. Check Final Result 
getResult(average) {
    if (average >= 50 &&
        this.attendance >= 75) {
            return "ناجح";
        } else {
            return "يحتاج مراجعة";
        }
    }
}
// 5. Creat Students Objects
let studentslist = [
    new student(1,"Ahmed", [90, 85, 95], 90),
    new student(2,"Sara", [45, 48, 42], 80),
    new student(3,"Omar", [70, 75, 80], 85),
    new student(4,"Mona", [40, 45, 48], 90),
];
// 6. Filter stuggling students
let strugglingStudents =
studentslist.filter(student => {
    let average =
    student.calculateAverage();
    return average >= 40 && average<= 49;
}) 
//7. Add 5 mercy marks using map
let mercyStudents = 
strugglingStudents.map(student => {
    return {
        id: student.id,
        name: student.name,
        oldAverage:
        student.calculateAverage(),
        newAverage:
        student.calculateAverage() + 5
    };
});
//8. calculate total new averages using reduce 
let totalNewAverage = 
mercyStudents.reduce((sum, student) =>
{
    return sum + student.newAverage;
}, 0);
//9. calculate mercy average safely 
let mercyAverage = mercyStudents.length > 0
? totalNewAverage /
mercyStudents.length 
   : 0;
//10. print student reports
console.log("===== STUDENTS REPORT =====");
studentslist.forEach(student => {
let average =
student.calculateAverage();
let grade =
student.getGrade(average);
let result =
student.getResult(average);
console.log("-------------------------");
console.log("Name:", student.name );
console.log("Average:", average);
console.log("Grade:", grade)
console.log("Result:", result);
});
//11. print mercy students 
console.log("===== MERCY STUDENTS  =====");
console.log(mercyStudents);
//12. print mercy average 
console.log("Mercy Students Average:",mercyAverage);