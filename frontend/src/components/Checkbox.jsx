import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import "./Checkbox.css";
import NoSelectionAlert from "./NoSelectionAlert";

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

  const checkboxes = [
    { id: 1, label: "Rock", onSelected: rockSongs },
    { id: 2, label: "Hip Hop", onSelected: hiphopSongs },
    { id: 3, label: "Pop", onSelected: popSongs },
    { id: 4, label: "Punk", onSelected: punkSongs },
    { id: 5, label: "Metal", onSelected: metalSongs },
    { id: 6, label: "Classical", onSelected: classicalSongs },
    { id: 7, label: "Electronic", onSelected: electronicSongs },
    { id: 8, label: "Reggaeton", onChaonSelectednge: reggaetonSongs },
    { id: 9, label: "Indie", onSelected: indieSongs },
    { id: 10, label: "70s", onSelected: seventiesSongs },
    { id: 11, label: "80s", onSelected: eightiesSongs },
    { id: 12, label: "90s", onSelected: ninetiesSongs },
    { id: 13, label: "2000s", onSelected: twothousandsSongs },
    { id: 14, label: "2010s", onSelected: twentytenSongs },
    { id: 15, label: "2020s", onSelected: twentytwentySongs }
  ];

  const handleChange = (e) => {
    setChecked(!checked); 
    let selected = e.target.onSelected(checked)
    return selected
    //setChecked({ ...checked, [e.target.id]: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(checked >= 1){
      return (
        navigate("/favourites")
      )
    }else{NoSelectionAlert()}
  };  

 

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
            Get my mix!
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
export let selected;