// import './index.css'
import Button from '@mui/material/Button';
import React, { useState } from "react";
import TextField from '@mui/material/TextField';

import style from './style.module.css'


const { useEffect } = React;
const NumGenerator = () => {
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(10);
    const [number, setNumber] = useState(1);

    const minChange = (event) => {
        setMin(event.target.value);
    };

    const maxChange = (event) => {
        setMax(event.target.value);
    };

    const generateNumber = (min, max) => {
        if (min === max) {
            return min;
        }

        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const getInputs = () => {
        if (min > max) {
            const minTemp = min;
            const maxTemp = max;

            setMin(maxTemp);
            setMax(minTemp);

            setNumber(generateNumber(max, min));
        } else {
            setNumber(generateNumber(min, max));
        }
    };
    useEffect(() => {
        setNumber(generateNumber(min, max));
    }, []);
    return (
        <div>
            <div className={style['wrapper-first-row']}>
                <div className={style['wrapper-result']}>
                    <p>{number}</p>
                </div>
                <div className={style['wrapper-nim-max']}>
                    <TextField id="standard-basic" label="min" variant="standard" value={min} onChange={minChange} />
                    <TextField id="standard-basic" label="max" variant="standard" value={max} onChange={maxChange} />
                </div>  
            </div>
            <div>
                <Button variant="contained" className={style['random-button']} type="submit" onClick={getInputs}>Generate Number</Button>
            </div>
        </div>
    );
};
export default NumGenerator
// ReactDOM.render(<NumGenerator />, document.getElementById("root"));
