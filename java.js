var totalSupply = 10000000000;
var burnedPercentage = 0.3941812;

function calculateBurned(tweets) {

	var ratioNewOld = (1 - (burnedPercentage / 1000));
	var number = (ratioNewOld ** tweets);
	return (1-number) * 100;
}

window.addEventListener('DOMContentLoaded', function() {
  var slider = document.getElementById('slider');
  var output = document.getElementById('slider-value');
  var burned = document.getElementById('burned-percentage');
  var numberInput = document.getElementById('numberInput');
  
  // Update the slider value display on page load
  output.textContent = 'Number of tweets: ' + slider.value;	
  
  // Update the slider value display when the slider is changed
  slider.addEventListener('input', function() {
    output.textContent = 'Number of tweets: ' + slider.value;
	burned.textContent = 'Burned $MUSK supply : ' + calculateBurned(slider.value).toFixed(2) + '%';
  });
  
  numberInput.addEventListener('input', function() {
	burned.textContent = 'Burned $MUSK supply : ' + calculateBurned(document.getElementById('numberInput').value).toFixed(2) + '%';
  });
  
});