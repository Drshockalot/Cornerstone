import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  padding: 1em 2em;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: #FFF;
  float: right;

  &:hover {
    background: #CCE9E3;
    transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -webkit-transition: .25s ease-in-out;
  }
`;
