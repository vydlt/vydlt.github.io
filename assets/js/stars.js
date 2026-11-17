(function () {
  // Colors and canvas placement (so no separate CSS is needed)
  var style = document.createElement('style');
    style.textContent =
    'html{background:#14171a !important;}' +
    'body{background:transparent !important;color:#8a949c !important;line-height:1.7;}' +
    // body text font, applied to every element except icons and code
    ':where(body, body *:not(.fa):not(.fas):not(.far):not(.fab):not(.bi):not([class*="icon"]):not(code):not(pre))' +
        '{font-family:"Inter",system-ui,-apple-system,"Segoe UI",Roboto,sans-serif !important;}' +
    // headings font and color
    'body h1,body h2,body h3,body h4,body h5,body h6,' +
    'body h1 *,body h2 *,body h3 *,body h4 *,body h5 *,body h6 *' +
        '{font-family:"Space Grotesk","Inter",system-ui,sans-serif !important;letter-spacing:-0.01em;}' +
    'h1,h2,h3,h4,h5,h6,strong,b{color:#e8ecef !important;}' +
    'a{color:#9ecbff !important;}' +
    'a:hover{color:#ffffff !important;}' +
    '#stars{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;pointer-events:none;}';
    document.head.appendChild(style);

  var canvas = document.getElementById('stars');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'stars';
    document.body.insertBefore(canvas, document.body.firstChild);
  }

  var ctx = canvas.getContext('2d');
  var stars = [];
  var motion = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var w = 0, h = 0;

  function build() {
    w = window.innerWidth; h = window.innerHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    var count = Math.round((w * h) / 5000);   // smaller number = more stars
    stars = [];
    for (var i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.1 + 0.3,          // star size
        speed: Math.random() * 1.8 + 0.4,      // twinkle speed
        phase: Math.random() * Math.PI * 2,
        base: Math.random() * 0.4 + 0.3
      });
    }
  }

  function draw(t) {
    ctx.clearRect(0, 0, w, h);
    var time = t / 1000;
    for (var i = 0; i < stars.length; i++) {
      var s = stars[i];
      var tw = motion ? (Math.sin(time * s.speed + s.phase) + 1) / 2 : 0.5;
      ctx.globalAlpha = s.base * 0.3 + tw * (1 - s.base * 0.3) * 0.9;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', build);
  build();
  requestAnimationFrame(draw);
})();