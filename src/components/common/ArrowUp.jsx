const ArrowUp = () => {
    return ( 
        <div>
            <svg data-id="up" data-tid="up" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fillRule="evenodd"><path d="M16 0H0v16h16z"></path><path fill="#262626" fillOpacity=".65" fillRule="nonzero" d="M3.278 11.559a.75.75 0 0 1-1.057-1.063l5.263-5.24a.75.75 0 0 1 1.059.001l5.238 5.24a.75.75 0 0 1-1.06 1.06L8.01 6.846l-4.733 4.713z"></path></g></svg>
        </div>
    );
}

const ArrowDown = () => {
    return (
        <div>
            <svg data-id="down" data-tid="down" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fillRule="evenodd"><path d="M16 0H0v16h16z"></path><path fill="#262626" fillOpacity=".65" fillRule="nonzero" d="M3.278 5.459A.75.75 0 0 0 2.221 6.52l5.263 5.24a.75.75 0 0 0 1.059 0L13.78 6.52a.75.75 0 0 0-1.06-1.06l-4.71 4.711L3.278 5.46z"></path></g></svg>
        </div>
    )
}
 
export {ArrowUp, ArrowDown };