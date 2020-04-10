<template>
    <v-card class="elevation-12">
        <v-toolbar
                color="primary"
                dark
                flat
        >
            <v-toolbar-title>Login form</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
            <v-form>
                <v-text-field
                        label="Login"
                        name="login"
                        prepend-icon="fa-user"
                        type="text"
                />

                <v-text-field
                        id="password"
                        label="Password"
                        name="password"
                        prepend-icon="fa-lock"
                        type="password"
                />
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer/>
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

  const user = namespace('UserModule');

  @Component({})
  export default class LogIn extends Vue {
    @user.Action
    logIn!: (username: string, password: string) => Promise<boolean>;

    @Emit('onCloseHandler')
    closeForm(): void {}

    public async onSaveClick(): Promise<void> {
      const logged: boolean = await this.logIn('user', 'password');
      if(logged) {
        this.closeForm();
      }
    }
  }
</script>
