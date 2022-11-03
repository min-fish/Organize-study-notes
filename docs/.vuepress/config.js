module.exports = {
	title: 'min-fish',
	description: '愿：人生如烟花，短暂而灿烂',
	head: [
		['link', { rel: 'icon', href: '/images/splendid.jpg' }],
		['meta', { name: 'theme-color', content: '#0084ff' }],
		['link', { rel: 'manifest', href: '/manifest.json' }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
		['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
		['meta', { name: 'msapplication-TileImage', content: '/images/splendid.jpg' }],
		['meta', { name: 'msapplication-TileColor', content: '#000000' }]
	],
	base: '/',
	markdown: {
		lineNumbers: false
	},
	themeConfig: {
		nav:[
			{text: '前端', link: '/web/'},
			{text: 'Vue', link: '/vue/'},
			{text: 'React', link: '/react/'},
			{text: '后端', link: '/after/'},
		],
		sidebar: {
			'/web/': [
				{
					title: 'CSS',
					sidebarDepth: 2,
					children: [
						'/web/CSS/1',
						'/web/CSS/2',
						'/web/CSS/3',
						'/web/CSS/4',
						'/web/CSS/5',
						'/web/CSS/6',
						'/web/CSS/7',
						'/web/CSS/8',
					]
				},
				{
					title: 'ES6',
					children: [
						'/web/ES6/1',
					]
				},
				{
					title: '基础',
					children: [
						'/web/Base/1', 
					]
				},
				{
					title: 'DOM',
					sidebarDepth: 2,
					children: [
						'/web/DOM/1',
					]
				},
				{
					title: 'Array',
					children: [
						'/web/Array/1', 
					]
				},
				{
					title: 'Object',
					children: [
						'/web/Object/1', 
					]
				},
				{
					title: 'String',
					children: [
						'/web/String/1', 
					]
				},
				{
					title: '浏览器',
					children: [
						'/web/browser/1', 
					]
				},
				{
					title: '性能优化',
					sidebarDepth: 2,
					children: [
						'/web/性能优化/1', 
					]
				},
				{
					title: '正则',
					children: [
						'/web/正则/1', 
					]
				},
				{
					title: 'HTTP',
					sidebarDepth: 2,
					children: [
						'/web/http/1', 
					]
				},
			],
			'/after/': [
			
			],
			'/Vue/': [
				
			],
			'/React/': [
				
			],
		}
	}
};
