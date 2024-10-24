import React, { useState } from 'react';

function TextForm() {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState({ words: 0, characters: 0 });

  const handleUppercase = () => {
    setText(text.toUpperCase());
  };

  const handleLowercase = () => {
    setText(text.toLowerCase());
  };

  const handleClear = () => {
    setText('');
    setSummary({ words: 0, characters: 0 });
  };

  const handleTextChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);
    const words = inputText.split(/\s+/).filter((word) => word.length > 0).length;
    const characters = inputText.length;
    setSummary({ words, characters });
  };

  return (
    <div>
      <h2>Text Utilities</h2>
      <textarea
        value={text}
        onChange={handleTextChange}
        rows="5"
        cols="50"
        placeholder="Enter text here..."
      ></textarea>
      <br />
      <button onClick={handleUppercase}>Convert to Uppercase</button>
      <button onClick={handleLowercase}>Convert to Lowercase</button>
      <button onClick={handleClear}>Clear Text</button>
      <h3>Your text summary</h3>
      <p>{summary.words} words and {summary.characters} characters</p>
    </div>
  );
}

export default TextForm;
