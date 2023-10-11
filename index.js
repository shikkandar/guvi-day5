let data={
    name:"shikkandar",
    age:21,
    address:"Tamilnadu"
}
console.log("For-loop");
const keys=Object.keys(data)
for (let i = 0; i < keys.length; i++) {
    console.log(keys[i]+":"+data[keys[i]]);
    
}
console.log(" " );
console.log("For-in-loop");
for (let key in data) {
    console.log(key + ": " + data[key]);
  }
console.log(" ");

const values=Object.entries(data)
console.log("For-of-loop");
for(let [key,val] of values){
    console.log(key+":"+val);
}
console.log("");
console.log("For-each-used in obj");
Object.entries(data).forEach(([key,val])=>{
    console.log(key +":"+val);
})

