"$1 + 2 + \cdots + 100$" leaves the pattern to the reader's guess — do the dots hide $3$, or $2^k$, or
something else? The symbol $\sum_{k=1}^{100} k$ says precisely which terms, how many, and in what
order, with no ambiguity. And a nested $\sum_i \sum_j$ can specify an entire grid of numbers in a
single stroke. What exactly do these compact symbols instruct, and what algebra are they allowed to
obey?

## Discovery

1. Decode $\displaystyle\sum_{k=1}^{5}(2k-1)$: write out all five terms and add them. Encode in the
   other direction: rewrite $3 + 6 + 9 + \cdots + 30$ as a single $\sum$. Then name what each part of
   the notation controls — the letter under the $\sum$, the number below it, the number above it, and
   the expression to its right.
2. The index is a placeholder. Convince yourself that $\displaystyle\sum_{k=1}^{n} a_k =
   \sum_{j=1}^{n} a_j$ (rename), that $\displaystyle\sum_{k=1}^{n}(a_k + b_k) = \sum a_k + \sum b_k$,
   and that $\displaystyle\sum_{k=1}^{n} c\,a_k = c\sum a_k$ for a constant $c$. Then **reindex**
   $\displaystyle\sum_{k=1}^{n} a_k$ by the substitution $j = k - 1$: what are the new limits?
3. Expand the nested sum $\displaystyle\sum_{i=1}^{2}\sum_{j=1}^{3}(i + j)$ by evaluating the inner
   sum first, for each $i$, then adding. Now swap the order of summation and recompute. Do the two
   totals agree — and why should they?
4. Define the product symbol $\displaystyle\prod_{k=1}^{n} a_k = a_1 a_2 \cdots a_n$. Compute
   $\displaystyle\prod_{k=1}^{4} k$ and say what familiar quantity it is. What value should an *empty*
   sum ($\sum$ over no terms) and an *empty* product take, so that splitting a range never changes the
   answer?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Sigma notation.** $\displaystyle\sum_{k=m}^{n} a_k = a_m + a_{m+1} + \cdots + a_n$, with $k$ the
**index** (a dummy variable), $m$ the lower limit, $n$ the upper limit, and $a_k$ the summand. The
number of terms is $n - m + 1$. It obeys, for constant $c$,
$$\sum_{k=m}^{n}(a_k + b_k) = \sum_{k=m}^{n} a_k + \sum_{k=m}^{n} b_k, \qquad
\sum_{k=m}^{n} c\,a_k = c\sum_{k=m}^{n} a_k,$$
the index may be renamed ($\sum_k a_k = \sum_j a_j$) and **reindexed** by a shift. **Nested sums**
may be evaluated in either order (finite Fubini): $\displaystyle\sum_{i}\sum_{j} a_{ij} =
\sum_{j}\sum_{i} a_{ij}$.

**Pi notation.** $\displaystyle\prod_{k=m}^{n} a_k = a_m a_{m+1}\cdots a_n$; in particular
$\prod_{k=1}^{n} k = n!$. By convention the **empty sum is $0$** and the **empty product is $1$**
(the additive and multiplicative identities), so a range may always be split without changing the
total.

### Proof

*Linearity of $\sum$.* Induct on the number of terms $N = n - m + 1$. For $N = 1$ both sides equal
$a_m + b_m$ (or $c\,a_m$). Assuming the identity for $N$ terms, a sum of $N+1$ terms is the $N$-term
sum plus one more term; by associativity and commutativity of addition ([ari-addition]) the extra
$a_{n+1} + b_{n+1}$ (or $c\,a_{n+1}$) distributes as required, giving the $N+1$ case. Renaming the
index changes no term, only the label, so $\sum_k a_k = \sum_j a_j$.

*Reindexing.* A substitution $j = k - s$ is a bijection between $\{m, \dots, n\}$ and
$\{m - s, \dots, n - s\}$; it merely relabels which term is called which, and since addition does not
depend on the labels, $\displaystyle\sum_{k=m}^{n} a_k = \sum_{j=m-s}^{n-s} a_{j+s}$.

*Interchange of finite double sums.* Consider the finite rectangular array $(a_{ij})$ with
$1 \le i \le p$, $1 \le j \le q$. Summing row-by-row, $\sum_{i=1}^{p}\big(\sum_{j=1}^{q} a_{ij}\big)$,
adds every entry exactly once; summing column-by-column, $\sum_{j=1}^{q}\big(\sum_{i=1}^{p}
a_{ij}\big)$, also adds every entry exactly once. Both therefore equal the total of the $pq$ entries;
by commutativity and associativity of addition the order of accumulation is irrelevant, so the two are
equal. *Empty conventions.* Splitting $\sum_{k=m}^{n} = \sum_{k=m}^{t} + \sum_{k=t+1}^{n}$ must hold
even when a piece is empty; that forces the empty sum $= 0$. The same requirement on $\prod$ forces
the empty product $= 1$. $\blacksquare$

### Worked Instance

Evaluate $\displaystyle\sum_{i=1}^{2}\sum_{j=1}^{3}(i+j)$ inner-first: for $i=1$,
$\sum_{j=1}^{3}(1+j) = 2+3+4 = 9$; for $i=2$, $\sum_{j=1}^{3}(2+j) = 3+4+5 = 12$; total $9 + 12 = 21$.
Now outer-first (swap): $\sum_{j=1}^{3}\sum_{i=1}^{2}(i+j) = \sum_{j=1}^{3}\big((1+j)+(2+j)\big) =
\sum_{j=1}^{3}(3 + 2j) = 5 + 7 + 9 = 21$. The orders agree, as finite Fubini promises. And
$\displaystyle\prod_{k=1}^{4} k = 1\cdot2\cdot3\cdot4 = 24 = 4!$. Reindexing in action:
$\sum_{k=1}^{n} k = \sum_{j=0}^{n-1}(j+1)$, the same sum written from a shifted start.

### Pitfalls

- **Count terms as $n - m + 1$**, not $n - m$. From $k=1$ to $k=n$ there are $n$ terms, not $n-1$.
- **Use distinct letters when nesting.** $\sum_i \sum_i$ collides; the inner and outer indices must
  differ, e.g. $\sum_i \sum_j$.
- **$\sum$ is linear, but not multiplicative:** $\displaystyle\sum a_k b_k \ne \big(\sum a_k\big)\big(\sum b_k\big)$
  in general, and only *constants* factor out of a $\sum$.
- **Empty sum $= 0$, empty product $= 1$** — not both zero. Getting the product convention wrong
  breaks factorial recursions ($0! = 1$).
- **Reindexing shifts the limits too.** Changing $k$ to $j = k-1$ turns limits $1..n$ into $0..n-1$;
  forgetting to move the bounds is the classic off-by-one.

:::
:::

## Connections

Sigma and Pi notation are the alphabet of the whole series strand: **arithmetic/geometric sums**, the
**perturbation** and **telescoping** identities, and the **binomial theorem** are all stated and
manipulated through $\sum$ and $\prod$, with $n! = \prod_{k=1}^n k$ underpinning combinatorics. The
linearity and interchange rules proved here are exactly the moves that make double-counting and
generating-function arguments go through. Recognition trigger: any "$a_1 + \cdots + a_n$" you want to
state without dots, a double summation over a grid, or a factorial/product you want to split or
reindex.
