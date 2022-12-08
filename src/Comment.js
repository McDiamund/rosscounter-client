import './css/comment.css';

export default function Comment(props) {
    return (
        <div className='comment'>
            <span className="comment-title jb-mono">Ross Sighting #{props.comment.rossNumber}</span>
            <span className="comment-user dinpro">{props.comment.name}</span>
            <p className="comment-message dinpro">{props.comment.message}</p>
        </div>
    )
}