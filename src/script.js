import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'


const quotes = [

  {
    "quote": "Be yourself; everyone else is already taken.",
    "author": "Oscar Wilde",
    "profession": "Irish poet",
    "topics": [
      "Inspirational",
      "Advice",
      "Humor"
    ]
  },
  {
    "quote": "To live is the rarest thing in the world. Most people exist, that is all.",
    "author": "Oscar Wilde",
    "profession": "Irish poet",
    "topics": [
      "Philosophy",
      "Humor"
    ]
  },
  {
    "quote": "True friends stab you in the front.",
    "author": "Oscar Wilde",
    "profession": "Irish poet",
    "topics": [
      "Philosophy",
      "People"
    ]
  },
  {
    "quote": "Women are made to be Loved, not understood.",
    "author": "Oscar Wilde",
    "profession": "Irish poet",
    "topics": [
      "Philosophy",
      "Humor"
    ]
  },
  {
    "quote": "Be the change that you wish to see in the world.",
    "author": "Mahatma Gandhi",
    "profession": "Indian leader",
    "topics": [
      "Inspirational",
      "Philosophy",
      "Advice"
    ]
  },
  {
    "quote": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    "author": "Mahatma Gandhi",
    "profession": "Indian leader",
    "topics": [
      "Inspirational",
      "Life",
      "Advice"
    ]
  },
  {
    "quote": "No one can make you feel inferior without your consent.",
    "author": "Eleanor Roosevelt",
    "profession": "Former First Lady of the United States",
    "topics": [
      "Wisdom"
    ]
  }
]

const App = () => {
    const [quoty, setQuoty] = React.useState("Be yourself; everyone else is already taken.")
    const [authory, setAuthory] = React.useState("Oscar Wilde")
    const [colory, setColory] = React.useState()

    function randomQuote() {
        const quoteArray = quotes
        const randomNumber = Math.floor(Math.random() * quoteArray.length)
        const colors = ["blue", "yellow", "gray", "purple", "green", "black", "red", "darkblue", "AntiqueWhite", "Aqua",
            "BlueViolet", "BlueViolet", "DeepPink", "Indigo"]
        const randomColor = Math.floor(Math.random() * colors.length)

        setQuoty(quoteArray[randomNumber].quote)
        setAuthory(quoteArray[randomNumber].author)
        setColory(colors[randomColor])
    }

    document.body.style.backgroundColor = colory;

    return (
            <div id="quote-box">
                <div id="text">{quoty}</div>
                <div id="author">~ {authory}</div>
                <div id="link">
                    <a id="tweet-quote" href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
                        encodeURIComponent( '"' + quoty + '" ' + authory)}
                        target="_blank" className="btn btn-warning">
                        Tweet
                    </a>
                    <button onClick={randomQuote} id="new-quote" className="btn btn-primary">
                      New Quote
                    </button>
                </div>
            </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
