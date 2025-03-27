export const jwtConstants = {
    secret:  process.env.JWT_SECRET|| 'defaultSecretKey', // Deberías usar una variable de entorno en producción
    expiresIn: '1h',
  };