<template>
  <v-app id="inspire">
    <v-system-bar app>
      <v-spacer></v-spacer>
    </v-system-bar>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer" v-if="currentUser"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <v-icon class="deep-purple--text">mdi-square</v-icon>

        <v-icon class="blue--text">mdi-circle</v-icon>

        <v-icon class="light-blue--text">mdi-triangle</v-icon>

        {{ title }}
      </v-toolbar-title>

      <div class="navbar-nav ml-auto" v-if="currentUser">
        <ul class="nav-items">
          <li class="nav-item">
            <a class="nav-link" href @click.prevent="logOut">
              <v-icon>
                mdi-turn-off
              </v-icon>
              LogOut
            </a>
          </li>
        </ul>
      </div>
    </v-app-bar>

    <v-navigation-drawer
        v-if="currentUser"
        v-model="drawer"
        fixed
        temporary
    >
      <div class="header purple">
        <v-toolbar-title>
          <v-icon class="white--text">mdi-square</v-icon>

          <v-icon class="white--text">mdi-circle</v-icon>

          <v-icon class="white--text">mdi-triangle</v-icon>
        </v-toolbar-title>
      </div>
      <div class="sidebar-nav">
        <ul>
          <li
              v-for="item in items"
              :value="item.active"
              v-bind:key="item.title"
              @click="item.active != item.active"
              :class="!item.items ? 'no-child' : ''"
          >
            <router-link :to="{ name: item.linkTo }" v-ripple exact>
              <v-icon
                  size="24px"
                  :color="item.color"
                  class="material-icons"
              >
                {{ item.action }}
              </v-icon>

              <span class="light-gray">
                {{ item.title }}
              </span>
            </router-link>
          </li>
        </ul>
      </div>
    </v-navigation-drawer>

    <v-main class="ligth lighten-2">
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data: () => ({
    drawer: null,
    title: 'Tic tac toe Game'
  }),
  computed: {
    items() {
      return [
        //Now the linkTo use name of the routes [routes file]
        {
          color: "light-gray",
          action: "mdi-card-search",
          title: this.$t("sidebar.title.home"),
          linkTo: "search",
          active: false,
        },
        {
          color: "light-gray",
          action: "mdi-currency-usd",
          title: this.$t("sidebar.title.users"),
          linkTo: "orders",
          active: false,
        }
      ]
    },
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>
<style lang="scss" scoped>
.sidebar-nav {
  position: relative;
  width: 100%;
  padding-bottom: 40px;
  padding-top: 20px;

  ul {
    padding-left: 0;
    list-style: none;
    margin: 0;

    li:first-child {
      padding-top: 50px;
    }

    li {
      position: relative;

      a {
        padding: 5px 15px 10px;
        display: block;
        text-decoration: none;
        color: #615f5f;
      }

      a:hover {
        background-color: #737373;
        color: #ffffff;
      }
    }
  }
}

.v-navigation-drawer {
  .router-link-active {
    background: linear-gradient(to bottom right, rgb(214 218 220 / 50%), rgb(165 175 179 / 50%)) !important;
    color: #281ce0 !important;

    i {
      color: #281ce0 !important;
    }
  }

  .header {
    position: fixed;
    left: 0;
    top: 0;
    width: 256px;
    height: 65px;
    padding: 20px;
  }
}

.v-app-bar {
  .nav-items {
    list-style: none;
    a {
      text-decoration: none;
    }
  }
}
</style>