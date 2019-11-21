import { Component } from "./component";

export type Listener<T extends Component> = T & {
        listen(
                this: Listener<T>,
                type: string,
                handler: EventListener,
                options?: AddEventListenerOptions | boolean
        ): void;
        unlisten(
                this: Listener<T>,
                type: string,
                handler: EventListener,
                options?: AddEventListenerOptions | boolean
        ): void;
};

export function Listener<T extends Component>(o: T): Listener<T> {
        const self = {
                ...o,
                listen(
                        this: Listener<T>,
                        type: string,
                        handler: EventListener,
                        options: AddEventListenerOptions | boolean = false
                ): void {
                        this.getRoot().addEventListener(type, handler, options);
                },
                unlisten(
                        this: Listener<T>,
                        type: string,
                        handler: EventListener,
                        options: AddEventListenerOptions | boolean = false
                ): void {
                        this.getRoot().removeEventListener(
                                type,
                                handler,
                                options
                        );
                }
        };

        return self;
}
