Copy `commands` from ./lib/corecommand.js and then run:

commands
	.filter(n =>
		n.action === null && n.permissionLevel !== 'bot'
	)
	.map(n => [
				'##' + n.name,
				'Aliases: ' + n.alias.join(', '),
				'Permission: ' + ((n.permissionLevel === true ? 'everyone' : n.permissionLevel)
					.replace(/Up/, ' and up'))
			]
		.join('\n\r') + '\n\r'
	)
	.join('\n\r')
