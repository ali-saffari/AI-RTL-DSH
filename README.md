# AI RTL for DeepSeek Harness

[English](#english) · [فارسی](#farsi)

<a id="english"></a>

Smart RTL for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness).

The ready-to-run bundle is already in `dist/`. Installing it does not need a build.

## What it does

A header button labeled **AI RTL** sits in an open conversation. The menu **راست‌چین** turns the engine on or off (on by default) and lets you pick how direction is detected. RTL prose uses [Vazirmatn](https://github.com/rastikerdar/vazirmatn).

Covered surfaces:

- **User sent messages**
- **Assistant replies**
- **Identified markdown**

**AI RTL algorithms** (remembered in this browser):

- **تحلیل پیشرفته یکپارچه** (`advanced_full`, default) — AI RTL’s default. Scores the whole message and sets direction from the mix of RTL and LTR words
- **تحلیل پیشرفته بخش‌ها** (`advanced_section`) — the same AI RTL engine, applied to each section of the message
- **تشخیص مبتنی بر واژه آغازین** (`first_word`) — each block follows its first significant word

**Intelligent mixed-language detection** — When a Persian sentence begins with an English word, technical term, or inline code (e.g. `React یک کتابخانه است` or `1. Node.js را نصب کنید`), first-strong-character heuristics classify it as LTR. The default algorithm counts RTL vs LTR words and keeps that paragraph RTL.

**Latin runs stay intact** — `code`, `pre`, `kbd`, Harness code cards (`[data-code-wrap]`), and KaTeX display math stay LTR, so English identifiers and numbers keep their order inside Persian text.

**Tables, lists, and blockquotes** — table direction follows cell content; quote bars and padding are mirrored on RTL blocks.

**Browser extension handshake** — If the AI RTL Chrome or Firefox extension is also on this page, only one engine applies direction. The menu lets you pick **پلاگین هاردنس** or the extension. While the extension is in charge, the plugin switch only mirrors state.

The sidebar and settings stay as Harness shipped them. No renderer is replaced.

## Install

### Desktop

Install the plugin through the graphical UI.

Open **Plugins** in the sidebar, then **Install**, and enter this spec:

```
github:ali-saffari/AI-RTL-DSH
```

### Web

For the Web version you can also use the AI RTL browser extension. [Install guide](https://ai-rtl.ir)

Install through one of these methods:

**Method 1 — Graphical UI**

Open **Plugins** in the sidebar, then **Install**, and enter this spec:

```
github:ali-saffari/AI-RTL-DSH
```

**Method 2 — CLI**

Run this in a terminal:

```bash
dsh plugin --profile web add github:ali-saffari/AI-RTL-DSH
```

## How it works

- A client plugin injects the header button into `conversation.session.header.utilities` and mounts Vazirmatn plus menu CSS via `ctx.effect`.
- The direction engine walks markdown containers, user stacks, and the composer. A batched `MutationObserver` (`requestAnimationFrame`) plus `IntersectionObserver` applies direction while answers stream, including off-screen messages as they come into view.
- Turning the engine off restores original `dir` / `text-align` and drops the plugin’s attributes and classes. Shared `data-ai-rtl-*` attributes on `<html>` keep this plugin and the browser extension from writing direction at the same time.

## License

All Rights Reserved. See [LICENSE](LICENSE). You may download, install, and use this software for personal, non-commercial purposes.

Bundled third-party: [Vazirmatn](fonts/OFL.txt) (SIL Open Font License), jQuery 3.7.1 (MIT).

---

<a id="farsi"></a>

<div dir="rtl">

## فارسی

راست‌چین هوشمند برای [دیپ‌سیک هارنس](https://github.com/deepseek-ai/deepseek-harness).

خروجی آماده در `dist/` است. برای نصب لازم نیست پروژه را بیلد کنید.

## چه کاری می‌کند

دکمه **AI RTL** در نوار بالای گفتگوی باز می‌نشیند. منوی **راست‌چین** موتور را روشن یا خاموش می‌کند (پیش‌فرض روشن است) و الگوریتم تشخیص جهت را انتخاب می‌کنید. نثر راست‌چین با قلم [وزیرمتن](https://github.com/rastikerdar/vazirmatn) است.

سطح‌های پوشش:

- **پیام ارسالی کاربر**
- **پاسخ دستیار**
- **مارک‌داون‌های شناسایی‌شده**

**الگوریتم‌های اختصاصی AI RTL** (در همین مرورگر ذخیره می‌شود):

- **تحلیل پیشرفته یکپارچه** (`advanced_full`، پیش‌فرض) — الگوریتم پیش‌فرض AI RTL. کل پیام را یکجا می‌سنجد و از نسبت واژه‌های راست‌چین به چپ‌چین جهت را تعیین می‌کند
- **تحلیل پیشرفته بخش‌ها** (`advanced_section`) — همان موتور AI RTL، جدا برای هر بخش داخل پیام
- **تشخیص مبتنی بر واژه آغازین** (`first_word`) — جهت هر بلوک را از اولین واژه معنادار می‌گیرد

**تشخیص هوشمند متن مخلوط** — وقتی جمله فارسی با واژه انگلیسی، اصطلاح فنی یا کد اینلاین شروع شود (مثلاً `React یک کتابخانه است` یا `1. Node.js را نصب کنید`)، تشخیص «اولین نویسه قوی» مرورگر آن را چپ‌چین می‌گیرد. الگوریتم پیش‌فرض واژه‌های راست‌چین و چپ‌چین را می‌شمارد و آن پاراگراف را راست‌چین نگه می‌دارد.

**رشته‌های لاتین دست‌نخورده می‌مانند** — `code`، `pre`، `kbd`، کارت کد هارنس (`[data-code-wrap]`) و فرمول نمایشی KaTeX چپ‌چین می‌مانند تا شناسه‌های انگلیسی و اعداد داخل متن فارسی جابه‌جا نشوند.

**جدول، فهرست و نقل‌قول** — جهت جدول از محتوای سلول می‌آید؛ نوار و فاصله نقل‌قول در بلوک راست‌چین آینه می‌شود.

**هماهنگی با اکستنشن مرورگر** — اگر اکستنشن AI RTL کروم یا فایرفاکس هم روی این صفحه باشد، فقط یکی جهت را اعمال می‌کند. منو بین **پلاگین هاردنس** و اکستنشن انتخاب می‌دهد. وقتی اکستنشن مسئول است، کلید پلاگین فقط وضعیت را نشان می‌دهد.

نوار کناری و تنظیمات هارنس همان‌طور که آمده‌اند می‌مانند. هیچ رندرری عوض نمی‌شود.

## نصب

### نصب نسخه دسکتاپ

نصب پلاگین از طریق محیط گرافیکی (UI).

از نوار کناری **Plugins** را باز کنید، سپس **Install**، و این مشخصه را وارد کنید:

```
github:ali-saffari/AI-RTL-DSH
```

### نصب نسخه وب

برای نسخه وب می‌توانید از افزونه مرورگر AI RTL هم استفاده کنید. [راهنمای نصب](https://ai-rtl.ir)

از طریق یکی از این روش‌ها نصب کنید:

**روش اول — محیط گرافیکی (UI)**

از نوار کناری **Plugins** را باز کنید، سپس **Install**، و این مشخصه را وارد کنید:

```
github:ali-saffari/AI-RTL-DSH
```

**روش دوم — CLI**

در ترمینال این دستور را اجرا کنید:

```bash
dsh plugin --profile web add github:ali-saffari/AI-RTL-DSH
```

## چطور کار می‌کند

- پلاگین سمت کلاینت دکمه را در `conversation.session.header.utilities` تزریق می‌کند و وزیرمتن و استایل منو را با `ctx.effect` سوار می‌کند.
- موتور جهت، ظرف‌های مارک‌داون، استک کاربر و کامپوزر را می‌پیماید. `MutationObserver` دسته‌ای (`requestAnimationFrame`) به‌همراه `IntersectionObserver` جهت را موقع استریم پاسخ اعمال می‌کند، از جمله پیام‌هایی که تازه وارد دید می‌شوند.
- خاموش کردن موتور `dir` و `text-align` اصلی را برمی‌گرداند و ویژگی‌ها و کلاس‌های پلاگین را پاک می‌کند. ویژگی‌های مشترک `data-ai-rtl-*` روی `<html>` جلوی نوشتن هم‌زمان این پلاگین و اکستنشن مرورگر را می‌گیرند.

## مجوز

تمام حقوق محفوظ است. متن در [LICENSE](LICENSE) است. دانلود، نصب و استفاده شخصی و غیرتجاری مجاز است.

اجزای شخص ثالث داخل بسته: [وزیرمتن](fonts/OFL.txt) (SIL Open Font License)، jQuery 3.7.1 (MIT).

</div>
