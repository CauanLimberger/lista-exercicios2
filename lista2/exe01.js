const carro = {
    marca: 'ford',
    modelo: 'mustang',
    ano: 2018,
    cor: 'azul'

}

for (let i in carro) {
    console.log(`${i}: ${carro[i]}`);
    
}