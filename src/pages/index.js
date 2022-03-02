import React, { useEffect } from 'react';
import { Redirect } from '@docusaurus/router';

const Home = () => {
  let redirect =
    'articles/2022/february/2022-02-28-angular-vs-react-vs-vue-you-choose';

  useEffect(() => {
    if (!window.location.pathname.endsWith('/')) {
      redirect = `/${redirect}`;
    }
  });

  return <Redirect to={redirect} />;
};

export default Home;