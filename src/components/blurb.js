import * as React from 'react';

const Blurb = (props) =>  {
    
    //quick and dirty truthy/falsey toggle alternating based on even or odd
    let flip = props.orderIterator % 2

    return (
        <div className="flex flex-wrap">
            <div className={ (flip ? 'order-last ' : '' )  + 'w-full md:w-1/2'}>
                <img src={props.imgSrc} alt={props.title + ' image'}></img>
            </div>
            <div className="p-4 w-full md:w-1/2"> {/* NB: this is w/i maxwidth'd center container */}
                <div className="my-4">
                    <h1 className="font-serif font-bold text-4xl text-sienna">
                        {props.title}
                    </h1>
                </div>
                <div className="my-4 text-justify text-sienna text-lg">
                    <p>{props.children}</p>
                </div>
            </div>
        </div>
    )
}

export default Blurb