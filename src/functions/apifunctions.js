import data from "../SampleDataBase.json";
const filterpincode = (pincode) => {
    var hospitaldetail = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].pincode === pincode) {
            hospitaldetail.push(data[i]);
        }
    }
    for (var i = 0; i < hospitaldetail.length - 1; i++)
        for (var j = 0; j < hospitaldetail.length - 1 - i; j++) {
            if (hospitaldetail[j].emergencybedsavailable.length < hospitaldetail[j + 1].emergencybedsavailable.length) {
                var t = hospitaldetail[j];
                hospitaldetail[j] = hospitaldetail[j + 1];
                hospitaldetail[j + 1] = t;
            }
        }
    return hospitaldetail;
}
const gethospital = (id) => {
    for (var i = 0; i < data.length; i++) {
        if (data[i].id === id) {
            return data[i];
        }
    }
}
export { filterpincode, gethospital };