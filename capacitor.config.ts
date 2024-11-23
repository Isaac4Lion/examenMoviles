import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',  // Identificador único de la aplicación
  appName: 'examen',           // Nombre de la aplicación
  webDir: 'www',               // Directorio de distribución de la aplicación
  plugins: {
    SplashScreen: {
      launchAutoHide: true,    // Ocultar automáticamente el splash screen después de un tiempo
      launchShowDuration: 2000, // Duración en milisegundos del splash screen (opcional)
      backgroundColor: '#ffffff', // Color de fondo del splash screen (opcional)
      androidSplashResourceName: 'splash', // Si usas un recurso personalizado
      iosSplashResourceName: 'splash'     // Si usas un recurso personalizado
    }
  }
};

export default config;
