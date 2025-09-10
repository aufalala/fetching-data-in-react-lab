export async function index() {
    try {
        const res = await fetch("https://swapi.info/api/starships")
        if (!res.ok) {
        throw new Error('Failed to fetch starships.');  
        }
        const data = await res.json();
        console.log(data);
        return data;

    } catch (err) {
        console.log(err);

    }
}