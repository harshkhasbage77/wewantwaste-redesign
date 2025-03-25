import React, {useState} from "react";
import SkipList from "../components/SkipList/SkipList";
// import "../styles/SkipSelection.css";
import styles from "./SkipSelection.module.css";

const SkipSelection = () => {
    const [selectedSkip, setSelectedSkip] = useState(null);

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="w-full bg-gray-800 text-white p-4">Navigation</div>

            <div className={`${styles.skipselection} container overflow-auto`}>
                <h1 className="text-3xl font-bold m-3">Choose Your Skip Size</h1>
                <h5 className="m-3">Select the skip size that best suits your needs</h5>
                <SkipList onSkipSelect={setSelectedSkip} selectedSkip={selectedSkip}/>
            </div>

            {selectedSkip && (
                <div className="fixed bottom-0 left-0 w-full bg-blue-600 text-white p-4 flex justify-between items-center">
                    <p className="text-lg font-semibold">
                        Selected: {selectedSkip.size} Yard Skip - £{selectedSkip.price_before_vat} + VAT
                    </p>
                    <button className="bg-green-500 text-white px-4 py-2 rounded">
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default SkipSelection;
