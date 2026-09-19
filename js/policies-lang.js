/* Policies language toggle (data-ar / data-en) */
(function(){
  var btn = document.getElementById("lang");
  var current = (document.documentElement.lang === "en") ? "en" : "ar";
  function apply(lang){
    document.querySelectorAll("[data-ar]").forEach(function(el){
      var v = el.getAttribute(lang === "ar" ? "data-ar" : "data-en");
      if (v !== null) el.textContent = v;
    });
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === "ar") ? "rtl" : "ltr";
    if (btn) btn.textContent = (lang === "ar") ? "EN" : "AR";
    try { localStorage.setItem("everyfar-lang", lang); } catch(e){}
    current = lang;
  }
  if (btn) {
    // remove any previous binding loop safety: clone button to drop script.js? No - script.js guards missing translations.
    btn.addEventListener("click", function(){
      apply(current === "ar" ? "en" : "ar");
    });
  }
  try {
    var saved = localStorage.getItem("everyfar-lang");
    var nav = navigator.language || "ar";
    if (saved === "en" || saved === "ar") apply(saved);
    else if (String(nav).toLowerCase().indexOf("ar") !== 0) apply("en");
    else apply("ar");
  } catch(e){ apply("ar"); }
})();
