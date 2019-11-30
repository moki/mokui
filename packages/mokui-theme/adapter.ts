import { Component, Emitter, Listener } from "@moki.codes/mokui-base";

export type ThemeAdapter<T extends Emitter<Listener<Component>>> = T & {
        toggleLight: HTMLElement;
        toggleDark: HTMLElement;
        hasClass(this: ThemeAdapter<T>, name: string): boolean;
        addClass(this: ThemeAdapter<T>, name: string): void;
        removeClass(this: ThemeAdapter<T>, name: string): void;
        toggleLightAddClass(this: ThemeAdapter<T>, name: string): void;
        toggleLightRemoveClass(this: ThemeAdapter<T>, name: string): void;
        toggleDarkAddClass(this: ThemeAdapter<T>, name: string): void;
        toggleDarkRemoveClass(this: ThemeAdapter<T>, name: string): void;
};

export const ThemeAdapter = <T extends Emitter<Listener<Component>>>(
        o: T
): ThemeAdapter<T> => {
        const self = {
                ...o,
                toggleLight: null as HTMLElement,
                toggleDark: null as HTMLElement,
                hasClass(this: ThemeAdapter<T>, name: string): boolean {
                        return this.getRoot().classList.contains(name);
                },
                addClass(this: ThemeAdapter<T>, name: string): void {
                        this.getRoot().classList.add(name);
                },
                removeClass(this: ThemeAdapter<T>, name: string): void {
                        this.getRoot().classList.remove(name);
                },
                toggleLightAddClass(this: ThemeAdapter<T>, name: string): void {
                        this.toggleLight.classList.add(name);
                },
                toggleLightRemoveClass(
                        this: ThemeAdapter<T>,
                        name: string
                ): void {
                        this.toggleLight.classList.remove(name);
                },
                toggleDarkAddClass(this: ThemeAdapter<T>, name: string): void {
                        this.toggleDark.classList.add(name);
                },
                toggleDarkRemoveClass(
                        this: ThemeAdapter<T>,
                        name: string
                ): void {
                        this.toggleDark.classList.remove(name);
                }
        };

        return self;
};
