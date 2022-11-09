import React from "react";

function Welcome(){
    
    function AnimationTrigger(){
            document.getElementById("animated").classList.add("crazyAnimation")
    }

    return(
        <div onAnimationEnd={()=>{document.querySelector(".welcome").classList.add("d-none")}} onWheel={()=>AnimationTrigger()} className="welcome">
            <div className="welcome-text ">
                <div id="animated" className="text-center">
                <h1 onLoad={()=>{document.querySelector("h1").classList.add("animate__lightSpeedInRight")}}>Ciao, mi chiamo Biagio. <br /> Sono un Web Developer. </h1>
                <h6><button onClick={()=>AnimationTrigger()} className="btn btn-dark rounded-pill">Click here or scroll for more information.</button> </h6> 
                </div>
            </div>
        </div>
    )
}

export default Welcome