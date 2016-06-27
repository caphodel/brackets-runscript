

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4,
maxerr: 50, node: true */
/*global */
(function () {
    "use strict";
    var exec = require('child_process').exec;

    function runPHPCode(filePath){
        exec('php "'+filePath+'"', function (error, stdout, stderr) {
            // output is in stdout
            console.log(stdout);
        });
    }

    function init(domainManager) {
        if (!domainManager.hasDomain("php")) {
            domainManager.registerDomain("php", {major: 0, minor: 1});
        }
        domainManager.registerCommand(
            "php", // domain name
            "runPHPCode", // command name
            runPHPCode, // command handler function
            false, // this command is synchronous in Node
            "Run PHP code",
            [{name: "filePath", // parameters
              type: "string",
              description: "PHP file path"}],
            [{name: "data", // return
              type: "object",
              description: "Return"}]
        );
    }
    exports.init = init;
}());
