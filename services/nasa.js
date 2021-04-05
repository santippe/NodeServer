var baseService = require("../services")

var baseUrl = 'https://epic.gsfc.nasa.gov/api/natural'

function callNasa() {
    var relUrl = '';
    var callUrl = `${baseUrl}${relUrl}`
    console.log(`calling url : ${callUrl}`)
    baseService.httpCall(`${callUrl}`, 'GET', null)
}

callNasa()