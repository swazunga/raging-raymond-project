import React from "react";
import Wave from "../Wave";


function Hero() {
return (
<div id="hero-container">
<div className="header">

{/* <!--Content before waves--> */}
<div className="inner-header flex">
<h1>Raging Raymond Fish Fight</h1>
</div>

{/* <!--Waves Container--> */}
<div>
<Wave/>
</div>
{/* <!--Waves end--> */}

</div>
{/* <!--Header ends--> */}

{/* <!--Content starts--> */}
<div className="content flex">
  <p>Test content going here </p>
</div>
{/* <!--Content ends--> */}
</div>
)

}

 export default Hero;

