
document.getElementById('convertBtn').addEventListener('click', calculate);

function calculate() {
  const pxInput = document.getElementById('px').value;
  const px = Number(pxInput);
  if (!px && px !== 0) {
    document.getElementById('result').innerText = 'Please enter a valid number.';
    return;
  }

  // fetch conversion from backend endpoint
  fetch(`/convert?px=${encodeURIComponent(px)}`)
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(data => {
      document.getElementById('result').innerHTML =
        `<strong>Input:</strong> ${px} px<br>
         <strong>rem:</strong> ${data.rem}<br>
         <strong>em:</strong> ${data.em}<br>
         <strong>cm:</strong> ${data.cm}<br>
         <strong>inch:</strong> ${data.inch}`;
    })
    .catch(err => {
      document.getElementById('result').innerText = 'Error: ' + err.message;
    });
}
