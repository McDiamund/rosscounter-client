import './css/home.css';
import Comment from './Comment';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Home() {
    const [comments, setComments] = useState([]);
    const [rossCount, setRossCount] = useState('');

    useEffect(() => {

        async function getRossNumber(name, message) {
            const response = await fetch(`https://rosscounter.herokuapp.com/count`);
    
            if (!response.ok) {
                const message = `An error occured: ${response.statusText}`;
                console.log(message);
                return;
            }
    
            const rossCount = await response.json();
            setRossCount(rossCount.count);
        }

        async function getComments() {
            const response = await fetch(`https://rosscounter.herokuapp.com/comments`);

            if (!response.ok) {
                const message = `An error occured: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const comments = await response.json();
            setComments(comments);
        }

        getRossNumber();
        getComments();

        return;
    }, [rossCount]);

    return (
        <div className="home-module">
            <div className="profile-icon"></div>
            <div className="counter-info">
                <span className="counter-info-title jb-mono">Ross' Sighted</span>
                <span className="counter-number dinpro">{rossCount}</span>
            </div>
            
            <div className='add-sighting-module'>
                <Link className='add-sighting-button dinpro' to="/add-sighting">Report a Ross Sighting</Link>
            </div>

            <div className="comment-module">
                { comments.slice(0).reverse().map((comment, index) => {
                    return (<Comment comment={comment} key={index} />);
                }) }
            </div>
        </div>
    )
}
