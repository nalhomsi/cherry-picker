import React, {useState} from "react"


function VinVerify() {
    const [infoData, setInfoData] = useState({
        vinNumber: '',
        modelYear: '',
      });
const handlesubmit = async (event)=> {
    event.preventDefault()
    console.log("handleSubmit")
    const {vinNumber,modelYear}={...infoData}
    try {
const response = await fetch (`https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/${vinNumber}?format=json&modelyear=${modelYear}`)
    if (!response.ok) {
        throw new Error ("Something's not right")
    } 
    const data = await response.json ()
    console.log(data)
}

    catch (error) {
        console.error(error)
    }
}
const handleInputChange=(event)=>{
    event.preventDefault()
    const { name, value } = event.target;
    setInfoData({ ...infoData, [name]: value });
}
    return(
        <center><section>
            <div>
                <form onSubmit ={handlesubmit}>
                  <h4>Enter Model Year   | Enter VIN Number</h4>
                    <input
                    type="text"
                        placeholder ="please enter model year"
                        name = "modelYear"
                        onChange={handleInputChange}
                        value={infoData.modelYearr}
                    />
                    <input
                    type="text"
                    placeholder ="enter VIN number"
                    name = "vinNumber"
                    onChange={handleInputChange}
                    value={infoData.vinNumber}
                    />  
            
                    <br />
                    <br />
                    <button>Check Your Vin</button>
                </form>
            </div>
        </section></center>
    )
};



export default VinVerify;