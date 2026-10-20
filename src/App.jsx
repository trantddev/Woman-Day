import { useEffect, useRef } from "react";

// SVG templates for authentic Vietnamese Milk Flowers (Hoa Sữa)
const HOA_SUA_SVGS = [
  // 1. Single 5-petal Hoa Sữa blossom with creamy gradient & pale golden center
  `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="hsg1" cx="50%" cy="30%" r="70%">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="65%" stop-color="#fdf8ea"/>
        <stop offset="100%" stop-color="#eee2c4"/>
      </radialGradient>
    </defs>
    <g transform="translate(16, 16)">
      <path d="M0 0 C-3.5 -5, -4 -12.5, 0 -14 C4 -12.5, 3.5 -5, 0 0Z" fill="url(#hsg1)" stroke="#e8dcbe" stroke-width="0.5"/>
      <path d="M0 0 C-3.5 -5, -4 -12.5, 0 -14 C4 -12.5, 3.5 -5, 0 0Z" fill="url(#hsg1)" stroke="#e8dcbe" stroke-width="0.5" transform="rotate(72)"/>
      <path d="M0 0 C-3.5 -5, -4 -12.5, 0 -14 C4 -12.5, 3.5 -5, 0 0Z" fill="url(#hsg1)" stroke="#e8dcbe" stroke-width="0.5" transform="rotate(144)"/>
      <path d="M0 0 C-3.5 -5, -4 -12.5, 0 -14 C4 -12.5, 3.5 -5, 0 0Z" fill="url(#hsg1)" stroke="#e8dcbe" stroke-width="0.5" transform="rotate(216)"/>
      <path d="M0 0 C-3.5 -5, -4 -12.5, 0 -14 C4 -12.5, 3.5 -5, 0 0Z" fill="url(#hsg1)" stroke="#e8dcbe" stroke-width="0.5" transform="rotate(288)"/>
      <circle cx="0" cy="0" r="2.8" fill="#d6c778"/>
      <circle cx="0" cy="0" r="1.6" fill="#f4ebb0"/>
      <circle cx="0" cy="0" r="0.8" fill="#586c47"/>
    </g>
  </svg>`,

  // 2. Chùm hoa sữa 3 bông li ti trên cuống xanh mùa thu
  `<svg viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="hsg2" cx="50%" cy="30%" r="70%">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="65%" stop-color="#fcf6e6"/>
        <stop offset="100%" stop-color="#ece0bf"/>
      </radialGradient>
    </defs>
    <path d="M21 38 Q22 28 20 20 M20 20 Q14 16 11 12 M20 20 Q28 17 31 15" stroke="#5a795b" stroke-width="1.4" stroke-linecap="round" fill="none"/>
    <g transform="translate(11, 12) scale(0.62)">
      <g transform="rotate(15)">
        <path d="M0 0 C-3.5 -5, -4 -12.5, 0 -14 C4 -12.5, 3.5 -5, 0 0Z" fill="url(#hsg2)" stroke="#e8dcbe" stroke-width="0.5"/>
        <path d="M0 0 C-3.5 -5, -4 -12.5, 0 -14 C4 -12.5, 3.5 -5, 0 0Z" fill="url(#hsg2)" stroke="#e8dcbe" stroke-width="0.5" transform="rotate(72)"/>
        <path d="M0 0 C-3.5 -5, -4 -12.5, 0 -14 C4 -12.5, 3.5 -5, 0 0Z" fill="url(#hsg2)" stroke="#e8dcbe" stroke-width="0.5" transform="rotate(144)"/>
        <path d="M0 0 C-3.5 -5, -4 -12.5, 0 -14 C4 -12.5, 3.5 -5, 0 0Z" fill="url(#hsg2)" stroke="#e8dcbe" stroke-width="0.5" transform="rotate(216)"/>
        <path d="M0 0 C-3.5 -5, -4 -12.5, 0 -14 C4 -12.5, 3.5 -5, 0 0Z" fill="url(#hsg2)" stroke="#e8dcbe" stroke-width="0.5" transform="rotate(288)"/>
        <circle cx="0" cy="0" r="2.5" fill="#d6c778"/>
        <circle cx="0" cy="0" r="0.8" fill="#586c47"/>
      </g>
    </g>
    <g transform="translate(31, 15) scale(0.7)">
      <g transform="rotate(40)">
        <path d="M0 0 C-3.5 -5, -4 -12.5, 0 -14 C4 -12.5, 3.5 -5, 0 0Z" fill="url(#hsg2)" stroke="#e8dcbe" stroke-width="0.5"/>
        <path d="M0 0 C-3.5 -5, -4 -12.5, 0 -14 C4 -12.5, 3.5 -5, 0 0Z" fill="url(#hsg2)" stroke="#e8dcbe" stroke-width="0.5" transform="rotate(72)"/>
        <path d="M0 0 C-3.5 -5, -4 -12.5, 0 -14 C4 -12.5, 3.5 -5, 0 0Z" fill="url(#hsg2)" stroke="#e8dcbe" stroke-width="0.5" transform="rotate(144)"/>
        <path d="M0 0 C-3.5 -5, -4 -12.5, 0 -14 C4 -12.5, 3.5 -5, 0 0Z" fill="url(#hsg2)" stroke="#e8dcbe" stroke-width="0.5" transform="rotate(216)"/>
        <path d="M0 0 C-3.5 -5, -4 -12.5, 0 -14 C4 -12.5, 3.5 -5, 0 0Z" fill="url(#hsg2)" stroke="#e8dcbe" stroke-width="0.5" transform="rotate(288)"/>
        <circle cx="0" cy="0" r="2.5" fill="#d6c778"/>
        <circle cx="0" cy="0" r="0.8" fill="#586c47"/>
      </g>
    </g>
    <g transform="translate(20, 21) scale(0.85)">
      <path d="M0 0 C-3.5 -5, -4 -12.5, 0 -14 C4 -12.5, 3.5 -5, 0 0Z" fill="url(#hsg2)" stroke="#e8dcbe" stroke-width="0.5"/>
      <path d="M0 0 C-3.5 -5, -4 -12.5, 0 -14 C4 -12.5, 3.5 -5, 0 0Z" fill="url(#hsg2)" stroke="#e8dcbe" stroke-width="0.5" transform="rotate(72)"/>
      <path d="M0 0 C-3.5 -5, -4 -12.5, 0 -14 C4 -12.5, 3.5 -5, 0 0Z" fill="url(#hsg2)" stroke="#e8dcbe" stroke-width="0.5" transform="rotate(144)"/>
      <path d="M0 0 C-3.5 -5, -4 -12.5, 0 -14 C4 -12.5, 3.5 -5, 0 0Z" fill="url(#hsg2)" stroke="#e8dcbe" stroke-width="0.5" transform="rotate(216)"/>
      <path d="M0 0 C-3.5 -5, -4 -12.5, 0 -14 C4 -12.5, 3.5 -5, 0 0Z" fill="url(#hsg2)" stroke="#e8dcbe" stroke-width="0.5" transform="rotate(288)"/>
      <circle cx="0" cy="0" r="2.7" fill="#d6c778"/>
      <circle cx="0" cy="0" r="0.8" fill="#586c47"/>
    </g>
  </svg>`,

  // 3. Bông hoa sữa có cuống xanh đài hoa
  `<svg viewBox="0 0 32 36" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="hsg3" cx="50%" cy="30%" r="70%">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="65%" stop-color="#faf5e4"/>
        <stop offset="100%" stop-color="#eedfc0"/>
      </radialGradient>
    </defs>
    <path d="M16 16 Q18 24 16 32" stroke="#547556" stroke-width="1.3" stroke-linecap="round" fill="none"/>
    <polygon points="16,17 14,19 16,21 18,19" fill="#3f5841"/>
    <g transform="translate(16, 15) scale(0.9)">
      <path d="M0 0 C-3.5 -5, -4 -12.5, 0 -14 C4 -12.5, 3.5 -5, 0 0Z" fill="url(#hsg3)" stroke="#e8dcbe" stroke-width="0.5"/>
      <path d="M0 0 C-3.5 -5, -4 -12.5, 0 -14 C4 -12.5, 3.5 -5, 0 0Z" fill="url(#hsg3)" stroke="#e8dcbe" stroke-width="0.5" transform="rotate(72)"/>
      <path d="M0 0 C-3.5 -5, -4 -12.5, 0 -14 C4 -12.5, 3.5 -5, 0 0Z" fill="url(#hsg3)" stroke="#e8dcbe" stroke-width="0.5" transform="rotate(144)"/>
      <path d="M0 0 C-3.5 -5, -4 -12.5, 0 -14 C4 -12.5, 3.5 -5, 0 0Z" fill="url(#hsg3)" stroke="#e8dcbe" stroke-width="0.5" transform="rotate(216)"/>
      <path d="M0 0 C-3.5 -5, -4 -12.5, 0 -14 C4 -12.5, 3.5 -5, 0 0Z" fill="url(#hsg3)" stroke="#e8dcbe" stroke-width="0.5" transform="rotate(288)"/>
      <circle cx="0" cy="0" r="2.8" fill="#d6c778"/>
      <circle cx="0" cy="0" r="1.6" fill="#f4ebb0"/>
      <circle cx="0" cy="0" r="0.8" fill="#586c47"/>
    </g>
  </svg>`,

  // 4. Cánh hoa sữa nhỏ li ti rơi nghiêng
  `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="hsg4" cx="30%" cy="30%" r="80%">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="60%" stop-color="#faf5e6"/>
        <stop offset="100%" stop-color="#eadfbe"/>
      </radialGradient>
    </defs>
    <path d="M10 2 C15 3, 17 8, 14 14 C12 18, 7 18, 5 13 C3 8, 6 2, 10 2Z" fill="url(#hsg4)" stroke="#e4d7b7" stroke-width="0.5"/>
    <circle cx="9" cy="14" r="1.2" fill="#d4c572" opacity="0.6"/>
  </svg>`,
];

function petals(count = 28) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  for (let i = 0; i < count; i++) {
    const container = document.createElement("div");
    container.className = "hoa-sua-fall-item";
    container.style.left = Math.random() * 98 + "vw";
    container.style.setProperty("--x", Math.random() * 260 - 130 + "px");
    container.style.setProperty("--r", Math.random() * 720 - 360 + "deg");
    container.style.setProperty("--d", 4 + Math.random() * 4.5 + "s");
    container.style.animationDelay = Math.random() * 1.6 + "s";

    const inner = document.createElement("div");
    inner.className = "hoa-sua-fall-inner";
    const size = 16 + Math.random() * 16;
    inner.style.setProperty("--size", size + "px");
    inner.style.setProperty("--spin-d", 2.5 + Math.random() * 3 + "s");

    const svgIndex = Math.floor(Math.random() * HOA_SUA_SVGS.length);
    inner.innerHTML = HOA_SUA_SVGS[svgIndex];

    container.appendChild(inner);
    document.body.append(container);

    container.addEventListener("animationend", () => container.remove(), {
      once: true,
    });
  }
}

export default function App() {
  const dialogRef = useRef(null);

  function openLetter() {
    dialogRef.current?.showModal();
    petals(26);
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
          <span className="brand-mark">❀</span> Một ngày cho Thảo
        </a>
        <div className="header-right">
          <span className="eyebrow">20 tháng 10, 2026 · Mùa hoa sữa</span>
          <a className="top-link" href="#loi-chuc">
            Lời chúc dành cho em ↗
          </a>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div
            className="hero-art"
            role="img"
            aria-label="Cành hoa sữa Hà Nội lung linh trong ánh đèn thu ấm áp"
          ></div>
          <div className="hero-glow" aria-hidden="true"></div>
          <div className="hero-inner">
            <div className="eyebrow">
              Món quà mùa thu Hà Nội · Dành riêng cho em
            </div>
            <h1 id="hero-title">
              Hôm nay là
              <br />
              ngày của <em>Thảo.</em>
            </h1>
            <span className="script">Nguyễn Phương Thảo</span>
            <p className="hero-copy">
              Thảo ơi, giữa tiết trời tháng Mười dịu ngọt, gửi đến em một làn
              hương hoa sữa ngát bay — mong em luôn an yên, dịu dàng và rực rỡ
              theo cách chân thật nhất của mình.
            </p>
            <div className="hero-actions">
              <button
                className="primary-button"
                onClick={openLetter}
                id="btn-open-letter-hero"
              >
                Mở lá thư dành cho Thảo <span>↗</span>
              </button>
              <a className="text-button" href="#loi-chuc">
                Khám phá lời chúc ↓
              </a>
            </div>
          </div>
          <div className="hero-count">01 / Mùa thu &amp; Hoa sữa</div>
          <div className="hero-side">Cuộn xuống để khám phá</div>
        </section>

        {/* TICKER */}
        <div className="ticker" aria-hidden="true">
          <span>
            ❀ &nbsp; Hoa sữa Hà Nội nồng nàn góc phố <b>❀</b> Chúc mừng ngày Phụ
            nữ Việt Nam 20/10 <b>❀</b> Dành tặng Nguyễn Phương Thảo trọn vẹn yêu
            thương <b>❀</b> Be sweet, be gentle, be you
          </span>
        </div>

        {/* LỜI CHÚC DÀNH CHO THẢO */}
        <section className="message section" id="loi-chuc">
          <div className="message-visual" aria-hidden="true">
            <div className="hoa-sua-art-badge">
              <div className="hoa-sua-cluster">
                <span className="flower-main">❀</span>
                <span className="flower-sub s1">❀</span>
                <span className="flower-sub s2">❀</span>
                <span className="flower-sub s3">✿</span>
                <span className="flower-leaf l1">🍃</span>
                <span className="flower-leaf l2">🌿</span>
              </div>
              <span className="visual-small">Hương hoa sữa</span>
            </div>
          </div>
          <div className="message-content">
            <div className="eyebrow">Gửi đến Nguyễn Phương Thảo</div>
            <h2>
              Mong em luôn
              <br />
              <em>ngát hương</em> như hoa sữa mùa thu.
            </h2>
            <p>
              Thảo ơi, hoa sữa chẳng ồn ào khoe sắc rực rỡ, nhưng bất kỳ ai đã
              từng lướt qua con phố mùa thu ngập tràn hương hoa sữa đều sẽ
              vương vấn mãi không quên.
            </p>
            <p>
              Em cũng vậy — đáng yêu, chân thành và mang trong mình một nguồn
              năng lượng thật dịu dàng. Mong những ngày sắp tới sẽ luôn đối xử
              với em thật ngọt ngào, xua tan mọi mỏi mệt để nhường chỗ cho bình
              yên và niềm vui ngập tràn.
            </p>
            <div className="signature">Thương gửi Thảo ♡</div>
          </div>
        </section>

        {/* BA ĐIỀU ƯỚC */}
        <section className="wishes section" aria-labelledby="wish-title">
          <div className="eyebrow">Ba điều ước mùa thu</div>
          <h2 id="wish-title">
            Cho một Thảo luôn <em>bình yên &amp; rạng rỡ.</em>
          </h2>
          <div className="wish-grid">
            <article className="wish-card">
              <div className="wish-icon">❀</div>
              <h3>Tâm hồn an yên</h3>
              <p>
                Để dù ngoài kia có hối hả, trong lòng em vẫn dịu êm và nhẹ nhõm
                như làn gió thu se lạnh.
              </p>
            </article>
            <article className="wish-card">
              <div className="wish-icon">♡</div>
              <h3>Thật nhiều yêu thương</h3>
              <p>
                Để em luôn biết rằng mình được chở che, thấu hiểu và trân trọng
                bởi những người quý mến em.
              </p>
            </article>
            <article className="wish-card">
              <div className="wish-icon">✦</div>
              <h3>Rạng rỡ nụ cười</h3>
              <p>
                Để mọi ước mơ, mục tiêu của Thảo đều từng bước đơm hoa kết trái
                thật ngọt ngào.
              </p>
            </article>
          </div>
        </section>

        {/* CLOSING SECTION */}
        <section className="closing section">
          <div className="eyebrow">Happy Vietnamese Women&apos;s Day · 20/10</div>
          <h2>
            Mùa thu đẹp hơn vì
            <br />
            có <em>Thảo</em> ở trong đó.
          </h2>
          <p>
            Chúc mừng ngày Phụ nữ Việt Nam 20/10. Mong em được nâng niu thật
            nhiều, hôm nay và cả những ngày tháng thênh thang phía trước.
          </p>
          <span className="script">Ngát hương hoa sữa</span>
          <button className="primary-button" onClick={() => petals(45)}>
            Gửi Thảo một cơn mưa hoa sữa <span>❀</span>
          </button>
        </section>
      </main>

      <footer>
        <span>Made with ♡ for Nguyễn Phương Thảo</span>
        <span>20.10.2026 · Mùa hoa sữa Hà Nội</span>
      </footer>

      {/* MODAL: HANDWRITTEN LETTER DIALOG (ENVELOPE SCENE) */}
      <dialog
        className="letter-dialog"
        ref={dialogRef}
        aria-labelledby="letter-title"
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current.close();
        }}
      >
        <div className="letter-scene">
          <div className="letter-sparkles" aria-hidden="true">
            <span>✦</span>
            <span>♡</span>
            <span>❀</span>
            <span>✧</span>
            <span>❀</span>
            <span>✦</span>
            <span>♡</span>
            <span>✧</span>
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
            <div className="letter-ornament" aria-hidden="true">
              ❀
            </div>
            <div className="eyebrow">
              Lá thư mùa thu · Gửi riêng Phương Thảo · 20/10
            </div>
            <h2 id="letter-title">Thảo ơi,</h2>
            <p>
              Nếu mỗi bông hoa sữa li ti là một lời chúc, thì cả một chùm hoa
              này vẫn chưa đủ để nói hết những điều tốt đẹp mình mong dành cho
              em.
            </p>
            <p>
              Giữa phố phường tấp nập, hoa sữa vẫn cứ bình thản toả hương. Mong
              em cũng vậy — luôn giữ được sự trong trẻo, nụ cười rạng rỡ và sự
              yêu đời vốn có. Dù phía trước có thế nào, hãy nhớ rằng em rất đặc
              biệt và luôn xứng đáng với những điều ân cần nhất.
            </p>
            <p>Chúc em một ngày 20/10 thật ngọt ngào, ấm áp như mùa thu. ♡</p>
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
