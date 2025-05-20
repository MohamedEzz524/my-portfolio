// import { useState, useEffect } from "react";
// import "./header.css";

// export default function Header({ isSmall }) {
//   const [active, setActive] = useState("home");
//   const [showMenu, setShowMenu] = useState(false);

//   // handle manual scrolling
//   useEffect(() => {
//     const handleScroll = () => {};

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleSetActive = (to) => {
//     setActive(to);
//   };

//   const handleDropDown = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <nav className="my-nav">
//       <div className="logo">
//         <a href="home">
//           &lt;
//           <span>
//             <span className="logo-mo">Mo</span>Sayed
//           </span>
//           <span className="slash">/</span>&gt;
//         </a>
//       </div>
//       {!isSmall ? (
//         <>
//           <ul className="nav-links">
//             {["home", "about", "skills"].map((item) => (
//               <li key={item}>
//                 <a
//                   href={`#${item}`}
//                   className={`li ${active === item ? "active" : ""}`}
//                 >
//                   {item.charAt(0).toUpperCase() + item.slice(1)}
//                 </a>
//               </li>
//             ))}
//             <li className="me">
//               <div className="up">
//                 <span>Eng.</span>Mohamed ElSayed
//               </div>
//               <div className="down">Computer Engineer</div>
//             </li>
//             {["portfolio", "contact"].map((item) => (
//               <li key={item}>
//                 <a
//                   key={item}
//                   to={item}
//                   smooth={true}
//                   duration={500}
//                   offset={-80}
//                   spy={true}
//                   onSetActive={handleSetActive}
//                   className={`li ${active === item ? "active" : ""}`}
//                   isDynamic={true}
//                 >
//                   {item.charAt(0).toUpperCase() + item.slice(1)}
//                 </a>
//               </li>
//             ))}
//             <li>
//               <a
//                 className="hire"
//                 href="mailto:moelsayed524@gmail.com?subject=Contact"
//               >
//                 Hire Me
//               </a>
//             </li>
//           </ul>
//         </>
//       ) : (
//         <div className="dropdown">
//           <div className="dropdown-toggle" onClick={handleDropDown}>
//             <span></span>
//             <span></span>
//             <span></span>
//             <div className={`dropdown-menu ${showMenu ? "active" : ""}`}>
//               <a href="#home">Home</a>
//               <a href="#about">About</a>
//               <a href="#skills">Skills</a>
//               <a href="#portfolio">Portfolio</a>
//               <a href="#contact">Contact</a>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }
