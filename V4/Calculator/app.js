function insert(number) {
    document.form.textview.value += number;


}

function equal() {
    var exp = document.form.textview.value;

    if (exp) { //da ne bi bacalo undefined gresku kad se stisne =

        document.form.textview.value = eval(exp);
    }

}

//brise sve
function c() {
    document.form.textview.value = '';
}

function back(){
    var exp=document.form.textview.value;
    
    document.form.textview.value=exp.substring(0,exp.length-1)
    
    //uzima duzinu exp, brise sadnji i kreira novi string
    
}