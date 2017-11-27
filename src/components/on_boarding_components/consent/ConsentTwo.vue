<template>
    <v-app>
        <div class="row">

            <div class="mx-auto pt-3 pt-sm-0 col-3 col-lg-2 mr-lg-2 customHeight">
                <img class="img-fluid " src="../../../images/number-icon.png">
            </div>

            <div class="col-9 col-lg-9 x-tiny mt-3 lightLead  mr-lg-0 ml-lg-0 pl-0 pr-0">
                <div class="row">
                    <div class="col-12 default font-weight-bold">
                        Sensor data
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <ul class="ml-md-5 mr-md-5 smallText lightGrayText">

                <li class="mt-lg-1 mb-lg-3">
                    In some activities on the app, we will use data from the sensors in your phone.
                </li>

                <li class="mt-lg-1 mb-lg-3">
                    We will also ask for data from your phone about your overall physical activity.
                </li>

                <li class="mt-lg-1">
                    You can decide what data you want to share with us.
                </li>
                <a v-on:click="showHelperText = !showHelperText" class="defaultBlue font-weight-bold ">
                 <u> Learn More </u>
                </a>
            </ul>
        </div>
         <div class="row" v-if="showHelperText">
        <div class="ml-md-5 mr-md-5 p-0 col lightGrayText smallText">
            Your phone contains many sensors. For example, it has a gyroscope and an accelerometer. 
            These sensors are also found in fitness trackers like the Apple Watch, Fitbit, and Jawbone Up. 
            These sensors measure your physical activity.
            <br><br>
            With your permission we’d like to add sensor data from your fitness tracker to the study.
            This is an optional part of the study. You can still participate in the study if you do not allow us to gather data from these sensors.
            <br><br>
            We will NOT access other apps on your phone. Also, we will NOT access your contacts, photos, texts, or email.
        </div>
    </div>

    </v-app>
</template>

<script>
export default {
  data () {
    return {
      showHelperText: false
    }
  }
}
</script>
