import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {size,toArray} from 'lodash'


import UploadItem from '../upload-item/uploadItem'
import './uploadProgress.css'
import { uploadFile } from '../../redux/upload/upload.action'

const UploadProgress = props => {
    const {fileProgress,uploadFile} = props
  
    const uploadedFileAmt = size(fileProgress)

useEffect(() => {
    const fileToUpload = toArray(fileProgress).filter(file => file.progress === 0)
    
    uploadFile(fileToUpload)
},[uploadedFileAmt,fileProgress,uploadFile])

    return uploadedFileAmt > 0 ? (
        <div className={'wrapper'}>
            {size(fileProgress) ? toArray(fileProgress).map(file => (
                <UploadItem key={file.id} file={file} />
            )) : null}

        </div>
    ) : null
}

const mapStateToProps = state => ({
    fileProgress: state.uploadReducer.fileProgress
})

const mapDispatchToProps = dispatch => ({
    uploadFile: files => dispatch(uploadFile(files))
})

export default connect(mapStateToProps,mapDispatchToProps)(UploadProgress)