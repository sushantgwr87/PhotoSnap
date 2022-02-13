import { IncomingForm } from 'formidable'
import { promises as fs } from 'fs'

var mv = require('mv');
var id = 0;
export const config = {
    api: {
       bodyParser: false,
    }
};
 
export default async function UploadImage(req, res) {
    
    const data = await new Promise((resolve, reject) => {
       const form = new IncomingForm()
       
        form.parse(req, (err, fields, files) => {
            if (err) return reject(err)
            // console.log(fields, files)
            var oldPath = files.file.filepath;
            var newPath = `./public/upload/${files.file.originalFilename}`;
            mv(oldPath, newPath, function(err) {});
            // console.log(files.file.filepath);
            // console.log(newPath);
            res.status(200).json({ fields, files })
        })
        
    })
    const contents = fs.readFile(data?.files?.nameOfTheInput.path, {
        encoding: 'utf8',
    })
    console.log(contents);
    
}