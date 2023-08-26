function exibir(str) {
  document.getElementById("result").innerHTML += str;
}

exibir('');

function execute() {
  const escalar = tf.scalar(1.5); // dimensão solida ou escalar

  const tensor = tf.tensor([1, 2, 3, 4], [2, 2]);

  tensor.print()

  const tensorString = tf.tensor(['1', '2', '3', '4'], [2, 2], 'string'); // int32/float32/bool

  tensorString.print()

  const tensor1d = tf.tensor1d([1, 2, 3]);
  // const tensor2d = tf.tensor2d([1, 2, 3, 4], [2, 2]);
  const tensor2d = tf.tensor2d([[1, 2], [3, 4]]);
  // const tensor3d = tf.tensor3d([1, 2, 3, 4], [2, 2, 1]);
  const tensor3d = tf.tensor3d([[[1], [2]], [[3], [4]]]);
  // const tensor3d = tf.tensor3d([1, 2, 3, 4], [2, 2, 1]);
  const tensor4d = tf.tensor4d([1,2,3,4], [1,2,2,1]);
  const tensor5d = tf.tensor5d([1,2,3,4,5,6,7,8], [1,2,2,2,1]);

  const txt = `
  Tensor Escalar: ${escalar.toString()} \n
  Tensor de 1 dimenção: \n ${tensor1d.toString()} \n
  Tensor de 2 dimenções: \n ${tensor2d.toString()} \n
  Tensor de 3 dimenções: \n ${tensor3d.toString()} \n
  Tensor de 4 dimenções: \n ${tensor4d.toString()} \n
  Tensor de 5 dimenções: \n ${tensor5d.toString()} \n
  `

  exibir(txt);
}
