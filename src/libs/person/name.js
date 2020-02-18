import { defaults } from 'underscore';

import sex from './sex';
import surname from './surname';
import firstName from './firstName';

export default (options = {}) => {
  options = defaults(options, {
    sex: sex(),
    surname: surname(),
  });

  return [firstName(options), options.surname].join(' ');
};
