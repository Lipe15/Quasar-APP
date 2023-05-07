<!-- eslint-disable max-len -->
<template>

        <div class="q-pa-md row items-start q-gutter-md;">
    <q-card class="card d-flex justify-content-center">
      <img src="../assets/caixa.webp">

      <q-card-section>
        <li text-align: center v-for="encomenda of encomendas" :key="encomenda">{{encomendas}}</li>
      </q-card-section>

    </q-card>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      encomendas: [],
    };
  },
  async created() {
    try {
      const res = await axios.get(' http://localhost:3000/encomendas');
      this.encomendas = res.data;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  },

};
</script>
<style>
li{
  list-style: none;
}
.q-card{
justify-content: center;
}
</style>
