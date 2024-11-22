import  { createContext, useEffect, useState } from 'react'
import { products } from '../assets/assets.js'


export const StoreContext = createContext(null)



const StoreContextProvider = (props) => {
//filter item
    const [category,setCategory] =useState([])
    const [subCategory,setSubCategory]=useState([]);
    const [filterProducts,setFilterProducts]=useState([]);
    const [sortType,setSortType] =useState("relavent")
    const [search,setSearch] =useState('')
    const [visible,setVisible] =useState(false)


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

    if (search.length>0) {
      productsCopy =productsCopy.filter(item =>  item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if (category.length>0) {
        productsCopy=productsCopy.filter(item=>category.includes(item.category));
    }
    if (subCategory.length>0) {
      productsCopy=productsCopy.filter((item)=>subCategory.includes(item.subCategory));
    }
    setFilterProducts(productsCopy)
  } ;

  //sort Product
  const sortProducts =()=>{
    let fpCopy =filterProducts.slice();

    switch (sortType) {
      case "low-to-high":
        setFilterProducts(fpCopy.sort((a,b)=>a.price-b.price));
        break;
      case "high-to-low" :
        setFilterProducts(fpCopy.sort((a,b)=>b.price-a.price));
        break;

      case "newest":
        setFilterProducts(fpCopy.sort((a,b)=> new Date(b.date)- new Date(a.date)))
        break;
      default:
        applyFilter();
        break;
    }
  }

  //sort Search 
  
  

 

  
  const delivery_fee =10;   
    

    const contextValue ={
        products,delivery_fee,
        category,setCategory,toggleCategory,
        toggleSubCategory,
        subCategory,setSubCategory,
        applyFilter,setFilterProducts,
        filterProducts,
      sortProducts,
        setSortType,
        sortType,search,setSearch,
        visible,setVisible
        
    }
  
    return (
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
        )
}

export default StoreContextProvider