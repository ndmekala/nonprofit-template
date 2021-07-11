import * as React from 'react';
import Hero from './hero';
import Footer from './footer';

const Layout = (props) =>  {

    return (
        <div>
            <title>{props.pageTitle}</title>
            <Hero heroImage={props.heroImage}></Hero>
            <main style={{minHeight: '65vh'}} className="flex bg-purple-100 justify-center">
                <div className="max-w-4xl w-full px-8 py-4">
                    {props.children}
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Layout