/* header */
import "../packages/mokui-theme";
import "../packages/mokui-layout";
import "../packages/mokui-elevation";
import "../packages/mokui-animation";
import "../packages/mokui-header";

/* component base */
import { Component, Emitter, Listener } from "../packages/mokui-base";

interface SomeobjShape {
        data: string;
        meth(): string;
}

const someobj: SomeobjShape = {
        data: "goes here",
        meth: (): string => "od"
};

const body = document.querySelector("body");

type FancyComponent<T extends object = {}> = T & {
        fancy(): string;
};

function FancyComponent<T extends object = {}>(o: T): FancyComponent<T> {
        return {
                ...o,
                fancy(): string {
                        return "fancy as fuck";
                }
        };
}

const component = FancyComponent(Emitter(Component(body, someobj)));

console.log(component.root());

console.log("fancy?", component.root().tagName, "feeling", component.fancy());

console.log(component);

console.log(component.data);

component.emit("hey", {});

const _component = Listener(Emitter(Component(body, {})));
console.log();

_component.listen(
        "test",
        () => {
                console.log("event");
        },
        false
);

/* tabs */
import "../packages/mokui-tabs";

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

for (let i = 0; i < 3; ++i) console.log(cs[i].root());

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

/* app */
import "./styles.css";

// console.log("hello");
//console.log(component(), shmoponent());
