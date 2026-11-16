(function(){
  var sadeceTm = false;
  function kur() {
    var ara = document.getElementById('ara');
    if (!ara || document.getElementById('tmFiltreBtn')) return;
    var btn = document.createElement('button');
    btn.id = 'tmFiltreBtn';
    btn.style.cssText = 'margin:8px 0;padding:8px 14px;border-radius:8px;border:1px solid #d4af37;background:var(--kart);color:var(--yazi);font-weight:bold;cursor:pointer;display:inline-block;';
    btn.textContent = '🇹🇲 Türkmençe Kitaplar';
    btn.onclick = function() {
      sadeceTm = !sadeceTm;
      var liste = window.kitaplar || [];
      var f = sadeceTm ? liste.filter(function(x){ return x.dosya_tm; }) : liste;
      btn.style.background = sadeceTm ? '#d4af37' : 'var(--kart)';
      btn.style.color = sadeceTm ? '#000' : 'var(--yazi)';
      if (typeof window.goster === 'function') window.goster(f);
    };
    ara.parentNode.insertBefore(btn, ara);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', kur);
  else kur();
})();
(function(){
  var origAc = window.ac;
  if (typeof origAc !== 'function') return;
  window.ac = function(k) {
    origAc(k);
    var eski = document.getElementById('tmDilBtn');
    if (eski) eski.remove();
    if (!k || !k.dosya_tm) return;
    var baslik = document.getElementById('baslik');
    var btn = document.createElement('button');
    btn.id = 'tmDilBtn';
    btn.style.cssText = 'display:block;margin:10px auto;padding:8px 16px;border-radius:8px;border:1px solid #d4af37;background:#d4af37;color:#000;font-weight:bold;cursor:pointer;';
    var tmAktif = false;
    btn.textContent = '🇹🇲 Türkmençe Oka';
    btn.onclick = function() {
      tmAktif = !tmAktif;
      btn.textContent = tmAktif ? '🇬🇧 English Read' : '🇹🇲 Türkmençe Oka';
      origAc(Object.assign({}, k, { dosya: tmAktif ? k.dosya_tm : k.dosya, baslik: tmAktif ? (k.baslik_tm || k.baslik) : k.baslik }));
    };
    baslik.parentNode.insertBefore(btn, baslik.nextSibling);
  };
})();
