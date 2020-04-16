import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import UserCredential = firebase.auth.UserCredential;

@Module({ namespaced: true, name: 'userModule' })
export default class UserModule extends VuexModule {
  public _isLoggedIn: boolean = false;

  public get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  @Mutation
  public setLoggedIn(isLogged: boolean): void {
    this._isLoggedIn = isLogged
  }

  @Action({ commit: 'setLoggedIn' })
  public async logIn(email: string, password: string): Promise<boolean> {
    return true;
  }

  @Action({ commit: 'setLoggedIn' })
  public async createAccount(email: string, password: string): Promise<boolean> {
    try {
      // const userCredential: UserCredential = await firebase.auth()
      //   .createUserWithEmailAndPassword(email, password)
      // console.log(userCredential);
      return true;
    } catch (e) {
      throw (e);
      return false;
    }
    return false;
  }

  @Action({ commit: 'setLoggedIn' })
  public async logOut(): Promise<boolean> {
    // Call Auth Service and empty sessions and objects
    return false;
  }
}
