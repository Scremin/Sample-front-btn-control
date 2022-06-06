<style scoped>
    @import url("../styles/pagamentos/painelPix.scss");
</style>

<template>
  <div class="box_painelPix">

    <v-btn @click="turnOnBtn()"
      :style="{'background':'rgba(1,1,1,0.2)'}"
      color="green"
      target="_blank"
      text
      class="main_btn_painelPix"
    >
      <span class="">Activate</span>
      <v-icon>mdi-alarm-light</v-icon>
    </v-btn>

    <v-btn @click="turnOffBtn()"
      :style="{'background':'rgba(1,1,1,0.4)'}"
      color="rgba(128,0,0)"
      target="_blank"
      text
      class="main_btn_painelPix"
    >
      <span class="">Deactivate</span>
      <v-icon>mdi-alarm-light-off</v-icon>
      <v-icon>mdi-alert</v-icon>
    </v-btn>

    <div class="main_view_painelPix">
        <span v-if="flagActv">App activated</span>
        <span v-else>App deactivated</span>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {

  data: () => ({
    //
    flagActv:false,
    passo_pix:null,
  }),
  methods: {
    turnOnBtn() {

      this.flagActv = true

      this.passo_pix = window.setInterval(() => {

        const self = this

        axios
        .get(self.$store.state.path_api)
        .then(function (res) {

            console.log(res.data.result)
        })

      }, 60000); // 1 minuto.
    },
    turnOffBtn() {

      this.flagActv = false

      clearInterval(this.passo_pix);
      console.log('deactivate passo_pix rotine')
    }
  }
};
</script>