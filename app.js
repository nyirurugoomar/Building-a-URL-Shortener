const urlMap = {
    hfhhndhhkkurv: 'https://w3school.com',
    hfhhndhhkkrrt: 'https://ikaze.com',
};
function generateShortCode() {
    const length = 13;
    const characters = 'hffftidjjfdet';
    let code = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters[randomIndex];
    }
  
    return code;
    }
    function shortenUrl(longUrl) {
        const longUrls = Object.values(urlMap);
        const index = longUrls.indexOf(longUrl);
        if (index !== -1) {
          const code = Object.keys(urlMap)[index];
          return `https://${code}`;
        }
        
        const shortCode = generateShortCode();
        urlMap[shortCode] = longUrl;
        return `https://${shortCode}`;
      }
      
      function getLongUrl(shortUrl) {
        const shortCode = shortUrl.replace("/");
        if (urlMap[shortCode]) {
          return urlMap[shortCode];
        } else {
          return "Invalid short URL";
        }
      }
      
      shortenUrl("https://figma.com")
      shortenUrl("https://youtube.com")
      shortenUrl("https://zohobook.com")
      
      
      console.log(urlMap)
      
      console.log(getLongUrl("hfhhndhhkkurv"))