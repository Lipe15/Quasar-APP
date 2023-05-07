<!-- eslint-disable max-len -->
<template>
  <q-page class="flex flex-center">
    <q-card style=" height:auto; width: auto;">
      <img src="../assets/entrega.jpeg" ratio="1" style="height:300px;width: 350px;">

      <q-card-actions class="full-width">
        <q-btn float no-caps class="q-mx-sm" color="primary" label="Encomendas" @click="$router.push({ name:'EncomendasInquilino'})" />
        <q-btn float no-caps class="q-mx-sm" color="primary" label="Histórico" @click="$router.push({ })" />

      </q-card-actions>

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
