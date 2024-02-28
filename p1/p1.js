const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Lütfen yarıçap girin: ", (r) => {
  let result = 3.14 * r * r;

  console.log(`sonuç: ${result}`);

  // Kullanıcıdan veri alındıktan sonra readline arayüzünü kapat
  rl.close();
});
