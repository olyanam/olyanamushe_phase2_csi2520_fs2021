var quotes= [
    '"The only person you are destined to become is the person you decide to be." – Ralph Waldo Emerson',
    '"Don’t give up on your dreams, or your dreams will give up on you." - John Wooden',
    '"Most people fail, not because of lack of desire, but, because of lack of commitment." - Vince Lombardi',
    '“All progress takes place outside the comfort zone.”- Michal Joan Bobak',
    '“It is health that is the real wealth, and not pieces of gold and silver.” – Mahatma Gandhi',
    '“When it comes to eating right and exercising, there is no ‘I’ll start tomorrow.’ Tomorrow is disease.” - V.L. Alliner ',
    '“Once you are exercising regularly, the hardest thing is to stop it.” - Erin Gray',
    '"All progress takes place outside the comfort zone." - Michael John Bobak'
]

function newQuote(){
    var randomQuote= Math.floor(Math.random()* (quotes.length));
    document.getElementById('quoteOutput').innerHTML=quotes[randomQuote];
}