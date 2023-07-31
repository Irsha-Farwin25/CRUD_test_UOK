import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [published_year, setPublished_year] = useState('');
    const navigate = useNavigate();
 
    const saveBook = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/books',{
            title: title,
            author: author,
            genre: genre,
            published_year: published_year
        });
        navigate.push("/");
    }
 
    return (
        <div>
            <form onSubmit={ saveBook }>
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
                    <button className="button is-primary">Save</button>
                </div>
            </form>
        </div>
    )
}
 
export default AddBook