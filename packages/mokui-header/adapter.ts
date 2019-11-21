import { Component, Emitter } from "@moki.codes/mokui-base";
import { strings } from "./constants";

export type HeaderAdapter<T extends Emitter<Component>> = T & {
        handleActionPrimaryClick(this: HeaderAdapter<T>): void;
        getViewportScrollY(
                this: HeaderAdapter<T>,
                targetSelector: symbol
        ): number;
        getHeaderHeight(this: HeaderAdapter<T>): number;
        hasClass(this: HeaderAdapter<T>, name: string): boolean;
        addClass(this: HeaderAdapter<T>, name: string): void;
        removeClass(this: HeaderAdapter<T>, name: string): void;
};

export function HeaderAdapter<T extends Emitter<Component>>(
        o: T
): HeaderAdapter<T> {
        const self = {
                ...o,
                handleActionPrimaryClick(this: HeaderAdapter<T>): void {
                        this.emit(strings.ACTION_PRIMARY_EVENT, {}, true);
                },
                getViewportScrollY(
                        this: HeaderAdapter<T>,
                        targetSelector: symbol
                ): number {
                        const w = this[targetSelector] as Window;
                        const e = this[targetSelector] as Element;
                        return w.pageYOffset !== undefined
                                ? w.pageYOffset
                                : e.scrollTop;
                },
                getHeaderHeight(this: HeaderAdapter<T>): number {
                        return this.getRoot().clientHeight;
                },
                hasClass(this: HeaderAdapter<T>, name: string): boolean {
                        return this.getRoot().classList.contains(name);
                },
                addClass(this: HeaderAdapter<T>, name: string): void {
                        this.getRoot().classList.add(name);
                },
                removeClass(this: HeaderAdapter<T>, name: string): void {
                        this.getRoot().classList.remove(name);
                }
        };

        return self;
}
