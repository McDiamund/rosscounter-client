import './addsighting.css';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import AddSightingCalculations from './addSightingHook';

export default function AddSighting() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    return(
        <div className="add-sighting-module">
            <div className="ads-info">
                <h1 className="adsx-title jb-mono">Submit a Ross Sighting</h1>

                { error === '' ?  <></> : <div className='ads-error'><p className='dinpro'>{error}</p></div>}

                <div className="ads-form">
                    <label className="dinpro"  htmlFor="name">Name:</label><br/>
                    <input type="text"
                           className="ads-input dinpro" 
                           name="name" 
                           value={name}
                           onChange={(e) => setName(e.target.value)}/><br/>

                    <label className="dinpro"  htmlFor="message">Message:</label><br/>

                    <textarea 
                            className="ads-input dinpro" 
                            name="message" 
                            rows="5" 
                            cols="50" 
                            maxLength="150"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}></textarea>

                    <button 
                            className="ads-submit"
                            onClick={async () => {
                                const response = await AddSightingCalculations(name, message);
                                if (response !== 'Succeeded') {
                                    setError(response);
                                    console.log(response);
                                }
                                else { navigate("/"); }
                                }}>Submit Sighting</button>
                </div>
            </div>
        </div>
    );
}