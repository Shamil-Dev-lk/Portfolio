const Database = require('better-sqlite3');
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const env = fs.readFileSync('.env.local', 'utf-8');
const urlMatch = env.match(/NEXT_PUBLIC_SUPABASE_URL=(.*)/);
const keyMatch = env.match(/NEXT_PUBLIC_SUPABASE_ANON_KEY=(.*)/);

const supabaseUrl = urlMatch[1].trim();
const supabaseKey = keyMatch[1].trim();
const supabase = createClient(supabaseUrl, supabaseKey);

const db = new Database('dev.db');

async function migrate() {
    console.log('Migrating Skills...');
    const skills = db.prepare('SELECT * FROM Skill').all();
    for (const skill of skills) {
        const { id, ...data } = skill;
        await supabase.from('skills').upsert({ id, ...data });
    }
    console.log('Skills migrated.');

    console.log('Migrating Services...');
    const services = db.prepare('SELECT * FROM Service').all();
    for (const service of services) {
        const { id, ...data } = service;
        await supabase.from('services').upsert({ id, ...data });
    }
    console.log('Services migrated.');

    console.log('Migrating Portfolios...');
    const portfolios = db.prepare('SELECT * FROM Portfolio').all();
    for (const port of portfolios) {
        const { id, ...data } = port;
        await supabase.from('portfolios').upsert({ id, ...data });
    }
    console.log('Portfolios migrated.');

    console.log('Migrating Testimonials...');
    const testimonials = db.prepare('SELECT * FROM Testimonial').all();
    for (const test of testimonials) {
        const { id, ...data } = test;
        await supabase.from('testimonials').upsert({ id, ...data });
    }
    console.log('Testimonials migrated.');

    console.log('Migrating Certificates...');
    const certs = db.prepare('SELECT * FROM Certificate').all();
    for (const cert of certs) {
        const { id, ...data } = cert;
        await supabase.from('certificates').upsert({ id, ...data });
    }
    console.log('Certificates migrated.');
}

migrate().catch(console.error);
