import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {displayVariant} from './Variants';
import {useDispatch} from 'react-redux';
import * as styles from './styles.module.css';

function EnterImperialWeight() {
    const [stones, setStones] = useState('');
    const [pounds, setPounds] = useState('');
    const dispatch = useDispatch();

    const validateInput = (input) => {
        return !input.match(/^[0-9]+\.$/) && !input.match(/^[0-9]+.[0-9]+$/) && !input.match(/^[0-9]+$/) && input.length;
    }

    const handleStones = (e) => {
        const input = e.target.value;

        if(validateInput(input) || Number(input) > 10000) 
            return;
        setStones(input);
    }

    const handlePounds = (e) => {
        const input = e.target.value;

        if(validateInput(input) || Number(input) > 13) 
            return;
        setPounds(input);
    }
    
    const handleBlurStones = () => {
        if(!stones || !pounds) return;

        let weight = (Number(stones) * 6.35) + (Number(pounds) * 0.45);
        dispatch({type: 'UPDATE_WEIGHT', weight});
    }

    const handleBlurPounds = () => {
        if(!stones || !pounds) return;
        
        let weight = (Number(stones) * 6.35) + (Number(pounds) * 0.45);
        dispatch({type: 'UPDATE_WEIGHT', weight});
    }

    return(
        <div className={styles.fieldsets}>
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
                    id={styles.st} 
                    value={stones} 
                    onChange={handleStones} 
                    onBlur={handleBlurStones}/>
                <motion.p
                    variants={displayVariant}
                    initial='hide'
                    animate='show' 
                    transition={{delay: 0.4}}>
                        st
                </motion.p>
            </fieldset>          
            <fieldset className={styles.container}>
                <motion.input 
                    variants={displayVariant}
                    initial='hide'
                    animate='show' 
                    transition={{
                        duration: 0.4
                    }}
                    type='text' 
                    className={styles.input} 
                    id={styles.lbs} 
                    value={pounds} 
                    onChange={handlePounds} 
                    onBlur={handleBlurPounds}/>
                <motion.p
                    variants={displayVariant}
                    initial='hide'
                    animate='show' 
                    transition={{delay: 0.4}}
                >
                    lbs
                </motion.p>
            </fieldset>          
        </div>
   
    )
}

export default EnterImperialWeight;