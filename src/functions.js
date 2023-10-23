const makePositive = (a) => Math.abs(a);

const greet = (a) => "Hi " + a;

const getShotFullName = (a, b) => a + " " + b[0] + "."

const neutralise = (a, b) => {
    let result = '';
    for (let i = 0; i <= a.length; i++) {
        if (a[i] === 't' && b[i] === 't') {
            result += 't';
        }
        if (a[i] === 'f' && b[i] === 'f') {
            result += 'f';
        }
        if (a[i] === 't' && b[i] === 'f' || a[i] === 'f' && b[i] === 't') {
            result += '.';
        }
        if (a.length !== b.length) {
            result = '-';
        }
    }
    return result;
}

const basicOp = (a) => eval(a);