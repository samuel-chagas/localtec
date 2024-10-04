import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,  // Define a porta do servidor de desenvolvimento
    open: true,  // Abre automaticamente o navegador quando o servidor iniciar
    proxy: {
      // Exemplo de proxy para redirecionar requisições API no desenvolvimento
      '/api': {
        target: 'http://localhost:5000', // API backend
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Reescreve a rota da API
      },
    },
    historyApiFallback: true,  // Suporta SPA com history mode (para React Router)
  },
  build: {
    outDir: 'dist',  // Define a pasta de saída para a build
    sourcemap: true,  // Gera sourcemaps para facilitar debug em produção
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.split('node_modules/')[1].split('/')[0].toString(); // Divisão de pacotes para melhorar o cache em produção
          }
        },
      },
    },
  },
})
