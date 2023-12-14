import React from 'react'
import { Spinner } from '../animation/Spinner'
import { convertDate } from '../../services/stringifyService'

function CommentSection({ comments }) {
    return (
        <div className="bg-white flex flex-col gap-4 p-4 shadow-md shadow-blue-500/40 rounded-xl">
            <h4 className="self-center">Mes commentaires</h4>
            {
                comments.length === 0 ? (
                    <Spinner message="Aucun commentaire" />
                ) : comments.map((comment) => (
                    <div key={comment.id} className="p-2 rounded-xl flex justify-between">
                        <h3>{comment.title}</h3>
                        <p>{comment.body}</p>
                        <p>Rate: {comment.rate}</p>
                        <p>Date: {convertDate(comment.date)}</p>
                        <p>Vote: {comment.vote}</p>
                    </div>
                )
                )
            }
        </div>
    )
}

export default CommentSection