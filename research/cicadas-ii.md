---
title: CICADAS-II: Dosing Anti-Seizure Drugs in the ICU
citation: S. D. V. Stephens\*, T. Westover\*, S. F. Zafar, M. B. Westover. “CICADAS-II: Simulation-Based Causal Inference and Adaptive Dosing from Sparse Seizure Counts and Bolus Anti-Seizure Medication in the ICU.” Under major revision at the *Journal of Neural Engineering* (2026). \*Co-first authors.
status: Manuscript under review. Begun at Beth Israel Deaconess Medical Center and Harvard Medical School; continued at Stanford and Mass General Brigham.
summary: How to tell, from the records an intensive care unit already keeps, whether a way of dosing anti-seizure drugs saves lives, when the sickest patients are the ones who get the most drug.
order: 1
---

Doctors in intensive care units (ICUs) decide every few hours how hard to treat seizures, and both the seizures and the drugs that stop them can harm a patient. This paper asks whether the effect of a dosing strategy can be measured from the data hospitals already record, and how the dose should change from patient to patient.

:::note
The paper is under review, so this page describes its ideas and its main findings in words. Every result comes from a computer simulation under stated assumptions; none of it is advice about treating a real patient.
:::

## The problem

About one in five critically ill patients who are watched with continuous EEG has seizures, and most of these seizures cannot be seen at the bedside.

:::definition Electrographic seizure
A seizure that shows up in the brain's electrical activity, recorded by **EEG** (electroencephalography: electrodes on the scalp that measure that activity), without visible convulsions. Only the EEG reveals it.
:::

The more of the recording these seizures occupy, the worse patients tend to do. The drugs used to suppress them carry their own harms: sedation, low blood pressure, infections. So every few hours a clinician faces a trade-off: treat harder and accept more drug, or treat less and accept more seizures. How to make that trade-off, and whether the answer should differ between patients, is not known. Randomized trials have compared drugs for one kind of emergency seizure, but nobody has randomized the *intensity* of treatment over days in ICU patients, and doing so would be very difficult.

:::definition Randomized trial
An experiment in which a coin flip, not a doctor, decides which treatment each patient gets. Because chance makes the groups alike in every other respect, any difference in outcome can be credited to the treatment.
:::

Hospitals do record exactly the variation a study would need: automated detectors now mark seizures in every second of EEG, and medication records give the time and size of every dose. The question is whether that record can be trusted to answer a causal question.

## Why the obvious comparison fails

Suppose you compare patients who got more drug with patients who got less, and count deaths in each group.

:::example
Doctors give more drug to patients who are having more seizures. Those patients also tend to have worse brain injuries, so they are more likely to die whatever is done. The high-dose group therefore contains the sickest patients, and it has more deaths. Read naively, the drug looks deadly, even if it is helping every patient who receives it.
:::

:::definition Confounding
A **confounder** is something that influences both which treatment a patient gets and how the patient does, here the severity of the seizures. It makes treatment and outcome look related for reasons that have nothing to do with the treatment's effect. When the confounder is the very reason for treating, as here, it is called **confounding by indication**.
:::

In our simulation this is exactly what happened: the naive comparison pointed the wrong way, suggesting the drug harms patients when, in the simulated truth, it saves lives. The data have two further features that make the problem hard. Seizures arrive as rare, separate events, so most short stretches of EEG contain none. And drugs are given as scheduled injections (boluses), not as a smoothly adjusted drip.

## A simulated ICU where the truth is known

The approach is to build a computer model of ICU patients detailed enough to reproduce what makes the real problem hard. Because we wrote the model, we know the true effect of every dosing strategy on every simulated patient. We then analyze only the data a hospital would have recorded, the way an analyst with real data would have to, and check whether the analysis recovers the truth. The simulation follows 1,000 patients for 7 days, with a dose every 8 hours. It has five parts.

### The hidden seizure rate

Each patient's brain injury produces seizures at a rate (seizures per day) that rises as the injury develops and then decays:

$$\lambda_{\text{base}}(t) \;=\; A\,P\,\frac{e^{-\kappa t}\,\bigl(1-e^{-r t}\bigr)}{\max_t\, e^{-\kappa t}\bigl(1-e^{-rt}\bigr)}.$$

Here $t$ is time in days, $P$ is a typical peak rate (10 seizures a day), $A$ makes one patient's illness more or less severe than another's, $r$ controls how fast seizures escalate and $\kappa$ how fast they fade. The fraction divides by its own maximum so that the peak rate is exactly $A\cdot P$. Each patient gets their own $A$, $r$ and $\kappa$, drawn at random, so no two patients are alike. Nobody observes this rate directly; it is **latent** (hidden).

### Seizures as random events

:::definition Poisson process
A model for events that happen at random at a given average rate, like raindrops on a window. If the rate is $\lambda$ per day, the number of events in a short window of length $\Delta t$ is random, with average $\lambda\,\Delta t$.
:::

The simulation counts seizures in 5-minute windows. Even at the peak rate of 10 a day, the average count in one window is $10 \times 5/1440 \approx 0.035$, so about 96.5% of windows contain no seizure at all. This sparseness is what makes the real data hard to use: a strategy that simply reacts to the last seizure is reacting mostly to chance.

### The drug in the blood

:::definition Pharmacokinetics
How the amount of a drug in the body changes over time: how fast it rises after a dose and how fast the body clears it.
:::

Each dose adds to the drug already in the body, and between doses the body removes a fixed fraction of it every 5 minutes:

$$x_{k+1} \;=\; k_e\,x_k + D_k, \qquad k_e = \exp\!\Bigl(-\frac{\ln 2 \cdot \Delta t}{t_{1/2}}\Bigr).$$

Here $x_k$ is the drug on board at step $k$, $D_k$ is the dose given at that step (zero most of the time), and $t_{1/2} = 8$ hours is the drug's **half-life**, the time it takes for half of it to be cleared. The result is a sawtooth: a jump at each dose, then a steady decline.

### What the drug does

:::definition Pharmacodynamics
How the amount of drug in the body translates into its effect, here the suppression of seizures.
:::

The drug multiplies the seizure rate by a suppression factor between 0 and 1:

$$\lambda_{\text{obs}}(t) = \lambda_{\text{base}}(t)\, s\bigl(x(t)\bigr), \qquad s(x) = \frac{C_{50}^{\,\gamma}}{C_{50}^{\,\gamma} + x^{\gamma}}.$$

With no drug, $s = 1$ and nothing is suppressed; at the level $x = C_{50}$ half the seizures are suppressed; with a great deal of drug, $s$ approaches 0. The exponent $\gamma$ sets how sharply the drug switches from ineffective to effective. Sicker patients need more drug for the same effect, and older patients less.

### The risk of death

Each day, each patient has some probability of dying. It depends on the day, on the total seizure activity the patient has had so far (the **seizure burden**) and on the total drug exposure so far:

$$h_d \;=\; \frac{1}{1+e^{-z_d}}, \qquad z_d \;=\; c_d \;+\; \alpha\,L(d) \;+\; \beta\,X(d).$$

Here $c_d$ is a baseline for day $d$, $L(d)$ is the cumulative seizure burden and $X(d)$ the cumulative drug exposure through day $d$, and the weights $\alpha$ and $\beta$ say how harmful seizures and drug are for this patient. The function $1/(1+e^{-z})$ turns any number $z$ into a probability between 0 and 1. The seizure harm $\alpha$ grows with how sick the patient is (their organ-failure score, SOFA), and the drug harm $\beta$ grows with age.

Whether each harm weight is high or low defines four kinds of patient, or **phenotypes**: high seizure harm with low drug harm, high seizure harm with high drug harm, low seizure harm with low drug harm, and low seizure harm with high drug harm. The best dosing strategy is different for different phenotypes, which is one of the paper's central findings.

## Playing the analyst

The analyst sees only what a hospital would record: seizure counts in 5-minute windows, the doses given, a few facts about each patient, and who died. Two tools do the work.

### Estimating the hidden rate

:::definition Kalman filter
A method for keeping a running best guess of a quantity you cannot see directly, together with how uncertain that guess is, and updating both every time a new measurement arrives. The **extended** Kalman filter handles models that are not straight lines, as here.
:::

The filter turns the sparse, noisy seizure counts into a smooth estimate of each patient's current seizure rate. Adaptive dosing strategies use that estimate to decide the next dose.

### Estimating what would have happened

:::definition Counterfactual
What would have happened to the same patient under a different treatment. The effect of a strategy is the difference between the outcomes under that strategy and under another, for the same patients.
:::

:::definition Parametric g-formula
A way to estimate counterfactual outcomes from observational data. You fit models, from the recorded data, for how a patient's condition evolves and how their daily risk of death depends on their history. Then you replay every patient through those fitted models under each strategy you want to compare, and compare the survival you get. Because each step of the replay conditions on the patient's own history, the reason a patient was treated (their seizures) is accounted for, which is exactly what the naive comparison failed to do.
:::

The strategies compared were no treatment, treatment only when needed, a fixed dose, a tiered adaptive rule that raises the dose as the estimated seizure rate rises, and a new rule described below. Each strategy that has settings to choose was tuned on a separate group of patients before being tested, so that no strategy was given an unfair advantage.

## What we found

- **The g-formula recovered the effect.** Where the naive comparison got even the direction of the effect wrong, the g-formula came close to the true effect.
- **Some errors in the data do little damage.** Missed seizures and errors in the recorded timing of doses barely moved the estimate.
- **Other errors break it, in specific and checkable ways.** False seizure detections, doses missing from the record, a relationship between burden and death that levels off (saturates), and a strong confounder that the analyst cannot see all biased the estimate. Each of these can be looked for in real data before trusting an analysis.
- **No single dose suits every patient.** Matching each patient to the best strategy for their phenotype beat the best one-size-fits-all strategy, and stayed ahead even when a substantial fraction of patients were assigned to the wrong phenotype.

## The best dose balances two harms

The model has a feature that makes the best dose easy to describe. Each day's risk of death is driven by a running total of a single quantity, the harm being done at each moment:

$$f(t) \;=\; a\,\lambda_{\text{base}}(t)\,s\bigl(x(t)\bigr) \;+\; b\,x(t),$$

where the first term is the harm from the seizures that get through and the second the harm from the drug ($a$ and $b$ are the patient's harm weights $\alpha$ and $\beta$, rescaled). Lowering $f$ at any moment lowers the risk on every later day. So the best drug level at each moment is the one that makes $f$ as small as possible:

$$x^*(t) \;=\; \arg\min_{x \ge 0}\;\bigl[\,a\,\lambda_{\text{base}}(t)\,s(x) + b\,x\,\bigr].$$

:::note
$\arg\min$ means "the value of $x$ that makes the bracket smallest." Raising the dose a little removes some seizure harm and adds some drug harm; at the best level, the two changes cancel.
:::

Two consequences follow. When one harm dominates for almost every patient and hour, the best level hardly moves, and a well-chosen fixed dose is already optimal. When the two harms compete, the best level rises and falls with the patient's seizures, and that is where adapting the dose helps. A controller built on this rule, with no tuning on outcomes at all, matched the best fixed dose when one harm dominated and beat every tuned alternative when both harms were high. It also explains why a more complicated adaptive rule had lost to a simple fixed dose in an earlier version of this work.

## Checking against real patients

The simulation is not meant to copy any particular hospital, but its assumptions can be checked. In a real cohort of 9,108 patients on continuous EEG, seizure onsets were indeed sparse at the 5-minute scale; the usual anti-seizure drug, levetiracetam, was mostly given as a dose every 12 hours; and the amount of abnormal brain activity and the exposure to sedating drugs varied almost independently, so every combination of the two was common. Those are the ingredients an observational analysis needs.

## What this does not show

Everything above is a simulation result under the model's assumptions: one drug, one simplified pattern of illness, death risk that grows in a straight line with burden and exposure. The effect sizes are not estimates of what would happen in real patients. Applying the method to real patients requires checking the mortality model and the assignment of patients to phenotypes against real outcomes. That is the next stage of the project (CICADAS-III), which runs the framework on large real ICU datasets at Mass General Brigham.

## My part

I am co-first author with Tara Westover, and I wrote most of the simulation code: a MATLAB reference implementation and a Python port, with a test suite that checks the two give the same numbers, and a harness that regenerates every number and figure in the paper. The code will be released when the paper is published.
