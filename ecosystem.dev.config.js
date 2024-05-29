module.exports = {
  apps: [
    {
      name: 'ocr-was-dev',
      script: 'npm',
      args: 'run start:dev', // npm run start:dev 명령어 실행
      watch: true,
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      cwd: './',
      env: {
        NODE_ENV: 'development',
        MONGO_DATABASE: 'mongodb://localhost:27017/local',
        JWT_SECRET_KEY: '@#@$ocrpm#@$#$',
        JWT_TOKEN_EXPIRED: '100d',
        JWT_REFRESH_TOKEN_EXPIRED: '200d',
        X_OCR_SECRET: 'b2xIUll1bFdKQXl3UGd5ZUd4YWVlY01kRWxNa3RTTVo',
        NAVER_OCR_URL:
          'https://fo0c1elt8i.apigw.ntruss.com/custom/v1/30937/2f0aedd8e13b609b3fda6934da54dad317985448b8509df680ca6fb13c870263/general',
      },
    },
  ],
};
