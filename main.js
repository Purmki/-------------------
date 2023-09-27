
const arr=[8,54,3,74,2,31,22,45,45,18]
const newArr = arr.filter((num) => {return num %3 !== 0})
console.log(newArr)


// for(i=0; i<arr.length; i++){
//     if(arr[i]%3===0){
//         arr.splice(i,1)
//         i--
//     }
// }
// console.log(arr)


const peopleArr=[{
    firstName:"omer",
    lastName: "goldberger",
    age:22
},
{
    firstName:"matan",
    lastName: "talmid",
    age:24
},
{
    firstName:"sagi",
    lastName: "pacha",
    age:21
}]
for(const iterator of peopleArr){
    console.log(iterator);
} 
peopleArr.map((person)=>{
    // person. fullName = person.firstName+" "+ person.lastName
    return  test.innerHTML+=`<article>
        <p>${person.firstName}</p>
        <p>${person.lastName}</p>
        <p>${person.age}<p>
    </article>`
})
console.log(peopleArr)

myArray = [0,1,2,3,4,5,6,7,8,9];
let mapButton =myArray.map((domButton)=>
{return `<button>${domButton}</button>`
});
mapButton = mapButton.join("-")
test.innerHTML+= mapButton