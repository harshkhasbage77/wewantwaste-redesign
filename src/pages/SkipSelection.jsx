import React from "react";
import SkipList from "../components/SkipList/SkipList";
// import "../styles/SkipSelection.css";
import styles from "./SkipSelection.module.css";

const SkipSelection = () => {
    return (
        <div className={styles.skipselection}>
            <h1>Choose Your Skip Size</h1>
            <h5>Select the skip size that best suits your needs</h5>
            <SkipList />
        </div>
    );
};

export default SkipSelection;
