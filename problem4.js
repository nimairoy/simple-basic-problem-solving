// You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
// triangle is Isosceles or not using if-else.

const findTringle = (x, y, z) => {
    if(x=== y && y===z){
        console.log('Equilateral Triangle')
    }
    else if(x === y || y === z || z === x){
        console.log('Isosceles Tringle')
    }
    else{
        console.log("Scalene Triangle");
    }
}
findTringle(9, 8, 9);

// output  Isosceles Tringle
