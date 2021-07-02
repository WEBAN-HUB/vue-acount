<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
    <v-list dense>
      <v-list-item router :to="{name: 'home'}" exact>
         <v-list-item-icon>
          <v-icon>fas fa-home</v-icon>
          </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>HOME</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item router :to="{name: 'login'}" exact>
         <v-list-item-icon>
          <v-icon>fas fa-user</v-icon>
          </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>LOGIN</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="blue">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer>
      </v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat color="blue" v-if="isLogin">로그인 중</v-btn>
        <v-btn flat color="blue" v-else router :to="{name: 'login'}">Login</v-btn>
      </v-toolbar-items>

    </v-app-bar>

    <v-main>
      <router-view/>
      <!--  -->
    </v-main>
  </v-app>
</template>

<script>
  import {mapState} from "vuex"

 export default {
    data: () => ({
       drawer: null,
    }),
    computed: {
      ...mapState(["isLogin"])
    }
  }
</script>