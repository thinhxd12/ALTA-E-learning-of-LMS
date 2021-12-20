import { useEffect } from "react"

const useClickOutside = (listRef: Array<any>, onClickOutside) => {
    useEffect(() => {
        document.addEventListener('mousedown', clickOutside)
        document.addEventListener('touchstart', clickOutside)

        return () => {
            document.removeEventListener('mousedown', clickOutside)
            document.removeEventListener('touchstart', clickOutside)
        }
    }, [ listRef ])

    const clickOutside = (event) => {
        const idOutSide = listRef.every(ref => !ref.current.contains(event.target))
        if (idOutSide) {
            onClickOutside(event)
        }
    }

}

export default useClickOutside