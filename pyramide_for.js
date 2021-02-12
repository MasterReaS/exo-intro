let pyramid = '';
for (let row = 1; row <= 5; row++) {

  for (let column = 1; column <= row; column++) {
    pyramid += '*' + '  ';
  }

  console.log(pyramid);
  pyramid = '';
}
