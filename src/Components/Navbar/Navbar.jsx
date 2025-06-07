import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const isActiveCallback = ({ isActive }) => isActive ? 'link link-seleccionado' : 'link';

  return (
    <header className="navbar-header">
        <h2 className="navbar-title">Sistema de Seguimiento de Obras</h2>
        <nav className="navbar-nav">
            <NavLink
                to='/'
                className={isActiveCallback}
            >
                Inicio
            </NavLink>
            <NavLink
                to='/contact'
                className={isActiveCallback}
            >
                Contacto
            </NavLink>
            <NavLink
                to='/login'
                className={isActiveCallback}
            >
                Login
            </NavLink>
            <NavLink
                to='/registro'
                className={isActiveCallback}
            >
                Registro
            </NavLink>

            <Link to ={ '/obra/new' }>
             Crear Obra
            </Link>



        </nav>
    </header>
  )
}

export default Navbar




// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import './Navbar.css'

// const Navbar = () => {
//     const isActiveCallback = ({ isActive }) => isActive ? 'link link-seleccionado' : 'link';

//   return (
//     <header className="navbar-header">
//         <h2 className="navbar-title">Sistema de seguimiento de Obras</h2>
//         <nav className="navbar-nav">
//             <NavLink
//                 to='/'
//                 className={isActiveCallback}
//             >
//                 Inicio
//             </NavLink>
//             <NavLink
//                 to='/contact'
//                 className={isActiveCallback}
//             >
//                 Contacto
//             </NavLink>
//             <NavLink
//                 to='/login'
//                 className={isActiveCallback}
//             >
//                 Login
//             </NavLink>
//             <NavLink
//                 to='/registro'
//                 className={isActiveCallback}
//             >
//                 Registro
//             </NavLink>
//         </nav>
//     </header>
//   )
// }

// export default Navbar
