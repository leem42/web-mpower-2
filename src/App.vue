<template>
  <div id="app">

    <p v-if="!loggedIn">You are logged {{ loggedIn ? 'in' : 'out' }}</p>
    <form @submit.prevent="login" v-if="!loggedIn">
      <label>
        <input class="loginText" v-model="email" placeholder="email">
      </label>
      <label>
        <input class="loginText" v-model="password" placeholder="password">
      </label>
      <br>
      <!--<label>
          <input v-model="study" placeholder="study">
        </label>
        <br>
        <label>
          <input v-model="type" placeholder="type">
        </label>-->
      <br>
      <v-btn v-on:click="login ()" style="width: 100px; font-size: 20px; box-shadow: 2px; background-color: lightgrey; height: 70px;" type="submit">login</v-btn>
      <p v-if="error" class="error">Bad login information</p>
    </form>
    <v-btn v-on:click="login ()" v-if="(this.$router.currentRoute.fullPath === '/' || this.$router.currentRoute.fullPath === '/NullPage/') && loggedIn" style="width: 120px; font-size: 20px; box-shadow: 2px; background-color: lightgrey; height: 70px;" type="submit"> Home Page</v-btn>
    <!--<v-btn :to="{name: 'Registration'}"  style="width: 180px; font-size: 20px; box-shadow: 2px; background-color: lightgrey; height: 70px;" type="submit"> Register </v-btn>-->

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
      type: '',
      wasClicked: false,
      HTTP: null,
      userId: null,
      loginInfo: null
    }
  },
  methods: {
    login () {
      auth.login(this.email, this.password, loggedIn => {
        this.wasClicked = true
        this.count = this.count + 1
        if (!loggedIn) {
          this.error = true
        } else {
          this.error = false
          this.$router.replace(this.$route.query.redirect || '/NullPage/Website/YourStory')
        }
      })
    },
    signIn () {
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
          console.log(response.data)
        })
        .catch(error => {
          console.log('eror being made')
          this.loginInfo = JSON.parse(JSON.stringify(error)).response.data
          console.log('')
          console.log(this.loginInfo)
          console.log('')
          var sessionToken = this.loginInfo.sessionToken
          this.userId = this.loginInfo.id
          this.HTTP = this.createBaseHTTP(sessionToken)
        })
    },
    createBaseHTTP (sessionToken) {
      return this.axios.create({
        baseURL: 'https://webservices.sagebridge.org/',
        headers: {
          'Bridge-Session': sessionToken
        }
      })
    },
    self () {
      this.HTTP.get('/v3/participants/self',
        {}
        // studyId: 'parkinson-android',
        // userId: this.userId
      ).then(response => {
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

<style scoped>
  input.loginText {
    color: blue;
  }
</style>
