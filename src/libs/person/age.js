import { defaults } from 'underscore';
import birthday from './birthday';

export default (options = {}) => {
  options = defaults(options, {
    birthday: birthday(),
    min: 1,
    max: 100,
  });

  const todayDate = new Date();
  const todayYear = todayDate.getFullYear();
  const todayMonth = todayDate.getMonth();
  const todayDay = todayDate.getDate();

  const birthYear = options.birthday.getFullYear();
  const birthMonth = options.birthday.getMonth();
  const birthDay = options.birthday.getDate();

  let age = todayYear - birthYear;

  if (todayMonth < birthMonth - 1) {
    age--;
  }

  if (birthMonth - 1 === todayMonth && todayDay < birthDay) {
    age--;
  }

  if (age > options.max) {
    age = options.max;
  } else if (age < options.min) {
    age = options.min;
  }

  return age;
};
