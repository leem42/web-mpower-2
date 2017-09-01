<template>
  <div id="app">
  
    <p v-if="!loggedIn">You are logged {{ loggedIn ? 'in' : 'out' }}</p>
    <form v-if="!loggedIn" @submit.prevent="login">
      Log into to view the demo site
      <br>
      <label>
        <input v-model="email" placeholder="email">
      </label>
      <label>
        <input v-model="password" placeholder="password" type="password">
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
      <v-btn v-on:click="login()" style="width: 100px; font-size: 20px; box-shadow: 2px; background-color: lightgrey; height: 70px;" type="submit" >login</v-btn>
      <p v-if="error" class="error">Bad login information</p>
    </form>

    <v-btn v-on:click="login()" v-if="this.$router.currentRoute.fullPath === '/' && loggedIn" style="width: 120px; font-size: 20px; box-shadow: 2px; background-color: lightgrey; height: 70px;" type="submit"> Home Page</v-btn>
    <!--<v-btn v-on:click="getResponse()" style="width: 180px; font-size: 20px; box-shadow: 2px; background-color: lightgrey; height: 70px;" type="submit"> getResponse </v-btn>-->

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
      count: 0
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
    getResponse () {
      var output = this.axios.post('https://webservices.sagebridge.org/v3/auth/signIn',
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

      console.log(output)
    }
  },
  created () {
    auth.onChange = loggedIn => {
      this.loggedIn = loggedIn
    }
  }
}
</script>
