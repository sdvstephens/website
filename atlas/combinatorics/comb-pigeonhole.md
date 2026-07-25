Among any $13$ people, two share a birth month. Among any $5$ points in a $2\times 2$ square, two
lie within $\sqrt{2}$ of each other. Neither claim tells you *which* pair — yet both are forced,
and by the same one-line reason: too many things, too few boxes.

## Discovery

1. Put $13$ letters into $12$ mailboxes. Suppose, toward a contradiction, that *no* mailbox holds
   two or more letters. Then each of the $12$ boxes holds at most one letter. Bound the total
   number of letters this forces, and compare it to $13$.
2. What went wrong with the supposition in (1)? State, as a clean sentence, the conclusion that
   must therefore hold. Identify the two ingredients your argument needed: a supply of "items"
   and a supply of "boxes."
3. Now sharpen it. Put $25$ letters into $12$ boxes. If every box held at most $2$, how many
   letters could you fit at most? Since $25$ exceeds that, some box holds at least how many?
   Find the pattern relating "how many items," "how many boxes," and the guaranteed maximum load.
4. The pattern uses a ceiling. For $n$ items in $k$ boxes, express the guaranteed
   fullest-box lower bound. Check it against (1) ($n=13,k=12$) and (3) ($n=25,k=12$).
5. The birthday and points claims in the Hook are this principle in disguise. For the $2\times 2$
   square with $5$ points, what are the "boxes"? (Try quartering the square.) Why does two points
   in one box force distance $\le \sqrt{2}$?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Basic pigeonhole.** If $n$ items are placed into $k$ boxes and $n \gt k$, then some box
contains at least two items.

**Strong (generalized) pigeonhole.** If $n$ items are placed into $k$ boxes, then some box
contains at least
$$\left\lceil \frac{n}{k} \right\rceil$$
items. (Equivalently: if every box held at most $\lceil n/k\rceil - 1$, the total would be under
$n$.) The principle asserts *existence* — it never identifies which box.

### Proof

**Strong form (which contains the basic form as $n\gt k$).** Suppose, for contradiction, that
every one of the $k$ boxes contains at most $\lceil n/k\rceil - 1$ items. Then by the addition
principle the total number of items is at most
$$k\left(\left\lceil \tfrac{n}{k}\right\rceil - 1\right).$$
Write $n = qk + r$ with $0 \le r \lt k$. If $r = 0$ then $\lceil n/k\rceil = q$ and the bound is
$k(q-1) = n - k \lt n$. If $r \gt 0$ then $\lceil n/k\rceil = q+1$ and the bound is $kq = n - r
\lt n$. In both cases the total is strictly less than $n$, contradicting that all $n$ items were
placed. Hence some box holds at least $\lceil n/k\rceil$ items. Taking $n \gt k$ gives
$\lceil n/k\rceil \ge 2$, the basic form. $\blacksquare$

### Worked Instance

**Birthdays:** $n = 13$ people, $k = 12$ months. Since $13 \gt 12$, some month holds
$\lceil 13/12\rceil = 2$ people — two share a birth month.

**Five points in a $2\times 2$ square** (resolving the Hook): cut the square into four
$1\times 1$ subsquares (the $k=4$ boxes) and drop in the $5$ points. Since $5 \gt 4$, some
subsquare contains at least $\lceil 5/4\rceil = 2$ points. Two points inside a unit square are at
most the diagonal $\sqrt{1^2+1^2} = \sqrt{2}$ apart. Hence two of the five points lie within
$\sqrt{2}$.

### Pitfalls

- The conclusion is **pure existence**: it guarantees *some* overloaded box exists but says
  nothing about *which* one, or about the other boxes.
- The art is **choosing the boxes**. The principle is trivial; designing the pigeonholes so that
  "two in a box" means something useful (a shared remainder, a nearby point, an equal sum) is the
  real work.
- Strong form uses a **ceiling**, not a floor: $n$ items in $k$ boxes force
  $\lceil n/k\rceil$, e.g. $10$ items in $3$ boxes force a box with $\lceil 10/3\rceil = 4$, not
  $3$.
- Needing "at least two" requires strictly more items than boxes ($n \gt k$); with $n = k$ the
  items can spread out one per box.

:::
:::

## Connections

Prereqs: the addition principle (`comb-add-mult`), used to bound a total by summing box loads.
This is the counting-flavored treatment — the same idea becomes a general problem-solving *mindset*
in `meta-pigeonhole-mindset` (where the challenge is inventing the boxes). It shares its
existence-forcing spirit with the extremal principle (`comb-extremal`) and invariants
(`comb-invariants`), which likewise conclude "something must exist / must happen." Recognition
trigger: "show that some two of these must coincide / be close / share a property," especially when
the number of possible values (boxes) is visibly smaller than the number of objects.
