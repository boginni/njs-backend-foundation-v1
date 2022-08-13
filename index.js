fs = require('fs')

exports.printMsg = function() {
    console.log("This is a message from the demo package");


    fs.writeFileSync('test.json', JSON.stringify({"test" : true}, null, 2 ))


}





