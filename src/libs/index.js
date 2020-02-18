import cnpj from './company/cnpj';

import mail from './person/mail';
import age from './person/age';
import birthday from './person/birthday.js';
import name from './person/name.js';
import firstName from './person/firstName';
import rg from './person/rg';
import cpf from './person/cpf';
import sex from './person/sex';
import surname from './person/surname';

export default {
  company: {
    cnpj,
  },
  person: {
    mail,
    age,
    birthday,
    name,
    firstName,
    rg,
    cpf,
    sex,
    surname,
  },
};
