import React from "react";
import SkipList from "../components/SkipList";
import "../styles/SkipSelection.css";

const SkipSelection = () => {
    return (
        <div className="skip-selection">
            <h1>Choose Your Skip Size</h1>
            <h5>Select the skip size that best suits your needs</h5>
            <SkipList />
        </div>
    );
};

export default SkipSelection;
