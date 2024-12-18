export async function register() {
    if (process.env.NEXT_RUNTIME === "nodejs") {
        const { server } = await import("./test/mock/node")
        server.listen()
    }
}