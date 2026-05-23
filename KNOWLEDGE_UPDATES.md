# Knowledge Updates Log

Theo dõi lịch sử cập nhật kiến thức của từng bài trong handbook.

- **Mục đích**: biết bài nào đã được refresh, tới ngày nào, bởi model nào, và những gì đã thay đổi.
- **Cách hoạt động**: mỗi lần refresh, ghi đè dòng tương ứng trong bảng tổng + thêm entry vào "Nhật ký chi tiết".
- **Marker trong từng bài**: cuối mỗi bài có khối `.knowledge-stamp` hiển thị "Kiến thức cập nhật tới: YYYY-MM-DD".

## Refresh gần nhất

- **Ngày**: 2026-05-23
- **Phạm vi**: toàn bộ 42 bài
- **Model thực thi**: Claude Opus 4.7 (dispatch song song, mỗi bài 1 subagent)
- **Nguồn**: WebSearch + tài liệu chính chủ (Anthropic, OpenAI, Google, Meta, Mistral, DeepSeek, OWASP, NIST, MITRE, các paper arXiv 2025-2026)
- **Nguyên tắc**: accuracy > coverage — chỉ thay đổi khi có nguồn xác minh; phần không chắc thì để nguyên và flag

## Bảng tổng

| # | Bài | Cập nhật tới | Model | Tóm tắt thay đổi |
|---|-----|--------------|-------|------------------|
| 01 | AI Engineering là gì? | 2026-05-23 | Opus 4.7 | Thêm Agent Engineer + AI Evals Engineer vào role table, bullet agentic workflows, cập nhật tab 2024–2026 |
| 02 | Foundation Models cơ bản | 2026-05-23 | Opus 4.7 | Major refresh: GPT-5.x, Claude 4.7, Gemini 3.x, Grok 4.3, Llama 4 MoE, Mistral Large 3, DeepSeek V4, Qwen 3.7, Gemma 4, Phi-4 |
| 03 | Cách LLM hoạt động | 2026-05-23 | Opus 4.7 | Thêm §3.7 Reasoning Models + Test-Time Compute, MoE (DeepSeek-V3/Llama 4), speculative decoding, YaRN, context window history |
| 04 | Prompt Engineering | 2026-05-23 | Opus 4.7 | CoT warning cho reasoning models, JSON Schema strict (OpenAI), Anthropic Structured Outputs beta, Prompt Caching, Extended Thinking |
| 05 | Model Selection & Evaluation | 2026-05-23 | Opus 4.7 | Pricing 2026 đầy đủ, reasoning vs standard, open-weights (DeepSeek/Qwen/Llama 4), HLE/ARC-AGI-2/SWE-bench Verified, Model Routing (OpenRouter/Portkey/LiteLLM/Martian) |
| 06 | Fine-tuning & Customization | 2026-05-23 | Opus 4.7 | §6.5 RFT/GRPO mới, DoRA/QDoRA, bảng SimPO/KTO/IPO/ORPO, thêm LLaMA-Factory; cập nhật Unsloth/Axolotl/OpenAI FT 2026 |
| 07 | Data Pipeline cho AI | 2026-05-23 | Opus 4.7 | Docling maturity (Linux Foundation), Reducto, ColPali visual retrieval, hierarchical/late chunking, embeddings (Voyage-4, Cohere v4, BGE-M3, Gemini Embedding 2) |
| 08 | Vector Search & Knowledge Stores | 2026-05-23 | Opus 4.7 | Cohere Rerank 4, Voyage rerank-2.5, ColBERT→ColPali, Contextual Retrieval + Late Chunking, pgvector 0.8, Turbopuffer/LanceDB object-storage |
| 09 | RAG | 2026-05-23 | Opus 4.7 | Contextual Retrieval, LazyGraphRAG/DRIFT, Agentic RAG patterns (Self-RAG/CRAG), CAG, Cohere embed-v4/Jina-v3, rerank-v4 |
| 10 | Agents & Tool Use | 2026-05-23 | Opus 4.7 | MCP industry standard (9.4k+ servers), bảng tool calling API 3 provider, framework table mở rộng (OpenAI Agents SDK, smolagents, Letta, Google ADK), computer use Sonnet 4.5/4.6 |
| 11 | Workflows vs Agents | 2026-05-23 | Opus 4.7 | Compound reliability math, MCP standard + code-execution pattern (98.7% token reduction), Agent Skills, reasoning models không thay thế workflow design |
| 12 | Inference & Serving | 2026-05-23 | Opus 4.7 | SGLang nổi lên, TGI maintenance mode, B200/MI355X, EAGLE-3 (4-6x), NVFP4/MXFP4, FlashAttention-3, P/D disaggregation (Mooncake/DistServe) |
| 13 | Observability & Eval in Production | 2026-05-23 | Opus 4.7 | OTel GenAI status (experimental), Langfuse-ClickHouse acq, Braintrust $80M, LangSmith Agent Sandboxes, Logfire, embedding drift detection |
| 14 | Reliability & Safety | 2026-05-23 | Opus 4.7 | LlamaFirewall + Llama Guard 4 + ShieldGemma 2, Semantic Entropy, MLCommons AILuminate, RSP v3 / OpenAI Preparedness / Google FSF |
| 15 | Security | 2026-05-23 | Opus 4.7 | Fix OWASP LLM Top 10 v2025 (diagram + danh sách), thêm OWASP Agentic Top 10, MCP security (poisoning/rug pull), MITRE ATLAS v5.1 |
| 16 | Designing AI Products (UX) | 2026-05-23 | Opus 4.7 | Chat-as-only-UI anti-pattern, Artifacts/Canvas/Generative UI, agentic undo stacks, autonomy dial (pre/in/post-action) |
| 17 | Multimodal Applications | 2026-05-23 | Opus 4.7 | Vision refresh (Claude Opus 4.7, GPT-5, Gemini 2.5 Pro, Llama 4, Qwen3-VL, Pixtral), Whisper v3-turbo, ElevenLabs v3, Sesame CSM, Veo 3.1, Sora 2 discontinued, ColPali RAG |
| 18 | Code-generating AI Systems | 2026-05-23 | Opus 4.7 | Landscape 4-tier (Cursor 3, Claude Code + Agent SDK, Codex cloud, Devin 2.0, app builders Lovable/Bolt/Replit Agent 4 $100M ARR), SWE-bench Verified saturation → SWE-bench Pro |
| 19 | MLOps / LLMOps | 2026-05-23 | Opus 4.7 | Humanloop đóng cửa (Anthropic acq 7/2025), Langfuse-ClickHouse, LLM gateway (LiteLLM/Portkey/OpenRouter) thành layer chuẩn, RAGOps |
| 20 | Cost & FinOps cho AI | 2026-05-23 | Opus 4.7 | Bảng giá 5/2026 (5 provider), GPT-4o pricing fix, "thinking token trap" cho reasoning models, Anthropic TTL 5min default (3/2026), DeepSeek cache 10% |
| 21 | Team & Process | 2026-05-23 | Opus 4.7 | Agent Engineer / AI Evals Engineer / Context Engineer phân hoá, AI-native rituals (Spec Review/Prompt Review/AI Pairing), tác động AI codegen lên team size |
| 22 | Tương lai & các chủ đề nâng cao | 2026-05-23 | Opus 4.7 | Inference-time compute paradigm, computer use (Operator/Mariner/Nova Act), RSP v3 + Model Spec, Diffusion LLMs (Mercury), World Models (Genie 3/Veo 3), AI Scientist |
| 23 | Agent Design Patterns nâng cao | 2026-05-23 | Opus 4.7 | Claude Code subagent YAML, openai-swarm→Agents SDK, Evaluator-Optimizer alias, LATS + PreFlect, Deep Research pattern |
| 24 | Agent Harness | 2026-05-23 | Opus 4.7 | Anthropic Agent SDK + Managed Agents API, 12 hooks, Codex CLI 2026 (subagents/cloud), Cursor 3 cloud VM, OpenHands V1, MCP Streamable HTTP |
| 25 | Agent Memory Architectures | 2026-05-23 | Opus 4.7 | Letta MemFS/Conversations API, mem0 v2 + OpenMemory MCP, Zep Graphiti paper, first-party memory (ChatGPT/Claude Code), memory evals (LongMemEval/LoCoMo/MemoryAgentBench) |
| 26 | Long-running & Durable Agents | 2026-05-23 | Opus 4.7 | Cloudflare Workflows GA + DBOS Transact, Restate GA + Inngest pricing, Temporal + OpenAI Agents SDK integration |
| 27 | Agent Eval & Benchmarking | 2026-05-23 | Opus 4.7 | SWE-bench Verified 75-79% (SWE-ABS exists), OSWorld 82% (vượt human), τ-bench 86%, BFCL v3/v4, BrowseComp/Cybench/Terminal-Bench, HLE/ARC-AGI-2/FrontierMath, Inspect/Braintrust/Phoenix |
| 28 | Multi-agent Orchestration | 2026-05-23 | Opus 4.7 | AutoGen 0.4 3-layer, LangGraph 1.0, Swarm→OpenAI Agents SDK, Letta, Deep Research use case, A2A protocol + MCP interop |
| 29 | Prompt Injection Deep-dive | 2026-05-23 | Opus 4.7 | Greshake citation, ASCII/Unicode Tag exploits (Sourcegraph Amp, Gemini), Spotlighting + CaMeL, EchoLeak CVE-2025-32711, Perplexity Comet |
| 30 | Agent-specific Threats | 2026-05-23 | Opus 4.7 | MCP tool poisoning (postmark-mcp Sep 2025, MCPoison CVE-2025-54136), Agent identity ASI03, Memory poisoning ASI06, OWASP Agentic Top 10, CISA/Five Eyes guidance |
| 31 | Sandboxing & Isolation | 2026-05-23 | Opus 4.7 | OS primitives (Landlock/Seatbelt/seccomp-bpf), WASI 0.2 stable + 0.3 async, E2B 78ms P50, OpenAI Code Interpreter + Vercel Sandbox, Firecracker snapshot API |
| 32 | AI Red-teaming | 2026-05-23 | Opus 4.7 | Many-shot jailbreaking, PyRIT v0.11 + garak v0.14.1, promptfoo OpenAI acq, Azure AI Red Teaming Agent, MITRE ATLAS v5.1, Constitutional Classifiers++, Frontier Safety Frameworks |
| 33 | Privacy & Data Protection | 2026-05-23 | Opus 4.7 | Presidio v2.2.362 + LangExtract, Nightfall AI, DP-FedLoRA, Anthropic retention 7-day, Apple PCC M5 + PT-MoE, EDPB unlearning enforcement |
| 34 | Compliance & Governance | 2026-05-23 | Opus 4.7 | EU AI Act High-Risk dời Dec 2027/Aug 2028, GPAI Aug 2025, US EO 14179 + AI Action Plan + Dec 2025 EO, California SB 53 signed, Colorado AI Act stay, System Cards |
| 35 | Eval Dataset Design | 2026-05-23 | Opus 4.7 | Public benchmarks retired (MMLU saturated), evaluation awareness/sandbagging, production-trace-first eval, position bias trong rubric, critique shadowing pattern |
| 36 | Reward Modeling | 2026-05-23 | Opus 4.7 | RLVR + GRPO (DeepSeek-R1), Causal Reward Modeling, OpenAI RFT (rubric-based), RewardBench v2 + SkyworkRM-V2 |
| 37 | Continuous Eval & Regression | 2026-05-23 | Opus 4.7 | Inspect (UK AISI), Promptfoo OpenAI acq, LangSmith Insights Agent, model name 4-7, bootstrap CI, sequential testing (SPRT), model-version-bump playbook |
| 38 | Inference-time Compute Scaling | 2026-05-23 | Opus 4.7 | DeepSeek-R1-Zero + s1 paper evidence, o3/o4-mini reasoning_effort (5 levels), Claude adaptive thinking (deprecate budget_tokens), Gemini 2.5 Pro thinkingBudget |
| 39 | Computer-use & Browser-use Agents | 2026-05-23 | Opus 4.7 | Claude CUA 38% Sonnet 4.5, GPT-5.5 78.7% OSWorld, Stagehand v3, UI-TARS-2, Agent S2 vượt human baseline (Dec 2025), OmniParser v2, BrowseComp |
| 40 | Code Execution as a Tool | 2026-05-23 | Opus 4.7 | OpenAI Responses API (Assistants sunset 8/2026), Anthropic Code Execution GA 1/2026, E2B 78ms P50, Daytona mới, Gemini 3.x multimodal function responses |
| 41 | Distributed Agent Runtimes | 2026-05-23 | Opus 4.7 | A2A Protocol (Linux Foundation, 150+ orgs), Dapr Agents v1.0 GA, Cloudflare Agents/Project Think, AWS Bedrock AgentCore, Vertex AI Agent Engine, Temporal+OpenAI |
| 42 | Edge & On-device Agents | 2026-05-23 | Opus 4.7 | Apple Foundation Models framework (iOS 26), PCC M5 + Agent Worker, Qwen 3.5/Gemma 4 E2B-E4B/Llama 4 Scout, Hexagon NPU 6 (80 TOPS), MLC LLM/Phi-Silica/Foundation Models |

## Nhật ký chi tiết

### 2026-05-23 · Refresh toàn bộ 42 bài (Opus 4.7)

Refresh đầu tiên sau khi handbook được Sonnet 4.6 viết tháng 5/2026. Dispatch song song 42 Opus 4.7 subagent, mỗi bài 1 subagent với hướng dẫn:
- Đọc toàn bộ bài
- Liệt kê 3–8 candidates có khả năng outdated
- WebSearch 3–8 query (date-bias 2025-2026), verify nguồn
- Chỉ sửa khi có nguồn xác minh (accuracy > coverage)
- Giữ nguyên tiếng Việt, cấu trúc HTML, CSS, hero image, navigation
- Thêm `<div class="knowledge-stamp">` ngay trước `<nav class="section-footer">`

#### Các chủ đề có thay đổi lớn nhất (heavy refresh)

| Bài | Lý do thay đổi nhiều |
|-----|----------------------|
| §02 Foundation Models | Toàn bộ ecosystem model đã chuyển generation (Claude 4.x, GPT-5.x, Gemini 3.x, Llama 4, DeepSeek V4) |
| §03 LLM cơ bản | Reasoning models (o3/R1) đã thành mainstream, MoE phổ biến → thêm §3.7 mới |
| §05 Model Selection | Pricing, benchmark, model tier hoàn toàn khác so với 2024–2025 |
| §17 Multimodal | Sora 2 bị discontinued, Veo 3.1 production, ElevenLabs v3, Whisper v3-turbo |
| §18 Code-gen | Bùng nổ Cursor 3, Claude Code + Agent SDK, app builders ($100M ARR) |
| §22 Future | Diffusion LLMs (Mercury), World Models (Genie 3, Veo 3), AI Scientist tới ICLR 2025 |
| §29 Prompt Injection | EchoLeak CVE-2025-32711 (first zero-click), Spotlighting, CaMeL |
| §30 Agent Threats | MCP tool poisoning incidents (postmark-mcp, MCPoison), OWASP Agentic Top 10 |
| §34 Compliance | EU AI Act High-Risk dời 2027–2028, US chính quyền Trump đảo ngược chính sách AI, California SB 53 ký |
| §39 Computer-use | OSWorld từ 38% (early 2025) → 82% (Agent S2 vượt human, Dec 2025) |
| §41 Distributed Runtimes | A2A Protocol (Linux Foundation), Dapr Agents CNCF GA, managed runtimes nổi lên |

#### Anti-patterns được fix

- §15 Security: SVG OWASP LLM Top 10 dùng nội dung v2024 với label "2025" → fix toàn bộ theo v2025.1 chính thức
- §05/§20: GPT-4o pricing sai → fix sang $2.50 / $10
- §38: API `budget_tokens` (Claude) đã deprecated trên Opus 4.7+ → migrate sang `adaptive` + `effort`
- §40: OpenAI Assistants API sẽ tắt 8/2026 → Code Interpreter chuyển sang Responses API

#### Flagged không thay đổi (nhiều bài)

Các subagent đều flag những điểm không đổi vì thiếu nguồn xác minh, ví dụ: chi tiết AGI timeline, một số model name trong code example minh hoạ, các SVG diagram phức tạp, pricing GPU self-host, benchmark mới quá tươi.

#### Template entry để dùng cho refresh tương lai

```markdown
### YYYY-MM-DD · §NN — Title (model thực thi)

- **Trước**: ...
- **Sau**: ...
- **Nguồn**: ...
- **Flagged không đổi**: ...
```
