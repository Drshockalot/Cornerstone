/**
*
* Sidebar
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Wrapper from './Wrapper';
import MenuItem from './MenuItem';
import Title from './Title';
import { makeSelectAccounts } from 'containers/App/selectors';
import { createStructuredSelector } from 'reselect';

import reducer from './reducer';
import saga from './saga';
import { connect } from 'react-redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { compose } from 'redux';

class Sidebar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render () {
    console.log(this.props);
    let menuItems = <MenuItem><FormattedMessage {...messages.no_menu_items} /></MenuItem>;
    
      if (this.props.menuitems && this.props.menuitems.length)
        menuItems = this.props.menuitems.map((item) => (
          <MenuItem key={`menuitem-${item.name}`} to={item.route}>{item.name}</MenuItem>
        ));
    
      menuItems.push(<MenuItem key='test' to='/test'>{this.props.accounts}</MenuItem>)

      return (
        <Wrapper>
          {menuItems}
        </Wrapper>
      );
  }
}

Sidebar.propTypes = {
  menuitems: PropTypes.array,
  accounts: PropTypes.any
};

export const mapStateToProps = createStructuredSelector({
  accounts: makeSelectAccounts()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Sidebar);
