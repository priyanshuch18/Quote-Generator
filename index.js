// fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
//     console.log()
//     });

const button = document.querySelector('button')
const quote = document.querySelector('.quote')
const authorName = document.querySelector('.name')
const speakaloud = document.querySelector('.sound')
const copybutton = document.querySelector('.copy')
const twitterbutton = document.querySelector('.twitter')


async function fetchData() {
    button.innerText ='Loading quote...'
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    quote.innerText = data.content
    authorName.innerText = data.author
    button.innerText = 'New Quote'
   }

speakaloud.addEventListener('click',()=>{
    textToSpeech()
})
copybutton.addEventListener('click',()=>{
    navigator.clipboard.writeText(quote.innerText)
})

button.addEventListener('click',()=>{
    fetchData()

});
twitterbutton.addEventListener("click", ()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quote.innerText}`;
    window.open(tweetUrl, "_blank"); // opening a new twitter tab with passing quote in the url
    
})



// let isSpeaking = true;


const textToSpeech = () =>{
    const synth = window.speechSynthesis;
    const text = quote.innerText;
    

        const utternace = new SpeechSynthesisUtterance(`${text} by ${authorName.innerText}`)
        synth.speak(utternace)
}