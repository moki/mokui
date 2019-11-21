import { Component, Emitter, Listener } from "@moki.codes/mokui-base";
import { TabAdapter, TabsAdapter } from "./adapter";
import { strings, classes } from "./constants";

/* TODO: typed compose, not this madness */
const compose2 = <A, B, C>(
        f: (arg: A) => B,
        g: (arg: B) => C
): ((arg: A) => C) => x => g(f(x));

const initTab = Symbol("initTab");
const clickHandler = Symbol("clickHandler");

export type TabComponent<
        T extends TabAdapter<Emitter<Listener<Component>>>
> = T & {
        activate(this: TabComponent<T>): void;
        deactivate(this: TabComponent<T>): void;
        isActive(this: TabComponent<T>): boolean;
        destroy(this: TabComponent<T>): void;
};

export function TabComponent<
        T extends TabAdapter<Emitter<Listener<Component>>>
>(o: T): TabComponent<T> {
        const noTabIdErr = "TabComponent: no id attribute found on tab element";
        const self = {
                ...o,
                [initTab](this: TabComponent<T>): void {
                        if (!this.getRoot())
                                throw new Error(this.noRootErr("TabComponent"));
                        this.id = this.getAttr("id");
                        if (!this.id) throw new Error(noTabIdErr);
                        this[clickHandler] = this.handleClick.bind(this);
                        this.listen("click", this[clickHandler]);
                },
                activate(this: TabComponent<T>): void {
                        this.addClass(classes.TAB_ACTIVE);
                },
                deactivate(this: TabComponent<T>): void {
                        if (!this.isActive()) return;
                        this.removeClass(classes.TAB_ACTIVE);
                },
                isActive(this: TabComponent<T>): boolean {
                        return this.hasClass(classes.TAB_ACTIVE);
                },
                destroy(this: TabComponent<T>): void {
                        if (!this.getRoot())
                                throw new Error(this.noRootErr("TabComponent"));
                        this.unlisten("click", this[clickHandler]);
                        return;
                }
        };

        self[initTab]();

        return self;
}

export type Tab = <V extends object = {}>(
        e: Element
) => TabComponent<TabAdapter<Emitter<Listener<Component<V>>>>>;

export const Tab = compose2(
        compose2(compose2(Component, Listener), compose2(Emitter, TabAdapter)),
        TabComponent
);

const initTabs = Symbol("initTabs");
const tabs = Symbol("tabs");
const tabClickedHandler = Symbol("tabClickedHandler");
const handleTabClicked = Symbol("handleTabClicked");
const lastActiveTabIndex = Symbol("lastActiveTabIndex");
const idIndexMap = Symbol("idIndexMap");

type StringNumberMap = {
        [key: string]: number;
};

export type TabsComponent<
        T extends TabsAdapter<Emitter<Listener<Component>>>
> = T & {
        [tabs]: ReturnType<Tab>[];
        [handleTabClicked](e: CustomEvent): void;
        [tabClickedHandler]: EventListener;
        [lastActiveTabIndex]: number;
        [idIndexMap]: StringNumberMap;
        destroy(this: T): void;
};

export function TabsComponent(Tab: Tab) {
        return function<T extends TabsAdapter<Emitter<Listener<Component>>>>(
                o: T
        ): TabsComponent<T> {
                const noTabElsErr =
                        "TabsComponent: no " +
                        strings.TAB_SELECTOR +
                        " were found";
                const self = {
                        ...o,
                        [tabs]: [] as ReturnType<Tab>[],
                        [tabClickedHandler]: null as EventListener,
                        [lastActiveTabIndex]: null as number,
                        [idIndexMap]: {} as StringNumberMap,
                        [handleTabClicked](e: CustomEvent): void {
                                const index = this[idIndexMap][e.detail.id];
                                if (index == null) return;
                                if (
                                        index < 0 ||
                                        index > this[tabs].length - 1 ||
                                        (this[lastActiveTabIndex] != null &&
                                                this[lastActiveTabIndex] ===
                                                        index)
                                )
                                        return;

                                if (this[lastActiveTabIndex] != null) {
                                        this[tabs][
                                                this[lastActiveTabIndex]
                                        ].deactivate();
                                }

                                this[tabs][index].activate();
                                this[lastActiveTabIndex] = index;
                        },
                        [initTabs](this: TabsComponent<T>): void {
                                const tabsEl = this.getRoot();
                                if (!tabsEl)
                                        throw new Error(
                                                this.noRootErr("TabsComponent")
                                        );

                                const tabEls = tabsEl.querySelectorAll(
                                        strings.TAB_SELECTOR
                                );
                                let tabElslen = tabEls.length;
                                if (!tabElslen) throw new Error(noTabElsErr);
                                let tab;
                                for (; tabElslen--; ) {
                                        tab = tabEls[tabElslen];
                                        tab.id =
                                                tab.id ||
                                                strings.TAB_ID_PREFIX +
                                                        (tabElslen + 1);
                                        this[tabs][tabElslen] = Tab(tab);
                                        if (
                                                this[tabs][tabElslen].hasClass(
                                                        classes.TAB_ACTIVE
                                                )
                                        ) {
                                                this[
                                                        lastActiveTabIndex
                                                ] = tabElslen;
                                        }
                                        this[idIndexMap][tab.id] = tabElslen;
                                }

                                this[tabClickedHandler] = this[
                                        handleTabClicked
                                ].bind(this);

                                this.listen(
                                        strings.TAB_CLICKED_EVENT,
                                        this[tabClickedHandler]
                                );
                        },
                        destroy(this: TabsComponent<T>): void {
                                if (!this.getRoot())
                                        throw new Error(
                                                this.noRootErr("TabsComponent")
                                        );
                                this.unlisten(
                                        strings.TAB_CLICKED_EVENT,
                                        this[tabClickedHandler]
                                );
                        }
                };

                self[initTabs]();

                return self;
        };
}

export type Tabs = <V extends object = {}>(
        e: Element
) => TabsComponent<TabsAdapter<Emitter<Listener<Component<V>>>>>;

export const Tabs = compose2(
        compose2(compose2(Component, Listener), compose2(Emitter, TabsAdapter)),
        TabsComponent(Tab)
);
