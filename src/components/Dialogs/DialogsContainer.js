import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { addMessage, updateMessage } from '../../redux/dialogsReducer';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsReducer.newMessageText,
        messages: state.dialogsReducer.messages,
        dialogsItems: state.dialogsReducer.dialogsItems
    }

}

export default compose(
    connect(mapStateToProps, {addMessage, updateMessage}),
    WithAuthRedirect
)(Dialogs);