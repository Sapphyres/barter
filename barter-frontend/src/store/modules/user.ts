import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import UserCredential = firebase.auth.UserCredential;
import { UserLogin } from '@/models/user';

@Module({ namespaced: true, name: 'userModule' })
export default class UserModule extends VuexModule {
  public _userCredentials: UserCredential | null = null;

  public get userCredentials(): UserCredential | null {
    return this._userCredentials;
  }

  public get isLoggedIn(): boolean {
    return this._userCredentials !== null;
  }

  @Mutation
  public setUserCredentials(credentials: UserCredential): void {
    this._userCredentials = credentials;
  }
  //
  // @Action({ commit: 'setUserCredentials' })
  // public async verifyAuthentication(): Promise<UserCredential> {
  //   try {
  //     const userCredential: UserCredential = await firebase
  //       .auth()
  //       .signInWithEmailAndPassword(userLogin.email, userLogin.password);
  //     return userCredential;
  //   } catch (e) {
  //     console.error(e);
  //     throw (e);
  //   }
  // }

  @Action({ commit: 'setUserCredentials' })
  public async logIn(userLogin: UserLogin): Promise<UserCredential> {
    try {
      await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
      const userCredential: UserCredential = await firebase
        .auth()
        .signInWithEmailAndPassword(userLogin.email, userLogin.password);
      return userCredential;
    } catch (e) {
      console.error(e);
      throw (e);
    }
  }

  @Action({ commit: 'setUserCredentials' })
  public async logOut(): Promise<null> {
    try {
      await firebase
        .auth()
        .signOut();
      return null;
    } catch (e) {
      console.error(e);
      throw (e);
    }
  }

  @Action({ commit: 'setUserCredentials' })
  public async createAccount(userLogin: UserLogin): Promise<boolean> {
    try {
      const userCredential: UserCredential = await firebase.auth()
        .createUserWithEmailAndPassword(userLogin.email, userLogin.password);
      if (userCredential) {
        await userCredential.user!
          .updateProfile({
            displayName: userLogin.displayName,
          });
      }
      return true;
    } catch (e) {
      console.error(e);
      throw (e);
    }
    return false;
  }
}
