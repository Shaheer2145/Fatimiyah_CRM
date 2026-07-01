
// export const dynamic = 'force-dynamic';
// import AboutContent from "../components/AboutPage/AboutContent";


// async function getPageData() {
//     const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
//     const res = await fetch(`${baseUrl}/api/pages/69a0035c7668294512a0c277?depth=3&draft=false&locale=undefined&trash=false`, {
//         next: { revalidate: 60 }
//     });
//     if (!res.ok) {
//         throw new Error('Failed to fetch data')
//     }
//     const data = await res.json();
//     return data;
// }

// export default async function AboutPage() {
//     const data = await getPageData();
//     if (!data) return <div>Error loading page content.</div>;

//     return (
//         <AboutContent data={data} />
//     );
// }
import AboutContent from "../components/AboutPage/AboutContent";
import { getPayload } from 'payload';
import config from '@/payload.config'; 

export const dynamic = 'force-dynamic'; 

export default async function AboutPage() {
    // Direct Database Query (No localhost network dependency)
    const payload = await getPayload({ config });
    
    const data = await payload.findByID({
        collection: 'pages',
        id: '69a0035c7668294512a0c277',
        depth: 3,
    });

    if (!data) return <div>Error loading page content.</div>;

    return (
        <AboutContent data={data} />
    );
}