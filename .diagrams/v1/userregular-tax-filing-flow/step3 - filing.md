# Details

Perfect. Step 3 is where your SaaS becomes a real “filing platform”, not just a calculator.

Step 1 = collect
Step 2 = compute
Step 3 = submit officially to Income Tax Department

Let’s break Step 3 into clear phases like we did for Step 1 and Step 2.

⸻

Step 3: File the ITR (Multi-Phase Execution Plan)

Think of Step 3 as:

Calculated Return → Government Format → Submission → Verification → Acknowledgement

⸻

Phase 1: ITR Form Selection (Final Confirmation)

Even though Step 2 identifies the form, Step 3 confirms:
	•	ITR-1 → Salary + Interest
	•	ITR-2 → Capital gains
	•	ITR-3 → Business/Freelance
	•	ITR-4 → Presumptive business

Output:
Correct ITR schema locked

⸻

Phase 2: Prefill Return Data Structure

Now build the return in the same format as Income Tax portal expects:
	•	Personal details
	•	Income schedules
	•	Deduction schedules
	•	Tax computation section
	•	Bank refund details

This is your internal “Return Object”.

Output:
Complete return dataset

⸻

Phase 3: Generate Government-Compatible ITR JSON

Income Tax portal accepts:
	•	Online form filling OR
	•	JSON upload

Your SaaS must generate:
	•	Valid ITR JSON file
	•	Schema compliant
	•	All schedules filled correctly

Output:
Ready-to-submit JSON

⸻

Phase 4: Filing Mode Decision (How User Will Submit)

Your SaaS offers 2 paths:

Option A: Self Filing (MVP)
	•	User downloads JSON
	•	Uploads manually on portal

Option B: Assisted Filing (Full SaaS)
	•	Platform files directly via ERI APIs
	•	Requires Protean ERI registration

Output:
Submission path chosen

⸻

Phase 5: Submission to Income Tax Portal

If Self Filing:
	•	Provide step-by-step upload guide

If ERI Filing:
	•	Submit return via API
	•	Track submission status

Output:
ITR Successfully Filed

⸻

Phase 6: Acknowledgement Generation

After submission, user receives:
	•	ITR-V acknowledgement
	•	Filing reference number
	•	Date/time stamp

Your SaaS should store and show:

“Return filed successfully”

Output:
Acknowledgement saved

⸻

Phase 7: E-Verification (Mandatory Step)

Return is incomplete unless verified.

Methods:
	•	Aadhaar OTP
	•	Netbanking login
	•	DSC (for companies)
	•	EVC via bank account

Your SaaS should guide user instantly:

“Verify now (recommended)”

Output:
ITR Verified

⸻

Phase 8: Post-Filing Compliance Checks

Immediately after filing:
	•	Confirm status = “Filed & Verified”
	•	Check if refund expected
	•	Detect if tax payment pending

Output:
Filing completed properly

⸻

Phase 9: Store Filing Record for Step 4 Relationship

Save everything for long-term retention:
	•	Filed JSON
	•	ITR-V PDF
	•	Regime chosen
	•	Refund amount
	•	Next year carry-forward losses (if any)

Output:
User profile ready for next year auto-fill

⸻

Step 3 Final Output

At the end of Step 3, user should have:

✅ Filed return
✅ Verified return
✅ Acknowledgement downloaded
✅ Status tracking enabled

⸻

SaaS Feature Layers (Important)

MVP Filing (Fastest Launch)
	•	Generate JSON
	•	User uploads manually
	•	Verification guide

Full Filing Platform (TaxWala.ai Vision)
	•	ERI API filing
	•	One-click submission
	•	Auto-verification flows
	•	Notice support

⸻

Step 3 Summary Pipeline
	1.	Confirm ITR form
	2.	Build return object
	3.	Generate valid JSON
	4.	Choose filing mode
	5.	Submit return
	6.	Generate acknowledgement
	7.	E-verify
	8.	Compliance check
	9.	Store for future

⸻

If you want, I can now create:
	1.	Mermaid flow diagram for Step 3
	2.	JSON schema architecture
	3.	ERI integration checklist (Protean)
	4.	Exact MVP vs Full Filing roadmap

Just say “draw step 3 mermaid”.

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