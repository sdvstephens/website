Stack $4$ egg cartons, each holding $6$ eggs. You could add $6+6+6+6$, or you could glance at the
grid — $4$ rows of $6$ — and somehow *see* $24$ without adding step by step. Why does a rectangle
of dots answer an addition problem?

## Discovery

1. Lay out $3$ rows of dots with $5$ dots in each row. Find the total by adding the rows one at a
   time: $5$, then $5$ more, then $5$ more. Write the total.
2. Now cover the rows and read the same picture as **columns** instead: how many columns are
   there, and how many dots in each column? Add *those* up. Do you get the same total as step $1$?
3. What is the total of $3$ rows with $0$ dots each? Of $0$ rows with $5$ dots each? What total
   does a picture with no dots force, and how does that pin down the role of $0$ here?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

The **product** of two natural numbers $a$ and $b$, written $a \cdot b$ or $ab$ (also
$a \times b$), is $a$ added to itself $b$ times — the total number of dots in a rectangular array
with $b$ rows of $a$ dots each:
$$ab = \underbrace{a + a + \cdots + a}_{b \text{ copies}}.$$
The inputs $a,b$ are the **factors**; $ab$ is their product. Made precise by recursion on $b$:
$$a \cdot 0 = 0, \qquad a \cdot S(b) = a\cdot b + a,$$
"no rows means no dots," and "one more row adds another $a$ dots." Consequences visible already:
$a\cdot 1 = a$ (one row), so $1$ is the **multiplicative identity**, and $a\cdot 0 = 0$ (the
**absorbing** role of $0$).

### Proof

As a concept, we show $ab$ is **well-posed** and that the array picture is faithful to it.

*The product exists, is unique, and is a natural.* Fix $a$. The recursion $a\cdot 0=0$,
$a\cdot S(b)=a\cdot b+a$ determines $a\cdot b$ for every $b$ by induction on $b$: the value at $0$
is $0\in\NN$, and if $a\cdot b\in\NN$ then $a\cdot b + a\in\NN$ since sums of naturals are naturals
(from the addition node). So $ab$ names one definite natural number.

*The array is faithful.* Build the array row by row. After $0$ rows there are $0$ dots
($a\cdot0=0$). Adding one more row of $a$ dots increases the total by $a$ — that is the addition
node's "pool a new bag of $a$" — which is exactly $a\cdot S(b)=a\cdot b + a$. By induction on the
number of rows $b$, the array's dot-count equals $a\cdot b$. Thus "repeated addition of $a$" and
"count the $b\times a$ array" are the same number.

*Identity and absorption.* $a\cdot 1 = a\cdot S(0) = a\cdot 0 + a = 0 + a = a$, and $a\cdot 0 = 0$
directly. So one row returns $a$, and no rows return $0$. $\blacksquare$

### Worked Instance

Compute $3\cdot 2$ by the recursion:
$$3\cdot 2 = 3\cdot S(1) = 3\cdot 1 + 3 = (3\cdot S(0)+3) = (3\cdot 0 + 3) + 3 = (0+3)+3 = 3+3 = 6.$$
For the Hook, $6$ eggs per carton across $4$ cartons is $6\cdot 4 = 6+6+6+6 = 24$; reading the same
$4$-by-$6$ grid as $6$ columns of $4$ gives $4+4+4+4+4+4=24$ too. The rectangle answers an
addition problem because *it is* the repeated addition, laid flat.

### Pitfalls

- **Which factor counts the rows is a convention.** We set $ab$ = "$b$ copies of $a$." Reading the
  array the other way suggests $ab=ba$, but that equality is a *theorem* (commutativity), proved
  next — do not assume it while the definition is asymmetric.
- **$0$ absorbs, $1$ is neutral.** $a\cdot 0=0$ for every $a$ (an empty array), while $a\cdot1=a$.
  Confusing these is a classic slip.
- **Multiplication is repeated addition, not repeated counting.** Each added row is a whole
  addend $a$, not a single successor step.
- **A product needs both factors to be pinned numbers.** "Three sixes" is $3\cdot 6=18$; "some
  sixes" is not yet a number.

:::
:::

## Connections

Built directly on addition (repeated) and $\NN$ (the array's dimensions). It launches
commutativity ($ab=ba$, two readings of one rectangle), associativity, and the distributive law
that binds $+$ and $\times$; squaring and exponents are its own repetition. Recognition trigger:
"so many groups of so many," "rows times columns," "rate times amount" — all are products.

## History

Multiplication as repeated addition and as the area of a rectangle was mastered in practice millennia before it was justified in theory. The Egyptians (Rhind papyrus, c. 1650 BCE) multiplied by repeated doubling, the Babylonians kept multiplication tables in base $60$, and the Chinese *Nine Chapters* systematized array-style products. The efficient positional algorithm we still teach spread through the Hindu–Arabic tradition and reached Europe via Fibonacci's *Liber Abaci* (1202). As with addition, a *definition* only came with the nineteenth-century arithmetization: Grassmann, Dedekind, and Peano fixed $a\times b$ by recursion on the successor, proving multiplication distributes over addition rather than assuming it. Their aim was a fully deductive arithmetic, and the payoff was that the array and repeated-addition pictures could be shown to agree. This grounding made multiplication the second pillar of every ring and the engine of all later algebra.
