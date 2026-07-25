Finitely many people stand in a field, all pairwise distances distinct. Each fires a water
pistol at their *nearest* neighbour. Someone always stays dry. Why must a dry person exist —
and where should you look for one?

## Discovery

1. Try tiny cases. With $2$ people they soak each other. With $3$ people in a very obtuse
   triangle, whom does each target? Is anyone dry? Tabulate a couple of small configurations to
   get a feel — do not yet claim a general reason.
2. Consider the *closest pair* in the whole crowd — the two people $A, B$ whose mutual distance is
   the smallest of all pairwise distances (unique, since all distances differ). Whom does $A$ fire
   at? Whom does $B$ fire at? Justify each from the definition of "nearest".
3. So $A$ and $B$ soak each other, using up two shots on the same two people. Count: with $n$
   people there are $n$ shots fired. After removing $A, B$ and their two shots, how many shots and
   how many people remain? Can $n-2$ remaining shots wet $n-2$ remaining people if some of those
   shots land back on $A$ or $B$?
4. Push the counting to force a dry person. (Hint: an odd $n$ is the cleanest case to nail first —
   what does parity give you about $n$ shots covering $n$ people when two of them already
   ricochet between $A$ and $B$?) State the counting inequality that guarantees someone is unhit.
5. Reflect: you did not track a generic person. You seized on a *special* one defined by an
   extreme (the minimum distance). Why did minimality hand you certainty that a generic choice
   would not?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**The extremal principle** is the discovery move: to prove an existence or impossibility claim
about a finite (or well-founded) configuration, *consider an object that is extreme in some
respect* — the largest, smallest, closest, leftmost, first, cheapest — and exploit the fact that
**nothing can be more extreme.** The extreme element is forced to have special structure (there
is no room to improve on it), and that structure drives the proof. It applies to finite
combinatorial and geometric configurations, to number-theoretic problems with a well-ordered
quantity, and to "there exists / it is impossible" claims where a *typical* element gives no
grip. The engine is guaranteed to have something to grab because a nonempty finite set of reals
attains its minimum and maximum (well-ordering of $\mathbb{N}$ in the discrete case). Caution:
you must pick an extreme that is (i) *attained* — a finite or well-ordered quantity, not an
infimum that might not be reached — and (ii) *relevant* — extremal in a feature the problem
actually constrains.

### Proof

Why is "take the extreme element" a valid and powerful proof template? The justification is the
extremal existence guarantee plus the "no-room-to-improve" squeeze.

**Existence of the extreme.** Any nonempty *finite* set of real numbers has a least and a
greatest element; any nonempty subset of $\mathbb{N}$ has a least element (well-ordering).
So whenever we attach a real- or integer-valued measure to the finitely many objects of a
configuration, an extremal object *exists*. This is what makes the move legitimate: we are not
assuming a convenient object, we are invoking one that provably exists.

**The squeeze, worked on the Hook.** Label people $1, \dots, n$ with all pairwise distances
distinct. Let $\{A, B\}$ be the (unique) pair realizing the minimum distance $d$. For $A$, every
other person is farther than $B$ (since $d$ is the global minimum distance and distances are
distinct), so $A$'s nearest neighbour is $B$; symmetrically $B$'s is $A$. Thus $A \to B$ and
$B \to A$: these two shots are "wasted" on the pair. Now argue for odd $n$. There are $n$ shots
total. Two of them ($A$'s and $B$'s) hit inside $\{A,B\}$. The remaining $n-2$ shots are fired by
the other $n-2$ people. Even if *every* one of those $n-2$ shots landed on a distinct target, they
could wet at most $n-2$ people. So at most $2 + (n-2) = n$ target-slots are filled — but shots can
collide (two people can share a nearest neighbour), so strictly fewer than $n$ *distinct* people
get wet whenever any two shots coincide. To force a dry person unconditionally, induct on the
closest pair: remove $A$ and $B$; the remaining $n-2$ people, if any of the removed pair was some
outsider's target, have *fewer than $n-2$ shots aimed among themselves*, so by strong induction
(base cases $n \le 2$ trivial, and every configuration has a globally closest pair to peel off)
some remaining person is never targeted — dry. The key leverage at each stage is that the *closest
pair* is forced to fire *at each other*, a rigidity a non-extremal pair does not have.
$\blacksquare$

### Worked Instance

Resolving the Hook, cleanly for odd $n$. Take the globally closest pair $A, B$; they soak each
other. That consumes $2$ of the $n$ shots on just $2$ people. The other $n-2$ shooters fire
$n-2$ shots, which can wet at most $n-2$ people. Total wet $\le (n-2) + 2 = n$, but the two
"extra" targets available were already used up by $A,B$ hitting *each other* rather than
outsiders. So the $n-2$ outsider shots must cover the remaining $\ge n-2$ people with no slack;
any overlap (shared nearest neighbour), forced when $n$ is odd because shots cannot pair up
perfectly among an odd number of remaining people, leaves someone untargeted. That person is
dry. The whole argument hinged on one extreme object — the minimum-distance pair — whose "nearest
neighbours are each other" property a generic pair lacks.

### Pitfalls

- **Unattained extremes.** Over an *infinite* set the minimum may not exist (an infimum isn't a
  minimum). The principle needs an attained extreme — finite sets or well-ordered $\mathbb{N}$.
- **Wrong extreme.** Extremal in an irrelevant feature gives no leverage. Choose the measure the
  problem actually constrains (here: distance, because "nearest" is about distance).
- **Ties.** If the extreme is non-unique, either break ties by a secondary rule or argue it does
  not matter. The Hook used distinct distances precisely to make the closest pair unique.
- **Assuming instead of invoking.** Say "*the* smallest such object *exists* by well-ordering,"
  then use it — don't merely hope one is around.

:::
:::

## Connections

Prereqs: **meta-small-cases** (small cases reveal *which* extreme to seize). The extremal
principle is the combinatorial cousin of **meta-contradiction**'s minimal-counterexample /
infinite-descent pattern (both grab a least object) and underlies **comb-extremal**. In number
theory it powers descent arguments and **nt-vieta-jumping** (minimize a solution). Recognition
trigger: an existence/impossibility claim about a finite configuration where a typical element
gives no grip — reach for the largest, smallest, closest, or first. A Putnam and IMO staple.
