const Translate = (props) => {
  return (
    <>
      <div className="translate-container">
        <main>
          <div className="translate-area">
            <form>
              <input placeholder="Nhập văn bản cần dịch"></input>
              <div>
                <button type="submit">Tra từ</button>
              </div>
            </form>
            <div className="translation-result">
              <h3>Kết quả dịch</h3>
              <p>Đoạn văn dịch thuật</p>
            </div>
          </div>
          <section className="services-section">
            <h2>Dịch vụ của chúng tôi</h2>
            <ul>
              <li>Dịch thuật tiếng Anh</li>
              <li>Dịch thuật tiếng Tây Ban Nha</li>
              <li>Dịch thuật tiếng Pháp</li>
            </ul>
          </section>
        </main>
      </div>
    </>
  );
};

export default Translate;
