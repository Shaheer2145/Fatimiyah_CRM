export default async function getGlobals(slug) {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
        const res = await fetch(`${baseUrl}/api/globals/${slug}?depth=3&draft=false&locale=undefined&trash=false`, {
            next: { revalidate: 60 }
        });
        if (!res.ok) {
            throw new Error(`Payload returned error for ${slug}: ${res.status}`);
            return null;
        }
        const data = await res.json();
        return data;
    }
    catch (error) {
        console.error(`Fetch failed for ${slug}:`, error);
        return null;
    }
}