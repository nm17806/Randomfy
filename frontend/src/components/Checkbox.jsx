import React, { useState } from "react";
import {useNavigate} from "react- router-dom"
import "./Checkbox.css";
import NoPlaylistAlert from "./NoPlaylistAlert";

import {rockSongs,
  hiphopSongs,
  popSongs,
  punkSongs,
  metalSongs, 
  classicalSongs,
  electronicSongs,
  reggaetonSongs,
  indieSongs,
  seventiesSongs,
  eightiesSongs,
  ninetiesSongs,
  twothousandsSongs,
  twentytenSongs,
  twentytwentySongs} from "../../../backend/controllers/checkboxController";

const Checkbox = ({ id, label, onChange }) => {
  return (
    <div className="cont">
      <input type="checkbox" id={id} onChange={onChange} />
      <label htmlFor={id} className="checkbox-button">
        {label}
      </label>
    </div>
  );
};

const App = () => {
  // This checks if the button is clicked on not and holds the data
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setChecked(!checked); 
    return (
      e.target.id(checked)
    )
    //setChecked({ ...checked, [e.target.id]: e.target.checked });
  };

  function handleSubmit(e){
    e.preventDefault();
    if(onChange >= 1){
      return (
        navigate("/favourites")
      )
    }else{NoPlaylistAlert()}
  };
  

  const checkboxes = [
    { id: 1, label: "Rock", onChange: rockSongs },
    { id: 2, label: "Hip Hop", onChange: hiphopSongs },
    { id: 3, label: "Pop", onChange: popSongs },
    { id: 4, label: "Punk", onChange: punkSongs },
    { id: 5, label: "Metal", onChange: metalSongs },
    { id: 6, label: "Classical", onChange: classicalSongs },
    { id: 7, label: "Electronic", onChange: electronicSongs },
    { id: 8, label: "Reggaeton", onChange: reggaetonSongs },
    { id: 9, label: "Indie", onChange: indieSongs },
    { id: 10, label: "70s", onChange: seventiesSongs },
    { id: 11, label: "80s", onChange: eightiesSongs },
    { id: 12, label: "90s", onChange: ninetiesSongs },
    { id: 13, label: "2000s", onChange: twothousandsSongs },
    { id: 14, label: "2010s", onChange: twentytenSongs },
    { id: 15, label: "2020s", onChange: twentytwentySongs }
  ];

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="grid">
          {checkboxes.map((checkbox) => (
            <Checkbox
              key={checkbox.id}
              id={checkbox.id}
              label={checkbox.label}
              onChange={handleChange}
            />
          ))}
        </div>
        <div className="submit-button">
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
