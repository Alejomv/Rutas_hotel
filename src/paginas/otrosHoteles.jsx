import React from "react";

function OtrosHoteles(){
   return (
    <h1>Pagina otros Hoteles</h1>
   )
}
export function ResumenHoteles(){
    return(
        <>
            <div className="w3-container">
                <h3>Our Hotels</h3>
                <h6>You can find our hotels anywhere in the world:</h6>
            </div>
            <div className="w3-row-padding w3-padding-16 w3-text-white w3-large">
                <div className="w3-half w3-margin-bottom">
                <div className="w3-display-container">
                    <img src="https://www.w3schools.com/w3images/cinqueterre.jpg" alt="Cinque Terre" style={{"width":"100%"}}/>
                    <span className="w3-display-bottomleft w3-padding">Cinque Terre</span>
                </div>
                </div>
                <div className="w3-half">
                <div className="w3-row-padding" style={{"margin":"0 -16px"}}>
                    <div className="w3-half w3-margin-bottom">
                    <div className="w3-display-container">
                        <img src="https://www.w3schools.com/w3images/newyork2.jpg" alt="New York" style={{"width":"100%"}}/>
                        <span className="w3-display-bottomleft w3-padding">New York</span>
                    </div>
                    </div>
                    <div className="w3-half w3-margin-bottom">
                    <div className="w3-display-container">
                        <img src="https://www.w3schools.com/w3images/sanfran.jpg" alt="San Francisco" style={{"width":"100%"}}/>
                        <span className="w3-display-bottomleft w3-padding">San Francisco</span>
                    </div>
                    </div>
                </div>
                <div className="w3-row-padding" style={{"margin":"0 -16px"}}>
                    <div className="w3-half w3-margin-bottom">
                    <div className="w3-display-container">
                        <img src="https://www.w3schools.com/w3images/pisa.jpg" alt="Pisa" style={{"width":"100%"}}/>
                        <span className="w3-display-bottomleft w3-padding">Pisa</span>
                    </div>
                    </div>
                    <div className="w3-half w3-margin-bottom">
                    <div className="w3-display-container">
                        <img src="https://www.w3schools.com/w3images/paris.jpg" alt="Paris" style={{"width":"100%"}}/>
                        <span className="w3-display-bottomleft w3-padding">Paris</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
        
    )
}
export default OtrosHoteles;