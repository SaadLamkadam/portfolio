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

- [ ] **Task 2.1: Implement Dedicated System Dossier Permalinks**
  - **Context**: Weakness #2 (Single-page density limits engineering depth for Directors/Architects).
  - **Action**: Create lightweight static routes:
    - `/systems/clawquant`: High-frequency architecture, state invariant proofs, order dispatch flow.
    - `/systems/reach-iot`: Multi-site European hospitality sensor topology, GDPR isolation model.
    - `/systems/servizz-gov`: Office of the Prime Minister cross-ministry automation state machine.
  - **Success Condition**: Clean, shareable URLs with rich OpenGraph cards for technical interviews.

- [ ] **Task 2.2: Add Downloadable 1-Page System Architecture Brief (PDF)**
  - **Action**: Create a printable, high-density 1-page PDF architecture spec of ClawQuant and REACH IoT, available directly from the console chassis.

---

## 📌 Priority 3: Performance, Accessibility & Hardening

- [ ] **Task 3.1: Automated Lighthouse 100/100 Audit**
  - **Metrics**: Performance (100), Accessibility (100), Best Practices (100), SEO (100).
  - **Checks**:
    - Preload local font subsets (`Plus Jakarta Sans`, `Cormorant Garamond`, `JetBrains Mono`).
    - Verify image dimensions and `fetchpriority="high"` on the portrait photograph.
    - Validate `aria-expanded` and keyboard navigation on all interactive SVG schematics and rotary knob controls.

- [ ] **Task 3.2: Print Stylesheet Validation (`@media print`)**
  - **Action**: Verify that printing `saadlamkadam.com` strips interactive obsidian controls and formats a clean, ink-friendly 2-page executive summary for offline interview panels.

---

## Summary Timeline & Milestones

| Milestone | Target | Status | Focus |
| :--- | :--- | :--- | :--- |
| **M1: Live Domain** | Today | In Progress | `saadlamkadam.com` HTTPS active and resolving worldwide. |
| **M2: Dual-Track Filter**| Today | **Done** | Recruiter stack switcher (`StackFilter.tsx`). |
| **M3: Empirical Code** | Next Turn | Pending | Sanitized open-source ClawQuant core linked to instrument console. |
| **M4: Deep Dossiers** | Phase 2 | Pending | Architectural permalinks and printable architecture briefs. |
| **M5: Perfect Score** | Final | Pending | Lighthouse 100/100 across all four metrics. |
