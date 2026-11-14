function affichedoc(i, total) {
  for (var k = 1; k < total; k++) {
    var d = document.getElementById("doc" + k);
    if (d) d.style.display = "none";
  }
  var el = document.getElementById("doc" + i);
  if (el) {
    el.style.display = "block";
    try {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } catch(e) {}
  }
}

function signaler(doc) {
  alert("Pour toute suggestion ou remarque relative au document " + doc + ", rendez-vous sur le dÃ©pÃŽt GitHub du projet : mohammed-el-baraka/math-prepa");
}
