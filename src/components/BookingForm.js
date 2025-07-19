
// import "../style/BookingForm.css";
// import React, {useState} from "react";

// const BookingForm=(props)=>{
//   const [date, setDate] = useState("");
//   const [times, setTimes] = useState("");
//   const [guests, setGuests] = useState("");
//   const [occasion, setOccasion] = useState("");

//   const handleSubmit =(e)=>{
//     e.preventDefault();
//     props.SubmitForm(e);
//   }


   

//   const handleChange =(e)=>{
//     setDate(e);
//     props.dispatch(e);

//   }
//   return (
//     <header>
//       <section>
//     <form onSubmit={handleSubmit}>
//       <fieldset>
//         <div>
//           <label htmlFor="book-date">Choose Date:</label>
//           <input type="date" id="book-date" value={date} required onChange={(e)=>handleChange(e.target.value)}/>
//         </div>
//         <div>
//           <label htmlFor="book-time">Choose Time:</label>
//           <select id="book-time" value={times} onChange ={(e)=> setTimes(e.target.value)}>
//             <option value="">Select Time</option>
//   {props.availableTimes.availableTimes.map(availableTimes => { return <option key={availableTimes}>{availableTimes}</option>}
//   )}
//           </select>
//         </div>
//         <div>
//           <label htmlFor="book-guests">Number of Guests:</label>
//           <input id="book-guests" min="1" value={guests} onChange={(e)=> setGuests(e.target.value)}/>
//         </div>
//         <div>
//           <label htmlFor="book-occasion">Occasion:</label>
//           <select id="book-occasion" key={occasion} value={occasion} onChange={e=>setOccasion(e.target.value)}>
//             <option value="">Birthday</option>
//             <option value="">Anniversary</option>
//           </select>
//         </div>
//       <div className="btnReceive">
//           <button type="submit" aria-label="On Click">
//     Make your reservation
//   </button>
//         {/* <input aria-label="On Click" type="submit" value={"Make your reservation"} /> */}
//       </div>

//       </fieldset>
//     </form>
//       </section>
//     </header>
//   )
// };

// export default BookingForm;

import "../style/BookingForm.css";
import React, { useState } from "react";

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // WALIDACJA: sprawdź, czy wszystkie pola są wypełnione
    if (!date || !times || !guests || !occasion) {
      alert("Please fill in all fields before submitting the reservation.");
      return;
    }

    // Przekazanie danych dalej
    props.SubmitForm({
      date,
      times,
      guests,
      occasion,
    });
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <header className="bookingFormHeader">
      <section className="bookingFormSection">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className="formDate">
              <label className ="formDateLabel" htmlFor="book-date">Choose Date:</label>
              <input
                type="date"
                id="book-date"
                value={date}
                required
                onChange={(e) => handleChange(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="book-time">Choose Time:</label>
              <select
                id="book-time"
                value={times}
                required
                onChange={(e) => setTimes(e.target.value)}
              >
                <option value="">Select Time</option>
                {props.availableTimes.availableTimes.map((availableTime) => (
                  <option key={availableTime} value={availableTime}>
                    {availableTime}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="book-guests">Number of Guests:</label>
              <input
                id="book-guests"
                type="number"
                min="1"
                value={guests}
                required
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="book-occasion">Occasion:</label>
              <select
                id="book-occasion"
                value={occasion}
                required
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option value="">Select Occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </select>
            </div>

            <div className="btnReceive">
              <button type="submit" aria-label="On Click">
                Make your reservation
              </button>
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
