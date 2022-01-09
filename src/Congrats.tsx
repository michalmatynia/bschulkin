import React from 'react'
// receive the success state as a prop

// type CongratsType = {
//     success?: boolean
// }
interface CongratsType  {
    success: boolean
}

// interface CongratsProps {
//     props?: CongratsType,
//   }

const Congrats: React.FC<CongratsType> =  ( props ) => {
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

export default Congrats;

