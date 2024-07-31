import React from 'react'
import {Card, Flex, Rate } from 'antd'


const Week2 = ({selectedRecipes}) => {
  return (
    <>
   <section style={{ padding: "4rem 0" }}>
            <div className="container">
                <div className="cards" style={{ display: 'flex', flexWrap: 'wrap', gap: '45px', justifyContent: 'center' }}>
                    {selectedRecipes.map((recipe, i) => (
                        <Card
                            key={i}
                           
                           
                          
                            style={{ width: 320, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '50px', borderRadius: '10px' }}
                        >
                            <img
                                alt={recipe.name}
                                src={recipe.image || 'https://cdn.dummyjson.com/recipe-images/1.webp'}
                                style={{ width: '100%', height: "190px", objectFit: 'cover', borderRadius: '15px' }}
                            />
                            <h3 style={{ marginBottom: "4px" }}>{recipe.name || 'Recipe Name'}</h3>
                            <p className='text' style={{ overflowWrap: 'break-word', marginTop: "0px", marginBottom: "8px" }}>
                                {recipe.description || 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt mollitia ipsam possimus maxime optio aspernatur, sequi corporis accusamus facere veniam, soluta dicta quam. Est nostrum nobis magnam quibusdam nec'}
                            </p>
                            <div className="footer" style={{ marginTop: '-15px !important' }}>
                                <Flex justify='space-between' align='center' wrap="wrap">
                                    <div>
                                        <p style={{ margin: "0px" }}>Cuisine: {recipe.cuisine || 'Unknown'}</p>
                                    </div>
                                    <div>
                                        <div className="rating" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                            <div>
                                                <h5 style={{ margin: "0px" }}>Ratings: {recipe.rating || 'N/A'}</h5>
                                            </div>
                                            <div>
                                                <Rate allowHalf defaultValue={3.5} count={4} />
                                            </div>
                                        </div>
                                    </div>
                                </Flex>
                            </div>
                            {/* <Button onClick={() => onRecipeSelect(recipe)}>Select</Button> */}
                        </Card>
                    ))}
                </div>
            </div>
        </section>
 </>
  )
}

export default Week2
