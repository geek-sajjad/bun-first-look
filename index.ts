Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") return Response.json({ message: "Hello world" });
    if (url.pathname === "/blog") return new Response("Blog!");
    return new Response("404!");
  },
});
