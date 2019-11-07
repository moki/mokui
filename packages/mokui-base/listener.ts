import { Component } from "./component";

export type Listener<T extends Component> = T & {
        listen(
                type: string,
                handler: EventListener,
                options?: AddEventListenerOptions | boolean
        ): void;
        unlisten(
                type: string,
                handler: EventListener,
                options?: AddEventListenerOptions | boolean
        ): void;
};

export const Listener = <T extends Component>(component: T): Listener<T> => ({
        ...component,
        listen(
                type: string,
                handler: EventListener,
                options: AddEventListenerOptions | boolean = false
        ): void {
                (this as T).root().addEventListener(type, handler, options);
        },
        unlisten(
                type: string,
                handler: EventListener,
                options: AddEventListenerOptions | boolean = false
        ): void {
                (this as T).root().removeEventListener(type, handler, options);
        }
});
