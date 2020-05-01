import React from 'react'
import { Link } from 'react-router-dom'
import striptags from 'striptags'
import Turncate from 'react-truncate'

const BlogItem = props => {
    const {
        id,
        title,
        content,
        blog_status,
        featured_image_url
    } = props.blogItem

    return (
        <div>
        <Link to={`/b/${id}`}> 
            <h1>{title}</h1>
        </Link>
            <div>
                <Turncate lines={5} ellipsis={
                    <span>
                        ... <Link to={`/b/${id}`}>Read more</Link>
                    </span>
                }>{striptags(content)}</Turncate>
            </div>
        </div>
    )
}

export default BlogItem