(function(){
  var k = document.getElementById("kitaplar");
  if (!k || document.getElementById("rastgeleBtn")) return;
  var btn = document.createElement("button");
  btn.id = "rastgeleBtn";
  btn.textContent = "🎲 Rastgele Kitap";
  btn.style.cssText = "display:block;width:100%;margin:10px 0;padding:10px;border-radius:10px;border:1px solid #d4af37;background:var(--kart);color:var(--yazi);font-weight:bold;cursor:pointer";
  btn.onclick = function(){
    fetch("books.json").then(function(r){ return r.json(); }).then(function(d){
      if (!d.length || typeof window.ac !== "function") return;
      var secilen = d[Math.floor(Math.random() * d.length)];
      window.ac(secilen);
    });
  };
  k.parentNode.insertBefore(btn, k);
})();
