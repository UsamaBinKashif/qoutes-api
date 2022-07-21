import React from "react";
import { useEffect, useState } from "react";
export default function Qoute() {
  const [slip, setSlip] = useState([]);
  const getQoute = async () => {
    let response = await fetch(
      "https://quote-garden.herokuapp.com/api/v3/quotes/random"
    );
    let data = await response.json();
    setSlip(data.data);
  };
  useEffect(() => {
    getQoute();
  }, []);
  return (
    <>
      <nav className="navbar">
        <button onClick={getQoute}>
          random{" "}
          <img
            src="https://cdn-icons.flaticon.com/png/512/5166/premium/5166590.png?token=exp=1658409401~hmac=408b7b17ac50043da2159a1b3c4358d1"
            alt=""
          />
        </button>
      </nav>
      <div className="main">
        {slip.map(({ _id, quoteAuthor, quoteText, quoteGenre }) => (
          <article key={_id}>
              
            <div className="qouteContainer">
              <h2 className="qoute">{`"${quoteText}"`}</h2>
            </div>
            <div className="authorContainer">
              <p className="qouteAuthor">{quoteAuthor}</p>
              <p className="qouteGenre">{quoteGenre}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
