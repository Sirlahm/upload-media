import React from 'react'
import {connect} from 'react-redux'

import {size} from 'lodash'
import UploadProgress from '../upload-progress/uploadProgress'

import {setUploadFile} from '../../redux/upload/upload.action'
import './input.css'

 



class Input extends React.Component {
    constructor() {
        super()

        this.state = {
            imagePreview: false,
            check : true
        }
    }

    
handleChange= (e) => {
           this.setState({imagePreview:true})
            this.props.setUploadFile(e.target.files)
            this.setState({check:false})
}



        render() {

            return(
            <div className={'inputBox'}>
                    {this.state.imagePreview? 
                    null :
                    <div>
                        <label htmlFor="file" className='input'>+Add Media</label>
                        <input multiple onChange={this.handleChange} className='hide input' type="file" id={"file"}/>
                    </div>
                    }

                    {this.state.imagePreview ?<div className={'imagebox'}>
                        <UploadProgress/>
                        <div>
                        <label htmlFor="file" className='input'>{size(this.props.fileProgress) ?'+Add More':'+Add Media'}</label>
                        <input multiple onChange={this.handleChange} className='hide input' type="file" id={"file"}/>
                    </div>
                    </div>: null}

            </div>
         
                )
                }
}

const mapStateToProps = state => ({
  fileProgress: state.uploadReducer.fileProgress
})


const mapDispatchToProps = dispatch => ({
  setUploadFile: files => dispatch(setUploadFile(files))
})

export default connect(mapStateToProps,mapDispatchToProps)(Input)