import AboutContent from "../components/AboutPage/AboutContent";


async function getPageData() {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/pages/69a0035c7668294512a0c277?depth=3&draft=false&locale=undefined&trash=false`, {
        next: { revalidate: 60 }
    });
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const data = await res.json();
    return data;
}

export default async function AboutPage() {
    const data = await getPageData();
    if (!data) return <div>Error loading page content.</div>;

    return (
        <AboutContent data={data} />
    );
}