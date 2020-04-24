<template>
    <v-app id="barter">
        <MainLayout :items="drawerItems"  class="pa-2">
            <router-view></router-view>
        </MainLayout>
    </v-app>
</template>

<style>
</style>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { MenuItem } from '@/models/ui_models';
  import MainLayout from '@/components/base/MainLayout.vue';

  @Component({
    components: {
      MainLayout,
    },
  })
  export default class App extends Vue {
    public drawerItems: MenuItem[] = [
      {
        label: 'Documentation',
        heading: true,
        icon: '',
      },
      {
        label: 'Firebase',
        icon: 'fa-google',
        externalUrl: 'https://console.firebase.google.com/u/0/project/sapphyresbarter/overview',
      },
      {
        label: 'Vue Doc',
        icon: 'fab fa-vuejs',
        externalUrl: 'https://vuejs.org/',
      },
      {
        label: 'Vuetify',
        icon: 'fa-grip-horizontal',
        externalUrl: 'https://vuetifyjs.com/',
      },
      {
        label: 'Cypress Best Practices',
        icon: 'fa-vial',
        externalUrl: 'https://docs.cypress.io/guides/references/best-practices.html',
      },
      {
        label: '',
        icon: '',
        divider: true,
      },
      {
        label: 'Log Out',
        icon: 'fa-eject',
        action: 'UserModule/logOut',
      },
    ];
  }
</script>
