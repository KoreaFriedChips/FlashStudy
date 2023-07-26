import { Card } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import DisplayCard from "../components/DisplayCard";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/create");
  };
  return (
    <div>
      <h1>Welcome to FlashStudy!</h1>
      <p>Choose an option:</p>
      <div className="container">
        <DisplayCard
          title={"Stoiciometry"}
          preview={"The mole concept"}
          route={"/chem-stoich"}
        />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
      </div>
      <button type="button" onClick={handleClick}>
        Create Flashcards
      </button>
    </div>
  );
};

export default Home;
