var program = require('commander')
program
	.version('0.0.1')
	.description('a test cli program')
	.option('-n, --name <name>', 'your name', 'GK')
	.option('-a, --age <age>', 'your age', '22')
	.option('-e, --enjoy [enjoy]')
program
   	.command('exec <cmd>')
   	.description('run the given remote command')
   	.action(function(cmd) {
     	console.log('exec "%s"', cmd);
   	})
program.parse(process.argv)

console.log(program.chdir, program.noTests)