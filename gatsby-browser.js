import "./src/css/index.css"
import React from 'react'
import {PayPalScriptProvider} from '@paypal/react-paypal-js'

const initialOptions = {
    "client-id": process.env.CLIENT_ID,
    currency: 'USD',
    intent: "capture",
    datatoken: '',
}

export const wrapRootElement  = ({ element }) => {
    return (
        <div>
        {/* <PayPalScriptProvider options={initialOptions}> */}
        {element}
        {/* </PayPalScriptProvider> */}
        </div>
    )
}