Roadmap for the full user journey. Use this as the backbone for specs, API contracts, and UX flows in Steps 1–4.

- Audience: product + eng + design.
- Promise: single source of truth for the tax-filing journey; each step links to a deeper doc in this folder.
- Inputs: user intent to file; authenticated session; FY context.
- Outputs: filed and verified ITR, stored artefacts, and a retained customer for next year.

Key rules to keep in mind while building:
- Every transition must have a clear data contract (what payload moves from one step to the next).
- Government sync (AIS/26AS) is the trust anchor; keep it visible in Step 1 and re-check in Step 2.
- E-verification is mandatory; do not let the flow end before it.
- Step 4 is not optional—surface it immediately after filing to drive retention.

```mermaid
flowchart TD
    Start["User Starts ITR Filing Journey"]
    NextYear["User Returns Next Year"]

    %% Step 1: Add Details
    subgraph S1 ["Step 1: Add Details"]
        direction TB
        B1["Personal Info<br/>PAN, Aadhaar, Bank"]
        B2["Income Sources<br/>Salary, Business, Rent, Gains"]
        B3["Deductions<br/>80C, 80D, Loans, Donations"]
        B4["Govt Data Sync<br/>AIS + Form 26AS"]

        B1 --> B2 --> B3 --> B4
    end

    %% Step 2: Calculate Tax
    subgraph S2 ["Step 2: Calculate Tax"]
        direction TB
        C1["Categorize Income Properly"]
        C2["Apply Deductions & Exemptions"]
        C3["Compare Old vs New Regime"]
        C4["Compute Final Tax<br/>Payable or Refund"]

        C1 --> C2 --> C3 --> C4
    end

    %% Step 3: File ITR
    subgraph S3 ["Step 3: File ITR"]
        direction TB
        D1["Select Correct ITR Form"]
        D2["Generate ITR JSON Schema"]
        D3["Submit Return<br/>Self Filing or ERI API"]
        D4["E-Verify Return<br/>OTP / Netbanking / DSC"]

        D1 --> D2 --> D3 --> D4
    end

    %% Step 4: Post Filing Relationship
    subgraph S4 ["Step 4: Post Filing Relationship"]
        direction TB
        E1["Track Refund Status"]
        E2["Notice & Compliance Alerts"]
        E3["Next Year Auto-Fill"]
        E4["Tax Saving Suggestions"]
        E5["Subscription Renewal & Support"]

        E1 --> E2 --> E3 --> E4 --> E5
    end

    %% Main Journey Flow
    Start --> B1
    B4 --> C1
    C4 --> D1
    D4 --> E1
    E5 --> NextYear
    NextYear --> B1
```