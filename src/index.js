module.exports = function zeros(expression) {
    let counter = 0;
    let counter2 = 0;
    let mas = expression.replace(/\*/g, ' ').split(' ');
    for (let item of mas) {
        if (item.includes('!!')) {
            item = parseInt(item);
            for (let i = item; i > 0; i -= 2) {
                let temp = i;
                while (temp >= 5 && !(temp % 5)) {
                    temp /= 5;
                    ++counter;
                }
            }

            for (let i = item; i > 0; i -= 2) {
                let temp = i;
                while (!(temp % 2)) {
                    temp /= 2;
                    ++counter2;
                }
            }
        } else {

            item = parseInt(item);
            for (let i = 1; i <= item; i++) {
                let temp = i;
                while (temp >= 5 && !(temp % 5)) {
                    temp /= 5;
                    ++counter;
                }
            }

            for (let i = 1; i <= item; i++) {
                let temp = i;
                while (!(temp % 2)) {
                    temp /= 2;
                    ++counter2;
                }
            }
        }
    }

    if(counter>counter2) return counter2;
    return counter;
};
