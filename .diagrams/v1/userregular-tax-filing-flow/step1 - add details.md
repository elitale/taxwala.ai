Perfect. Step 1 is the foundation of your entire SaaS.

If Step 1 is designed well:
	•	calculation becomes automatic
	•	filing becomes error-free
	•	users trust you
	•	retention improves

So let’s go deep.

⸻

Step 1: Add Details (Document Collection Engine)

Think of Step 1 as:

User onboarding + income discovery + document gathering + govt cross-check

Your SaaS should NOT ask for “upload everything”.

Instead:

Ask questions → Identify income types → Show only required docs.

⸻

Step 1 Breakdown (Best SaaS Structure)

Phase 1: Basic Profile (Required for Everyone)

Collect these first (mandatory)

1. PAN

Why:
	•	PAN is the taxpayer ID
	•	Needed for AIS, Form 26AS, filing

Input:
	•	PAN number (text)
Optional:
	•	PAN card upload

⸻

2. Aadhaar

Why:
	•	Required for e-verification
	•	Linking is mandatory

Input:
	•	Aadhaar number (masked)
No need for full upload usually

⸻

3. Contact Details

Why:
	•	OTP login + notices + updates
	•	Mobile number
	•	Email

⸻

4. Bank Account (Refund)

Why:
	•	Refund goes here
	•	Prevalidation required

Inputs:
	•	Account number
	•	IFSC
	•	Bank name

Document:
	•	Cancelled cheque (optional)

⸻

Phase 2: Income Source Discovery (Smart Questionnaire)

Before documents, ask:

“What type of income did you have this year?”

Checkboxes:
	•	Salary (job)
	•	Freelancing / Business
	•	Bank Interest
	•	Stocks / Mutual Funds
	•	Crypto
	•	Rental Income
	•	Pension
	•	Foreign Income
	•	Other income

This decides the entire doc checklist.

⸻

Phase 3: Document Requirements by Income Type

Now show document requests dynamically.

⸻

A. Salary Income (Most Common)

Required Documents

1. Form 16 (mandatory)
Why:
	•	Salary breakup
	•	Employer TDS proof

Data extracted:
	•	Gross salary
	•	Exemptions
	•	Standard deduction
	•	TDS paid

Upload:
PDF

⸻

2. Salary Slips (optional)
Why:
	•	Backup if Form 16 incorrect
	•	Helps validate allowances

⸻

3. HRA Proof (only if claimed)
Documents:
	•	Rent receipts
	•	Landlord PAN (if rent > ₹1L/year)

Why:
	•	Needed to support exemption

⸻

B. Bank Interest Income

Required

1. Bank Statement OR Interest Certificate
Why:
	•	Savings interest not fully shown in Form 16

Extract:
	•	Savings interest
	•	FD interest

⸻

2. Form 16A (if TDS deducted)
Why:
	•	Bank deducted tax, must claim credit

⸻

C. Business / Freelancing

Required

1. Revenue Proof
	•	Invoices
	•	Payment receipts

Why:
	•	Establish turnover

⸻

2. Expense Proof (if actual taxation)
	•	Rent
	•	Software tools
	•	Travel
	•	Internet

Why:
	•	Reduce taxable profit

⸻

3. P&L Summary (system-generated ideally)

⸻

4. GST Returns (if registered)
Why:
	•	Govt matches turnover

⸻

D. Capital Gains (Stocks, Mutual Funds)

Required

1. Broker Capital Gains Statement
Why:
	•	STCG vs LTCG rules differ

Extract:
	•	Sale value
	•	Purchase value
	•	Gains

⸻

2. Mutual Fund CAS
Why:
	•	Consolidated investment record

⸻

E. Crypto / VDA Income

Required

Transaction Report
Why:
	•	Flat 30% tax + mandatory reporting

⸻

F. Rental Income

Required

Rent Received Summary
Why:
	•	Income under House Property

Optional:
	•	Rent agreement

⸻

Home Loan Interest Certificate (if property financed)
Why:
	•	Deduction under Section 24

⸻

G. Other Income
	•	Dividend statements
	•	Pension certificate
	•	Lottery winnings proof

⸻

Phase 4: Deduction Document Collection

After income docs, ask:

“Did you invest in tax saving instruments?”

⸻

Common Deduction Docs

80C (up to ₹1.5L)
	•	LIC receipts
	•	PPF proof
	•	ELSS statement
	•	Tuition fees receipt

⸻

80D (Health Insurance)
	•	Premium receipts

⸻

80E (Education Loan)
	•	Interest certificate

⸻

80G (Donations)
	•	Donation receipts

⸻

NPS (80CCD)
	•	Contribution statement

⸻

Phase 5: Government Data Sync (Most Important SaaS Feature)

Once docs are uploaded, connect:

AIS + Form 26AS

Why:
	•	Govt already has salary, interest, trades
	•	Prevent mismatch notices

Your SaaS should show:
	•	“Matched”
	•	“Missing income found”
	•	“TDS credit missing”

This is the trust-builder.

⸻

Phase 6: Validation Rules (Step 1 Output)

Before moving to Step 2, system must ensure:
	•	PAN verified
	•	Form 16 uploaded (if salary)
	•	AIS matched
	•	Required deductions supported
	•	Bank account validated

⸻

Step 1 Output (Clean Structured Data)

By end of Step 1, you should have:

User Profile
	•	PAN, Aadhaar, Address

Income Summary
	•	Salary: X
	•	Interest: Y
	•	Gains: Z

Deductions
	•	80C: A
	•	80D: B

Tax Credits
	•	TDS: C

This becomes input for Step 2 Calculation.

⸻

Product Design Suggestion (Best UX)

Do NOT call it “Upload Documents”

Call it:
	•	“Connect your tax data”
	•	“Upload Form 16”
	•	“We’ll auto-detect missing income”

Keep it simple.

⸻

MVP Document Collection (TaxWala.ai Launch)

Start with only:

✅ PAN
✅ Form 16
✅ AIS Sync
✅ Bank Interest
✅ 80C + 80D

This covers 80% of salaried India.

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