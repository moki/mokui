import { Component, Emitter } from "@moki.codes/mokui-base";
import { strings } from "./constants";

export type HeaderAdapter<T extends Emitter<Component>> = T & {
        handleActionPrimaryClick(): void;
        getViewportScrollY(targetSelector: symbol): number;
        getHeaderHeight(): number;
        hasClass(name: string): boolean;
        addClass(name: string): void;
        removeClass(name: string): void;
};

export const HeaderAdapter = <T extends Emitter<Component>>(
        o: T
): HeaderAdapter<T> => {
        const self = {
                ...o,
                handleActionPrimaryClick(): void {
                        (this as T).emit(
                                strings.ACTION_PRIMARY_EVENT,
                                {},
                                true
                        );
                },
                getViewportScrollY(targetSelector: symbol): number {
                        const w = this[targetSelector] as Window;
                        const e = this[targetSelector] as Element;
                        return w.pageYOffset !== undefined
                                ? w.pageYOffset
                                : e.scrollTop;
                },
                getHeaderHeight(): number {
                        return (this.root() as Element).clientHeight;
                },
                hasClass(name: string): boolean {
                        return (this.root() as Element).classList.contains(
                                name
                        );
                },
                addClass(name: string): void {
                        (this.root() as Element).classList.add(name);
                },
                removeClass(name: string): void {
                        (this.root() as Element).classList.remove(name);
                }
        };

        return self;
};
