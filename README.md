thrive-branding
===============

Contains the code and styles used to customize Thrive's Intranet.

Any styles (CSS or Less) should be located in the `./styles` directory, and javascript should be located in the `./src` directory.

System Setup Instructions
-------------------------

1. download node: [found here](https://nodejs.org/en/download/)
2. verify node download
	- open terminal/command prompt
	- run command `node -v`
		- example output: `v5.1.1`
	- run command `npm -v`
		- example output: `3.3.12`

Project Scripts
---------------

* `npm install`: **Run this first**, installs all project dependencies
* `npm run build`: compiles the `./styles` and `./src` directories into single CSS and JS files respectively into the `./dist` directory
* `npm start`: same as `npm run build` except doesn't terminate, instead it watches for further changes to the source files and recompiles every time it detects one
