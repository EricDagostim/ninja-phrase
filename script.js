
  let article = "Alan Mathison Turing (Londres, 23 de junho de 1912 — Wilmslow, Cheshire, 7 de junho de 1954) foi um matemático cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico. Turing foi altamente influente no desenvolvimento da moderna ciência da computação teórica, proporcionando uma formalização dos conceitos de algoritmo e computação com a máquina de Turing, que pode ser considerada um modelo de um computador de uso geral. Ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial. Apesar dessas realizações ele nunca foi totalmente reconhecido em seu país de origem durante sua vida por ser homossexual e porque grande parte de seu trabalho foi coberto pela Lei de Segredos Oficiais"
  
  $mask = "&dagger;";
  var articleArrayLower = removeAccent(article).split(" ");
  var articleArray = article.split(" ");
  var auxArray = maskInText(articleArray);
  
  
  
  
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
        return auxWord; 
    }    
    
    function changeWord(word){ 
    var wordMasked = '';
    for(var i = 0; i < word.length; i++){
        wordMasked = wordMasked + $mask
    }
    return wordMasked;
    }
    
    function maskInText(articleArray){
    var articleMasked = [];

    for(var i = 0; i < articleArray.length; i++){
        articleMasked[i] = changeWord(articleArray[i])
    }

    return articleMasked;
    }

   function fetchInArticle(){
        var keyWord = document.getElementById("inputSearchWord").value;

        for(var i = 0; i < articleArray.length; i++){
            
            if(articleArray[i] == keyWord){


                console.log(articleArray[i] + " na Posição " + i)

                auxArray[i] = articleArray[i]
                document.getElementById("artigoId").innerHTML = auxArray.join(" ");            
            
            }
        }
    }
    
    
    document.getElementById("artigoId").innerHTML = maskInText(articleArray).join(" ");


