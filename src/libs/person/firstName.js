import { sample, defaults } from 'underscore';
import sex from './sex';
import manNames from '../../helpers/person/manNames';
import girlNames from '../../helpers/person/girlNames';

export default (options = {}) => {
  options = defaults(options, {
    sex: sex(),
    midleName: false,
    midleNameAbbreviated: false,
  });

  let firstName;
  let midleName;

  if (options.sex === 'Feminino') {
    firstName = sample(girlNames).split(' ')[0];
    midleName = sample(girlNames).split(' ')[0];
  } else {
    firstName = sample(manNames).split(' ')[0];
    midleName = sample(manNames).split(' ')[0];
  }

  if (options.nomeDoMeioAbreviado) {
    firstName = [firstName, midleName.split('')[0]].join(' ');
  } else if (options.midleName) {
    firstName = [firstName, midleName].join(' ');
  }

  return firstName;
};
