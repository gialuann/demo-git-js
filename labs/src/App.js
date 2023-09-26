import './App.css';
import Bai2 from './components/clock';
import Sum from './components/sum'
import NumGenerator from './components/MaxMin'
import ChuyenDoiTien from './components/chuyen-doi-tien'
function App() {
  return (
    <div className="App">
      <Bai2/>
      <Sum/>
      <NumGenerator/>
      <ChuyenDoiTien/>
    </div>
  );
}

export default App;
