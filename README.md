# AI Engineering Handbook

Sổ tay AI Engineering toàn diện bằng tiếng Việt, dành cho software engineer muốn xây dựng sản phẩm AI — từ nền tảng foundation models, RAG, agents, đến production engineering, security, eval, và các pattern 2026+.

**12 phần · 42 bài viết** — từ foundation đến frontier.

## Đọc online

→ [ai-engineering-handbook.vercel.app](https://ai-engineering-handbook.vercel.app) *(sau khi deploy)*

## Cấu trúc

```
.
├── index.html          # Mục lục + 8 reading paths
├── sections/           # 42 bài chi tiết
├── images/             # 43 hero infographics
└── assets/
    ├── style.css       # Design system
    ├── script.js       # TOC interactions
    └── image-prompt.md # Prompt template tái sử dụng cho image gen
```

## Lộ trình

1. **Khởi đầu** — §01 → §05
2. **RAG end-to-end** — §02 → §07 (Data) → §08 (Vector) → §09 (RAG) → §13 → §15
3. **Agent cơ bản** — §10 → §11 → §14 → §18
4. **Agent chuyên sâu** *(advanced)* — §23 → §28
5. **Production-ready** — §12 → §13 → §14 → §19 → §20
6. **Security & harden** *(advanced)* — §15 → §29 → §34
7. **Eval-driven dev** *(advanced)* — §05 → §35 → §27 → §37
8. **2026+ frontier** *(advanced)* — §22 → §38 → §42

## Stack

- Static site — pure HTML/CSS/JS, không framework
- Dark theme, mini-rail TOC
- Mọi hero image cùng style sketch-infographic

## Dev local

Vì là static, mở `index.html` bằng browser là chạy được. Hoặc:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## License

Nội dung: CC BY-SA 4.0
Code: MIT

---

Soạn tháng 5/2026 · v1
