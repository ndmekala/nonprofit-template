import * as React from 'react';

const Blurb = (props) =>  {
    // depending on if a var connected to index is even flex ordering

    // const yo = <div>
    //     <h1>Wowee!!</h1>
    // </div>

    // return (yo) < -- this is also valid btw…

    return (
        <div className="flex flex-wrap">
            <div className ="w-64">
                <img src={props.imgSrc} alt={props.title + ' image'}></img>
            </div>
            <div style={{minWidth: '30rem'}} className="p-4"> {/* Problem here = breaks @ diff pts */}
                <div className="my-4">
                    <h1 className="font-serif font-bold text-4xl text-sienna">
                        {props.title}
                    </h1>
                </div>
                <div className="my-4 text-justify text-sienna text-lg">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Blurb