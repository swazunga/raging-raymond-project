import React from "react";
import Wave from "../Wave";


function Hero() {
return (
<div id="hero-container">
<div className="hero">

{/* <!--Content before waves--> */}
<div className="inner-hero flex">
<h1 className="hero-header">Raging Raymond Fish Fight</h1>

</div>

{/* <!--Waves Container--> */}
<div>
<Wave/>
</div>
{/* <!--Waves end--> */}

</div>
{/* <!--Header ends--> */}

{/* <!--Content starts--> */}
<div className="hero-content flex">
  <h5 className="hero-subhead">A Fishing Tournament For A Cause</h5>
</div>
{/* <!--Content ends--> */}
</div>
)

}

 export default Hero;

