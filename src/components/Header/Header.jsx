import css from './Header.module.css';
import { FaSearch } from "react-icons/fa";


const Header = ({onSearch}) => {

        const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const topic = form.elements.topic.value;

        if (topic.trim() === "") {
            alert('Please enter search term!');
            return;
            }
            console.log(topic);
            onSearch(topic);
            
        form.reset();
    };
    
return (

    <header className={css.headerSearch}>
            <form onSubmit={handleSubmit}>
            <div className = {css.formSearch}>
           
            <input
            type="text"
            autoComplete="off"
            name="topic"
            autoFocus
            placeholder="Search movie"
            className = {css.inputSearch}
            />
            <button type="submit" className={ css.btnSearch}> <FaSearch/></button>
            </div>
            </form>

    </header>)
    
}
export default Header;