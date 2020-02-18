import { defaults } from 'underscore';
import moment from 'moment';
import interger from '../interger';

export default (options = {}) => {
  options = defaults(options, {
    string: false,
    age: interger({ min: 18, max: 100 }),
  });

  let _nascimento = moment()
    .subtract(options.age, 'years')
    .subtract(interger({ min: 0, max: 11 }), 'months')
    .subtract(interger({ min: 0, max: 28 }), 'days')
    .toDate();

  if (options.string || options.format) {
    _nascimento = moment(_nascimento).format(options.format || 'DD/MM/YYYY');
  }

  return _nascimento;
};
