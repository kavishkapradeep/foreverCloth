import  { createContext, useEffect, useState } from 'react'
import { products } from '../assets/assets.js'
import { toast } from 'react-toastify'


export const StoreContext = createContext(null)



const StoreContextProvider = (props) => {
//filter item
    const [category,setCategory] =useState([])
    const [subCategory,setSubCategory]=useState([]);
    const [filterProducts,setFilterProducts]=useState([]);
    const [sortType,setSortType] =useState("relavent")
    const [search,setSearch] =useState('')
    const [visible,setVisible] =useState(false)
    const [sizes,setSizes]=useState('')
    const [productData,setProductData]= useState(false)
    const [cartItem,setCartItems]= useState({});
    const [cartData,setCartData] =useState([]);

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

  //cart data

  const addToCart = async (itemId,size)=>{

    if (!sizes) {
      toast.error("select Product  size")
      return;
    }

    let cartData =structuredClone(cartItem);

    if (cartData[itemId]) {
      if (cartData[itemId][sizes]) {
        cartData[itemId][sizes]+=1;
        toast.success("Item Added")
      } else {
        cartData[itemId][sizes]=1;
        
      }
    } else {
      cartData[itemId] ={};
      cartData[itemId][sizes]=1;
      toast.success("item added")
    }
    setCartItems(cartData)
  }

    //get count
    const getCartCount = () => {
      let totalCount = 0;
  
     for (const items in cartItem) {
        for (const item in cartItem[items]) {
           try {
              if (cartItem[items][item]>0) {
                totalCount += cartItem[items][item];
              }
           } catch (error) {
             console.log(error);
             
           }
          
        }
      
     }
  
      return totalCount;
  };
  
  


  //updateQuantity
  const updateQuantity = (itemId, sizes, quantity) => {
     let cartData = structuredClone(cartItem);
     cartData[itemId][sizes] = quantity;

     setCartItems(cartData)
};


  useEffect(()=>{
    console.log(cartItem);
    
  },[cartItem])

 //get cart amount 
 const getCartAmount =  ()=>{
    let totalAmount = 0;
    for(const items in cartItem){
       let itemInfo = products.find((product)=>product._id === items);
       for(const item in cartItem[items]){
          try {
            if (cartItem[items][item]) {
              totalAmount +=itemInfo.price *cartItem[items][item];
            }
          } catch (error) {
            
          }
       }
    }
    return totalAmount;
 }

  
  const delivery_fee =10;   
    

    const contextValue ={
        products,delivery_fee,
        category,setCategory,toggleCategory,
        toggleSubCategory,
        subCategory,setSubCategory,
        applyFilter,setFilterProducts,
        filterProducts,cartItem,setCartItems,
      sortProducts,addToCart,
        setSortType,productData,setProductData,
        sortType,search,setSearch,
        visible,setVisible,sizes,setSizes,
        getCartCount,cartData,setCartData,
        updateQuantity,getCartAmount
        
    }
  
    return (
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
        )
}

export default StoreContextProvider