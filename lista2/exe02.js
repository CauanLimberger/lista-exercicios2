const livro = {
    titulo: "epaminondas o gato explicador",
    autor: "clóvis de barros filho",
    anoPublicacao: 2022,
    genero: "reflexão"

}

let propriedadeExiste = false

for(let prop in livro) {
    if (prop === "editora"){
        propriedadeExiste = true
        break
    }
}

if (!propriedadeExiste){
    livro.editora = "desconhecida"
}
console.log(livro);
