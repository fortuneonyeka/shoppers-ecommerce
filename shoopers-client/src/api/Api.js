import axios from "axios"


export async function productData(){
      try {
            const products = await axios.get("https://fakestoreapiserver.reactbd.com/walmart");
            const data = products.data
      return data
      } catch (error) {
            console.log(error);
      }
}