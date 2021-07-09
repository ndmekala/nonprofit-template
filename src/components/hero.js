import * as React from "react";
import NavBar from "./navbar";


const Hero = (props) => {
    const heroStyles = {
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0 , 0, 0, 0.4)), url('${props.heroImage}')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

  return (
    <div style={heroStyles}>
        <NavBar />
        <p className="p-8 text-white w-100 h-96 text-7xl">Welcome to Zion</p>
    </div>
  );
};

export default Hero;