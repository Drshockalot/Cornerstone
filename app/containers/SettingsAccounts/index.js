/**
 *
 * SettingsAccounts
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
import makeSelectSettingsAccounts from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Sidebar from 'components/Sidebar';
import ContentWrapper from './ContentWrapper';
import PageWrapper from './PageWrapper';
import Button from 'components/Button';
import { updateAccounts } from '../App/actions';

export class SettingsAccounts extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const sidebarProps = {
      menuitems: Settings_Accounts,
      title: 'settings_accounts'
    };

    return (
      <PageWrapper>
        <Helmet>
          <title>SettingsAccounts</title>
          <meta name="description" content="Description of SettingsAccounts" />
        </Helmet>
        <ContentWrapper>
          <Button onClick={this.props.onUpdateAccount}>Testing</Button>
        </ContentWrapper>
      </PageWrapper>
    );
  }
}

SettingsAccounts.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  settingsaccounts: makeSelectSettingsAccounts(),
});

function mapDispatchToProps(dispatch) {
  return {
    onUpdateAccount: (evt) => dispatch(updateAccounts('testing'))
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'settingsAccounts', reducer });
const withSaga = injectSaga({ key: 'settingsAccounts', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SettingsAccounts);
