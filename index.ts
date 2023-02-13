const main = () => {
  console.log("main");

  let texto =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et lorem ac eros finibus porta eget fermentum velit. Aenean lobortis egestas rutrum. Phasellus mollis sodales posuere. Sed ut ultrices purus. Fusce vehicula efficitur urna, non sodales ipsum. Morbi sed commodo nibh. Sed vitae felis leo. Ut ut quam risus. Sed id pulvinar ipsum. Fusce rhoncus ligula sed finibus rhoncus. Ut rhoncus ultrices lorem, ut euismod odio cursus eu.";
  let qtdCaracter = texto.length;

  console.log(qtdCaracter);

  let qtdCarPar = qtdCaracter % 2;

  if (qtdCarPar == 0) {
    console.log("tudo ok");
  } else {
    console.log("e impar. erro");
  }
}
main();