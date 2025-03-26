import React, { useEffect, useState } from "react";
import { fetchSkips } from "../../api";
import SkipCard from "../SkipCard/SkipCard";
import styles from "./SkipList.module.css";

const SkipList = ({onSkipSelect, selectedSkip}) => {
    const [skips, setSkips] = useState([]);

    useEffect(() => {
        fetchSkips().then(setSkips);
    }, []);

    return (
        <div className={styles.skiplist}>
            {skips.length > 0 ? (
              skips.map(skip => (
                <SkipCard 
                  key={skip.id} 
                  skip={skip} 
                  onSelect={onSkipSelect}
                  isSelected={selectedSkip?.id === skip.id} 
                />))
              ) : (
              <div className={styles.wrapper}>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.shadow}></div>
                <div className={styles.shadow}></div>
                <div className={styles.shadow}></div>
            </div>
            )}
        </div>
    );
  };
  
  export default SkipList;
