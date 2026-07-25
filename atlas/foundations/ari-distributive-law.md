To multiply $7\times 12$ in your head you probably think "$7$ tens plus $7$ twos" — $70+14=84$.
You split the $12$, multiplied the pieces, and added. This move is so automatic it feels like
nothing, yet it is the single law that lets multiplication and addition talk to each other. Why is
splitting a factor always allowed?

## Discovery

1. Draw a rectangle $7$ tall and $12$ wide and mark its area (dots or unit squares). Now slice it
   with one vertical cut into a $7$-by-$10$ piece and a $7$-by-$2$ piece. Write the area of each
   piece and the area of the whole, and compare "whole" against "sum of pieces."
2. Say what step $1$ shows *in symbols*, using $a=7$, and letting the two pieces be widths $b=10$
   and $c=2$. Write the equation your rectangle just verified — but do not yet claim it for all
   numbers.
3. Test whether the same cut works when the factor being split is on the *other* side: a rectangle
   $12$ wide split into heights $10$ and $2$, times $7$. And test an edge case: cut a $7$-by-$5$
   rectangle into a $7$-by-$5$ piece and a $7$-by-$0$ piece. Does the law survive a zero-width
   slice?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**The distributive law.** For all natural numbers $a,b,c$,
$$a(b+c) = ab + ac,$$
and, by commutativity, also $(b+c)a = ba + ca$. Multiplication "distributes over" addition: to
multiply by a sum, multiply by each addend and add. This is the *only* axiom linking $+$ and
$\times$; commutativity and associativity each stay inside one operation, but distributivity is
the bridge.

### Proof

Count one rectangle two ways — as a whole, and as two pieces.

Take an array (rectangle of dots) with height $a$ and width $b+c$. Its dot-count, read directly,
is $a(b+c)$ (the array meaning of the product: $a$-tall, $(b+c)$-wide).

Now make a single vertical cut separating the first $b$ columns from the last $c$ columns. Every
dot lies in exactly one piece: the left piece is an $a\times b$ array with $ab$ dots, the right
piece an $a\times c$ array with $ac$ dots, and no dot is shared or lost (the columns $1,\dots,b$
and $b+1,\dots,b+c$ partition the $b+c$ columns). So the whole is the pool of the two pieces, and
by the meaning of addition its size is $ab + ac$.

The two counts are of the *same* set of dots, and a finite set has one size, so
$$a(b+c) = ab + ac.$$
The edge cases are consistent: a zero-width slice gives $a(b+0)=ab = ab + 0 = ab + a\cdot0$. The
right-factor form $(b+c)a = ba+ca$ follows by applying commutativity to each product. $\blacksquare$

*(Alternative: induct on $c$ using $a(b+S(c)) = a(b+c)+a$ from the recursions; the area cut is the
picture that makes the law obvious.)*

### Worked Instance

The Hook: $7\cdot 12 = 7(10+2) = 7\cdot10 + 7\cdot2 = 70 + 14 = 84$ — the $7\times12$ rectangle
sliced into a $7\times10$ slab and a $7\times2$ slab. The law also powers the "FOIL" expansion of
two sums by using it twice:
$$(x+3)(x+5) = x(x+5) + 3(x+5) = (x^2+5x) + (3x+15) = x^2 + 8x + 15,$$
each step just distributing across a sum. Every mental-math split and every polynomial expansion
is this one rectangle-cutting law.

### Pitfalls

- **Distribute over every addend, not just the first.** $a(b+c)\ne ab+c$. The most common error is
  multiplying into one term and forgetting the other.
- **You cannot "distribute" over a product.** $a(bc)$ is *not* $ab\cdot ac$; distribution bridges
  $\times$ *over* $+$, not $\times$ over $\times$ (that misfires — compare $2(3\cdot4)=24$ with
  $(2\cdot3)(2\cdot4)=48$).
- **The sign travels too (later).** Once subtraction exists, $a(b-c)=ab-ac$; dropping the minus on
  the second term is a classic slip.
- **It is a two-way street.** Read right-to-left it is *factoring*: $ab+ac=a(b+c)$. Same law, run
  backward.

:::
:::

## Connections

The keystone law: the only one coupling $+$ and $\times$, resting on the array meaning of a
product and on addition as pooling. It is what makes place-value multiplication, factoring, and
all polynomial algebra possible, and it is the final ring axiom joined by commutativity and
associativity. It also forces the sign rules once negatives appear. Recognition trigger: any
"multiply out," "expand," "factor," or "split a factor to compute" is distribution.

## History

The distributive law lived for centuries inside the "area" and "rectangle-cutting" arguments of Greek geometry: Book II of Euclid's *Elements* (c. 300 BCE) proves geometric identities that are exactly $a(b+c)=ab+ac$ dressed as statements about rectangles, a style now called "geometric algebra." Medieval Islamic algebraists such as al-Khwārizmī (c. 820 CE) used the same splitting to multiply and to complete the square, and it underlies every place-value multiplication algorithm. The recognition that distributivity is a *separate axiom* — the sole bridge between $+$ and $\times$ — emerged only with nineteenth-century abstract algebra, and the term "distributive" is again due to Servois (1814). Peano and Dedekind proved it for the naturals by induction, while ring theory (Dedekind, Hilbert, and later Emmy Noether) enshrined it as one of the defining laws of a ring. It mattered because it is the hinge on which factoring, polynomial algebra, and all symbolic manipulation turn.
