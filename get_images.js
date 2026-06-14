const axios = require('axios');
const cheerio = require('cheerio');

async function run() {
  const urls = [
    'https://vibrantspaces.in/about',
    'https://vibrantspaces.in/contact',
    'https://vibrantspaces.in/services'
  ];
  
  for (const url of urls) {
    try {
      const res = await axios.get(url);
      const $ = cheerio.load(res.data);
      console.log(`\n--- Images on ${url} ---`);
      $('img').each((i, el) => {
        const src = $(el).attr('data-src') || $(el).attr('data-lazy-src') || $(el).attr('src');
        if (src && !src.includes('data:image') && !src.includes('dummy')) {
          console.log(src);
        }
      });
    } catch (e) {
      console.error('Error fetching', url);
    }
  }
}
run();
