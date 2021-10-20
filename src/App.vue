<template>
  <v-app>
    <Header></Header>

    <v-main>
      <v-container>
        <Cafe></Cafe>
      </v-container>
    </v-main>

    <Footer></Footer>
  </v-app>
</template>

<script>

import Header from "./components/Header";
import Cafe from "./components/Cafe.vue";
import Footer from "./components/Footer";

export default {
  name: 'App',
  components: {
    Header,
    Cafe,
    Footer
  },
  data: () => ({
    //
  }),
};
</script>
