document.addEventListener('DOMContentLoaded', () => {
    const spans = document.querySelectorAll('.span');
    const input = document.getElementById('input');
    const calc = document.getElementById('calc');
    const clear = document.getElementById('clear');
    const back = document.getElementById('back');

    function isOperator(char) {
        return ['+', '-', '*', '/'].includes(char);
    }

    spans.forEach(span => {
        span.addEventListener('click', function () {
            const num = this.textContent;
console.log(num)
            if (isOperator(input.value.slice(-1)) && isOperator(num)) {
                return;
            }
           
            if (num === '××') {
                input.value += '×';
            } else {
                input.value += num;
            }

            if (input.value.startsWith('%') || input.value === '') {
                input.value = '';
            }
        });
    });
    calc.onclick = () => {
        try {
        
            const expression = input.value.replace(/×/g, '*');
            const result = eval(expression);
            input.value = result;
        } catch {
            input.value = '';
        }
    };

    clear.onclick = () => {
        input.value = '';
    };

    back.onclick = () => {
        input.value = input.value.slice(0, -1);
    };
});
