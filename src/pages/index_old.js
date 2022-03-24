import React, { useEffect } from 'react';
import { Redirect } from '@docusaurus/router';

const Home = () => {
  let redirect =
  'articles/2022/march/2022-03-24-headless-wordpress-made-easy-with-gatsby';

  useEffect(() => {
    if (!window.location.pathname.endsWith('/')) {
      redirect = `/${redirect}`;
    }
  });

  return <Redirect to={redirect} />;
};

export default Home;
