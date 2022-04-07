const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
tag = document.querySelector(".tags .tag"),
quoteBtn = document.querySelector("button"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter");



// random Quore function
function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
//    fetching random quotes/data from the API and parsing it into Javascript object
   fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
   
    quoteText.innerText = result.content;
    authorName.innerText = result.author;
    tag.innerText = result.tags;
    quoteBtn.innerText = "New Quote";
    quoteBtn.classList.remove("loading");
   });
}

soundBtn.addEventListener("click", () => {
    // the SpeechSynthesisUtterance is a web speech api that represents a speech request
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${ authorName.innerText}`);
    speechSynthesis.speak(utterance); // speak method of speechSynthesis speaks the utterance
});

copyBtn.addEventListener("click", () => {
//   copying the quote text on copyBtn click
//  writeText() property writes the specified text string to the system clipboard
navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank");
});


quoteBtn.addEventListener("click",randomQuote);