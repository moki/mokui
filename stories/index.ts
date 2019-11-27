/* header */
import "../packages/mokui-theme";
import "../packages/mokui-text";
import "../packages/mokui-layout";
import "../packages/mokui-elevation";
import "../packages/mokui-animation";
import "../packages/mokui-header";

/* component base */
// import { Component, Emitter, Listener } from "../packages/mokui-base";
import { Header } from "../packages/mokui-header";
import { Tabs } from "../packages/mokui-tabs";
import { List } from "../packages/mokui-list";

/* tabs */
import "../packages/mokui-tabs";

/* list */
import "../packages/mokui-list";

/*
const tabs = document.querySelectorAll(".tab");
const tabsl = tabs.length;
let activeTab;

const cs = Array<Listener<Component>>(3);

for (let i = 0; i < tabsl; ++i) {
        const tabc = Listener(Component(tabs[i], {}));
        cs[i] = tabc;
        tabc.listen("click", e => {
                e.preventDefault();
                const t = e.target;
                if (!(t instanceof Element)) return;
                if (t.classList.contains("tab_active")) return;
                t.classList.toggle("tab_active");
                activeTab = i;
                for (let j = 0; j < tabsl; ++j)
                        j === activeTab ||
                                tabs[j].classList.remove("tab_active");
        });
}
*/

/* how to compose */
/*
// adapter type
type __ComponentAdapter<T extends Component> = T & {
        classes(): { [key: string]: string };
        change(): void;
};

// adapter factory
const __ComponentAdapter = <T extends Component>(
        o: T
): __ComponentAdapter<T> => ({
        ...o,
        classes(): { [key: string]: string } {
                return { implementation: "default" };
        },
        change(): void {
                console.log("implementation: default");
        }
});

// component type
type __Component<T extends __ComponentAdapter<Component>> = T & {
        useClasses(): { [key: string]: string };
        useChange(): void;
};

// component factory
const __Component = <T extends __ComponentAdapter<Component>>(
        o: T
): __Component<T> => ({
        ...o,
        useClasses(): { [key: string]: string } {
                return this.classes();
        },
        useChange(): void {
                this.change();
        },
        contract(): string {
                return "implemented";
        }
});

// instance of the component with default adapter
const __component = __Component(__ComponentAdapter(Component(body, {})));

console.log(__component);
console.log(__component.useClasses());
__component.useChange();

// instance of the component with custom adapter
const ___component = __Component(
        (<T extends Component>(o: T): __ComponentAdapter<T> => ({
                ...o,
                classes(): { [key: string]: string } {
                        return { implementation: "custom" };
                },
                change(): void {
                        console.log("implementation: custom");
                }
        }))(Component(body, {}))
);

console.log(___component);
console.log(___component.useClasses());
___component.useChange();
*/
/* how to compose end */

const header = document.querySelector(".header");

const headerComponent = Header(header);

const container = document.querySelector("main .layout__container");

const wp = document.createElement("div");
wp.style.setProperty("padding-top", "var(--msp-1)");
const p = document.createElement("p");
p.innerHTML =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At augue eget arcu dictum varius duis at consectetur lorem. Elementum curabitur vitae nunc sed velit. Commodo elit at imperdiet dui. Facilisis gravida neque convallis a cras semper auctor. Elit duis tristique sollicitudin nibh sit amet commodo nulla. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Est ante in nibh mauris. Tortor at risus viverra adipiscing at in tellus integer. Amet cursus sit amet dictum. Molestie nunc non blandit massa enim nec dui nunc. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Fames ac turpis egestas integer eget aliquet. Aenean vel elit scelerisque mauris pellentesque. Nam at lectus urna duis convallis convallis tellus id interdum. Arcu risus quis varius quam quisque id. Fermentum leo vel orci porta non pulvinar. Elementum nibh tellus molestie nunc.";
p.classList.add("text", "text_size_m", "text_length_m");
const _p = document.createElement("p");
_p.innerHTML =
        "Lectus proin nibh nisl condimentum id venenatis a condimentum. Etiam sit amet nisl purus in. Nibh sed pulvinar proin gravida hendrerit. Bibendum est ultricies integer quis auctor. Diam in arcu cursus euismod quis. Luctus venenatis lectus magna fringilla urna. Tincidunt augue interdum velit euismod in pellentesque massa. Donec pretium vulputate sapien nec. Lobortis scelerisque fermentum dui faucibus in. Curabitur vitae nunc sed velit dignissim sodales. In nibh mauris cursus mattis molestie. Integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Cursus in hac habitasse platea dictumst.";
_p.classList.add("text", "text_size_m", "text_length_m");
let i = 10;
for (; i--; ) wp.appendChild((i % 2 === 0 ? _p : p).cloneNode(true));

container.appendChild(wp);

const tabsEl = document.querySelector(".tabs");

const tabsComponent = Tabs(tabsEl);

const listEl = document.querySelector(".list");

const listComponent = List(listEl);

// listComponent.setLiState(0, true);

/*
const lis = [].slice
        .call(document.querySelectorAll(".list__item"))
        .map((e, i) => {
                e.id = i + 1;
                console.log(e);
        });

const handler = e => {
        console.log(e.target.id);
        listComponent.setLiState(2, true);
};
listEl.addEventListener("click", handler);

*/
window.addEventListener("unload", () => {
        headerComponent.destroy();
        tabsComponent.destroy();
        listComponent.destroy();
});

/*
const handler = e => {
        console.log(e);
};

document.addEventListener("mokui-header:action-secondary-clicked", handler);
*/

/* app */
import "./styles.css";

// console.log("hello");
//console.log(component(), shmoponent());
