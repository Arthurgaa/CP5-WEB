import {Link} from 'react-router-dom'

const Nav=()=>{
    return(
        <>
        <Link to="/">Home</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/login">Login</Link>
        <button
            onClick={() => {
                // Limpa toda a sessionStorage
                sessionStorage.clear();

                // Redireciona para a página Home
                window.location.href = './routes/Home.jsx';
            }}
        >
            Logout
        </button>
        </>
    )
}

export default Nav