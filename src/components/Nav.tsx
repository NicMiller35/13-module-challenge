import { Link } from 'react-router-dom';
const Nav = () => {
  
   
    const navStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#333',
      padding: '1rem',
      color: 'white',
      fontSize: '1.2rem',
    };
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <div style= {navStyle}>
    <div >Nav</div>
    <Link to='/'>Home</Link>
    <Link to='/SavedCandidates'>Potential Candidates
    </Link>
    <div/>
    </div>
  )
};

export default Nav;
