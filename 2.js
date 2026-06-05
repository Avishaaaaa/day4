let technologies = ["HTML", "CSS", "JavaScript", "Python", "Java"];

console.log(technologies);

technologies.push("node.js");
console.log(technologies);

technologies.pop();
console.log(technologies);

technologies.unshift("C++");
console.log(technologies);

technologies.shift();
console.log(technologies);

console.log("length:" , technologies.length);


for (let i = 0; i<technologies.length; i++){
    console.log(technologies[i]);   
}


