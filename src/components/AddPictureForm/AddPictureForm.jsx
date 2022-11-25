import { useState, useEffect } from "react";
import './AddPictureForm.css';

function AddPictureForm () {

    const [viewForm, setViewForm] = useState(false);
    const [urlValue, setUrlValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log('in handlesubmit', urlValue, descriptionValue);

    };

    return (
        <div className="addPictureDiv">
            {(viewForm) ? 
                <div className="addPictureTrue">
                    <h3>Add a picture:</h3>
                    <form className="inputForm" onSubmit={handleSubmit}>
                        <label htmlFor="urlInput">URL: </label>
                        <input id="urlInput" type="text" placeholder="paste URL here" onChange={(e)=>{setUrlValue(e.target.value)}}/>
                        <br/>
                        <label id="descriptionLabel" htmlFor="descriptionInput">Description: </label>
                        <textarea id="descriptionInput" type="text" placeholder="brief description of image" cols={22} rows={3} onChange={(e)=>{setDescriptionValue(e.target.value)}}/>
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