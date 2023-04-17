import React, { useState } from "react";

const storyTemplates = [
  "Once upon a time, there was a {adjective} {noun} who loved to {verb} {adverb}.",
  "In a {adjective} forest, there was a {noun} who {verb} {adverb}.",
  "On a sunny {adjective} day, a {noun} decided to {verb} {adverb}.",
  // Add more story templates here
];

const MadLibsGame = () => {
  // State to hold user input values and selected story index
  const [noun, setNoun] = useState("");
  const [adjective, setAdjective] = useState("");
  const [verb, setVerb] = useState("");
  const [adverb, setAdverb] = useState("");
  const [story, setStory] = useState("");
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(0); // Initial value for selected story index
  const [error, setError] = useState(""); // State to hold error message

  // Function to handle story selection
  const handleStorySelection = (e) => {
    const selectedStoryIndex = parseInt(e.target.value);
    setSelectedStoryIndex(selectedStoryIndex);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled out
    if (!noun || !adjective || !verb || !adverb) {
      setError("*Please fill out all fields.");
      return;
    } else {
      setError("");
    }

    // Get the selected story template
    const selectedStoryTemplate = storyTemplates[selectedStoryIndex];

    // Replace placeholders in the selected story template with user input values
    const newStory = selectedStoryTemplate
      .replace("{noun}", noun)
      .replace("{adjective}", adjective)
      .replace("{verb}", verb)
      .replace("{adverb}", adverb);

    setStory(newStory);
  };

  return (
    <div className="myContainer">
      <h1>Mad Libs Game</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Select a story:
          <select value={selectedStoryIndex} onChange={handleStorySelection}>
            {storyTemplates.map((story, index) => (
               <option key={index} value={index}>
               {index === 0 && "Story 1: Once upon a time"}
               {index === 1 && "Story 2: In a Forest"}
               {index === 2 && "Story 3: On a Sunny Day"}
             </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Noun:
          <input
            type="text"
            value={noun}
            onChange={(e) => setNoun(e.target.value)}
          />
        </label>
        <br />
        <label>
          Adjective:
          <input
            type="text"
            value={adjective}
            onChange={(e) => setAdjective(e.target.value)}
          />
        </label>
        <br />
        <label>
          Verb:
          <input
            type="text"
            value={verb}
            onChange={(e) => setVerb(e.target.value)}
          />
        </label>
        <br />
        <label>
          Adverb:
          <input
            type="text"
            value={adverb}
            onChange={(e) => setAdverb(e.target.value)}
          />
        </label>
        <br />
        {error && <p className="error-message">{error}</p>}
        
        <br />
        <button className="generate-btn"type="submit">Generate Story</button>
        
      </form>
      <br />
      {story && (
        <div className=".story">
          <h2>Generated Story</h2>
          <p>{story}</p>
        </div>
      )}
    </div>
  );
};

export default MadLibsGame;