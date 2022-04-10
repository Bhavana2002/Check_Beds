import React from 'react'
import { filterpincode, gethospital } from "../../functions/apifunctions";
import css from "./HospitalPage.module.css";
import { useSelector, useDispatch } from "react-redux";
function HospitalPage() {
    const Redux = useSelector((state) => state);
    console.log(Redux);
    const dispatch = useDispatch();
    const data = filterpincode(Redux.pincode);
    var sno = 0;
    const requestfunction = (event) => {

        dispatch({ type: "addhospital", payload: { hospital: gethospital(event.currentTarget.id) } });
    }
    return (
        <React.Fragment>
            <div className={css.apphead}>
                <p>CHECKBEDS</p>
            </div>
            <div>
                <table className={css.tablecss}>
                    <tr>
                        <th className={css.tdthcss}>Hospital Name</th>
                        <th className={css.tdthcss}>Emergency Beds</th>
                        <th className={css.tdthcss}>General Beds</th>
                        <th className={css.tdthcss}>Request Bed</th>
                    </tr>
                    {
                        data.length !== 0 ? data.map((val) => {
                            sno++;
                            return <tr>
                                <td className={css.tdthcss}>{val.name}</td>
                                <td className={css.tdthcss}>{val.emergencybedsavailable.length}</td>
                                <td className={css.tdthcss}>{val.generalbedsavailable.length}</td>
                                <td className={css.tdthcss}><button id={`${val.id}`} style={{ cursor: 'pointer' }} onClick={requestfunction}>Request bed</button></td>
                            </tr>
                        }) : null
                    }

                </table>
            </div>
        </React.Fragment>
    )
}
export default HospitalPage