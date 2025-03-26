import React from "react";
import styles from "./SkipCard.module.css";

const SkipCard = ({ skip, onSelect, isSelected }) => {
    return (
         <div className={`border-2 rounded-3xl border-gray-900 bg-gray-800 ${styles.skipcard} ${isSelected ? "border-slate-600" : ""} max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700`}>
            <a href="#">
                <img className="rounded-t-lg" src="./image.jpg" alt="" />
            </a>

            <div className="p-5 h-full">
                <div className="h-max">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-left">{skip.size} Yard Skip</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">{skip.hire_period_days} days hire period</p>
                    <h5 className="mb-4 text-3xl font-light tracking-tight text-gray-900 dark:text-white ">£{skip.price_before_vat} + VAT
                        <span className="text-sm font-normal text-gray-700 dark:text-gray-400">
                            per week
                        </span>
                    </h5>
                    {!skip.allowed_on_road && 
                    <div class="flex items-center py-1 px-2 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800" role="alert">
                        <svg class="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                        </svg>
                        <span class="sr-only">Info</span>
                        <div className="text-start">
                            <span class="font-medium text-left">Only Private Areas!</span> 
                        </div>
                    </div>
                    }
                    {!skip.allows_heavy_waste && 
                    <div class="flex items-center py-1 px-2 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
                        <svg class="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                        </svg>
                        <span class="sr-only">Info</span>
                        <div class="text-left">
                            <span class="font-medium">Heavy Waste Not Allowed!</span>
                        </div>
                    </div>
                    }
                </div>
                <div className={styles.selectdiv}>
                    <button type="button" 
                    disabled={!skip.allows_heavy_waste}
                    className={`${styles.selectbtn} rounded-lg text-sm font-semibold px-5 py-2.5 text-center inline-flex items-center w-full justify-center
                            ${isSelected ? "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" : 
                            ""}
                            ${!skip.allows_heavy_waste ? "cursor-not-allowed text-gray-900 bg-gradient-to-r from-zinc-600 via-zinc-700 to-zinc-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-zinc-500 dark:focus:ring-zinc-800 shadow-lg shadow-zinc-500/50 dark:shadow-lg dark:shadow-zinc-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" : 
                                "bg-blue-700 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"}
                            `}
                    onClick={() => onSelect(isSelected ? null : skip)}
                    >
                    {isSelected ? 
                    <>
                        <span>Deselect</span>
                    </>
                    : 
                    <>
                        <span>Select This Skip</span>
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </>
                    }
                    </button>
                </div>
            </div>
        </div>


    );
};

export default SkipCard;
