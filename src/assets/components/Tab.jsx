import { Button, Tabs ,Modal, Radio, message} from 'antd';
import React, { useState } from 'react';
import RecipeCrud from './RecipeCrud';
import Week1 from './Week1';
import Week2 from './Week2';
import Week3 from './Week3';
import Week4 from './Week4';




const Tab = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWeek,setSelectedWeek] = useState([])
  const [selectedRecipe, setSelectedRecipe] = useState([]);
  const [selectedRecipes1, setSelectedRecipes1] = useState([]);
  const [selectedRecipes2, setSelectedRecipes2] = useState([]);
  const [selectedRecipes3, setSelectedRecipes3] = useState([]);
  const [selectedRecipes4, setSelectedRecipes4] = useState([]);
  const [activeKey, setActiveKey] = useState('1');

  const handleRecipeSelect = (recipe) => {
   setSelectedRecipe((a)=>[...a,recipe])
  };
  

  

  const showModal = () => {
    if(selectedRecipe.length ==0) return message.error("select atleast one recipe first to add")
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (selectedRecipe.length > 0 && selectedWeek) {
      switch (selectedWeek) {
        case 'Week 1':
          setSelectedRecipes1((prevRecipes) => [...prevRecipes, ...selectedRecipe]);
          message.success("Added Succesfully")
          setActiveKey('2');
          break;
          case 'Week 2':
            setSelectedRecipes2((prevRecipes) => [...prevRecipes, ...selectedRecipe]);
            message.success("Added Succesfully")
            setActiveKey('3');
            break;
            case 'Week 3':
              setSelectedRecipes3((prevRecipes) => [...prevRecipes, ...selectedRecipe]);
              message.success("Added Succesfully")
              setActiveKey('4');
              break;
              case 'Week 4':
                setSelectedRecipes4((prevRecipes) => [...prevRecipes, ...selectedRecipe]);
                message.success("Added Succesfully")
                setActiveKey('5');
          break;
        default:
          break;
      }
      
      setIsModalOpen(false);
      setSelectedRecipe([]);
      setSelectedWeek('');
    }
  };
  console.log('selectedWeek',selectedWeek)

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedRecipe([]);
    setSelectedWeek(null);
  };
  const items = [
    {
      label: "All Meals",
      key: "1",
      children: <RecipeCrud onRecipeSelect={handleRecipeSelect}  selectedRecipe={selectedRecipe}/>,
      
    },
    {
      label: "Week 1",
      key: "2",
      children:  <Week1 selectedRecipes={selectedRecipes1} />
    },
    {
      label: "Week 2",
      key: "3",
      children: <Week2  selectedRecipes={selectedRecipes2}/>
    },
    {
      label: "Week 3",
      key: "4",
      children: <Week3   selectedRecipes={selectedRecipes3}/>
    },
    {
      label: "Week 4",
      key: "5",
      children: <Week4  selectedRecipes={selectedRecipes4}/>
    },
    {
      label: <Button   onClick={showModal}>Add To Week</Button>,
      key: "6",
      children: <Modal
      title="Select Week"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>Select the week you want to add the recipe to:</p>
      <div className="buttons">
        
      <div className="buttons">
            <button className={`week-button ${selectedWeek === 'Week 1' ? 'selected' : ''}`} onClick={() => setSelectedWeek('Week 1')}>Week 1</button>
            <button className={`week-button ${selectedWeek === 'Week 2' ? 'selected' : ''}`} onClick={() => setSelectedWeek('Week 2')}>Week 2</button>
            <button className={`week-button ${selectedWeek === 'Week 3' ? 'selected' : ''}`} onClick={() => setSelectedWeek('Week 3')}>Week 3</button>
            <button className={`week-button ${selectedWeek === 'Week 4' ? 'selected' : ''}`} onClick={() => setSelectedWeek('Week 4')}>Week 4</button>
          </div>
      </div>
      
    </Modal>
    }
  ];
  return (
    <div>
    <div className='banner'>

    </div>
    <div className='container' style={{ padding: "1.5rem" }}>
      <h1>All Meals</h1>
    </div>
    <Tabs
activeKey={activeKey}
onChange={setActiveKey}
  defaultActiveKey="1"
  centered
  items={items}
  
/>
  </div>
  );
}

export default Tab;

