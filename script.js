function toggleMode(){
  const html = document.documentElement
  html.classList.toggle('dark')

  //pegar a tag img
  const img = document.querySelector('#profile img')

  //substituir imagem
  if (html.classList.contains("dark")) {
   // se tiver dark mode, adicionar a imagem dark
    img.setAttribute('src', './UPPODS/dark.avatar.png')
    
   } else {
    //se tiver sem dark mode, avatar padrão
    img.setAttribute("src", "./UPPODS/avatar.png")
   
  }
}