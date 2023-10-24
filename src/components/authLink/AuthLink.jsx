// "use client";
// import Link from "next/link";
// import styles from "./authLink.module.css";
// import { useState } from "react";

// const AuthLink = () => {
//   const [open, setOpen] = useState(false);
//   const status = "notauthentication";
//   return (
//     <>
//       {status === "notauthenticatin" ? (
//         <Link href="/login">LogIn</Link>
//       ) : (
//         <>
//           <Link href="/write">Write</Link>
//           <span className={styles.link} href="/logout">
//             LogOut
//           </span>
//         </>
//       )}
//       <div className={styles.burger}>
//         <div className={styles.line}></div>
//         <div className={styles.line}></div>
//         <div className={styles.line}></div>
//       </div>
//       {open && (
//         <div
//           className={styles.responsiveMenu}
//           onClick={() => {
//             setOpen(!open);
//           }}
//         >
//           <Link href="/">homepage</Link>
//           <Link href="/">contact</Link>
//           <Link href="/">about</Link>
//           {status === "notauthenticatin" ? (
//             <Link href="/login">LogIn</Link>
//           ) : (
//             <>
//               <Link href="/write">Write</Link>
//               <span className={styles.link} href="/logout">
//                 LogOut
//               </span>
//             </>
//           )}
//         </div>
//       )}
//     </>
//   );
// };

// export default AuthLink;

"use client";
import Link from "next/link";
import styles from "./authLink.module.css";
import { useState } from "react";

const AuthLink = () => {
  const [open, setOpen] = useState(false);

  const status = "notauthentication";

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLink;
