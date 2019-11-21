import { Component } from "./component";

export type Emitter<T extends Component> = T & {
        emit<U extends object>(
                this: Emitter<T>,
                type: string,
                detail: U,
                bubbles?: boolean
        ): void;
};

export function Emitter<T extends Component>(o: T): Emitter<T> {
        const self = {
                ...o,
                emit<U extends object>(
                        this: Emitter<T>,
                        type: string,
                        detail: U,
                        bubbles = false
                ): void {
                        let e: CustomEvent<U>;
                        if (typeof CustomEvent === "function") {
                                e = new CustomEvent<U>(type, {
                                        bubbles,
                                        detail
                                });
                        } else {
                                e = document.createEvent("CustomEvent");
                                e.initCustomEvent(type, bubbles, false, detail);
                        }
                        this.getRoot().dispatchEvent(e);
                }
        };

        return self;
}
