//punto 2
let parametro = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

const dividir_arreglo = (parametro) =>
{
    var counter = -1;
    let resultado = parametro.reduce((final, curr, i) => {
    if (i % 4 === 0) {
        final.push([curr])
        counter++;
    } else {
        final[counter].push(curr);
    }

    return final;
    }, []);

    counter = -1;

    return resultado.reduce((final, curr, i) => {
        if (i % 2 === 0) {
        final.push([curr])
        counter++;
        } else {
        final[counter].push(curr);
        }
    
        return final;
    }, []);
}

console.log(dividir_arreglo(parametro));