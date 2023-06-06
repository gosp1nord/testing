function searchSystemPayment(element) {
  if (element[0] === '2') {
    return 'mir';
  } else if (element[0] === '3') {
    if (element[1] === '4' || element[1] === '7') {
      return 'amex';
    }
    if (element[1] === '6' || element[1] === '0' || element[1] === '8') {
      return 'diners';
    }
    if (element[1] === '1' || element[1] === '5') {
      return 'jcb';
    }
  } else if (element[0] === '4') {
    return 'visa';
  } else if (element[0] === '5' && !['0', '6', '7', '8'].includes(element[1])) {
    return 'mastercard';
  } else if (element[0] === '6' && element[1] === '0') {
    return 'discover';
  }
  return null;
}

function checkNumberCard(element) {
  if (element !== '' && /^\d+$/.test(element) && element.length > 13) {
    const arrNumbers = element.split('');
    let sum = 0;
    for (let n = arrNumbers.length - 1; n >= 0; n -= 1) {
      let num = Number(arrNumbers[n]);
      if (n % 2 === 0) {
        num *= 2;
        if (num > 9) {
          sum += (num - 9);
        } else {
          sum += num;
        }
      } else {
        sum += num;
      }
    }
    if (sum % 10 === 0) {
      return true;
    }
  }
  return false;
}

export { searchSystemPayment, checkNumberCard };
