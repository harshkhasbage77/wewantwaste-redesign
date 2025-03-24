import React, { useEffect, useState } from "react";
import { fetchSkips } from "../../api";
import SkipCard from "../SkipCard/SkipCard";
import styles from "./SkipList.module.css";

const SkipList = () => {
    const [skips, setSkips] = useState([]);

    useEffect(() => {
        fetchSkips().then(setSkips);
    }, []);

    return (
        <div className={styles.skiplist}>
            {skips.map(skip => (
                <SkipCard key={skip.id} skip={skip} />
            ))}
        </div>
    );
};

export default SkipList;
