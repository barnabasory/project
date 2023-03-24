// import React, { useState, useEffect } from "react";
// import styles from "./EditUnits.module.scss";
// import { arrowUp, arrowDown, ProcessingResults } from "../../PAGES";
// import { useContext } from "react";
// import { CheckedCards } from "../../Context";
// import { useNavigate } from "react-router-dom";

// const EditUnits = () => {
//   const navigate = useNavigate();
//   const { checkedArray, counts, wattage, setWattage, hours, setHours } =
//     useContext(CheckedCards);
//   const [loading, setLoading] = useState(false);

//   const handleInputChange = (e, id) => {
//     const { name, value } = e.target;
//     checkedArray((prevState) =>
//       prevState.map((item) =>
//         item.id === id ? { ...item, [name]: value } : item
//       )
//     );
//   };

//   const handleIncrease = (id, name) => {
//     checkedArray((prevState) =>
//       prevState.map((item) =>
//         item.id === id ? { ...item, [name]: +item[name] + 1 } : item
//       )
//     );
//   };

//   const handleDecrease = (id, name) => {
//     checkedArray((prevState) =>
//       prevState.map((item) =>
//         item.id === id ? { ...item, [name]: +item[name] - 1 } : item
//       )
//     );
//   };

//   const fetchResult = () => {
//     setLoading(true);
//     navigate("/result");
//     setLoading(false);
//   };

//   return (
//     <>
//       {loading && <ProcessingResults />}
//       <div className={`sw ${styles["edit-page"]}`}>
//         <div className={`${styles["top-bar"]}`}>
//           <span>Edit the wattage and hourly usage for each item</span>
//           <div className={styles.back}>
//             <span>Back</span>
//             <button
//               className={`root-small-bold ${styles.button}`}
//               onClick={fetchResult}
//             >
//               See Results
//             </button>
//           </div>
//         </div>
//         <div className={styles["border-top"]}></div>
//         <div className={styles.main}>
//           <div className={styles.cards}>
//             {checkedArray?.map((checkedItem, index) => {
//               const { id, name, count, wattage, hours } = checkedItem;
//               return (
//                 <form className={styles.card} key={index}>
//                   <div className={styles.custom_name_div}>
//                     <span>{name}</span>
//                     <span className={`tiny-text-bold ${styles.count_value}`}>
//                       {count + 1}
//                     </span>
//                   </div>
//                   {/* wattage */}
//                   <div className={styles.hr}></div>
//                   <div className={styles["wattage-div"]}>
//                     <label
//                       htmlFor={`wattage-${id}`}
//                       className={`root-small ${styles.wattage}`}
//                     >
//                       Wattage
//                     </label>
//                     <div className={`dd ${styles.calculate}`}>
//                       <div className={styles.meter}>
//                         <input
//                           className={`root-text ${styles.meter_number}`}
//                           id={`wattage-${id}`}
//                           value={wattage}
//                           name="wattage"
//                           onChange={(e) => handleInputChange(e, id)}
//                           type="number"
//                         />
//                         <div className={styles.arrows}>
//                           <img
//                             src={arrowUp}
//                             alt="arrow-up"
//                             className={styles["arrow-up"]}
//                           />
//                           <img
//                             src={arrowDown}
//                             alt="arrow-down"
//                             className={styles["arrow-down"]}
//                           />
//                         </div>
//                       </div>
//                       <span className={`root-small ${styles.acronym}`}>W</span>
//                     </div>
//                   </div>
//                   <div className={styles.hr2}></div>
//                   {/* hours */}
//                   <div className={styles["hours-div"]}>
//                     <label
//                       htmlFor={`hours-${id}`}
//                       className={`root-small ${styles.hours}`}
//                     >
//                       Hours used per day
//                     </label>
//                     <div className={`dd ${styles.calculate}`}>
//                       <div className={styles["h-meter"]}>
//                         <input
//                           className={`root-text ${styles.h_number}`}
//                           id={`hours-${id}`}
//                           value={hours}
//                           name="hours"
//                           onChange={(e) => handleInputChange(e, id)}
//                           type="number"
//                         />
//                         <div className={styles["h-arrows"]}>
//                           <img
//                             src={arrowUp}
//                             alt="arrow-up"
//                             className={styles["h-arrow-up"]}
//                             onClick={() => handleIncrease(id, "hours")}
//                           />
//                           <img
//                             src={arrowDown}
//                             alt="arrow-down"
//                             className={styles["h-arrow-down"]}
//                             onClick={() => handleDecrease(id, "hours")}
//                             arial-role="button"
//                           />
//                         </div>
//                       </div>
//                       <span className={`root-small ${styles["h-acronym"]}`}>
//                         Hrs
//                       </span>
//                     </div>
//                   </div>
//                 </form>
//               );
//             })}
//           </div>
//         </div>
//         <div className="calc-edit-footer"></div>
//       </div>
//     </>
//   );
// };

// export default EditUnits;
