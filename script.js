
let article = "Alan Mathison Turing (Londres, 23 de junho de 1912 — Wilmslow, Cheshire, 7 de junho de 1954) foi um matemático cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico. Turing foi altamente influente no desenvolvimento da moderna ciência da computação teórica, proporcionando uma formalização dos conceitos de algoritmo e computação com a máquina de Turing, que pode ser considerada um modelo de um computador de uso geral. Ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial. Apesar dessas realizações ele nunca foi totalmente reconhecido em seu país de origem durante sua vida por ser homossexual e porque grande parte de seu trabalho foi coberto pela Lei de Segredos Oficiais"
  
  $mask = "■";
// $mask = "|";

  var title = "Alan Mathison Turing"
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
        
        for(var i = 0; i < articleArray.length; i++){
            
            if(removeAccent(articleArray[i]) == removeAccent(keyWord)){
                
                console.log(articleArray[i] + " na Posição " + i)
                auxArray[i] = articleArray[i]
                document.getElementById("artigoId").innerHTML = auxArray.join(" ");       
                // document.getElementById("alertRight").innerHTML = "Boa!!";     
                document.getElementById("inputSearchWord").value = "";
                jsConfetti.addConfetti()
            }
            
        }
        
        
        
        for(var i = 0; i < titleArray.length; i++){
            if(removeAccent(titleArray[i]) == removeAccent(keyWord)){
                auxTitle[i] = titleArray[i];

                document.getElementById("titleId").innerHTML = auxTitle.join(" ");
            }
        }
    }
    
// simula click em button quando Enter é pressionado
    var button = document.getElementById("buttonSearch");
    document.addEventListener("keydown", function(event) { 
      if (event.keyCode === 13) {
        button.click();
      }
    });

    
    
    document.getElementById("artigoId").innerHTML = maskInText(articleArray).join(" ");
    document.getElementById("titleId").innerHTML = maskInText(titleArray).join(" ");


    const canvas = document.querySelector('#celebrate');
    
    const jsConfetti = new JSConfetti();

    
     
    
   
    
    

    

    