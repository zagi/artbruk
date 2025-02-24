import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import alpine from '@astrojs/alpinejs';


import jopSoftwarecookieconsent from '@jop-software/astro-cookieconsent';


// https://astro.build/config
export default defineConfig({
  integrations: [
    alpine({ entrypoint: '/src/entrypoint' }),
    tailwind(),
    compress(),
    jopSoftwarecookieconsent({
      // ...
      guiOptions: {
          consentModal: {
              layout: 'box',
              position: 'bottom left',
              equalWeightButtons: true,
              flipButtons: false,
          },
          preferencesModal: {
              layout: "box",
              position: "right",
              equalWeightButtons: true,
              flipButtons: false,
          },
      },            
      categories: { // Required, at least one category is required
          necessary: {
          enabled: true, // this category is enabled by default
          readOnly: true, // this category cannot be disabled
          },
          preferences: {
          enabled: true, // this category is enabled by default
          },
          statistics: {
          enabled: true,
          },
          marketing: {
          enabled: true,
          },
      },            
      language: { // Required, at least one language is required
          default: 'pl',
          translations: {
            pl: {
              consentModal: {
                title: 'Ta strona wykorzystuje pliki cookie',
                description: 'Wykorzystujemy pliki cookie, aby poprawić działanie strony oraz zapewnić Ci najlepsze doświadczenia. Zasady znajdziesz <a target="_blank" href="/policy">tutaj</a>.',
                acceptAllBtn: 'Akceptuj wszystkie',
                // Tylko niezbędne – akceptujesz tylko te pliki, które są konieczne do działania witryny
                acceptNecessaryBtn: 'Tylko niezbędne',
                showPreferencesBtn: 'Wybierz ustawienia',
              },
              preferencesModal: {
                title: 'Zarządzaj ustawieniami cookies',
                acceptAllBtn: 'Akceptuj wszystkie',
                acceptNecessaryBtn: 'Odrzuć wszystkie',
                savePreferencesBtn: 'Zapisz wybór',
                closeIconLabel: 'Zamknij ustawienia cookies',
                sections: [
                  {
                    title: 'Ta strona wykorzystuje pliki cookie',
                    description: 'Wykorzystujemy pliki cookie, aby poprawić działanie strony oraz dostosować funkcjonalność do Twoich potrzeb.',
                  },
                  {
                    title: 'Niezbędne',
                    description: 'Pliki cookie niezbędne do prawidłowego funkcjonowania witryny.',
                    linkedCategory: 'necessary',
                  },
                  {
                    title: 'Preferencje',
                    description: 'Pliki cookie pozwalające zapamiętać Twoje preferencje.',
                    linkedCategory: 'preferences',
                  },
                  {
                    title: 'Statystyki',
                    description: 'Pliki cookie służące do zbierania anonimowych danych statystycznych.',
                    linkedCategory: 'statistics',
                  },
                  {
                    title: 'Marketingowe',
                    description: 'Pliki cookie używane do celów marketingowych oraz personalizacji reklam.',
                    linkedCategory: 'marketing',
                  },
                  {
                    title: 'Więcej informacji',
                    description: 'Pliki cookie są używane, aby zapewnić Ci lepszą obsługę witryny. Więcej szczegółów znajdziesz w naszej polityce cookies (<a href="/policy">tutaj</a>).',
                  },
                ],
              },
            },
            en: {
              consentModal: {
                title: 'This website uses cookies',
                description: 'We use cookies to improve the website experience and provide you with the best service. You can find our policy <a target="_blank" href="/policy">here</a>.',
                acceptAllBtn: 'Accept all',
                acceptNecessaryBtn: 'Only necessary',
                showPreferencesBtn: 'Manage preferences',
              },
              preferencesModal: {
                title: 'Manage cookie settings',
                acceptAllBtn: 'Accept all',
                acceptNecessaryBtn: 'Reject all',
                savePreferencesBtn: 'Save selection',
                closeIconLabel: 'Close cookie settings',
                sections: [
                  {
                    title: 'This website uses cookies',
                    description: 'We use cookies to improve website performance and customize functionality to your needs.',
                  },
                  {
                    title: 'Necessary',
                    description: 'Cookies essential for the proper functioning of the website.',
                    linkedCategory: 'necessary',
                  },
                  {
                    title: 'Preferences',
                    description: 'Cookies that allow the website to remember your preferences.',
                    linkedCategory: 'preferences',
                  },
                  {
                    title: 'Statistics',
                    description: 'Cookies used for collecting anonymous statistical data.',
                    linkedCategory: 'statistics',
                  },
                  {
                    title: 'Marketing',
                    description: 'Cookies used for marketing purposes and ad personalization.',
                    linkedCategory: 'marketing',
                  },
                  {
                    title: 'More information',
                    description: 'Cookies are used to enhance your browsing experience. You can find more details in our cookie policy (<a href="/policy">here</a>).',
                  },
                ],
              },
            }            
          },
      },
      // ...

  }),
  ],
});