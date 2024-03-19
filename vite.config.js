import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    server: {
      // Ustawiamy serwer proxy na Vite
      proxy: {
        // Dla kazdego zadania, ktore przyjdzie pod sciezke /moby
        "/steam": {
          // Przekierowujemy je do serwera docelowego (API Moby Games):
          target: "https://api.steampowered.com",
          // Usuwamy "/steam" ze sciezki
          rewrite: (path) => path.replace(/^\/steam/, ""),
          secure: false,
          changeOrigin: true,
          configure: (proxy, _options) => {
            // Dodajemy klucze API do kazdego zadania, ktore wychodzi do serwera
            // zebysmy nie musieli ich dorzucac bezposrednio z frontendu
            proxy.on("proxyReq", (proxyRequest, apiRequest, apiResponse) => {
              // Tworze obiekt URL - pomoze mi to rozdzielic adres do API
              // na jego poszczegolne czesci: domenę, ściezke i parametry
              // (tzw. query string)
              const url = new URL(
                proxyRequest.path,
                "https://api.steampowered.com"
              );

              // Do query string dodaję parametr api_key
              url.searchParams.append(
                "key",
                encodeURIComponent(env.VITE_APP_STEAM_KEY)
              );

              // Na koniec podmieniam sciezke w requescie, ktory Vite wyśle do API Moby Games,
              // tak aby zawierala ona klucz API
              proxyRequest.path = url.pathname + url.search;
            });
          },
        },
      },
    },
  };
});
