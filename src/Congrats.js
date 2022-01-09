import React from 'react'
// receive the success state as a prop
/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
export default (props) => {
    if (props.success) {
        return (

            <div data-test="component-congrats">
                <span data-test="congrats-message">
                    Congrats you guessed the word
                </span>
            </div>
        )
    } else {
        return (
            <div data-test="component-congrats" />
        )
    }

}




export default function ListTable({ model = null, redux_localeuser = null, redux_userdata = null, reactrouter_history = null, sublistkey = null, viewparams = null, tableparams = null, tiedtoformkey = null, changePosition = null, changeSort = null, handleSwitch = null, removeItem = null, toggleItem = null }) {

    if (column.columntype) {
        return <ColumnRow
            column={column}
            item={item}
            sublistkey={sublistkey}
            tiedtoformkey={tiedtoformkey}
            handleSwitch={handleSwitch}
            changePosition={changePosition}
            removeItem={removeItem}
            toggleItem={toggleItem}
            model={model}
            redux_localeuser={redux_localeuser}
            reactrouter_history={reactrouter_history}
            redux_userdata={redux_userdata}
            viewparams={viewparams}
        />
    } else {
        return null
    }




// import React from 'react';

// import successContext from './contexts/successContext';
// import languageContext from './contexts/languageContext';
// import stringsModule from './helpers/strings';

// /**
//  * Functional react component for congratulatory message.
//  * @function
//  * @param {object} props - React props.
//  * @returns {JSX.Element} - Rendered component (or null if `success` prop is false).
//  */
// const Congrats = () => {
//   const [success] = successContext.useSuccess();
//   const language = React.useContext(languageContext);

//   if (success) {
//     return (
//       <div data-test="component-congrats" className="alert alert-success">
//         <span data-test="congrats-message">
//           {stringsModule.getStringByLanguage(language, 'congrats')}
//         </span>
//       </div>
//     );
//   } else {
//     return (
//       <div data-test="component-congrats" />
//     );
//   }
// };

// export default Congrats;
