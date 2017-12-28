
import { fromJS } from 'immutable';
import settingsAccountsReducer from '../reducer';

describe('settingsAccountsReducer', () => {
  it('returns the initial state', () => {
    expect(settingsAccountsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
