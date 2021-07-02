import * as React from 'react';
import NavBar from './navbar';

const Layout = (props) =>  {


    return (
        <div>
            <NavBar />
            <title>{props.pageTitle}</title>
            <main>
                <h1>{props.pageTitle}</h1>
                {props.children}
            </main>
        </div>
    )
}

export default Layout