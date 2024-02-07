import {configureStore} from "@reduxjs/toolkit"
import shoppersReducer from "../features/shopperSlice"

export const store = configureStore ({
      reducer:{shopper: shoppersReducer},
}) 