const TranslatePart = () => {
    return (
        <>
            <div className="translate-part-container">
                <main>
                    <div className="translate-part-area">
                        <form>
                            <input placeholder="Nhập văn bản cần dịch..."></input>
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
                        <h2>Công cụ dịch</h2>
                        <ul>
                            <li>Dịch thuật Hán Việt</li>
                            <li>Dịch thuật Hán Nôm</li>
                        </ul>
                    </section>

                </main>
            </div>
        </>
    );
};

export default TranslatePart;
