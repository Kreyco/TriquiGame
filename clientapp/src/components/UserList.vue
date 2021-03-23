<template>
  <v-data-table
      dense
      :headers="headers"
      :items="users"
      :loading="loading"
      :loading-text="$t('loading_message')"
      class="elevation-10 pa-6"
      :footer-props="{itemsPerPageOptions: [10, 50, 100, -1]}"
  >
    <template v-slot:progress>
      <v-progress-linear
          color="purple"
          :height="4"
          :active="loading"
          indeterminate
      ></v-progress-linear>
    </template>

    <template v-slot:no-results>
      {{ $t("userlist.title.no_results") }}
    </template>

    <template v-slot:no-data>
      {{ $t("userlist.title.no_data_available") }}
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "UserList",
  components: {},
  props: {
    users: {
      type: [Object, Array],
      default: () => []
    }
  },
  computed: {
    loading() {
      return this.$store.state.loading.users;
    }
  },
  data() {
    return {
      headers: [
        {
          text: this.$t("userlist.title.id"),
          align: "left",
          sortable: true,
          value: "id"
        },
        {
          text: this.$t("userlist.title.name"),
          value: "name",
          align: "left",
          sortable: false
        },
        {
          text: this.$t("userlist.title.code"),
          align: "left",
          sortable: false,
          value: "code"
        },
        {
          text: this.$t("userlist.title.priority"),
          value: "priority",
          align: "left",
          sortable: false
        },
        {
          text: this.$t("userlist.title.delivery_date"),
          value: "delivery_date",
          align: "left",
          sortable: false
        },
      ]
    };
  },
  methods: {
    loadingState(type, state = true) {
      this.loading[type] = state;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
