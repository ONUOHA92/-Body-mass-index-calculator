import React from 'react';
import BMICalculator from './BMICalculator';
import icons from './icons';
import * as styles from './styles.module.css';

function Header() {
    return(
        <header className={styles.header}>
            <section className={styles.header_blueBox}>
                <div className={styles.header_content}>
                    <img className={styles.logo} src={icons['logo']}/>
                    <h1>
                        Body Mass Index Calculator
                    </h1>
                    <p>
                        Better understand your weight in relation to your height using our body mass index (BM) calculator. 
                        While BMI is not the sole determinant of a healthy weight, it offers a 
                        valuable starting point to evaluate your overall health and well-being.
                    </p>
                </div>
            </section>
            <BMICalculator/>
        </header>
    )
}

export default Header;