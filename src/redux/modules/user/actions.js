export function set_email(email, nome, idade) {
  return {
    type: '#user/SET_EMAIL',
    payload: {email, nome, idade, position: 1, fruta: 'acerola'},
  };
}

export function createUsers(email, nome, idade) {
  return {
    type: '#user/CREATE_USER',
    payload: {email, nome, idade},
  };
}
