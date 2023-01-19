import '../css/style.css'
import '../css/buyerinfo.css'
import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Footer from '../Components/Footer'
import Sellerheader from '../Components/Sellerheader'
import { imageUpload, saveProductAction } from '../slices/ProductSlice'

export function AddProducts() {
  const items = JSON.parse(localStorage.getItem('auth._token.local'));
  var userId = items.user_id;
  const products=useSelector((state)=>state.product.products)
  const productImgUrl=useSelector((state)=>state.product.productImageUrl);

  const [productname,setproductName]=useState('')
  var   [productgender,setProductGender]=useState('')
  var   [petage,setPetAge]=useState('')
  const [petcategory,setPetCategory]=useState('1')
  const [producttype, setProducttype] = useState("")
  const [productprice, setProductprice] = useState("")
  const [productquantity, setProductquantity] = useState("")
  const [productsdesc, setProductdesc] = useState("")
  const [selectedFile,setSelectedFile]=useState(null)

  const dispatch=useDispatch();debugger

  const onFileChange=(evt)=>{debugger
       setSelectedFile(evt.target.files[0]);debugger
       const formData=new FormData();debugger

       formData.append('file',evt.target.files[0],evt.target.files[0].name);debugger
      dispatch(imageUpload(formData));debugger   
  }

  const submitData=()=>{
      if(petcategory==='2' || petcategory==='3'){
         productgender='null';
         petage='0'
      }
      
      console.log(productImgUrl)
      if(productImgUrl===null){
        alert('Image Required To Be Selected')
      }

      let productinfo={
        seller_id:userId,
        product_name:productname,
        pet_gender:productgender,
        pet_age:petage,
        category_id:petcategory,
        product_type:producttype,
        product_price:productprice,
        product_total_quantity:productquantity,
        product_description:productsdesc,
        image_url:productImgUrl,
        in_stock:'1'
      }
      console.log(productinfo);debugger

      if(productinfo.product_name!=="" && productinfo.pet_gender!=="" && productinfo.pet_age!=="" && productinfo.category_id!=="" && productinfo.product_type!=="" && productinfo.product_price!=="" && productinfo.product_total_quantity!=="" && productinfo.product_description!=="")
     {
        dispatch(saveProductAction(productinfo));debugger
     }   
    else{
        alert("Please fill all the Fields")
    }
  };debugger
  return(
    <div>
        
        <Sellerheader/>
        
        <div className="fcontainer">
            <div>
                 <div className="delivery-addr">
                    <p>Add Products</p>
                 </div>

                 <div>
                      <h3>
                        Please select image!
                      </h3>
                      <div>
                          <input className="imgbox" type="file" onChange={(evt)=>onFileChange(evt)}  name="file" />
                        {/*                       
                          <button onClick={()=> onFileUpload()}>
                            Upload!
                          </button> */}
                      </div>
                    {/* {()=>fileData()} */}
                 </div>


                <br/>
                <label>Product Name</label>
                <input className="inputbox" value={productname} onChange={(evt)=>setproductName(evt.target.value)}  type="text" placeholder='Product Name'/>

                <label>Pet Gender</label>
                    <select className="inputbox" value={productgender} onChange={(evt)=>setProductGender(evt.target.value)}>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                        <option value='None'>None</option>
                </select>
                
                <label>Pet Age</label>
                <input className="inputbox" value={petage} onChange={(evt)=>setPetAge(evt.target.value)} type="number" placeholder='Pet age'/>

                <label>Pet Category</label>
                <select className="inputbox" value={petcategory} onChange={(evt)=>setPetCategory(evt.target.value)}>
                        <option value='1'>1 - Pet</option>
                        <option value='2'>2 - Food</option>
                        <option value='3'>3 - Accessories</option>
                    </select>

                <label>Product Type</label>
                <input className="inputbox" value={producttype} onChange={(evt)=>setProducttype(evt.target.value)}  type="text" placeholder='Eg. Cat or Food or Accessories'/>

                <label>Product Price</label>
                <input className="inputbox" value={productprice} onChange={(evt)=>setProductprice(evt.target.value)} type="number" placeholder='Product Price'/>

                <label>Product Total Quantity</label>
                <input className="inputbox" value={productquantity} onChange={(evt)=>setProductquantity(evt.target.value)}  type="number" placeholder='Product total quantity'/>

                <label>Product Description</label>
                <input className="inputbox" type="text"  value={productsdesc} onChange={(evt)=>setProductdesc(evt.target.value)} placeholder='Description about product'/>

                {/* <button onClick={()=>{navigate("/orderconfirmed",{})}} type="submit" className="addrBtn">Submit</button> */}

                <button type="submit" className="addrBtn" onClick={()=>submitData()}>Add Product</button>

             </div>
        </div>
                    

           <Footer/>
    </div>
)
}
