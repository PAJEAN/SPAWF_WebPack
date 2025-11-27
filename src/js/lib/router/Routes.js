// @ts-check

import { BaseCustomElements } from "JS/lib/core/base-custom-elements";

export const ROUTES = {
    HOME: `${BaseCustomElements.prefix}-home`,
    ABOUT: `${BaseCustomElements.prefix}-about`,
}

export const ROUTE_CONFIG = {
    [ROUTES.HOME]: {
        route: {
            path: '/',
            title: 'Home',
            is_default: true
        }
    },
    [ROUTES.ABOUT]: {
        route: {
            path: '/about',
            title: 'About'
        }
    }
}