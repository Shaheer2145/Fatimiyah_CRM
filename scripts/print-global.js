const slug = process.argv[2] || 'header';
const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

(async () => {
  try {
    console.log(`Fetching global '${slug}' from ${baseUrl}...`);
    const res = await fetch(`${baseUrl}/api/globals/${slug}?depth=3&draft=false&locale=undefined&trash=false`);
    if (!res.ok) {
      console.error(`Request failed: ${res.status} ${res.statusText}`);
      process.exit(1);
    }
    const data = await res.json();
    console.log(JSON.stringify(data, null, 2));

    const navItems = data?.navItems || data?.columns?.[0]?.navItems;
    if (navItems) {
      console.log('\nResolved nav items:');
      navItems.forEach((item, i) => {
        const label = item.link?.label || item.label || `item-${i}`;
        const slugRef = item.link?.reference?.value?.slug || item.href || null;
        console.log(`${i + 1}. label: ${label}  —  slug/href: ${slugRef}`);
      });
    } else {
      console.log('\nNo nav items found in the returned global.');
    }
  } catch (err) {
    console.error('Fetch failed:', err.message || err);
    process.exit(1);
  }
})();
