<template>
  <div id="app">
  
    <p class="text-center"> Registration </p>
   
   
  </div>
</template>


<script>
import auth from '../auth/auth'
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
