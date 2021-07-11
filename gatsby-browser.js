import "./src/css/index.css"
import React from 'react'
import {PayPalScriptProvider} from '@paypal/react-paypal-js'

const initialOptions = {
    "client-id": "test",
    currency: 'USD',
    intent: "capture",
    // clientId: '',
}

export const wrapRootElement  = ({ element }) => {
    return (
        <PayPalScriptProvider options={initialOptions}>
        {element}
        </PayPalScriptProvider>
    )
}