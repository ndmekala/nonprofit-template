import * as React from 'react';

const Blurb = (props) =>  {
    // depending on if a var connected to index is even flex ordering

    return (
        <div>
            <div className="my-4">
                <h1 className="font-serif font-bold text-5xl text-sienna">
                    {props.title}
                </h1>
            </div>
            <div className="my-4 text-justify text-sienna text-lg">
                {props.children}
            </div>
        </div>
    )
}

export default Blurb