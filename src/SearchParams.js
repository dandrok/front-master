import React from "react";

import { useState } from "react";

const ANIMALS = ["cat", "dog", "tiger", "monkey", "elephant"];

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle. WA");

  const [animal, setAnimal] = useState("");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          <input
            type="text"
            id="location"
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />
        </label>
        <label htmlFor="animal">
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map((animal) => {
              return (
                <option value={animal} key={animal}>
                  {animal}
                </option>
              );
            })}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
