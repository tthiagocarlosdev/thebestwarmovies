import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'teste-versel-reactjs', // Substitua pelo nome do seu repositório
});
