import produce from 'immer';
const initialState = {
  usuarios: [],
  name: 'Emilio Emidio 2',
  email: 'emilioemidio@hotmail.com',
  idade: 10,
};

export default function user(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '#user/SET_EMAIL': {
        draft.email = action.payload.email;
        //draft.valor.push(action.payload.email);
        //draft.valor[action.payload.position] = action.payload.fruta;
        break;
      }
      case '#user/CREATE_USER': {
        draft.usuarios.push({
          email: action.payload.email,
          idade: action.payload.idade,
          nome: action.payload.nome,
        });
        break;
      }
      default:
    }
  });
}
