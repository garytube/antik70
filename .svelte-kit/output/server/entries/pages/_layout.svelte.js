import { c as create_ssr_component, e as each, v as validate_component, b as escape, d as add_attribute } from "../../chunks/ssr.js";
import { O as OpenHoures, S as SITE } from "../../chunks/OpenHoures.js";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="py-14 bg-primary border-2 border-highlight text-white text-base"><div class="container grid grid-cols-footer">${each(Object.entries(SITE.DE.FOOTER_LINKS), ([categorie, links]) => {
    return `<div><h4 class="text-lg font-bold mb-4">${escape(categorie)}</h4> <ul>${each(links, (link) => {
      return `<li class="mb-2 last:mb-0 hover:text-highlight"><a${add_attribute("href", link.href, 0)}>${escape(link.name)}</a></li>`;
    })}</ul> </div>`;
  })} <div id="open" class="self-start justify-self-end text-right">${validate_component(OpenHoures, "OpenHoures").$$render($$result, {}, {}, {})}</div></div></footer>`;
});
const MobileNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { mobileNavVisable = false } = $$props;
  if ($$props.mobileNavVisable === void 0 && $$bindings.mobileNavVisable && mobileNavVisable !== void 0)
    $$bindings.mobileNavVisable(mobileNavVisable);
  return `<div id="mobileMenu" class="${[
    "flex flex-col justify-start fixed w-screen lg:hidden h-screen items-center px-4 top-32 bg-white left-0 z-[1000]",
    !mobileNavVisable ? "hidden" : ""
  ].join(" ").trim()}"><div class="block w-full border-t-2 pt-8" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">${slots.default ? slots.default({}) : `404- No Entries`} ${slots.info ? slots.info({}) : ` <div class="text-sm mt-4 grid gap-x-8 grid-cols-2" data-svelte-h="svelte-j74fau"><div class="map"><h3 class="font-bold mb-4">Anfahrt</h3> <div class="w-full h-24 block rounded-lg bg-highlight"></div></div> <div class="text-right"><h3 class="font-bold mb-3">Öffnungszeiten</h3> <p class="mb-2"><span class="block font-bold">Montag bis Freitag</span>
						11.00 Uhr bis 18.00 Uhr</p> <p class="mb-2"><span class="block font-bold">Neu: Samstag</span>
						10.00 Uhr bis 14.00 Uhr</p></div></div> `}</div></div>`;
});
const MobileMenuButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  return `<div id="mobile_nav_button"${add_attribute("class", $$props.class, 0)}><button type="button" class="relative inline-flex items-center justify-center rounded-md border-2 p-1 text-gray-400 hover:bg-gray-700 hover:text-highlight focus:outline-none" aria-controls="mobile-menu" aria-expanded="false"><span class="absolute -inset-0.5"></span> <span class="sr-only">${open ? `Open main menu` : `Close main menu`}</span> ${!open ? `<svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>` : `<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>`}</button></div>`;
});
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<a href="/" title="Home" data-svelte-h="svelte-1i2xhwr"><svg xmlns="http://www.w3.org/2000/svg" class="w-[260px] xl:w-[319px] transform-gpu duration-300" viewBox="0 0 319.301 52.953"><g transform="translate(0 1)"><line y1="51" transform="translate(153.734)" class="stroke-primary" stroke-linecap="round" stroke-width="2"></line><g transform="translate(0 6.821)"><path id="Path_2" data-name="Path 2" d="M-175.656-3.143h7.849v-2.5h-4.855V-15.681h-2.994Zm12.9-6.279c.326-1.233.653-2.716.96-4.025h.077c.326,1.31.653,2.793.979,4.025l.269,1.079h-2.552Zm-4.625,6.279h3.051l.729-2.889h3.7l.729,2.889h3.147l-3.9-12.538h-3.57Zm12.647,0h2.687V-7.5c0-1.233-.249-3.37-.4-4.6h.077l1,3.274,1.67,4.622h1.689l1.689-4.622,1.036-3.274h.077c-.154,1.233-.4,3.37-.4,4.6v4.353h2.706V-15.681h-3.263l-1.9,5.45c-.249.732-.441,1.483-.672,2.273h-.077c-.23-.79-.441-1.541-.672-2.273l-1.977-5.45h-3.263Zm14.7,0h2.994V-7.3h1.478c2.629,0,4.913-1.31,4.913-4.314,0-3.081-2.245-4.064-4.99-4.064h-4.395Zm2.994-6.529v-3.64h1.228c1.459,0,2.245.443,2.245,1.695s-.691,1.945-2.169,1.945Zm8.521,6.529h8.1v-2.5h-5.1V-8.324h4.2v-2.5h-4.2v-2.35h4.913v-2.5h-7.907Zm10.555,0h2.84V-7.361a44.127,44.127,0,0,0-.384-4.622h.077c.384.982.787,1.984,1.209,2.831l3.09,6.009h3.071V-15.681h-2.821v4.218a43.7,43.7,0,0,0,.384,4.622h-.077a29.819,29.819,0,0,0-1.228-2.831l-3.071-6.009h-3.09ZM-98.352-12.6c0-.867.48-1.348,1.075-1.348.557,0,.825.347.825.905,0,.809-.653,1.348-1.516,1.849A3.106,3.106,0,0,1-98.352-12.6Zm.249,9.687a6.422,6.422,0,0,0,3.953-1.252,10.238,10.238,0,0,0,3.263,1.252l.71-2.407a7.569,7.569,0,0,1-2.149-.751,13.392,13.392,0,0,0,2.073-4.2H-92.94a8.486,8.486,0,0,1-1.42,2.927,16.287,16.287,0,0,1-2.418-2.138c1.305-.886,2.591-1.907,2.591-3.563a2.829,2.829,0,0,0-3.147-2.87,3.291,3.291,0,0,0-3.474,3.313,5.67,5.67,0,0,0,.748,2.581,4.03,4.03,0,0,0-2.245,3.505C-102.306-4.588-100.886-2.912-98.1-2.912Zm-1.4-3.775a1.942,1.942,0,0,1,.768-1.406,16.945,16.945,0,0,0,2.495,2.484,3.144,3.144,0,0,1-1.478.424C-98.794-5.185-99.5-5.8-99.5-6.687Zm14.969,3.544h7.849v-2.5H-81.54V-15.681h-2.994Zm10.018,0h2.994V-15.681h-2.994Zm11.17.231A5.187,5.187,0,0,0-59.3-4.761l-1.555-1.772a3.171,3.171,0,0,1-2.4,1.04c-1.746,0-2.917-1.444-2.917-3.948,0-2.427,1.324-3.89,2.975-3.89a2.933,2.933,0,0,1,2.149.867l1.574-1.81a5.222,5.222,0,0,0-3.8-1.637c-3.147,0-5.949,2.407-5.949,6.587C-69.219-5.088-66.533-2.912-63.347-2.912Zm5.892-.231h2.994V-8.3h4.126v5.161h2.975V-15.681h-2.975V-10.9h-4.126v-4.776h-2.994Zm15.411,0h2.975V-13.177h3.4v-2.5h-9.769v2.5h3.4Z" transform="translate(175.733 15.912)" class="fill-primary"></path><path id="Path_1" data-name="Path 1" d="M-178.752-3.262h2.966V-7.631h1.445l2.281,4.369h3.308l-2.757-4.923a3.7,3.7,0,0,0,2.129-3.587c0-3-2.205-3.911-4.829-3.911h-4.544Zm2.966-6.716v-3.358h1.35c1.407,0,2.167.382,2.167,1.565s-.76,1.793-2.167,1.793ZM-167-3.262h8.023v-2.48h-5.057V-8.395h4.164v-2.48h-4.164V-13.2h4.867v-2.48H-167Zm14.3.229c2.985,0,4.715-1.813,4.715-3.892a3.4,3.4,0,0,0-2.453-3.377l-1.54-.63c-1.1-.439-1.882-.687-1.882-1.412,0-.649.589-1.011,1.5-1.011a4.408,4.408,0,0,1,2.472.916l1.54-1.927a5.926,5.926,0,0,0-4.012-1.545c-2.624,0-4.487,1.679-4.487,3.759a3.61,3.61,0,0,0,2.51,3.4l1.578.687c1.084.439,1.749.668,1.749,1.393,0,.668-.513,1.088-1.635,1.088a4.93,4.93,0,0,1-3.118-1.183l-1.559,1.927A6.589,6.589,0,0,0-152.7-3.033Zm8.8-.229h2.947V-13.2h3.365v-2.48h-9.677v2.48h3.365Zm10.457-6.22c.323-1.221.646-2.69.951-3.988h.076c.323,1.3.646,2.767.97,3.988l.266,1.068h-2.529Zm-4.582,6.22H-135l.722-2.862h3.669l.722,2.862h3.118l-3.86-12.421h-3.536Zm17.263.229c3.289,0,4.943-1.87,4.943-6.067v-6.582h-2.833v6.907c0,2.366-.741,3.186-2.11,3.186-1.35,0-2.053-.82-2.053-3.186v-6.907h-2.947V-9.1C-125.764-4.9-124.053-3.033-120.764-3.033Zm7.738-.229h2.966V-7.631h1.445l2.282,4.369h3.308l-2.757-4.923a3.7,3.7,0,0,0,2.129-3.587c0-3-2.205-3.911-4.829-3.911h-4.544Zm2.966-6.716v-3.358h1.35c1.407,0,2.167.382,2.167,1.565s-.76,1.793-2.167,1.793Zm8.784,6.716h2.966V-15.683h-2.966Zm5.818,0h8.023v-2.48h-5.057V-8.395h4.164v-2.48h-4.164V-13.2h4.867v-2.48h-7.833Zm10.457,0h2.966V-7.631h1.445l2.281,4.369H-75l-2.757-4.923a3.7,3.7,0,0,0,2.129-3.587c0-3-2.205-3.911-4.829-3.911H-85Zm2.966-6.716v-3.358h1.35c1.407,0,2.167.382,2.167,1.565s-.76,1.793-2.167,1.793Zm13.727,6.945c3.289,0,4.943-1.87,4.943-6.067v-6.582H-66.2v6.907c0,2.366-.741,3.186-2.11,3.186-1.35,0-2.053-.82-2.053-3.186v-6.907h-2.947V-9.1C-73.309-4.9-71.6-3.033-68.309-3.033Zm7.738-.229h2.814V-7.441a43.716,43.716,0,0,0-.38-4.579h.076c.38.973.78,1.965,1.2,2.8L-53.8-3.262h3.042V-15.683h-2.795V-11.5a43.287,43.287,0,0,0,.38,4.579h-.076a29.54,29.54,0,0,0-1.217-2.8l-3.042-5.953h-3.061Zm18.233.229a6.029,6.029,0,0,0,4.126-1.507v-5.8h-4.6v2.423h1.977v2a2.049,2.049,0,0,1-1.179.324c-2.3,0-3.422-1.431-3.422-3.911,0-2.4,1.331-3.854,3.156-3.854a3.108,3.108,0,0,1,2.3.859l1.559-1.793a5.3,5.3,0,0,0-3.955-1.622c-3.308,0-6.084,2.385-6.084,6.525C-48.46-5.189-45.76-3.033-42.338-3.033Z" transform="translate(178.752 39.952)" class="fill-primary"></path></g><path d="M25.754-3.76a6.158,6.158,0,0,0,1.269,2.323,2.271,2.271,0,0,0,1.4.774V.3Q25.881.16,21.99.16,17.676.16,15.562.3V-.663a5.956,5.956,0,0,0,2.284-.46,1.328,1.328,0,0,0,.677-1.282,7.5,7.5,0,0,0-.507-2.323l-2.537-7.936H6.258l-1.1,3.339A18.216,18.216,0,0,0,3.974-3.954a2.905,2.905,0,0,0,.952,2.492,5.178,5.178,0,0,0,2.812.8V.3Q4.862.16,2.494.16A29.186,29.186,0,0,0-.72.3V-.663Q1.352-1.1,2.917-5.744l9.642-28.308q.465.048,1.48.048t1.438-.048ZM15.181-13.631,10.994-26.7,6.6-13.631ZM44.869-25.39q3.214,0,4.652,1.887a5.613,5.613,0,0,1,1.015,2.371,20.5,20.5,0,0,1,.3,3.92V-4.2a4.472,4.472,0,0,0,.613,2.734,2.565,2.565,0,0,0,2.093.75V.3Q49.31.111,47.956.111q-1.269,0-5.5.194V-.711a1.988,1.988,0,0,0,1.776-.75A5.22,5.22,0,0,0,44.742-4.2V-19.245a6.263,6.263,0,0,0-.571-3,2.147,2.147,0,0,0-2.051-1.016,3.62,3.62,0,0,0-2.96,1.621,6.425,6.425,0,0,0-1.226,3.992V-4.2a5.22,5.22,0,0,0,.507,2.734,1.988,1.988,0,0,0,1.776.75V.3Q36.326.111,34.973.111,33.7.111,29.137.3V-.711a2.556,2.556,0,0,0,2.115-.75A4.6,4.6,0,0,0,31.844-4.2V-19.438a6.712,6.712,0,0,0-.592-3.242A2.239,2.239,0,0,0,29.137-23.7v-1.016a24.59,24.59,0,0,0,2.622.145,23.356,23.356,0,0,0,6.174-.677v4.355A6.923,6.923,0,0,1,44.869-25.39Zm18.819.677h4.99v.968h-4.99V-4.2a3.583,3.583,0,0,0,.444,2.057,1.64,1.64,0,0,0,1.417.6q1.819,0,2.876-2.9L69.144-4Q67.537.982,63.35.982A5.315,5.315,0,0,1,59.121-.663,5.473,5.473,0,0,1,57.916-3.2,21.574,21.574,0,0,1,57.6-7.389V-23.745H54.046v-.968H57.6V-31.1a11.609,11.609,0,0,0,6.09-1.548ZM75.487-37.2A3.9,3.9,0,0,1,78.3-36.2a3.606,3.606,0,0,1,1.036,2.734A3.606,3.606,0,0,1,78.3-30.737a3.9,3.9,0,0,1-2.812.992,3.9,3.9,0,0,1-2.812-.992,3.606,3.606,0,0,1-1.036-2.734A3.606,3.606,0,0,1,72.675-36.2,3.9,3.9,0,0,1,75.487-37.2Zm3.3,33A4.472,4.472,0,0,0,79.4-1.462a2.565,2.565,0,0,0,2.093.75V.3Q77.264.111,75.868.111,74.557.111,69.99.3V-.711a2.556,2.556,0,0,0,2.115-.75A4.6,4.6,0,0,0,72.7-4.2V-19.438A6.712,6.712,0,0,0,72.1-22.68,2.239,2.239,0,0,0,69.99-23.7v-1.016a24.589,24.589,0,0,0,2.622.145,23.356,23.356,0,0,0,6.174-.677Zm26.009.968a18.061,18.061,0,0,0,1.1,1.718,2.338,2.338,0,0,0,1.1.8V.3q-3.383-.194-4.441-.194-1.4,0-5.455.194V-.711a1.574,1.574,0,0,0,.93-.242.785.785,0,0,0,.338-.677,2.051,2.051,0,0,0-.211-.726l-4.187-8.662a2.772,2.772,0,0,0-.888-1.113,2.97,2.97,0,0,0-1.184-.387V-4.2a4.883,4.883,0,0,0,.55,2.734,2.315,2.315,0,0,0,1.988.75V.3Q90.2.111,88.936.111,87.5.111,83.1.3V-.711a2.565,2.565,0,0,0,2.093-.75A4.472,4.472,0,0,0,85.806-4.2V-31.777a6.514,6.514,0,0,0-.613-3.242A2.247,2.247,0,0,0,83.1-36.036v-1.016a24.589,24.589,0,0,0,2.622.145,23.95,23.95,0,0,0,6.174-.677v24.146a4.633,4.633,0,0,0,1.459-.387,3.051,3.051,0,0,0,1.078-.871l3.214-3.581a4.679,4.679,0,0,0,1.4-2.952,2.079,2.079,0,0,0-.888-1.766,4.412,4.412,0,0,0-2.368-.75v-.968q2.326.145,4.948.145,3.51,0,4.948-.145v.968a11.377,11.377,0,0,0-5.286,3.726L97.69-16.825Zm21.441-20.42q-.507,1.355-2.072,4.645-1.692,3.484-2.749,6.1a40.642,40.642,0,0,0-1.84,5.952,30.448,30.448,0,0,0-.782,6.968l.085,1.645Q119,2.918,119,3.934a3.93,3.93,0,0,1-.8,2.516,2.742,2.742,0,0,1-2.284,1.016,2.6,2.6,0,0,1-2.3-1.161,5.459,5.459,0,0,1-.782-3.1,17.745,17.745,0,0,1,1.142-6.121A35.116,35.116,0,0,1,116.7-8.72q1.586-2.686,4.123-6.508.508-.823,1.1-1.694t1.226-1.887H111.9a5.682,5.682,0,0,0-1.713.194,1.265,1.265,0,0,0-.782.629,4.792,4.792,0,0,0-.338,1.355h-.888q0-5.807-.169-8.275a42.361,42.361,0,0,0,6.3.242h11.926Zm13.914-1.742a11.234,11.234,0,0,1,5.963,1.6,10.825,10.825,0,0,1,4.081,4.5,14.677,14.677,0,0,1,1.459,6.678,15.768,15.768,0,0,1-1.5,6.968,11.768,11.768,0,0,1-4.229,4.863A11.222,11.222,0,0,1,139.684.982a11.155,11.155,0,0,1-5.921-1.6,10.967,10.967,0,0,1-4.1-4.5,14.613,14.613,0,0,1-1.48-6.726,15.655,15.655,0,0,1,1.5-6.92,11.822,11.822,0,0,1,4.208-4.863A11.194,11.194,0,0,1,140.149-25.39Zm-.381.871a3.414,3.414,0,0,0-2.707,1.5,11,11,0,0,0-1.84,4.331,30.022,30.022,0,0,0-.656,6.7q0,6.145,1.544,9.121T140.065.111a3.345,3.345,0,0,0,2.685-1.524,11.673,11.673,0,0,0,1.84-4.355,29.117,29.117,0,0,0,.677-6.7q0-6.145-1.544-9.1T139.769-24.519Z" transform="translate(167.648 40.786)" class="fill-primary"></path></g></svg></a>`;
});
const ShopButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { solid = false } = $$props;
  if ($$props.solid === void 0 && $$bindings.solid && solid !== void 0)
    $$bindings.solid(solid);
  return `<a${add_attribute("href", SITE.SHOP_LINK, 0)} type="button" class="${[
    "text-xs md:text-base inline-flex items-center gap-x-1 md:gap-x-2 rounded-text border-2 px-2 py-1 xl:px-3 xl:py-1 font-bold text-[16px] focus-visible:outline hover:bg-primary hover:text-white transition-colors hover:border-transparent duration-200 ease-in-out whitespace-nowrap",
    (solid ? "bg-primary" : "") + " " + (!solid ? "bg-transparent" : "") + " " + (solid ? "text-white" : "") + " " + (!solid ? "text-primary" : "")
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clip-rule="evenodd"></path></svg></a>`;
});
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { links = SITE.DE.NAVI_LINKS } = $$props;
  let mobileNavVisable = false;
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<ul class="hidden lg:flex flex-1 ml-4 xl:ml-10 items-center justify-center sm:items-center sm:justify-start space-x-2 xl:space-x-4 2xl:space-x-8 text-base xl:text-lg">${each(links, ({ label, href }) => {
      return `<li><a class="font-semibold rounded-text px-3 py-1.5 xl:px-4 xl:py-2 hover:bg-primary hover:text-white transition-colors duration-200 ease-in-out whitespace-nowrap"${add_attribute("href", href, 0)}>${escape(label)}</a> </li>`;
    })} <li class="xl:w-full xl:text-right">${validate_component(ShopButton, "ShopButton").$$render($$result, {}, {}, {
      default: () => {
        return `Online Shop`;
      }
    })}</li></ul> ${validate_component(MobileMenuButton, "MobileMenuButton").$$render(
      $$result,
      {
        open: mobileNavVisable,
        class: "absolute z-50 top-0 right-4 flex items-center lg:hidden"
      },
      {},
      {}
    )} ${validate_component(MobileNav, "MobileNav").$$render(
      $$result,
      { mobileNavVisable },
      {
        mobileNavVisable: ($$value) => {
          mobileNavVisable = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each(links, ({ label, href }) => {
            return `<li><a class="font-semibold rounded-text px-3 py-1.5 xl:px-4 xl:py-2 hover:bg-primary hover:text-white transition-colors duration-200 ease-in-out whitespace-nowrap"${add_attribute("href", href, 0)}>${escape(label)}</a> </li>`;
          })}`;
        }
      }
    )} <div class="absolute w-full left-0 -top-14 text-center lg:hidden"><div class="px-8">${validate_component(ShopButton, "ShopButton").$$render($$result, {}, {}, {
      default: () => {
        return `Online Shop`;
      }
    })}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});
const Tailwind_debug = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` ${``}`;
});
const css = {
  code: `html{--tw-bg-opacity:1;background-color:rgb(247 236 228 / var(--tw-bg-opacity));background-image:url("data:image/svg+xml,%3Csvg width='80' height='88' viewBox='0 0 80 88' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22 21.91V26h-2c-9.94 0-18 8.06-18 18 0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73 3.212-6.99 9.983-12.008 18-12.73V62h2c9.94 0 18-8.06 18-18 0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73-3.212 6.99-9.983 12.008-18 12.73zM54 58v4.696c-5.574 1.316-10.455 4.428-14 8.69-3.545-4.262-8.426-7.374-14-8.69V58h-5.993C12.27 58 6 51.734 6 44c0-7.732 6.275-14 14.007-14H26v-4.696c5.574-1.316 10.455-4.428 14-8.69 3.545 4.262 8.426 7.374 14 8.69V30h5.993C67.73 30 74 36.266 74 44c0 7.732-6.275 14-14.007 14H54zM42 88c0-9.94 8.06-18 18-18h2v-4.09c8.016-.722 14.787-5.738 18-12.73v7.434c-3.545 4.262-8.426 7.374-14 8.69V74h-5.993C52.275 74 46 80.268 46 88h-4zm-4 0c0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73v7.434c3.545 4.262 8.426 7.374 14 8.69V74h5.993C27.73 74 34 80.266 34 88h4zm4-88c0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73v-7.434c-3.545-4.262-8.426-7.374-14-8.69V14h-5.993C52.27 14 46 7.734 46 0h-4zM0 34.82c3.213-6.992 9.984-12.008 18-12.73V18h2c9.94 0 18-8.06 18-18h-4c0 7.732-6.275 14-14.007 14H14v4.696c-5.574 1.316-10.455 4.428-14 8.69v7.433z' fill='%23edd9ca' fill-opacity='0.25' fill-rule='evenodd'/%3E%3C/svg%3E");@media screen and (max-width: 768px) {
			background-size: 50px;
		}}body{--tw-text-opacity:1;color:rgb(55 41 34 / var(--tw-text-opacity))}`,
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Tailwind_debug, "TailwindDebug").$$render($$result, {}, {}, {})} <header class="px-6 lg:container relative flex mt-16 mb-8">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})} ${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})}</header> ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
