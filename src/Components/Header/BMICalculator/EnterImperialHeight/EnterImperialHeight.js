import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {useDispatch} from 'react-redux';
import * as styles from './styles.module.css';
import {displayVariant} from './Variants';

function EnterImperialHeight() {
    const [feet, setFeet] = useState('');
    const [inches, setInches] = useState('');
    const dispatch = useDispatch();

    const validateInput = (input) => {
        return !input.match(/^[0-9]+\.$/) && !input.match(/^[0-9]+.[0-9]+$/) && !input.match(/^[0-9]+$/) && input.length;
    }

    const handleFeet = (e) => {
        const input = e.target.value;

        if(validateInput(input) || Number(input) > 10000) 
            return;
        setFeet(input);
    }

    const handleInches = (e) => {
        const input = e.target.value;

        if(validateInput(input) || Number(input) > 11) 
            return;
        setInches(input);
    }
    
    const handleBlurFeet = () => {
        const height = (Number(inches) * 2.54) + (Number(feet) * (12 * 2.54));
        if(height)
            dispatch({type: 'UPDATE_HEIGHT', height});
    }

    const handleBlurInches = () => {
        const height = (Number(inches) * 2.54) + (Number(feet) * (12 * 2.54));
        if(height)
            dispatch({type: 'UPDATE_HEIGHT', height});
    }

    return(
        <div className={styles.fieldsets}>
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
                    value={feet} 
                    onChange={handleFeet} 
                    onBlur={handleBlurFeet}
                    />
                <motion.p 
                    variants={displayVariant}
                    initial='hide'
                    animate='show' 
                    transition={{delay: 0.4}}
                    >
                        ft
                </motion.p>
            </fieldset>          
            <fieldset className={styles.container}>
                <motion.input 
                    variants={displayVariant}
                    initial='hide'
                    animate='show' 
                    transition={{duration: 0.4}}
                    type='text' 
                    className={styles.input} 
                    value={inches} 
                    onChange={handleInches} 
                    onBlur={handleBlurInches}/>
                <motion.p
                    variants={displayVariant}
                    initial='hide'
                    animate='show' 
                    transition={{delay: 0.4}}>
                        in
                </motion.p>
            </fieldset>          
        </div>
   
    )
}

export default EnterImperialHeight;