import add  from './math';
console.log(add);



// const a = 10;
// const b = 20;

// const sum = (a, b) => a+b;

// console.log(sum(a, b));


// const x = 23;

// x = 14;  // const e eta valid na...

// console.log(x);


// const arr = [];

// arr.push(10);
// arr.push(15);

// arr = [];  // const e eta valid na...

// console.log(arr);

// jokhon kono variable or object er value change korte chachchi na tokhon const use korbo... & jodi variable er value change korte chai, tokhon var or let use korbo...


// var a = 10;

// console.log(a);

// if (true) {
//     a = 20;
//     console.log(a); 
// }

// console.log(a);



// let b = 10;

// console.log(b);

// if (true) {
//     let b = 20;
//     console.log(b); 
// }

// console.log(b);



// function demo(){
//     {
//         let x = 20; 
//         {
//             const x = 15;
//             console.log(x);

//            // x = 18; // its not valid 
            
//         }

//         x = 19; // its valid [becose let hochche block lebel variable declearation er jonno bebohar kora hoy...]
//         console.log(x);
        
//     }

//     // console.log(x); // undefined
    
// }

// demo();




        // template string

    const name = 'Mahib'
    const age = 32
    const email = 'mahibuddin@gmail.com'

    // const details = 'Name: ' + name + 'Age: ' + age + 'Email: ' + email

    const details =`Name = ${name}, Age = ${age}, Email = ${email}`

    console.log(details);
    

// alert('Webpack is Awesome...');



            // Arrow function

    // const print = name => {
    //     console.log('Hello ', name); 
    // }

    // print('Mahib');



    const addMe = (a,b) => a+b;
    setTimeout(() => {
        console.log(addMe(10, 5));
           
    }, 2000);;
    

    const sqr = x => x*x;
    console.log(sqr(12));
    

    // normal function declaration

//  const obj  = {
//      name: 'Mahib Uddin',
//      print: function(){
//          setTimeout(function(){
//              console.log(this);
//          }.bind(this), 1000);
//      }
//  }

//  obj.print();


    // Arrow function declaration

         const obj  = {
            name: 'Mahib Uddin',
            print: function(){
                setTimeout(() => {
                    console.log(this.name);   
                }, 1000);
            }
        }

        obj.print();



        // Enhance Object

        let nam = "Mahib";

        let mail = "mahib.gmail.com";

        const Cat = {
            nam,
            mail,

            print(){
                console.log(this.nam, this.mail);
                
            }
        }
        
        Cat.print();

        console.dir(Cat);


        // Destructure Object

        const book = {
            bookname: 'himu',
            author: 'humayun'
        }

        let {bookname, author} = book;
        console.log(bookname, author);


        function print ({bookname, author}){
            console.log(`Hello ${bookname}; Author ${author}`);
            
        }

        print({author, bookname});  // order doesn't metter becose of {object...}
        




        // Default parameter

        // let add = (a, b) => a+b;
        // console.log(add(10));

        let sqd = (a=5, b=a) => a*b;  // set as default value
        console.log(sqd());
        console.log(sqd(10));


        // Rest Operator

        function sum (...num){
            return num.reduce((a,b) => a+b);  
        }
        let xum = sum(12, 14, 30, 64, 63, 50, 40);
        console.log(xum);
        
        // er kaj holo array te rupantor kora...
        
        console.clear();
        // Spread Operator

        let arr = [1, 2, 3, 4, 5]

            arr = [...arr, 233, 509, 230, 340]

        console.dir(arr);
        console.dir(...arr);
        
        // prottek ta array or object ke venge fele...

   

        var college = {
            n: 'Afiluddin Degree College',
            add: 'Bagachra'
        }

        var university = {
            ...college,
            n: 'Bagachra United High school',
            years: 2000
        }

        console.table(university);

        console.clear();

        
        
        


        
