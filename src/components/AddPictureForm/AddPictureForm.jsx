import Axios from "axios";
import { useState, useEffect } from "react";
import './AddPictureForm.css';

function AddPictureForm (props) {

    const [viewForm, setViewForm] = useState(false);
    const [urlValue, setUrlValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('in handlesubmit', urlValue, descriptionValue);
        if (!urlValue || !descriptionValue) {
            alert('Complete all fields!');
            return;
        } else {
            postPicture();
        };
    };

    const postPicture = () => {

        Axios.post('/gallery', {path: urlValue, description: descriptionValue}).then(response => {
            console.log('posted');
            props.getGallery();
            setUrlValue('');
            setDescriptionValue('');
            setViewForm(false);
        }).catch(error => {
            alert('error POSTing', error);
        });
    };


    return (
        <div className="addPictureDiv">
            {(viewForm) ? 
                <div className="addPictureTrue">
                    <h3>Add a picture:</h3>
                    <form className="inputForm" onSubmit={handleSubmit}>
                        <label htmlFor="urlInput">URL: </label>
                        <input id="urlInput" type="text" placeholder="paste URL here" onChange={(e)=>{setUrlValue(e.target.value)}} value={urlValue}/>
                        <br/>
                        <label id="descriptionLabel" htmlFor="descriptionInput">Description: </label>
                        <textarea id="descriptionInput" type="text" placeholder="brief description of image" cols={22} rows={3} onChange={(e)=>{setDescriptionValue(e.target.value)}} value={descriptionValue}/>
                        <br/>
                        <button type="submit">Add Picture</button>
                        <button onClick={() => setViewForm(!viewForm)}>Cancel</button>
                    </form> 
                </div>
                : <h3 className="clickMe" onClick={() => setViewForm(!viewForm)}>Click here to add your own picture!</h3>
            }
            
        </div>
    );
};

export default AddPictureForm;