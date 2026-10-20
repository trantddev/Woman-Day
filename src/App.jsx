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
            Lời chúc dành cho em ↗
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
            <div className="eyebrow">Một món quà nhỏ · dành riêng cho em</div>
            <h1 id="hero-title">
              Hôm nay là
              <br />
              ngày của <em>Thảo.</em>
            </h1>
            <span className="script">Nguyễn Phương Thảo</span>
            <p className="hero-copy">
              Thảo ơi, mong hôm nay em được ôm trọn trong yêu thương, dịu dàng
              như những cánh hoa và rực rỡ theo cách riêng của mình.
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
              Mong em luôn
              <br />
              <em>nở hoa</em> theo cách của mình.
            </h2>
            <p>
              Thảo ơi, có lẽ em chẳng biết rằng chỉ một nụ cười của em cũng đủ
              làm một ngày bình thường trở nên thật đẹp. Mong những ngày phía
              trước luôn nâng niu em bằng bình yên, niềm vui và những bất ngờ
              ngọt ngào.
            </p>
            <p>
              Cứ là em thôi — đáng yêu, kiên cường và chân thành. Nếu có ngày
              nào thấy mỏi, mong em nhớ rằng mình luôn xứng đáng với những điều
              dịu dàng nhất.
            </p>
            <div className="signature">Thương gửi em, Thảo ♡</div>
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
                Để em luôn cảm thấy được trân trọng và ôm ấp bởi những người
                thương mến.
              </p>
            </article>
            <article className="wish-card">
              <div className="wish-icon">✦</div>
              <h3>Thật nhiều can đảm</h3>
              <p>
                Để mọi ước mơ của em có cơ hội trở thành những ngày thật đẹp.
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
            Chúc mừng ngày Phụ nữ Việt Nam 20/10. Mong em được yêu thương thật
            nhiều, hôm nay và cả những ngày chẳng cần một dịp đặc biệt.
          </p>
          <span className="script">Always bloom</span>
          <button className="primary-button" onClick={() => petals(45)}>
            Gửi Thảo một cơn mưa hoa <span>✿</span>
          </button>
        </section>
      </main>
      <footer>
        <span>Made with ♡ for Nguyễn Phương Thảo</span>
        <span>20.10.2026 · Dành riêng cho em</span>
      </footer>
      <dialog
        className="letter-dialog"
        ref={dialogRef}
        aria-labelledby="letter-title"
      >
        <div className="letter-scene">
          <div className="letter-sparkles" aria-hidden="true">
            <span>✦</span><span>♡</span><span>✿</span><span>✧</span>
            <span>❀</span><span>✦</span><span>♡</span><span>✧</span>
          </div>
          <div className="envelope-back" aria-hidden="true"></div>
          <div className="letter">
            <button
              className="close"
              onClick={() => dialogRef.current?.close()}
              aria-label="Đóng lá thư"
            >
              ×
            </button>
            <div className="letter-ornament" aria-hidden="true">✿</div>
            <div className="eyebrow">Chỉ gửi một mình em · 20/10</div>
            <h2 id="letter-title">Thảo ơi,</h2>
            <p>
              Nếu mỗi bông hoa là một lời chúc, bó hoa này vẫn chưa đủ để kể hết
              những điều đẹp đẽ mình mong dành cho em.
            </p>
            <p>
              Mong em luôn được yêu thương thật nhiều, được cười thật tươi,
              được ngủ yên sau những ngày dài. Và dù mai này có đi qua bao mùa
              hoa, em vẫn sẽ nhớ: em rất đặc biệt, theo cách chẳng ai thay thế
              được.
            </p>
            <p>Chúc em một ngày 20/10 ngọt ngào như chính em. ♡</p>
            <div className="signature">Thương em nhiều ♡</div>
          </div>
          <div className="envelope-front" aria-hidden="true">
            <span className="wax-seal">♡</span>
          </div>
        </div>
      </dialog>
    </>
  );
}
