A friend arrives at a random moment during a one-hour window. What's the chance they show up in the
first $15$ minutes? There are infinitely many arrival times, so you can't count outcomes — yet the
answer, $\tfrac14$, is obvious. When outcomes fill a continuous region, "favorable over total" survives:
you just measure instead of count.

## Discovery

1. A point is dropped uniformly at random on the segment from $0$ to $10$ (every position equally
   likely). Intuitively, what should the probability be that it lands between $3$ and $7$? Express it as
   a ratio of two lengths.
2. Now a point falls uniformly at random inside a $4 \times 4$ square, and you ask for the probability
   it lands inside a $1 \times 1$ corner square. What ratio — of what two quantities — gives the answer?
3. In counting problems, probability was (favorable outcomes)/(total outcomes). In steps $1$–$2$ there
   are infinitely many outcomes, yet a ratio still worked. What played the role of "number of outcomes"
   for a segment, and what for a region?
4. State the general recipe suggested by steps $1$–$3$, and note what "uniformly at random" must mean
   for it to be valid.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

**Geometric probability.** When an outcome is a point chosen **uniformly at random** from a region $R$
(every location equally likely, with no clustering), the probability of an event $E \subseteq R$ is the
ratio of *measures*:
$$P(E) = \frac{\text{measure of } E}{\text{measure of } R},$$
where "measure" means **length** on a line, **area** in the plane, or **volume** in space — whichever
matches the dimension of $R$. It is the continuous twin of favorable-over-total: measure replaces count
when outcomes form a continuum.

### Proof

The classical definition assigns each of $|S|$ equally likely outcomes a share $1/|S|$ of certainty, so
an event's probability is its share of the whole. For a uniform point on a region $R$, "equally likely"
means the chance of landing in a sub-region is proportional to its size and independent of its position
— formally, there is a constant density $c$ (certainty per unit measure) such that any piece $E$ of $R$
carries probability $c \cdot \operatorname{meas}(E)$.

Total certainty is $1$, and the whole region $R$ carries all of it, so
$c \cdot \operatorname{meas}(R) = 1$, giving $c = 1/\operatorname{meas}(R)$. Substituting,
$$P(E) = c\cdot\operatorname{meas}(E) = \frac{\operatorname{meas}(E)}{\operatorname{meas}(R)}.$$
This is exactly favorable-over-total with measure in place of count: proportionality is the continuous
form of "equally likely," and dividing by the total measure normalizes the certainties to sum to $1$.
The dimensions must match — length over length, area over area — or the ratio is meaningless.
$\blacksquare$

### Worked Instance

The Hook. Arrival time is a uniform point on the $60$-minute segment; "first $15$ minutes" is the
sub-segment of length $15$, so
$$P = \frac{15}{60} = \frac14.$$

An area example — a dartboard. A dart lands uniformly on a circular board of radius $R$; the bullseye is
the concentric disk of radius $r$. The probability of a bullseye is the ratio of areas:
$$P(\text{bullseye}) = \frac{\pi r^2}{\pi R^2} = \left(\frac{r}{R}\right)^2.$$
For $r = 2$ cm and $R = 20$ cm this is $\left(\tfrac{1}{10}\right)^2 = \tfrac{1}{100}$. Notice the length
ratio $\tfrac{r}{R} = \tfrac1{10}$ would be the *wrong* answer — the region is two-dimensional, so you
must compare *areas*.

### Pitfalls

- **Match the dimension.** Use length for a line, area for a region, volume for a solid. Comparing a
  length to an area (or forgetting to square a linear ratio) is the signature geometric-probability
  error.
- **"Uniform" is required.** The ratio-of-measures rule assumes every location is equally likely. If the
  point clusters (nonuniform density), the plain measure ratio is wrong.
- **Model the sample space geometrically, correctly.** Many word problems (meeting times, breaking a
  stick) become a region in the plane; setting up the right region and the right favorable sub-region is
  the crux.
- **Boundaries have measure zero.** A single point, or a curve inside a region, has length/area zero, so
  its probability is $0$ — "exactly" hitting a value in a continuum is a probability-zero event, not an
  impossible-to-state one.

:::
:::

## Connections

Geometric probability extends classical probability (`comb-probability-intro`) from finite counts to
continuous measures, with a ratio (`ari-ratio`) as the answer — length, area, or volume in place of a
tally. It sets up continuous uniform distributions and, weighted by outcome value, continuous expected
value (`comb-expected-value-elem`); the same measure-ratio idea underlies Monte Carlo estimation and
integral-geometry problems. Recognition trigger: "a random point / time / position" with infinitely
many equally likely outcomes — model the region, then take a ratio of matching measures.

## History

Geometric probability — assigning chances by length, area, or volume rather than by counting — has a famous origin in $1777$, when Georges-Louis Leclerc, Comte de Buffon, posed and solved his "needle problem": the probability that a dropped needle crosses a ruled line, an answer involving $\pi$. This linked probability to geometry and even to estimating $\pi$ experimentally. The field was developed further in the $19$th century by Joseph Bertrand, whose $1889$ "paradox" exposed how the answer depends on how one models "random." It matters because it extends probability from discrete counting to continuous space, and because Bertrand's paradox is a lasting lesson in stating a sample space precisely.
