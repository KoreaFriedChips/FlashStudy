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
        <div className="row">
          <DisplayCard
            title={"Stoiciometry"}
            preview={"The mole concept"}
            route={"/chem-stoich"}
          />
          <DisplayCard
            title={"Atomic Structure"}
            preview={"The nuclear atom"}
            route={"/chem-atomic"}
          />
          <DisplayCard
            title={"Periodicity"}
            preview={"Periodic trends"}
            route={"/chem-periodicity"}
          />
        </div>
        <div className="row">
          <DisplayCard
            title={"Chemical Bonding and Structure"}
            preview={"How atoms bond"}
            route={"/chem-bonding"}
          />
          <DisplayCard
            title={"Energetics"}
            preview={"Enthalpy and energy changes"}
            route={"/chem-energetics"}
          />
          <DisplayCard
            title={"Kinetics"}
            preview={"Rates of reactions"}
            route={"/chem-kinetics"}
          />
        </div>
        <div className="row">
          <DisplayCard
            title={"Equilibrium"}
            preview={"LeChatelier's principle"}
            route={"/chem-equilibrium"}
          />
          <DisplayCard
            title={"Acids and Bases"}
            preview={"pH and titrations"}
            route={"/chem-acid-base"}
          />
          <DisplayCard
            title={"Redox Processes"}
            preview={"Oxidation and reduction"}
            route={"/chem-redox"}
          />
        </div>
        <div className="row">
          <DisplayCard
            title={"Organic Chemistry"}
            preview={"Organic compounds"}
            route={"/chem-organic"}
          />
          <DisplayCard
            title={"Measurement and Data Processing"}
            preview={"Uncertainty and error"}
            route={"/chem-measurement"}
          />
          <DisplayCard
            title={"Option C: Energy"}
            preview={"Energy sources and systems"}
            route={"/chem-option-c"}
          />
        </div>
      </div>
      <button type="button" onClick={handleClick}>
        Create Your Own Flashcards
      </button>
    </div>
  );
};

export default Home;
