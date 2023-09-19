const server = Bun.serve({
    port: Bun.env.PORT || 8080,
    hostname: Bun.env.HOST_NAME || "localhost",
    async fetch(request) {
        return new Response("Welcome to Buns!");
    },
});

console.log(`Listening on localhost: ${server.port}`);
