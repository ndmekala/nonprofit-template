import * as React from 'react';

const Section = (props) =>  {

    const gridLayout = {
        display: 'grid',
        gridTemplateColumns: '15rem auto',
      }

    return (
        <div style={gridLayout}>
            <div className="my-4">
                <h1 className="text-2xl font-bold font-serif">
                    {props.title}
                </h1>
            </div>
            <div className="my-4 text-justify text-pink-700 text-lg">
                {props.children}
            </div>
        </div>
    )
}

export default Section