// @ts-check

import { Router } from 'JS/lib/router/Router';
import { ROUTES, ROUTE_CONFIG } from 'JS/lib/router/Routes';

Router.define('app-router');
Router.init(ROUTE_CONFIG);

/*** ROUTES ***/
import { Home } from 'JS/pages/Home';
import { About } from 'JS/pages/About';

Home.define(ROUTES.HOME);
About.define(ROUTES.ABOUT);

/*** CSS ***/
(function() {
	let load_css = (module) => {
		let tag = document.createElement('style');
		tag.innerHTML = module.default.toString();
		document.head.appendChild(tag);
	};
	
	import ('./css/var.css')
	.then(load_css);
})();