# React Advance Module 3 / React Advance Modul 3

React Router, Chakra UI ve Tailwind CSS ile modern React 19 yeteneklerini
keşfetmek için hazırladığım küçük ama kapsamlı bir çalışma alanı. Amaç; gerçek
yaşam senaryolarına benzeyen modüller üzerinden durum yönetimi, cross-cutting
concerns, olay yakalama (capture/bubble), render props ve HOC gibi ileri seviye
desenleri pratik etmek.

Ein kompaktes, aber vielseitiges Lernprojekt rund um React 19, React Router,
Chakra UI und Tailwind CSS. Ziel ist es, echte Alltagsszenarien zu simulieren
und State-Management, Cross-Cutting Concerns, Event-Capture/Bubble sowie
Render-Prop- und HOC-Patterns praxisnah zu üben.

## Öne Çıkan Modüller / Wichtige Module

- **React System (Task)** – Basit bir görev listesi üzerinden state
  güncellemeleri, türevsel veri ve prop doğrulama örnekleri. _DE: Ein
  Task-Board, das State-Updates, abgeleitete Daten und PropTypes demonstriert._
- **Data Source Structure** – `useSubscription` ve `withSubscription`
  varyasyonlarıyla paylaşılan veri kaynaklarını hook/HOC ile dinleme,
  sürükle-bırak kontroller ve tematik kart düzenleri. _DE: Gemeinsame
  Datenquellen über Hooks/HOCs abonnieren, inklusive Steuer-Komponenten und
  Kartenlayouts._
- **Bubble Capture Playground** – `capture` ve `bubble` fazlarının nasıl
  çalıştığını gösteren klavye erişilebilir event yakalama laboratuvarı. _DE:
  Eine tastaturfreundliche Spielwiese, die Event-Capture- und Bubble-Phasen
  sichtbar macht._
- **Cross-Cutting Concerns** – Blog gönderileri, yorumlar ve kontroller
  modülleri ile yeniden kullanılabilir veri çekme mantığı. _DE:
  Wiederverwendbare Datenabfrage für Blogposts, Kommentare und Steuerelemente._
- **UI Deneyleri** – Chakra bileşenleri, Tailwind yardımcı sınıfları ve Framer
  Motion animasyonlarıyla tasarım sistemleri denemeleri. _DE: UI-Experimente mit
  Chakra-Komponenten, Tailwind-Utilities und Framer-Motion-Animationen._

## Teknoloji Yığını / Tech Stack

- React 19 + Vite 7
- React Router DOM 7
- Chakra UI 3 ve Tailwind CSS 4 / Chakra UI 3 und Tailwind CSS 4
- Framer Motion, PropTypes
- Jest 30 + Testing Library + @swc/jest
- ESLint, Prettier, Husky & lint-staged

## Kurulum ve Komutlar / Installation & Befehle

Aşağıdaki komutlar proje kök dizininde çalıştırılmalıdır. / Die folgenden
Befehle werden im Projektstamm ausgeführt.

```bash
npm install          # bağımlılıkları kurar / installiert Abhängigkeiten
npm run dev          # geliştirme sunucusunu başlatır / startet den Dev-Server (http://localhost:5173)
npm run build        # üretim paketini oluşturur / erstellt das Produktions-Build
npm run preview      # build çıktısını yerelde önizler / Vorschau des Builds
npm run test         # Jest ile testleri çalıştırır / führt Jest-Tests aus
npm run lint         # ESLint kurallarını doğrular / führt den Linter aus
```

## Proje Yapısı / Projektstruktur

```text
src/
  components/        # ortak görsel bileşenler / gemeinsame UI-Komponenten
  features/
    react-system/
    data-source-structure/
    buble-capture/
    ...              # diğer modüller / weitere Module
  layouts/           # sayfa iskeletleri / Seitengerüste
  pages/             # üst seviye sayfalar / Seiten
  hooks/             # özel hook'lar (örn./z.B. useSubscription)
```

## Yol Haritası / Roadmap

- Data Provider katmanını gerçek bir API ile beslemek. _DE: Die
  Data-Provider-Schicht an eine echte API anbinden._
- Render prop ve HOC örneklerine test senaryoları eklemek. _DE: Tests für
  Render-Prop- und HOC-Beispiele ergänzen._
- Tailwind + Chakra tasarım sistemini tekil tema katmanında birleştirmek. _DE:
  Tailwind und Chakra in einer konsolidierten Theme-Schicht vereinen._

Proje hakkında önerilerin varsa issue açarak ya da PR göndererek katkıda
bulunabilirsin!

Gerne Feedback geben oder direkt ein Issue/PR erstellen – jede Mithilfe ist
willkommen!
