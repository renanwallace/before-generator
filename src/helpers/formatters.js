export function formatCpf(value) {
  let v = value.replace(/\D/g, '');

  if (v.length <= 14) {
    v = v.replace(/(\d{3})(\d)/, '$1.$2');
    v = v.replace(/(\d{3})(\d)/, '$1.$2');
    v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  }

  return v;
}

export function formatBirth(value) {
  if (trimAll(value).length < 8) {
    return value;
  }
  value = value.replace(/\//g, '');

  var day = value.substring(0, 2);
  var month = value.substring(2, 4);
  var year = value.substring(4);

  return day + '/' + month + '/' + year;
}

export function trimAll(sString) {
  if (sString == null) {
    return '';
  }
  while (sString.substring(0, 1) == ' ') {
    sString = sString.substring(1, sString.length);
  }
  while (sString.substring(sString.length - 1, sString.length) == ' ') {
    sString = sString.substring(0, sString.length - 1);
  }
  return sString;
}

export function formatCell(value) {
  return value
    ? value.replace(/(\d\d)(\d\d\d\d\d)(\d\d\d\d)/, '($1) $2-$3')
    : '';
}
export function formatTel(value) {
  return value ? value.replace(/(\d\d)(\d\d\d\d)(\d\d\d\d)/, '($1) $2-$3') : '';
}
