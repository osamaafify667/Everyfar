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
    current = lang;
  }
  if (btn) {
    // remove any previous binding loop safety: clone button to drop script.js? No - script.js guards missing translations.
    btn.addEventListener("click", function(){
      apply(current === "ar" ? "en" : "ar");
    });
  }
  /* Always follow device language on every open:
     Arabic device -> Arabic site, anything else -> English */
  function deviceLang(){
    try {
      var nav = navigator.language || navigator.userLanguage || "ar";
      return String(nav).toLowerCase().indexOf("ar") === 0 ? "ar" : "en";
    } catch(e){ return "ar"; }
  }
  apply(deviceLang());
})();
