<template>
    <v-app>
        <br>
        <br>
        <br>
        <div class="row">
            <div class="text-center font-weight-bold col">
               <p class=" white--text"> Please review and sign the consent document
               </p>
            </div>
        </div>
        <div class="row">
            <div class="mx-auto text-center col-md-8">
               <p class=" white--text medium-small">
                   By signing your name, you have indicated that you have read and fully agree with the consent form given below. 
                   This is the document which you just went through in the consent and quiz process.
               </p>
            </div>
        </div>
        <div class="row">
            <v-flex class="col-md-3">
                <v-text-field class="white--text" name="input-1" placeholder="Please type your full name here" type="text" pattern="\d*" auto-grow v-model="name">
                </v-text-field>
            </v-flex>
        </div>
        <div class="row">
            <div class="text-center medium col">
               <p class=" white--text">
                  buttons
               </p>
            </div>
        </div>
    </v-app>
</template>

<script>
import {requirements} from '../../../requirements/requirements'

export default {
  data () {
    return {
      requirements: requirements,
      name: name
    }
  }
}
</script>

<style>
    .blueBackground {
        background-image: linear-gradient(71deg, #473b7b, #3584a7 76%, #30d2be);
    }
</style>
