import { useState, useRef } from 'react';
import Styles from '../blog-post-form/style.module.scss'
import React from 'react';
import dynamic from 'next/dynamic';
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });
export default function NewPost() {
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [category, setCategory] = useState('');
    const [author, setAuthor] = useState('');                           
    const [content, setContent] = useState('');                           
    const editor = useRef(null);

    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log({ title, slug,category, author, content });
    };

    return (
        <div className={Styles.form_wrapper}>
            <form onSubmit={handleSubmit}>
                <div className={`${Styles.field_group} mb-4`}>
                    <label htmlFor="title">Title:</label>
                    <input
                    type="text"
                    className={Styles.input_field}
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    />
                </div>
                <div className={`${Styles.field_group} mb-4`}>
                    <label htmlFor="content">Slug:</label>
                    <input
                    type="text"
                    className={Styles.input_field}
                    id="slug"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    required
                    />
                </div>
                <div className={`${Styles.field_group} mb-4`}>
                    <label htmlFor="content">Category:</label>
                    <input
                    className={Styles.input_field}
                    type="text"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    />
                </div>
                <div className={`${Styles.field_group} mb-4`}>
                    <label htmlFor="content">Author:</label>
                    <input
                    className={Styles.input_field}
                    type="text"
                    id="category"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                    />
                </div>
                <div className={`${Styles.field_group} mb-3`}>
                    <label htmlFor="content" className='mb-2'>Content:</label>
                    <JoditEditor 
                    ref = {editor}
                    value={content}
                    onChange={newContent => setContent(newContent)}
                    />   
                </div>
                <button type="submit" className='global-btn'>Submit</button>
            </form>
        </div>
    );
}
