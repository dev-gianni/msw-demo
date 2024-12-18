export default async function Page() {
    const response = await fetch("https://api.github.com/users/dev-gianni")
    const json = await response.json()

    const name = json.name

    return (
        <div>Hello {name}</div>
    )
}