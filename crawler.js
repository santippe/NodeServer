const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://example.com'; // Replace with the URL you want to crawl



module.exports = {
    getDataFromUrl(url, callback) {
        axios.get(url)
            .then((response) => {
                if (response.status === 200) {
                    const html = response.data;
                    const $ = cheerio.load(html);
                    callback(html, $)
                    // Your HTML parsing logic goes here
                    // For example, you can select and manipulate elements using jQuery-like syntax.
                    // $('a').each((index, element) => {
                    //     console.log($(element).attr('href'));
                    // });
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    },
    getDataFromContent(content, callback) {
        const $ = cheerio.load(content);
        callback(content, $)
        // Your HTML parsing logic goes here
        // For example, you can select and manipulate elements using jQuery-like syntax.
        // $('a').each((index, element) => {
        //     console.log($(element).attr('href'));
        // });
    },
}