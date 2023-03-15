import React, { useState } from "react";
import "./Checkbox.css";
import { useNavigate } from "react-router-dom";

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

var selection = [];

const App = () => {
  // This checks if the button is clicked on not and holds the data
  const [checked, setChecked] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setChecked({ ...checked, [e.target.id]: e.target.checked });
    // setChecked(!checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkedCheckboxes = Object.values(checked).filter(
      (isChecked) => isChecked
    );

    if (checkedCheckboxes.length > 1) {
      selection = checked;
      navigate("/favourites");
    } else {
      alert("Please click on two or more selections to get your mix!");
    }
  };

  const checkboxes = [
    { id: 1, label: "Rock" },
    { id: 2, label: "Hip Hop" },
    { id: 3, label: "Pop" },
    { id: 4, label: "Punk" },
    { id: 5, label: "Metal" },
    { id: 6, label: "Classical" },
    { id: 7, label: "Electronic" },
    { id: 8, label: "Reggaeton" },
    { id: 9, label: "Indie" },
    { id: 10, label: "70s" },
    { id: 11, label: "80s" },
    { id: 12, label: "90s" },
    { id: 13, label: "2000s" },
    { id: 14, label: "2010s" },
    { id: 15, label: "2020s" },
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

export { App, selection };
