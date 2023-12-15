import { useEffect, useState } from "react";
import { storage } from "../firebase/firebase";
import { getDownloadURL, listAll, ref, uploadBytes } from "@firebase/storage";
import { uuidv4 } from "@firebase/util";



export const TestUpload = () => {
    const [img, setImg] = useState("")
    const [imgUrl, setImgUrl] = useState("")
    const handleClick = () => {
        console.log("first",img)
        if (img !== null) {
            const imgRef = ref(storage, `images/${uuidv4()}`)
            uploadBytes(imgRef, img).then(value=>{
                console.log(value)
                getDownloadURL(value.ref).then(url => {
                    setImgUrl(url)
                })
            })
            console.log(imgUrl)
        }

    }

    // useEffect(() => {
    //     listAll(ref(storage, "files")).then((imgs) => {
    //         console.log(imgs)
    //         imgs.items.forEach(val => {
    //             getDownloadURL(val).then(url => {
    //                 setImgUrl(data => [...data, url])
    //             })
    //         })
    //     })
    // }, []))
    return (
        <div>
            <input type="file" onChange={(e) => setImg(e.target.files[0])} />
            <button onClick={handleClick}>Upload</button>
            <br />
            {

                <img src={imgUrl} alt="" srcset="" />
            }
        </div>
    );
};