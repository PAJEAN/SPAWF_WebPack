/*** Libraries ***/
import './js/lib/router';

/*** Components ***/
import './js/components/wc-card';

/*** Pages ***/
import './js/pages/home';
import './js/pages/about';

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