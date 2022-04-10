import React from 'react'
import css from "./Conformation.module.css";
function Conformation() {
    return (
        <React.Fragment>
            <div className={css.apphead}>
                <p>CHECKBEDS</p>
            </div>
            <div className={css.conform}>
                <p style={{}}>Care & Cure Hospital</p>
                <form>
                    <div className={css.radio}>
                        <input type="radio" id="emer" name="fav_language" value="Emergency" />
                        <label id="emer">Emergency Bed</label>
                        <input type="radio" id="gene" name="fav_language" value="General" />
                        <label id="gene">General Bed</label>
                    </div>
                    <div className={css.inputs}>
                        <input placeholder='Enter number' />
                        <input placeholder='Enter name' />
                        <button type='submit'>confirm</button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}

export default Conformation