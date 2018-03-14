//Write a JavaScript for loop that will iterate from 0 to 20. For each iteration
//, it will check if the current number is odd or even, and display a message to the screen.

for (var i=0; i<=15; i++) {
        if (i === 0) {
                console.log(i +  " is even");
        }
        else if (i % 2 === 0) {
                console.log(i + " is even");   
        }
        else {
                console.log(i + " is odd");
            }

            //Write a JavaScript program which iterates the integers from 1 to 100. 
            //But for multiples of three print "Fizz" instead of the number and 
            //for the multiples of five print "Buzz".
            // For numbers which are multiples of both three and five print "FizzBuzz".
            for ( var i = 1; i <= 100; i++ )
{
  if ( i%3 === 0 && i%5 === 0 )
  {
    console.log( i + " FizzBuzz" );
  }
  else if ( i%3 === 0 ) 
  {
    console.log(i+ " Fizz" );
  }
  else if ( i%5 === 0 ) 
  {
    console.log(i+ " Buzz" );
  }
  else
  {
    console.log(i);
  }
}
//Write a JavaScript program to construct the following pattern.
var x,y,chr;
for(x=1; x <=6; x++)
{
   for (y=1; y < x; y++)
     {
    chr=chr+("*");        
      }
 console.log(chr);
 chr='';    
}
//Create a loop that "sings" the song 99 bottles of beer on the wall. 
//The song repeats in this fashion until there are 0 bottles on the wall: "99 bottles of beer on the wall, 
//99 bottles of beer. Take one down, pass it around, 98 bottles of beer on the wall." "98 bottles of beer on the wall, 98 bottles of beer. 
//Take one down, pass it around, 97 bottles of beer on the wall."
var bottles;
for (counter = 99; counter >= 1; counter = counter - 1) 
{
    if (counter == 1) {
        bottles = 'bottle';
    } else {
        bottles = 'bottles';
    }
    console.log(counter+" "+bottles+" of beer on the wall.");
    if (counter < 99) {
        console.log("");
        console.log(counter+" "+bottles+" of beer on the wall.");
    }
    console.log(counter+" "+bottles+" of beer.");
    console.log("Take one down.");
    console.log("Pass it around.");
    if (counter == 1) {
        console.log("No bottles of beer on the wall.");
    }
}






















