import { IncomingForm } from 'formidable';
import { v4 as uuid } from 'uuid';

var mv = require('mv');
export const config = {
    api: {
        bodyParser: false,
    }
};

export default async function UploadImage(req, res) {

    const unique_id = uuid();

    const data = await new Promise((resolve, reject) => {
        const form = new IncomingForm()

        form.parse(req, (err, fields, files) => {
            if (err) return reject(err)
            resolve({ fields, files });
        })
    });
    try {
        var oldPath = data.files.image.filepath;
        var newPath = `./public/upload/image_${unique_id}.jpg`;
        mv(oldPath, newPath, function (err) { });
        res.status(200).json({ ok: true, message: "Image Uploaded", path: newPath.replace("./public", "") })
    }
    catch (error) {
        res.status(500).json({ ok: false, message: error.message });
        return;
    }
}