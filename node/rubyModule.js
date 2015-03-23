

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4,
maxerr: 50, node: true */
/*global */
(function () {
    "use strict";
    var exec = require('child_process').exec;

    function runPHPCode(filePath){
        exec('ruby '+filePath, function (error, stdout, stderr) {
            // output is in stdout
            console.log(stdout);
        });
    }

    function init(domainManager) {
        if (!domainManager.hasDomain("ruby")) {
            domainManager.registerDomain("ruby", {major: 0, minor: 1});
        }
        domainManager.registerCommand(
            "ruby", // domain name
            "runRubyCode", // command name
            runPHPCode, // command handler function
            false, // this command is synchronous in Node
            "Run Ruby code",
            [{name: "filePath", // parameters
              type: "string",
              description: "Ruby file path"}],
            [{name: "data", // return
              type: "object",
              description: "Return"}]
        );
    }
    exports.init = init;
}());
