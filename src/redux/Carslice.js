import { createSlice } from "@reduxjs/toolkit";


const cartslice = createSlice({
    
        name: "cart",
        initialState: {
            totalItem: 0,
            totalPrice: 0,
            items: []
        },
        
        reducers:{
            addtocart:(state, {payload}) =>{
                let product = state.items.find((each) => each.id == payload.id)

                if(product == undefined){
                    state.items.push(payload)
                }else{
                    product.qty = Number(product.qty) + 1;
                }
                state.totalItem++
                state.totalPrice = Number(state.totalPrice) + Number(payload.price)
            },

            increment: (state, {payload}) => {
             let product =  state.items.find(each => each.id == payload.id)
             product.qty++
             state.totalItem++
             state.totalPrice = Number(state.totalPrice) + Number(payload.price)
             },

             decrement: (state, {payload}) => {
              let product =  state.items.find(each => each.id == payload.id)
              product.qty--
              state.totalItem--
              state.totalPrice = Number(state.totalPrice) - Number(payload.price)
              if (product.qty == 0){
                let remainingProduct = state.items.filter((each) => each.id != payload.id)
                state.items = remainingProduct
              }
              }

        }
    
})
export default cartslice.reducer
export const {addtocart, increment, decrement} = cartslice.actions