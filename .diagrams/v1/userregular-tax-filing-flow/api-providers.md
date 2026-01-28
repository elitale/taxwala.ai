# Indian Tax Filing SaaS – API Provider Map (Production-Ready)

This document is a **step-by-step integration checklist** for building an Indian ITR filing SaaS (like TaxWala.ai).

It covers:

- Official government APIs (ERI)
- Trusted third-party providers
- Production onboarding steps
- Direct documentation links

---

# Overview: 4-Step Tax SaaS API Architecture

| Step | Goal | Core APIs Needed |
|------|------|------------------|
| Step 1 | Collect user details + documents | PAN, Aadhaar, Bank Validation, AIS/26AS |
| Step 2 | Compute taxes correctly | Account Aggregator, OCR, Gains import |
| Step 3 | File the return | ERI Filing APIs, e-Verification |
| Step 4 | Post-filing retention | Refund tracking, Notice support, CRM |

---

# Cross-Cutting APIs (Needed Across All Steps)

## 1. Authentication & User Accounts

### AWS Cognito (Recommended)
- Signup/login + MFA support
- Scales well for SaaS

Docs:  
https://docs.aws.amazon.com/cognito/

Onboarding:
1. Create AWS account  
2. Enable Cognito User Pool  
3. Configure MFA + OAuth  

---

### Auth0 (Fastest Setup)
Docs:  
https://auth0.com/docs/

---

### Keycloak (Self-hosted)
Docs:  
https://www.keycloak.org/documentation

---

## 2. Storage for Documents (Tax Locker)

### AWS S3 + KMS Encryption
Docs:  
https://docs.aws.amazon.com/s3/

Onboarding:
1. Create S3 bucket  
2. Enable encryption (KMS)  
3. Store Form16, AIS PDFs, ITR-V  

---

## 3. Notifications (Critical for Retention)

### SMS + WhatsApp

#### MSG91 (India-first)
Docs:  
https://msg91.com/

API Reference:  
https://docs.msg91.com/reference/send-sms-api

Steps:
1. Create MSG91 account  
2. Verify business  
3. Generate API key  

---

#### Twilio (Global)
Docs:  
https://www.twilio.com/docs/sms

---

### Email

#### Amazon SES
Docs:  
https://docs.aws.amazon.com/ses/

Steps:
1. Verify domain  
2. Request production access  
3. Send transactional emails  

---

# Step 1 – Add Details APIs

Goal: Identify user + collect correct financial data.

---

## 1. PAN Verification (Official)

### Protean (NSDL) PAN Verification API

- Official Online PAN Verification (OPV)
- Used by banks + fintechs

Docs:  
https://www.protean-tinpan.com/services/pan/online-pan-verification.html

Onboarding:
1. Apply as entity with Protean  
2. Sign agreement  
3. Receive production credentials  
4. Call PAN validation endpoints  

---

## 2. Aadhaar eKYC (Legal Approach)

### UIDAI Offline Aadhaar XML (Recommended)

- No biometric access needed
- User downloads offline XML

Docs:  
https://uidai.gov.in/ecosystem/authentication-devices-documents/offline-kyc.html

Flow:
1. User downloads Offline Aadhaar XML  
2. User uploads to TaxWala  
3. System verifies UIDAI signature  

---

## 3. CKYC Verification (Business Users)

### CERSAI CKYC Registry

Official portal:  
https://www.ckycindia.in/

Direct API access requires KUA/KSA partner.

Third-party API providers:

#### Surepass CKYC API
Docs:  
https://surepass.io/products/ckyc-verification-api

Steps:
1. Signup with Surepass  
2. Complete KYC  
3. Get API keys  

---

## 4. Bank Account Validation (Refund Account)

### RazorpayX Penny Drop Verification

Docs:  
https://razorpay.com/docs/api/x/payouts/composite-account-validation/

Supports:
- Penny-drop validation
- Account holder name match

Steps:
1. RazorpayX account  
2. Enable payouts  
3. Use `/validate` endpoint  

---

### Cashfree Bank Validation + IFSC Lookup

Docs:  
https://docs.cashfree.com/docs/ifsc-verification

Steps:
1. Signup Cashfree  
2. Request production keys  
3. Validate IFSC + account  

---

## 5. Government Data Sync (AIS + Form 26AS)

### Income Tax Department ERI APIs (Mandatory)

Official ERI API Specs:  
https://www.incometax.gov.in/iec/foportal/help/api-documentation

Capabilities:
- Fetch AIS  
- Fetch Form 26AS  
- Prefill return data  

Access Requirements:
1. Register as ERI (Type-2)  
2. Complete ITD onboarding  
3. Get API client credentials  

---

# Step 2 – Tax Calculation APIs

Goal: Convert documents → taxable income → refund/payable.

---

## 1. Bank Data Import (Optional but Powerful)

### Account Aggregator Network (RBI Licensed)

Lets users share bank statements securely via consent.

---

### Onemoney AA

Docs:  
https://onemoney.in/developer

Steps:
1. Apply as FIU  
2. Integrate consent flow  
3. Fetch bank transaction data  

---

### Finvu AA

Docs:  
https://finvu.in/

---

### CAMS FinServ AA

Docs:  
https://www.camsfinserv.com/account-aggregator.html

---

## 2. Capital Gains Prefill

### CAMS + KFintech CAS Statements

CAS portal:
https://www.camsonline.com/Investors/Statements/CAS.aspx  
https://www.kfintech.com/

Used for:
- Mutual fund holdings
- Capital gains prefill

API access usually via partner onboarding.

---

## 3. OCR for Document Extraction

### AWS Textract (Best for PDFs)

Docs:  
https://docs.aws.amazon.com/textract/

Use cases:
- Extract Form 16 values  
- Read rent receipts  
- Parse invoices  

Steps:
1. Enable Textract in AWS  
2. Upload doc → get structured JSON  

---

### Google Vision OCR

Docs:  
https://cloud.google.com/vision/docs/ocr

---

### Azure Form Recognizer

Docs:  
https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/

---

# Step 3 – Filing APIs (Core Product)

Goal: Submit return officially + verify.

---

## 1. ERI Filing Integration (Official)

### Income Tax ERI Return Submission APIs

Docs:  
https://www.incometax.gov.in/iec/foportal/help/api-documentation

Key APIs:
- Schema download  
- Validate JSON  
- Submit Return  
- Fetch acknowledgement  

Steps:
1. Become Type-2 ERI  
2. Implement JSON generator  
3. Validate against schema  
4. Submit return via API  

---

## 2. E-Verification APIs

Supported methods:
- Aadhaar OTP  
- Netbanking  
- Bank EVC  
- DSC  

Docs (ERI e-Verify):  
https://www.incometax.gov.in/iec/foportal/help/api-documentation

---

## 3. Digital Signature (DSC)

### emSigner API

Used for:
- Companies
- Tax audits

Docs:  
https://emsigner.com/

Steps:
1. Partner onboarding  
2. Install signing gateway  
3. Trigger DSC signing workflow  

---

# Step 4 – Post Filing APIs (Retention Engine)

Goal: Keep users engaged year-round.

---

## 1. Refund & Status Tracking

Via ERI APIs (where exposed):
- Return processing status  
- Refund initiation  

Portal fallback:
https://www.incometax.gov.in/

---

## 2. Notice Management

No public notice API exists.

Approach:
- Poll ERI inbox (if available)
- User uploads notice PDF
- OCR + CA support

OCR Providers:
- AWS Textract  
- Google Vision  

---

## 3. CRM + Lifecycle Automation

### MoEngage (India SaaS Standard)
Docs:  
https://www.moengage.com/docs/

---

### CleverTap
Docs:  
https://clevertap.com/developers/

---

### HubSpot CRM
Docs:  
https://developers.hubspot.com/docs

Use for:
- Renewal reminders  
- Notice protection upsell  
- Filing season campaigns  

---

# Recommended MVP Provider Stack (TaxWala.ai)

| Category | MVP Choice |
|---------|------------|
| PAN Verification | Protean OPV |
| Aadhaar | UIDAI Offline XML |
| Bank Validation | RazorpayX |
| Govt Sync | ERI APIs |
| OCR | AWS Textract |
| Filing | ERI Submission APIs |
| Notifications | MSG91 + SES |
| CRM | MoEngage |

---

# Next Steps for You

To go production, you need:

1. Apply for ERI registration (most important)
2. Integrate PAN + Bank verification
3. Build JSON return generator
4. Start with ITR-1 salaried MVP
5. Add AA + Gains import later
