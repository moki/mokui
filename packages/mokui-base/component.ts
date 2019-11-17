const root = Symbol("root");

export type Component<T extends object = {}> = T & {
        attach(element: Element): Component<T>;
        root(): Element;
};

export const Component = <T extends object = {}>(
        element?: Element,
        o: T = {} as T
): Component<T> => ({
        ...o,
        [root]: element,
        attach(element: Element): T & Component<T> {
                this[root] = element;
                return this;
        },
        root(): Element {
                return this[root];
        }
});
