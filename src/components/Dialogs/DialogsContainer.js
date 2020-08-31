import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { addMessage, updateMessage } from '../../redux/dialogsReducer';

let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsReducer.newMessageText,
        messages: state.dialogsReducer.messages,
        dialogsItems: state.dialogsReducer.dialogsItems
    }

}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         addMessage: () => {
//             dispatch(addMessage());
//         },
//         updateMessage: (newText) => {
//             dispatch(updateMessage(newText));
//         }
//     }
// }

const DialogsContainer = connect(mapStateToProps, {addMessage, updateMessage})(Dialogs);

export default DialogsContainer;