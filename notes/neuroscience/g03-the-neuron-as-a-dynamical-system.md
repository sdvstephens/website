---
course: neuroscience
chapter: 7
section: G3
title: The Neuron as a Dynamical System
lecturer: Matilde Marcolli
source-pages: 1-63
---

This is Lecture 2 of *Geometry of Neuroscience* (Ma 191b, Caltech, Winter 2026), “Neurons and the Brain: The Neuron as a Dynamical System”. It has two parts:

1. Neurons and the brain: a quick neuroscience overview.
2. Individual neurons as nonlinear dynamical systems.

The reference for the first part is Liqun Luo’s *Principles of Neurobiology*. The references for the second part are Hoppensteadt’s *An Introduction to the Mathematics of Neurons*, Izhikevich’s *Dynamical Systems in Neuroscience* and Pesin–Climenhaga’s *Lectures on Fractal Geometry and Dynamical Systems*, with Ermentrout–Terman’s *Mathematical Foundations of Neuroscience* and the paper of Kostova, Ravindran and Schonbek on the FitzHugh–Nagumo model as additional reading. Full details are in the references at the end.

## Part 1: Neurons and the brain

### Brains of different animals

Nervous systems come in very different sizes. The slides show a photograph of each animal (and of a mouse brain and a human brain) next to these facts:

| Animal | Neurons | Remarks |
|---|---|---|
| Jellyfish | 5600 | The simplest form of brain, a “nerve net”; used for sensation, feeding and locomotion. The box jellyfish has 24 eyes. |
| Worm (*C. elegans*) | 302 (sensory, motor and interneurons) | Its 7000 connections are completely mapped, which allows a full understanding of simple circuits (e.g. the response to touch). |
| Insect (*Drosophila*) | 100,000 | Displays sophisticated social and cognitive behaviors (memory, spatial navigation). |
| Fish (zebrafish) | 100,000 | Transparent in the larval stage, so every single neuron can be imaged during behavior. Interesting behaviors: prey capture, sleep. |
| Mouse | about 70 million | Shares many of the same features as the human brain, both anatomically and functionally. |
| Human | 100 billion | Each hemisphere is the size of an extra large pizza; there are 4 km of axons per mm³. |

### Expansion of the neocortex

A slide on the expansion of the neocortex collects several images: a Nissl-stained section of cortex showing its layers I–VI; a reconstruction, based on the fossil record, of the brain of an early mammal from 85 million years ago (olfactory bulb, piriform cortex, rhinal sulcus, a small neocortex, superior colliculus, cerebellum; scale bar 1 cm); coronal sections of a mouse brain and a human brain, the human one with a much larger and folded cortex; sections of a normal mouse brain next to that of a mouse expressing β-catenin in neuroepithelial progenitors, whose cortex is enlarged and folded; and MRI images of “double cortex”.

The **neocortex** is the six-layered structure that forms part of the cerebral cortex. It is involved in higher-order brain functions: sensory perception, cognition, spatial reasoning and language. The slide shows a classical drawing of the layers (molecular layer, layer of small pyramidal cells, layer of large pyramidal cells, layer of polymorphous cells, with the fiber bands: plexus of Exner, band of Bechterew, outer band of Baillarger or band of Gennari, inner band of Baillarger, deep tangential fibers, and the white medullary substance below), together with a picture of the human neocortex divided into lobes. The lobes and their functions:

- *frontal lobe*: attention, short-term memory, planning, motivation;
- *parietal lobe*: integrating sensory information, spatial sense, navigation;
- *occipital lobe*: vision;
- *temporal lobe*: smell and sound, semantics for speech and vision, processing of complex stimuli, forming of long-term memory.

**Columnar structure.** The cortex is composed of discrete, modular columns of neurons, characterized by a consistent connectivity profile. The basic units are *minicolumns*, with the same types of neurons and the same connectivity; these combine into modules, the *hypercolumns*. The slide shows a 3D reconstruction of five columns in rat vibrissal cortex, with layers 1 to 6 between the pial surface and the white matter (underlying image from Marcel Oberlaender, *Beyond the Cortical Column*, Neuroinformatics 2012), and a schematic of an array of cortical columns (layers L1, L2/3, L4, L5, L6) with a neuron’s dendrites and axon inside a column and its position in a section of the brain.

### Organization of the central nervous system

Two labelled drawings show the organization of the central nervous system. A midsagittal section shows the corpus callosum, cingulate gyrus, fornix, anterior and posterior commissures, pineal gland, the diencephalon (thalamus and hypothalamus) with the hypothalamic sulcus, the midbrain, the cerebral aqueduct, the fourth ventricle and the cerebellum. A horizontal section shows the corpus callosum (genu and splenium), septum pellucidum, the anterior horn of the lateral ventricle, head and tail of the caudate nucleus, the internal capsule (anterior limb, genu, posterior limb), the foramen of Monro, putamen, globus pallidus, third ventricle, thalamus, amygdala, hippocampus and fornix.

### The neuron

:::definition Neurons and glia
**Neurons** are the nerve cells that send and receive signals. **Glia** are support cells: they provide structure in the brain, maintain homeostasis, provide insulation by forming myelin (oligodendrocytes), provide nutrients (astrocytes), etc.
:::

The slide’s picture shows a neuron (dendrites, axons) next to an astrocyte and an oligodendrocyte, two types of glial cell. Neurons come in many shapes; the next picture shows three types, with dendrites in blue and axons in red: a *pyramidal cell* (apical dendrite, basal dendrites, cell body, and an axon going to distant targets via the white matter), a *basket cell* (cell body and a spread of axon terminals) and a *motor neuron* (cell body, wide dendritic tree, and an axon going to muscle).

### Signaling between neurons and circuit motifs

A neuron receives signals on its dendrites, at synapses with the axon tips of previous neurons; an electrical signal travels from the cell body along the axon to the axon tips, which form synapses on the dendrites of the next neuron.

Neurons are wired into a small number of recurring **circuit motifs**, drawn below with excitatory neurons in green, inhibitory neurons in red, excitatory connections ending in a triangle and inhibitory connections ending in a dot:

- **A. Feedforward excitation**: a chain of excitatory neurons, each exciting the next.
- **B. Feedforward inhibition**: an excitatory neuron excites an inhibitory neuron, which inhibits the next excitatory neuron.
- **C. Convergence/divergence**: several neurons converge onto one neuron, which in turn diverges onto several neurons.
- **D. Lateral inhibition**: a neuron excites inhibitory neurons that inhibit its neighbours.
- **E. Feedback/recurrent inhibition**: in E1 a neuron excites a second neuron, which excites an inhibitory neuron that inhibits the first; in E2 four inhibitory neurons form a ring, each inhibiting the next.
- **F. Feedback/recurrent excitation**: in F1 the downstream neuron excites the neuron that excites it; in F2 a neuron receiving input excites itself (a) and is part of an excitatory loop (b).

![Six circuit motifs: feedforward excitation, feedforward inhibition, convergence/divergence, lateral inhibition, feedback inhibition and feedback excitation](/notes/neuroscience/figures/h2-circuit-motifs.svg)

### Hierarchical organization of the brain

The brain is organized hierarchically. The slide shows three images. The first is a stained section of somatosensory cortex (S1) with layers L2/3 and L4 marked. The second is a schematic of the anatomical features of cortico-cortical connections that Felleman and Van Essen (1991) used to assign hierarchical relationships between visual cortical areas: forward (ascending) connections terminate in layer 4 and originate either from superficial layers or from both superficial and deep layers; feedback (descending) connections terminate outside layer 4 and originate either from deep layers or from both superficial and deep layers; lateral connections terminate in all layers. The third is Felleman and Van Essen’s hierarchy of visual areas, from the retinal ganglion cells (RGC) and LGN through V1, V2, V3, V4, MT, MST and the parietal and inferotemporal areas up to the entorhinal cortex (ER) and hippocampus (HC).

### The fruitfulness of “following the anatomy”

Three examples show what has been learned by following the anatomy:

- *Hubel and Wiesel: orientation selectivity.* A neuron in visual cortex fires strongly for a bar at one orientation and weakly for others; its response (spikes per second) as a function of stimulus orientation is a bell-shaped tuning curve.
- *Edvard and May-Britt Moser: grid cells.* The spikes of a place cell, plotted over the path of an animal exploring an enclosure, cluster in one place; those of a grid cell form a regular grid of firing fields.
- *Michael Fee: sparse HVC neurons.* During a zebra finch’s song motif (syllables a, b, c, d, shown in a spectrogram), each projection neuron of the song nucleus HVC fires a single brief burst (a few ms) at one moment of the song.

> If one wants to understand function in biology, one should study structure.
> (Francis Crick)

### Synaptic transmission

At the level of single neurons, signaling between neurons happens by synaptic transmission. The slide’s figure walks through the steps at a chemical synapse, where a myelinated axon ends on a dendrite:

1. Transmitter is synthesized and then stored in vesicles.
2. An action potential invades the presynaptic terminal.
3. Depolarization of the presynaptic terminal causes the opening of voltage-gated Ca²⁺ channels.
4. Ca²⁺ flows in through the channels.
5. Ca²⁺ causes vesicles to fuse with the presynaptic membrane.
6. Transmitter is released into the synaptic cleft via exocytosis.
7. Transmitter binds to receptor molecules in the postsynaptic membrane.
8. Postsynaptic channels open or close.
9. The postsynaptic current causes an excitatory or inhibitory postsynaptic potential that changes the excitability of the postsynaptic cell.
10. Vesicular membrane is retrieved from the plasma membrane.

**Calcium influx is necessary for neurotransmitter release.** In the experiment on the slide, the presynaptic neuron is voltage-clamped (its potential $V_{\text{pre}}$ is imposed and the current $I_{\text{pre}}$ measured) while the postsynaptic membrane potential is recorded. In the control, a 3 ms step of the presynaptic potential from about $-70$ mV to about $-20$ mV produces an inward presynaptic calcium current and a postsynaptic depolarization from about $-60$ mV to about $-5$ mV. With a Ca²⁺ channel blocker the calcium current disappears and there is no postsynaptic response. Release therefore depends on voltage-gated calcium channels.

### Resting potential and action potential

At rest, ion concentrations differ across the membrane. The slide’s figure gives K⁺ at 4 mM outside and 120 mM inside, Na⁺ at 150 mM outside and 15 mM inside, Cl⁻ at 120 mM outside and 5 mM inside; the inside of the membrane is negatively charged relative to the outside. These gradients are maintained by the Na⁺–K⁺ ATPase, which uses one ATP (giving ADP and Pᵢ) to pump 3 Na⁺ out and 2 K⁺ in, and by the K⁺–Cl⁻ cotransporter. A second picture shows K⁺ diffusing out through potassium channels, Na⁺ diffusing in through sodium channels, and the Na⁺/K⁺ pump.

Each ion has a **reversal potential**, at which the diffusion potential exactly counterbalances the electrical potential:
$$
V_{\text{Eq}} = \frac{RT}{zF}\,\ln\left(\frac{[X]_{\text{out}}}{[X]_{\text{in}}}\right),
$$
where $[X]_{\text{out}}$ and $[X]_{\text{in}}$ are the concentrations of the ion $X$ outside and inside, $z$ is its valence, $R$ is the gas constant, $T$ the temperature and $F$ Faraday’s constant.

The **action potential** is the spike in membrane potential that a neuron fires. After a stimulus, the membrane potential rises from the resting state ($-70$ mV); if it does not reach the threshold (about $-55$ mV) the initiation fails and the potential falls back. Once the threshold is crossed, the membrane depolarizes rapidly up to about $+40$ mV, then repolarizes, overshooting below the resting potential during the refractory period before returning to rest; the whole event takes about 2 ms.

![Schematic action potential: voltage against time, with stimulus, threshold, failed initiations, depolarization, repolarization and refractory period](/notes/neuroscience/figures/h2-action-potential.svg)

The slide’s accompanying pictures show the membrane at rest (Na⁺ at high concentration outside, K⁺ at high concentration inside, outside positive) and during the action potential (Na⁺ entering the cell, so that the charges across the membrane are locally reversed), and a neuron along whose axon this region of reversed charge travels from the cell body towards the axon terminals: the propagation of the action potential.

## Part 2: The neuron as a nonlinear dynamical system

### Modeling the neuron

Modeling the neuron is an interplay of electrophysiology, the bifurcation mechanisms of dynamical systems, and the computational properties of neurons. A neuron can be described

- in terms of ions and channels,
- in terms of input/output relations,
- as a nonlinear dynamical system.

From the third point of view, a neuron is a dynamical system near a transition (a bifurcation) between resting and spiking activity. The idea is to deduce computational properties of neurons from the *geometry* of the phase portrait at the bifurcations of the nonlinear dynamical system.

### Properties of neurons

- There are about $10^{11}$ neurons in the human brain.
- Neurons can transmit electric signals over long distances.
- A neuron can receive input from as many as $10^5$ other neurons through synapses.
- Neurons are organized in neuronal circuits.
- Spikes are the main means of communication between neurons.
- Neurons have a firing threshold.

## The Hodgkin–Huxley model

The Hodgkin–Huxley model is based on the giant axon of the squid. The slide’s figure (from Eckert, *Animal Physiology*, W. H. Freeman, 2000, Fig. 5-21) shows the squid with its stellate ganglion and the stellate nerve containing the giant axon; the experimental setup, with a stimulus electrode, a recording electrode and a reference electrode on the axon connected to an amplifier; and the recorded membrane potential, which jumps from $-70$ mV to about $+40$ mV and back within about 2 ms.

### Deriving the Hodgkin–Huxley equation

:::definition Membrane potential
Every cell has a **membrane potential**
$$
V_M = V_{\text{in}} - V_{\text{out}},
$$
the difference between the electric potential inside and outside the cell membrane. The **resting potential** is the potential across the membrane when the cell is at rest; for a typical neuron it is about $-70$ mV.
:::

Sodium and potassium channels are of two kinds: *non-gated* channels, which are always open, and *voltage-gated* channels, which open or close depending on conditions on the membrane potential.

- An **inward current** consists of positively charged ions entering the cell, such as Na⁺. It raises the membrane potential: the membrane is **depolarized**.
- An **outward current** consists of positively charged ions leaving the cell, such as K⁺, or negatively charged ions entering the cell, such as Cl⁻. It lowers the membrane potential: the membrane is **hyperpolarized**.

### First step: the Nernst–Planck equation

The Nernst–Planck equation describes the general flux of an ion driven by electrical and concentration gradients across a membrane. Let $C(x)$ be the concentration of some ion and $V(x)$ the potential at a point $x \in M$ of the membrane. Two effects contribute to the flux.

- **Diffusion**, from high to low concentration. The diffusive flux is
$$
J_{\text{diff}} = -D\,\frac{\partial C}{\partial x},
$$
where the diffusion constant $D$ depends on the size of the molecules.
- **Electrical drift.** The electric field is $E = -\partial V/\partial x$, and with $\mu$ the mobility of the ion the drift flux is
$$
J_{\text{drift}} = -\mu\, C\,\frac{\partial V}{\partial x}.
$$

The total flux across the membrane is $J = J_{\text{diff}} + J_{\text{drift}}$. At equilibrium $J = 0$; the condition that the corresponding current flux vanishes is the Nernst–Planck equation. Its solution uses the **Einstein relation** between the mobility and the diffusion coefficient,
$$
D = \frac{kT}{q}\,\mu,
$$
where $k$ is Boltzmann’s constant, $T$ the temperature and $q$ the charge of the ion.

:::proposition Nernst equilibrium potential
At equilibrium, the potential difference between two points $x, x'$ is
$$
\Delta V = -\frac{kT}{q}\,\log\left(\frac{C(x)}{C(x')}\right).
$$
:::

:::proof
The condition $J = 0$ reads $-D\,dC - \mu C\,dV = 0$, that is, $dV = -\frac{D}{\mu}\,\frac{dC}{C}$. Integrating, $\int dV = -\frac{D}{\mu}\int \frac{dC}{C}$, so
$$
\Delta V = -\frac{D}{\mu}\,\log\left(\frac{C(x)}{C(x')}\right).
$$
By the Einstein relation $D/\mu = kT/q$, which gives the formula.
:::

:::remark
Taking $x$ inside and $x'$ outside the membrane, this says $V_{\text{in}} - V_{\text{out}} = \frac{kT}{q}\log\frac{C_{\text{out}}}{C_{\text{in}}}$, which is the reversal potential $V_{\text{Eq}} = \frac{RT}{zF}\ln\frac{[X]_{\text{out}}}{[X]_{\text{in}}}$ seen earlier, since $k/q = R/(zF)$ for an ion of charge $q = ze$.
:::

Away from equilibrium, the **Nernst–Planck equation for the flux**, with diffusion parameter $D$, is
$$
J(x,t) = -D\left(\frac{\partial C(x,t)}{\partial x} + \frac{q}{kT}\,C(x,t)\,\frac{\partial V(x,t)}{\partial x}\right).
$$

### The Hodgkin–Huxley circuit

The Nernst–Planck equation does not explain the mechanism through which channels open and close. To model the dynamics of action potentials, Hodgkin and Huxley added voltage-gated conductance variables. The membrane is modelled as an electrical circuit: between the extracellular and intracellular sides, a capacitor $C_m$ (the membrane) sits in parallel with one branch for each ionic current. Each branch has a conductance $g$ in series with a battery whose voltage $E$ is the reversal potential of that ion; the sodium and potassium conductances are variable (voltage-gated), while the chloride and leak conductances are fixed.

![Equivalent circuit of the membrane: parallel branches for Na, K, Cl and leak currents, each a conductance and a battery, in parallel with the membrane capacitance](/notes/neuroscience/figures/h2-hh-circuit.svg)

Conservation of current in this circuit gives
$$
C_M\,\frac{dV_M}{dt} + I_{\text{ion}} = I_{\text{ext}}.
$$
If $p_i$ denotes the fraction of open channels for ion $i$, it evolves by
$$
\frac{dp_i}{dt} = \alpha_i(V)\,(1 - p_i) - \beta_i(V)\,p_i,
$$
where $\alpha_i(V)$ and $\beta_i(V)$ are the voltage-dependent rates at which closed channels open and open channels close.

### The Hodgkin–Huxley equations

In the Hodgkin–Huxley model of the giant squid axon there are three currents:

- a persistent voltage-gated K⁺ current, with four activation gates;
- a transient voltage-gated Na⁺ current, with three activation gates;
- a leak current (Cl⁻).

The **activation variables** $n, m$ are the probabilities that an activation gate is open, and the **inactivation variable** $h$ is the probability that the inactivation gate is open.

:::definition Hodgkin–Huxley equations
$$
\begin{aligned}
C_M\,\frac{dV_M}{dt} &= -g_K\,n^4\,(V_M - V_K) - g_{Na}\,m^3 h\,(V_M - V_{Na}) - g_L\,(V_M - V_L),\\
\frac{dn}{dt} &= \alpha_n(V_M)\,(1-n) - \beta_n(V_M)\,n,\\
\frac{dm}{dt} &= \alpha_m(V_M)\,(1-m) - \beta_m(V_M)\,m,\\
\frac{dh}{dt} &= \alpha_h(V_M)\,(1-h) - \beta_h(V_M)\,h,
\end{aligned}
$$
where $V_{\text{ion}}$ is the **reversal potential** of each ion, the potential at which there is no net flow of that ion across the membrane.
:::

### Propagation of the action potential

To follow the action potential along the axon, let $V = V_M(x,t)$ depend on the position $x$ along the axon as well. Then
$$
C\,\frac{\partial V}{\partial t} = \frac{a}{2R}\,\frac{\partial^2 V}{\partial x^2} + I - I_K - I_{Na} - I_L,
$$
where $a$ is the radius of the axon, $R$ the resistance of the axoplasm, and the currents are as above, each of the gate-model form $I = g\,m^a h^b\,(V - V_{\text{ion}})$ (here the exponents count gates, as in $m^3 h$ for sodium and $n^4$ for potassium).

The nonlinearities are in the rate functions $\alpha(V)$ and $\beta(V)$:
$$
\begin{aligned}
\alpha_n(V_m) &= \frac{0.01\,(V_m + 10)}{\exp\left(\frac{V_m+10}{10}\right) - 1}, &
\alpha_m(V_m) &= \frac{0.1\,(V_m + 25)}{\exp\left(\frac{V_m+25}{10}\right) - 1}, &
\alpha_h(V_m) &= 0.07\,\exp\left(\frac{V_m}{20}\right),\\
\beta_n(V_m) &= 0.125\,\exp\left(\frac{V_m}{80}\right), &
\beta_m(V_m) &= 4\,\exp\left(\frac{V_m}{18}\right), &
\beta_h(V_m) &= \frac{1}{\exp\left(\frac{V_m+30}{10}\right) + 1}.
\end{aligned}
$$
These are Hodgkin and Huxley’s original empirical fits (rates in ms⁻¹), in which $V_m$ is measured in mV as the displacement of the membrane potential from its resting value, with depolarization counted as negative.  The equations are then treated numerically.

### Injected current as a bifurcation parameter

The injected current $I$ acts as a bifurcation parameter. Plotting $V(t)$ for increasing $I$ (the slide gives $I$ in nanoamps) shows, in turn: no firing; firing of a single spike; and a cycle with a train of spikes. Between these regimes the amplitude of the response jumps suddenly, with no gradual increase: a bifurcation phenomenon.

![Simulated membrane potential of the Hodgkin–Huxley model for three injected currents: no spike, a single spike, a periodic spike train](/notes/neuroscience/figures/h2-hh-traces.svg)

The traces drawn here are computed from the standard Hodgkin–Huxley parameters, starting at rest ($V = -65$ mV in the modern convention), with $I$ a current density in µA/cm²: for $I = -3$ the potential just settles at a slightly lower level, for $I = 5$ the neuron fires one spike and then returns to rest through damped oscillations, and for $I = 10$ it fires periodically.

:::remark Linearization and the center manifold
The linearization of the Hodgkin–Huxley system at its fixed point (in the spiking regime) has two negative eigenvalues and two complex eigenvalues with small positive real part. The components along the eigenvectors of the negative eigenvalues decay to zero for large $t$. The eigenvectors of the complex eigenvalues define the **center manifold**: solutions of the 4-dimensional system flow towards the center manifold, a 2-dimensional plane, and the limit cycle lies in the center manifold plane.
:::

![Limit cycle of the Hodgkin–Huxley model for I = 10, projected to the plane of V and n](/notes/neuroscience/figures/h2-hh-limit-cycle.svg)

The figure shows the limit cycle for $I = 10$, projected to the $(V, n)$-plane, as on the slide. (For the parameters used here the eigenvalues of the linearization at the equilibrium are approximately $-4.77$, $-0.139$ and $0.004 \pm 0.588\,i$, as described in the remark.)

## The FitzHugh–Nagumo model

The FitzHugh–Nagumo model (1961) is a simplified version of the Hodgkin–Huxley dynamics. The neuron receives signals along its dendrites (the dendritic tree), processes them in the soma, and sends a single output along the axon; the slide’s picture shows the soma, the dendrites, the initial segment (axon hillock), the axon with its myelin sheath, and the terminals (endings, “buttons”).

The voltage difference at one location in the axon affects the time evolution of the voltage differences at nearby locations, so the action potential propagates along the length of the axon. One therefore models

- the time evolution of the action potential at a given site on the axon, and
- the diffusion of the action potential along the axon.

### Heuristics: damped oscillators

Here is a heuristic for the form of the equation. Let $u(t)$ be the action potential at a particular site on the axon.

:::definition Damped harmonic oscillator
The (linear) **damped harmonic oscillator** is
$$
\ddot u + \zeta\,\dot u + c\,u = 0,
$$
where the constant $\zeta$ measures how strongly the oscillations are damped. In first order form,
$$
\begin{aligned}
\dot u &= -\zeta\,u - v,\\
\dot v &= c\,u.
\end{aligned}
$$
:::

A more refined model is a **nonlinear damped harmonic oscillator**, in which the constant $\zeta$ is replaced by a function of $u$.

:::definition Van der Pol equation
The **van der Pol equation** (which comes from electrical circuits) is
$$
\ddot u + \zeta\,(u^2 - 1)\,\dot u + c\,u = 0.
$$
In first order form,
$$
\begin{aligned}
\dot u &= \zeta\left(u - \frac{u^3}{3}\right) - v,\\
\dot v &= c\,u,
\end{aligned}
$$
since the first equation gives $\dot v = -\ddot u + \zeta\,(\dot u - u^2 \dot u)$.
:::

For small $|u|$ the damping coefficient $\zeta(u^2 - 1)$ is negative, so small oscillations grow, while for large $|u|$ they are damped; the solutions settle onto a periodic relaxation oscillation, shown here for $\zeta = 5$, $c = 1$.

![A solution of the van der Pol equation: a relaxation oscillation alternating between slow drifts near u = 2 and u = -2 and fast jumps](/notes/neuroscience/figures/h2-vdp-relaxation.svg)

The FitzHugh–Nagumo model is based on a version of the nonlinear damped harmonic oscillator, a more general form of the van der Pol equation.

### The FitzHugh–Nagumo equations

:::definition Bonhoeffer–van der Pol oscillator
The **Bonhoeffer–van der Pol** nonlinear damped harmonic oscillator is
$$
\begin{aligned}
\dot u &= u - \frac{u^3}{3} - v + I,\\
\dot v &= c\,u - \gamma - d\,v,
\end{aligned}
$$
with parameters $\gamma, c, d$ to be set empirically and an external forcing term $I = I(t)$.
:::

:::definition FitzHugh–Nagumo equation
The **FitzHugh–Nagumo equation** is
$$
\begin{aligned}
\dot u &= a\,g(u) - b\,v + I,\\
\dot v &= c\,u - d\,v,
\end{aligned}
$$
where $g(u)$ is the cubic polynomial
$$
g(u) = -u\,(u - \theta)\,(u - 1).
$$
:::

This only models the action potential in time at a fixed site, with no varying spatial dimension. To include dependence on a spatial coordinate, let $u = u(x,t)$:
$$
\begin{aligned}
\frac{\partial u}{\partial t} &= a\,g(u) - b\,v + I + \kappa\,\frac{\partial^2 u}{\partial x^2},\\
\frac{\partial v}{\partial t} &= c\,u - d\,v.
\end{aligned}
$$
This form is used for the propagation of signals (traveling waves) in excitable media.

### Discrete modeling: a coupled map lattice

For numerical simulations one discretizes the FitzHugh–Nagumo equation. Fix an increment $\Delta > 0$ and replace

- the time derivative by $\Delta^{-1}\big(u(x, t+\Delta) - u(x,t)\big)$,
- the second space derivative by $\Delta^{-2}\big(u(x+\Delta, t) - 2u(x,t) + u(x-\Delta, t)\big)$.

Writing $u_k(n) = u(k\Delta, n\Delta)$, this gives a finite difference equation, here without external forcing:
$$
\begin{aligned}
u_k(n+1) &= u_k(n) - A\,u_k(n)\,\big(u_k(n) - \theta\big)\big(u_k(n) - 1\big) - \alpha\,v_k(n) + \kappa\,U(n),\\
v_k(n+1) &= \beta\,u_k(n) + \gamma\,v_k(n),
\end{aligned}
$$
with coefficients
$$
A = a\Delta, \quad \alpha = b\Delta, \quad \beta = c\Delta, \quad \gamma = 1 - d\Delta,
$$
and the diffusion term (from the second space derivative)
$$
U(n) = \Delta^{-1}\big(u_{k+1}(n) - 2u_k(n) + u_{k-1}(n)\big).
$$
The empirical assumptions on the parameters are: $\alpha, \beta$ small, $\theta$ near $1/2$, and $\gamma < 1$ near one.

:::definition Coupled map lattice
A discrete system of this type is a **coupled map lattice**:

- $u, v$ are only defined on a discrete set, the lattice $\Delta\ZZ \times \Delta\ZZ \subset \RR \times \RR$;
- each time step is modelled by a **local map** $f = (f_1, f_2) : \RR^2 \to \RR^2$, here
$$
\begin{aligned}
f_1(u,v) &= u - A\,u\,(u-\theta)(u-1) - \alpha\,v,\\
f_2(u,v) &= \beta\,u + \gamma\,v;
\end{aligned}
$$
- the local maps at the different sites are coupled together by interaction terms like $U$.
:::

Coupled map lattices are a useful method for studying PDEs. The main problem is controlling the error term, which can grow rapidly after a number of iterations.

### Fixed points of the local map

We now study the local map
$$
f : (u,v) \mapsto \begin{pmatrix} u - A\,u\,(u-\theta)(u-1) - \alpha\,v \\ \beta\,u + \gamma\,v \end{pmatrix}.
$$

:::proposition Fixed points of the local map
The origin $(u,v) = (0,0) = f(0,0)$ is a fixed point for all values of the parameters. Let
$$
A_0 = \frac{4\alpha\beta}{(1-\gamma)(1-\theta)^2}.
$$
For $0 < A < A_0$ the origin is the only fixed point; for $A = A_0$ there is one additional fixed point; for $A > A_0$ there are the origin and two more fixed points.
:::

:::proof
The fixed-point equations are $v = \beta u + \gamma v$ and $u = u - A u(u-\theta)(u-1) - \alpha v$, that is,
$$
v = \frac{\beta}{1-\gamma}\,u, \qquad A\,u\,(u-\theta)(u-1) + \frac{\alpha\beta}{1-\gamma}\,u = 0.
$$
Besides $u = 0$, the (real) solutions of the second equation are the roots of $A(u-\theta)(u-1) + \frac{\alpha\beta}{1-\gamma} = 0$, namely
$$
u = \frac{1}{2}\left(\theta + 1 \pm \sqrt{(\theta-1)^2 - \frac{4\alpha\beta}{A(1-\gamma)}}\right).
$$
The discriminant is nonnegative if and only if $A \geq A_0$; it vanishes for $A = A_0$, giving one additional fixed point, and is positive for $A > A_0$, giving two.
:::

So the behavior of the equation changes at the threshold $A = A_0$.

### Stability of fixed points

The Jacobian matrix $Df = \left(\frac{\partial f_i}{\partial x_j}\right)_{ij}$ describes the linear approximation of $f$ in a neighbourhood of a point:
$$
f(\underline{x}) = f(\underline{p}) + Df(\underline{p})\,(\underline{x} - \underline{p}) + R(\underline{x} - \underline{p}),
$$
where the error term $R$ (the nonlinearities) is small when $\underline{x}$ is sufficiently near $\underline{p}$. At a fixed point $\underline{p} = f(\underline{p})$ of a nonlinear map with linearization $Df(\underline{p})$, the stability properties of the fixed point are determined by the eigenvalues of the linearization.

:::proposition Fixed points in the plane
Let $(0,0)$ be a fixed point of $T : \RR^2 \to \RR^2$ whose linearization has eigenvalues $\mu, \lambda$ not on the unit circle. Then $(0,0)$ is

- an **attractive** fixed point if $|\lambda| \leq |\mu| < 1$;
- a **saddle point** if $|\lambda| < 1 < |\mu|$;
- a **repelling** fixed point if $1 < |\lambda| \leq |\mu|$.
:::

The slide’s table summarizes the behavior near a fixed point of a two-dimensional discrete dynamical system according to the eigenvalues $\lambda_1, \lambda_2$ of the linearization:

| Eigenvalues | Stable ($\lvert\lambda\rvert < 1$) | Lyapunov stable ($\lvert\lambda\rvert = 1$) | Unstable ($\lvert\lambda\rvert > 1$) |
|---|---|---|---|
| Real | stable point: $\lvert\lambda_1\rvert < 1$, $\lvert\lambda_2\rvert < 1$ | neutral point: $\lvert\lambda_1\rvert = 1$, $\lvert\lambda_2\rvert < 1$, or $\lvert\lambda_1\rvert = \lvert\lambda_2\rvert = 1$ | saddle point: $\lvert\lambda_1\rvert > 1$, $\lvert\lambda_2\rvert < 1$; unstable point: $\lvert\lambda_1\rvert > 1$, $\lvert\lambda_2\rvert > 1$ |
| Complex conjugate | stable spiral focus: $\lvert\lambda_1\rvert = \lvert\lambda_2\rvert < 1$ | neutral center: $\lvert\lambda_1\rvert = \lvert\lambda_2\rvert = 1$ | unstable spiral focus: $\lvert\lambda_1\rvert = \lvert\lambda_2\rvert > 1$ |

Its sketches show orbits moving in along both eigendirections at a stable point, in along one and out along the other at a saddle, out along both at an unstable point, spiralling in or out at a focus, and circling at a neutral center.

### Linearization of the FitzHugh–Nagumo map

The Jacobian of the local map is
$$
Df(u,v) = \begin{pmatrix} 1 - A\theta + 2A(1+\theta)\,u - 3A u^2 & -\alpha \\ \beta & \gamma \end{pmatrix},
$$
and its eigenvalues at a fixed point $(u,v)$ give the stability of that fixed point. If $\alpha, \beta$ are sufficiently small, the eigenvalues are approximately $\gamma$ and the value of $1 - A\theta + 2A(1+\theta)u - 3Au^2$ at the fixed point.

:::proposition Stability of the origin
At the fixed point $(u,v) = (0,0)$ the eigenvalues are close to $\gamma$ and $1 - A\theta$, and $|1 - A\theta| < 1$ for $0 < A < 2/\theta = A_1$. Hence, for $\gamma < 1$:

- for $0 < A < A_1$, the origin $(0,0)$ is an attracting fixed point;
- for $A > A_1$, the origin $(0,0)$ is a saddle point.

Moreover $A_1 > A_0$, so when the stability of $(0,0)$ changes there are already two more fixed points.
:::

To find the stability at the other fixed points, approximate both their location and the value of $Df$ there. From the first fixed-point equation, the fixed points lie on the cubic
$$
v = -\frac{A}{\alpha}\,u\,(u-\theta)(u-1),
$$
and they are the points of intersection of this cubic curve with the line $v = u\beta/(1-\gamma)$. If $\beta$ is very small compared with $1 - \gamma$, the line is almost horizontal, and the fixed points are approximately the intersections of the cubic with $v = 0$, namely $(0,0)$, $(\theta, 0)$ and $(1,0)$.

:::proposition Stability of the other fixed points
- At $(\theta, 0)$ the eigenvalues of $Df$ are approximately $\gamma$ and $1 + A\theta - A\theta^2$. Since $0 < \theta < 1$, the second eigenvalue has $|\lambda| > 1$, so this is a saddle point for all $A$.
- At $(1,0)$ the eigenvalues of $Df$ are approximately $\gamma$ and $1 + A\theta - A$. The second eigenvalue has $|\lambda| < 1$ when $0 < A < 2/(1-\theta) = A_2$, so for $A < A_2$ this is an attractive fixed point, and for $A > A_2$ a saddle.
:::

![The cubic and the line whose intersections are the fixed points: the origin (stable), the first fixed point near (θ,0) (saddle) and the second near (1,0) (stable)](/notes/neuroscience/figures/h2-fhn-nullclines.svg)

The figure above is a schematic of the cubic curve and the line (not to scale: for small $\alpha$ the cubic is much taller and the line much flatter). The slides show the same geometry twice: once as two panels in a $(u,w)$-plane, with the cubic, the line, the direction field (panel A) and trajectories that fall vertically onto the cubic and then move along it towards the outer fixed points (panel B); and once as a direction field with the cubic and a line through the origin meeting it in three points.

**Cases.** For $A_0 < A < \min\{A_1, A_2\}$ there are three fixed points: the origin is stable, the first fixed point is a saddle, and the second is stable. The trajectory approaching the first fixed point is a **separatrix** between the basins of attraction of the origin and of the second fixed point.

As $A$ increases further:

- At a value before $A_1$ (namely $A = 1/\theta$) the second eigenvalue $1 - A\theta$ at the origin changes sign; this reverses the direction of the left/right motion of trajectories near the origin, which now jump from side to side.
- A similar reversal happens at the second fixed point near $A \sim 1/(1-\theta)$.
- If $A_1 < A_2$ (that is, $\theta > 1/2$), the origin changes behavior to a saddle before the second fixed point does.
- In this range, what happens to the trajectories now leaving the origin in a near-horizontal direction? The first fixed point is also a saddle, repelling in the horizontal direction...
- The linear approximation at the fixed points gives an incomplete picture: one must also look at the behavior of periodic orbits. The trajectories leaving the origin are attracted by a periodic orbit of period 2, $f(f(u,v)) = (u,v)$, which appears around the origin when $A > A_1$.

:::definition Morse–Smale system
A **Morse–Smale system** is a dynamical system with finitely many periodic orbits (including fixed points), in which all orbits converge to a periodic orbit.
:::

## Period doubling and chaos

### The period-doubling cascade

- In the range of the parameter $A$ discussed above, the FitzHugh–Nagumo model is a Morse–Smale dynamical system.
- When the parameter $A$ is increased beyond $\max\{A_1, A_2\}$, the orbit of order 2 stops being attractive, and two further points of order 4 appear near each (now unstable) point of order 2: a new attractive orbit of period 4.
- This is a **cascade of period doubling**: the period 4 orbit becomes unstable, giving rise to a stable period 8 orbit, and so on, with the stable orbit of period $2^n$ becoming unstable and a new stable orbit of period $2^{n+1}$ emerging from the bifurcation.
- Numerical estimates indicate that the bifurcation values $A_n$ of the parameter $A$ converge to a value $A_\infty$ as $n \to \infty$.
- The dynamical system is Morse–Smale in the range $A < A_\infty$.
- In fact there are two sequences of such periodic orbits: one around $(0,0)$, to the left of the stable curve through the first fixed point $\sim (\theta, 0)$, and one around the second fixed point $\sim (1,0)$, to the right of the stable curve through the first fixed point.

### Constructing bifurcation diagrams

1. Fix a value of the parameter $A$ and an initial condition $(u,v)$ (near the origin).
2. Compute a sufficiently large number of iterates.
3. Plot the resulting positions $f^n(u,v)$.
4. Repeat for other values of $A$.
5. Repeat the whole process for other initial conditions (near the second fixed point, and near the other fixed points where one expects to find a period-doubling cascade).

Typically one such bifurcation diagram (near one of the fixed points involved) looks like the picture on the slide: as the parameter increases, a single branch of fixed points splits into two branches (period 2), each of which splits again (period 4, then 8, …) at parameter values that come closer and closer together, after which the points fill out bands (chaos), interrupted by thin windows of periodic behavior.

### Cascade bifurcations and chaos theory

What happens in these diagrams beyond the period-doubling series, for $A \geq A_\infty$? One sees a much more complicated behavior, and periodic orbits of periods other than $2^n$; one also finds orbits that are dense in a Cantor set and do not approach a periodic orbit.

The period doublings have a **universal** behavior:
$$
A_n - A_{n-1} \sim C\,\delta^{-n},
$$
where $\delta \approx 4.669$ is the **Feigenbaum constant**, a universal constant.

:::definition Sharkovsky’s ordering
**Sharkovsky’s ordering** of the natural numbers is
$$
\begin{aligned}
&3 < 5 < 7 < 9 < 11 < \cdots\\
&< 2\cdot 3 < 2\cdot 5 < 2\cdot 7 < 2\cdot 9 < 2\cdot 11 < \cdots\\
&< 2^n\cdot 3 < 2^n\cdot 5 < 2^n\cdot 7 < 2^n\cdot 9 < 2^n\cdot 11 < \cdots\\
&\cdots < 2^n < 2^{n-1} < \cdots < 8 < 4 < 2 < 1.
\end{aligned}
$$
Here $<$ denotes this ordering of $\NN$, which differs from the usual one.
:::

:::theorem Sharkovsky’s theorem
If a continuous map $h : \RR \to \RR$ has a periodic point of period $m \in \NN$, then it also has periodic points of every period $n \in \NN$ with $n > m$ in Sharkovsky’s ordering.
:::

:::corollary
If a continuous map $h : \RR \to \RR$ has only finitely many periodic orbits, then all their periods are powers of $2$.
:::

:::remark
The result requires $h : \RR \to \RR$ (the proof is based on the intermediate value theorem). It is not true for maps $h : \CC \to \CC$: for instance $h(z) = e^{2\pi i/n} z$, for which every periodic orbit other than the fixed point $0$ has period $n$.
:::

Sharkovsky’s theorem is a very useful result for explaining period-doubling cascades, by reducing to a one-dimensional dynamics.

:::theorem Period three implies chaos (Li–Yorke)
For a continuous map of the line, a periodic orbit of period three implies infinitely many periodic orbits, of arbitrary periods in $\NN$, and sensitive dependence on initial conditions for orbits (which no longer necessarily converge to a periodic orbit).
:::

This is the theorem of Tien-Yien Li and James A. Yorke, *Period Three Implies Chaos*, The American Mathematical Monthly 82 (1975), no. 10, 985–992. The typical behavior past $A \geq A_\infty$, at the end of the period-doubling cascade, is a chaos region with arbitrary periodic orbits.

### Bifurcation diagrams of the FitzHugh–Nagumo model

The slide shows the bifurcation diagram of the discrete FitzHugh–Nagumo model with $\theta = 0.51$, $\alpha = 0.01$, $\beta = 0.02$ and $\gamma = 0.8$, as $A$ varies from 3 to 7. It is redrawn here from a direct computation with the same parameters, plotting the first coordinate $u$ of the iterates.

![Bifurcation diagram of the discrete FitzHugh–Nagumo map for A from 3 to 7: two period-doubling cascades, near u = 0 and near u = 1, that become chaotic bands and merge](/notes/neuroscience/figures/h2-fhn-bifurcation.svg)

For these values $A_1 = 2/\theta \approx 3.92$ and $A_2 = 2/(1-\theta) \approx 4.08$: the branch at $u = 0$ splits first, then the branch at $u = 1$. Each starts a cascade of period doublings ending in chaotic bands with periodic windows, and for $A$ near $6.5$ the two chaotic regions merge.

A second slide, taken from the article at `http://iopscience.iop.org/article/10.1088/1367-2630/12/5/053040`, shows a bifurcation diagram for the electric potential $x = u$ in a version of the FitzHugh–Nagumo model, plotting $\max(x)$ against a parameter $A$ ranging over $[0.42, 0.52]$: a period-doubling cascade of the maxima, then from about $A = 0.465$ a chaotic region interrupted by periodic windows.

## Trajectories of the continuous FitzHugh–Nagumo model

The same phenomena can be seen in the trajectories $(u(t), v(t))$ of the original continuous FitzHugh–Nagumo ODE. The slides show a sequence of phase portraits in the $(u,w)$-plane.

- With three fixed points $E_0$ (the origin), $E_1$ and $E_2$: the fixed points $E_0$ and $E_2$ are stable and $E_1$ is unstable. Trajectories starting on either side of the stable curve of $E_1$ converge to $E_0$ or to $E_2$.
- For other parameter values, the fixed points $E_0$ and $E_2$ are stable, with an unstable periodic orbit around $E_2$.
- With an external forcing $I$ as well: a limit cycle appears through a Hopf bifurcation near $E_0$, moves upward with increasing $I$, and disappears in another Hopf bifurcation near $E_2$. The slide shows the limit cycles for seven values of $I$, labelled a to g: small cycles near the two Hopf bifurcations (a and g) and large relaxation cycles in between.
- A sequence of orbits for values of $I$: seventeen schematic phase portraits, labelled A to Q, show how the configuration of fixed points ($E_0$, $E_1$, $E_2$, and in some panels two further points $M_1$, $M_2$), the separatrices of the saddle $E_1$ and the periodic orbits changes as $I$ varies, from a panel (A) with a single fixed point $E_2$ surrounded by a spiralling orbit to a panel (Q) with a single fixed point $E_0$ surrounded by a spiralling orbit.

### The resulting picture

The resulting picture of the model, in the phase plane of membrane potential $u$ and recovery variable $w$, is built from two nullclines: the cubic $w = u - u^3/3 + I$, where $\dot u = 0$, and the line $w = (u + 0.7)/0.8$, where $\dot w = 0$. Their intersection is the resting state. A large enough perturbation from rest sends the trajectory on a long excursion around the cubic, which is the spike. The slide labels the regions of the phase plane with FitzHugh’s names: resting, quasi-threshold, self-excitatory, regenerative, active, absolutely refractory, relatively refractory, hyperpolarized, depolarized, and the “no man’s land” near the middle branch of the cubic.

![Phase plane of the FitzHugh–Nagumo model: cubic and linear nullclines, the resting state, trajectories, and FitzHugh’s names for the regions](/notes/neuroscience/figures/h2-fhn-phase-plane.svg)

The trajectories in this figure are computed for $\dot u = u - u^3/3 - w + I$, $\dot w = 0.08\,(u + 0.7 - 0.8\,w)$ with $I = 0$. Starting slightly to the left of the middle branch of the cubic, a trajectory returns to rest along the left branch; starting slightly to the right, it is carried over to the right branch (active), climbs it, jumps back across the top (absolutely refractory) and slides down the left branch (relatively refractory) to rest.

Further slides illustrate the same behavior:

- A figure with two cases (labelled in Portuguese: polynomial nullcline, linear nullcline, orbit, time): in (a) an orbit started on the right makes one excursion around the cubic and then spirals into the fixed point where the two nullclines meet, and (b) the corresponding $v(t)$ shows one spike followed by damped oscillations to rest; in (c), with the intersection of the nullclines moved slightly along the cubic, the orbit converges to a limit cycle around the fixed point, and (d) $v(t)$ is a periodic train of spikes.
- A “V–W plane plot” with the V-nullcline (the cubic), the W-nullcline (the line) and one trajectory, which starts at the origin, crosses to the right branch, climbs it, jumps across to the left branch and descends to the fixed point near the minimum of the cubic. Two vertical lines, near the two turning points of the cubic, divide the plane into Regions 1, 2 and 3. With an external forcing term $I$ one moves the cubic curve, and with it the intersections with the line.
- **Varying the external forcing.** For small $I$ the line meets the cubic on its left branch, at a stable resting state. Increasing $I$ raises the cubic, until the intersection lies on the middle branch; the resting state becomes unstable and the neuron spikes. For a sequence of increasing $I$ the trajectories are a family of limit cycles (repetitive spiking), and for large $I$ the intersection moves onto the right branch, where it is stable again: the neuron stays depolarized and spiking is blocked. The slide’s inset traces read “resting”, “spiking”, “blocked”.

## Conclusion

- A single neuron is a complicated nonlinear dynamical system.
- Spiking behavior arises from the bifurcation pattern, the stability properties of the equilibria (fixed points), and the occurrence of limit cycles.
- Varying the parameters (the injected current $I$ and the parameter $A$) creates a pattern of bifurcations.
- Bifurcation cascades and chaos are possible.

Later in the course we will deal with larger neuronal architectures, beyond the single-neuron case.

## References

- Liqun Luo, *Principles of Neurobiology*, Garland Science, 2016.
- F. C. Hoppensteadt, *An Introduction to the Mathematics of Neurons: Modeling in the Frequency Domain*, Cambridge University Press, 1997.
- Eugene M. Izhikevich, *Dynamical Systems in Neuroscience*, MIT Press, 2007.
- Yakov Pesin, Vaughn Climenhaga, *Lectures on Fractal Geometry and Dynamical Systems*, American Mathematical Society, 2009.
- G. Bard Ermentrout, David H. Terman, *Mathematical Foundations of Neuroscience*, Springer, 2010.
- Tanya Kostova, Renuka Ravindran, Maria Schonbek, FitzHugh–Nagumo revisited: types of bifurcations, periodical forcing and stability regions by a Lyapunov functional, *Internat. J. Bifur. Chaos Appl. Sci. Engrg.* 14 (2004), no. 3, 913–925.
- Tien-Yien Li, James A. Yorke, Period three implies chaos, *The American Mathematical Monthly* 82 (1975), no. 10, 985–992.
- D. J. Felleman, D. C. Van Essen (1991), on the hierarchy of visual cortical areas (source of the hierarchy figure).
- Marcel Oberlaender, *Beyond the Cortical Column*, Neuroinformatics 2012 (source of the cortical column reconstruction).
- R. Eckert, *Animal Physiology*, W. H. Freeman and Co., New York, 2000, Fig. 5-21 (source of the squid giant axon figure).
- *New Journal of Physics* 12 (2010), article 053040, `http://iopscience.iop.org/article/10.1088/1367-2630/12/5/053040` (source of the FitzHugh–Nagumo bifurcation diagram for $\max(x)$).
