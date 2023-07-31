/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
 
const EditBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [published_year, setPublished_year] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
 
    const updateBook = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/books/${id}`,{
            title: title,
            author: author,
            genre: genre,
            published_year: published_year
        });
        navigate.push("/");
    }
 
    useEffect(() => {
        getBookById();
    }, []);
 
    const getBookById = async () => {
        const response = await axios.get(`http://localhost:5000/books/${id}`);
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setGenre(response.data.genre);
        setPublished_year(response.data.published_year);

    }
 
    return (
        <div>
            <form onSubmit={ updateBook }>
                <div className="field">
                    <label className="label">Title</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Title"
                        value={ title }
                        onChange={ (e) => setTitle(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Author</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Author"
                        value={ author }
                        onChange={ (e) => setAuthor(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">Genre</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Genre"
                        value={ genre }
                        onChange={ (e) => setGenre(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Published Year</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Published Year"
                        value={ published_year }
                        onChange={ (e) => setPublished_year(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <button className="button is-primary">Update</button>
                </div>
            </form>
        </div>
    )
}
 
export default EditBook