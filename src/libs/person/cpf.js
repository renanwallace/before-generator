import { defaults } from 'underscore';
import n from '../n';
import nature from '../nature';

export default (options = {}) => {
  options = defaults(options, {
    formatted: false,
  });

  const nn = n(nature, 9, { max: 9 });

  let d1 =
    nn[8] * 2 +
    nn[7] * 3 +
    nn[6] * 4 +
    nn[5] * 5 +
    nn[4] * 6 +
    nn[3] * 7 +
    nn[2] * 8 +
    nn[1] * 9 +
    nn[0] * 10;
  d1 = 11 - (d1 % 11);
  if (d1 >= 10) {
    d1 = 0;
  }
  let d2 =
    d1 * 2 +
    nn[8] * 3 +
    nn[7] * 4 +
    nn[6] * 5 +
    nn[5] * 6 +
    nn[4] * 7 +
    nn[3] * 8 +
    nn[2] * 9 +
    nn[1] * 10 +
    nn[0] * 11;
  d2 = 11 - (d2 % 11);
  if (d2 >= 10) {
    d2 = 0;
  }
  const cpf =
    String(nn[0]) +
    nn[1] +
    nn[2] +
    '.' +
    nn[3] +
    nn[4] +
    nn[5] +
    '.' +
    nn[6] +
    nn[7] +
    nn[8] +
    '-' +
    d1 +
    d2;
  return options.formatted ? cpf : cpf.replace(/\D/g, '');
};
