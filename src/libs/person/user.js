import { defaults } from 'underscore';

import name from './name';
import removeAccents from '../removeAccents';

export default (options = {}) => {
  options = defaults(options, {
    name: name(options),
  });

  return removeAccents(options.name.replace(' ', '_')).toLowerCase();
};
