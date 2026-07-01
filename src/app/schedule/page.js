import Schedule from "../components/Schedule/Schedule";

async function getPageData() {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/pages/69a003867668294512a0c30b?depth=3&draft=false&locale=undefined&trash=false`, {
        next: { revalidate: 60 } // Cache for 60 seconds
    });
    if (!res.ok) return null;
    return res.json();
}

export default async function schedulePage() {
    let heroData = null;
    const data = await getPageData();

    if (!data) return <div>Error loading page content.</div>;


    heroData = data.hero || null;
    console.log('✅ heroData received:', JSON.stringify(heroData, null, 2));

    const appointmentData = data.layout.find((block) => block.blockType === 'formBlock');
    console.log('✅ appointmentData received:', JSON.stringify(appointmentData, null, 2));

    if (appointmentData) {
        console.log('✅ Form Title:', appointmentData.form?.title);
        // To find a specific field label by its 'name' property:
        const nameField = appointmentData.form?.fields?.find(f => f.name === 'Full Name');
        console.log('✅ Name Field Label:', nameField?.label);
    }

    const scheduleData = data.layout.find((block) => block.blockType === 'archive');
    console.log('✅ scheduleData received:', JSON.stringify(scheduleData, null, 2));


    return (
        <>
            <Schedule
                heroData={heroData}
                scheduleData={scheduleData}
                appointmentData={appointmentData}
            />
        </>
    );
}