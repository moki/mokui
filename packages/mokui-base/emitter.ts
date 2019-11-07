import { Component } from "./component";

export type Emitter<T extends Component> = T & {
        emit<U extends object>(
                type: string,
                detail: U,
                bubbles?: boolean
        ): void;
};

export const Emitter = <T extends Component>(component: T): Emitter<T> => ({
        ...component,
        emit<U extends object>(type: string, detail: U, bubbles = false): void {
                let e: CustomEvent<U>;
                if (typeof CustomEvent === "function") {
                        e = new CustomEvent<U>(type, { bubbles, detail });
                } else {
                        e = document.createEvent("CustomEvent");
                        e.initCustomEvent(type, bubbles, false, detail);
                }
                (this as T).root().dispatchEvent(e);
        }
});
