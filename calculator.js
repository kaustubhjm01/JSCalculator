let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenvalue='';
let prev='';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttontext = e.target.innerText;
        console.log(" Entered button text is ",buttontext);
        
        if(buttontext == '*' ){
            screenvalue += buttontext;
            // screen.value="";
            screen.value = screenvalue;
        }

        else if(buttontext=='clc'){
            screenvalue ='';
            screen.value =screenvalue;
        }
        else if(buttontext=='Sin'){
            value1= eval(screenvalue);
            screen.value = Math.sin(value1);
        }
        else if(buttontext=='Cos'){
            value1= eval(screenvalue);
            screen.value = Math.cos(value1);
        }
        else if(buttontext=='Tan'){
            value1= eval(screenvalue);
            screen.value = Math.tan(value1);
        }
        else if(buttontext=='Log'){
            value1= eval(screenvalue);
            screen.value = Math.log(value1);
        }
        else if(buttontext=='PI'){
            // screenvalue += buttontext;        
            // screen.value= screenvalue;
            value1= eval(screenvalue);
            screen.value = Math.PI * (value1);
        }
        else if(buttontext=='SQRT'){
            value1= eval(screenvalue);
            screen.value = Math.sqrt(value1);
        }
        else if(buttontext=='X'){
            screenvalue=screenvalue.substring(0,screenvalue.length-1);
            screen.value =screenvalue;

        }
        else if(buttontext=='='){
            screen.value= eval(screenvalue);
        }
        else{
            screenvalue += buttontext;        
            screen.value= screenvalue;
        }
        prev= buttontext;
    })
}