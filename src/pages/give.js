import * as React from "react";
import Layout from "../components/layout";
import hero from "../images/hero/stock-3.jpg";
import { usePayPalScriptReducer, PayPalButtons } from "@paypal/react-paypal-js";

const Give = () => {
  // createOrder needs to pull from a form
  const [{ isPending }] = usePayPalScriptReducer();
  // const isPending = false;

  const h1Tailwind = "text-4xl text-pink-500 mb-4 text-center"

  return (
    <Layout heroImage={hero} pageTitle="Give">
      <h1 className={h1Tailwind}>Option 1</h1>
      {isPending ? (
        <div className="text-7xl text-pink-500">LOADING</div>
      ) : (
        <PayPalButtons
          style={{
            color: "white",
            shape: "pill",
            height: 40,
          }}
        />
      )}
      <h1 className={h1Tailwind}>Option 2</h1>
      <a href="https://cash.app/$ZionBaptistChurch"><button className="w-full border border-purple-500 px-2 py-1">Cash App</button></a>
      <h1 className={h1Tailwind}>Option 3</h1>
      <p>Mail a check…</p>
    </Layout>
  );
};

export default Give;