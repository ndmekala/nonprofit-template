import * as React from 'react';

const Section = (props) =>  {

    const gridLayout = {
        display: 'grid',
        gridTemplateColumns: '15rem auto',
      }

    return (
        <div style={gridLayout}>
            <div className="my-4">
                <h1 className="text-xl text-sienna">
                    {props.title}
                </h1>
            </div>
            <div className="my-4 text-justify text-sienna text-lg">
                {props.children}
            </div>
        </div>
    )
}

export default Section