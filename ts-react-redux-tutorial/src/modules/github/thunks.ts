import { AxiosError } from 'axios';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { getUserProfile } from '../../api/github';
import {
  getUserProfileError,
  getUserProfileRequest,
  getUserProfileSuccess
} from './actions';
import { GithubAction } from './types';

export function getUserProfileThunk(
  username: string
): ThunkAction<void, RootState, null, GithubAction> {
  return async (dispatch) => {
    dispatch(getUserProfileRequest());
    try {
      const userProfile = await getUserProfile(username);
      dispatch(getUserProfileSuccess(userProfile));
    } catch (e) {
      dispatch(getUserProfileError(e as AxiosError));
    }
  };
}
