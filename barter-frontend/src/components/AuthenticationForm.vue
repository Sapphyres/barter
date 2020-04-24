<template>
    <v-card class="elevation-12">
        <v-toolbar
                color="primary"
                dark
                flat
                min-height="56px"
                height="unset"
                class="py-4"
        >
            <v-toolbar-title>{{labelFormTitle}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="hasAccount = !hasAccount">
                <v-icon v-if="!hasAccount">fal fa-user-alt</v-icon>
                <v-icon v-if="hasAccount">fal fa-user-alt-slash</v-icon>
            </v-btn>
        </v-toolbar>
        <v-card-text class="pb-0">
            <v-form class="pt-4"
                    ref="formAuth"
                    v-model="isFormValid"
                    lazy-validation
            >
                <v-text-field
                        v-model="email"
                        id="email"
                        label="Email"
                        name="email"
                        prepend-icon="fal fa-envelope-square"
                        type="text"
                        :rules="rulesUtility.emailRules"
                />

                <v-text-field
                        v-if="!hasAccount"
                        v-model="displayName"
                        id="displayName"
                        label="Display Name"
                        name="displayName"
                        prepend-icon="fal fa-envelope-square"
                        type="text"
                        :rules="!hasAccount ? rulesUtility.displayNameRules : null"
                />

                <v-text-field
                        v-model="password"
                        id="password"
                        label="Password"
                        name="password"
                        prepend-icon="fal fa-lock-alt"
                        type="password"
                        :rules="hasAccount ? rulesUtility.nonNullFieldRules : rulesUtility.passwordRules"
                />

                <v-text-field
                        v-if="!hasAccount"
                        v-model="confirmPassword"
                        id="confirm_password"
                        label="Confirm Password"
                        name="password"
                        prepend-icon="fal fa-lock"
                        type="password"
                        :rules="!hasAccount ? rulesUtility.confirmPasswordRules(password) : null"
                />
            </v-form>
        </v-card-text>
        <v-card-actions class="mt-2">
            <v-spacer/>
            <v-btn @click="reset()" text>
                Cancel
            </v-btn>
            <v-btn color="primary" @click="onSaveClick">
                <v-icon class="pr-2">fa-save</v-icon>
                Login
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
  import { Vue, Component, Emit } from 'vue-property-decorator';
  import { namespace } from 'vuex-class';
  import RuleUtility from '@/utils/rules';
  import { UserLogin } from '@/models/user';

  const user = namespace('UserModule');

  @Component({})
  export default class AuthenticationForm extends Vue {
    private rulesUtility = RuleUtility;
    private hasAccount: boolean = true;
    private isFormValid: boolean = false;

    private email: string = 'mel@mel.mel';
    private displayName: string = 'SuperMel';
    private password: string = 'M3lm3lm3l';
    private confirmPassword: string = 'M3lm3lm3l';

    @user.Action
    logIn!: (userLogin: UserLogin) => Promise<boolean>;

    @user.Action
    createAccount!: (userLogin: UserLogin) => Promise<boolean>;

    @Emit('onCloseHandler')
    closeForm(): void {
    }

    public get labelFormTitle(): string {
      if (this.hasAccount) {
        return 'Want to log in ?'
      } else {
        return 'Want to create an account ?'
      }
    }

    public async onSaveClick(): Promise<void> {
      let logged: boolean = false;
      this.isFormValid = (this.$refs.formAuth as Vue & { validate: () => boolean }).validate();
      if (this.isFormValid) {
        if (this.hasAccount) {
          logged = await this.logIn({
            email: this.email,
            password: this.password,
          });
        } else {
          logged = await this.createAccount({
            email: this.email,
            password: this.password,
            displayName: this.displayName,
          });
        }
      }
      if (logged) {
        this.closeForm();
      }
    }

    private reset(): void {
      (this.$refs.formAuth as HTMLFormElement).reset();
      this.closeForm();
    }
  }
</script>
