import uploadFileTypes from './upload.types'
import axios from 'axios'

export const removeUploadedIitem = (item) => ({
    type:  uploadFileTypes.REMOVE_UPLOADED_ITEM,
    payload: item

})



export const setUploadFile = data =>( {
    type: uploadFileTypes.SET_UPLOAD_FILE,
    payload: data
})

export const setUploadProgress = (id,progress) => ({
    type: uploadFileTypes.SET_UPLOAD_PROGRESS,
    payload: {
        id,
        progress
    }

})

export const successUploadFile = id =>({
    type: uploadFileTypes.SUCCESS_UPLOAD_FILE,
    payload:id
})
export const failureUploadFile = id => ({
    type: uploadFileTypes.FAILURE_UPLOAD_FILE,
    payload: id
})

export const uploadFile = files => dispatch => {
    
    if(files.length) {
        files.forEach(async (file) => {
            
            const formPayload = new FormData()
            formPayload.append('file',file.file)
            try {
                 axios ({
                    baseURL: 'http://localhost:5000',
                    url:'/file',
                    method:'post',
                    data:formPayload,
                    cancelToken:file.cancelSource.token,
                    onUploadProgress: progress => {
                        console.log(progress)
                        const {loaded, total} = progress
                        const percentageProgress = Math.floor((loaded/total) * 100)
                        dispatch(setUploadProgress(file.id, percentageProgress))
                    }
                })
                dispatch(successUploadFile(file.id))
            } catch (err) {
                if(axios.isCancel(err)) {
                    console.log(err.message)
                }
                // dispatch(failureUploadFile(file.id))
            }
      
        })
    }
}

