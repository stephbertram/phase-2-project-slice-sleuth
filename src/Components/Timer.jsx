import {useState, useEffect} from 'react'

const Timer = ({stop}) => {

    const [timer, setTimer] = useState(0)
    
    //! WIP
    useEffect(() => {
        const intervalId = setInterval(() => {
            if(!stop){
                setTimer(current => current + 1)
            }
        }, 1000)
        return () => {
            clearInterval(intervalId)
        };
    }, [stop]);

  return (
    <div>Timer: {timer}</div>
  )
}

export default Timer