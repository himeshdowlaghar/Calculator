let btns=document.querySelectorAll("button");
let display= document.querySelector(".display");
let expression="";
function calculate(){
    display.value = eval(expression);
    expression="";
}
function clear(){
    expression="";
    display.value="";
}
function del(){
    expression = expression.slice(0,-1);
    display.value = expression;
}
btns.forEach(btn=>{
    btn.addEventListener("click",function(){
        if(btn.id=="equals"){
            calculate();
        }
        else if(btn.id=="AC"){
            clear();
        }
        else if(btn.textContent=="Del"){
            del();
        }
        else{
            expression+=btn.textContent;
            display.value=expression;
        }
    })
}
)
