import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import { Helmet } from 'react-helmet';
import pricingImage from '../../static/img/pricing-page-final.png';
import pricingImageEnt from '../../static/img/pricing-page-enterprise.png';
import pricingImageFree from '../../static/img/pricing-page-free.png';
import pricingImageStarter from '../../static/img/pricing-page-starter.png';
import pricingImagePro from '../../static/img/pricing-page-pro.png';
import styles from './styles.module.css';

function Pricing() {
  const lcu = JSON.stringify({ State: { ActionRoot: '/api/state', Root: '/api/state' } });

  const script = document.getElementById('lcu-reg') || document.createElement('script');

  script.id = 'lcu-reg';

  script.innerHTML = `window.LCU=${lcu};`;

  if (!document.getElementById('lcu-reg')) {
    document.body.appendChild(script);
  }

  return (
    <Layout title="Pricing">
      <Helmet>
        <script src="https://www.iot-ensemble.com/billing/lcu/wc/lcu-billing.lcu.js" type="text/javascript" />
      </Helmet>

      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="home_title">IoT Ensemble Pricing</h1>

          <h1 className="home_title"></h1>
        </div>
      </header>

      <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', margin: '2em' }}>
        <div style={{ width: '275px', height: '422.5px', margin: '2em 1em' }}>
          <a href="https://www.iot-ensemble.com/dashboard">
            <img src={pricingImageFree} class="pricing-image" />
          </a>
        </div>

        <div style={{ margin: '2em 1em' }}>
          <lcu-billing-plan-view-element plan-group="iot"></lcu-billing-plan-view-element>
        </div>

        <div style={{ width: '275px', height: '422.5px', margin: '2em 1em' }}>
          <a href="mailto: sales@fathym.com">
            <img src={pricingImageEnt} class="pricing-image" />
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default Pricing;
