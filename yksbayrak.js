(function(){
  function ekle(){
    var k = document.getElementById("ykskutu");
    if (!k || document.getElementById("yksbayrak")) return;
    var b = document.createElement("div");
    b.id = "yksbayrak";
    b.style.cssText = "font-size:13px;color:var(--soluk);margin:10px 0 2px";
    b.textContent = "🇹🇷 YKS";
    k.parentNode.insertBefore(b, k);
  }
  var obs = new MutationObserver(ekle);
  obs.observe(document.body, {childList:true, subtree:true});
  ekle();
})();
