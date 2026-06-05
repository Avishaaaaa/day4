//creating an object
let student = {
    name : "Avisha",
    age : 19,
    city : "Dehradun"

};

//accessing the properties of an object
console.log(student.name);
console.log(student.age);
console.log(student.city);

//upadating property
student.age = 18;
console.log(student.age);

//adding new property
student.grade = "A";
console.log(student.grade); 

//nested object
let student1 = {
    name : "avisha",
    age : 19,
    city : "Dehradun",
    subjects : {
        math : 90,
        science : 85,
        english : 88
    }       
}
console.log(student1);
