const quotes=[
  {
    quote:"So many books, so little time.",
    author:"Frank Zappa"
  },
  {
    quote:"Be yourself; everyone else is already taken.",
    author:"Oscar Wilde"
  },
  {
    quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author:"Albert Einstein"
  },
  {
    quote:"You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author:"Dr. Seuss"
  },
  {
    quote:"Friendship ... is born at the moment when one man says to another What! You too? I thought that no one but myself . . .",
    author:"Mark Twain"
  },
  {
    quote:"If you tell the truth, you don't have to remember anything.",
    author:"Mark Twain"
  }
];
var quote=document.getElementById("quote");
var author=document.getElementById("author");
lastIndex=-1;
function getQuotes(){
  var randomNumber;
do{
  // the do while loop :
  // this will create a random number of the array
  //the condition means that if the randomnumber ==lastindex create new randomnumber to avoid repeating quotes
  randomNumber=Math.floor(Math.random() * quotes.length);
} while(randomNumber==lastIndex)
  // quotes[randomNumber].quote => the randomnumber refers to the numbers in the array so it became the iterator of the array
  document.getElementById("quote").innerHTML=quotes[randomNumber].quote;
  document.getElementById("author").innerHTML=quotes[randomNumber].author;
  
 lastIndex = randomNumber;


  // i=> isnt the iterator anymore after  declaring  the  randomNumber=Math.floor(Math.random() * quotes.length);
 //  document.getElementById("quote").innerHTML=${quotes[i].quote};
  //  document.getElementById("author").innerHTML=quotes[i].author;

 
}
