# Master Engineering & Deployment Task List: Saad Lamkadam Portfolio

**Objective**: Convert SWOT findings and design standards into actionable, prioritized production tasks.

---

## 📌 Priority 0: Domain & Infrastructure (Immediate)

- [ ] **Task 0.1: Verify DNS Propagation for `saadlamkadam.com`**
  - **Context**: Added to Railway service (`portfolio-saad-lamkadam`).
  - **Action**: Check DNS resolution of root CNAME (`sk9pjmwy.up.railway.app`) and `_railway-verify` TXT record at `ifreedomains.com`.
  - **Success Condition**: `curl -I https://saadlamkadam.com` returns `HTTP/2 200 OK` with valid Let's Encrypt SSL.
  - **Command**: `railway domain status e3a18cf0-ae3c-4242-a479-9bbf01ff4312`

- [ ] **Task 0.2: Configure `www.saadlamkadam.com` Redirect**
  - **Action**: Add `www.saadlamkadam.com` as a secondary domain on Railway and set automatic 301 redirect to apex `saadlamkadam.com`.

---

## 📌 Priority 1: Evidence & Technical Depth (Overcoming Weaknesses)

- [ ] **Task 1.1: Package & Publish Sanitized "ClawQuant-Core" Open-Source Slice**
  - **Context**: Weakness #1 (Gated repositories prevent E2/E3 empirical verification by CTOs).
  - **Action**: Create a clean repository (`saad-lamkadam/clawquant-circuit-breaker`) containing:
    - Pure Python 3.12 deterministic volatility circuit breaker.
    - Pytest test suite with simulated flash crash scenarios.
    - GitHub Actions CI workflow with badge passing.
  - **Success Condition**: Direct link inside `ProjectInstrument.tsx` pointing to working, tested code.

- [x] **Task 1.2: Dual-Track Recruiter Filter (Python AI vs. C# .NET Enterprise)**
  - **Context**: Weakness #3 (Dual-stack footprint can dilute recruiter specialization focus).
  - **Status**: **Completed**. Created `src/components/StackFilter.tsx` and `StackFilter.module.css`.
  - **Action**: Added tactile brass and obsidian toggle for:
    - `[ All Engineering ]` · `[ Python & AI Systems ]` · `[ C# / .NET & IoT ]`.

---

## 📌 Priority 2: Architectural Deep-Dives & Content

- [x] **Task 2.1: Implement Dedicated System Dossier Permalinks**
  - **Context**: Weakness #2 (Single-page density limits engineering depth for Directors/Architects).
  - **Status**: **Completed**. Created:
    - [`/systems/clawquant`](/systems/clawquant): High-frequency architecture, state invariant proofs, order dispatch flow, sanitized code.
    - [`/systems/reach-iot`](/systems/reach-iot): Multi-site European hospitality sensor topology, 75% alert cut, 28% uptime gain, GDPR model.
  - **Success Condition**: Clean, shareable URLs with rich OpenGraph cards for technical interviews.

- [ ] **Task 2.2: Add Downloadable 1-Page System Architecture Brief (PDF)**
  - **Action**: Create a printable, high-density 1-page PDF architecture spec of ClawQuant and REACH IoT, available directly from the console chassis.

---

## 📌 Priority 3: Performance, Accessibility & Hardening

- [x] **Task 3.1: Automated Lighthouse Audit (Milestone 4)**
  - **Empirical Production Scores**:
    - **Accessibility: 100 / 100**
    - **Best Practices: 100 / 100**
    - **SEO: 100 / 100**
    - **Agentic Browsing: 100 / 100**
    - **Performance: 99 / 100** (FCP: 0.9s, TBT: 10ms, CLS: 0.000, Speed Index: 0.9s)
  - **Status**: **Achieved**.

- [x] **Task 3.2: Print Stylesheet Validation (`@media print`)**
  - **Status**: **Completed**. Clean black-and-white print styles in `globals.css`.

---

## Summary Timeline & Milestones

| Milestone | Target | Status | Focus |
| :--- | :--- | :--- | :--- |
| **M1: Live Domain** | Today | In Progress | `saadlamkadam.com` HTTPS active and resolving worldwide. |
| **M2: Dual-Track Filter**| Today | **Done** | Recruiter stack switcher (`StackFilter.tsx`). |
| **M3: Deep Dossiers** | Today | **Done** | Architectural permalinks (`/systems/clawquant`, `/systems/reach-iot`). |
| **M4: Perfect Score** | Today | **Achieved** | Performance 99, Accessibility 100, Best Practices 100, SEO 100. |

