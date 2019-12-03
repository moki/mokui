import { Component, Emitter, Listener } from "@moki.codes/mokui-base";

export type DrawerAdapter<T extends Emitter<Listener<Component>>> = T & {
        target: EventTarget;
        unlistenOn(
                this: DrawerAdapter<T>,
                target: EventTarget,
                event: string,
                handler: EventListener
        ): void;
        listenOn(
                this: DrawerAdapter<T>,
                target: EventTarget,
                event: string,
                handler: EventListener
        ): void;
        addClassTo(this: DrawerAdapter<T>, target: Element, name: string): void;
        removeClassFrom(
                this: DrawerAdapter<T>,
                target: Element,
                name: string
        ): void;
};

export const DrawerAdapter = <T extends Emitter<Listener<Component>>>(
        o: T
): DrawerAdapter<T> => {
        const self = {
                ...o,
                target: document.body || document || window,
                listenOn(
                        this: DrawerAdapter<T>,
                        target: EventTarget,
                        event: string,
                        handler: EventListener
                ): void {
                        target.addEventListener(event, handler);
                },
                unlistenOn(
                        this: DrawerAdapter<T>,
                        target: EventTarget,
                        event: string,
                        handler: EventListener
                ): void {
                        target.removeEventListener(event, handler);
                },
                addClassTo(
                        this: DrawerAdapter<T>,
                        target: Element,
                        name: string
                ): void {
                        target.classList.add(name);
                },
                removeClassFrom(
                        this: DrawerAdapter<T>,
                        target: Element,
                        name: string
                ): void {
                        target.classList.remove(name);
                }
        };

        return self;
};
