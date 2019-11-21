const root = Symbol("root");

export type Component<T extends object = {}> = {
        attach(this: Component<T>, element: Element): Component<T>;
        getRoot(this: Component<T>): Element;
        noRootErr(this: Component<T>, source: string): string;
};

export function BaseComponent<T extends object = {}>(o: T = {} as T) {
        return function(element?: Element): Component<T> {
                const self = {
                        ...o,
                        [root]: element,
                        attach(
                                this: Component<T>,
                                element: Element
                        ): Component<T> {
                                this[root] = element;
                                return this;
                        },
                        getRoot(this: Component<T>): Element {
                                return this[root];
                        },
                        noRootErr(this: Component<T>, source: string): string {
                                return source + ": no root element found";
                        }
                };

                return self;
        };
}

export const Component = BaseComponent({});
