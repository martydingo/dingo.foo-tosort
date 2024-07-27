import { deepMerge } from 'grommet/utils'
import { grommet } from 'grommet'

const grommetTheme = deepMerge(grommet, {
    global: {
        colors: {
            // brand: '#ffcc66',
            brand: '#ffae57',
            control: '#ffcc66',
            'background': {
                dark: '#1d2433',
                light: '#1d2433'
            },
            'background-back': {
                dark: '#171c28',
                light: '#171c28'
            },
            'background-front': {
                dark: '#2f3b54',
                light: '#2f3b54'
            },
            'background-contrast': {
                dark: '#6679a4',
                light: '#6679a4'
            },
            'active-background': {
                dark: '#8695b7',
                light: '#8695b7'
            },
            'selected-background': {
                dark: '#ffae57',
                light: '#ffae57'
            },
            // 'text-xweak': {

            // },
            'text-weak': {
                dark: "#ffae57",
                light: "#ffae57"
            },
            // 'text': {

            // },
            // 'text-strong': {

            // },
            icon: {
                dark: "",
                light: ""
            }
        },
    },
});

export default grommetTheme