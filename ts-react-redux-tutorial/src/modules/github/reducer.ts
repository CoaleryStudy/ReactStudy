import { createReducer } from 'typesafe-actions';
import { getUserProfileAsync } from '.';
import {
  asyncState,
  createAsyncReducer,
  transformToArray
} from '../../lib/reducerUtils';
import { GithubAction, GithubState } from './types';

const initialState: GithubState = {
  userProfile: asyncState.initial()
};

const github = createReducer<GithubState, GithubAction>(
  initialState
).handleAction(
  transformToArray(getUserProfileAsync),
  createAsyncReducer(getUserProfileAsync, 'userProfile')
);

export default github;
