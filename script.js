const spans = document.querySelectorAll('.span')
function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}
spans.forEach(span => {
    span.addEventListener('click', function () {
        var num = this.textContent
       

        var v = document.getElementById('input');
        var b = v.value += num;
        if (isOperator(v.value.slice(-1)) && isOperator(num)) {
            return; 
        }

 
 
        var clear = document.getElementById('clear')
        if (v.value === "C") {
            v.value = "";
        }

        var calc = document.getElementById('calc');

        calc.onclick = () => {
            try {
                console.log(v.value)
                var r = eval(v.value)
                v.value = r
            }
            catch {
               var err= v.value = ('USE THE CORECT CALCULAvTION  ')
               
            }

        }

        clear.onclick = () => {
            v.value = "";
        }
        var back = document.getElementById('back');
        back.onclick = () => {
            var v = document.getElementById('input');
            v.value = v.value.slice(0, -1);
        };
    })

})
