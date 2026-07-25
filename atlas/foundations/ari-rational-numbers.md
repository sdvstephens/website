Share $7$ apples equally among $3$ people and the integers have no answer: $3\times 2 = 6$ and
$3\times 3 = 9$, so no whole number of apples per person works. The division $7\div 3$ falls
between the integers. What new numbers must we build so that $a\div b$ always names *something*?

## Discovery

1. Look for an integer $x$ solving $3x = 7$. There is none. Now sort the equations $bx = a$
   (integers $a,b$, with $b\ne 0$) into those that *do* have an integer solution and those that do
   not: try $2x=6$, $2x=7$, $5x=10$, $5x=12$. What property of the pair $(a,b)$ decides it?
2. We want a bigger number system in which $bx=a$ *always* has a solution whenever $b\ne 0$.
   Invent a name for that solution built out of $a$ and $b$ alone. Which two integers must the name
   carry, and in which roles?
3. The symbols $\tfrac12$, $\tfrac24$, $\tfrac36$ should all name the same amount, while $\tfrac12$
   and $\tfrac13$ should not. Find one equation in the four integers $a,b,c,d$ that is true for
   every matching pair from the first list and false for $\tfrac12$ versus $\tfrac13$. (Multiply
   things out; do not divide.)
4. Try to give $\tfrac10$ a meaning by asking it to solve $0\cdot x = 1$. What goes wrong, and what
   about $\tfrac00$ solving $0\cdot x = 0$? What must we forbid?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**The rational numbers.** A **rational number** is named by an ordered pair of integers written as
a fraction $\dfrac{a}{b}$ with $a,b\in\ZZ$ and $b\ne 0$; $a$ is the **numerator**, $b$ the
**denominator**. Two such names denote the *same* rational number exactly when
$$\frac{a}{b} = \frac{c}{d} \iff ad = bc.$$
The set of all of them is $\QQ$. Addition and multiplication are
$$\frac{a}{b}+\frac{c}{d} = \frac{ad+bc}{bd}, \qquad \frac{a}{b}\cdot\frac{c}{d} = \frac{ac}{bd}.$$
Each integer $n$ sits inside $\QQ$ as $\tfrac{n}{1}$, and every $b\ne 0$ now has a genuine
**reciprocal** $\tfrac1b$, so division (except by $0$) always succeeds. The name $\tfrac{a}{0}$ is
left undefined.

### Proof

Being a construction, we check it is **well-posed**: that "$=$" behaves like equality, that $\ZZ$
embeds faithfully, and that the defining wish — $b\cdot\tfrac{a}{b}=a$ — actually holds.

*"Sameness" is an equivalence relation.* Reflexive: $ab=ba$ gives $\tfrac ab=\tfrac ab$. Symmetric:
$ad=bc$ is the same statement as $cb=da$, so $\tfrac ab=\tfrac cd$ forces $\tfrac cd=\tfrac ab$.
Transitive: if $ad=bc$ and $cf=de$ then multiply the first by $f$ and the second by $b$:
$adf=bcf=bde$, and cancelling $d\ne 0$ (legal in $\ZZ$, an integral domain) gives $af=be$, i.e.
$\tfrac ab=\tfrac ef$. So identical rationals really do form clean classes.

*$\ZZ$ embeds.* Send $n\mapsto\tfrac n1$. Then $\tfrac m1=\tfrac n1$ means $m\cdot 1=1\cdot n$, i.e.
$m=n$: distinct integers stay distinct. The formulas give $\tfrac m1+\tfrac n1=\tfrac{m+n}1$ and
$\tfrac m1\cdot\tfrac n1=\tfrac{mn}1$, so integer arithmetic is preserved — $\QQ$ *contains* $\ZZ$.

*The wish is granted.* For $b\ne 0$, $x=\tfrac ab$ solves $bx=a$: indeed
$\tfrac b1\cdot\tfrac ab=\tfrac{ba}{b}$, and $\tfrac{ba}{b}=\tfrac a1$ because $(ba)\cdot 1=b\cdot a$.
So $b\cdot\tfrac ab=a$ inside $\QQ$, exactly the equation the integers could not always solve.

*Why $b=0$ is barred.* If $\tfrac10$ existed it would solve $0\cdot x=1$, i.e. $0=1$, impossible;
and $\tfrac00$ would solve $0\cdot x=0$, which *every* number solves, so the name could not pick out
one value. Forbidding a zero denominator is forced, not arbitrary. $\blacksquare$

### Worked Instance

The Hook's $7\div 3$ is now the honest number $\tfrac73$, the unique solution of $3x=7$: check
$3\cdot\tfrac73=\tfrac{21}{3}=\tfrac71=7$ since $21\cdot1=3\cdot7$. Each person gets $\tfrac73$ of an
apple. And the equality rule tidies names: $\tfrac{14}{6}=\tfrac73$ because $14\cdot3=6\cdot7=42$,
so "$14$ thirds-of-a-half" and "$7$ thirds" are the same point on the line — the same rational
wearing two coats.

### Pitfalls

- **A zero denominator is never allowed.** $\tfrac a0$ is undefined for *every* $a$, including
  $\tfrac00$; "infinity" is not a rational number.
- **Equality is cross-multiplication, not "looks different."** $\tfrac{6}{10}$ and $\tfrac35$ are the
  *same* number ($6\cdot5=10\cdot3$); a rational has infinitely many names.
- **A numerator of $0$ is fine.** $\tfrac0b=0$ for any $b\ne 0$, since $0\cdot d=b\cdot 0$.
- **Negatives can ride either floor.** $\tfrac{-2}{3}=\tfrac{2}{-3}=-\tfrac23$, all equal by
  $ad=bc$; the sign belongs to the whole number, not to one storey.

:::
:::

## Connections

Built on the integers and the wish to make division total, $\QQ$ is the smallest number system
containing $\ZZ$ in which every nonzero element is invertible — the *quotient field* of $\ZZ$. It
is the stage for every later fraction, decimal, ratio, and percent, and the backdrop against which
$\sqrt2$ will be shown to be missing (irrationality). Recognition trigger: whenever "divide" leaves
a remainder, or a quantity must be split into equal shares, you have stepped from $\ZZ$ into $\QQ$.

## History

Fractions are among the earliest mathematical inventions: the Egyptians (Rhind papyrus, c. 1650 BCE) wrote every fraction as a sum of distinct unit fractions, and the Babylonians used sexagesimal fractions with great sophistication. The Greeks, in Eudoxus' theory of proportion preserved in Book V of Euclid's *Elements* (c. 300 BCE), reasoned about ratios of magnitudes with remarkable rigor, though they resisted treating a ratio as a single "number." The modern conception of the rationals $\QQ$ as a complete number field — closed under all four operations except division by zero — was formalized in the nineteenth century, notably in the constructions of Dedekind and Peano and Landau's later *Grundlagen*, where $\QQ$ is built as equivalence classes of integer pairs. Their aim was a seamless deductive tower from $\NN$ upward. This mattered because $\QQ$ is the smallest field containing the integers and the natural stage on which the still-missing irrational numbers reveal the need for the reals.
