import n from '../n';
import nature from '../nature';

export default () => {
  const nn = n(nature, 9, { max: 9 });

  return [
    '',
    nn[0],
    nn[1],
    '.',
    nn[2],
    nn[3],
    nn[4],
    '.',
    nn[5],
    nn[6],
    nn[7],
    '-',
    nn[8],
  ].join('');
};
