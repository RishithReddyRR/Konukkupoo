import { createReducer } from "@reduxjs/toolkit";

export const newOrderReducer=createReducer({},{
    CREATE_ORDER_REQUEST:(state,action)=>{
        state.loading=true
    },
    CREATE_ORDER_SUCCESS:(state,action)=>{
        state.loading=false;
        state.order=action.payload
    },
    CREATE_ORDER_FAIL:(state,action)=>{
        state.loading=false;
        state.error=action.payload
    },
    CLEAR_ERRORS:(state,action)=>{
        state.error=null
    }
})
export const myOrderReducer=createReducer({orders:[]},{
   
    MY_ORDERS_REQUEST:(state,action)=>{
        state.loading=true;
    },
    MY_ORDERS_SUCCESS:(state,action)=>{
        state.loading=false;
        state.orders=action.payload
    },
    MY_ORDERS_FAIL:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
    },
  
    CLEAR_ERRORS:(state,action)=>{
        state.error=null
    }
})

export const allOrdersReducer=createReducer({orders:[]},{
    ALL_ORDERS_REQUEST:(state,action)=>{
        state.loading=true;
    },
    ALL_ORDERS_SUCCESS:(state,action)=>{
        state.loading=false;
        state.orders=action.payload
    },
    ALL_ORDERS_FAIL:(state,action)=>{
        state.loading=false;
        state.error=action.payload
    },
    CLEAR_ERRORS:(state,action)=>{
        state.error=null
    }
})


export const orderReducer=createReducer({},{
    UPDATE_ORDER_REQUEST:(state,action)=>{
        state.loading=true;
    },
    UPDATE_ORDER_SUCCESS:(state,action)=>{
        state.loading=false;
        state.isUpdated=action.payload;
    },
    UPDATE_ORDER_FAIL:(state,action)=>{
        state.loading=false;
        state.error=action.payload
    },
    UPDATE_ORDER_RESET:(state,action)=>{
        state.isUpdated=false;
    },
    DELETE_ORDER_REQUEST:(state,action)=>{
        state.loading=true;
    },
   DELETE_ORDER_SUCCESS:(state,action)=>{
        state.loading=false;
        state.isDeleted=action.payload;
    },
    UPDATE_ORDER_FAIL:(state,action)=>{
        state.loading=false;
        state.error=action.payload
    },
    UPDATE_ORDER_RESET:(state,action)=>{
        state.isDeleted=false;
    },
    CLEAR_ERRORS:(state,action)=>{
        state.error=null
    }

})

export const orderDetailsReducer=createReducer({order:{}},{
    ORDER_DETAILS_REQUEST:(state,action)=>{
        state.loading=true
    },
    ORDER_DETAILS_SUCCESS:(state,action)=>{
        state.loading=false
        state.order=action.payload
    },
    ORDER_DETAILS_FAIL:(state,action)=>{
        state.loading=false
        state.error=action.payload
    },
    CLEAR_ERRORS:(state,action)=>{
        state.error=null
    }

})