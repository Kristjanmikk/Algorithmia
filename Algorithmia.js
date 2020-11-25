function myFunction(){
        var word1 = document.getElementById("myText1").value;
        var word2 = document.getElementById("myText2").value;
        var words = [];
        
            words.push(word1);
            words.push(word2);
            
        Algorithmia.client("sim+fXXJvaNvLBdEtNzlKgpAWfp1")
          .algo("WebPredict/DoWordsRhyme/0.1.0?timeout=300") 
          .pipe(words)
          .then(function(output) {
          var riim = output[Object.keys(output)[0]];
          
          if (riim == false){
              document.getElementById("riim").innerHTML = "Teie sonad '" + word1 + "' ning '" + word2 + "' ei riimu ";
          }else{
              document.getElementById("riim").innerHTML = "Teie sonad '" + word1 + "' ning '" + word2 + "' riimuvad!!"; 
          }
          });
        
    }