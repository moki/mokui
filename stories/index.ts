/* header */
import "../packages/mokui-theme";
import "../packages/mokui-layout";
import "../packages/mokui-elevation";
import "../packages/mokui-animation";
import "../packages/mokui-header";

/* tabs */
import "../packages/mokui-tabs";
window.addEventListener("load", () => {
        const tabs = document.querySelectorAll(".tab");
        const tabsl = tabs.length;
        let taba;
        for (let i = 0; i < tabsl; ++i) {
                tabs[i].addEventListener("click", e => {
                        e.preventDefault();
                        if (!(e.target instanceof Element)) return;
                        if (e.target.classList.contains("tab_active")) return;
                        e.target.classList.toggle("tab_active");
                        taba = i;
                        for (let j = 0; j < tabsl; j++) {
                                if (j == taba) continue;
                                tabs[j].classList.remove("tab_active");
                        }
                });
        }
});
/* app */
import "./styles.css";

// console.log("hello");
//console.log(component(), shmoponent());
