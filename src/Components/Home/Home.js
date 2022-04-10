import React, { useRef } from 'react';
import css from "./Home.module.css";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"
function Home() {
    const pincode = useRef();
    const dispatch = useDispatch();
    const history = useHistory();
    const pincodefun = (event) => {
        event.preventDefault();
        console.log(pincode.current.value);
        dispatch({ type: "pincode", payload: { pincode: pincode.current.value } });
        history.push("/hospitals");
    }
    return (
        <React.Fragment>
            <div className={css.apphead}>
                <p>WELCOME TO CHECKBEDS</p>
            </div>
            <div className={css.homeform}>
                <form onSubmit={pincodefun}>
                    <input ref={pincode} placeholder='Enter pincode' style={{ width: '15vw', height: '3vw', borderRadius: '10px', border: '2px solid black', padding: '0vw 0vw 0vw 2.5vw', display: 'block', fontSize: '1.5vw' }} />
                    <button className={css.homeformbutton} type='submit'>Search</button>
                </form>
            </div>
        </React.Fragment>
    )
}

export default Home