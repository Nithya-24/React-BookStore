import './App.css';
import Header from "../src/component/header/header";
import Footer from "../src/component/footer/footer";
import BookList from './component/books/books';
import CartPage from './component/cartPage/cartPage';

function App() {
  return (
    <>
    
      <Header />
      <BookList />
      {/* <CartPage /> */}
      <Footer />

    </>
    
  );
}

export default App;