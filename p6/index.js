import Koa from "koa";

const app = new Koa();

const port = 3000;
app.use((ctx) => {
  const url = ctx.request.url;
  //   ctx.res.writeHead(200, { "Content-Type": "text/html" });
  //   ctx.body = "<h1>Hello Koa</h1>";
  //   console.log(ctx.url);
  if (url === "/") {
    ctx.body = "anasayfa";
  } else if (url === "/about") {
    ctx.res.writeHead(200, { "Content-Type": "text/html" });
    ctx.body = "<h1>welcome about</h1>";
  } else if (url === "/contact") {
    ctx.res.writeHead(200, { "Content-Type": "text/html" });
    ctx.body = "<h1>welcome contact</h1>";
  } else {
    console.log("err");
  }
});

app.listen(port, () => {
  console.log(`listen on port ${port}`);
});
