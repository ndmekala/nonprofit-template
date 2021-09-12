import * as React from "react";
import NavBar from "./navbar";


const Hero = (props) => {
    const heroStyles = {
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0 , 0, 0, 0.2)), url('${props.heroImage}')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

  return (
    <div style={heroStyles}>
        <NavBar />
        <p className="font-serif pl-24 pt-24 text-bone w-100 text-3xl uppercase">Welcome to</p>
        <p className="font-serif pl-24 text-bone w-100 h-96 text-9xl">Zion</p>
    </div>
  );
};

export default Hero;