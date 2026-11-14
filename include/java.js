function affichedoc(i, total) {
  // 1. Hide all document cards
  for (var k = 1; k < total; k++) {
    var d = document.getElementById("doc" + k);
    if (d) d.style.display = "none";
  }

  // 2. Display the selected document card
  var el = document.getElementById("doc" + i);
  if (el) {
    el.style.display = "block";
    try {
      el.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } catch (e) {}
  }

  // 3. Highlight the selected chapter link in blue
  var allButtons = document.querySelectorAll(".chapter-btn, #content > p a");
  for (var j = 0; j < allButtons.length; j++) {
    allButtons[j].classList.remove("chapter-active");
  }

  var activeLinks = document.querySelectorAll('a[onclick*="affichedoc(' + i + ',"]');
  for (var m = 0; m < activeLinks.length; m++) {
    activeLinks[m].classList.add("chapter-active");
  }
}

// Support direct URLs like coursup.html#doc59 or coursup.html?doc=59
window.addEventListener("DOMContentLoaded", function() {
  var params = new URLSearchParams(window.location.search);
  var docId = params.get("doc");
  if (!docId && window.location.hash) {
    var match = window.location.hash.match(/doc(\d+)/);
    if (match) docId = match[1];
  }
  if (docId) {
    affichedoc(parseInt(docId, 10), 400);
  }
});
