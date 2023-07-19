// You and your friends Tom, Jane, Peter and John got their final exam results. Your total
// score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
// and John’s total score is 40. The grading chart is
// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade

// Write a program to find your and your friends’ grades using if-else.



const result = 100;

if(result >= 80 && result <=100){
    console.log('Your Grade is A');
}
else if(result >= 60 && result <= 79){
    console.log('Your Grade is B');
}
else if(result >= 50 && result <= 59){
    console.log('Your Grade is C');
}
else if(result >= 40 && result <= 49){
    console.log('Your Grade is D');
}
else if(result >= 0 && result <= 39){
    console.log('Your Grade is F');
}
else{
    console.log('Invalid Number')
}


// output  My Grade is A  if result = 85
// output  Tom's Grade is B  if result = 66
// output  Jane's Grade is A  if result = 95
// output  Peter's Grade is C  if result = 56
// output  John's Grade is D  if result = 40