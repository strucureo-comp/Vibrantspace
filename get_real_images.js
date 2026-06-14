const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch({ headless: "new", args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  const urls = [
    'https://vibrantspaces.in/about',
    'https://vibrantspaces.in/services',
    'https://vibrantspaces.in/works'
  ];
  
  for (const url of urls) {
    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
      // Scroll to bottom to trigger lazy loading
      await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
          let totalHeight = 0;
          let distance = 100;
          let timer = setInterval(() => {
            let scrollHeight = document.body.scrollHeight;
            window.scrollBy(0, distance);
            totalHeight += distance;
            if(totalHeight >= scrollHeight){
              clearInterval(timer);
              resolve();
            }
          }, 100);
        });
      });
      // Wait for images to load
      await new Promise(r => setTimeout(r, 2000));
      
      const images = await page.evaluate(() => {
        const imgs = Array.from(document.querySelectorAll('img'));
        return imgs.map(img => img.src).filter(src => src && src.includes('wp-content/uploads') && !src.includes('dummy'));
      });
      console.log(`\n--- Images on ${url} ---`);
      const uniqueImages = [...new Set(images)];
      uniqueImages.forEach(img => console.log(img));
    } catch (e) {
      console.error(`Error on ${url}:`, e.message);
    }
  }
  
  await browser.close();
}

run();
