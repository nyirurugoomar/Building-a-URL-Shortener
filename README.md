# Building-a-URL-Shortener

This is a basic implementation of a URL shortener using JavaScript. The code defines an object called urlMap which contains a list of shortened URLs and their corresponding long URLs.

The generateShortCode function generates a random string of characters that will be used as the shortened URL. This function is called by the shortenUrl function which takes a long URL as input and generates a shortened URL. If the long URL already has a corresponding shortened URL in the urlMap object, the function returns the existing shortened URL. If not, the function generates a new shortened URL and adds it to the urlMap object.

The getLongUrl function takes a shortened URL as input and returns the corresponding long URL from the urlMap object. If the shortened URL does not exist in the urlMap object, the function returns an error message.

The code also includes some test cases to demonstrate the functionality of the shortenUrl function and the getLongUrl function. The console.log statements are used to output the contents of the urlMap object and the result of calling the getLongUrl function with a sample shortened URL.

// Object containing shortened URLs and their corresponding long URLs
const urlMap = {
  hfhhndhhkkurv: 'https://w3school.com',
  hfhhndhhkkrrt: 'https://ikaze.com',
};

// Function to generate a random string of characters
function generateShortCode() {
  const length = 13; // Length of the generated string
  const characters = 'hffftidjjfdet'; // Characters to use in the generated string
  let code = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters[randomIndex];
  }

  return code;
}

// Function to generate a shortened URL from a long URL
function shortenUrl(longUrl) {
  const longUrls = Object.values(urlMap); // Array of long URLs in urlMap
  const index = longUrls.indexOf(longUrl); // Index of the given long URL in longUrls

  if (index !== -1) { // If the long URL already has a corresponding shortened URL
    const code = Object.keys(urlMap)[index]; // Get the shortened URL from urlMap using the index
    return `https://${code}`;
  } else { // If the long URL does not have a corresponding shortened URL
    const shortCode = generateShortCode(); // Generate a new shortened URL
    urlMap[shortCode] = longUrl; // Add the new shortened URL and its corresponding long URL to urlMap
    return `https://${shortCode}`;
  }
}

// Function to get the long URL corresponding to a given shortened URL
function getLongUrl(shortUrl) {
  const shortCode = shortUrl.replace("/"); // Get the shortened URL code from the given shortened URL
  if (urlMap[shortCode]) { // If the shortened URL exists in urlMap
    return urlMap[shortCode]; // Return the corresponding long URL
  } else { // If the shortened URL does not exist in urlMap
    return "Invalid short URL";
  }
}

// Test cases to demonstrate the functionality of shortenUrl and getLongUrl
shortenUrl("https://figma.com");
shortenUrl("https://youtube.com");
shortenUrl("https://zohobook.com");

console.log(urlMap); // Output the contents of urlMap

console.log(getLongUrl("hfhhndhhkkurv")); //
