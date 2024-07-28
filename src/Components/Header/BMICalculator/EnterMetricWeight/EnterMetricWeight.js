import React, {useState} from 'react';
import {displayVariant} from './Variants';
import {motion} from 'framer-motion';
import { useDispatch } from 'react-redux';
import * as styles from './styles.module.css';

function EnterMetricWeight() {
    const [weight, setWeight] = useState('');
    const dispatch = useDispatch();

    const handleWeight = (e) => {
        const input = e.target.value;

        if(!input.match(/^[0-9]+\.$/) && !input.match(/^[0-9]+.[0-9]+$/) && !input.match(/^[0-9]+$/) && input.length) 
            return;

        if(Number(input) > 10000)
            return;

        setWeight(input);
    }

    const handleBlur = () => {
        dispatch({type: 'UPDATE_WEIGHT', weight});
    }

    return(
        <fieldset className={styles.container}>
            <label htmlFor='height'>
                Weight
            </label>
            <motion.input 
                variants={displayVariant}
                initial='hide'
                animate='show' 
                transition={{
                    duration: 0.4
                }}
                type='text' 
                className={styles.input} 
                value={weight} 
                onChange={handleWeight} 
                onBlur={handleBlur}/>
            <motion.p
                variants={displayVariant}
                initial='hide'
                animate='show' 
                transition={{
                    delay: 0.4
                }}
            >
                kg
            </motion.p>
        </fieldset>
    )
}

export default EnterMetricWeight;