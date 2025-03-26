import React, {useState} from "react";
import SkipList from "../components/SkipList/SkipList";
import styles from "./SkipSelection.module.css";
import Navbar from "../components/Navbar/Navbar";

const SkipSelection = () => {
    const [selectedSkip, setSelectedSkip] = useState(null);

    return (
        <div className=" min-h-screen">
            <div>
                <Navbar />
            </div>

            <div className={`${styles.skipselection} container overflow-auto`}>
                <h1 className="text-3xl font-bold m-3">Choose Your Skip Size</h1>
                <h5 className="m-6 text-gray-400 font-medium text-2xl">Select the skip size that best suits your needs</h5>
                <SkipList onSkipSelect={setSelectedSkip} selectedSkip={selectedSkip}/>
            </div>

            {selectedSkip && (
                <div className="fixed bottom-0 left-0 w-full bg-blue-600 text-white p-4 flex justify-between items-center">
                    <p className="text-lg font-semibold">
                        Selected: {selectedSkip.size} Yard Skip - £{selectedSkip.price_before_vat} + VAT
                    </p>
                    <button className="font-semibold text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default SkipSelection;
