Three doors: a car behind one, goats behind the other two. You pick door $1$. The host — who knows
where the car is — opens door $3$ to reveal a goat and offers to let you switch to door $2$. Most people
feel it is now a $50$–$50$ toss and it makes no difference. It is not, and it does: switching wins twice
as often as staying.

## Discovery

1. Before any door is opened, what is the probability the car sits behind your chosen door? What is the
   probability it sits behind *one of the other two* doors, taken as a group?
2. The host follows a fixed rule: he always opens one of the remaining doors and always reveals a goat,
   never the car and never your door. Since he can obey this rule no matter where the car is, does his
   opening a goat door change the probability that *your original* door hides the car?
3. That "other two doors" group still holds its original share of the probability, but now one of its
   doors stands open with a goat. Where has the group's probability concentrated?
4. Make it rigorous. Assume that when the car is behind your door the host picks uniformly between the
   two goat doors. Compute $P(\text{car behind door }2\mid \text{host opens door }3)$ directly with
   conditional probability, and compare it to $P(\text{car behind door }1\mid\text{host opens door }3)$.

:::example Discovery Problem
Work the discovery above, then reveal to check your derivation.
:::solution
### The Result

With the standard rules — the host knows the layout, always opens a remaining door, always reveals a
goat, and offers a switch — **switching wins with probability $2/3$**, while **staying wins with
probability $1/3$**. The intuition "two doors left, so it is $50$–$50$" is wrong: the host's choice is
*constrained by information*, so opening a goat door is not a neutral event. It effectively transfers the
combined $2/3$ chance of the two unchosen doors onto the single unopened one.

### Proof

Take the car placed uniformly at random and suppose (by relabeling) you pick door $1$. The three equally
likely car locations, and the host's forced or free response, are:

- **Car behind door $1$** (probability $\tfrac13$): both other doors hide goats, so the host opens door
  $2$ or door $3$, each with probability $\tfrac12$ by the uniform tie-break.
- **Car behind door $2$** (probability $\tfrac13$): the host cannot open door $1$ (yours) or door $2$
  (the car), so he *must* open door $3$.
- **Car behind door $3$** (probability $\tfrac13$): symmetrically, the host *must* open door $2$.

Condition on the observed event "host opens door $3$." Its probability is
$$P(\text{opens }3)=\underbrace{\tfrac13\cdot\tfrac12}_{\text{car }1}+\underbrace{\tfrac13\cdot1}_{\text{car }2}+\underbrace{\tfrac13\cdot0}_{\text{car }3}=\tfrac16+\tfrac13=\tfrac12.$$
Therefore
$$P(\text{car }1\mid\text{opens }3)=\frac{\tfrac13\cdot\tfrac12}{\tfrac12}=\frac13,\qquad
P(\text{car }2\mid\text{opens }3)=\frac{\tfrac13\cdot1}{\tfrac12}=\frac23.$$
Staying (door $1$) wins with probability $\tfrac13$; switching (to door $2$) wins with probability
$\tfrac23$. $\blacksquare$

### Worked Instance

Numbers from the proof: after the host opens door $3$, staying wins $1/3$ of the time and switching wins
$2/3$. An intuition amplifier: imagine **$100$ doors**, one car. You pick one (chance $1/100$ of being
right). The host opens $98$ other doors, all goats, leaving one unopened. Your door is still $1/100$; the
lone survivor carries the remaining $99/100$. Switching is almost certainly right — the same mechanism as
the three-door game, just louder.

### Pitfalls

- **The host's knowledge is the whole point.** If the host opened a door *at random* and it happened to
  show a goat, the update differs — then staying and switching are each $1/2$. The $2/3$ result needs a
  host who *never* reveals the car.
- **Opening a goat door is not neutral.** Because the host is forbidden from opening your door or the
  car, his action carries information; it is not like a random door swinging open.
- **"Two doors left" is not "$50$–$50$."** Equal *number* of options does not mean equal *probability*;
  the doors inherited unequal chances from the constrained reveal.
- **State the tie-break assumption.** The clean $2/3$ uses "host picks uniformly when he has a choice";
  a biased host changes the door-specific posteriors (though switching still wins $2/3$ overall).

:::
:::

## Connections

Monty Hall is a sharp lesson in conditional probability (`comb-conditional-probability`): conditioning on
an *informative*, rule-constrained observation, not a random one. It is the same posterior-updating that
Bayes' theorem (`comb-bayes`) formalizes, and a cousin of the boy-girl and two-envelope paradoxes.
Recognition trigger: a puzzle where someone *who knows the answer* reveals partial information under a
fixed rule — the reveal is not neutral, so recompute the conditional probabilities rather than trusting
the symmetric-looking count of remaining options.
