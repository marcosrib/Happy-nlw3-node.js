import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

const upload = path.resolve(__dirname, '..', '..', 'uploads');

export default {
  storage: multer.diskStorage({
    destination: upload,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('hex');
      const fileName = `${fileHash}-${file.originalname}`;
      return callback(null, fileName);
    },
  }),
};
