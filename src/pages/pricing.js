import React from 'react';
import Layout from '@theme/Layout';
import {Helmet} from "react-helmet";

function Hello() {
    const lcu = JSON.stringify({"State":{"ActionRoot":"/api/state","Root":"/api/state"}});
    const script = document.getElementById("lcu-reg") || document.createElement("script");
    script.id = "lcu-reg";
    script.innerHTML = `window.LCU=${lcu};`;
    if(!document.getElementById("lcu-reg")){
        document.body.appendChild(script);
    };
  return (
    <Layout title="Hello">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <Helmet>
            <script src="https://www.iot-ensemble.com/billing/lcu/wc/lcu-billing.lcu.js" type="text/javascript" />
        </Helmet>
        <lcu-billing-plan-view-element
            plan-group="iot">
        </lcu-billing-plan-view-element>
        <p>
          Edit <code>pages/hello.js</code> and save to reload.
        </p>
      </div>
    </Layout>
  );
}

export default Hello;