
let article = "Alan Mathison Turing (Londres, 23 de junho de 1912 — Wilmslow, Cheshire, 7 de junho de 1954) foi um matemático cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico. Turing foi altamente influente no desenvolvimento da moderna ciência da computação teórica, proporcionando uma formalização dos conceitos de algoritmo e computação com a máquina de Turing, que pode ser considerada um modelo de um computador de uso geral. Ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial. Apesar dessas realizações ele nunca foi totalmente reconhecido em seu país de origem durante sua vida por ser homossexual e porque grande parte de seu trabalho foi coberto pela Lei de Segredos Oficiais dia-a-dia passo-a-passo"

// let article = 'a a a a a a a a b c c c';
  
$mask = "|";

    // $mask = "■";
  var title = "Alan Mathison Turing cavalo"
  var titleArray = title.split(" ");
  var articleArrayLower = removeAccent(article).split(" ");
  var articleArray = article.split(" ");
  
  var auxArray = maskInText(articleArray);
  var auxTitle = maskInText(titleArray);
  
  
  
    function removeAccent(article){
      let withAccent = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ";
      let withoutAccent = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr";
      let auxWord = "";
      for (let i = 0; i < article.length; i++) {
          let char = article.charAt(i);
          let index = withAccent.indexOf(char);
          if (index != -1) {
              auxWord += withoutAccent.charAt(index);
            } else {
                auxWord += char;
            }
        } 

        return auxWord.toLowerCase();

    }    
    
    function maskInText(articleArray){
        var articleMasked = [];
        
        for(var i = 0; i < articleArray.length; i++){
        var wordMasked = '';
            for(var j = 0; j < articleArray[i].length; j++){
                wordMasked = wordMasked + $mask
                articleMasked[i] = wordMasked
            }
        }

    return articleMasked;
    }

    function fetchInArticle(){
        var keyWord = document.getElementById("inputSearchWord").value;       
        var wordsFound = 0;
        document.getElementById("inputSearchWord").value = "";

        for(var i = 0; i < articleArray.length; i++){
            if(removeAccent(articleArray[i]) == removeAccent(keyWord)){
                console.log(articleArray[i] + " na Posição " + i)
                auxArray[i] = articleArray[i]
                document.getElementById("artigoId").innerHTML = auxArray.join(" ");         
                
                wordsFound++;
            }   
        }
        
        for(var i = 0; i < titleArray.length; i++){
            if(removeAccent(titleArray[i]) == removeAccent(keyWord)){
                auxTitle[i] = titleArray[i];
                
                document.getElementById("titleId").innerHTML = auxTitle.join(" ");
                wordsFound++
            }
        }
        
        if(wordsFound <= 0){
            wrongWord(keyWord)
        }else{
            correctWord(wordsFound);
        }
    }

    function correctWord(wordsFound){
        var element = document.getElementById("alertWord");
        jsConfetti.addConfetti({ confettiRadius: 4, confettiNumber: 500,})
           
        document.getElementById("alertWord").innerHTML = wordsFound + " Palavras(s) encontrada(s)!"
        element.style.display = "block"
        element.classList.add("alert-success", "alert-message");
        console.log("A")
        setTimeout(function(){
            console.log("B")
            element.classList.remove("alert-success", "alert-message");
            element.style.display = "none";
            
        }, 2500);
    }

    function wrongWord(keyWord){
        var element = document.getElementById("alertWord");
        
        element.style.display = "block"
        element.classList.add("alert-danger", "alert-message");
        document.getElementById("alertWord").innerHTML = 'A palavra "' + keyWord + '" não foi encontrada no artigo :( '
        
        setTimeout(function(){
            element.classList.remove("alert-danger", "alert-message");
            element.style.display = "none";
        }, 2500);
    }

{// @keypressed
    var button = document.getElementById("buttonSearch");
    document.addEventListener("keydown", function(event) { 
      if (event.keyCode === 13) {
        button.click();
      }
    });
}

    
    
    document.getElementById("artigoId").innerHTML = maskInText(articleArray).join(" ");
    document.getElementById("titleId").innerHTML = maskInText(titleArray).join(" ");


    const canvas = document.querySelector('#celebrate');
    const jsConfetti = new JSConfetti();



    
     
    
   
    
    

    

    