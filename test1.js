const express = require ('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/palindrome/:frase', (req, res) => {
    
    let frase = req.params.frase;
    let respuesta = true

    frase = frase
            .replace(/\s/g, '')
            .replace(/,/g, '')
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()

  if(frase.length%2 == 0){
    let aux = frase.length/2
    let i = parseInt(aux)
    let j = i

    let limInferior = frase.slice(0, i)
    let limSuperior = frase.slice(j,frase.length)
    limSuperior = limSuperior.split("");
    limSuperior = limSuperior.reverse();
    limSuperior = limSuperior.join("");

    if(limInferior === limSuperior){
      respuesta = true;
    }else{respuesta = false;}

  }
  else{
    let aux = frase.length/2
    let i = aux - aux%(parseInt(aux))
    let j = i+1

    let limInferior = frase.slice(0, i)
    let limSuperior = frase.slice(j,frase.length)
    limSuperior = limSuperior.split("");
    limSuperior = limSuperior.reverse();
    limSuperior = limSuperior.join("");

    if(limInferior === limSuperior){
      respuesta = true;
    }else{respuesta = false;}

  }
    
    return res.json(Object.assign({esPalindrome : respuesta}))

});

app.listen(process.env.PORT || 3000, () => console.log('http://localhost:3000 is active'))