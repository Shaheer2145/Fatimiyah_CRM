import Facilities from "../components/Facilities/Facilities";



async function getPageData() {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/pages/69a003c07668294512a0c3ba?depth=3&draft=false&locale=undefined&trash=false`, {
        next: { revalidate: 60 } // Cache for 60 seconds
    });
    if (!res.ok) return null;
    return res.json();
}


export default async function facilitiesPage() {
    const data = await getPageData();

    if (!data) return <div>Error loading page content.</div>;

    return <Facilities data={data} />;
}