import React from 'react'
import {connect} from 'react-redux'
import {removeUploadedIitem} from '../../redux/upload/upload.action'
import './uploadItem.css'
import Image from '../image/image'

const generateBase64FromImage = imageFile => {
    const reader = new FileReader();
    const promise = new Promise((resolve, reject) => {
      reader.onload = e => resolve(e.target.result);
      reader.onerror = err => reject(err);
    });
  
    reader.readAsDataURL(imageFile);
    return promise;
  };

  class UploadItem extends React.Component {
    constructor() {
        super()

        this.state = {
            imagePreview: null
        }
    }


    componentDidMount() {
        console.log('handlechange')
        this.handleChange(this.props.file.file)
    }

handleChange= (file) => {
    if (file) {
       
        generateBase64FromImage(file)
          .then(b64 => {
            this.setState({ imagePreview: b64 });
            // this.props.setUploadFile(e.target.files)
          })
          .catch(e => {
            this.setState({ imagePreview: null });
          });
      }
}

cancelUpload =() => {
    this.props.file.cancelSource.cancel('cancelled by user')
}

        render() { 
            console.log(this.props.file)
            const {file,progress} = this.props.file
            
            return (
                <div className={'wrapperItem'}>
                    <Image imageUrl={this.state.imagePreview}/>
                    
            
                    
                    {progress<100?<div className={'leftSide'}>
                        <div className={'progressBar'}>
                            <div style={{width:`${progress}%`}}/>
        
                        </div>
                        <label className={'label'} htmlFor="">{file.name}</label>
                    </div>: <label className={'label1'} htmlFor="">{file.name}</label>}
            
                    <span  onClick={ () => {
                        
                        
                        this.cancelUpload()
                        this.props.removeUploadedIitem(this.props.file)
                        }} className={'cancel'}> x </span>
                        

                </div>
            )

         }
        
        
        }

        const mapDispatchToProps = dispatch => ({
            removeUploadedIitem: files => dispatch(removeUploadedIitem(files))
        })

export default connect(null,mapDispatchToProps)(UploadItem)