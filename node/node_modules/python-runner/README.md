
# Node Python Runner

[![Dependency Status](https://gemnasium.com/teamcarma/node-python-runner.svg)](https://gemnasium.com/teamcarma/node-python-runner)

*Supported by*:

[![Carma](https://raw.githubusercontent.com/teamcarma/node-python-runner/master/assets/banner.png)](https://carmacarpool.com/)
[![Carma IOS](https://raw.githubusercontent.com/teamcarma/node-python-runner/master/assets/ios.png)](https://carmacarpool.com/ios)
[![Carma Android](https://raw.githubusercontent.com/teamcarma/node-python-runner/master/assets/android.png)](https://carmacarpool.com/android)





A library that allows you to execute python code and get its output from nodejs. You can execute inline 
commands or script files.

This can be useful to bridge nodejs with python code. Each execution will create a python 
process.


## Install

```shell


npm install python-runner -g


```

The only dependencies of this package are:

* [Q library](https://www.npmjs.org/package/q)
* [lodash](https://www.npmjs.org/package/lodash)

## Usage

The execution function will run send every command to the python stdin interpreter returning 
a Q promise. This will be resolved with the stdout of the python binary.

The python binary will be executed with the same environment variables as its parent process.

You can tweak the following options:

* bin - The python binary to be used
* env - Replace the environment variables for this python execution. Useful for PYTHONPATH, ... 


### Inline Script

```js

var Python = require("python-runner");

Python.exec(
	"print('Carma Carpooling')" + "\n" + 
	"print('Get there together')" + "\n"
)
.then(function(data){
	console.log(data);
});


```

### Inline Script Using python3

```js

var Python = require("python-runner");

Python.exec(
	[ 
		"print(line1)",
		"print(line2)"
	],
	{
	 	
	 	/// set the python binary. Its 'python' by default
		bin: "python3",
		
		/// python variables
		vars: {
			"line1": "Carma Carpooling",
			"line2": "Get there together"
		},
		
		/// python environment variables
		env: {
			/// set the env for this execution
			PYTHONPATH: "..."
		}

	}
)
.then(function(data){
	console.log(data);
})
.catch(function(err){
	console.log("Error", err);
});


```

### Script File

```js

var Python = requrie("python-runner");

Python.execScript(
	__dirname + "/example.py",
	{
		bin: "python3",
		args: [ "argument" ]
	}
)
.then(function(data){
	console.log(data);
})
.catch(function(err){
	console.log("Error", err);
});


```


You can always take a look at the examples folder!

## Authors

* [Oscar Brito](https://twitter.com/aetheon)
* [Carma](https://twitter.com/TeamCarma)
