import React from "react";
import "../styles/SkipSelection.css";

const SkipCard = ({ skip }) => {
    return (
        <div className="skip-card">
            <h2>{skip.size} Yard Skip</h2>
            <p>Hire Period: {skip.hire_period_days} days</p>
            <p>Price: £{skip.price_before_vat} + VAT</p>
            {skip.allowed_on_road && <span className="badge">On Road</span>}
            {skip.allows_heavy_waste && <span className="badge">Heavy Waste Allowed</span>}
            <button className="select-btn">Select</button>
        </div>
    );
};

export default SkipCard;
