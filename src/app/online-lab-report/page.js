
import Lab from '../components/OnlineLabReport/Lab';

async function getPageData() {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/pages/69a140b04a4b3dc48d980935?depth=3`, {
        next: { revalidate: 60 } // Cache for 60 seconds
    });
    if (!res.ok) return null;
    return res.json();
}

export default async function LabPage() {
    const data = await getPageData();

    if (!data) return <div>Error loading page content.</div>;

    return <Lab labData={data} />;
}