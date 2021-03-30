const icons = document.querySelectorAll('.section-1-icons i')

//Vamos remover a CLASS="change" e coloca-la no item seguinte para 
//assim cada item aparecer uma vez

let i = 1
setInterval(() => {
  i++;//lembrando: i++ incrementa depois, ou seja termina igual = 1
  // e na próxima rodada do setInterval() vem como 2 | i = 2

  //Estou selecionando o ICONE que tem a CLASS="change"
  const icon = document.querySelector('.section-1-icons .change')

  // removendo a CLASS="change"
  icon.classList.remove('change');

  if (i > icons.length) { //i > 10 | 1 > 10
    icons[0].classList.add('change');
    i = 1;
  } else {
    // Adicionando no próximo elemento irmão(<i>) a class="change"
    icon.nextElementSibling.classList.add('change')//indice 1
  }


}, 2000)