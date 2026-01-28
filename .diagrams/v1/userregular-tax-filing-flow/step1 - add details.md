Step 1 is the foundation. If we capture the right inputs cleanly, Steps 2–4 stay automated and low-friction.

What this doc covers
- Purpose: build a document-collection and validation engine that converts raw uploads into structured data.
- Audience: product, backend, frontend, and QA.
- Outcome: validated user profile + income + deductions + tax credits ready for Step 2.

Success criteria
- Mandatory profile fields are captured and verified (PAN, Aadhaar linkage, contact, refund bank).
- Income types drive a dynamic, minimal doc checklist (no “upload everything”).
- AIS/26AS sync runs before the user leaves Step 1; mismatches are surfaced.
- Output is a normalized payload ready for the tax engine.

Phase breakdown
1) Basic profile (required for all)
- PAN (text, format validation; optional card upload).
- Aadhaar (masked entry; ensure linkage flag).
- Contact: mobile + email for OTP/login/notices.
- Refund bank: account number, IFSC, bank name; optional cancelled cheque; mark prevalidation status.

2) Income source discovery (drives checklist)
- Ask: “What type of income did you have this year?”
- Options: Salary; Business/Freelance; Bank Interest; Stocks/Mutual Funds; Crypto/VDA; Rental; Pension; Foreign; Other.
- Persist selections; they decide which doc widgets render.

3) Document requirements by income type (dynamic rendering)
- Salary: Form 16 (mandatory); salary slips (optional backup); HRA proofs if claimed (rent receipts + landlord PAN when rent > 1L).
- Bank interest: bank statement or interest certificate; Form 16A if TDS deducted.
- Business/Freelance: invoices/payment proofs; expense proofs (rent, tools, travel, internet); optional GST returns; system-generated P&L summary if available.
- Capital gains (equity/MF): broker capital gains statement; Mutual Fund CAS.
- Crypto/VDA: full transaction report (flat 30% rule).
- Rental: rent received summary; optional rent agreement; home-loan interest certificate if applicable.
- Other: dividends, pension certificate, lottery/other proofs.

4) Deduction document collection
- Ask: “Did you invest in tax-saving instruments?”
- Collect proofs for 80C (LIC/PPF/ELSS/tuition), 80D (health insurance premiums), 80E (education loan interest), 80G (donations), 80CCD (NPS contributions).

5) Government data sync (trust anchor)
- Fetch AIS + Form 26AS after uploads.
- Show status chips: Matched, Missing income found, TDS credit missing.
- Highlight gaps before allowing progress.

6) Validation gate before Step 2
- PAN verified; Form 16 present when Salary is selected.
- AIS synced at least once; required deduction proofs present for claimed sections.
- Refund bank validated or marked pending; upload set is complete per income selection.

Step 1 output (data contract to Step 2)
- Profile: PAN, Aadhaar, address, contact, bank info with validation flags.
- Income summary: salary, interest, gains, business, rental, other (numbers + source docs).
- Deductions: amounts per section with proof references.
- Tax credits: TDS/TCS/advance-tax derived from 26AS.

UX copy guidance
- Avoid “Upload everything.” Prefer “Connect your tax data” and “We’ll auto-detect missing income.”
- Keep checklist short and context-specific; pre-fill wherever possible.

MVP scope (TaxWala.ai launch)
- Must: PAN, Form 16 upload, AIS sync, bank interest, 80C + 80D proofs.
- Nice later: business/GST flows, crypto, full notice handling for mismatches.

# Flow diagram

```mermaid
flowchart TD

	Start["Step 1 Start: Add Details"]

	%% Phase 1: Basic Profile
	subgraph P1["Phase 1: Basic Profile (Mandatory)"]
		direction TB
		A1["Enter PAN"]
		A2["Enter Aadhaar"]
		A3["Add Mobile + Email"]
		A4["Add Refund Bank Account Details"]
		A1 --> A2 --> A3 --> A4
	end

	%% Phase 2: Income Source Discovery
	subgraph P2["Phase 2: Income Source Discovery"]
		direction TB
		B1["Select Income Types"]
		B2["Salary"]
		B3["Business / Freelance"]
		B4["Bank Interest"]
		B5["Capital Gains"]
		B6["Crypto"]
		B7["Rental Income"]
		B8["Other Income"]
		B1 --> B2
		B1 --> B3
		B1 --> B4
		B1 --> B5
		B1 --> B6
		B1 --> B7
		B1 --> B8
	end

	%% Phase 3: Income Document Collection
	subgraph P3["Phase 3: Upload Income Documents (Dynamic)"]
		direction TB
		C1["Salary → Upload Form 16"]
		C2["Business → Upload Invoices + Expenses"]
		C3["Capital Gains → Upload Broker / MF Report"]
		C4["Crypto → Upload Transaction Report"]
		C5["Rent → Upload Rent Summary"]

		C6["Upload Bank Statement (Key for Interest + Cross-check)"]
	end

	%% Phase 4: Deduction Proofs
	subgraph P4["Phase 4: Upload Deduction Proofs"]
		direction TB
		D1["80C (PPF/LIC/ELSS)"]
		D2["80D (Health Insurance)"]
		D3["80E (Education Loan Interest)"]
		D4["80G (Donations)"]
		D1 --> D2 --> D3 --> D4
	end

	%% Phase 5: Govt Sync & Validation
	subgraph P5["Phase 5: Govt Data Sync & Validation"]
		direction TB
		E1["Fetch AIS + Form 26AS"]
		E2["Match Income + TDS Credits"]
		E3["Flag Missing Income / Mismatches"]
		E4["Step 1 Complete → Structured Data Ready"]
		E1 --> E2 --> E3 --> E4
	end

	%% Main Flow
	Start --> P1 --> P2 --> P3 --> P4 --> P5
	E4 --> End["Proceed to Step 2: Tax Calculation"]
```