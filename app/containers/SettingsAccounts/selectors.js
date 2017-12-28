import { createSelector } from 'reselect';

/**
 * Direct selector to the settingsAccounts state domain
 */
const selectSettingsAccountsDomain = (state) => state.get('settingsAccounts');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SettingsAccounts
 */

const makeSelectSettingsAccounts = () => createSelector(
  selectSettingsAccountsDomain,
  (substate) => substate.toJS()
);

export default makeSelectSettingsAccounts;
export {
  selectSettingsAccountsDomain,
};
