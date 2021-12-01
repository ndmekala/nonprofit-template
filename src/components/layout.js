import * as React from 'react';
import Hero from './hero';
import Footer from './footer';

const Layout = (props) =>  {

    // consider a wider width like westwood's site. - needs big pics for that.
    // could make it response: eg - wide ? 'md:this xl:that' : (narrow)

    return (
        <div>
            <title>{props.pageTitle}</title>
            <Hero heroImage={props.heroImage}></Hero>
            <main style={{minHeight: '65vh'}} className="flex justify-center bg-bone text-sienna">
                <div className={(props.wide ? 'max-w-7xl' : 'max-w-4xl' ) + ' w-full px-8 py-4'}>
                    {props.children}
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Layout