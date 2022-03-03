import React from 'react'
import './Blog.css'
import blog from '../../images/blog.jpg'

const Blog = () => {
    return (

        <div id="blog">
            <main className="herosection">
                <div className="main-hero">
                    <div className="Card-main">
                        <div className="Card-Container">
                            <div className="row">
                                <div className="Card">
                                    <img src={blog} alt="blog" className="blog-img" />
                                </div>
                                <p className="piano">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et recusandae sint distinctio
                                    aperiam cupiditate saepe praesentium tempora doloremque maxime. Eaque quidem ducimus similique,
                                    voluptatem corrupti quod reiciendis dignissimos expedita veritatis earum iste nostrum assumenda
                                    exercitationem doloremque excepturi illo saepe cupiditate tempore sit aliquam blanditiis tenetur
                                    alias a nobis. Unde.
                                </p> <br />
                                <button className="read-more">Read blog</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Blog