In 1614 John Napier published tables that let a navigator multiply two unwieldy seven-digit numbers
without ever multiplying: look each number up, *add* the two results, and look the sum back up. A
grinding multiplication became a schoolchild's addition. What kind of function could turn *every*
product into a sum — and why should such a thing be forced to exist the moment you write down powers
of a fixed number?

## Discovery

You already know one law of exponents cold: $b^m\cdot b^n = b^{m+n}$. Keep the table of powers of
$2$ in front of you: $2^1,2^2,\dots,2^{10} = 2,4,8,16,32,64,128,256,512,1024$.

1. Compute $8\times 32$ without multiplying $8$ by $32$. Locate each factor in the table as a power
   of $2$, combine the two powers using $2^m\cdot 2^n=2^{m+n}$, and read the answer back off the
   table. Write down exactly what arithmetic you performed on the *exponents*.
2. Reading the table left-to-right sends an exponent to a value ($3\mapsto 8$). Define the reverse
   machine $L$ that sends a value back to its exponent ($8\mapsto 3$). Using what you know about
   *inverse functions*, state the property $x\mapsto 2^x$ must have for this reverse machine to be a
   legitimate function — one output per input — rather than a guess.
3. In step 1 you multiplied two values by adding their exponents. Re-express that *entire* move using
   only the reverse machine $L$: write $L(8\times 32)$ as an expression in $L(8)$ and $L(32)$. Repeat
   with a different pair drawn from the table to confirm the pattern is not a coincidence.
4. The exponent laws also say $2^m/2^n = 2^{m-n}$ and $(2^m)^k = 2^{mk}$. Predict, in the same style,
   how $L(x/y)$ and how $L(x^k)$ each break apart into expressions built from $L(x)$ and $L(y)$.
5. Every entry in the table is positive; scanning down, the values shrink toward $0$ but never touch
   it. Is there any exponent $x$ with $2^x = 0$? With $2^x = -4$? Say what that forces about which
   inputs the reverse machine $L$ is even allowed to accept.
6. A colleague builds the same reverse machine from base $10$ instead of base $2$; call theirs
   $L_{10}$. Starting from the identity $x = 2^{\,L(x)}$ and applying $L_{10}$ to both sides, express
   $L_{10}(x)$ using $L(x)$ and a single constant. What is that constant?

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

Fix a base $b\gt 0$ with $b\ne 1$. The **exponential function** $f(x)=b^x$ has domain all of $\RR$
and range the positive reals $(0,\infty)$; it is strictly monotonic, hence one-to-one, hence
invertible. Its inverse is the **logarithm to base $b$**, written $\log_b$, defined by
$$\log_b y = x \iff b^x = y \qquad (y \gt 0).$$
So $\log_b y$ is "the exponent you must raise $b$ to in order to reach $y$." Being the inverse, it
satisfies the cancellation identities $b^{\log_b y}=y$ (for $y\gt 0$) and $\log_b(b^x)=x$ (for all
$x$), and it is defined **only for positive inputs** — the range of $b^x$. Immediately
$\log_b 1 = 0$ and $\log_b b = 1$.

Taking the exponent laws as holding for real exponents (the continuous extension of the
natural-number laws), the logarithm inherits, for all $x,y\gt 0$ and every real $k$:
$$\log_b(xy) = \log_b x + \log_b y,\qquad \log_b\!\left(\tfrac{x}{y}\right) = \log_b x - \log_b y,$$
$$\log_b(x^k) = k\,\log_b x,\qquad \log_c x = \frac{\log_b x}{\log_b c}\ \ (c\gt 0,\ c\ne 1).$$
The first law is the one Napier exploited: the logarithm **turns products into sums** precisely
*because* it inverts a function whose defining law adds exponents.

### Proof

Fix $b\gt 0$, $b\ne 1$, and let $x,y\gt 0$. Because $\log_b$ is the inverse of $t\mapsto b^t$, we use
two facts repeatedly: every positive number is uniquely $b^{(\cdot)}$ of some exponent, and
$\log_b(b^s)=s$ for every real $s$. Introduce the exponents
$$u=\log_b x,\qquad v=\log_b y,\qquad\text{so}\qquad b^u=x,\quad b^v=y.$$

**Product law.** Multiply the two representations and apply $b^u b^v=b^{u+v}$ (exponent law 1):
$$xy = b^u\,b^v = b^{\,u+v}.$$
Now $xy$ is exhibited as $b$ to the exponent $u+v$, so applying $\log_b$ and cancelling,
$$\log_b(xy) = \log_b\!\big(b^{\,u+v}\big) = u+v = \log_b x + \log_b y.$$

**Quotient law.** Divide instead, using $b^u/b^v = b^{u-v}$:
$$\frac{x}{y} = \frac{b^u}{b^v} = b^{\,u-v}\quad\Longrightarrow\quad
\log_b\!\left(\tfrac{x}{y}\right) = u-v = \log_b x - \log_b y.$$
(This is legitimate since $y\gt 0$ makes $b^v=y\ne 0$.)

**Power law.** For any real $k$, raise $x=b^u$ to the $k$ and apply $(b^u)^k=b^{uk}$ (exponent
law 2):
$$x^k = (b^u)^k = b^{\,uk}\quad\Longrightarrow\quad \log_b(x^k) = uk = k\,\log_b x.$$

**Change of base.** Let $c\gt 0$, $c\ne 1$, and set $w=\log_c x$, so that $c^w=x$. Apply $\log_b$ to
both sides and use the power law just proved:
$$\log_b x = \log_b(c^w) = w\,\log_b c.$$
Since $c\ne 1$ we have $\log_b c \ne 0$ (as $c=b^{\log_b c}$ and $c\ne 1=b^0$ force the exponent to
be nonzero), so we may divide:
$$w = \frac{\log_b x}{\log_b c},\qquad\text{i.e.}\qquad \log_c x = \frac{\log_b x}{\log_b c}.$$

Finally the base values: $b^0=1$ gives $\log_b 1 = 0$, and $b^1=b$ gives $\log_b b = 1$. The domain
restriction is forced too: $b^t\gt 0$ for every real $t$, so no exponent produces $0$ or a negative
number, and $\log_b y$ simply has no meaning for $y\le 0$. $\blacksquare$

### Worked Instance

Napier's trick, in miniature, is exactly the product law. To get $8\times 32$: read
$\log_2 8 = 3$ and $\log_2 32 = 5$ from the exponents, *add* to get $8$, and undo with
$2^8 = 256$. The multiplication was performed as an addition, which is what the tables sold.

Now a computation the table cannot answer directly — solve $2^x = 40$. By definition
$x = \log_2 40$, and the product law splits the argument: $40 = 8\cdot 5$, so
$$x = \log_2 40 = \log_2 8 + \log_2 5 = 3 + \log_2 5.$$
To pin $\log_2 5$ numerically, change base to the $\log_{10}$ your calculator carries:
$\log_2 5 = \dfrac{\log_{10}5}{\log_{10}2} \approx \dfrac{0.699}{0.301} \approx 2.32$, giving
$x \approx 5.32$. A quick sanity check against the Hook: had $40$ been an exact power of $2$ we would
be back to Napier's pure table lookup; the logarithm is what extends "add the exponents" to the
gaps *between* the tabulated powers.

### Pitfalls

- **The law is for products, not sums.** $\log_b(x+y) \ne \log_b x + \log_b y$. The identity that
  turns addition into anything is on the *inside*: $\log_b(xy)=\log_b x+\log_b y$. For instance
  $\log_2(8+8)=\log_2 16 = 4$, not $\log_2 8+\log_2 8 = 6$.
- **Where the exponent lives matters.** $\log_b(x^k) = k\log_b x$, but $(\log_b x)^k$ is a different
  animal — the power law only applies when the exponent is *inside* the argument.
- **A quotient of logs is a change of base, not a log of a quotient.**
  $\dfrac{\log_b x}{\log_b y} = \log_y x$, whereas $\log_b(x/y) = \log_b x - \log_b y$. Confusing the
  two swaps subtraction for division.
- **Logs eat only positive numbers.** $\log_b(-4)$ and $\log_b 0$ are undefined, because $b^t$ is
  always strictly positive. When solving, discard any candidate that feeds a nonpositive value into a
  log.
- **The base is constrained.** $b\gt 0$ and $b\ne 1$; base $1$ is illegal because $1^x$ is constant
  and has no inverse, and negative bases break $b^x$ for most exponents.

:::
:::

## Connections

Logarithms are the inverse of exponentials, so this node sits directly on *inverse functions*: the
graph of $\log_b$ is the reflection of $y=b^x$ across the line $y=x$, and the domain/range swap
(inputs of a log are positive because outputs of an exponential are) is exactly the inverse trading
places. It rests just as directly on the *laws of exponents*: each log law is the mirror of one
exponent law, and the headline fact — logs convert multiplication into addition — is nothing but
"exponents add" read through the inverse. Downstream this powers logarithmic differentiation, growth
and decay models, the decibel and Richter scales, and the entropy/information measures of
combinatorics. Recognition trigger: reach for logarithms whenever the unknown sits *in an exponent*,
whenever a product or power needs to be flattened into a sum, or whenever quantities span many orders
of magnitude.

## History

Logarithms were invented to tame calculation. John Napier, a Scottish laird, published his *Mirifici Logarithmorum Canonis Descriptio* in $1614$ after twenty years of labor, turning multiplication into addition to ease the crushing arithmetic of astronomy and navigation; the Swiss craftsman Jost Bürgi had reached similar ideas independently. Henry Briggs then collaborated with Napier to recast logarithms in base $10$, producing the tables that scientists relied on for the next three centuries. The deeper unity — that logarithms and exponentials are inverse functions, bound to the natural base $e$ — was revealed by Leonhard Euler in the eighteenth century, who put the exponential function at the center of analysis. This mattered enormously: logarithms accelerated the Scientific Revolution, and the exponential and logarithmic functions now describe growth, decay, entropy, and countless natural laws.
