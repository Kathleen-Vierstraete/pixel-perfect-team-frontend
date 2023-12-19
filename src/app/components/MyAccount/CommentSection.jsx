import React from 'react'
import { Spinner } from '../animation/Spinner'
import { convertDate } from '../../services/stringifyService'
import { Link } from 'react-router-dom';

function CommentSection({ comments }) {

    return (
<div className="bg-white flex flex-col gap-4 p-4 shadow-md shadow-blue-500/40 rounded-xl justify-center">
    <h4 className="self-center">Mes commentaires</h4>
    {comments.length === 0 ? (
        <Spinner message="Aucun commentaire" />
    ) : (
        comments.map((comment) => (
            <div key={comment.id} className="p-2 rounded-xl border-2 border-gray-600 flex flex-col">
                <div className='flex flex-col items-center justify-center'>
                <Link to={`/product/${comment.product.id}`} className='flex flex-col items-center justify-center'>
                    <img
                        src={comment.product.pictures[0].url}
                        alt={comment.product.pictures.alt}
                        className="w-16 h-16 object-cover rounded-full"
                    />
                    <h5 className='text-lg font-semibold flex-shrink-0'>{comment.product.name}</h5>
                </Link>
                </div>

                <div className='mt-4 border-t flex flex-col items-center text-center gap-6 border-gray-300 pt-4 lg:flex-row'>
                    <h4>{comment.title}</h4>
                    <p>{comment.body}</p>
                    <p>Rate: {comment.rate}</p>
                    <p>Date: {convertDate(comment.date)}</p>
                    <p>Vote: {comment.vote}</p>
                </div>
            </div>
        ))
    )}
</div>


    )
}

export default CommentSection