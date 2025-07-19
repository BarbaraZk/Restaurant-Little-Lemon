import "../style/Menu.css";

import pic4 from "../pictures/chefs.jpg";
import pic5 from "../pictures/restaurantChef.jpg";
import Testimonial from "./Testimonial";

import recipes from "../recipes";



function Menu(){
  return(
    <>
    <main className="menu-container">

        <div className="menu-header" id="specials">
        <h1>This week specials</h1>
        <button>Order Menu</button>
        </div>
        <div className="cards">
          {recipes.map(recipe=><div key={recipe.id} className="menu-items" >
<img src={recipe.image} alt=""></img>
<div className="menu-content">
  <h3 className="heading">{recipe.title}</h3>
  <p >{recipe.price}</p>
  <p>{recipe.description}</p>
  <button className="orderBtn">Ordern now</button>
</div>

          </div>)}
        </div>
   
   <Testimonial/>
      <section className="about" id="about">
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

export default Menu;