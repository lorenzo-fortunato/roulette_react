const Numbers = ({ num1, num2, num3 }) => {
    return ( 
        <>
        <div className="displayNumbers">
            <div className="num">{ num1 }</div>
            <div className="num">{ num2 }</div>
            <div className="num">{ num3 }</div>
        </div>            
        </>
     );
}
 
export default Numbers;