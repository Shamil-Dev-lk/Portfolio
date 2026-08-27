const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const env = fs.readFileSync('.env.production', 'utf-8');
const urlMatch = env.match(/NEXT_PUBLIC_SUPABASE_URL=(.*)/);
const keyMatch = env.match(/NEXT_PUBLIC_SUPABASE_ANON_KEY=(.*)/);

const supabaseUrl = urlMatch[1].trim();
const supabaseKey = keyMatch[1].trim();
const supabase = createClient(supabaseUrl, supabaseKey);

async function check() {
    const { data: services, error: err1 } = await supabase.from('services').select('*').limit(1);
    console.log('Services Error:', err1);
    const { data: ports, error: err2 } = await supabase.from('portfolios').select('*').limit(1);
    console.log('Portfolios Error:', err2);
    
    // Insert some mock data if empty
}
check();
