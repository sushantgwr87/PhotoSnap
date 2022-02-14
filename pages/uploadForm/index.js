import { useState } from "react";
import Image from "next/image";
import addImage from "../../public/assets/addImage.png";

const PrivatePage = () => {
  const [image, setImage] = useState(addImage);
  const [createObjectURL, setCreateObjectURL] = useState(addImage);

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    body: "",
  });

  const { title, author, body } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const uploadToServer = async (e) => {
    e.preventDefault();

    const body = new FormData();
    body.append("image", image);

    const response = await fetch("/api/upload", {
      method: "POST",
      body
    });
    const imageData = await response.json();

    if (imageData.ok) {
      // let snapData = {
      //   ...formData,
      //   path: imageData.path,
      //   createdAt: new Date().toLocaleString('en-US', { day: 'numeric', year: 'numeric', month: 'short', })
      // }

      // let res = await fetch('/api/snaps', {
      //   method: 'POST',
      //   body: JSON.stringify(snapData),
      // });

      // let data = await res.json();

      // if (data.success) {
      //   // reset the fields
      //   console.log("done");
      //   // set the message
      // }

      
    }
  };

  return (
    // <>
    <section className="upload">
      <h2>Add New Story</h2>
      <form onSubmit={uploadToServer} className="upload_form">
        <div className="upload_form_image">
          <label htmlFor="imgUpload">
            <div className="upload_image">
              <Image src={createObjectURL} layout="fill" alt="upload Image" />
            </div>
          </label>
          <input
            type="file"
            id="imgUpload"
            name="storyImage"
            onChange={uploadToClient}
            accept=".png, .jpg, .jpeg"
            hidden
          // required
          />
        </div>
        <div className="upload_content">
          <label htmlFor="title">Title</label>
          <input
            className="upload_content___input"
            name="title"
            id="title"
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => onChange(e)}
            required
          />
          <label htmlFor="body">Body</label>
          <textarea
            className="upload_content___input"
            name="body"
            id="body"
            placeholder="Enter Body"
            cols="30" rows="10"
            value={body}
            onChange={(e) => onChange(e)}
            required
          />
          <label htmlFor="author">Author</label>
          <input
            className="upload_content___input"
            name="author"
            id="author"
            type="text"
            placeholder="Enter Author"
            value={author}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <button className="upload_form___btn" type="submit">
          Upload to server
        </button>
      </form>
    </section>
    // </>
  );
}

export default PrivatePage;