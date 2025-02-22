import type { Stores } from 'alpinejs'

export interface ThemeStore {
    isDark: boolean,
    toggle: () => void,
}