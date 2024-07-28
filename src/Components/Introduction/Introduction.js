import React from 'react';
import images from './images';
import icons from './icons';
import * as styles from './styles.module.css';

function Introduction() {
    return(
        <article className={styles.container}>
            <img className={styles.curve} src={icons['curve']}/>
            <img className={styles.image} src={images['manEating']}/>
            <section className={styles.content}>
                <h1>
                    What your BMI result means
                </h1>
                <p>
                    A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' 
                    Maintaining a healthy weight may lower your chances of experiencing 
                    health issues later on, such as obesity and type 2 diabetes. 
                    Aim for a nutritious diet with reduced fat and sugar content, 
                    incorporating ample fruits and vegetables. 
                    Additionally, strive for regular physical activity, 
                    ideally about 30 minutes daily for five days a week.
                </p>
            </section>
        </article>
    )
}

export default Introduction;