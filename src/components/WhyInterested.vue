<template>
    <v-app>


        <br>
        <br>
        <br>
        <br>
        <br>
        <div class="row midPage">
            <p class="mx-auto largeTitle col-sm-8 lead font-weight-bold"> Why are you interested in mPower? </p>
        </div>

        <div class="row">
            <p class="mx-auto col-sm-8 mediumLarge  default "> 
                Understanding what interests you and what
                you are willing to do helps us shape an experience
                that aligns with your expectations. 
            </p>
        </div>

        <div class="row">
            <v-btn large :to="{name: 'SubjectInterest'}" class="col-auto mx-auto Begin text-capitalize navyBlue mediumLarge white--text"> Begin </v-btn>
        </div>

    </v-app>
</template>

<style>
    .midPage {
        top: 50% !important;
    }

    .Begin {
        width: 280px;
        height: 70px;
        border-radius: 12px;
    }
</style>
