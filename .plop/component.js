module.exports = function (plop) {
	plop.setGenerator('component', {
		description: 'Generate component',
		prompts: [
			{
				type: 'list',
				name: 'type',
				message: 'Type of component?',
				choices: ['atom', 'molecule', 'organism', 'template'],
				default: 'atom',
			},
			{
				type: 'Input',
				name: 'name',
				message: 'Name of component?',
			},
		],
		actions: () => {
			const componentFolderPath = '../src/components/{{type}}s/{{pascalCase name}}';
			const templatesFolderPath = './templates/component';

			return [
				{
					type: 'add',
					path: `${componentFolderPath}/{{pascalCase name}}.tsx`,
					templateFile: `${templatesFolderPath}/component.tsx.hbs`,
					skipIfExists: true,
				},
				{
					type: 'add',
					path: `${componentFolderPath}/styles.ts`,
					templateFile: `${templatesFolderPath}/styles.ts.hbs`,
					skipIfExists: true,
				},
				{
					type: 'add',
					path: `${componentFolderPath}/types.ts`,
					templateFile: `${templatesFolderPath}/types.ts.hbs`,
					skipIfExists: true,
				},
				{
					type: 'add',
					path: `${componentFolderPath}/index.ts`,
					templateFile: `${templatesFolderPath}/exporter.ts.hbs`,
					skipIfExists: true,
				},
			];
		},
	});
};
