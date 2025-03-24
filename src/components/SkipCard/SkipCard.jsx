import React from "react";
// import "../styles/SkipSelection.css";
import styles from "./SkipCard.module.css";

const SkipCard = ({ skip }) => {
    return (
        <div className={styles.skipcard}>
            <h2>{skip.size} Yard Skip</h2>
            <p>Hire Period: {skip.hire_period_days} days</p>
            <p>Price: £{skip.price_before_vat} + VAT</p>
            {skip.allowed_on_road && <span className={styles.badge}>On Road</span>}
            {skip.allows_heavy_waste && <span className={styles.badge}>Heavy Waste Allowed</span>}
            <button className={styles.selectbtn}>Select</button>
        </div>
    );
};

export default SkipCard;
