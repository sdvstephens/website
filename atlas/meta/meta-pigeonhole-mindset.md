Pick any five points inside (or on) a unit square. Two of them are guaranteed to lie within
$\frac{\sqrt 2}{2}$ of each other — no matter how cleverly you spread them out. Five points, one
square: why can't you keep them all far apart?

## Discovery

1. First, an existence question with *no coordinates*: among any $13$ people, why must at least
   two share a birth *month*? Name the two things you are counting, and which outnumbers which.
2. Back to the square. You want to force two of five points close together. The pigeonhole move
   needs "boxes" so that *two points in the same box are automatically close*. Cut the unit square
   into four congruent smaller squares. What is the largest possible distance between two points
   lying in one small square (its diagonal)?
3. You have five points and four small squares. What does the counting principle from step 1 now
   guarantee about how the points fall into the small squares?
4. Combine steps 2 and 3: state the distance that two of the five points are *forced* to be within.
   (Do not yet worry whether the bound is best possible — just produce the guaranteed bound.)
5. Reflect on the design choice. The hard part was not the counting; it was *deciding what the
   pigeonholes should be* so that "same hole" means "close." Articulate the general question you
   had to answer before pigeonhole could fire.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

The **pigeonhole principle** states: if $n$ objects are placed into $k$ boxes and $n \gt k$,
some box holds at least two objects; more generally, some box holds at least
$\lceil n/k \rceil$. The **pigeonhole mindset** is the discovery habit of proving an *existence*
claim — "two things coincide / are close / are congruent / repeat" — by **inventing the right
boxes**: partition the possibilities into fewer classes than you have objects, so two objects
must share a class, and *arrange that sharing a class is exactly the property you want*. The
principle is trivial; the art is **choosing the pigeonholes** (residue classes, sub-regions,
value ranges, colors, remainders) so that co-habitation forces the desired conclusion. It applies
to any "there must exist two (or $r$) with property $P$" claim over a finite or bounded universe.
The move is guaranteed to succeed once boxes exist because more objects than boxes *cannot* be
distributed one-per-box.

### Proof

Why is the box principle valid, and why does the "design the boxes" habit deliver existence
proofs?

**The principle itself.** Suppose $n$ objects are distributed among $k$ boxes and, for
contradiction, every box holds at most $\lceil n/k\rceil - 1$ objects. Then the total number of
objects is at most $k\bigl(\lceil n/k\rceil - 1\bigr) \lt k\cdot \tfrac{n}{k} = n$ (using
$\lceil n/k\rceil \lt \tfrac{n}{k} + 1$), i.e. strictly fewer than $n$ objects — contradicting
that there are $n$. Hence some box holds at least $\lceil n/k\rceil$; in particular, if
$n \gt k$, some box holds $\ge 2$. This is the whole engine: a counting inequality plus a
contradiction.

**Why "design the boxes" proves existence.** The principle only ever concludes "some box is
crowded." To make that *useful*, you engineer a partition of the object-universe into boxes so
that *"two objects share a box" $\Rightarrow$ "the two objects have the property you want."* Then
the crowded box, guaranteed to exist, contains two objects with the property — an existence proof.
This is exactly the Hook. **Boxes:** cut the unit square into four congruent
$\tfrac12\times\tfrac12$ sub-squares. **"Same box $\Rightarrow$ close":** two points in one
sub-square are at most its diagonal apart, $\sqrt{(\tfrac12)^2 + (\tfrac12)^2} =
\tfrac{\sqrt2}{2}$, from each other. **Counting:** five points into four sub-squares, and
$5 \gt 4$, so by the principle some sub-square contains at least two of the points. Those two are
within $\tfrac{\sqrt2}{2}$ — the claimed pair exists. The proof produced the pair without ever
naming coordinates, purely from the box design. $\blacksquare$

### Worked Instance

Resolving the Hook. Partition the unit square into four congruent sub-squares of side $\tfrac12$.
Any two points inside one sub-square are at most its diagonal, $\tfrac{\sqrt2}{2}$, apart.
Placing five points into four sub-squares, since $5 \gt 4$, pigeonhole forces two points into the
same sub-square. Those two points satisfy
$$\text{distance} \le \frac{\sqrt2}{2},$$
which is exactly the claim. The design (four sub-squares) was chosen precisely so that "same box"
means "at most $\tfrac{\sqrt2}{2}$ apart"; the counting then did the rest.

### Pitfalls

- **Skipping the box design.** Pigeonhole never fires until you say *what the boxes are*. The
  difficulty is always the partition, not the count.
- **Boxes that don't encode the property.** If "same box" doesn't imply the conclusion you want,
  the crowded box tells you nothing useful. Engineer the partition around the target property.
- **Off-by-one on the count.** You need *strictly more* objects than boxes for a pair (or
  $\ge k(r-1)+1$ for $r$ per box). Equal numbers allow one-per-box.
- **Claiming a best bound you didn't prove.** Pigeonhole gives *a* bound (here $\tfrac{\sqrt2}{2}$);
  whether it is the *tightest* possible is a separate optimization question.

:::
:::

## Connections

Prereqs: **comb-pigeonhole** (the principle and its strong form). This node is its *strategic*
face — the habit of *manufacturing* the boxes. It pairs with **meta-small-cases** (small cases
suggest the partition) and feeds existence proofs across number theory (residues as boxes:
two of $n+1$ integers share a remainder mod $n$), combinatorics, and geometry. Recognition
trigger: a claim of the form "there must exist two/$r$ objects that coincide, repeat, are close,
or are congruent" over a bounded universe — ask *what should the boxes be?* A staple of AMC/AIME
and olympiad existence problems.
