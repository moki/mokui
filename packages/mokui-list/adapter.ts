import { Component, Emitter, Listener } from "@moki.codes/mokui-base";
import { strings } from "./constants";

export type ListAdapter<T extends Emitter<Listener<Component>>> = T & {
        elements: HTMLElement[];
        liHasClass(this: ListAdapter<T>, index: number, name: string): boolean;
        liAddClass(this: ListAdapter<T>, index: number, name: string): void;
        liRemoveClass(this: ListAdapter<T>, index: number, name: string): void;
};

export const ListAdapter = <T extends Emitter<Listener<Component>>>(
        o: T
): ListAdapter<T> => {
        const self = {
                ...o,
                elements: null as HTMLLIElement[],
                liHasClass(
                        this: ListAdapter<T>,
                        index: number,
                        name: string
                ): boolean {
                        return this.elements[index].classList.contains(name);
                },
                liRemoveClass(
                        this: ListAdapter<T>,
                        index: number,
                        name: string
                ): void {
                        this.elements[index].classList.remove(name);
                },
                liAddClass(
                        this: ListAdapter<T>,
                        index: number,
                        name: string
                ): void {
                        this.elements[index].classList.add(name);
                }
        };

        return self;
};
