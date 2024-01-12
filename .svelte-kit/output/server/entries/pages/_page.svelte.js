import { c as create_ssr_component, b as escape, d as add_attribute, v as validate_component, e as each } from "../../chunks/ssr.js";
import { S as SITE, O as OpenHoures } from "../../chunks/OpenHoures.js";
const H2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 class="${"text-3xl md:text-4xl lg:text-5xl lg:leading-tight font-bold mb-8 lg:mb-10 text-primary font-serif bg-gradient-to-l from-primary to-redish bg-clip-text text-transparent " + escape($$props.class, true)}">${slots.default ? slots.default({}) : ``}</h2>`;
});
const css$4 = {
  code: ".circle.svelte-o3vkyc{--size:820px;display:block;position:absolute;background-color:white;width:var(--size);height:var(--size);top:20px;left:calc((-1 * var(--size)) / 1.5);opacity:0.4;border-radius:50%}@media(min-width: 1280px){.circle.svelte-o3vkyc{left:calc((-1 * var(--size)) / 1.6)}}",
  map: null
};
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = "" } = $$props;
  let { container = true } = $$props;
  let { circle = false } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.container === void 0 && $$bindings.container && container !== void 0)
    $$bindings.container(container);
  if ($$props.circle === void 0 && $$bindings.circle && circle !== void 0)
    $$bindings.circle(circle);
  $$result.css.add(css$4);
  return `<section${add_attribute("id", id, 0)} class="relative py-16 xl:py-24 bg-beige bg-gradient-to-b from-[#733d2422] to-20% to-transparent"><div class="${[
    "z-10 relative",
    (container ? "container" : "") + " " + (container ? "mx-auto" : "")
  ].join(" ").trim()}">${slots.default ? slots.default({}) : `CONTENT`}</div> ${circle ? `<div class="circle z-0 svelte-o3vkyc"></div>` : ``} </section>`;
});
const P = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p class="${"text-lg font-sans " + escape($$props.class, true)}">${slots.default ? slots.default({}) : ``}</p>`;
});
const css$3 = {
  code: ".alternate.svelte-1n44oia.svelte-1n44oia{background-color:#deaa82}.alternate.svelte-1n44oia div.svelte-1n44oia{border-color:rgb(55 41 34)}.feature.svelte-1n44oia.svelte-1n44oia{display:grid;gap:16px;grid-template-columns:1fr}@media(min-width: 1024px){.feature.svelte-1n44oia.svelte-1n44oia{max-width:860px;gap:0 12px;grid-template-columns:30px 1fr}}",
  map: null
};
const Feature = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { alternate = false } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.alternate === void 0 && $$bindings.alternate && alternate !== void 0)
    $$bindings.alternate(alternate);
  $$result.css.add(css$3);
  return `<div class="feature mb-6 lg:mb-10 svelte-1n44oia"><div class="${[
    "buttlet hidden lg:flex w-4 h-4 lg:w-6 lg:h-6 bg-primary rounded-full mt-2 svelte-1n44oia",
    alternate ? "alternate" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-mmszs0"><div class="w-3 h-3 lg:w-4 lg:h-4 border-2 lg:border-[3px] border-[#DEAA82] rounded-full mx-auto my-auto svelte-1n44oia"></div></div> <div><h4 class="flex items-center lg:block gap-2 text-2xl lg:text-3xl font-serif font-bold mb-2 lg:mb-3"> <div class="flex lg:hidden buttlet w-4 h-4 bg-primary rounded-full" data-svelte-h="svelte-hsynbx"><div class="w-3 h-3 border-2 border-[#DEAA82] rounded-full mx-auto my-auto"></div></div>  ${escape(title)}</h4> ${validate_component(P, "P").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</div> </div>`;
});
const pic1 = "/_app/immutable/assets/1.sBSaK_CC.jpg";
const pic3 = "/_app/immutable/assets/3.OGxihsHr.jpg";
const pic4 = "/_app/immutable/assets/4.rizR10pu.jpg";
const pic6 = "/_app/immutable/assets/5.JnZKdIYq.jpg";
const LinkButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = SITE.SHOP_LINK } = $$props;
  let { shop_icon = false } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.shop_icon === void 0 && $$bindings.shop_icon && shop_icon !== void 0)
    $$bindings.shop_icon(shop_icon);
  return `<a${add_attribute("href", href, 0)}${add_attribute("title", $$props.slot, 0)} target="_blank" rel="noopener noreferrer" class="text-lg mt-4 shadow-lg text-white px-4 pl-3 py-1.5 flex flex-row items-center max-w-max btn rounded-xl bg-gradient-to-tr from-primary from-60% to-[#664e43] hover:from-10%">${shop_icon ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current mr-2 h-5"><path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clip-rule="evenodd"></path></svg>` : ``} ${slots.default ? slots.default({}) : ` ${escape(SITE.DE.HERO_CTA)} `}</a>`;
});
const A = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  let { title = "Antik70 Online Shop" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<a${add_attribute("href", href, 0)} class="relative text-current font-medium inline-flex items-center font-semibold text-redish hover:opacity-80 hover:font-bold" target="_blank" rel="noopener noreferrer"${add_attribute("title", title, 0)}>${slots.default ? slots.default({}) : ``} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4 stroke-redish"><path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"></path></svg> <div class="absolute h-[1px] bottom-1 rounded-xl bg-redish w-full"></div></a>`;
});
const H3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h3 class="${"text-xl lg:text-xl lg:leading-right font-sans " + escape($$props.class, true)}">${slots.default ? slots.default({}) : ``}</h3>`;
});
const css$2 = {
  code: ".picture_grid.svelte-1idzvib{grid-template-columns:minmax(160px, 230px) minmax(160px, 230px);grid-template-areas:'pic1 pic2'\n			'pic3 pic4'\n			'shop_btn shop_btn'}.pic1.svelte-1idzvib{grid-area:pic1}.pic2.svelte-1idzvib{grid-area:pic2}.pic3.svelte-1idzvib{grid-area:pic3}.pic4.svelte-1idzvib{grid-area:pic4}.shop_btn.svelte-1idzvib{gap:0;margin:-32px auto 0 auto;grid-area:shop_btn}",
  map: null
};
const Lamps = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = "" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css$2);
  return `${validate_component(Section, "Section").$$render($$result, { id, circle: true }, {}, {
    default: () => {
      return `${validate_component(H2, "H2").$$render($$result, {}, {}, {
        default: () => {
          return `Beleuchtung der besonderen Art Vielfalt und Einzigartigkeit unsere Lampenwelt`;
        }
      })} ${validate_component(H3, "H3").$$render($$result, { class: "mb-12" }, {}, {
        default: () => {
          return `Entdecken Sie bei uns ein umfangreiches Sortiment an alten und neuen Lampen, das keine Wünsche offen lässt. Von der zeitlosen Eleganz unserer ${validate_component(A, "A").$$render($$result, { href: SITE.SHOP_TIFFANY }, {}, {
            default: () => {
              return `Tiffany-Lampen`;
            }
          })} bis hin zu unseren höhenverstellbaren Zug- und Pendelleuchten, Plafonieren, Wandlampen und edlen Tisch- und Stehleuchten aus Messing. Jede unserer Lampen ist nicht nur eine reine
		Leuchtquelle sondern ein hochwertiges und prägendes Einrichtungsstück.`;
        }
      })} <div class="xl:grid xl:grid-cols-2"><div id="keyFacts">${validate_component(Feature, "Feature").$$render($$result, { title: "Alte Lampen & Lampengestelle" }, {}, {
        default: () => {
          return `Wir führen ausgewählte alte Lampengläser, die teilweise mehr als 100 Jahre alt sind. Die Schirme sind gebraucht aber nicht defekt. Minimale Abplatzer am Glashalter sind
				nach jahrelangen Gebrauch als normal anzusehen. Weitere Einzelstücke können Sie in unseren Ausstellungsräumen betrachten
				${validate_component(LinkButton, "LinkButton").$$render(
            $$result,
            {
              shop_icon: true,
              href: "https://antik70.de/shop/de/lampenglaeser/antike-lampenschirme"
            },
            {},
            {
              default: () => {
                return `Antike Lampenschirme`;
              }
            }
          )}`;
        }
      })} ${validate_component(Feature, "Feature").$$render(
        $$result,
        {
          title: "Glasschirm Ersatzglas Lampenglas"
        },
        {},
        {
          default: () => {
            return `Klassische Formen in opal, diverse Farben, spezielle Oberflächen und verschiedene Größen der einzelnen Modelle ergeben eine ungeahnte Vielfalt zur Bestückung Ihrer
				Lampengestelle.
				${validate_component(LinkButton, "LinkButton").$$render(
              $$result,
              {
                shop_icon: true,
                href: "https://antik70.de/shop/lampenglaeser/glasschirme-farbig-lampenglas"
              },
              {},
              {
                default: () => {
                  return `Farbig Lampengläser`;
                }
              }
            )}`;
          }
        }
      )} ${validate_component(Feature, "Feature").$$render($$result, { title: "Tiffany Lampen" }, {}, {
        default: () => {
          return `Für Viele die Königsdisziplin der Lichtkunst. Tiffanylampen für Tisch, Decke, Wand und Boden; jeweils in höchster Perfektion gearbeitete Schirme, die den originalen
				Vorbildern zur Ehre gereichen. Wir bieten einige ausgewählte Lampen mit Tiffanyschirmen an
				${validate_component(LinkButton, "LinkButton").$$render(
            $$result,
            {
              shop_icon: true,
              href: "https://antik70.de/shop/de/beleuchtung/tiffany-leuchten"
            },
            {},
            {
              default: () => {
                return `Lampenmodelle in unserer Ausstellung`;
              }
            }
          )}`;
        }
      })}</div> <div id="keyfacts_pictures" class="hidden lg:grid picture_grid gap-8 md:ml-28 svelte-1idzvib"><img${add_attribute("src", pic1, 0)} alt="antik70.de" class="pic1 rounded-[8px] border-[3px] border-primary-DARK svelte-1idzvib"> <img${add_attribute("src", pic6, 0)} alt="antik70.de" class="pic3 rounded-[8px] border-[3px] border-primary-DARK svelte-1idzvib"> <img${add_attribute("src", pic3, 0)} alt="antik70.de" class="pic4 rounded-[8px] border-[3px] border-primary-DARK svelte-1idzvib"> <img${add_attribute("src", pic4, 0)} alt="antik70.de" class="pic2 rounded-[8px] border-[3px] border-primary-DARK svelte-1idzvib"> <div class="shop_btn svelte-1idzvib">${validate_component(LinkButton, "LinkButton").$$render(
        $$result,
        {
          shop_icon: true,
          href: "https://antik70.de/shop/de/lampenglaeser"
        },
        {},
        {
          default: () => {
            return `Unsere Lampen im Shop`;
          }
        }
      )}</div></div></div>`;
    }
  })}`;
});
const H1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="${"text-3xl md:text-4xl lg:text-5xl xl:leading-tight leading-[1.25em] font-bold mb-6 text-primary bg-gradient-to-tr from-primary to-redish-LIGHT bg-clip-text text-transparent font-serif " + escape($$props.class, true)}">${slots.default ? slots.default({}) : ``}</h1>`;
});
const Slideshow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let slide;
  let { pictures = [] } = $$props;
  let { speed = 3e3 } = $$props;
  let index = 0;
  let slides = Object.values(pictures);
  if ($$props.pictures === void 0 && $$bindings.pictures && pictures !== void 0)
    $$bindings.pictures(pictures);
  if ($$props.speed === void 0 && $$bindings.speed && speed !== void 0)
    $$bindings.speed(speed);
  slide = slides[index];
  return `${slides ? `  <div class="${[
    "flex flex-col lg:ml-auto slideshow w-full xl:max-w-[480px]",
    ""
  ].join(" ").trim()}"><img class="max-h-[470px] border-[6px] object-cover md:rounded-lg border-primary-DARK"${add_attribute("src", slide, 0)}${add_attribute("alt", index.toString(), 0)}> <div class="flex flex-row space-x-2 mt-4 mx-auto duration-200 xl:max-w-[480px]">${each(slides, (item, i) => {
    return `<button class="flex buttlet w-4 h-4 bg-primary rounded-full">${i === index ? `<div class="w-3 h-3 border-2 border-[#DEAA82] rounded-full mx-auto my-auto"></div>` : ``} </button>`;
  })}</div></div>` : ``}`;
});
const Store = "/_app/immutable/assets/store.Y3Q-X8Cc.png";
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  const pictures = [pic4, Store, pic6];
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<section${add_attribute("id", id, 0)} class="lg:container lg:mx-auto xl:pt-12 mb-8 md:mb-20 lg:mb-32"><div class="grid items-center gap-6 sm:gap-12 lg:gap-6 xl:gap-4 2xl:gap-0 md:grid-cols-hero lg:grid-cols-2"> <div class="mx-6 lg:mx-0 order-2 md:order-1">${validate_component(H1, "H1").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(SITE.DE.HERO_HEADLINE)}`;
    }
  })} ${validate_component(H3, "H3").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(SITE.DE.HERO_SUBLINE)}`;
    }
  })} ${validate_component(LinkButton, "LinkButton").$$render($$result, { shop_icon: true }, {}, {})}</div>  <div class="order-1 md:order-1">${validate_component(Slideshow, "Slideshow").$$render($$result, { speed: 12e3, pictures }, {}, {})}</div></div></section>`;
});
const pic2 = "/_app/immutable/assets/2.MFZkzOl3.jpg";
const MegaBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const pictures = [pic1, pic2, pic3, pic4, Store, pic6];
  let { id = "" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<div${add_attribute("id", id, 0)} class="text-white flex justify-center relative bg-primary-DARK max-h-[896px] overflow-hidden"><div class="flex flex-col flex-wrap items-center justify-center h-full max-w-4xl z-20 py-32">${validate_component(H2, "H2").$$render($$result, { class: "text-center text-white" }, {}, {
    default: () => {
      return `${escape(SITE.DE.MEGA_HEADLINE)}`;
    }
  })} ${validate_component(P, "P").$$render($$result, { class: "text-center" }, {}, {
    default: () => {
      return `Wir sind Experten für Reparaturen und Restaurationen. Sie können sich darauf verlassen, dass wir Ihre Möbel in ihren ursprünglichen Glanz versetzen oder sie in etwas Neues
			<br>und Aufregendes verwandeln können.
			<span class="font-bold mt-2 block" data-svelte-h="svelte-1aavpwx">Zögern Sie nicht, uns zu kontaktieren!</span>`;
    }
  })} ${validate_component(LinkButton, "LinkButton").$$render(
    $$result,
    {
      alternate: true,
      shop_icon: true,
      href: "https://antik70.de/shop/de/antike-moebel"
    },
    {},
    {
      default: () => {
        return `${escape(SITE.DE.MEGA_CTA)}`;
      }
    }
  )}</div> <div class="overlay absolute bg-primary-VERYDARK bg-opacity-90 w-full h-full inset-0 z-10"></div> <div class="grid grid-cols-3 grid-rows-2 absolute z-0 w-full h-full">${each(pictures, (pic) => {
    return `<img class="h-full w-full object-cover"${add_attribute("src", pic, 0)} alt="antik70">`;
  })}</div></div>`;
});
const FeatureBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { cta = "" } = $$props;
  let { href = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.cta === void 0 && $$bindings.cta && cta !== void 0)
    $$bindings.cta(cta);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `<div class="rounded-xl bg-redish text-beige drop-shadow-md transition-all duration-500 hover:drop-shadow-xl shadow-primary-DARK p-6"><h4 class="font-bold text-xl tracking-wide font-serif">${escape(title)}</h4> <p class="mb-6">${escape(description)}</p> <a${add_attribute("href", href, 0)} class="border-2 border-beige rounded-full py-1.5 px-3 text-base" target="_blank" rel="noopener noreferrer">${escape(cta)}</a></div>`;
});
const css$1 = {
  code: ".about_grid.svelte-wnl5v5{display:grid;grid-template-columns:1.5fr 0.6fr;grid-template-rows:auto;gap:2rem}.anfahrt-grid.svelte-wnl5v5{font-size:14px;display:grid;grid-template-columns:150px 1fr auto;gap:2rem;align-items:first flex-start}",
  map: null
};
const AboutUs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = "" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css$1);
  return `${validate_component(Section, "Section").$$render($$result, { container: true, id, circle: true }, {}, {
    default: () => {
      return `<div class="grid about_grid max-w-[1660px] mx-auto svelte-wnl5v5"><div class="col-1 pr-24">${validate_component(H2, "H2").$$render($$result, {}, {}, {
        default: () => {
          return `Antik70 - Seit 1991 im Antik und Beleuchtungsbereich`;
        }
      })} ${validate_component(P, "P").$$render($$result, {}, {}, {
        default: () => {
          return `Antik70 ist ein kleines Team mit vielen individuellen Stärken, die wir seit mehr als 30 Jahren bündeln. Seit 1991 sind wir in gleicher Besetzung im Antik und
				Beleuchtungsbereich tätig und immer in Berlin-Kreuzberg. <br><br>Neben einer qualifizierten und ausführlichen Beratung in unseren Geschäftsräumen mir mehr als 150 qm
				Ausstellungsfläche bieten wir „Probewohnen“ Lieferung und Aufbau in Berlin und nahem Umland, Ankauf, Abholungen, Anfertigungen und Montagen von Lampen sowie viele weitere
				Leistungen an. Reden Sie mit uns.`;
        }
      })} <div class="mt-8 mb-4"><iframe class="w-full rounded-md drop-shadow-md h-80" title="Antik70" src="https://www.openstreetmap.org/export/embed.html?bbox=13.400115072727205%2C52.489708834295506%2C13.4024915099144%2C52.49123259056697&layer=mapnik&marker=52.490470719030405%2C13.4013032913208"></iframe> <div itemscope itemtype="http://schema.org/LocalBusiness" class="grid anfahrt-grid justify-around mx-auto p-4 svelte-wnl5v5"><address class="text-md not-italic" itemprop="address" itemscope itemtype="http://schema.org/PostalAddress" data-svelte-h="svelte-3a89ky"><h4 class="text-lg font-bold">Adresse</h4> <p>Antik 70</p> <p itemprop="streetAddress">Gneisenaustr. 70</p> <p itemprop="postalCode">10961 <span itemprop="addressLocality">Berlin</span></p></address> <div data-svelte-h="svelte-1ge09vc"><h4 class="text-lg font-bold">Anfahrt</h4> <ul class="text-sm"><li><strong>U-Bahn</strong> (U7) Südstern oder Gneisenaustr</li> <li><strong>Bus</strong> (140) hält an Gneisenaustr./Baerwaldstr</li> <li><strong>PKW</strong> Parkzone 61 (Kostenpflichtig)</li></ul></div> ${validate_component(LinkButton, "LinkButton").$$render(
        $$result,
        {
          href: "https://www.google.com/maps?q=Gneisenaustr.+70,+10961+Berlin",
          target: "_blank"
        },
        {},
        {
          default: () => {
            return `Google Maps`;
          }
        }
      )}</div></div> ${validate_component(Feature, "Feature").$$render($$result, { title: "Unsere Nachhaltigkeit" }, {}, {
        default: () => {
          return `${validate_component(P, "P").$$render($$result, {}, {}, {
            default: () => {
              return `Reparieren und Restaurieren ist schon nachhaltiger als nur neue Sachen kaufen; dazu nutzen wir soweit als möglich alte und vorhandene Teile wie Beschläge, Schlösser,
					Altholz usw. Unsere Weichholzmöbel werden nicht abgelaugt oder abgebeizt sondern händisch oder maschinell geschliffen. Grundierung und Finish vieler Möbel ist Schelllack;
					Weichholz-Oberflächen werden mit einem speziellem Antikwachs schonend aufpoliert`;
            }
          })}`;
        }
      })} ${validate_component(Feature, "Feature").$$render($$result, { title: "Versand" }, {}, {
        default: () => {
          return `${validate_component(P, "P").$$render($$result, {}, {}, {
            default: () => {
              return `Für den Versand nutzen wir hauptsächlich gebrauchte Kartonagen, in den allermeisten Fällen Papierklebeband, als Füllmaterial recyceltes Packpapier, bei stark
					bruchgefährdeten Artikeln kommt Luftpolsterfolie zum Einsatz, Lieferscheintaschen aus Papier und wenn nötig gebrauchte Paletten. Beim Palettenversand wird aus
					versicherungstechnischen Gründen Stretchfolie verwandt. Als Versender kommen soweit als möglich Co2 neutrale Anbieter zum Einsatz. Ansonsten werden alle vernünftigen,
					machbaren und bezahlbaren Verbesserungen in unsere Abläufe integriert.`;
            }
          })}`;
        }
      })}</div> <div class="col-2 grid columns-1 items-start gap-y-6 h-min"><img${add_attribute("src", Store, 0)} alt="Gneisenaustraße 70 - 10961 Berlin Kreuzberg" class="rounded-xl border-[3px] border-primary-DARK"> <div id="open" class="self-start justify-self-start text-left grid grid-cols-3 gap-3 justify-evenly">${validate_component(OpenHoures, "OpenHoures").$$render($$result, {}, {}, {})}</div> ${validate_component(FeatureBox, "FeatureBox").$$render(
        $$result,
        {
          title: "Porzellan",
          description: "Diverse Einzelteile und komplette Service von Hutschenreuther und Rosenthal.",
          cta: "Tisch und Wohndekoration",
          href: "https://antik70.de/shop/de/wohndekoration/porzellan"
        },
        {},
        {}
      )} ${validate_component(FeatureBox, "FeatureBox").$$render(
        $$result,
        {
          title: "Raritäten ",
          description: "Sammlerstücke, die nicht jeder hat, außergewöhnliche Gegenstände zum Nutzen oder Dekorieren.",
          cta: "Antike Möbel & Pflege",
          href: "https://antik70.de/shop/raritaeten"
        },
        {},
        {}
      )} ${validate_component(FeatureBox, "FeatureBox").$$render(
        $$result,
        {
          title: "Uhren ",
          description: "Unsere kleine aber feine Auswahl an alten Wand - Tisch oder Standuhren.",
          cta: "Ersatzgläser",
          href: "https://antik70.de/shop/de/wohndekoration/uhren"
        },
        {},
        {}
      )}</div></div>`;
    }
  })}`;
});
const css = {
  code: ".cols2.svelte-1l0jvce{grid-template-columns:1fr 1fr}",
  map: null
};
const Repairs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = "" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css);
  return `${validate_component(Section, "Section").$$render($$result, { id, circle: true }, {}, {
    default: () => {
      return `${validate_component(H2, "H2").$$render($$result, {}, {}, {
        default: () => {
          return `Restaurationen`;
        }
      })} <div class="grid cols2 gap-12 mb-12 items-center svelte-1l0jvce"><div>${validate_component(H3, "H3").$$render($$result, {}, {}, {
        default: () => {
          return `Alle alten und antiken Lampen werden von uns aufgearbeitet und neu elektrifiziert, um sämtliche erforderlichen Sicherheitsstandards zu erfüllen. Bei stoffummantelten Kabeln
				verwenden wir eine Spezialanfertigung mit einem verstärkten Innenleben, was die unbedenkliche Nutzung unserer Zugleuchten gewährleistet. Für die Elektrik werden
				ausschließlich neue, VDE-geprüfte Teile verbaut oder ersetzt.`;
        }
      })} </div> <img class="rounded-md h-[200px] ml-auto border-4" src="https://antik70.de/shop/media/images/org/antike_moebel.jpg" alt="Restaurationen"></div> <div class="grid cols2 lg:gap-20 svelte-1l0jvce">${validate_component(Feature, "Feature").$$render(
        $$result,
        {
          title: "Bearbeitung unserer Weichholzmöbel"
        },
        {},
        {
          default: () => {
            return `Wir schleifen unsere Möbel innen und außen, grundieren dann mit Schellack und schleifen dann die Sichtflächen nochmals fein. Die Oberfläche wird abschließend gewachst. Als
			Finish polieren wir die gewachsten Oberflächen, damit eine leicht samtig glänzende Oberfläche entsteht. Selbstverständlich wird vorhandener Holzwurm behandelt, Beschläge
			werden repariert oder erneuert, die Leichtgängigkeit der Schubladen und Schlösser wird sichergestellt, und gegebenenfalls nehmen wir Innenausbauten vor.`;
          }
        }
      )} ${validate_component(Feature, "Feature").$$render($$result, { title: "Bearbeitung furnierter Möbel" }, {}, {
        default: () => {
          return `Entfernen des alten Schellacks durch Abwaschen, Schleifen der Oberflächen, Auffrischen der Furniere und abschließende Schellackpolitur für einen glänzenden Finish.
			Selbstverständlich kümmern wir uns auch um eventuell vorhandene Holzwurmbefälle, reparieren oder erneuern Beschläge, gewährleisten die Leichtgängigkeit von Schubladen und
			Schlössern und nehmen gegebenenfalls Innenausbauten vor.`;
        }
      })}</div> <div class="flex flex-col justify-center items-center text-white py-12 px-4 bg-gradient-to-b from-primary to-primary-DARK" data-svelte-h="svelte-1qpquqy"><h2 class="text-3xl lg:leading-tight mb-4 font-serif">Fragen? Lassen Sie sich unverbindlich beraten</h2> <p class="text-xl lg:leading-tight">Einfach dit Telefon zücken oder &#39;ne Mail abdrücken, wir stehen bereit für&#39;n entspannten Schnack. Keen Hokuspokus, versprochen</p> <div class="flex gap-8 mt-8"><div class="text-xl mb-4 border-2 flex flex-row gap-4 items-center max-w-max py-0.5 px-2 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"></path></svg> <a href="tel:+493081797945">030 / 81 79 79 45</a></div> <div class="text-xl mb-4 border-2 flex flex-row gap-4 items-center max-w-max py-0.5 px-2 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"></path></svg> <a href="mailto:info@antik70.de">info (at) antik70.de</a></div></div></div>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-m7v6d_START -->${$$result.title = `<title>Antik70 - Zeitlose Eleganz</title>`, ""}<meta name="description" content="Jedes Möbelstück erzählt eine Geschichte vergangener Epochen, mit Liebe restauriert und bereit, Ihr Zuhause mit zeitloser Eleganz zu schmücken. Tauchen Sie ein in unsere Welt, in der Geschichte und Stil sich vereinen. "><!-- HEAD_svelte-m7v6d_END -->`, ""} ${validate_component(Hero, "Hero").$$render($$result, { id: "home" }, {}, {})} ${validate_component(Lamps, "LampenFeatures").$$render($$result, { id: "lampen" }, {}, {})} ${validate_component(MegaBlock, "Mega").$$render($$result, {}, {}, {})} ${validate_component(Repairs, "Repairs").$$render($$result, { id: "restaurationen" }, {}, {})} ${validate_component(AboutUs, "AboutUs").$$render($$result, { id: "antik70" }, {}, {})}`;
});
export {
  Page as default
};
