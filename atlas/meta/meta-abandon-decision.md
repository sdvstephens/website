It's hour four of the Putnam. You've sunk $40$ minutes into problem B4 and have half an idea. Two
other problems you haven't touched look approachable. The gut says "I've invested so much, I can't
quit now." The gut is wrong. When exactly *should* you abandon a problem — and can that be made
into an actual rule rather than a feeling?

## Discovery

1. Set up the ledger. The Putnam is $6$ problems in each of two $3$-hour sessions, each worth $10$
   points; your score is the *sum* over problems. Your total time is fixed. If you spend the next
   $t$ minutes, you can spend them on *this* problem or on a *different* one. What is the quantity
   you are actually trying to maximize across the whole exam?
2. Consider a single block of the next $\Delta t$ minutes. Estimate two numbers: $g_{\text{here}}$,
   the expected points that $\Delta t$ buys if spent on the current problem, and
   $g_{\text{best}}$, the expected points if spent on the best available alternative. Which use of
   $\Delta t$ should you pick, and does the answer depend at all on how many minutes you have
   *already* spent on the current problem?
3. The $40$ minutes already spent — do they enter the comparison in step 2? Argue explicitly
   whether past time changes $g_{\text{here}}$ or $g_{\text{best}}$ going forward. Name the fallacy
   of letting them in.
4. Now build a usable *trigger*. Rather than re-estimating continuously, pick a decision rule of
   the form: "abandon the current problem when [some observable condition] holds." Propose a
   concrete condition in terms of expected marginal points per minute.
5. Reflect: the whole exam is a resource-allocation problem under a fixed budget. State, in one
   sentence, the optimal principle for allocating the *next* unit of time.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Claim (the abandon-decision).** On a fixed-time, additively-scored exam like the Putnam, the
strategy that maximizes expected total score allocates each next increment of time to whichever
available problem has the **highest expected marginal points per minute**, and it **ignores time
already spent** (sunk cost). The operational **abandon rule**: *abandon your current problem the
moment its expected marginal value per minute, going forward, drops below that of the best
untouched or partially-solved alternative.* Two immediate corollaries:

- **Breadth first.** Early on, sample many problems briefly to *estimate* each one's marginal
  value; a quick read is a cheap, high-value measurement.
- **Sunk cost is irrelevant.** "I've already spent $40$ minutes" must not appear in the decision;
  only *future* expected yield counts.

This is a strategy claim, not a theorem about numbers, but it is a *provable* consequence of
expected-value maximization under a budget constraint. It applies whenever score is a sum of
independent per-problem contributions and time is the scarce shared resource. Caveat: the "expected
marginal value" is *your estimate*, necessarily rough; the rule is only as good as your
calibration, and it assumes the greedy allocation is near-optimal (justified below for the
smooth/concave regime).

### Proof

We justify the rule as expected-value maximization under a fixed time budget, then show sunk cost
drops out.

**Setup.** Let the problems be $i = 1, \dots, m$, and let $f_i(\tau)$ be your *expected* points on
problem $i$ if you allocate it a total of $\tau$ minutes (a random outcome averaged: partial
credit, probability of a full solve, etc.). Your expected total score is $\sum_i f_i(\tau_i)$
subject to the budget $\sum_i \tau_i = T$, $\tau_i \ge 0$. You want to maximize
$\mathbb{E}[\text{score}] = \sum_i f_i(\tau_i)$.

**Marginal value governs allocation.** Suppose each $f_i$ is nondecreasing and concave (diminishing
returns: the first minutes on a problem buy more than the last — a good model once you have some
traction). Consider moving a small slice $\delta$ of time from problem $i$ to problem $j$. The
change in expected score is $f_j'(\tau_j)\,\delta - f_i'(\tau_i)\,\delta + o(\delta)$. If
$f_j'(\tau_j) \gt f_i'(\tau_i)$, the move is positive — you should shift time toward $j$. At an
optimum no such beneficial shift exists, so all *active* problems (those with $\tau_i \gt 0$) share
a common marginal value $\lambda$, and every problem left at $\tau_i = 0$ has $f_i'(0) \le \lambda$.
Equivalently: **at every instant, put the next minute where the marginal expected points per
minute $f_i'$ is largest.** That greedy rule is exactly optimal for concave $f_i$ (it is the
Lagrange/water-filling condition $f_i'(\tau_i) = \lambda$), and it is the "abandon when your
current $f_i'$ falls below the best alternative's" rule stated above.

**Sunk cost is provably irrelevant.** The decision at time $t$ depends only on the *derivatives*
$f_i'(\tau_i)$ evaluated at the *current* allocations — i.e. on the *marginal future* yield. The
already-spent time $\tau_i$ enters only through where on its curve you now sit; the *quantity*
$f_i(\tau_i)$ of points already banked (or effort already sunk) does not appear in the comparison
$f_i'$ vs $f_j'$ at all. Formally, maximizing $\sum_i f_i(\tau_i)$ forward from the present is a
fresh optimization over the *remaining* budget $T - \sum_i \tau_i^{\text{spent}}$; the objective's
past values are constants that don't affect the argmax. Hence "I've already invested $40$ minutes"
carries zero decision weight — treating it as a reason to continue (the **sunk-cost fallacy**)
strictly violates the optimum whenever the current $f_i'$ has fallen below an alternative's. $\blacksquare$

### Worked Instance

Resolving the Hook. Model the moment concretely. You estimate that another $20$ minutes on B4
gives you maybe a $25\%$ chance of closing it for a partial $\to$ perhaps $2$ expected points, so
$f_{\text{B4}}' \approx \tfrac{2}{20} = 0.10$ expected points/minute *going forward*. An untouched
approachable problem you'd estimate at a $60\%$ chance of a solid solve in $30$ minutes $\to
\approx 6$ expected points, so $f_{\text{new}}' \approx \tfrac{6}{30} = 0.20$ points/minute. Since
$0.20 \gt 0.10$, the next minute belongs to the new problem: **abandon B4.** The $40$ minutes
already spent do not enter either estimate — they are sunk. Note the breadth-first corollary in
action: the only reason you *have* the $0.20$ estimate is that you read the other problems early.
The rule converts "should I quit?" into a concrete comparison of forward marginal yields.

### Pitfalls

- **Sunk-cost fallacy.** "I've spent so long, I must finish" injects past effort into a
  forward-only decision. Banked time never justifies more time.
- **No breadth-first sampling.** If you never read the other problems, you can't estimate
  $f_{\text{best}}'$, so you can't apply the rule. Cheap measurements first.
- **Ignoring diminishing returns / all-or-nothing scoring.** The concavity model assumes partial
  progress has value; if a problem is genuinely all-or-nothing near a breakthrough, $f_i'$ can
  *spike* — re-estimate honestly rather than mechanically.
- **Miscalibrated estimates.** The rule optimizes *expected* value; wildly optimistic or
  pessimistic probability guesses break it. Calibrate against your own past performance.
- **Greedy $\ne$ optimal off the concave regime.** For non-concave $f_i$ (a threshold you must
  clear to earn anything), pure greed can be suboptimal; treat the rule as a strong default, not
  gospel.

:::
:::

## Connections

Prereqs: none — this is a strategy node, drawing on the same expected-value spirit as
**comb-linearity-expectation** (reasoning about expectations of sums). It is the meta-cognitive
partner to every technique node: knowing *a* method matters less under time pressure than
allocating attention to where it pays. Recognition trigger: any timed, multi-part, additively
scored contest (Putnam, IMO with its per-problem scoring, AIME) — and, more broadly, any
fixed-budget portfolio of independent tasks. The one-line takeaway: **spend the next minute where
its expected marginal payoff is highest, and never let past minutes vote.**
