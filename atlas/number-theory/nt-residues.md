Every integer, however enormous, is congruent modulo $5$ to exactly one of $0, 1, 2, 3, 4$. The
whole infinite line of integers collapses into just five bins. What exactly are those bins, why are
there precisely five, and why can you always trade a giant number for one of five tiny labels?

## Discovery

1. Sort the integers $-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7$ into groups, putting two together exactly
   when they are congruent modulo $5$. How many groups form, and what is a natural smallest label
   for each group?
2. Using the fact that congruence mod $m$ is an equivalence relation (from `nt-congruence-intro`),
   argue that *every* integer belongs to exactly one group. Given a general $n$, which member of
   $\{0,1,2,3,4\}$ does it match, and how do you compute it?
3. Could you label the five groups just as faithfully with $\{5,6,7,8,9\}$, or with
   $\{-2,-1,0,1,2\}$? Decide what a set of labels must satisfy to name each group once and only once.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Fix $m \ge 1$. The **residue class** of $a$ modulo $m$ is
$$\overline{a} = \{\, a + km : k \in \ZZ \,\},$$
the set of all integers congruent to $a$. These classes **partition** $\ZZ$ into exactly $m$
disjoint pieces; the set $\{0, 1, \dots, m-1\}$ of least non-negative representatives is the
**standard complete residue system**. More generally, any set of $m$ integers that are pairwise
incongruent modulo $m$ is a **complete residue system** — it contains exactly one member of each
class. **Reducing** an integer mod $m$ means replacing it by the representative of its class.

### Proof

*Exactly $m$ classes, partitioning $\ZZ$.* Congruence mod $m$ is reflexive, symmetric, and
transitive (`nt-congruence-intro`), so its classes partition $\ZZ$: every integer lies in its own
class, and two classes are equal or disjoint. By the same node's same-remainder characterization,
each integer $n$ is congruent to its remainder $r \in \{0,\dots,m-1\}$ on division by $m$, so $n \in
\overline{r}$; thus every class equals some $\overline{r}$. These $m$ classes are distinct: if
$0 \le r \lt r' \le m-1$ then $0 \lt r' - r \lt m$, so $m \nmid (r' - r)$ and $r \not\equiv r'$. Hence
there are exactly $m$ classes, represented by $0, 1, \dots, m-1$.

*Complete residue systems.* Let $S$ be $m$ integers, pairwise incongruent mod $m$. Each $s \in S$
lies in one of the $m$ classes, and pairwise incongruence means no two share a class. That is $m$
elements dropped into $m$ classes with no collisions, so every class receives exactly one: $S$ meets
each class once. Conversely, a full set of class representatives is automatically pairwise
incongruent. So "complete residue system" $=$ "$m$ pairwise-incongruent integers." $\blacksquare$

### Worked Instance

Modulo $5$, the classes are
$$\overline{0} = \{\dots,-5,0,5,\dots\},\ \overline{1},\ \overline{2},\ \overline{3},\
\overline{4},$$
five bins as promised. To reduce $2026$: $2026 = 5\cdot 405 + 1$, so $2026 \in \overline{1}$, i.e.
$2026 \equiv 1 \pmod 5$. The set $\{-2,-1,0,1,2\}$ is also a complete residue system mod $5$: its
members are pairwise incongruent (differences $1,2,3,4$ are all nondivisible by $5$), so it names
each class once — here $2026$ would carry the label $1$ as well.

### Pitfalls

- **A class is an infinite set, not a number.** $\overline{2}$ mod $5$ is $\{\dots,-3,2,7,12,\dots\}$;
  the representative $2$ is just its handle.
- **There are $m$ classes, not $m+1$.** The labels run $0$ through $m-1$; forgetting that $0$ counts
  or double-counting $m \equiv 0$ gives an off-by-one.
- **A complete residue system needs both conditions.** It must have exactly $m$ integers *and* be
  pairwise incongruent; four incongruent numbers do not cover the five classes mod $5$.
- **Reduction changes the representative, not the value.** $2026 \equiv 1 \pmod 5$ does not mean
  $2026 = 1$; it means they share a class.

:::
:::

## Connections

Residue classes are the equivalence classes of congruence (`nt-congruence-intro`) given a name and a
count; the division algorithm hands each class its canonical representative. Choosing a complete
residue system is the setup for defining arithmetic on classes (`nt-mod-operations`) and for asking
which residues are invertible (`nt-modular-inverse-elem`), and the same partition, matured, is the
finite world $\ZZ/m\ZZ$ of competition modular arithmetic (`nt-mod-arithmetic`). Recognition trigger:
"consider the remainders mod $m$," "by pigeonhole among residues," or "reduce mod $m$" is a
residue-class move.

## History

The notion that all integers leaving the same remainder should be treated as one object — a residue class — crystallized with Gauss's *Disquisitiones Arithmeticae* ($1801$), which built number theory around congruence modulo $m$. Gauss grouped the integers into complete systems of residues and studied how arithmetic descends to these classes, effectively creating the finite arithmetic systems now written $\mathbb{Z}/m\mathbb{Z}$. Earlier mathematicians, notably Fermat and Euler, had worked with remainders in specific problems, but Gauss gave the classes themselves the starring role. His viewpoint was later absorbed into abstract algebra by Dedekind and others, who saw residue classes as the first and cleanest example of a quotient structure. It mattered because thinking in classes rather than individual numbers is what turns modular problems into finite, tractable ones and opens the door to group and ring theory.
