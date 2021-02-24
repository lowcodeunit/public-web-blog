// import React from 'react';
// import clsx from 'clsx';
// import Layout from '@theme/Layout';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import useBaseUrl from '@docusaurus/useBaseUrl';
// import styles from './styles.module.css';

// const features = [
//   {
//     title: 'Easy to Use',
//     imageUrl: 'img/easy-to-use.png',
//     description: (
//       <>
//         Start with emulated device data and immediately see it flowing to a real-time dashboard. Connect
//         your physical device when you're ready. 
//       </>
//     ),
//   },
//   {
//     title: 'Focus on What Matters',
//     imageUrl: 'img/focus-on-what-matters.png',
//     description: (
//       <>
//         IoT Ensemble lets you focus on your applications and user experience – we’ll do the heavy lifting. 
//         Try it for free.
//       </>
//     ),
//   },
//   {
//     title: 'IoT Accelerated',
//     imageUrl: 'img/iot-accelerated.png',
//     description: (
//       <>
//         Fathym automates best practice cloud infrastructure out of the box. Accelerate your adoption and 
//         usage of IoT technologies. Start today. 
//       </>
//     ),
//   },
// ];

// function Feature({imageUrl, title, description}) {
//   return (
//     <div className={clsx('col col--4', styles.feature)}>      
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </div>
//   );
// }

// function Home() {
//   const context = useDocusaurusContext();
//   const {siteConfig = {}} = context;
//   return (
//     <Layout
//       title={`Home`}
//       description="IoT Ensemble">
//       <header className={clsx('hero hero--primary', styles.heroBanner)}>
//         <div className="container">
//           <h1 className="home_title">{siteConfig.title}</h1>
//           <p className="home_subtitle">{siteConfig.tagline}</p>
//           <div className={styles.buttons}>
//             <Link
//               className={clsx(
//                 'button button--outline button--secondary button--lg',
//                 styles.getStarted,
//               )}
//               to={siteConfig.url + useBaseUrl('dashboard/')}>
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       </header>
//       <main>
//         {features && features.length > 0 && (
//           <section className={styles.features}>
//             <div className="container">
//               <div className="row">
//                 {features.map((props, idx) => (
//                   <Feature key={idx} {...props} />
//                 ))}
//               </div>
//             </div>
//           </section>
//         )}
//       </main>  
//       <div className="hero hero--primary" style={{padding:0, paddingBottom:'4rem'}}>
//         <div className="container">
//           <div className="text--center">
//             <img src={useBaseUrl("img/iot-ensemble-diagram.png")} alt="IoT Ensemble" />
//           </div>
//           <div className={styles.buttons}>
//             <Link
//               className={clsx(
//                 'button button--outline button--secondary button--lg',
//                 styles.getStarted,
//               )}
//               to={siteConfig.url + useBaseUrl('dashboard/')}>
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       </div>    
//     </Layout>
//   );
// }

// export default Home;

import React from 'react';
import {Redirect} from '@docusaurus/router';

const OldRedirect = () => {
  return <Redirect to="/docs" />;
};

export default OldRedirect;