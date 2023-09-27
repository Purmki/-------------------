//1
// function person(firstName,lastName,birthDate,profileImage){
//     this.firstName=firstName;
//     this.lastName= lastName;
//     this.birthDate=birthDate;
//     this.profileImage=profileImage;

//     this.fullName = function() {
//         return `${this.firstName} ${this.lastName}`;
//     };

//     this.getAge = function() {
//         const birthYear = new Date(this.birthDate).getFullYear();
//         const currentYear = new Date().getFullYear();
//         return currentYear - birthYear;
//     };
//     this.canClub = function() {
//         return this.getAge() > 18;
//     };
    
//     this.render=function(){
//         return `<div class="personCont">
//         <h1>${this.fullName()}</h1>
//         <p>${this.getAge()}</p>
//         <p>${this.canClub()}</p>
//         <img src="${this.profileImage}">
//         </div>`;
//     }
// }
// const personContainer = document.getElementById("personContainer");
// const myPerson = new person("omer", "goldberger", "2000-01-01", "https://i1.sndcdn.com/artworks-3RK9sAcwwSDzdnFI-tuCgnQ-t500x500.jpg");

// personContainer.innerHTML = myPerson.render();



// myPeopleArr=[]
// const person1 = new person("John", "Doe", "1990-01-15", "https://example.com/john.jpg");
// const person2 = new person("Alice", "Smith", "1985-05-20", "https://example.com/alice.jpg");
// const person3 = new person("Bob", "Johnson", "1995-11-10", "https://example.com/bob.jpg");
// const person4 = new person("Ella", "Davis", "2008-03-08", "https://example.com/ella.jpg");
// const person5 = new person("Chris", "Wilson", "1980-07-25", "https://example.com/chris.jpg");
// const person6 = new person("Sophia", "Brown", "1992-09-18", "https://example.com/sophia.jpg");
// myPeopleArr.push(person1,person2,person3,person4,person5,person6)
// myPeopleArr.forEach(myPeopleArr => {
//     bookContainer.innerHTML+= myPeopleArr.render()
//     bookContainer.style.display ="flex"
// });



//2-----------------------------

// class Car{
//     #currentSpeed=40;
//     constructor(model,year,brand,price,maximumSpeed,image,){
//             this.model=model;
//             this.year= year;
//             this.brand=brand;
//             this.price=price;
//             this.maximumSpeed=maximumSpeed;
//             this.image=image;
//     }
   
//     set accelerate(speed){
//         setInterval(() => this.speedUp(), 1000)
//     }
//     speedUp(){
//         if (this.#currentSpeed < this.maximumSpeed) {
//         this.#currentSpeed+=20
//         }
//         }
//     get getModel1(){return this.model}
//     set setModel(newModel){this.model=newModel}

//     get getYear(){return this.year}
//     set setYear(newYear){this.year=newYear}


//     set stop(newSpeed){
//      this.#currentSpeed=0
//     };
//     render() {
//         return `
//             <div class="carInfo">
//                 <h2>${this.brand} ${this.model}</h2>
//                 <p>Year: ${this.year}</p>
//                 <p>Price: $${this.price}</p>
//                 <p>Maximum Speed: ${this.maximumSpeed} mph</p>
//                 <p>Current Speed: ${this.#currentSpeed} mph</p>
//                 <img src="${this.image}" alt="${this.brand} ${this.model}">
//             </div>
//         `;

//     }
// }
    
// const myCar = new Car("Civic", 2022, "Honda", 25000, 120, "car-image.jpg");
// const carContainer = document.getElementById("carContainer");

// carContainer.innerHTML+=myCar.render();


const allPeople=[]
btnSubmit.addEventListener('click',(e)=>{
    e.preventDefault()
   allPeople.push(
    input1.value,
    input2.value,
    input3.value,
    input4.value,)
})

function person (firstName,lastName,birthDate,profileImage){
        this.firstName=firstName;
        this.lastName= lastName;
        this.birthDate=birthDate;
        this.profileImage=profileImage

        this.fullName = function() {
            return `${this.firstName} ${this.lastName}`;
        };
    
        this.getAge = function() {
            const birthYear = new Date(this.birthDate).getFullYear();
            const currentYear = new Date().getFullYear();
            return currentYear - birthYear;
        };
        this.canClub = function() {
            return this.getAge() > 18;
        };
        
        this.render=function(){
            return `<div class="personCont">
            <h1>${this.fullName()}</h1>
            <p>${this.getAge()}</p>
            <p>${this.canClub()}</p>
            <img src="${this.profileImage}">
            </div>`;
        }
    }
    const personContainer = document.getElementById("personContainer");
    // const myPerson = new person("omer", "goldberger", "2000-01-01", "https://i1.sndcdn.com/artworks-3RK9sAcwwSDzdnFI-tuCgnQ-t500x500.jpg");
    
    // personContainer.innerHTML = myPerson.render();
    

