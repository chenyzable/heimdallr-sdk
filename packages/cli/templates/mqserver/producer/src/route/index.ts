import express from 'express';
import { resolve } from 'path';
import { init as projInit } from '../controller/projCtrl';
import { uploadPost as logPostUpload, uploadGet as logGetUpload } from '../controller/logCtrl';
import { upload as smUpload } from '../controller/sourcemapCtrl';

const resolveDirname = (target: string) => resolve(__dirname, target);

const router = express.Router(); // 创建路由对象

router.get('/project/init', projInit);

router.post('/log/report', logPostUpload);
router.get('/log/report', logGetUpload);

router.post('/sourcemap/upload', smUpload);

router.get('/test', (req, res) => {
  res.send({
    code: 0,
    data: {
      mesaage: '测试接口'
    },
    msg: 'succeed'
  });
});

// views
router.use('/', express.static(resolveDirname('../views')));

export default router;
