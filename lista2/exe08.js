const filmes = [
    { titulo: 'Matrix', diretor: 'Lana Wachowski', anoLancamento: 1999 },
    { titulo: 'Interestelar', diretor: 'Christopher Nolan', anoLancamento: 2014 },
    { titulo: 'O Poderoso Chefão', diretor: 'Francis Ford Coppola', anoLancamento: 1972 }
    
  ]
  
  const titulosFilmes = []
  filmes.forEach((filme) => {
    titulosFilmes.push(filme.titulo)
  })
  
  console.log(titulosFilmes)
  