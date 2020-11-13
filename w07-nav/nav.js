function change(index) {
  const p = document.getElementById('show');
  console.log('show', p);
  switch (index) {
    case 1:
      p.innerHTML = '<iframe width=100% height=100% src="./w01/index.html" />';
      break;
    case 2:
      p.innerHTML =
        '<iframe width=100% height=100% src="./w01/pokemon.html" />';
      break;
    case 3:
      p.innerHTML =
        '<iframe width=100% height=100% src="./w2-img/img/ImgGallery.html" />';
      break;
    case 4:
      p.innerHTML =
        '<iframe width=100% height=100% src="./w2-blog/blog.html" />';
      break;
    case 5:
      p.innerHTML =
        '<iframe width=100% height=100% src="./w03/w03_div/div.html" />';
      break;
    case 6:
      p.innerHTML =
        '<iframe width=100% height=100% src="./w04-tku60-js/div-tku60.html" />';
      break;
    case 7:
      p.innerHTML =
        '<iframe width=100% height=100% src="./w06-ms-clone/index.html" />';
      break;
  }
}
