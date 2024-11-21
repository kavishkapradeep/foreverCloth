import  { createContext, useEffect, useState } from 'react'
import { products } from '../assets/assets.js'


export const StoreContext = createContext(null)



const StoreContextProvider = (props) => {
//filter item
    const [category,setCategory] =useState([])
    const [subCategory,setSubCategory]=useState([]);
    const [filterProducts,setFilterProducts]=useState([]);

  const toggleCategory=(e)=>{
    if (category.includes(e.target.value)) {
        setCategory(prev=>prev.filter(item=>item !==e.target.value))
        
    } else {
      setCategory(prev=>[...prev,e.target.value])
    }
  }
  

  const toggleSubCategory =(e)=>{
    if (subCategory.includes(e.target.value)) {
        setSubCategory(prev=>prev.filter(item=>item !==e.target.value))
    } else {
      setSubCategory(prev=>[...prev,e.target.value])
    }
  }
  
  const applyFilter =()=>{
    let productsCopy = products.slice();
    if (category.length>0) {
        productsCopy=productsCopy.filter(item=>category.includes(item.category));
    } else {
     console.log("Error");
      
    }
    if (subCategory.length>0) {
      productsCopy=productsCopy.filter((item)=>subCategory.includes(item.subCategory));
    }
    setFilterProducts(productsCopy)
  } ;

  

 

  
  const delivery_fee =10;   
    

    const contextValue ={
        products,delivery_fee,
        category,setCategory,toggleCategory,
        toggleSubCategory,
        subCategory,setSubCategory,
        applyFilter,setFilterProducts,
        filterProducts
        
    }
  
    return (
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
        )
}

export default StoreContextProvider