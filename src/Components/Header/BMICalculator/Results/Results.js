import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as styles from './styles.module.css';

function Results() {
    const height = useSelector(state => state.height);
    const weight = useSelector(state => state.weight);
    const unit = useSelector(state => state.unit);
    const dispatch = useDispatch();
    const [results, setResults] = useState('');
    const [idealWeight, setIdealWeight] = useState('');

    const displaySuggestedWeight = () => {
        if(unit === 'metric')
            return `${(idealWeight - 13.2).toFixed(0)}kg - ${(idealWeight + 8.7).toFixed(0)}kg`;
        else{
            const totalPounds = idealWeight * 2.20462;
            const stones = totalPounds / 14;
            const pounds = totalPounds % 14;
            return `${(stones - 2).toFixed(0)}st ${pounds.toFixed(0)}lbs - ${(stones + 1).toFixed(0)}st ${pounds.toFixed(0)}lbs`   
        }    
    }

    useEffect(() => {
        if(!weight || !height) return;

        const result = Number(weight)/(Number(height)**2) * 10000;
        if(result > 100){
            alert('Height and weight are too large, please enter smaller numbers');
            setResults('');
            setIdealWeight('');
            return;
        }
            
        setResults(Number(result.toFixed(1)));
        setIdealWeight((height - 100) - ((height - 100) * 0.10));
    }, [weight, height])


    useEffect(() => {
        setResults('');
        setIdealWeight('');
        dispatch({type: 'CLEAR'});
    }, [unit])

    return (
        <section className={styles.container}>
            {results !== '' ? 
                <div className={styles.results}>
                    <h1>
                        Your BMI is...
                    </h1>
                    <strong>
                        {results}
                    </strong>
                    <p>
                        {results < 18.5 && 'Your BMI suggests you’re underweight. '}
                        {(results >= 18.5 && results <= 24.9) && 'Your BMI suggests you’re a healthy weight. '}
                        {(results >= 25 && results <= 29.9) && 'Your BMI suggests you’re overweight. '}
                        {(results >= 30) && 'Your BMI suggests you’re obese. '}
                        Your ideal weight is between <strong className={styles.idealWeight}>{displaySuggestedWeight()}</strong>
                    </p>
                </div> 
                : 
                <div className={styles.enter}>
                    <h1>
                        Welcome! 
                    </h1>
                    <p>
                        Enter your height and weight and you'll see your BMI result here
                    </p>
                </div>}
        </section>
    )
}

export default Results;