import MyHeader from "../Layout/Header/Header";
import Layout from "../Layout/Layout";

function HomePage() {
  return (
    <>  
      <Layout />
      <MyHeader />
      <div style={{ padding: '20px' }}>
        <h1>Đây là HomePage</h1>
        <p>Chào mừng bạn đến với trang chủ của chúng tôi!</p>
      </div>
      
    </>
  );
}

export default HomePage;
