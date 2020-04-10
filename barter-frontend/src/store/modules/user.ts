import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

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

  @Action({commit: 'setLoggedIn'})
  public async logIn(username: string, password: string): Promise<boolean> {
    // Call Auth Service
    return true;
  }

  @Action({commit: 'setLoggedIn'})
  public async logOut(): Promise<boolean> {
    // Call Auth Service and empty sessions and objects
    return false;
  }
}
