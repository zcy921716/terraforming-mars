
import Vue from "vue";

import { translateTextNode } from "./src/directives/i18n";
import { trimEmptyTextNodes } from "./src/directives/TrimWhitespace";
import { mainAppSettings } from "./src/components/App";
import { ALL_PRELUDE_CORPORATIONS,
    ALL_CORPORATION_CARDS,
    ALL_CORP_ERA_CORPORATION_CARDS,
    ALL_PROJECT_CARDS,
    ALL_CORP_ERA_PROJECT_CARDS,
    ALL_PRELUDE_CARDS,
    ALL_PRELUDE_PROJECTS_CARDS,
    ALL_PROMO_CORPORATIONS,
    ALL_VENUS_CORPORATIONS,
    ALL_VENUS_PROJECTS_CARDS,
    ALL_COLONIES_PROJECTS_CARDS,
    ALL_TURMOIL_PROJECTS_CARDS,
    ALL_PROMO_PROJECTS_CARDS
    } from "./src/Dealer";
import { HTML_DATA } from "./src/HTML_data";


Vue.directive("trim-whitespace", {
    inserted: trimEmptyTextNodes,
    componentUpdated: trimEmptyTextNodes
});


Vue.directive("i18n", {
    inserted: translateTextNode,
    componentUpdated: translateTextNode
});


// preload translations
fetch("/assets/translations.json?v=0709")
    .then(response => response.json())
    .then(jsonData => {
        (window as any).TM_translations = jsonData;
        new Vue(mainAppSettings);
    });
