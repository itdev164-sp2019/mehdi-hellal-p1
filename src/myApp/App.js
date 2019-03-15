import React , { Component }from 'react'

import Recipe from './Recipe'
import NavBar from '../components/NavBar/NavBar'
import { Image } from 'rebass'
import { boxiconsLogos } from 'styled-icons';


//import ShowRecipe from './Forms/Show-Recipe'





class App extends Component {
  
    constructor(props){
        super(props);        
        this.selectNewRecipe = this.selectNewRecipe.bind(this);
        this.state = {
            recipes:[{
                title :"Bacon Cheeseburger Pasta",
                ingredients:["8 bacon strips, chopped","2 pounds ground beef","1/2 large red onion, chopped","12 ounces uncooked spiral pasta","4 cups chicken broth", "2 cans (15 ounces each) crushed tomatoes","1 can (8 ounces) tomato sauce","1 cup water", "1/4 cup ketchup", "3 tablespoons prepared mustard", "2 tablespoons Worcestershire sauce","1/4 teaspoon salt", "1/4 teaspoon pepper", "2 cups shredded cheddar cheese, divided", "1/3 cup chopped dill pickle" ],
                steps:["In a 6-quart stockpot, cook bacon over medium heat, stirring occasionally, until crisp, 6-8 minutes. Remove with a slotted spoon; drain on paper towels. Discard drippings.",
                "In the same pot, cook ground beef and onion over medium heat until meat is no longer pink, breaking into crumbles, 6-8 minutes; drain. Add the next ten ingredients; bring to a boil. Reduce heat; simmer, covered, until pasta is al dente, stirring occasionally, about 10 minutes.",
                "Stir in 1 cup cheese, pickle and bacon; cook and stir until cheese is melted. Serve with remaining cheese and, if desired, tomatoes, lettuce, pickles and red onions."
            ],
                id:"Pasta",
                image: ["https://www.tasteofhome.com/wp-content/uploads/2018/06/One-Pot-Bacon-Cheeseburger-Pasta_EXPS_BFBZ19_212580_B01_17_4b-696x696.jpg"]
            },
            {
                title:"Homemade Pizza",
                ingredients:["1 package (1/4 ounce) active dry yeast","1 teaspoon sugar","1-1/4 cups warm water (110° to 115°)", "1/4 cup canola oil", "1 teaspoon salt", "3-1/2 cups all-purpose flour", "1/2 pound ground beef",
                "1 small onion, chopped", "1 can (15 ounces) tomato sauce", "3 teaspoons dried oregano", "1 teaspoon dried basil", "1 medium green pepper, diced", "2 cups shredded part-skim mozzarella cheese"],
                steps:["In large bowl, dissolve yeast and sugar in water; let stand for 5 minutes. Add oil and salt. Stir in flour, a cup at a time, until a soft dough forms.",
                "Turn onto floured surface; knead until smooth and elastic, about 2-3 minutes. Place in a greased bowl, turning once to grease the top. Cover and let rise in a warm place until doubled, about 45 minutes. Meanwhile, cook beef and onion over medium heat until no longer pink; drain.",
                "Punch down dough; divide in half. Press each into a greased 12-in. pizza pan. Combine the tomato sauce, oregano and basil; spread over each crust. Top with beef mixture, green pepper and cheese.",
                "Bake at 400° for 25-30 minutes or until crust is lightly browned."],
                id:"Pizza",
                image: ["https://www.tasteofhome.com/wp-content/uploads/2018/04/exps376_DOAD1630301D07.jpg"]

            },
            {
                title:"Cast-Iron Skillet Steak",
                ingredients:["1 tablespoon kosher salt, divided", "1 beef NY strip or ribeye steak (1 pound), 1-inch thick"],
                steps:["Remove steak from refrigerator and sprinkle with 2 teaspoons salt; let stand 45-60 minutes.",
                       "Preheat a cast-iron skillet over high heat until extremely hot, 4-5 minutes. Sprinkle remaining 1 teaspoon salt in bottom of skillet; pat beef dry with paper towels. Place steak into skillet and cook until steak is easily moved, 1-2 minutes; flip, placing steak in a different section of the skillet. Cook 30 seconds and then begin moving steak, occasionally pressing slightly to ensure even contact with skillet.", 
                        "Continue turning and flipping until cooked to desired degree of doneness (for medium-rare, a thermometer should read 135°; medium, 140°; medium-well, 145°), 1-2 minutes."],
                id:"Steak",
                image:["https://www.tasteofhome.com/wp-content/uploads/2019/02/Cast-Iron-Skillet-Steak_EXPS_CIMZ19_235746_B01_15_10b-696x696.jpg"]

            },
            ],  
            selectedRecipe: null               
            
        }
   
        
    }
    selectNewRecipe(recipeId) {
        if(recipeId) {
          this.setState({
            ...this.state,
            selectedRecipe: recipeId
          });
        }
      }

    render (){
      
        let recipeToSelect;
        if(this.state.selectedRecipe) { 
          const filteredRecipes = this.state.recipes.filter((recipe) => recipe.id === this.state.selectedRecipe);  
          if(filteredRecipes.length > 0) { 
            recipeToSelect = filteredRecipes[0];
          }
        }
        return(
            <div className="App">
                     
                 
             
            <div/> 
           
        <aside className='sidebar'>
         
          <NavBar
            recipes={this.state.recipes}
            activeRecipe={this.state.selectedRecipe}
            recipeToSelect={this.selectNewRecipe}
          />
        </aside>
        <div className="row">
        {
          recipeToSelect ? 
            <Recipe
            ingredients={recipeToSelect.ingredients}
            steps={recipeToSelect.steps}
            title={recipeToSelect.title}
            image={recipeToSelect.image}
           
            />
            :
            null
        }
        </div>
      </div>
        )
           
        
    }
    componentDidMount() {
        const recipeToShow = this.state.recipes[0].id || null;
        this.setState({
          ...this.state,
          selectedRecipe: recipeToShow
        });
      }
    

}

export default App

