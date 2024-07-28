import React, {useState, useEffect} from 'react';
import { displayVariant } from './Variants';
import {motion} from 'framer-motion';
import {useDispatch} from 'react-redux';
import icons from './icons';
import * as styles from './styles.module.css';

function SelectUnit() {
    const [unit, setUnit] = useState('metric');
    const dispatch = useDispatch();

    const handleUnit = (e) => {
        setUnit(e.target.value);
    }

    useEffect(() => {
        dispatch({type: 'UPDATE_UNIT', unit});
    }, [unit])

    return(
        <fieldset className={styles.container}>
            <div>
                <label 
                    className={styles.radio} 
                    style={unit === 'metric' ? {borderColor: 'transparent'} : {}}
                    >
                    <input type='radio' id='metric' checked={unit === 'metric'} value='metric' onChange={handleUnit}/>
                    {unit === 'metric' && 
                        <motion.img 
                            className={styles.radio_checked} 
                            src={icons['radio']}
                            variants={displayVariant}
                            initial='hide'
                            animate='show'
                            />}
                </label>
                <label htmlFor='metric' className={styles.label}>
                    Metric
                </label>
            </div>
            <div>
                <label className={styles.radio} style={unit === 'imperial' ? {borderColor: 'transparent'} : {}}>
                    <input type='radio' id='imperial' checked={unit === 'imperial'} value='imperial' onChange={handleUnit}/>
                    {unit === 'imperial' && 
                        <motion.img 
                            className={styles.radio_checked} 
                            src={icons['radio']}
                            variants={displayVariant}
                            initial='hide'
                            animate='show'
                            />
                        }
                </label>
                <label htmlFor='imperial' className={styles.label}>
                    Imperial
                </label>
            </div>
        </fieldset>
    )
}

export default SelectUnit;