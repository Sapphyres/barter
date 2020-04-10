<template>
    <div id="barter-main-layout" class="main-layout">
        <v-app-bar
                app
                clipped-left
                dark
                color="primary"
        >
            <v-app-bar-nav-icon dark @click="drawer = !drawer"/>
            <span class="title ml-3 mr-5">Barter</span>
            <v-spacer/>
        </v-app-bar>

        <v-navigation-drawer
                class="main-layout__drawer"
                v-model="drawer"
                app
                clipped
                color="grey lighten-5"
        >
            <v-list
                    v-if="items"
                    dense
                    class="grey lighten-5"
            >
                <template v-for="(item, i) in items">
                    <v-row
                            v-if="item.heading"
                            :key="i"
                            align="center"
                    >
                        <v-col cols="12">
                            <v-subheader v-if="item.heading">
                                {{ item.label }}
                            </v-subheader>
                        </v-col>
                    </v-row>
                    <v-divider
                            v-else-if="item.divider"
                            :key="i"
                            dark
                            class="my-4"
                    />
                    <v-list-item
                            v-else
                            :key="i"
                            link
                            :to="item.internalUrl ? item.internalUrl : null"
                            @click="item.externalUrl ? clickItemHandler(item) : null"
                    >
                        <v-list-item-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title class="grey--text">
                                {{ item.label }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list>
        </v-navigation-drawer>

        <v-content>
            <slot></slot>
        </v-content>
    </div>
</template>

<style lang="scss">
    .main-layout {
        .v-navigation-drawer__border {
            display: none!important;
        }
    }
</style>

<style lang="scss" scoped>
</style>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';
  import { MenuItem } from '@/models/ui_models';

  @Component({})
  export default class MainLayout extends Vue {
    public drawer: boolean = true;

    @Prop(
      {
        required: true,
      }
    )
    items!: MenuItem[];

    public clickItemHandler(item: MenuItem): void {
      if (item.externalUrl)
        window.open(item.externalUrl);
    }
  }
</script>
