import { Emitter, Listener, Component } from "@moki.codes/mokui-base";
import { DrawerAdapter } from "./adapter";
import { strings, classes } from "./constants";

const init = Symbol("init");
const openHandler = Symbol("openHandler");
const closeHandler = Symbol("closeHandler");
const scrim = Symbol("scrim");

export type DrawerComponent<
        T extends DrawerAdapter<Emitter<Listener<Component>>>
> = T & {
        [scrim]: Element;
        [openHandler]: EventListener;
        [closeHandler]: EventListener;
        open(this: DrawerComponent<T>): void;
        close(this: DrawerComponent<T>): void;
        destroy(this: DrawerComponent<T>): void;
};

function open<T extends DrawerAdapter<Emitter<Listener<Component>>>>(
        this: DrawerComponent<T>
): void {
        this.removeClassFrom(this.getRoot(), classes.DRAWER_ANIMATION_CLOSE);
        this.addClassTo(this.getRoot(), classes.DRAWER_ANIMATION_OPEN);

        this.addClassTo(this.getRoot(), classes.DRAWER_OPEN);
        this.removeClassFrom(this.getRoot(), classes.RESTING);
        this.addClassTo(this.getRoot(), classes.ELEVATED);

        this.removeClassFrom(this[scrim], classes.SCRIM_ANIMATION_CLOSE);
        this.addClassTo(this[scrim], classes.SCRIM_ANIMATION_OPEN);

        this.addClassTo(this[scrim], classes.SCRIM_OPEN);
}

function close<T extends DrawerAdapter<Emitter<Listener<Component>>>>(
        this: DrawerComponent<T>
): void {
        this.removeClassFrom(this.getRoot(), classes.DRAWER_ANIMATION_OPEN);
        this.addClassTo(this.getRoot(), classes.DRAWER_ANIMATION_CLOSE);

        this.removeClassFrom(this.getRoot(), classes.DRAWER_OPEN);
        this.removeClassFrom(this.getRoot(), classes.ELEVATED);
        this.addClassTo(this.getRoot(), classes.RESTING);

        this.removeClassFrom(this[scrim], classes.SCRIM_ANIMATION_OPEN);
        this.addClassTo(this[scrim], classes.SCRIM_ANIMATION_CLOSE);

        this.removeClassFrom(this[scrim], classes.SCRIM_OPEN);
}

export function DrawerComponent<
        T extends DrawerAdapter<Emitter<Listener<Component>>>
>(o: T): DrawerComponent<T> {
        const noScrimErr =
                "DrawerComponent: didn't find: " + strings.SCRIM_SELECTOR;
        const self = {
                ...o,
                [scrim]: null as Element,
                [openHandler]: null as EventListener,
                [closeHandler]: null as EventListener,
                open,
                close,
                [init](this: DrawerComponent<T>): void {
                        const drawer = this.getRoot();
                        if (!drawer)
                                throw new Error(
                                        this.noRootErr("DrawerComponent")
                                );
                        this[scrim] = document.querySelector(
                                strings.SCRIM_SELECTOR
                        );
                        if (!this[scrim]) throw new Error(noScrimErr);

                        this[openHandler] = open.bind(this);
                        this[closeHandler] = close.bind(this);

                        this.listenOn(
                                this.target,
                                strings.OPEN_EVENT,
                                this[openHandler]
                        );
                        this.listenOn(this[scrim], "click", this[closeHandler]);
                },
                destroy(this: DrawerComponent<T>): void {
                        this.unlistenOn(
                                this.target,
                                strings.OPEN_EVENT,
                                this[openHandler]
                        );
                        this.unlistenOn(
                                this[scrim],
                                "click",
                                this[closeHandler]
                        );
                }
        };

        self[init]();

        return self;
}

export type Drawer = (
        e: Element
) => DrawerComponent<DrawerAdapter<Emitter<Listener<Component<{}>>>>>;

export const Drawer = (
        e: Element
): DrawerComponent<DrawerAdapter<Emitter<Listener<Component<{}>>>>> =>
        DrawerComponent(DrawerAdapter(Emitter(Listener(Component(e)))));
