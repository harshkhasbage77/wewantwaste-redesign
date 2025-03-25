const API_URL = "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft";
const ANOTHER_API_URL = "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=LE10&area=Hinckley"

export async function fetchSkips() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch data");
        return await response.json();
    } catch (error) {
        console.error("Error fetching skips:", error);
        return [];
    }
}
