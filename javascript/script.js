 const timeline = document.getElementById('exp-cargos');
  const ponto = document.getElementById('exp-ponto-movel');
  const progressLine = document.getElementById('exp-progress-line');

  const TOP_OFFSET = 64;

  function updatePontoPosition() {
    const rect = timeline.getBoundingClientRect();
    const timelineHeight = rect.height - TOP_OFFSET;

    const viewportCenter = window.innerHeight / 2;
    const topOffset = rect.top + TOP_OFFSET;

    let scrolled = viewportCenter - topOffset;
    scrolled = Math.max(0, Math.min(scrolled, timelineHeight));

    const finalTop = scrolled + TOP_OFFSET;

    ponto.style.top = finalTop + 'px';
    progressLine.style.height = scrolled + 'px';
  }

  window.addEventListener('scroll', updatePontoPosition);
  window.addEventListener('resize', updatePontoPosition);
  updatePontoPosition();