/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4,
maxerr: 50, node: true */
/*global */
(function () {
    "use strict";
    var Python = require("python-runner");

    function runPythonCode(code){
        Python.exec(
            code
        ).then(function(data){
            return data;
        });
    }

    function init(domainManager) {
        if (!domainManager.hasDomain("python")) {
            domainManager.registerDomain("python", {major: 0, minor: 1});
        }
        domainManager.registerCommand(
            "python", // domain name
            "runPythonCode", // command name
            runPythonCode, // command handler function
            false, // this command is synchronous in Node
            "Run Python code",
            [{name: "code", // parameters
              type: "string",
              description: "Python code"}],
            [{name: "data", // return
              type: "object",
              description: "Return"}]
        );
    }
    exports.init = init;
}());
