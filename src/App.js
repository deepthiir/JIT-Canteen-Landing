import React, { useRef, useEffect, useState } from 'react';
import { useLocation, Switch, Route, Redirect } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
import { auth } from './services/firebase'


// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import SignInPage from './views/SignIn/SignInPage';
import SignUpPage from './views/SignUp/SignUpPage';
import MainHome from './views/MainHome/MainHome';
import CartPage from './views/CartPage/CartPage';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

function App() {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    let isMounted = true;
    auth.onAuthStateChanged((user) => {
      if (user !== null) {
        if (isMounted) {
          setAuthenticated(true)
        }
      } else {
        if (isMounted) {
          setAuthenticated(false)
        }
      }
    })

    return () => {
      isMounted = false;
    }
  }, [])

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>

          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />

          <Route exact path="/signin" render={() => authenticated ? <Redirect to='/mainhome'></Redirect> : <SignInPage></SignInPage>}></Route>

          <Route exact path="/signup" render={() => authenticated ? <Redirect to='/mainhome'></Redirect> : <SignUpPage></SignUpPage>}></Route>

          <Route exact path="/mainhome" render={() => authenticated ? <MainHome></MainHome> : <Redirect to = '/signin'></Redirect>}></Route>

          <Route exact path="/cart" render={() => <CartPage></CartPage>}></Route>

        </Switch>
      )} />
  );
}

export default App;