const empty = (value) => {
  value = value.trim();
  if (value === '') {
    return true;
  } else {
    return false;
  }
};

const notEmpty = (value) => {
  value = value.trim();
  if (value === '') {
    return false;
  } else {
    return true;
  }
};

const moreThan = (value, check) => {
  value = value.trim();
  if (value.length > check) {
    return true;
  } else {
    return false;
  }
};

const lessThan = (value, check) => {
  value = value.trim();
  if (value.length < check) {
    return true;
  } else {
    return false;
  }
};

const equal = (value, check) => {
  value = value.trim();
  if (value.length === check) {
    return true;
  } else {
    return false;
  }
};

const email = (value) => {
  value = value.trim();
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(value);
};

const InputCheckModule = (value, rules) => {
  let error = [];

  for (let i = 0; i < rules.length; i++) {
    /**
     * if rule be object => rules[i].rule
     * if rule be string => rules[i]
     */
    let rule = '';
    if (rules[i].rule !== undefined) {
      rule = rules[i].rule;
    } else {
      rule = rules[i];
    }

    switch (rule) {
      case 'empty':
        if (!empty(value)) {
          error.push({num: i, rule: rule, message: 'is not empty'});
        }
        break;
      case 'notEmpty':
        if (!notEmpty(value)) {
          error.push({num: i, rule: rule, message: 'is empty'});
        }
        break;
      case 'moreThan':
        if (!moreThan(value, rules[i].check)) {
          error.push({num: i, rule: rule, message: 'is less than ' + rules[i].check});
        }
        break;
      case 'lessThan':
        if (!lessThan(value, rules[i].check)) {
          error.push({num: i, rule: rule, message: 'is more than ' + rules[i].check});
        }
        break;
      case 'equal':
        if (!equal(value, rules[i].check)) {
          error.push({num: i, rule: rule, message: 'is not ' + rules[i].check});
        }
        break;
      case 'email':
        if (!email(value)) {
          error.push({num: i, rule: rule, message: 'invalid email'});
        }
        break;
    }
  }

  return error;
};

export { InputCheckModule };
