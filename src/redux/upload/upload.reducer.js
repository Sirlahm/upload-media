import uploadFileTypes from './upload.types'
import {modifyFiles} from './upload.utils'
import {toArray} from 'lodash'

const functionRemove = (arrItems,item) => {
  
    const arr = toArray(arrItems)
    const exist = arr.find(a => a.id === item.id)
    if(exist) {
        console.log(arr)
        const objAray = arr.filter(a => a.id !== item.id)
        const Obj = Object.assign({}, ...objAray.map(a => {
            return {[a.id]: {...a}}
        }))
        console.log(Obj)
        return Obj
    }

   return arrItems
}


// const functionRemove = (arrItems,item) => {
  
//     const arr = toArray(arrItems)
//     const exist = arr.find(a => a.id === item.id)
//     if(exist) {
//         return arr.filter(a => a.id !== item.id)
//     }

//     return arr
// }

const INTIAL_STATE = {
    fileProgress : {
        // 1:{
        //     id:1,
        //     file,
        //     progress
        // }
    }
}

const uploadReducer = (state=INTIAL_STATE, action) => {
    switch(action.type) {
        case uploadFileTypes.SET_UPLOAD_FILE : 
        return {
            ...state,
            fileProgress: {
                ...state.fileProgress,
                ...modifyFiles(state.fileProgress,action.payload)
            }
        }

        case uploadFileTypes.SET_UPLOAD_PROGRESS:
            return {
                ...state,
                fileProgress: {
                    ...state.fileProgress,
                    [action.payload.id]: {
                        ...state.fileProgress[action.payload.id],
                        progress: action.payload.progress
                    }
                }
            }


            case uploadFileTypes.SUCCESS_UPLOAD_FILE:
            return {
                ...state,
                fileProgress: {
                    ...state.fileProgress,
                    [action.payload]: {
                        ...state.fileProgress[action.payload],
                        status:1
                    }
                }
            }


             case uploadFileTypes.FAILURE_UPLOAD_FILE:
                    return {
                        ...state,
                        fileProgress: {
                            ...state.fileProgress,
                            [action.payload]: {
                                ...state.fileProgress[action.payload],
                                status:0,
                                progress:0
                            }
                        }
                    }

           case uploadFileTypes.REMOVE_UPLOADED_ITEM:
               return {
                   ...state,
                   fileProgress: functionRemove(state.fileProgress,action.payload)

               }
        default:
            return state
    }
}

export default uploadReducer