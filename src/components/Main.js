import React, { useReducer } from "react";
import { Route, Routes, useNavigate} from "react-router-dom";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import { useLocation } from "react-router-dom";
import { useEffect} from "react";
import Home from "./Home";

const Main =()=>{

 const location = useLocation();

useEffect(() => {
  if (location.hash) {
    const element = document.querySelector(location.hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
}, [location]);


  const seedRandom = function(seed){
    var m = 2**35 -31;
    var a = 185852;
    var s = seed % m;
    return function(){
      return(s = s*a%m)/m;
    }
  }

  // fetchAPI(date) - Ta funkcja przyjmuje datę jako parametr i zwraca tablicę dostępnych czasów rezerwacji dla podanej daty 
  const fetchAPI = function(date){
    let result = [];
    let random = seedRandom(date.getDate());
    for (let i=17; i<=23; i++){
      if(random() < 0.5){
        result.push(i + ":00");
      }
      if(random() > 0.5){
        result.push(i + ":30");
      }
    }
    return result;

  }

  // submitAPI(formData) - Ta funkcja akceptuje dane formularza rezerwacji jako parametr i zwraca wartość true, jeśli dane zostały pomyślnie przesłane.
  const submitAPI = function(formData){
    return true;
  }

  const initialTimes = {availableTimes: fetchAPI(new Date())};
  const[state, dispatch] = useReducer(updateTimes, initialTimes);

  function updateTimes(state, date){
    return {availableTimes: fetchAPI(new Date())}
  }

  const navigate = useNavigate();
  
  function submitForm(formData){
    if(submitAPI(formData)){
      navigate("/confirmed")
    }
  }
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>}></Route>
        <Route path="/confirmed" element={<ConfirmedBooking/>}></Route>
        
      </Routes>

    </main>
  )
};


export default Main;