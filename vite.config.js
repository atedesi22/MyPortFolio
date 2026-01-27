import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [
    react(),
    tailwindcss(),
    // VitePWA({
    //   registerType: 'autoUpdate',
    //   manifest: {
    //     name: 'Atedesi Bohole Portfolio',
    //     short_name: 'AtedesiDev',
    //     display: "standalone", // TRÈS IMPORTANT pour que le bouton apparaisse
    //     start_url: "/",
    //     description: 'Portfolio Fullstack de Atedesi Bohole Paul Emmanuel',
    //     theme_color: '#0f172a', // Ton bleu foncé/noir
    //     icons: [
    //       {
    //         src: 'favicon-96x96.png', // Tu devras mettre ces images dans /public
    //         sizes: '192x192',
    //         type: 'image/png'
    //       },
    //       {
    //         src: 'favicon-96x96.png',
    //         sizes: '512x512',
    //         type: 'image/png'
    //       }
    //     ]
    //   }
    // })
  ],
})