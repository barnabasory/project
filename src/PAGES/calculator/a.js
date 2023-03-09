// {
//   show && (
//     <div className={styles["custom-overlay-wrapper"]}>
//       {sortedCards.map((card, index) => {
//         const { id, name, wattage, hours } = card;
//         return (
//           <div className={styles["custom-overlay"]} key={id}>
//             <div className={styles["add-custom-item"]}>
//               <span>Add Custom Item</span>
//               <img src={times} alt="close-modal" onClick={showModal} />
//             </div>
//             <div className={styles.hr}></div>
//             <form className={styles.form}>
//               <label htmlFor="name" className={`root-small ${styles.label}`}>
//                 Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Custom made Oven"
//                 name="name"
//                 value={value.name}
//                 className={`root-small ${styles.input}`}
//                 onChange={handleChange}
//                 required
//               />
//               <label htmlFor="wattage" className={`root-small ${styles.label}`}>
//                 Wattage
//               </label>
//               <input
//                 type="number"
//                 placeholder="3000"
//                 name="wattage"
//                 value={value.wattage}
//                 className={`root-small ${styles.input}`}
//                 onChange={handleChange}
//                 required
//               />
//               <label htmlFor="hours" className={`root-small ${styles.label}`}>
//                 Hours used per day
//               </label>
//               <input
//                 type="number"
//                 placeholder="12"
//                 name="hours"
//                 value={value.hours}
//                 className={`root-small ${styles.input}`}
//                 onChange={handleChange}
//                 required
//               />

//               <div className={styles.quantity}>
//                 <label htmlFor="">Quantity</label>
//                 <div className={styles.count}>
//                   <img
//                     src={minus}
//                     alt="minus"
//                     className={styles.minus}
//                     onClick={() => decreaseCount(index)}
//                   />
//                   <div className={styles["border-right"]}></div>

//                   {/* <input
//                     type="number"
//                     placeholder="12"
//                     name="counts"
//                     value={value.counts}
//                     className={`root-small ${styles.input}`}
//                     onChange={handleChange}
//                     required
//                   /> */}

//                   <div className={styles.number}>{counts[id]}</div>

//                   <div className={styles["border-right"]}></div>
//                   <img
//                     src={plus}
//                     alt="add"
//                     className={styles.plus}
//                     onClick={() => increaseCount(index)}
//                   />
//                 </div>
//                 <button
//                   className={`root-small-bold ${styles.button}`}
//                   onClick={() => {
//                     appendArray(index);
//                     setShow(false);
//                   }}
//                 >
//                   Add
//                 </button>
//               </div>
//             </form>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
