import React from 'react'; 

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 

import About from './pages/About us'; 

import Services from './pages/Services'; 

import Products from './pages/Products'; 

import styles from './styles.module.css'; // Импортируем CSS модули 

 

// Главный компонент приложения 

const App = () => { 
return ( 
<Router> 
<div> 
 {/* Навигационное меню */} 
<nav className={`navbar ${styles.navbar}`}> 
<ul> 
<li><Link to="/" className={styles.navLink}>Servises</Link></li> 
<li><Link to="/about" className={styles.navLink}>About us</Link></li> 
<li><Link to="/products" className={styles.navLink}>Products</Link></li> 
</ul> 
</nav> 

{/* Контент страниц */} 
<div className={styles.pageContent}> 
<Routes> 
<Route path="/" element={<Services />} /> 
<Route path="/products" element={<Products />} /> 
<Route path="/about" element={<About />} /> 
</Routes> 
</div> 
</div> 
</Router> 
); 
}; 

 

export default App; 
