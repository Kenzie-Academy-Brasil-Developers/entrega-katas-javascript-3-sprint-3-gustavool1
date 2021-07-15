const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
console.log(sampleArray)
function showResults(n){
    let p = document.createElement("p");
    let conteudo = document.createTextNode(n);
    p.appendChild(conteudo)
    document.body.appendChild(p)
}
 
function kata1() {
    let h2 = document.createElement("h2");
    h2.innerHTML='Kata 1'
    document.body.appendChild(h2);
    let conteudo = "";
    
    for(let i =0; i<=25; i++){
        if(i===0){
            conteudo+=i
        }else{
            conteudo += ", "+ i
        }
         
    }
    
    return conteudo
    
}
showResults(kata1())

function kata2() {
    let h2 = document.createElement("h2");
    h2.innerHTML='Kata 2'
    document.body.appendChild(h2);
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

showResults(kata2())
function kata3() {
    let h2 = document.createElement("h2");
    h2.innerHTML='Kata 3'
    document.body.appendChild(h2);
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

showResults(kata3())
function kata4() {
    let h2 = document.createElement("h2");
    h2.innerHTML='Kata 4'
    document.body.appendChild(h2);
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

showResults(kata4())
function kata5() {
    let h2 = document.createElement("h2");
    h2.innerHTML='Kata 5'
    document.body.appendChild(h2);
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
showResults(kata5())

function kata6() {
    let h2 = document.createElement("h2");
    h2.innerHTML='Kata 6'
    document.body.appendChild(h2);
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
showResults(kata6())


function kata7() {
    let h2 = document.createElement("h2");
    h2.innerHTML='Kata 7'
    document.body.appendChild(h2);
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

showResults(kata7())

function kata8() {
    let h2 = document.createElement("h2");
    h2.innerHTML='Kata 8'
    document.body.appendChild(h2);
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

showResults(kata8())
function kata9() {
    let h2 = document.createElement("h2");
    h2.innerHTML='Kata 9'
    document.body.appendChild(h2);
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
showResults(kata9())


function kata10() {
    let h2 = document.createElement("h2");
    h2.innerHTML='Kata 10'
    document.body.appendChild(h2);
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
showResults(kata10())

function kata11() {
    let h2 = document.createElement("h2");
    h2.innerHTML='Kata 11'
    document.body.appendChild(h2);
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
showResults(kata11())

function kata12() {
    let h2 = document.createElement("h2");
    h2.innerHTML='Kata 12'
    document.body.appendChild(h2);
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

showResults(kata12())
function kata13() {
    let h2 = document.createElement("h2");
    h2.innerHTML='Kata 13'
    document.body.appendChild(h2);
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
showResults(kata13())

function kata14() {
    let h2 = document.createElement("h2");
    h2.innerHTML='Kata 14'
    document.body.appendChild(h2);
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

showResults(kata14())

function kata15() {
    let h2 = document.createElement("h2");
    h2.innerHTML='Kata 15'
    document.body.appendChild(h2);
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
showResults(kata15())
function kata16() {
    let h2 = document.createElement("h2");
    h2.innerHTML='Kata 16'
    document.body.appendChild(h2);
    let numeros = '';
    let soma = 0
    for(let i=0 ; i<sampleArray.length;i++){
        soma+= sampleArray[i]
    }
    numeros+= soma
    return numeros
}
showResults(kata16())

function kata17() {
    let h2 = document.createElement("h2");
    h2.innerHTML='Kata 17'
    document.body.appendChild(h2);
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
showResults(kata17())

function kata18() {
    let h2 = document.createElement("h2");
    h2.innerHTML='Kata 18'
    document.body.appendChild(h2);
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
showResults(kata18())
/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
        let i =0;
        let h2 = document.createElement("h2");
        h2.innerHTML='Kata 1 bonus'
        document.body.appendChild(h2);
        
        sampleArray.forEach(function(_item){
            i++
            console.log(i)
            let div = document.createElement("div");
            let texto = document.createTextNode(i);
            div.appendChild(texto);
            div.style.color ='white'
            div.style.width='100px';
            div.style.height='20px';
            div.style.backgroundColor='grey'

            div.style.margin='10px'
            document.body.appendChild(div)
        })
            
        
        
    
}

kataBonus1()
function kataBonus2() {
        let largura = 100
        let i=0;
        let h2 = document.createElement("h2");
        h2.innerHTML='Kata 2 bonus'
        document.body.appendChild(h2);
        sampleArray.forEach(function(_item){
            i++
            largura+=5
            let div = document.createElement("div");
            let texto = document.createTextNode(i+ ':WIDTH:'+largura+'px');
            div.appendChild(texto)
            div.style.color ='white'
            div.style.height='20px'
            div.style.backgroundColor='grey'
            div.style.width = largura+'px'
            document.body.appendChild(div)
        })
      /* largura+=5
       */
   
}
kataBonus2()

function kataBonus3() {
        let h2 = document.createElement("h2");
        h2.innerHTML='Kata 3 bonus'
        document.body.appendChild(h2);
        sampleArray.forEach(function(_quadrado){
            let div = document.createElement("div")
            let p = document.createElement("p")
            p.innerText = 'Largura:'+_quadrado+'px'
            div.appendChild(p)
            div.style.backgroundColor='grey'
            div.style.width =  _quadrado+'px'
            div.style.height='20px';
            document.body.appendChild(div)
        })
    /*
        
    */
}
kataBonus3()

function kataBonus4() {
    let h2 = document.createElement("h2");
    h2.innerHTML='Kata 4 bonus'
    document.body.appendChild(h2);
    let i =0;
    sampleArray.forEach(function(_quadrado){
        i++
        let div = document.createElement("div");
        div.style.height='20px'
        div.style.width = _quadrado + 'px'
        if(i%2 === 0){
            div.style.backgroundColor = 'red' 
        }if(i%2 === 1){
            div.style.backgroundColor = 'grey'
        }
        document.body.appendChild(div)
    })
   /*
        
    */
}
kataBonus4()
function kataBonus5() {
        let i=0;
        let h2 = document.createElement("h2");
        h2.innerHTML='Kata 5 bonus'
        document.body.appendChild(h2);
        sampleArray.forEach(function(_item){
            i++
            let div = document.createElement("div");
            let texto = document.createTextNode(_item)
            div.appendChild(texto)
            div.style.color='white'
            div.style.height='20px'    
            div.style.width = _item+'px'
            if(_item%2 === 0){
                div.style.background='red'
            }else{
                div.style.background='grey'
            }
            document.body.appendChild(div)

        })
        /*
   */
    
    
}

kataBonus5()
