function applyBorderRadius() {
    const box = document.getElementById('box');
    const topLeft = document.getElementById('top-left').value + 'px';
    const topRight = document.getElementById('top-right').value + 'px';
    const bottomLeft = document.getElementById('bottom-left').value + 'px';
    const bottomRight = document.getElementById('bottom-right').value + 'px';
  
    box.style.borderRadius = `${topLeft} ${topRight} ${bottomRight} ${bottomLeft}`;
  }
  function copyCSS() {
    const box = document.getElementById('box');
    const cssOutput = document.getElementById('cssOutput');
  
    const computedStyle = window.getComputedStyle(box);
    const borderRadius = computedStyle.getPropertyValue('border-radius');
  
    cssOutput.value = `border-radius: ${borderRadius};`;
  
    navigator.clipboard.writeText(cssOutput.value)
      .then(() => {
        alert('CSS copiado para a área de transferência!');
      })
      .catch(err => {
        console.error('Falha ao copiar o CSS: ', err);
      });
  }
  
  document.querySelectorAll('input[type="range"]').forEach(input => {
    const output = document.getElementById(input.id + '-value');
    output.textContent = input.value;
  
    input.addEventListener('input', function() {
      output.textContent = this.value;
    });
  });