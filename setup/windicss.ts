import { defineWindiSetup } from '@slidev/types';

export default defineWindiSetup(() => ({
	shortcuts: {
		'column': "flex flex-col",
		'row': "flex flex-row"
	},
	theme: {
		extend: {
			fontFamily: {
				'opensans': ["Open Sans"]
			}
		}
	}
}))