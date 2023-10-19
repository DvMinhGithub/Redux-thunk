import { retrieveProductsDB } from '@/services'
import {
  ADD_PRODUCT,
  ADD_PRODUCT_OK,
  ADD_PRODUCT_ERROR,
  BEGIN_PRODUCTS_DOWNLOAD,
  PRODUCTS_DOWNLOAD_OK,
  PRODUCTS_DOWNLOAD_ERROR,
  RETRIEVE_PRODUCT_DELETE,
  PRODUCT_DELETED_OK,
  PRODUCT_DELETED_ERROR,
  RETRIEVE_PRODUCT_EDIT,
  BEGIN_EDIT_PRODUCT,
  PRODUCT_EDITED_OK,
  PRODUCT_EDITED_ERROR
} from '../types'
import Swal from 'sweetalert2'



// Download products actions
const downloadProducts = () => ({
  type: BEGIN_PRODUCTS_DOWNLOAD,
  payload: true
})

const downloadProductsOk = products => ({
  type: PRODUCTS_DOWNLOAD_OK,
  payload: products
})

const downloadProductsError = () => ({
  type: PRODUCTS_DOWNLOAD_ERROR,
  payload: true
})

export function retrieveProductsAction() {
  return async (dispatch) => {
    dispatch(downloadProducts())
    try {
      const { data } = await retrieveProductsDB()
      dispatch(downloadProductsOk(data))
    } catch (error) {
      dispatch(downloadProductsError())
    }
  }
}