/* RoxOps — a esteira viva + revelação em rolagem */

(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── esteira: acende os nós no compasso do pulso ─────────────── */
  var nodes  = Array.prototype.slice.call(document.querySelectorAll('.node'));
  var status = document.getElementById('flowStatus');

  var LABELS = [
    'mensagem recebida',
    'triando',
    'qualificando',
    'agendando',
    'presença confirmada'
  ];

  if (nodes.length && status) {
    if (reduced) {
      nodes.forEach(function (n) { n.classList.add('is-on'); });
      status.textContent = LABELS[LABELS.length - 1];
    } else {
      var CYCLE = 9000;                      // igual ao dur do animateMotion
      var SLOT  = CYCLE / nodes.length;      // 1800ms por nó
      var step  = -1;

      var advance = function () {
        var next = (step + 1) % nodes.length;
        if (next === 0) nodes.forEach(function (n) { n.classList.remove('is-on'); });
        nodes[next].classList.add('is-on');
        status.textContent = LABELS[next];
        step = next;
      };

      advance();
      setInterval(advance, SLOT);
    }
  }

  /* ── revelação suave das seções ──────────────────────────────── */
  if (!reduced && 'IntersectionObserver' in window) {
    var targets = document.querySelectorAll(
      '.section .eyebrow, .h2, .section__lede, .cards, .fluxos, .rail, .steps, .case, .fit, .hero__cta'
    );

    Array.prototype.forEach.call(targets, function (el) { el.classList.add('reveal'); });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });

    Array.prototype.forEach.call(targets, function (el) { io.observe(el); });
  }
})();
