<template>
  <v-card class="mx-auto mb-10" max-width="900px">
    <v-card-title>
      {{ $t("login.title.title") }}
    </v-card-title>
    <v-card-text>
      <v-form
          class="form"
          :action="loginAction"
          method="POST"
          v-model="isValid"
          ref="form"
          @submit.prevent="handleLogin"
          lazy-validation
      >
        <v-row>
          <v-col cols="12" sm="12">
            <v-text-field
                v-model="user.email"
                :rules="emailRules"
                :label="$t('login.label.email')"
                :placeholder="$t('login.help.email_holder')"
                name="email"
                type="email"
                :required="true"
                autocomplete="email"
                outlined
                dense
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="12">
            <v-text-field
                v-model="user.password"
                :rules="passwordRules"
                :label="$t('login.label.password')"
                :placeholder="$t('login.help.password_holder')"
                name="password"
                type="password"
                :required="true"
                autocomplete="current-password"
                outlined
                dense
            />
          </v-col>
        </v-row>

        <div class="pt20">
          <v-btn
              block
              color="primary"
              type="submit"
              :disabled="!isValid"
          >
            {{ $t("login.title.button") }}
          </v-btn>
        </div>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import User from '../models/user';

export default {
  name: "Login",
  props: [],
  data() {
    return {
      loginAction: '',
      isValid: true,
      email: "",
      password: "",
      emailRules: [
        value => !!value || this.$t("signin.help.email_required"),
        value => /.+@.+/.test(value) || this.$t("signin.help.email_valid")
      ],
      passwordRules: [
        value => !!value || this.$t("signin.help.password_required"),
        value => value.length >= 8 || this.$t("login.help.password_length")
      ],
      user: new User('', '', ''),
      loading: false,
      message: ''
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/search');
    }
  },
  methods: {
    validate(e) {
      if (this.$refs.form.validate()) {
        return;
      }

      e.preventDefault();
    },
    handleLogin() {
      if (!this.isValid) {
        this.loading = false;
        return;
      }

      if (this.user.email && this.user.password) {
        this.$store.dispatch('auth/login', this.user).then(
            () => {
              this.$router.push('/');
            },
            error => {
              this.loading = false;
              this.message =
                  (error.response && error.response.data) ||
                  error.message ||
                  error.toString();
            }
        );
      }
    }
  }
};
</script>
