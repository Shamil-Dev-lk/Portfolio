const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    'https://zkwjrnwqtczysvyklift.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inprd2pybndxdGN6eXN2eWtsaWZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc3NTc4MTUsImV4cCI6MjEwMzMzMzgxNX0.gJF-5oKn07eUfw4JX57RsF7dQ-2gCRvt0uW7mkLCEks'
);

async function seed() {
    console.log('Seeding Services...');
    const { error: err1 } = await supabase.from('services').insert([
        { name: 'Web Development', description: 'Custom coded websites tailored to your business needs.' },
        { name: 'UI/UX Design', description: 'Beautiful, intuitive user interfaces that convert visitors.' },
        { name: 'E-Commerce', description: 'Full-featured online stores built for scale and performance.' },
        { name: 'SEO Optimization', description: 'Rank higher on Google and drive organic traffic.' }
    ]);
    if (err1) console.error('Services Error:', err1);

    console.log('Seeding Portfolio...');
    const { error: err2 } = await supabase.from('portfolio_items').insert([
        { title: 'E-Commerce Platform', category: 'Web App', description: 'A fully functional modern ecommerce platform.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200', link: 'https://example.com' },
        { title: 'Corporate Website', category: 'Design', description: 'A sleek, professional website for a finance company.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200', link: 'https://example.com' },
        { title: 'SaaS Dashboard', category: 'Web App', description: 'A complex analytics dashboard for a SaaS startup.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200', link: 'https://example.com' }
    ]);
    if (err2) console.error('Portfolio Error:', err2);

    console.log('Seeding Skills...');
    const { error: err3 } = await supabase.from('skills').insert([
        { name: 'HTML5', category: 'Frontend', level: 95 },
        { name: 'CSS3', category: 'Frontend', level: 90 },
        { name: 'JavaScript', category: 'Frontend', level: 85 },
        { name: 'React', category: 'Frontend', level: 80 },
        { name: 'Next.js', category: 'Frontend', level: 75 },
        { name: 'Node.js', category: 'Backend', level: 70 }
    ]);
    if (err3) console.error('Skills Error:', err3);
    
    console.log('Done!');
}
seed().catch(console.error);
