

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.95mg6GBq.js","_app/immutable/chunks/scheduler.RVCy_kJM.js","_app/immutable/chunks/index.JI7moINP.js","_app/immutable/chunks/entry.4A4-Nwtr.js"];
export const stylesheets = [];
export const fonts = [];
