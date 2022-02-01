module.exports = function (plop) {
	plop.setGenerator('component', {
		description: 'Generate component',
		prompts: [
			{
				type: 'list',
				name: 'type',
				message: 'Type of component?',
				choices: ['atom', 'molecule', 'organism', 'template', 'layout'],
				default: 'atom',
			},
			{
				type: 'input',
				name: 'name',
				message: 'Name of component?',
			},
			{
				type: 'confirm',
				name: 'useTsxFile',
				message: 'Use tsx file?',
				default: true,
			},
		],
		actions: answers => {
			const componentFolderPath = '../src/components/{{type}}s/{{pascalCase name}}';
			const templatesFolderPath = './templates/component';

			if (answers.useTsxFile) {
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
			}

			return [
				{
					type: 'add',
					path: `${componentFolderPath}/index.ts`,
					templateFile: `${templatesFolderPath}/styled-exporter.ts.hbs`,
					skipIfExists: true,
				},
			];
		},
	});
};
