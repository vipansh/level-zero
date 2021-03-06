import React, { useState } from "react";
import "../styles/MarkEight.css"
const emojiDictionary = {
  "๐": " Grinning Face with Big Eyes",
  "๐": " Grinning Face with Smiling Eye",
  "๐": "Grinning Squinting Face",
  "๐": "Grinning Face with Sweat",
  "๐คฃ": " Rolling on the Floor Laughing",
  "๐": "Face with Tears of Joy",
  "๐": "Slightly Smiling Face",
  "๐": " Winking Face",
  "๐": "Smiling Face with Smiling Eyes",
  "๐": "Smiling Face with Halo",
  "๐ฅฐ": "Smiling Face with Hearts",
  "๐": "Smiling Face with Heart-Eyes",
  "๐คฉ": "Star-Struck",
  "๐": " Face Blowing a Kiss",
  "๐": " Kissing Face",
  "๐": " Kissing Face with Closed Eyes",
  "๐": " Kissing Face with Smiling Eyes",
  "๐": " Face Savoring Food",
  "๐": "Face with Tongue",
  "๐": "Winking Face with Tongue",
  "๐คช": "Zany Face",
  "๐": "Squinting Face with Tongue",
  "๐ค": "Money-Mouth Face",
  "๐ค": "Hugging Face",
  "๐คญ": "Face with Hand Over Mouth",
  "๐คซ": "Shushing Face",
  "๐ค": "Thinking Face",
  "๐ค": "Zipper-Mouth Face",
  "๐คจ": "Face with Raised Eyebrow",
  "๐": "Neutral Face"
};

var emojiWeHave = Object.keys(emojiDictionary);

export default function MarkEight() {
  const [meaning, setmeaning] = useState("");

  function eventHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we don't have this emoji right now";
    }
    setmeaning(meaning);
  }

  function emojiHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Welcome to emojis world</h1>
      <input className="input" onChange={eventHandler}></input>
      <h2>{meaning}</h2>
      <h3>emojis we have</h3>
      {emojiWeHave.map((emoji) => (
        <span
          onClick={() => emojiHandler(emoji)}
          key={emoji}
          style={{ padding: "2.5rem 3rem", fontSize: "2rem",cursor:"pointer" }}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}
