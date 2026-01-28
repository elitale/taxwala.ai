Step 3 is the filing layer. It turns the computed return into a government-acceptable submission with verification and artefact storage.

What this doc covers
- Purpose: build the ITR submission workflow (self-file and ERI API) with mandatory e-verification.
- Audience: backend for schema/ERI integration, frontend for guidance flows, QA for blocking conditions.
- Outcome: filed and verified return with stored acknowledgement and artefacts for Step 4.

Success criteria
- Correct ITR form is locked based on Step 2, with user confirmation of income sources.
- Generated JSON is schema-compliant with the IT portal (all schedules populated).
- User chooses filing mode: self-upload (MVP) or ERI (platform-driven); both are tracked.
- E-verification is enforced; flow cannot end without verification status.
- Filed JSON, ITR-V, reference numbers, and regime choice are stored for future use.

Execution plan
1) Form confirmation: auto-select from Step 2; let user confirm or fix anomalies before locking.
2) Build return object: fill personal details, income/deduction schedules, tax computation, and refund bank details exactly as portal expects.
3) Generate ITR JSON: convert return object to official schema; validate before exposing for download/submit.
4) Choose filing mode:
   - Option A (MVP): user downloads JSON and uploads manually (provide guided steps).
   - Option B (full): ERI API submission via Protean; maintain status callbacks.
5) Submit: upload or API submit; capture filing confirmation response.
6) Acknowledgement: store ITR-V, filing reference number, timestamp; show success state.
7) E-verification: Aadhaar OTP, netbanking/EVC, or DSC; block completion until verified.
8) Post-filing checks: ensure status Filed + Verified; compute refund/payable summary; persist artefacts for Step 4.

Data contract to Step 4
- Filing status, verification status, acknowledgement number/time.
- Stored artefacts: filed JSON, ITR-V PDF, regime chosen, refund amount, carry-forward losses metadata.
- Submission mode (self/ERI) and any pending payment actions.

MVP scope
- Generate JSON, provide manual upload guide, enforce e-verification, store acknowledgement.
- ERI integration can be feature-flagged; add later with the same data contract.

# Flow diagram

```mermaid
flowchart TD

    Start["Step 3 Start: File the ITR"]

    %% Phase 1: Confirm ITR Form
    subgraph P1["Phase 1: Confirm Correct ITR Form"]
        direction TB
        A1["Auto-selected ITR Form from Step 2"]
        A2["User Confirms Income Sources"]
        A3["Lock Final ITR Type (ITR-1/2/3/4)"]
        A1 --> A2 --> A3
    end

    %% Phase 2: Build Return Data Object
    subgraph P2["Phase 2: Prepare Return Data Structure"]
        direction TB
        B1["Fill Personal Details"]
        B2["Fill Income Schedules"]
        B3["Fill Deduction Schedules"]
        B4["Fill Tax Computation Section"]
        B5["Add Bank Refund Details"]
        B1 --> B2 --> B3 --> B4 --> B5
    end

    %% Phase 3: Generate Govt-Compatible JSON
    subgraph P3["Phase 3: Generate ITR JSON File"]
        direction TB
        C1["Convert Return Object to Govt Schema"]
        C2["Validate JSON Format + Rules"]
        C3["ITR JSON Ready for Submission"]
        C1 --> C2 --> C3
    end

    %% Phase 4: Choose Filing Mode
    subgraph P4["Phase 4: Filing Mode Decision"]
        direction TB
        D1["Option A: Self Filing (Upload JSON Manually)"]
        D2["Option B: ERI Assisted Filing (API Submission)"]
    end

    %% Phase 5: Submit Return
    subgraph P5["Phase 5: Submit Return to IT Portal"]
        direction TB
        E1["Submit via Portal Upload OR ERI API"]
        E2["Receive Filing Confirmation"]
        E1 --> E2
    end

    %% Phase 6: Generate Acknowledgement
    subgraph P6["Phase 6: Acknowledgement & Record"]
        direction TB
        F1["Generate ITR-V Acknowledgement"]
        F2["Store Filing Reference Number"]
        F3["Return Status = Filed"]
        F1 --> F2 --> F3
    end

    %% Phase 7: E-Verification
    subgraph P7["Phase 7: E-Verify Return (Mandatory)"]
        direction TB
        G1["Aadhaar OTP Verification"]
        G2["Netbanking / EVC Verification"]
        G3["DSC Verification (if required)"]
        G4["Return Status = Verified"]
        G1 --> G4
        G2 --> G4
        G3 --> G4
    end

    %% Phase 8: Post-Filing Checks
    subgraph P8["Phase 8: Post-Filing Compliance Check"]
        direction TB
        H1["Confirm Filed + Verified Status"]
        H2["Refund or Tax Due Summary"]
        H3["Save Documents for Step 4"]
        H1 --> H2 --> H3
    end

    %% Main Flow
    Start --> P1 --> P2 --> P3 --> P4
    P4 --> P5 --> P6 --> P7 --> P8

    %% Output
    H3 --> End["Proceed to Step 4: Post Filing Relationship"]
```