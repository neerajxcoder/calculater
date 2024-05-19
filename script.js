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
           
                input.value += num;
              

            if (input.value.startsWith('%') || input.value === '') {
                input.value = '';
            }
        });
    });
    calc.onclick = () => {
      
        try {
        
            const expression = input.value.replace(/×/, '*').replace(/÷/, '/');

            const result = eval(expression);
            if( result==undefined){
                input.value=""
            }
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
