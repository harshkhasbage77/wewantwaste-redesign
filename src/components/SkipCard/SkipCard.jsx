import React from "react";
// import "../styles/SkipSelection.css";
import styles from "./SkipCard.module.css";

const SkipCard = ({ skip, onSelect, isSelected }) => {
    return (
        <div className={`${styles.skipcard} ${isSelected ? styles.selected : ""}`}>
            <div className={styles.detailsdiv}>
                <h2>{skip.size} Yard Skip</h2>
                <p>Hire Period: {skip.hire_period_days} days</p>
                <p>Price: £{skip.price_before_vat} + VAT</p>
                {!skip.allowed_on_road && <span className={styles.badge}>Only Private Areas</span>}
                {!skip.allows_heavy_waste && <span className={styles.badge}>Heavy Waste Not Allowed</span>}
            </div>

            <div className={styles.selectdiv}>
                <button 
                    className={`${styles.selectbtn} ${isSelected ? "bg-red-500" : "bg-blue-500"} text-white px-4 py-2 rounded `}
                    onClick={() => onSelect(isSelected ? null : skip)}
                >
                    {isSelected ? "Deselect" : "Select"}
                </button>
            </div>
        </div>
    );
};

export default SkipCard;
