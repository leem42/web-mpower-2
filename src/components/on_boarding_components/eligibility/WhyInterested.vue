<template>
    <v-app>
        <br>
        <br>
        <div class="row midPage">
            <p class=" largeTitle col-sm-8 col-lg-6 largeTitle mx-auto text-left lead font-weight-bold"> Why are you interested in mPower? </p>
        </div>

        <div class="row">
            <p class="col-sm-8 col-lg-6 largeTitle mx-auto text-left mediumLarge  default "> 
                Understanding what interests you and what
                you are willing to do helps us shape an experience
                that aligns with your expectations. 
            </p>
        </div>

        <div class="row mt-md-5">
            <v-btn large :to="{name: 'SubjectInterest'}" class="col-4 col-md-2 largeTitle mx-auto text-left bigButton text-capitalize navyBlue mediumLarge white--text"> Begin </v-btn>
        </div>

    </v-app>
</template>

<style>
    .midPage {
        top: 50% !important;
    }

</style>
