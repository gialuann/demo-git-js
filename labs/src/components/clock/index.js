import './index.css';
function Bai2() {
   const date = new Date();
    return (
        
        <div>
            <div id="clock">Hello, i'm clock</div>
            <div id="clock1">Now is {date.toLocaleString()}</div>
        </div>
    );
}
export default Bai2;