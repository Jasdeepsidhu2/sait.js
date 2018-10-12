
// ********* Quote Machine*************

var quote1={
    description:'Very little is needed to make a happy life; it is all within yourself, in your way of thinking.',
    author:'--Marcus Aurelius'
};

var quote2={
    description:'Believe that life is worth living and your belief will help create the fact.',
    author:'--William James'
};
var quote3={
    description:"Share your smile with the world. It's a symbol of friendship and peace.",
     author:'--Christie Brinkley'

};
var quote4={
    description: 'For every minute you are angry you lose sixty seconds of happiness.' ,
    author:' ― Ralph Waldo Emerson'
    
}
var quote5={
    description:'For every minute you are angry you lose sixty seconds of happiness.',
    author:'― Ralph Waldo Emerson'
}

var quotes=[quote1,quote2,quote3,quote4,quote5];
for(var i=0; i<quotes.length;i++)
{
    console.log( quotes[i]);

}

var mainDiv= document.getElementsByClassName('main')[0];
var q1=document.getElementById('paragraph');
var a=document.getElementById('author');

q1.innerHTML=quotes[0].description;
a.innerHTML=quotes[0].author;
var i=0;

function change(event){
    
    q1.innerHTML=quotes[i].description;
    a.innerHTML=quotes[i].author;
    // alert('hello'+ i);
    i++;

    if(i===quotes.length){
       i=0;
    }

}
// setInterval(change,3000);

var back=document.getElementById('backbutton');
var next=document.getElementById('nextbutton');
var nextQuote=function (event){
    alert('next');

}
var lastQuote= function(event){
    alert('last');


}
back.addEventListener('click',lastQuote);
next.addEventListener('click',nextQuote);


