const routes = [
  {
    path: '/',
    component: () => import('layouts/telaInicialLayout.vue'),
    children: [
      { path: '', name: 'TelaInicial', component: () => import('pages/TelaInicial.vue') },
      { path: '/inquilino-pagina', name: 'inquilino', component: () => import('pages/InquilinoTela.vue') },
      { path: '/Escolha', name: 'EscolhaInquilino', component: () => import('pages/Escolha.vue') },
      { path: '/EncomendasInquilino', name: 'EncomendasInquilino', component: () => import('pages/EncomendasInquilino.vue') },
    ],
  },
  {
    path: '/auth/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') },
    ],
  },
  {
    path: '/auth',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
