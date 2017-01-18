var value = 0;

function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}

function keyTyped() {
  if (keyCode === ENTER) {
  	if (value === 255) {
  		value = 0;
  	} else {
  		value = 255;
  	}
  } 
  // uncomment to prevent any default behavior
  // return false;
}