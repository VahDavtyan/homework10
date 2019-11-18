// 1.Use the for loop to output even numbers from 2 to 10.



for (var i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
         console.log(i);   
    }; 
};



  //2.We have an object storing salaries of our team:
//Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
//If salaries is empty, then the result must be 0.


var salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

var sal = 0;

for (var i in salaries) {
    sal += salaries[i]
};

console.log(sal);


//3.Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.



// before the call
var menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  
  function multiplyNumeric(menu) {
    for (var mul in menu) {
        if (typeof menu[mul] == 'number')
         menu[mul] *= 2; {
        };
    };
    return menu
};
    console.log(multiplyNumeric(menu));


// 4.Write a symbol example.(es6)

var sym1 = Symbol();
var sym2 = Symbol(89);
var sym3 = Symbol('Aziiiz');

console.log(typeof ...)



//5.Create a class FormatError that inherits from the built-in  SyntaxError Object.
//It should support message, name and stack properties.

//Usage example:


var err = new FormatError("formatting error");
alert( err.message ); // formatting error
alert( err.name ); // FormatError
alert( err.stack ); // stack
alert( err instanceof FormatError ); // true
alert( err instanceof SyntaxError ); // true (because inherits from SyntaxError)



//6.Replace Function Expressions with arrow functions in the code below:(es6)
 

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
ask(
  "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);



// 7.Write a IIFE function that will return value 28;


var num = ( () =>  {
    return 20 + 8;
})();

console.log(num);


var num = ( function () {
    return 20 + 8;
})();

console.log(num);


//8.Create a switch statement that will alert "Hello" if fruits is "banana",
 //and "Welcome" if fruits is "apple".


 var fruits = "Banana"

 switch (fruits) {
      case  "Banana":
       alert("Hello")
       break;
     case "Apple":
       alert("Welcome")
       break;    
   };

   


// 11.Write code example that throw refferance error, type error and syntax error


aziz.map(); refferance error


console.log('name);  syntax error

var x = document.getElementByID('foo') type error
