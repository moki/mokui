import { Component, Emitter, Listener } from "@moki.codes/mokui-base";
import { strings } from "./constants";

export type TabAdapter<T extends Emitter<Listener<Component>>> = T & {
        hasClass(this: T, name: string): boolean;
        addClass(this: T, name: string): void;
        removeClass(this: T, name: string): void;
        getAttr(this: T, name: string): string;
        handleClick(this: T, id: string): void;
        id: string;
};

export const TabAdapter = <T extends Emitter<Listener<Component>>>(
        o: T
): TabAdapter<T> => {
        const self = {
                ...o,
                id: "",
                hasClass(this: TabAdapter<T>, name: string): boolean {
                        return this.root().classList.contains(name);
                },
                addClass(this: TabAdapter<T>, name: string): void {
                        this.root().classList.add(name);
                },
                removeClass(this: TabAdapter<T>, name: string): void {
                        this.root().classList.remove(name);
                },
                getAttr(this: TabAdapter<T>, name: string): string {
                        return this.root().getAttribute(name);
                },
                handleClick(this: TabAdapter<T>): void {
                        this.emit(
                                strings.TAB_CLICKED_EVENT,
                                { id: this.id },
                                true
                        );
                }
        };

        return self;
};

export type TabsAdapter<T extends Emitter<Listener<Component>>> = T & {};

export const TabsAdapter = <T extends Emitter<Listener<Component>>>(
        o: T
): TabsAdapter<T> => {
        const self = {
                ...o
        };

        return self;
};
