import React from 'react';
import icons from './icons';
import * as styles from './styles.module.css';

function Tips() {
    return(
        <ul className={styles.list}>
            <li>
                <img src={icons['eating']}/>
                <strong>
                    Healthy eating
                </strong>
                <p>
                    Healthy eating promotes weight control, 
                    disease prevention, better digestion, 
                    immunity, mental clarity, and mood.
                </p>
            </li>
            <li>
                <img src={icons['exercise']}/>
                <strong>
                    Regular exercise
                </strong>
                <p>
                    Exercise improves fitness, aids weight control, 
                    elevates mood, and reduces disease risk, 
                    fostering wellness and longevity.
                </p>
            </li>
            <li>
                <img src={icons['sleep']}/>
                <strong>
                    Adequate sleep
                </strong>
                <p>
                    Sleep enhances mental clarity, 
                    emotional stability, and physical 
                    wellness, promoting overall restoration 
                    and rejuvenation.
                </p>
            </li>
        </ul>
    )
}

export default Tips;