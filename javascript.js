let calcTotal = {
    leftTotal : '',
    operator : '',
    rightTotal : '',
 
    
    //document.getElementById('negative').addEventListener('click',() => setOperator('-/+')),
    //document.getElementById('percent').addEventListener('click',() => setOperator('%')),
    //document.getElementById('decimal').addEventListener('click',() => setNumber('.')),
    //document.getElementById('divide').addEventListener('click',() => setOperator('divide')),


    
    

    
    
    setNumber : function(num) {
        calcTotal.leftTotal = calcTotal.leftTotal + num;
        document.getElementById('array').innerText = leftTotal+' '+operator+' '+rightTotal;
    
    },

    setOperator : function(op) {
        calcTotal.operator = op;
        console.log(op);
    },

    clear : function() {
        calcTotal.leftTotal = '';
        calcTotal.rightTotal = '';
        oldAnswer = '';
    },

    solve : function() {
        return 7;
    },


    1 : document.getElementById('one').addEventListener('click', () => calcTotal.setNumber('1')),
    2 : document.getElementById('two').addEventListener('click', () => setNumber('2')),
    //document.getElementById('three').addEventListener('click',() => setNumber('3')),
    //document.getElementById('multiply').addEventListener('click',() => setOperator('x')),

    //document.getElementById('four').addEventListener('click', () => setNumber('4')),
    //document.getElementById('five').addEventListener('click', () => setNumber('5')),
    //document.getElementById('six').addEventListener('click', () => setNumber('6')),
    ////document.getElementById('minus').addEventListener('click',() => setOperator('-')),

    //document.getElementById('seven').addEventListener('click', () => setNumber('7')),
    //document.getElementById('eight').addEventListener('click', () => setNumber('8')),
    //document.getElementById('nine').addEventListener('click', () => setNumber('9')),
    //document.getElementById('add').addEventListener('click',() => setOperator('+')),

    //document.getElementById('clear').addEventListener('click', clear()),
    //document.getElementById('zero').addEventListener('click', () => setNumber('0')),
    //document.getElementById('enter').addEventListener('click', () => solve),
    
}
