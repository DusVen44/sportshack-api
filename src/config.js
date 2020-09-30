module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DATABASE_URL: process.env.DATABASE_URL || 'postgresql://venny@localhost/sportshack',
    CLIENT_ORIGIN: 'https://sportshack-client.vercel.app/'
  }