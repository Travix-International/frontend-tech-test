let config = {
  API_BASE_URL_EXTERNAL: process.env.API_BASE_URL_EXTERNAL ||
    'http://localhost:9001'
  , API_BASE_URL_INTERNAL: process.env.API_BASE_URL_INTERNAL ||
    'http://localhost:3000' 
}
export default config;
