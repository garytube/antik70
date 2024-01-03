

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.Vc0aWbHw.js","_app/immutable/chunks/scheduler.pAAFikSj.js","_app/immutable/chunks/index.NWqAnxqN.js","_app/immutable/chunks/singletons.4mJjHUa-.js"];
export const stylesheets = [];
export const fonts = [];
