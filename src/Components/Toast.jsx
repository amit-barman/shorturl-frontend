import { useEffect, useState } from "react"

function ToastDiv({ toasts }) {
    return (
        <>
            <div className="toast-div">
                {toasts}
            </div>
        </>
    )
}

function Toast() {
    let [status, setSatus] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setSatus(false)
        }, 3000)
    }, [status])

    return (
        status ?
            <>
                <div className="toast">
                    <i className='fa-solid fa-circle-xmark'></i>
                    <p>Invalid URL!</p>
                </div>
            </>
            : <></>
    )
}

export { ToastDiv, Toast }