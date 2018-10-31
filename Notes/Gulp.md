## Gulp

### What is Gulp?
- Javascript toolkit / task runner
- Front-end build system
- Built on Node and NPM
- Used for repetitive tasks
- 100s of plugins available

### Common Tasks
- Minification
- Concatenation
- Cache busing
- Testing, linting, optimization
- Dev Servers

### How it works
- built with node streams
  - flow of data that can be manipulated async
- pipelines .pipe() operate the streams
- Single purpose plugins
- gulp is an alternative to grunt and is growing in popularity


### Basic setup
- npm install gulp as a dev dependency
- Create src directory that gulp will reference
- gulpfile.js in root   
- run tasks in terminal with 'gulp {name of task}'
