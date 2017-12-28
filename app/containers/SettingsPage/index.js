/**
 *
 * SettingsPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { Settings_Dashboard } from 'utils/sidebarItems';
import makeSelectSettingsPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Sidebar from 'components/Sidebar';
import ContentWrapper from './ContentWrapper';
import PageWrapper from './PageWrapper';
import Button from 'components/Button';
import { updateAccounts } from '../App/actions';
import { makeSelectAccounts } from 'containers/App/selectors';

export class SettingsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {

    return (
      <PageWrapper>
        <Helmet>
          <title>SettingsPage</title>
          <meta name="description" content="Description of SettingsPage" />
        </Helmet>
        <ContentWrapper>
          <Button onClick={this.props.onUpdateAccount}>Testing</Button>
        </ContentWrapper>
      </PageWrapper>
    );
  }
}

SettingsPage.propTypes = {
  accounts: PropTypes.any
};

export const mapStateToProps = createStructuredSelector({
  accounts: makeSelectAccounts()
});

function mapDispatchToProps(dispatch) {
  return {
    onUpdateAccount: (evt) => dispatch(updateAccounts('testing'))
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'settingsPage', reducer });
const withSaga = injectSaga({ key: 'settingsPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SettingsPage);
