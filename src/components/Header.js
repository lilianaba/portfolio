import NavBar  from './NavBar';

const Header = ({currentPage, handlePageChange})=>{
    return (<header> 

        <NavBar currentPage={currentPage} handlePageChange={handlePageChange}/> 



    </header>

)
} 

export default Header; 