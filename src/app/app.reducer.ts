
import * as fromUI from './shared/ui.reducers';
import * as fromAuth from './auth/auth.reducers';
import * as fromIncomEgress from './income-egress/income-egress.reducers';
import { ActionReducerMap } from '@ngrx/store';


export interface AppState {
    ui: fromUI.State;
    auth: fromAuth.AuthState;
}

export const appReducers: ActionReducerMap<AppState> = {
    ui: fromUI.uiReducer,
    auth: fromAuth.authReducer,
};
