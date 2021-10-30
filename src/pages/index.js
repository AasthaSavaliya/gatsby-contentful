import * as React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <h1>Pizza</h1>
    <p>Step 1: Prepare the pizza dough. 
    Take a dough kneading plate and add all-purpose flour to it. Next, add salt and baking powder in it 
    and sieve the flour once. Then, make a well in the centre and add 1 teaspoon of oil to it. On the other
     hand, take a little warm water and mix the yeast in it along with 1 teaspoon of sugar. Mix well and 
     keep aside for 10-15 minutes. The yeast will rise in the meantime. Once the yeast has risen, add it to 
     the flour knead the dough nicely using some water. Keep this dough aside for 4-6 hours. Then knead the 
     dough once again. Now, the pizza dough is ready.</p>

    <p>Step 2: Prepare the pizza base
    Preheat the oven at 180 degree Celsius. Now, is the time to make the pizza base when the dough is ready. 
    Dust the space a little using dry flour and take a large amount of the pizza dough. Using a rolling pin,
     roll this dough into a nice circular base. (Note: Make sure that the circular base is even at all ends.) Once you have made the base, use a fork and prick the base with it so that the base doesn't rise and gets baked nicely. Put it into the preheated oven and bake it 10 minutes. Now, your pizza base is ready.</p>

    <p>Step 3: Chop all the vegetables for the pizza
    Now, wash the capsicum and slice it thinly in a bowl. Then, peel the onions and cut thin slices of it as
     well in another bowl. And finally, cut tomatoes and mushrooms in the same manner. However, make sure 
     that those tomatoes have less juice in them. Once all the veggies are done, Now, grate the processed 
     and mozzarella cheese in separate bowls.</p>

    <p>Step 4: Spread the sauce and veggies on the base
    Then, take the fresh pizza base and apply tomato ketchup all over. Spread half the processed cheese 
    all over the base and evenly put the veggies all across the base. Once you have put all the veggies,
     put a thick layer of mozzarella cheese.</p>

    <p>Step 5: Bake the pizza at 250 degree Celsius for 10 minutes
    Put this pizza base in a baking tray and place it inside the oven. Let the pizza bake 10 minutes at 
    250 degree Celsius. Once done, take out the baking tray and slice the pizza. Sprinkle oregano and chilli 
    flakes as per your taste and serve hot. (Note: Make sure that the oven is preheated at 250 degree
     Celsius for 5 minutes at least.)</p>
    <p>
      <Img fluid={data.pizzaGatsbyImage.childImageSharp.fluid}/>
    </p>
    <h1>Quessadilla</h1>
    <p>
    Heat the tortillas until air pockets form:
    Heat a large skillet (cast iron works great) on medium high heat. Add a small amount of oil 
    (about 1/2 teaspoon) and spread it around the bottom of the pan with a spatula (you could use butter
     as well).

    Take one large flour tortilla and place it in the pan. Flip the tortilla over a few times, 10 seconds
     between flips. Air pockets should begin to form within the tortilla.

    Add cheese and other ingredients:
    When pockets of air begin to form, take a handful of grated cheese, sprinkle over the top of the 
    tortilla, making sure that the cheese does not land on the pan itself.

    Add whatever additional ingredients you choose - green onion, sliced mushrooms, olives, tomatoes, etc. 
    If you would like your quesadilla to be a chicken quesadilla, add some diced cooked chicken.

    Take care not to layer on the ingredients too thickly - this is a quesadilla, not a quiche!

    Lower heat and cover pan:
    Reduce the heat to low and cover the pan. The pan should be hot enough by now to have plenty of residual
     heat to melt the cheese and brown the tortilla. If the quesadilla begins to smoke too much, remove from
      the heat.

    After a minute, check to see if the cheese is melted. If not, return the cover and keep checking every
     minute until the cheese is melted.

    Remove quesadilla from pan and cut into wedges:
    To make the lettuce to accompany the quesadilla, thinly slice some iceberg lettuce. Sprinkle some cider
     vinegar on it and some salt.

    Serve with the lettuce, salsa, sour cream, and guacamole.

    </p>
    <p>
    <Img fluid={data.quessadillaGatsbyImage.childImageSharp.fluid}/>
    </p>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    pizzaGatsbyImage: file(relativePath: {eq: "pizza.png"}) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    quessadillaGatsbyImage: file(relativePath: {eq: "quessadilla.png"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
}`