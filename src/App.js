import React from 'react';

const api = {
  key : "608f126c97a1374eebdc3793767f22f8",
  base : "https://api.openweathermap.org/data/2.5"
}

function App() {

  const dateBuilder = (d) => {
    let months = ["Janvier", "Février", "Mars", "Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre",
    "Décembre"];
    let days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

    let day = days[d.getDay()];
    let date = d.getDay();
    let month = months[d.getMonths()];
    let year = d.getFullYear();

    return 
  }
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            ></input>
        </div>
        <div className="location-bar">
          <div className="location">Bègles, FR</div>
  <div className="date">{dateBuilder(new date())}</div>
        </div>
   
        
      </main>
      
        
    </div>
  );
}

export default App;
