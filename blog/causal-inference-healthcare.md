# Causal Inference in Healthcare Data

Randomized controlled trials (RCTs) are the gold standard for establishing causation. But in critical care settings, RCTs are often impractical or unethical. Patients arrive in varied states, treatments must be administered immediately, and withholding potentially life-saving interventions for a control group raises serious ethical concerns.

## The Challenge

Observational data is abundant — electronic health records capture everything from vital signs to medication doses. But correlation is not causation. A patient who receives Drug A might have better outcomes, but perhaps Drug A was given to less severe cases.

This is **confounding**: variables that influence both treatment assignment and outcomes.

## Approaches

Several methodologies attempt to extract causal effects from observational data:

- **Propensity Score Matching**: Estimate the probability of treatment given covariates, then match treated and untreated patients with similar scores
- **Instrumental Variables**: Find a variable that affects treatment but not outcomes directly
- **Difference-in-Differences**: Compare changes over time between treated and untreated groups
- **G-computation and Structural Models**: Model the full data-generating process

## CICADAS Framework

My current work at Beth Israel develops CICADAS — a framework specifically designed for critical care anti-seizure treatment. The goal: enable clinicians to make evidence-based decisions even when RCTs aren't feasible.

More details as the research progresses.
