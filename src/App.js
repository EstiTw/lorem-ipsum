import React, { useState } from "react";
import data from "./data";

function App() {
  const [amount, setAmount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount > data.length) setText(data);
    const text = amount < 2 ? [data[0]] : data.slice(0, amount);
    setText(text);
  };
  return (
    <section className="section-center" onSubmit={handleSubmit}>
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form">
        <label htmlFor="amount">paragraphs: </label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>

      <article className="lorem-text">
        {text && (
          <section className="section-center">
            {text.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </section>
        )}
      </article>
    </section>
  );
}

export default App;
