import React, { useState, useEffect } from "react";
import minifaker from "minifaker";
import "minifaker/locales/en";
import Suggestion from "./Suggestion";

export default function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggests = minifaker.array(5, (i) => ({
      username: minifaker.username({ locale: "en" }).toLowerCase(),
      jobTitle: minifaker.jobTitle(),
      id: i,
    }));
    setSuggestions(suggests);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between mb-5 text-sm">
        <h3 className="font-bold text-gray-400">Suggestion for you</h3>
        <button className="text-gray-600 font-semibold">See all</button>
      </div>

      {suggestions.map((suggestion) => (
        <Suggestion
          key={suggestion.id}
          img={`https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`}
          username={suggestion.username}
          jobTitle={suggestion.jobTitle}
          id={suggestion.id}
        />
      ))}
    </div>
  );
}
