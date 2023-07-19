// You are given three numbers 13, 79, and 45. Write a program that will print the
// largest number using if-else.

const largestNumber = (x, y, z) => {
    if(x > y && x > z){
        console.log('The Largest Number is', x);
    }
    else if(y > x && y > z){
        console.log('The Largest Number is', y);
    }
    else if(z > x && z > y){
        console.log('The Largest Number is', z);
    }
    else{
        console.log('Invalid Number')
    }
}

largestNumber(13, 79, 45);

// output The Largest Number is 79