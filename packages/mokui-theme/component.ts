import { Emitter, Listener, Component } from "@moki.codes/mokui-base";
import { ThemeAdapter } from "./adapter";
import { strings, classes } from "./constants";

const initTheme = Symbol("initTheme");
const colorToggleHandler = Symbol("colorToggleHandler");
const color = Symbol("color");

export type ThemeComponent<
        T extends ThemeAdapter<Emitter<Listener<Component>>>
> = T & {
        [initTheme](this: ThemeComponent<T>): void;
        [color]: string;
        toggleLight: HTMLElement;
        toggleDark: HTMLElement;
        [colorToggleHandler]: EventListener;
        destroy(this: ThemeComponent<T>): void;
};

function handleColorToggle<
        T extends ThemeAdapter<Emitter<Listener<Component>>>
>(this: ThemeComponent<T>): void {
        const hide = classes.THEME_COLOR_TOGGLE_HIDE;
        const tlight = classes.THEME_COLOR_LIGHT;
        const tdark = classes.THEME_COLOR_DARK;
        const light = strings.THEME_COLOR_LIGHT;
        const dark = strings.THEME_COLOR_DARK;

        this[color] = this[color] === light ? dark : light;
        if (this[color] === light) {
                this.toggleDarkRemoveClass(hide);
                this.toggleLightAddClass(hide);
        } else {
                this.toggleLightRemoveClass(hide);
                this.toggleDarkAddClass(hide);
        }
        this.removeClass(this[color] === dark ? tlight : tdark);
        this.addClass(this[color] === dark ? tdark : tlight);
}

export function ThemeComponent<
        T extends ThemeAdapter<Emitter<Listener<Component>>>
>(o: T): ThemeComponent<T> {
        const nothemecolorerr =
                "ThemeComponent: failed to determine theme color";
        const self = {
                ...o,
                [color]: null as string,
                toggleLight: null as HTMLElement,
                toggleDark: null as HTMLElement,
                [colorToggleHandler]: null as EventListener,
                [initTheme](this: ThemeComponent<T>): void {
                        const theme = this.getRoot();
                        if (!theme)
                                throw new Error(
                                        this.noRootErr("ThemeComponent")
                                );
                        const _color = this.hasClass(classes.THEME_COLOR_LIGHT)
                                ? strings.THEME_COLOR_LIGHT
                                : this.hasClass(classes.THEME_COLOR_DARK)
                                ? strings.THEME_COLOR_DARK
                                : null;
                        if (color == null) throw new Error(nothemecolorerr);
                        this[color] = _color;

                        this.toggleLight = theme.querySelector(
                                strings.THEME_COLOR_TOGGLE_LIGHT_SELECTOR
                        );
                        this.toggleDark = theme.querySelector(
                                strings.THEME_COLOR_TOGGLE_DARK_SELECTOR
                        );

                        this[colorToggleHandler] = handleColorToggle.bind(this);
                        this.listen(
                                strings.THEME_TOGGLE_EVENT,
                                this[colorToggleHandler]
                        );
                },
                destroy(this: ThemeComponent<T>): void {
                        this.unlisten(
                                strings.THEME_TOGGLE_EVENT,
                                this[colorToggleHandler]
                        );
                }
        };

        self[initTheme]();

        return self;
}

export type Theme = (
        e: Element
) => ThemeComponent<ThemeAdapter<Emitter<Listener<Component<{}>>>>>;

export const Theme = (
        e: Element
): ThemeComponent<ThemeAdapter<Emitter<Listener<Component<{}>>>>> =>
        ThemeComponent(ThemeAdapter(Emitter(Listener(Component(e)))));
