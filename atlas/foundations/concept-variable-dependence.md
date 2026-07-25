Turn a tap and the bucket fills; the fuller the bucket, the longer you've turned. Two numbers move
together — but not symmetrically. *Time* is what you choose; *water* is what follows. Which quantity
is in charge, and which is merely answering?

## Discovery

1. A car travels at a steady $60$ km/h. Make a small table of *hours driven* against *kilometres
   covered*: $1\to?$, $2\to?$, $3\to?$. Which column did you get to pick freely, and which was
   forced once you picked?
2. Now describe the forced column as the *output of a machine* fed by the free column. What is the
   machine's input set, and what single-output rule turns each input into its entry? (You built
   exactly such a machine in the previous node.)
3. Reverse the roles: could you instead treat kilometres as the one you pick and hours as what
   follows? Does the *same* underlying relationship survive the swap, and what changes about which
   variable is "independent"?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

When two quantities are linked so that fixing one determines the other, we say the second
**depends on** the first. The freely-chosen quantity is the **independent variable** (usually $x$);
the determined quantity is the **dependent variable** (usually $y$). To say "$y$ **is a function
of** $x$" means precisely that there is a function $f$ with $y = f(x)$: each admissible value of
the independent variable yields exactly one value of the dependent variable. The concept *is* the
function relationship, now read as a story of cause-and-consequence between varying quantities.

### Proof

For a concept node the task is to show the idea is coherent and to nail its basic consequences from
the definition of a function.

*Dependence is exactly single-valuedness.* "The value of $y$ is determined once $x$ is chosen" says:
for each chosen $x$ there is one and only one resulting $y$. That is verbatim the single-output
property of a function on the set of admissible $x$-values. So "$y$ depends on $x$" and "$y = f(x)$
for some function $f$" are the same statement — the concept is well-founded, inheriting
well-definedness of $f(x)$ from the function node.

*Consistency of substitution.* Because $f$ is a function, equal inputs force equal outputs: if
$x_1 = x_2$ then $y_1 = f(x_1) = f(x_2) = y_2$. Hence a genuine dependence can never return two
different $y$'s for one $x$ — the relationship is unambiguous.

*Roles are a choice, not a fact of nature.* Swapping which variable is independent does *not* change
the set of paired values $\{(x,y)\}$; it only changes which coordinate we read as "input." The
reversed relationship is again a function *only if* the swapped assignment is still single-valued
(each $y$ giving one $x$). At constant speed, $d = 60t$ and $t = d/60$ are both functions, so either
may lead — but this reversibility is a property of *this* relationship, not a general law.
$\blacksquare$

### Worked Instance

Steady $60$ km/h. Independent variable $t$ (hours), dependent $d$ (km), machine $d = f(t) = 60t$:
$f(1)=60,\ f(2)=120,\ f(3)=180$ — you pick $t$, distance follows. Reading $d$ as a function of $t$
is the Hook's "time is in charge." Swap: pick $d$, get $t = d/60$ — still single-valued, so distance
*can* lead here. But add a rest stop, so the car sits still for an hour: now one value of $d$
corresponds to a whole interval of times, and $t$ is no longer a function of $d$ even though $d$ is
still a function of $t$. The asymmetry the Hook hinted at is real.

### Pitfalls

- **Dependence has a direction.** "$y$ depends on $x$" does not force "$x$ depends on $y$"; the
  reverse may fail single-valuedness (the rest-stop example).
- **The choice of independent variable is a modelling decision**, not intrinsic; the *relationship*
  (the set of pairs) is what's objective.
- **"Related" is weaker than "is a function of."** Two quantities can be associated (height and
  shoe size across people) without either determining the other — that is correlation, not
  functional dependence.
- Notation $y = f(x)$ hides the domain; a value of $x$ outside the domain has no dependent value at
  all.

:::
:::

## Connections

Reads the function definition as the dynamic idea "let $x$ vary and watch $y$ respond" — the mental
picture behind graphs, rates of change, slopes, and ultimately the derivative (how fast the
dependent variable responds to the independent one). Recognition trigger: any "as … changes, …
changes," "per," or "$y = f(x)$" phrasing is a statement of variable dependence, and spotting which
variable is independent is the first move in modelling.

## History

The notion that one quantity depends on another grew alongside symbolic algebra. François Viète took a decisive step around 1591 by using letters to stand for both known and unknown quantities, and René Descartes' convention of late-alphabet letters for variables (1637) is still with us. The idea of one variable changing with another became central in the seventeenth-century calculus of Isaac Newton and Gottfried Wilhelm Leibniz, who studied how quantities vary together. Leonhard Euler and later Dirichlet gradually distilled this into the abstract concept of functional dependence. Recognizing when a quantity is free to vary and when it is determined by others is the conceptual seed of the function concept. ANABASIS isolates variable dependence as the intuition that later becomes the formal function.
