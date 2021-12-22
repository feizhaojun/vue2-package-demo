import Vue, { PluginObject } from 'vue'

/** The version of element-ui */
export const version: string

/**
 * Install all element-ui components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(SmartTree)` to install.
 */
export function install (vue: typeof Vue, options: any): void

/** SmartTree component common definition */
export class Xdfd extends Vue {
    /** Install component into Vue */
    static install(vue: typeof Vue): void
}