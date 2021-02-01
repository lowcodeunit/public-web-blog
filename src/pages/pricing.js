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
  // const lcu = JSON.stringify({ State: { ActionRoot: '/api/state', Root: '/api/state' } });

  // const script = document.getElementById('lcu-reg') || document.createElement('script');

  // script.id = 'lcu-reg';

  // script.innerHTML = `window.LCU=${lcu};`;

  // if (!document.getElementById('lcu-reg')) {
  //   document.body.appendChild(script);
  // }

  const lcuStr = JSON.stringify({ State: { ActionRoot: '/api/state', Root: '/api/state' } });
  const billingPlans = [
    {
        ContactText: '',
        DiscountedFrom: 0,
        Interval: 'month',
        Lookup: 'price_1HhIDIEoSnTpuGWGokN2x6wq',
        Name: 'IoT - Free ',
        PlanGroup: 'Free',
        Price: 0,
        Priority: 0,
        LicenseType: 'iot',
        Popular: 'true',
        SuccessRedirect: 'https://www.iot-ensemble.com/dashboard',
        Devices: '1',
        DataInterval: '60',
        DataRetention: '259200',
        HeaderName: 'Fathym | IoT Ensemble',
        LicenseName: 'Fathym IoT',
        PlanFeatures:
          'IoT Management|Shared Cloud|1 Device|60 second Data Velocity|3 Days of Data Retention',
        TrialPeriodDays: 0,
      },
      {
        ContactText: 'Contact sales for pricing information',
        DiscountedFrom: '0',
        Interval: 'month',
        Lookup: 'price_1HhIGXEoSnTpuGWGwN29a2zo',
        Name: 'IoT - Enterprise ',
        PlanGroup: 'Enterprise',
        Price: '10',
        Priority: '40',
        LicenseType: 'iot',
        Featured: 'true',
        SuccessRedirect: 'https://www.iot-ensemble.com/dashboard',
        Devices: '50',
        DataInterval: 80,
        DataRetention: '604800',
        HeaderName: 'Fathym | IoT Ensemble',
        LicenseName: 'Fathym IoT',
        PlanFeatures:
          'IoT Management|Private Cloud|Unlimited Devices|30 second Data Velocity|7 Days of Data Retention',
        TrialPeriodDays: 0,
      }
  ];

  function buyNowClick(plan) {
    debugger;
    alert('Buy Now Click');

    const link = `https://www.iot-ensemble.com/billing/iot/plan/${plan.PlanGroup}/${plan.Interval}`;

    window.location.href = link;
  }

  return (
    <Layout title="Pricing">
      <Helmet>
        <script src="https://www.iot-ensemble.com/billing/lcu/wc/lcu-billing.lcu.js" type="text/javascript" />

        <script type="text/javascript">
          {`
            window.LCU = ${lcuStr};
          `}
        </script>
      </Helmet>

      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="home_title">IoT Ensemble Pricing</h1>

          <h1 className="home_title"></h1>
        </div>
      </header>

    <div style={{ margin: '2em 1em' }}>
        <lcu-billing-plan-view-element license-type="iot" buy-now-click={buyNowClick} billing-plan-options={billingPlans}></lcu-billing-plan-view-element>
    </div>
    </Layout>
  );
}

export default Pricing;
