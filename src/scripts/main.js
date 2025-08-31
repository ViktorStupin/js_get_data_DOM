'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const populationSpans = document.querySelectorAll('span.population');
  const populations = [];

  populationSpans.forEach((span) => {
    const numStr = span.textContent.replace(/[^\d.]/g, '');

    if (!isNaN(numStr) && numStr.length > 0) {
      populations.push(Number(numStr));
    }
  });

  if (populations.length === 0) {
    return;
  }

  const total = populations.reduce((a, b) => a + b, 0);
  const average = Math.round(total / populations.length);

  function formatNumber(num) {
    return num.toLocaleString('en-US');
  }

  const totalSpan = document.querySelector('span.total-population');
  const averageSpan = document.querySelector('span.average-population');

  if (totalSpan) {
    totalSpan.textContent = formatNumber(total);
  }

  if (averageSpan) {
    averageSpan.textContent = formatNumber(average);
  }
});
