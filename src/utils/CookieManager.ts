/**
 * Gestionnaire de cookies pour la conformité RGPD
 */
export class CookieManager {
  /**
   * Active les scripts de suivi Google Analytics et Google Tag Manager
   */
  static enableTracking(): void {
    // Activer Google Analytics
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
      });
    }

    // Réactiver les scripts qui ont été désactivés
    const disabledScripts = document.querySelectorAll(
      'script[type="text/plain"][data-cookiecategory="analytics"]'
    );
    disabledScripts.forEach((script) => {
      const newScript = document.createElement('script');

      // Copier tous les attributs sauf type
      Array.from(script.attributes).forEach((attr) => {
        if (attr.name !== 'type' && attr.name !== 'data-cookiecategory') {
          newScript.setAttribute(attr.name, attr.value);
        }
      });

      newScript.textContent = script.textContent;
      script.parentNode?.replaceChild(newScript, script);
    });
  }

  /**
   * Désactive les scripts de suivi
   */
  static disableTracking(): void {
    // Désactiver Google Analytics
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
      });
    }

    // Supprimer les cookies non essentiels
    this.deleteNonEssentialCookies();
  }

  /**
   * Supprime les cookies non essentiels
   */
  private static deleteNonEssentialCookies(): void {
    const nonEssentialCookies = ['_ga', '_gid', '_gat', '_fbp', '_gcl_au'];
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
      const cookieName = cookies[i].split('=')[0].trim();

      // Supprimer les cookies Google Analytics et autres trackers
      if (
        nonEssentialCookies.includes(cookieName) ||
        cookieName.startsWith('_ga') ||
        cookieName.startsWith('_gid') ||
        cookieName.startsWith('_gat')
      ) {
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      }
    }
  }
}

// Ajouter la déclaration pour TypeScript
declare global {
  interface Window {
    gtag: (command: string, ...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}
