import React from "react";
import type { FormEvent } from "react"; // ✅ type-only import

const VocaloidCafe: React.FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("お問い合わせを送信しました！");
  };

  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Header */}
      <header>
        <nav className="bg-cyan-400 sticky top-0 z-50">
          <ul className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-6 py-4 text-white font-bold">
            <li><a href="#home" className="hover:underline">ホーム</a></li>
            <li><a href="#about" className="hover:underline">ボカロカフェについて</a></li>
            <li><a href="#menu" className="hover:underline">メニュー</a></li>
            <li><a href="#events" className="hover:underline">イベント</a></li>
            <li><a href="#contact" className="hover:underline">お問い合わせ</a></li>
          </ul>
        </nav>
        <div>
          <img
            src="/vocaloid_cafe/img/mikumikubeam.gif"
            alt="Header"
            className="w-full h-48 sm:h-64 md:h-80 object-cover"
          />
        </div>
      </header>

      {/* Main */}
      <main className="space-y-12 my-10">
        {/* Intro */}
        <section id="home" className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            ボカロカフェへようこそ
          </h1>
          <p>ここでは、ボカロキャラクターたちがあなたをお出迎えします。</p>
          <p>営業時間: 10:00 AM - 10:00 PM（定休日: 水曜日）</p>
        </section>

        {/* About */}
        <section id="about" className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold">ボカロカフェについて</h2>
          <p>
            ボカロカフェは、ボカロキャラクターと一緒に楽しむ特別な空間です。
            限定ドリンクやデザートを楽しみながら、映像や音楽の世界に浸ってください。
          </p>
          <img
            src="/vocaloid_cafe/img/100484676_p0.jpg"
            alt="Vocaloid Group"
            className="w-full rounded-md shadow-md max-h-64 sm:max-h-80 lg:max-h-[400px] object-cover"
          />
        </section>

        {/* Menu + Events */}
        <div className="flex flex-col lg:flex-row gap-8">
          <section id="menu" className="flex-1 space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold">メニュー</h2>
            <ul className="divide-y divide-gray-300 bg-white shadow-md rounded-md">
              <li className="p-3">初音ミクラテ – 500円</li>
              <li className="p-3">カイトブルーソーダ – 600円</li>
              <li className="p-3">ルカベリーパフェ – 700円</li>
              <li className="p-3">レンバナナシェイク – 550円</li>
              <li className="p-3">リンハニーケーキ – 450円</li>
              <li className="p-3">MEIKOワインゼリー – 650円</li>
            </ul>
          </section>

          <section id="events" className="flex-1 space-y-2">
            <h2 className="text-xl sm:text-2xl font-semibold">イベント情報</h2>
            <p>
              毎週土曜日には「ボカロライブビューイング」を開催！
              最新のコンサート映像を大スクリーンで楽しめます。
            </p>
            <p>期間限定コラボメニューやグッズも登場予定です！</p>
          </section>
        </div>

        {/* Contact */}
        <section id="contact" className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold">お問い合わせ</h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 max-w-full sm:max-w-md"
          >
            <label className="flex flex-col text-sm font-medium">
              お名前:
              <input
                type="text"
                name="name"
                required
                className="border border-gray-300 rounded p-2"
              />
            </label>
            <label className="flex flex-col text-sm font-medium">
              メール:
              <input
                type="email"
                name="email"
                required
                className="border border-gray-300 rounded p-2"
              />
            </label>
            <label className="flex flex-col text-sm font-medium">
              メッセージ:
              <textarea
                name="message"
                rows={4}
                className="border border-gray-300 rounded p-2"
              ></textarea>
            </label>
            <button
              type="submit"
              className="bg-cyan-500 text-white font-bold py-2 rounded hover:bg-cyan-600"
            >
              送信
            </button>
          </form>
          <h3 className="text-lg sm:text-xl font-semibold">アクセス</h3>
          <p>東京都渋谷区○○ 1-2-3 ボカロビル 2F</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.934199436088!2d139.69932511525833!3d35.65980048019933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca89b5f39f7%3A0x2d3a7c8a4c7cbb5a!2z5riL6LC35bKp5rW36YeO44K144Oz44OI44Op44Kk!5e0!3m2!1sja!2sjp!4v1617853143123!5m2!1sja!2sjp"
            width="100%"
            height="250"
            className="rounded-md shadow"
            allowFullScreen
            loading="lazy"
            title="map"
          ></iframe>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 border-t mt-10 text-gray-600 text-sm">
        <p>&copy; 2025 ボカロカフェ. All Rights Reserved.</p>
        <p className="mt-2 space-x-2">
          <a href="#home" className="hover:underline">ホーム</a>
          <a href="#menu" className="hover:underline">メニュー</a>
          <a href="#contact" className="hover:underline">お問い合わせ</a>
        </p>
      </footer>
    </div>
  );
};

export default VocaloidCafe;
