<!-- eslint-disable max-len -->
<template>
  <q-page class="flex flex-center">
    <q-card style=" height:auto; width: auto;">
      <img src="../assets/entrega.jpeg" ratio="1" style="height:300px;width: 350px;">

      <q-card-actions class="full-width">
        <q-btn float no-caps class="q-mx-sm" color="primary" label="Inquilino" @click="$router.push({ name:'inquilino'})" />
        <q-btn float no-caps class="q-mx-sm" color="primary" label="Porteiro" />
        <q-btn float no-caps class="q-mx-sm" color="primary" label="Sindico" />

      </q-card-actions>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
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
