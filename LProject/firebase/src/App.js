import {useState, useEffect} from "react";
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
} from "firebase/storage";
import {storage} from "./config/firebase";
import {v4} from "uuid";

function App() {
    const [imageUpload, setImageUpload] = useState(null);


    const uploadFile = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then(async (url) => {
                console.log(url)
            });
        });
    };



    return (
        <div className="App">
            <input
                type="file"
                onChange={(event) => {setImageUpload(event.target.files[0]);}}
            />
            <button onClick={uploadFile}> Upload Image</button>
        </div>
    );
}

export default App;