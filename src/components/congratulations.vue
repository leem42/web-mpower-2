<template>


  <section class="container"> 

    <div class="left">

        <img src="../assets/check.png" alt="image of a check marked circle">

    </div>

    <div class="right"> 

        <p> Congratulations, you're eligible! </p>
        <br>
        <br>
        <p class="tiny"> It's now time for consent, how does it work? </p>
        <br>
        <br>
        <p class="regular">
        There will be 13 sections in the consent process. These
        sections will help you to understand what is involved and how the study will
        work, After the consent introduction, there will be a short quix on what
        you have learned about the study.
        </p>
        <br>
        <br>
        <button> I'D LIKE A WALKTHROUGH </button>
        <br>
        <br>
        <button> GO STRAIGHT TO QUIZ </button>

    </div>


</section>

</template>


<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  @Component
  export default class App extends Vue {
    name: string = 'app'
   

  }
</script>

<style scoped lang="scss">
    button {
      opacity: 1;
    }
</style>
