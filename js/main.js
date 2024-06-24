var Quote_array = [
    {
        Quote: `Be yourself; everyone else is already taken.`,
        aurthor: " Oscar Wilde"
    },
    {
        Quote: `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.`,
        aurthor: " Marilyn Monroe"
    },
    {
        Quote: `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`,
        aurthor: " Albert Einstein"
    },
    {
        Quote: `You only live once, but if you do it right, once is enough.`,
        aurthor: " Mae West"
    },
    {
        Quote: `Be the change that you wish to see in the world.`,
        aurthor: " Mahatma Gandhi"
    },
    {
        Quote: `If you tell the truth, you don't have to remember anything.`,
        aurthor: " Mark Twain"
    },
    {
        Quote: `Insanity is doing the same thing, over and over again, but expecting different results.`,
        aurthor: " Narcotics Anonymous"
    },

]

function ShowQuote() {
    var QuoteRandom = document.getElementById('ShowQuote');
    var AurthorRandom = document.getElementById('Show_aurthor');
    var btton = document.getElementById('Btn');
    var random = Number.parseInt(Math.random() * Quote_array.length);

    if (Quote_array.length === 0) {
        btton.disabled = true;
        btton.textContent = "متجيش عشن مفيش";
        btton.style.fontSize="20px";
        QuoteRandom.textContent = "😂 No Risk No Fun كل متعطل اديها "
        AurthorRandom.textContent = "--Thanks🤡"
    }
    else {
        QuoteRandom.textContent = `"${Quote_array[random].Quote}"`;
        AurthorRandom.textContent = `--${Quote_array[random].aurthor}`;
        Quote_array.splice(random, 1);

    }
}