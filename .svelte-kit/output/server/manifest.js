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
		client: {"start":"_app/immutable/entry/start.F6IobIkN.js","app":"_app/immutable/entry/app.ata_wwUJ.js","imports":["_app/immutable/entry/start.F6IobIkN.js","_app/immutable/chunks/scheduler.pAAFikSj.js","_app/immutable/chunks/singletons.4mJjHUa-.js","_app/immutable/entry/app.ata_wwUJ.js","_app/immutable/chunks/scheduler.pAAFikSj.js","_app/immutable/chunks/index.NWqAnxqN.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
