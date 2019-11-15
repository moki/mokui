import { Component, Emitter } from "@moki.codes/mokui-base";
import { HeaderAdapter } from "./adapter";
import { classes, strings } from "./constants";

const compose2 = <A, B, C>(
        f: (arg: A) => B,
        g: (arg: B) => C
): ((arg: A) => C) => x => g(f(x));

const paction = Symbol("paction");
const pactionClickHandler = Symbol("pactionClickHandler");
const scrollTarget = Symbol("scrollTarget");
const handleScrollTargetScroll = Symbol("handleScrollTargetScroll");
const scrollTargetScrollHandler = Symbol("scrollTargetScrollHandler");
const lastScrollPos = Symbol("lastScrollPos");
const userScrolled = Symbol("userScrolled");
const animatingHeader = Symbol("animatingHeader");
const hidingAnimation = Symbol("hidingAnimation");
const init = Symbol("init");

export type HeaderComponent<T extends HeaderAdapter<Emitter<Component>>> = T & {
        [paction]: Element;
        [pactionClickHandler](): EventListener;
        [lastScrollPos]: number;
        [userScrolled]: number;
        [animatingHeader]: boolean;
        [hidingAnimation](): void;
        [scrollTarget]: EventTarget;
        [scrollTargetScrollHandler](): EventListener;
        [handleScrollTargetScroll](): void;
        [init](): HeaderComponent<T>;
        setScrollTarget(target: EventTarget): void;
        destroy(): HeaderComponent<T>;
};

export const HeaderComponent = <T extends HeaderAdapter<Emitter<Component>>>(
        o: T
): HeaderComponent<T> => {
        const nopactionerr =
                "HeaderComponent: " +
                strings.ACTION_PRIMARY_SELECTOR +
                " not found";
        const noscrolltargeterr = "HeaderComponent: provide scroll target";
        const norooterr = "HeaderComponent: provide root element";

        const self = {
                ...o,
                setScrollTarget(target: EventTarget): void {
                        if (!target) throw new Error(noscrolltargeterr);
                        this[scrollTarget].removeEventListener(
                                "scroll",
                                this[scrollTargetScrollHandler]
                        );

                        this[scrollTarget] = target;

                        this[scrollTargetScrollHandler] = this[
                                handleScrollTargetScroll
                        ].bind(this);
                        this[scrollTarget].addEventListener(
                                "scroll",
                                this[scrollTargetScrollHandler]
                        );
                },
                [hidingAnimation](): void {
                        this[animatingHeader] = false;
                        const headerHidden = (this as T).hasClass(
                                classes.HEADER_HIDDEN
                        );

                        if (this[userScrolled] > this.getHeaderHeight()) {
                                this[userScrolled] = 0;
                                if (!headerHidden) {
                                        (this as T).addClass(
                                                classes.HEADER_HIDDEN
                                        );
                                }
                        } else if (
                                !this[lastScrollPos] ||
                                (this[userScrolled] < 0 &&
                                        Math.abs(this[userScrolled]) >
                                                this.getHeaderHeight())
                        ) {
                                this[userScrolled] = 0;
                                if (headerHidden) {
                                        (this as T).removeClass(
                                                classes.HEADER_HIDDEN
                                        );
                                }
                        }
                },
                [handleScrollTargetScroll](): void {
                        const scrollPos = Math.max(
                                this.getViewportScrollY(scrollTarget),
                                0
                        );
                        const scrollDiff = scrollPos - this[lastScrollPos];
                        this[userScrolled] = this[userScrolled] + scrollDiff;
                        this[lastScrollPos] = scrollPos;

                        if (!this[animatingHeader]) {
                                requestAnimationFrame(
                                        this[hidingAnimation].bind(this)
                                );
                        }
                        this[animatingHeader] = true;
                },
                [init](): HeaderComponent<T> {
                        if (!this.root()) throw new Error(norooterr);
                        this[paction] = (this as T)
                                .root()
                                .querySelector(strings.ACTION_PRIMARY_SELECTOR);

                        if (!this[paction]) throw new Error(nopactionerr);
                        this[
                                pactionClickHandler
                        ] = (this as T).handleActionPrimaryClick.bind(this);
                        this[paction].addEventListener(
                                "click",
                                this[pactionClickHandler]
                        );

                        this[animatingHeader] = false;
                        this[scrollTarget] = window;
                        this[userScrolled] = this[
                                lastScrollPos
                        ] = this.getViewportScrollY(scrollTarget);

                        this[scrollTargetScrollHandler] = this[
                                handleScrollTargetScroll
                        ].bind(this);
                        this[scrollTarget].addEventListener(
                                "scroll",
                                this[scrollTargetScrollHandler]
                        );

                        return this;
                },
                destroy(): HeaderComponent<T> {
                        (this[paction] as Element).removeEventListener(
                                "click",
                                this[pactionClickHandler]
                        );

                        (this[scrollTarget] as EventTarget).removeEventListener(
                                "click",
                                this[scrollTargetScrollHandler]
                        );

                        return this;
                }
        }[init]();

        return self;
};

export const Header = compose2(
        compose2(compose2(Component, Emitter), HeaderAdapter),
        HeaderComponent
);
