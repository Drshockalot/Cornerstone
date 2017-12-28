import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Cornerstone from './Cornerstone';
import CornerstoneText from './CornerstoneText';
import NavWrapper from './NavWrapper';
import FontAwesome from 'react-fontawesome';
import Banner from './banner.jpg';
import messages from './messages';



class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <NavWrapper>
        <NavBar>
          <Cornerstone>
            <FontAwesome name='cube' style={{ margin: '5px 5px 0 0'}}/>
            <CornerstoneText>Cornerstone</CornerstoneText>
          </Cornerstone>
          <HeaderLink to="/settings">
            <FormattedMessage {...messages.settings} />
          </HeaderLink>
        </NavBar>
      </NavWrapper>
    );
  }
}

export default Header;
