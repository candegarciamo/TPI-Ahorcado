import { defineConfig } from 'vite';
import istanbul from 'vite-plugin-istanbul';

export default defineConfig({
  plugins: [
    ...(process.env.VITE_COVERAGE === 'true'
      ? [
          istanbul({
            include: 'src/**/*',
            exclude: ['node_modules', 'tests/**/*', 'features/**/*'],
            extension: ['.js', '.ts', '.jsx', '.tsx'],
            requireEnv: false,
          }),
        ]
      : []),
  ],
  build: {
    sourcemap: process.env.VITE_COVERAGE === 'true',
  },
  css: {
    devSourcemap: process.env.VITE_COVERAGE === 'true',
  },
});
