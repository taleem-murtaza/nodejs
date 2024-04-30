/*const person = {
    firstName : "Zaman",
    lastName : "Haider",
    address : "nill",
    id : 4529,
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
};
//here we print the data 
console.log(person.fullName())*/


/*const person = {
    firstName : "john",
    lastName : "doe",
    id : 3344,
    fullName : function(){
        return this.firstName + " " + this.lastName;
    } 
}
console.log(person.fullName)*/

/*const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person2 = {
    firstName:"John",
    lastName: "Doe",
  }
  
  let x = person1.fullName.call(person2); 
console.log(x);*/

/*const person = {
    firstName: "Zaman",
    lastName: "Haider",
    fullName: function() {
        return this.firstName + " " + this.lastName
    }
}

const another = {
    firstName: "Taleem",
    lastName: "Murtaza",
}

let fullName = person.fullName.bind(another);
console.log(fullName());*/

let myFunction = (a,b) => a*b
                                    //with the help of arrow function
console.log(myFunction(4, 5))