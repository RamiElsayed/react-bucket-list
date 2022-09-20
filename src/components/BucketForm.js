import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const BucketForm = ({ onSubmit, edit }) => {
  const [text, setText] = useState("");
  const [eagerness, setEagerness] = useState("low");

  const eagernessLevel = ["high", "medium", "low"];

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({
      id: uuidv4(),
      text,
      eagerness: eagerness || "low",
      isComplete: false,
    });

    setText("");
    setEagerness("low");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return !edit ? (
    <div>
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add to your bucket list"
          value={text}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          <button className={`dropbtn ${eagerness}`}>
            {eagerness || "Priority"}
          </button>
          <div className="dropdown-content">
            <p
              onClick={() => {
                setEagerness("high");
              }}
            >
              Must do
            </p>
            <p
              onClick={() => {
                setEagerness("medium");
              }}
            >
              Want to do
            </p>
            <p
              onClick={() => {
                setEagerness("low");
              }}
            >
              Take it or leave it
            </p>
          </div>
        </div>
        <button type="submit" className="bucket-button">
          Add bucket list item
        </button>
      </form>
    </div>
  ) : (
    <div>
      <h3>Update entry: {edit.value}</h3>
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={edit.value}
          value={text}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          <button className={`dropbtn ${eagerness}`}>
            {eagerness || "Priority"}
          </button>
          <div className="dropdown-content">
            {/* TODO: Add an onClick event that will set the corresponding eagerness level from the `eagernessLevel` array */}
            <p
              onClick={() => {
                setEagerness("high");
              }}
            >
              Must do
            </p>
            <p
              onClick={() => {
                setEagerness("medium");
              }}
            >
              Want to do
            </p>
            <p
              onClick={() => {
                setEagerness("low");
              }}
            >
              Take it or leave it
            </p>
          </div>
        </div>
        <button type="submit" className="bucket-button">
          Update
        </button>
      </form>
    </div>
  );
};
