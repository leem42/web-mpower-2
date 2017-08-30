<template>
  <div id="app">
  
    <p v-if="!loggedIn">You are logged {{ loggedIn ? 'in' : 'out' }}</p>
    <form v-if="!loggedIn" @submit.prevent="login">
      <label>
        <input v-model="email" placeholder="email">
      </label>
      <label>
        <input v-model="password" placeholder="password" type="password">
      </label>
      <br>
      <label>
        <input v-model="study" placeholder="study">
      </label>
      <br>
      <label>
        <input v-model="type" placeholder="type">
      </label>
      <br>
      <button type="submit">login</button>
      <p v-if="error" class="error">Bad login information</p>
    </form>
  
    <template>
      <router-view></router-view>
    </template>
  
  </div>
</template>


<script>
import auth from './auth/auth'
export default {
  data () {
    return {
      loggedIn: auth.loggedIn(),
      email: '',
      password: '',
      error: false,
      study: '',
      type: ''
    }
  },
  methods: {
    login () {
      auth.login(this.email, this.password, loggedIn => {
        if (!loggedIn) {
          this.error = true
        } else {
          this.error = false
          this.$router.replace(this.$route.query.redirect || '/NullPage/Website/YourStory')
        }
      })
    },
    getResponse () {
      this.axios.post('https://webservices.sagebridge.org/v3/auth/signIn',
        {
            /* eslint-disable */
            email: this.email,
            password: this.password,
            study: this.study,
            type: this.type
            /* eslint-enable */
        }
      )
      .then((response) => {
        console.log('server call being made')
        console.log(response.data)
      })
    }
  },
  created () {
    auth.onChange = loggedIn => {
      this.loggedIn = loggedIn
    }
  }
}
</script>
