const readline = require("readline");

// readline arayüzü oluşturma
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const posts = [
  { title: "post1", author: "author1" },
  { title: "post2", author: "author2" },
];

function listPosts() {
  console.log(posts);
}

function getPostAndAuthor() {
  return new Promise((resolve, reject) => {
    rl.question("Post başlığını girin: ", (title) => {
      rl.question("Yazar adını girin: ", (author) => {
        resolve({ title, author });
      });
    });
  });
}

async function createPost() {
  const { title, author } = await getPostAndAuthor();
  console.log(`Yeni post oluşturuldu:\nBaşlık: ${title}\nYazar: ${author}`);
  posts.push({ title, author }); // Yeni postu ekleyin
  console.log(posts); // Güncellenmiş post listesini gösterin
  rl.close();
}

createPost();
