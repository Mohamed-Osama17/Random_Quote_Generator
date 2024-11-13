//?=====Array=====//

//?==Use an array to hold the value of the quotes==//

var arrayOfQuotes = [
    {
        'author': 'Jim Rohn',
        'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {
        'author': 'Epictetus',
        'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {
        'author': 'Frank Sinatra',
        'quote': 'The best revenge is massive success.'
    },
    {
        'author': 'Wayne Gretzy',
        'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {
        'author': 'Nelson Mandela',
        'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {
        'author': 'Elbert Hubbard',
        'quote': 'Do not take life too seriously. You will not get out alive.'
    },
    {
        'author': 'J.K. Rowling, Harry Potter and the Goblet of Fire',
        'quote': 'If you want to know what a mans like, take a good look at how he treats his inferiors, not his equals.'
    },
    {
        'author': 'Mae West',
        'quote': 'You only live once, but if you do it right, once is enough.'
    },
    {
        'author': 'Dr. Seuss',
        'quote': 'You know you are in love when you can not fall asleep because reality is finally better than your dreams.'
    },
    {
        'author': 'Marcus Tullius Cicero',
        'quote': 'A room without books is like a body without a soul.'
    },
    {
        'author': 'William W. Purkey',
        'quote': 'You have gotta dance like there\'s nobody watching,Love like you\'ll never be hurt,Sing like there is nobody listening,And live like it is heaven on earth.'
    },
    {
        'author': 'Albert Einstein',
        'quote': 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.'
    },
    {
        'author': 'Martin Luther King Jr',
        'quote': 'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.'
    },
    {
        'author': 'Elbert Hubbard',
        'quote': 'A friend is someone who knows all about you and still loves you.'
    },
    {
        'author': 'الخوارزمى',
        'quote': 'اذا كان الانسان ذو اخلاق فهو يساوى واحد. وإذا كان الانسان ذو جمال فأضف إلى الواحد صفراً . وإذا كان ذو مال أيضاً فأضف صفراً اخر . وإذا كان ذو حسب ونسب فأضف صفراً اخر . فإذا ذهب العدد واحد وهو الأخلاق ذهبت قيمة الإنسان وبقيت الأصفار التى لا قيمة لها'
    },
];




// we using this variabl (the previousIndex variable) to prevent showing the same quote consecutively
let previousIndex

function generateQuote() {
  
  let index = "";
//   creat an index  of a random number
//   convert it into between 0 to length of arrayOfQuotes[]
  do { 
    index = Math.floor(Math.random() * arrayOfQuotes.length);
  } while (previousIndex == index);

  previousIndex = index;

  console.log(index);

//    call the id of (quote) you created in Html and assign to it the randomly generated quote(the property in the array) 
   document.getElementById("quote").innerHTML = arrayOfQuotes[index].quote;
//    call the id of (author) you created in Html and assign to it the randomly generated author(the property in the array)  
   document.getElementById("author").innerHTML = "--" + arrayOfQuotes[index].author;
}




