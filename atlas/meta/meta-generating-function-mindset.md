In how many ways can you make $6$ cents from pennies ($1$) and nickels ($5$)? Easy to list.
But the *right* way to think about it is to multiply two infinite series and read off the
coefficient of $x^6$. Why would multiplying power series count anything?

## Discovery

1. Consider just pennies. You can use $0, 1, 2, \dots$ pennies, contributing $0, 1, 2, \dots$
   cents. Encode "using $k$ pennies contributes $k$ cents" as the term $x^{k}$, and sum over all
   allowed $k$. Write the resulting infinite series $P(x)$ for pennies as a single closed form
   (a geometric series).
2. Do the same for nickels: using $j$ nickels contributes $5j$ cents, encoded as $x^{5j}$. Write
   the series $N(x)$ in closed form.
3. Now form the product $P(x)\,N(x)$ and think about *how a term $x^6$ can arise* when you expand
   it: you pick one term $x^{k}$ from $P$ and one term $x^{5j}$ from $N$, and they multiply to
   $x^{k+5j}$. Under what condition on $(k,j)$ does a chosen pair land in the $x^6$ slot?
4. Conclude: the number of ways to make $6$ cents equals the *coefficient of $x^6$* in
   $P(x)N(x)$. Compute that coefficient (expand enough terms, or reason about the pairs $(k,j)$).
5. Reflect on the mechanism. Multiplying the two series *automatically* ran over all combinations
   of pennies and nickels and *sorted the results by total value*. Which algebraic operation did
   the "sorting by total" for you, and why?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

The **generating-function mindset** is the encoding habit: to count (or manipulate) a sequence
$a_0, a_1, a_2, \dots$, *hang the terms on powers of a formal variable* as the power series
$A(x) = \sum_{n\ge 0} a_n x^n$, and let **algebra on the whole series** do combinatorial work.
The keystone facts you exploit:

- **A choice among options becomes a *sum* of terms;** *independent* combined choices become a
  ***product*** of series — because multiplying series convolves coefficients, i.e. it enumerates
  all ways the parts' contributions add to each total exponent.
- Closed forms (e.g. $\sum_{k\ge0} x^k = \tfrac{1}{1-x}$) compress infinitely many cases; reading
  off a coefficient answers a counting question.

It applies to counting problems with independent repeatable choices (coins, partitions,
compositions, tilings), to solving linear recurrences, and to proving combinatorial identities by
comparing coefficients. The move is valid because a **formal power series is just an
infinite-tuple of coefficients**; equality of series means equality coefficient-by-coefficient,
and the product is *defined* to be the convolution $[x^n]A(x)B(x) = \sum_{i+j=n} a_i b_j$ — exactly
"count the ways a total $n$ splits between the two parts." Caution: for *counting* you work with
**formal** power series — convergence is irrelevant; you never plug in a number unless you have a
separate analytic reason.

### Proof

Why does multiplying series count combined choices? Everything follows from the definition of
formal power-series multiplication.

**The product is convolution.** For $A(x) = \sum_{i\ge0} a_i x^i$ and $B(x) = \sum_{j\ge0} b_j x^j$,
the product is *defined* by collecting equal powers:
$$A(x)B(x) = \sum_{n\ge 0}\Bigl(\sum_{i+j=n} a_i b_j\Bigr) x^n,
\qquad [x^n]\,A(x)B(x) = \sum_{i+j=n} a_i b_j.$$
So the coefficient of $x^n$ in the product is the sum, over all ways to split $n = i+j$, of
(ways-for-$i$)$\times$(ways-for-$j$). When $a_i$ counts configurations of "part A totalling $i$"
and $b_j$ counts configurations of "part B totalling $j$", and the two parts are chosen
*independently*, the product rule of counting makes $a_i b_j$ the number of joint configurations
totalling $n$; summing over splits gives *all* joint configurations totalling $n$. Hence
$[x^n]A(x)B(x)$ counts exactly the combined configurations of total $n$. This is the entire engine.

**The coin count.** Pennies: any number $k\ge0$ contributes $k$ cents, one way each, so
$P(x) = \sum_{k\ge0} x^{k} = \tfrac{1}{1-x}$. Nickels: $j\ge0$ nickels contribute $5j$ cents, one
way each, so $N(x) = \sum_{j\ge0} x^{5j} = \tfrac{1}{1-x^5}$. The number of ways to make $n$ cents
with pennies and nickels is, by the convolution above,
$$[x^n]\,P(x)N(x) = [x^n]\frac{1}{(1-x)(1-x^5)} = \#\{(k,j)\in\mathbb{Z}_{\ge0}^2 : k + 5j = n\}.$$
For $n = 6$: the valid $(k,j)$ are $(6,0)$ and $(1,1)$ — the terms $x^{6}x^{0}$ and $x^{1}x^{5}$ —
so $[x^6]P(x)N(x) = 2$. The multiplication *automatically* ran over every penny/nickel combination
and filed each under its total value; the coefficient reads off the count. $\blacksquare$

### Worked Instance

Resolving the Hook. Encode pennies as $P(x) = \frac{1}{1-x}$ and nickels as $N(x) =
\frac{1}{1-x^5}$. Ways to make $6$ cents $= [x^6]\,P(x)N(x) = \#\{(k,j): k+5j=6,\ k,j\ge0\}$.
The solutions are $(k,j) = (6,0)$ (six pennies) and $(1,1)$ (one penny, one nickel), so the
coefficient is $2$ — matching the hand count. The point is not that we saved effort on $n=6$, but
that the *same* product answers $n=1000$ with no new idea: just extract $[x^{1000}]$. Encoding a
choice as a series turned "enumerate and sort by total" into one multiplication.

### Pitfalls

- **Adding when you should multiply (or vice versa).** *Independent combined* choices multiply the
  series (convolution sorts by total); *mutually exclusive* alternatives add the series. Diagnose
  which before writing anything.
- **Worrying about convergence.** For counting, these are **formal** power series; $\tfrac1{1-x}$
  is shorthand for $\sum x^k$, not a claim about $|x|\lt1$. Don't substitute numbers to "check."
- **Wrong exponent bookkeeping.** The exponent must track the quantity you're counting by (here,
  cents). Using a variable's exponent for the wrong statistic derails the whole model.
- **Reading the wrong coefficient.** You want $[x^n]$ for the target total $n$; off-by-one in the
  exponent (e.g. starting sums at $1$ vs $0$) shifts every coefficient.

:::
:::

## Connections

Prereqs: **ser-generating-functions** (the formal machinery: formal series, $\tfrac{1}{1-x}$,
coefficient extraction). This node is its *strategic* face — the habit of reaching for an
$\sum a_n x^n$ encoding. It powers counting (**comb-generating-functions**: partitions, coins,
compositions), solving linear recurrences (**ser-linear-recurrences**), and identity-proving by
comparing coefficients (roots-of-unity filter, **alg-roots-of-unity-filter**). Recognition
trigger: "in how many ways…", "count the sequences/partitions/tilings…", or a recurrence you'd
rather solve in closed form — encode it as coefficients and let algebra count. Appears on the
Putnam and in olympiad combinatorics.
