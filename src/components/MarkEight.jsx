import React, { useState } from "react";
import "../styles/MarkEight.css"
const emojiDictionary = {
  "😃": " Grinning Face with Big Eyes",
  "😄": " Grinning Face with Smiling Eye",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": " Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "😉": " Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": " Face Blowing a Kiss",
  "😗": " Kissing Face",
  "😚": " Kissing Face with Closed Eyes",
  "😙": " Kissing Face with Smiling Eyes",
  "😋": " Face Savoring Food",
  "😛": "Face with Tongue",
  "😜": "Winking Face with Tongue",
  "🤪": "Zany Face",
  "😝": "Squinting Face with Tongue",
  "🤑": "Money-Mouth Face",
  "🤗": "Hugging Face",
  "🤭": "Face with Hand Over Mouth",
  "🤫": "Shushing Face",
  "🤔": "Thinking Face",
  "🤐": "Zipper-Mouth Face",
  "🤨": "Face with Raised Eyebrow",
  "😐": "Neutral Face"
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
