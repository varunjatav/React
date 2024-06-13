// const sum = (a,b) => {
//     console.log("function excuted !");
//     return a + b;
// }

// console.log(sum(4,5));

// console.log(sum(4,5));


const sum2 = () => {
    let obj = {};
   
    return function(a,b){
        console.log("object", obj);
        if(!obj[`${a} ${b}`]){
            console.log("inside if");
            obj[`${a} ${b}`] = a + b;
        }
        return obj[`${a} ${b}`];
    }
    
}

const memoization = sum2();
console.log(memoization(4,5));
console.log(memoization(4,5));