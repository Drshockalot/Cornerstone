/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import SettingsPage from 'containers/SettingsPage/Loadable';
//import SettingsAccountsPage from 'containers/SettingsAccounts/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Sidebar from 'components/Sidebar';

import { Settings, Home } from 'utils/sidebarItems';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  height: 100%;
  flex-flow: row wrap;
`;

export default function App() {
  const sidebarprops_Settings = {
    menuitems: Settings,
  };

  const sidebarprops_Home = {
    menuitems: Home
  };

  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <Sidebar {...sidebarprops_Home}></Sidebar>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="/settings" component={SettingsPage} />
        {/* <Route path="/settings/accounts" component={SettingsAccountsPage} /> */}
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
    </AppWrapper>
  );
}
