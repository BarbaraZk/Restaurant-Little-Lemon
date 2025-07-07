import "../style/Main.css";
import pic1 from "../pictures/greekSalad.jpg";
import pic2 from "../pictures/lemonDessert.jpg";
import pic3 from "../pictures/spagetti.jpg";
import pic4 from "../pictures/chefs.jpg";
import pic5 from "../pictures/restaurantChef.jpg";
import Testimonial from "./Testimonial";


function Main(){
  return(
    <>
    <main>

      <section className="highlight">
        <div className="highlight-header">
        <h1>This week specials</h1>
        <button>Online Menu</button>
        </div>
       

        <div className="specials-container">
           <div class="special">
          <img src={pic1} alt="" />
          <div className="order">
      <h3 className="specialMenu">Greek salat</h3><p className="price">12$</p>
          </div>
          
          <p className="description">The famous greek salad of crispy njwejfew fw</p>
          <p className="delivery">Order a deliver</p> 
        </div>
          <div class="special">
          <img src={pic2} alt="" />
          <div className="order">
      <h3 className="specialMenu">Greek salat</h3><p className="price">12$</p>
          </div>
          
          <p className="description">The famous greek salad of crispy njwejfew fw</p>
          <p className ="delivery">Order a deliver</p> 
        </div>
         <div class="special">
          <img src={pic3} alt="" />
          <div className="order">
      <h3 className="specialMenu">Greek salat</h3><p className="price">12$</p>
          </div>
          
          <p className="description">The famous greek salad of crispy njwejfew fw</p>
          <p className ="delivery">Order a deliver</p> 
        </div>
          
        </div>
       

      </section>
    <Testimonial/>
      <section className="about">
        <div className="description">
        <h1>Little Lemon Chicago</h1>
        <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region</p>
        </div>
        <div className="descriptionImage">
        <img src={pic5} alt="" className="pic5"/>
        <img src={pic4} alt=""className="pic4"/>
        </div>
       
      </section>
    </main>
    </>
  )
}

export default Main;