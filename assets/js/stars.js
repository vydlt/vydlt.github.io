(function () {
  var canvas = document.getElementById('stars');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var btn = document.getElementById('toggle'); // optional
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

  function label() { if (btn) btn.textContent = motion ? 'Motion on' : 'Motion off'; }