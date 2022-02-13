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

  const uploadToServer = async (event) => {
    const body = new FormData();
    // console.log("file", image)
    body.append("file", image);
    const response = await fetch("/api/upload", {
      method: "POST",
      body
    });
  };

  return (
    <>
      <section className="upload">
        <h2>Add New Story</h2>
        <form>
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
            />
          </div>
          <div className="upload_content">
            <label htmlFor="title">Title</label>
            <input
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
              name="author"
              id="author"
              type="text"
              placeholder="Enter Author"
              value={author}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <button type="submit" onClick={uploadToServer}>
            Upload to server
          </button>
        </form>
      </section>
    </>
  );
}

export default PrivatePage;