import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, Col, Flex, Image, message, Rate, Row } from 'antd';

const RecipeCrud = ({onRecipeSelect,selectedRecipe}) => {
    const [recipes, setRecipes] = useState([]);
    console.log('selectedRecipe',selectedRecipe)
    const fetchRecipes = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/recipes');
            if (response.status === 200) setRecipes(response.data.recipes);
        } catch (error) {
            console.log(error);
            message.error('Error in getting recipes');
        }
    };

    useEffect(() => {
        fetchRecipes();
    }, []);

    return (
        <section style={{ padding: "4rem 0" }}>
            <div className="container">
                <div className="cards" style={{ display: 'flex', flexWrap: 'wrap', gap: '45px', justifyContent: 'center' }}>
                    {recipes.map((recipe, i) => (
                        <Card
                            key={i}
                            hoverable
                            className={selectedRecipe.includes(recipe) ? 'active_card' : ''}
                            onClick={() => onRecipeSelect(recipe)}
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
    );
};

export default RecipeCrud;
