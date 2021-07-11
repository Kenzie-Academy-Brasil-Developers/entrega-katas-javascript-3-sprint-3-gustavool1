const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
console.log(sampleArray)
function showResults(n){
    let p = document.createElement("p");
    let conteudo = document.createTextNode(n);
    p.appendChild(conteudo)
    document.body.appendChild(p)
}
 
function kata1() {
    
    let conteudo = "";
    
    for(let i =0; i<=25; i++){
        conteudo += ", "+ i 
    }
    
    return conteudo
    
}
    

function kata2() {
    // implemente o código do kata 2 aqui
    let numeros = ''
    for(let i=25; i>=1; i--){
        if(i===1){
            numeros += i    
        }
        else{
            numeros+= i +", "
        }
       
    }
    return numeros
}


function kata3() {
   let numeros = '';
   for(let i= -1; i>= -25; i--){
       if(i===-25){
           numeros+= i
        }else{
            numeros+= i + ', '
        }
       
   }
   return numeros
}


function kata4() {
    let numeros =  '';
    for(let i= -25; i<=-1; i++){
        if(i===-1){
            numeros+=i
        }else{
            numeros+=i +', '
        }
    }
    return numeros
}


function kata5() {
    let numeros = '';
    for(let i=25; i>=-25; i--){
       
        if(i%2 === 1 || i%2 === -1){
            if(i === -25){
                numeros += i
            }else{
                numeros+= i + ', '
            }
            
        }
    }
    return numeros
}


function kata6() {
   let numeros = '';
   for(let i=1; i<= 100; i++){
       if(i%3 ===0){
           if(i === 99){
               numeros += i
           }else{
            numeros+= i + ', '
           }
           
       }
   }
   return numeros
}



function kata7() {
    let numeros = ''
    for(let i= 1; i<=100; i++){
        if(i%7 === 0){
            if(i === 98){
                numeros+= i
            }else{
                numeros+=i + ', '
            }
        }
    }
    return numeros
}


function kata8() {
    let numeros = '';
    for(let i=100; i>=1; i--){
        if(i%3 ===0 || i%7===0){
            if(i === 3){
                numeros+= i
            }else{
                numeros += i + ', '
            }
            
        }
    }
    return numeros
}


function kata9() {
    let numeros = '';
    for( let i=5; i<=100; i++){
        if(i%5 === 0){
            if(i%2 === 1){
                if(i === 95){
                    numeros+= i
                }else{
                    numeros+=i + ', '
                }
            }
        }
    }
    return numeros;
}



function kata10() {
    let numeros = '';
    for(let i=0; i<sampleArray.length; i++){
        if(i === sampleArray.length-1 ){
            numeros+=sampleArray[i]
        }else{
            numeros+= sampleArray[i] + ", "
        }
        
       
    }
    return numeros
}


function kata11() {
    let numeros = '';
    for(let i=0; i<sampleArray.length;i++){
        if(sampleArray[i]%2 ===0){
            if(i === sampleArray.length-1){
                numeros+=sampleArray[i]
            }else{
                numeros+= sampleArray[i] + ", "
            }
            
        }
    }
    return numeros
}


function kata12() {
   let numeros = ''
   for(let i=0 ; i<sampleArray.length; i++){
       if(sampleArray[i]%2 === 1){
           if(sampleArray[i] === 535){
               numeros+=sampleArray[i]
           }else{
               numeros+=sampleArray[i] + ', '
           }
       }
   }
   return numeros
}


function kata13() {
   let numeros = '';
   for(let i=0; i<sampleArray.length; i++){
       if(sampleArray[i]%8 === 0){
        if(sampleArray[i] === 472){
            numeros+=sampleArray[i]
        }else{   
             numeros+=sampleArray[i] + ', ' 
       }
   } 
    }
    return numeros
}


function kata14() {
   let numeros = ''
   for(let i=0; i<sampleArray.length; i++){
     if(i === sampleArray.length-1){
         numeros+= sampleArray[i] **2
     }else{
        numeros+= sampleArray[i]**2 + ', '
     }
   }
   return numeros
}



function kata15() {
    let soma = 0;
    let numeros = ''
    for(let i=1; i<=20; i++){
        soma+=i
        if(i === 20){
            numeros +=soma
        }else{
            numeros += soma + ', '
        }
    }
    return numeros
}

function kata16() {
    let numeros = '';
    let soma = 0
    for(let i=0 ; i<sampleArray.length;i++){
        soma+= sampleArray[i]
    }
    numeros+= soma
    return numeros
}


function kata17() {
    let numeros = '';
    let menorNumero = sampleArray[0];
    for(let i=1; i<sampleArray.length; i++){
        if(sampleArray[i]<menorNumero){
            menorNumero = sampleArray[i]
        }
    }
    numeros+=menorNumero
    return numeros
}

function kata18() {
    let numeros = '';
    let maiorNumero = sampleArray[0];
    for(let i=1; i<sampleArray.length; i++){
        if(sampleArray[i]>maiorNumero){
            maiorNumero = sampleArray[i]
        }
    }
    numeros+=maiorNumero
    return numeros
}

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    
    for(let i=1; i<=20; i++){
    
        let div = document.createElement("div");
        let texto = document.createTextNode(i);
        div.appendChild(texto);
        div.style.color ='white'
        div.style.width='20px';
        div.style.height='100px';
        div.style.backgroundColor='grey'
        div.style.display='inline-block'
        div.style.margin='10px'
        document.body.appendChild(div)
    }
}
kataBonus1()

function kataBonus2() {
    let largura = 100
   for(let i=1; i<=20; i++){
       largura+=5
       let div = document.createElement("div");
       let texto = document.createTextNode(i+ ':WIDTH:'+largura+'px');
       div.appendChild(texto)
       div.style.color ='white'
       div.style.height='20px'
       div.style.backgroundColor='grey'
       div.style.width = largura+'px'
       document.body.appendChild(div)
   }
}
kataBonus2()

function kataBonus3() {
    for(let i=0; i<20; i++){
        let div = document.createElement("div")
        div.style.backgroundColor='grey'
        div.style.width =  sampleArray[i]+'px'
        div.style.height='20px';
        document.body.appendChild(div)
    }
}


function kataBonus4() {
    for(let i=0; i<20; i++){
        let div = document.createElement("div");
        div.style.height='20px'
        div.style.width = sampleArray[i] + 'px'
        if(i%2 === 0){
            div.style.backgroundColor = 'red' 
        }if(i%2 === 1){
            div.style.backgroundColor = 'grey'
        }
        document.body.appendChild(div)
    }
}
kataBonus4()

function kataBonus5() {
    for(let i=0; i<20; i++){
        let div = document.createElement("div");
        let texto = document.createTextNode(sampleArray[i])
        div.appendChild(texto)
        div.style.color='white'
        div.style.height='20px'    
        div.style.width = sampleArray[i]+'px'
        if(sampleArray[i]%2 === 0){
            div.style.background='red'
        }else{
            div.style.background='grey'
        }
        document.body.appendChild(div)
    }
    
    
}
kataBonus5()
