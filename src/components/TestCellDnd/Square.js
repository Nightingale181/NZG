const squareStyle = {
    width: '100%',
    height: '100%',
};
export const Square = ({ black, children,key }) => {
    console.log(key)
    return (<div style={{
        ...squareStyle
    }}>
        {key}
        {children}
    </div>);
};