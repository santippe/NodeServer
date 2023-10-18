const express = require('express');
const fs = require('fs');
const axios = require('axios');
//const publicRoutes = require('./publicRoutes');
//const privateRoutes = require('./privateRoutes');
//const loginRoutes = require('./loginRoutes');

const app = express();

const crawler = require('./crawler');

let inputUrl = 'https://snap.untapped.gg/meta/cards-tier-list?collectionLevel=pool3p&collectionStats=all&rankRange=10-100&series=series3&timeFrame=CurrentMeta'
//inputUrl = 'https://example.com'

let contentHTML = fs.readFileSync('./test.html')

let data = crawler.getDataFromContent(contentHTML, (html, $) => {
    console.log(html)
    let elements = $('.befHOM>img')
    console.log(elements.length)
    $('.befHOM>img').each((i, e) => {
        let fileUrl = e.attribs.src
        let fileUrlArray = fileUrl.split('/')
        fileUrlArray[fileUrlArray.length - 2] = '512'
        fileUrl = fileUrlArray.join('/')
        console.log(fileUrl)
        let fileName = fileUrl.split('/').pop()

        // console.log(fileName)

        axios({
            method: "get",
            url: fileUrl,
            responseType: "stream"
        }).then(function (response) {
            response.data.pipe(fs.createWriteStream('./webpgs/' + fileName));
        }).catch(function (err) {
            console.log(err)
        })
    })

})

// Route handlers
//app.use('/public', publicRoutes);
//app.use('/private', privateRoutes);
//app.use('/login', loginRoutes);

// Start the server
// app.listen(3000, () => {
//     console.log('Server listening on port 3000');
// });

