module.exports = {
  apps: [
    {
      name: 'ocr-was-dev',
      script: './dist/main.js',
      watch: false,
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      cwd: './',
      env: {
        NODE_ENV: 'development',
        MONGO_DATABASE: 'mongodb://localhost:27017/local',
        JWT_SECRET_KEY: '@#@$ocrpm#@$#$',
        JWT_TOKEN_EXPIRED: '1d',
        JWT_REFRESH_TOKEN_EXPIRED: '30d',
      },
    },
  ],
};
