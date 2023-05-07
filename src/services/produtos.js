import { http } from './config';

export default {
  listar: () => http.get('produtos'),
};
