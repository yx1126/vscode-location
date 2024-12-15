// @ts-check
import { defineEslint } from "@reallyx/front-config";

export default defineEslint({
    stylistic: {
        semi: true,
    },
    flatESLintConfig: [{
        ignores: ["out"],
    }],
});