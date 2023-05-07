<!-- eslint-disable max-len -->
<template>
  <q-page class="flex flex-center">
    <q-card style= "width: auto; height:auto; display: flex; flex-direction: column;
    align-items: center;">
      <img src="../assets/sedex-logo-1.svg" ratio="1" style="width:300px; height:auto" >

      <q-input filled v-model="text" label="CPF" />
      <q-input class="q-mt-sm"  filled v-model="text" label="Apartamento " />

      <q-card-actions class="full-width">
        <q-btn type="button" block class="fas fa-sing-in-alt" color="primary" label="Login"  @click="$router.push({ name:'EscolhaInquilino'})" />

      </q-card-actions>
    </q-card>

    <q-card class="my-card">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom text-subtitle2 text-center">
          Login
        </div>
      </q-img>
    </q-card>
  </q-page>

</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      login: {
        CPF: '',
        Text: '',

      },
    };
  },
};
</script>
