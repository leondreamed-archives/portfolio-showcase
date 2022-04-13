import { defineWindiSetup } from '@slidev/types';

export default defineWindiSetup(() => ({
	shortcuts: {
		column: 'flex flex-col',
		row: 'flex flex-row',
	},
	theme: {
		extend: {
			color: {
				gold: 'rgb(205, 166, 124)',
			},
			fontFamily: {
				opensans: ['Open Sans'],
			},
		},
	},
}));
