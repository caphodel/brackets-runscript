

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4,
maxerr: 50, node: true */
/*global */
(function () {
    "use strict";
    var exec = require('child_process').exec;

    function runPerlCode(filePath){
        exec('perl "'+filePath+'"', function (error, stdout, stderr) {
            // output is in stdout
            console.log(stdout);
        });
    }

    function init(domainManager) {
        if (!domainManager.hasDomain("perl")) {
            domainManager.registerDomain("perl", {major: 0, minor: 1});
        }
        domainManager.registerCommand(
            "perl", // domain name
            "runPerlCode", // command name
            runPerlCode, // command handler function
            false, // this command is synchronous in Node
            "Run perl code",
            [{name: "filePath", // parameters
              type: "string",
              description: "Perl file path"}],
            [{name: "data", // return
              type: "object",
              description: "Return"}]
        );
    }
    exports.init = init;
}());
