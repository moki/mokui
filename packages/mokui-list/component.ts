import { Emitter, Listener, Component } from "@moki.codes/mokui-base";
import { ListAdapter } from "./adapter";
import { strings, classes } from "./constants";

/* TODO: typed compose, not this madness */
const compose2 = <A, B, C>(
        f: (arg: A) => B,
        g: (arg: B) => C
): ((arg: A) => C) => x => g(f(x));

const initList = Symbol("initList");
const liClickHandler = Symbol("liClickHandler");
const lastActiveLi = Symbol("lastActiveLi");
const idIdxMap = Symbol("idIdxMap");
const isIndexValid = Symbol("isIndexValid");

type StrNumMap = {
        [key: string]: number;
};

export type ListComponent<
        T extends ListAdapter<Emitter<Listener<Component>>>
> = T & {
        [idIdxMap]: StrNumMap;
        [lastActiveLi]: number;
        [liClickHandler]: EventListener;
        [isIndexValid](this: ListComponent<T>, index: number): boolean;

        elements: HTMLLIElement[];
        setLiState(this: ListComponent<T>, index: number, state: boolean): void;
        destroy(this: ListComponent<T>): void;
};

let listCounter = 0;

function processListElement<
        T extends ListAdapter<Emitter<Listener<Component>>>
>(this: ListComponent<T>, e: HTMLLIElement, i: number): HTMLLIElement {
        e.id = e.id || strings.LIST_ITEM_ID_PREFIX + (listCounter++ + 1);
        if (e.classList.contains(classes.LIST_ITEM_ACTIVE))
                this[lastActiveLi] = i;
        this[idIdxMap][e.id] = i;
        return e;
}

function handleLiClick<T extends ListAdapter<Emitter<Listener<Component>>>>(
        this: ListComponent<T>,
        e: CustomEvent
): void {
        if (!(e.target instanceof HTMLLIElement)) return;
        const { id } = e.target;
        if (id == null) return;
        const index = this[idIdxMap][id];
        if (index == null) return;
        this.emit(strings.LIST_ITEM_CLICKED_EVENT, { index }, true);
        if (
                !this[isIndexValid](index) ||
                this[lastActiveLi] === index ||
                this.liHasClass(index, classes.LIST_ITEM_DISABLED)
        )
                return;
        if (this[lastActiveLi] != null)
                this.liRemoveClass(
                        this[lastActiveLi],
                        classes.LIST_ITEM_ACTIVE
                );
        this.liAddClass(index, classes.LIST_ITEM_ACTIVE);
        this[lastActiveLi] = index;
}

export function ListComponent<
        T extends ListAdapter<Emitter<Listener<Component>>>
>(o: T): ListComponent<T> {
        const self = {
                ...o,
                elements: [] as HTMLLIElement[],
                [idIdxMap]: {} as StrNumMap,
                [lastActiveLi]: null as number,
                [liClickHandler]: null as EventListener,
                [isIndexValid](this: ListComponent<T>, index: number): boolean {
                        return index >= 0 && index < this.elements.length;
                },
                setLiState(
                        this: ListComponent<T>,
                        index: number,
                        state: boolean
                ): void {
                        if (state) {
                                this.liRemoveClass(
                                        index,
                                        classes.LIST_ITEM_DISABLED
                                );
                                return;
                        }
                        this.liRemoveClass(index, classes.LIST_ITEM_ACTIVE);
                        this.liAddClass(index, classes.LIST_ITEM_DISABLED);
                },
                [initList](this: ListComponent<T>): void {
                        const list = this.getRoot();
                        if (!list)
                                throw new Error(
                                        this.noRootErr("ListComponent")
                                );
                        this.elements = [].slice
                                .call(
                                        list.querySelectorAll(
                                                strings.LIST_ITEM_SELECTOR
                                        )
                                )
                                .map(processListElement.bind(this));

                        this[liClickHandler] = handleLiClick.bind(this);

                        this.listen("click", this[liClickHandler]);
                },
                destroy(this: ListComponent<T>): void {
                        this.unlisten("click", this[liClickHandler]);
                }
        };

        self[initList]();

        return self;
}

export const List = compose2(
        compose2(compose2(Component, Listener), compose2(Emitter, ListAdapter)),
        ListComponent
);
