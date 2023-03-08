import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import "./Checkbox.css";
import NoSelectionAlert from "./NoSelectionAlert";

import {RockSongs,
  HipHopSongs,
  PopSongs,
  PunkSongs,
  MetalSongs, 
  ClassicalSongs,
  ElectronicSongs,
  ReggaetonSongs,
  IndieSongs,
  SeventiesSongs,
  EightiesSongs,
  NinetiesSongs,
  TwothousandsSongs,
  TwentytenSongs,
  TwentytwentySongs} from "./fetchSongs";

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
    { id: 1, label: "Rock", onSelected: RockSongs },
    { id: 2, label: "Hip Hop", onSelected: HipHopSongs },
    { id: 3, label: "Pop", onSelected: PopSongs },
    { id: 4, label: "Punk", onSelected: PunkSongs },
    { id: 5, label: "Metal", onSelected: MetalSongs },
    { id: 6, label: "Classical", onSelected: ClassicalSongs },
    { id: 7, label: "Electronic", onSelected: ElectronicSongs },
    { id: 8, label: "Reggaeton", onChaonSelectednge: ReggaetonSongs },
    { id: 9, label: "Indie", onSelected: IndieSongs },
    { id: 10, label: "70s", onSelected: SeventiesSongs },
    { id: 11, label: "80s", onSelected: EightiesSongs },
    { id: 12, label: "90s", onSelected: NinetiesSongs },
    { id: 13, label: "2000s", onSelected: TwothousandsSongs },
    { id: 14, label: "2010s", onSelected: TwentytenSongs },
    { id: 15, label: "2020s", onSelected: TwentytwentySongs }
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