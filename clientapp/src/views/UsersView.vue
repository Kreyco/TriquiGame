<template>
  <UserList :users="users"/>
</template>

<script>
import UserList from '../components/UserList.vue'
import userAPI from '../services/User'

export default {
  name: "UsersView",
  components: {
    UserList
  },
  props: {},
  data() {
    return {
      users: []
    };
  },
  created() {
    this.read();
  },
  methods: {
    async read() {
      userAPI
        .get()
        .then((response) => {
          this.users = response.data;

          this.$store.commit("loadingState", {
            users: false
          });
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error.response.data);
        });
    },
    checkForm(value) {
      let regex = /^\d+$/gm;

      return regex.test(value);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
