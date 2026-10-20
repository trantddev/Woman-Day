import { useEffect, useRef } from "react";

function petals(count = 28) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  for (let i = 0; i < count; i++) {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.textContent = ["✿", "❀", "✦", "♡"][i % 4];
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.setProperty("--x", Math.random() * 240 - 120 + "px");
    petal.style.setProperty("--r", Math.random() * 760 - 380 + "deg");
    petal.style.setProperty("--d", 4 + Math.random() * 4 + "s");
    petal.style.animationDelay = Math.random() * 1.5 + "s";
    document.body.append(petal);
    petal.addEventListener("animationend", () => petal.remove(), {
      once: true,
    });
  }
}

export default function App() {
  const dialogRef = useRef(null);

  function openLetter() {
    dialogRef.current?.showModal();
    petals(22);
  }

  useEffect(() => {
    const timer = setTimeout(() => petals(18), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="grain" aria-hidden="true"></div>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Về đầu trang">
          <span className="brand-mark">✳</span> Một ngày cho Thảo
        </a>
        <div className="header-right">
          <span className="eyebrow">20 tháng 10, 2026</span>
          <a className="top-link" href="#loi-chuc">
            Lời chúc dành cho bạn ↗
          </a>
        </div>
      </header>
      <main>
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div
            className="hero-art"
            role="img"
            aria-label="Bó hoa hồng và mẫu đơn trong ánh sáng ấm"
          ></div>
          <div className="hero-glow" aria-hidden="true"></div>
          <div className="hero-inner">
            <div className="eyebrow">Một món quà nhỏ · dành riêng cho bạn</div>
            <h1 id="hero-title">
              Hôm nay là
              <br />
              ngày của <em>Thảo.</em>
            </h1>
            <span className="script">Nguyễn Phương Thảo</span>
            <p className="hero-copy">
              Chúc bạn một ngày 20/10 dịu dàng, rực rỡ và ngập tràn những điều
              khiến trái tim mỉm cười.
            </p>
            <div className="hero-actions">
              <button className="primary-button" onClick={openLetter}>
                Mở lá thư dành cho Thảo <span>↗</span>
              </button>
              <a className="text-button" href="#loi-chuc">
                Khám phá lời chúc ↓
              </a>
            </div>
          </div>
          <div className="hero-count">01 / Một ngày thật đặc biệt</div>
          <div className="hero-side">Cuộn xuống để khám phá</div>
        </section>
        <div className="ticker" aria-hidden="true">
          <span>
            ✦ &nbsp; Be loved, be radiant, be you <b>✦</b> Chúc mừng ngày Phụ nữ
            Việt Nam <b>✦</b> Be loved, be radiant, be you <b>✦</b> Chúc mừng
            ngày Phụ nữ Việt Nam
          </span>
        </div>
        <section className="message section" id="loi-chuc">
          <div className="message-visual" aria-hidden="true">
            <span className="flower-symbol">✿</span>
            <span className="visual-small">for you</span>
          </div>
          <div className="message-content">
            <div className="eyebrow">Gửi đến Nguyễn Phương Thảo</div>
            <h2>
              Mong bạn luôn
              <br />
              <em>nở hoa</em> theo cách của mình.
            </h2>
            <p>
              Thảo thân mến, hôm nay là một dịp đẹp để nhắc bạn rằng sự hiện
              diện của bạn luôn rất đáng quý. Mong những ngày phía trước mang
              đến cho bạn thật nhiều bình yên, niềm vui và những bất ngờ ngọt
              ngào.
            </p>
            <p>
              Hãy cứ tự tin là chính mình, theo đuổi điều bạn yêu và dành cho
              bản thân sự dịu dàng mà bạn xứng đáng nhận được.
            </p>
            <div className="signature">With love, for Thảo ♡</div>
          </div>
        </section>
        <section className="wishes section" aria-labelledby="wish-title">
          <div className="eyebrow">Ba điều ước nhỏ</div>
          <h2 id="wish-title">
            Cho một Thảo luôn <em>rạng rỡ.</em>
          </h2>
          <div className="wish-grid">
            <article className="wish-card">
              <div className="wish-icon">✧</div>
              <h3>Thật nhiều niềm vui</h3>
              <p>Để mỗi buổi sáng thức dậy đều có một điều đáng mong chờ.</p>
            </article>
            <article className="wish-card">
              <div className="wish-icon">♡</div>
              <h3>Thật nhiều yêu thương</h3>
              <p>
                Để bạn luôn cảm thấy được trân trọng và ôm ấp bởi những người
                thương mến.
              </p>
            </article>
            <article className="wish-card">
              <div className="wish-icon">✦</div>
              <h3>Thật nhiều can đảm</h3>
              <p>
                Để mọi ước mơ của bạn có cơ hội trở thành những ngày thật đẹp.
              </p>
            </article>
          </div>
        </section>
        <section className="closing section">
          <div className="eyebrow">Happy Vietnamese Women's Day</div>
          <h2>
            Thế giới đẹp hơn vì
            <br />
            có <em>Thảo</em> ở trong đó.
          </h2>
          <p>
            Chúc mừng ngày Phụ nữ Việt Nam 20/10. Mong nụ cười luôn ở lại trên
            môi bạn, hôm nay và mọi ngày.
          </p>
          <span className="script">Always bloom</span>
          <button className="primary-button" onClick={() => petals(45)}>
            Gửi Thảo một cơn mưa hoa <span>✿</span>
          </button>
        </section>
      </main>
      <footer>
        <span>Made with ♡ for Nguyễn Phương Thảo</span>
        <span>20.10.2026 · Dành riêng cho bạn</span>
      </footer>
      <dialog
        ref={dialogRef}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
        aria-labelledby="letter-title"
      >
        <div className="letter">
          <button
            className="close"
            onClick={() => dialogRef.current?.close()}
            aria-label="Đóng lá thư"
          >
            ×
          </button>
          <div className="letter-mark">✿</div>
          <div className="eyebrow">Một lá thư nhỏ · 20/10</div>
          <h2 id="letter-title">Thảo thân mến,</h2>
          <p>
            Chúc bạn luôn được sống những ngày thật đẹp, được yêu thương theo
            cách mình mong muốn và đủ dũng cảm để bước về phía những giấc mơ.
            Cảm ơn bạn vì đã là chính bạn — một người đặc biệt theo cách chẳng
            ai có thể thay thế.
          </p>
          <p>Chúc mừng ngày Phụ nữ Việt Nam! ♡</p>
          <div className="signature">Dành riêng cho Thảo</div>
        </div>
      </dialog>
    </>
  );
}
