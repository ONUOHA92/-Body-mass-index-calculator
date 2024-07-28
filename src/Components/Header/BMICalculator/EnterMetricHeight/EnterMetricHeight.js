import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {displayVariant} from './Variants';
import { useDispatch } from 'react-redux';
import * as styles from './styles.module.css';

function EnterMetricHeight() {
    const [height, setHeight] = useState('');
    const dispatch = useDispatch();

    const handleHeight = (e) => {
        const input = e.target.value;

        if(!input.match(/^[0-9]+\.$/) && !input.match(/^[0-9]+.[0-9]+$/) && !input.match(/^[0-9]+$/) && input.length) 
            return;

        if(Number(input) > 10000)
            return;

        setHeight(input);
    }
    
    const handleBlur = () => {
        dispatch({type: 'UPDATE_HEIGHT', height});
    }

    return(
        <fieldset className={styles.container}>
            <label htmlFor='height'>
                Height
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
                value={height} 
                onChange={handleHeight} 
                onBlur={handleBlur}
                
                />
            <motion.p
                variants={displayVariant}
                initial='hide'
                animate='show' 
                transition={{
                    delay: 0.4
                }}
            >
                cm
            </motion.p>
        </fieldset>
    )
}

export default EnterMetricHeight