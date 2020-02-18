import { defaults } from 'underscore';
import interger from './interger';
import { MAX_INT } from '../helpers/constants';

export default (options = {}) => {
  options = defaults(options, {
    min: 0,
    max: MAX_INT,
  });

  return interger(options);
};
