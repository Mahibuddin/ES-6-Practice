
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



function demo(){
    {
        let x = 20; 
        {
            const x = 15;
            console.log(x);

           // x = 18; // its not valid 
            
        }

        x = 19; // its valid [becose let hochche block lebel variable declearation er jonno bebohar kora hoy...]
        console.log(x);
        
    }
}

demo();






