import React, { useRef, useEffect } from 'react';
import { useLocation, Switch, Route } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';



// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import SignInPage from './views/SignIn/SignInPage';
import SignUpPage from './views/SignUp/SignUpPage';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>

          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />

          <Route exact path="/signin" render={() => <SignInPage></SignInPage>}></Route>

          <Route exact path="/signup" render={() => <SignUpPage></SignUpPage>}></Route>

        </Switch>
      )} />
  );
}

export default App;