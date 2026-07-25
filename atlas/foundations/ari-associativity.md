Add $2+3+4$. But "$+$" only ever eats *two* numbers — so did you compute $(2+3)+4$ or $2+(3+4)$?
You never even paused to choose, and no teacher ever warned you the two might differ. Why is the
three-way sum unambiguous when the operation is stubbornly two-at-a-time?

## Discovery

1. Compute $(2+3)+4$ by first doing the parentheses, then the outer $+$. Separately compute
   $2+(3+4)$ the same careful way. Write both results.
2. Ditch the arithmetic and use objects. Put $2$ red, $3$ green, $4$ blue stones on a table. The
   two groupings are just two ways of *deciding which pile to scoop first*. Does either choice
   change which stones are on the table? What, then, must be true of the two totals?
3. Now three factors. Stack $2$ layers, each a $3$-by-$4$ grid of dots — a little box of dots.
   Group it as "($2\times3$) slabs of $4$" versus "$2$ layers of ($3\times4$)." Are you counting a
   different box either way? What does that force about $(2\cdot3)\cdot4$ and $2\cdot(3\cdot4)$?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Associativity.** For all natural numbers $a,b,c$,
$$(a+b)+c = a+(b+c) \qquad\text{and}\qquad (ab)c = a(bc).$$
Because regrouping never changes the value, the parentheses are unnecessary: $a+b+c$ and $abc$ are
well-defined. Together with commutativity, this means *any* finite sum or product may be
regrouped and reordered at will without affecting its value.

### Proof

Each law is again "one collection, counted under two groupings."

*Addition.* Let $A,B,C$ be disjoint collections of sizes $a,b,c$. By the sum's meaning as pooling,
$(a+b)+c$ is the size of $(A\cup B)\cup C$ and $a+(b+c)$ is the size of $A\cup(B\cup C)$. But
$(A\cup B)\cup C$ and $A\cup(B\cup C)$ are the *same set* — an element lies in it exactly when it
lies in $A$, in $B$, or in $C$, regardless of how we bracket the union. One finite set has one
size, so the two totals are equal.

*Multiplication.* Build a three-dimensional array (a box) of unit dots with $a$ dots along one
edge, $b$ along the next, $c$ along the third; a dot sits at each address $(i,j,k)$ with
$1\le i\le a$, $1\le j\le b$, $1\le k\le c$. Count it by first tiling each $a\times b$ layer
($ab$ dots) and stacking $c$ of them: total $(ab)c$. Count the *same* box by first forming each
$b\times c$ slab ($bc$ dots) and laying $a$ of them: total $a(bc)$. Both sweeps address every dot
exactly once, so they count one finite set and must agree: $(ab)c=a(bc)$. $\blacksquare$

*(Alternative: both follow by induction on $c$ from the Peano recursions; the box-of-dots picture
is the cleaner argument and reuses only the array meaning of a product.)*

### Worked Instance

$(2+3)+4 = 5+4 = 9$ and $2+(3+4)=2+7=9$ — the nine stones on the table, scooped in either order.
For the box: $(2\cdot3)\cdot4 = 6\cdot4 = 24$ and $2\cdot(3\cdot4) = 2\cdot12 = 24$, the same
$2\times3\times4$ box of $24$ dots. This is why a chain like $2\cdot 5\cdot 7$ can be attacked as
$(2\cdot5)\cdot7 = 10\cdot 7 = 70$: you silently regrouped to make a friendly $10$, and
associativity guarantees the regrouping is free.

### Pitfalls

- **Associativity is about *grouping*; commutativity is about *order*.** They are different laws;
  "$a+b+c$ can be evaluated any way" uses *both*.
- **It does not license mixing operations.** $(a+b)\cdot c$ is *not* $a+(b\cdot c)$; only same-op
  regrouping is free. Crossing $+$ and $\times$ needs the distributive law.
- **Subtraction and division are not associative.** $(8-3)-2 = 3$ but $8-(3-2)=7$; likewise
  $(8\div4)\div2 \ne 8\div(4\div2)$. Never drop parentheses in a chain of minuses or divides.
- **Well-definedness is the payoff, not a given.** Writing "$abc$" with no brackets is *earned* by
  this theorem, not assumed.

:::
:::

## Connections

The second structural law, sitting on the array/pooling meanings of $\times$ and $+$ and pairing
with commutativity to make finite sums and products fully reorderable. It underwrites unbracketed
notation, the definition of $a^n$ (repeated multiplication needs regrouping to be meaningful), and
is a ring axiom for $\ZZ,\QQ,\RR$. Recognition trigger: any regrouping "to make a round number" —
$25\cdot(4\cdot 7)=(25\cdot4)\cdot7=100\cdot7$ — is associativity at work.

## History

Like commutativity, the freedom to regroup sums and products — $(a+b)+c=a+(b+c)$ — was taken for granted in every ancient computational tradition, since it is exactly what lets us write $a+b+c$ without brackets at all. The explicit naming of the "associative law" is usually credited to William Rowan Hamilton in the 1840s, working in the same burst of British algebra that produced abstract laws for operations. Its importance sharpened when mathematicians met operations that *fail* to associate, such as the cross product and the octonions (Cayley, Graves, 1843–45), proving associativity to be a genuine hypothesis. Grassmann, Dedekind, and Peano supplied inductive proofs of associativity for the natural numbers directly from the successor recursion. This law mattered because it is precisely the axiom that makes group and monoid theory possible: without it the very notation of a chained computation, and the entire edifice of abstract algebra, would collapse.
