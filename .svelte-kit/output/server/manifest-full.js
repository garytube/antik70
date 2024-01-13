export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon-16x16.png","favicon.ico","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.G0i6QG_e.js","app":"_app/immutable/entry/app.mN8Q5CQM.js","imports":["_app/immutable/entry/start.G0i6QG_e.js","_app/immutable/chunks/entry.4A4-Nwtr.js","_app/immutable/chunks/scheduler.RVCy_kJM.js","_app/immutable/entry/app.mN8Q5CQM.js","_app/immutable/chunks/scheduler.RVCy_kJM.js","_app/immutable/chunks/index.JI7moINP.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
