import { defaults } from 'underscore';
import random from '../helpers/random';
import { MIN_INT, MAX_INT } from '../helpers/constants';

export default (options = {}) => {
  options = defaults(options, {
    min: MIN_INT,
    max: MAX_INT,
  });
  return Math.floor(random() * (options.max - options.min + 1) + options.min);
};
