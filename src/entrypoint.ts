// dependencies
import collapse from '@alpinejs/collapse';
////
// types
import type { Alpine } from 'alpinejs'
////

export default (Alpine: Alpine) => {

Alpine.plugin(collapse);

const theme = {
    init() {
        this.isDark = (() => {
          if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
            return localStorage.getItem('theme') === 'dark';
          }
          if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return true;
          }
          return false;
        })();
      },
    
      isDark: false,
    
      toggle() {
        this.isDark = !this.isDark;
        localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
      },
}

Alpine.store('theme', theme);

}