You hold $3$ acorns in one hand and $5$ in the other. Tip both into a bowl and count what
lands: every time, without fail, $8$. Nobody counted the acorns *twice*, yet the two piles
"know" their combined size. What exactly is the move that turns two counts into one?

## Discovery

1. Put $3$ marbles in one bag and $5$ in another. Empty both into a single bowl and count the
   marbles in the bowl. Write down the number.
2. Now reach that total a different way: keep the "$5$" fixed in mind and apply the "one more"
   move (the successor from $\NN$) once for *each* of the $3$ marbles, saying the numbers aloud —
   "$6$, then $7$, then $8$." Where do you land, and does it agree with step $1$?
3. Repeat step $2$ but with one bag empty: combine $5$ marbles with $0$ marbles. How many times
   do you apply "one more" now, and what total comes out? What does that tell you about the role
   of $0$?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

The **sum** of two natural numbers $a$ and $b$, written $a + b$, is the number you reach by
starting at $a$ and applying the successor ("one more") $b$ times — equivalently, the size of the
single collection formed by pooling a collection of $a$ objects with a collection of $b$ objects.
The two inputs $a$ and $b$ are the **addends** (or **summands**); $a+b$ is their sum, and the
symbol $+$ is **addition**.

Precisely, addition is fixed by recursion on the second addend:
$$a + 0 = a, \qquad a + S(b) = S(a + b),$$
where $S$ is the successor. The first line says pooling with the empty bag changes nothing ($0$
is the **additive identity**); the second says "one more object in the second bag means one more
in the bowl."

### Proof

For a concept the task is to show the idea is **well-posed**: that $a+b$ names one definite
natural number, and that the two pictures — pooling and counting-on — agree.

*Counting-on is well-defined and closed in $\NN$.* Fix $a$. The recursion $a+0=a$,
$a+S(b)=S(a+b)$ determines $a+b$ for every $b$ by induction on $b$: the value at $0$ is given, and
if $a+b$ is a definite natural then $a+S(b)=S(a+b)$ is too, being a successor of a natural. So
$a+b$ exists, is unique, and lies in $\NN$ (successors of naturals are naturals).

*Pooling is well-defined.* The size of the pooled collection cannot depend on the order in which
we count it, because counting a fixed finite collection always yields the same number (a property
of $\NN$: two counts of one collection pair off one-to-one, so by trichotomy they are equal). So
"the size of the pool" is a single number attached to the two bags.

*The two pictures agree.* Counting the pool by first counting the $a$-bag and then continuing into
the $b$-bag is exactly "start at $a$ and say the next number once per object of the $b$-bag" —
i.e. apply $S$ a total of $b$ times. That is the recursion above. Hence pooling and counting-on
compute the same $a+b$. $\blacksquare$

### Worked Instance

Compute $3+2$ by the recursion, unfolding the second addend $2 = S(S(0))$:
$$3 + 2 = 3 + S(1) = S(3+1) = S\big(3 + S(0)\big) = S\big(S(3+0)\big) = S(S(3)) = S(4) = 5.$$
Every step is one legal move. For the Hook, $3+5$: start at $3$ and count on five times — $4,5,6,7,8$
— landing on $8$, precisely the number of acorns in the bowl. The two piles "knew" their total
because counting-on and pooling are the same act described two ways.

### Pitfalls

- **$0$ is the identity, not a "do-nothing symbol."** $a+0=a$ is a *fact to use*, e.g. it anchors
  the recursion; forgetting the base case leaves $a+b$ undefined.
- **Order is not yet known to be free.** We defined $a+b$ by counting on from $a$. That $a+b=b+a$
  is a *theorem* (commutativity), proved elsewhere — do not assume it here.
- **Successor versus "$+1$".** $S(n)$ is the primitive move; "$n+1$" is now a *defined* sum that
  happens to equal $S(n)$ (take $b=1=S(0)$: $n+1 = S(n+0)=S(n)$). They coincide, but one is
  primitive and one is derived.
- **Addends are numbers, not numerals.** $3+5$, $\text{III}+\text{V}$, and $\text{2+6}$ all name
  the same sum; addition acts on quantities, not on marks.

:::
:::

## Connections

The first operation built on the primitives $\NN$ and its successor. Repeated addition of a fixed
number becomes multiplication; the structural facts of $+$ — that reordering (commutativity) and
regrouping (associativity) are free, and that $0$ is neutral — are proved in the next nodes and
are the seeds of the additive group of $\ZZ$ and of every ring. Recognition trigger: any "combine
these amounts," "how many altogether," or "count on from here" is addition.

## History

Addition is older than any written record: tally marks on bones such as the Ishango bone (c. 20,000 BCE) already register the pooling of counts, and every early civilization — Egyptian, Babylonian, Chinese, Mayan — had procedures for combining quantities. As a *concept* it long went undefined, treated as self-evident, until the drive for rigor in the nineteenth century forced mathematicians to ask what a number and its sum really are. Hermann Grassmann, in his 1861 *Lehrbuch der Arithmetik*, gave the first recursive definition of $a+b$ in terms of the successor operation, and Richard Dedekind (1888) and Giuseppe Peano (1889) turned this into the axiomatic foundation still used today. Their motivation was to ground arithmetic on logic alone, so that facts like $a+0=a$ became provable rather than assumed. This mattered because it revealed that even the humblest schoolroom operation rests on the single idea of "one more," and it made addition the model for defining every later operation by recursion.
