import { Action } from '@ngrx/store';

export enum EAuthActions {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login success',
  LOGIN_WAITING = '[Auth] Login waiting',
  LOGIN_FAILED = '[Auth] Login failed',
}

export class Login implements Action {
  public readonly type = EAuthActions.LOGIN;
}

export class LoginSuccess implements Action {
  public readonly type = EAuthActions.LOGIN_SUCCESS;
}

export class LoginWaiting implements Action {
  public readonly type = EAuthActions.LOGIN_WAITING;
}

export class LoginFailed implements Action {
  public readonly type = EAuthActions.LOGIN_FAILED;
}

export type MovieActions = Login | LoginSuccess | LoginWaiting | LoginFailed;
