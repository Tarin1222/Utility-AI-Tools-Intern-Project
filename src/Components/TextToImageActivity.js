import React, { useState } from 'react';
import './TextToImageActivity.css'; // Create a CSS file for styling

const TextToImageActivity = () => {
  const [promptText, setPromptText] = useState('');
  const [samples, setSamples] = useState(1);
  const [result, setResult] = useState([]);
  const [promptHistory, setPromptHistory] = useState([]); // State to store prompt history

  const generate = async () => {
    const prompt = {
      key: "5MqpLpSJY3vBIPyWYQKZTzSlG9TF7JeZZeclqQT8jKYt7lHjkKQLr7HwCvox", // API key
      prompt: promptText,
      negative_prompt: "((out of frame)), ((extra fingers)), ((extra legs))",
      width: "512",
      height: "512",
      samples: samples,
      num_inference_steps: "20",
      safety_checker: "no",
      enhance_prompt: "yes",
      temp: "yes",
      seed: null,
      guidance_scale: 7.5,
      webhook: null,
      track_id: null
    };

    if (promptText) {
      try {
        const response = await fetch('https://modelslab.com/api/v3/text2img', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(prompt)
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        if (data.status === 'failed') {
          console.error('Generation failed:', data.message || 'Unknown error');
          setResult([`Generation failed: ${data.message || 'Unknown error'}`]);
          return;
        }

        setResult(data.output);

        // Save the prompt and current date/time to history
        const dateTime = new Date().toLocaleString(); // Get current date/time
        setPromptHistory([...promptHistory, { prompt: promptText, dateTime }]); // Update history

      } catch (error) {
        console.error('Error:', error);
        setResult(['Error generating image. Please try again.']);
      }
    } else {
      alert('Please enter a prompt.');
    }
  };

  // Function to copy text to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <div className="container">
      <div className="input-container1">
        <label htmlFor="prompt">Prompt:</label>
        <input
          type="text"
          id="prompt"
          className="prompt-field1"
          placeholder="Enter your prompt here"
          value={promptText}
          onChange={(e) => setPromptText(e.target.value)}
        />
      </div>
      <div className="input-container1">
        <label htmlFor="samples">Samples:</label>
        <select
          id="samples"
          className="samples-dropdown"
          value={samples}
          onChange={(e) => setSamples(e.target.value)}
        >
          <option value="1">1 Sample</option>
          <option value="2">2 Samples</option>
          <option value="3">3 Samples</option>
          <option value="4">4 Samples</option>
        </select>
      </div>
      <button className="generate-button1" onClick={generate}>Generate</button>
      <div className="result">
        {Array.isArray(result) ? (
          result.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`Generated ${index + 1}`} />
          ))
        ) : (
          <p>{result}</p>
        )}
      </div>

      {/* History Table */}
      <div className="history-container">
        <h2>Prompt History</h2>
        <table className="history-table">
          <thead>
            <tr>
              <th>Prompt</th>
              <th>Date & Time</th>
              <th>Copy</th> {/* New column for copy functionality */}
            </tr>
          </thead>
          <tbody>
            {promptHistory.map((entry, index) => (
              <tr key={index}>
                <td>{entry.prompt}</td>
                <td>{entry.dateTime}</td>
                <td>
                  <button
                    className="copy-button"
                    onClick={() => copyToClipboard(entry.prompt)}
                  >
                    Copy
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TextToImageActivity;
