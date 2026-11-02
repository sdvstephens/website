---
course: neuroscience
chapter: 4
section: 11
title: Machine Learning
source-pages: 1-29
---

This lecture has three learning objectives:

1. Understand the fundamental concepts of machine learning and AI.
2. Describe functional similarities between machine learning and neuroscience.
3. Consider the applications and implications of machine learning development.

## AI, machine learning and deep learning

Three terms are often used as if they were synonyms. They are nested, each inside the one before.

:::definition
- **Artificial intelligence (AI)** is *the concept*: the overarching field of creating “intelligent machines.” It refers to the general ability of machines to perform tasks thought to require human intelligence.
- **Machine learning (ML)** is *the method*: a specific type of AI focused on enabling machines to learn from data without explicit programming. Machine-learning systems improve their performance over time as they are exposed to more data.
- **Deep learning** is *the tool*: a subset of machine learning that uses artificial neural networks with multiple layers to learn complex patterns and make predictions. Deep-learning models require *large* amounts of data.
:::

## Machine learning: an introduction

In machine learning, algorithms “learn” through experience.

- The computer is given data and a problem to solve, but not full instructions on how to solve it.
- It develops multiple approaches to the problem, then assesses how successful each one is.
- Algorithms that are successful are developed further; those that are unsuccessful are removed.

In the lecturer’s words, you’re more or less just training a mathematical model to make decisions. But it does learn through the strengthening and weakening of “synapses” (they literally call them that) between “neurons” (yep, that too). It is built on the principles of synaptic plasticity.

## Computerized synaptic plasticity

The principle is the one from the Learning and Memory lecture: neurons that fire together wire together.

- Synapses that are frequently activated strengthen; synapses that are not activated die off.
- In the same way, algorithms that are successful are developed, and algorithms that are not are removed.

Synapses, computerized or biological, work on the same principle; in the lecturer’s words, these models learn in the same way that we do.

## Making predictions

Put simply, machine learning is training a computer to **make predictions** based on data: instead of being given rules, the model learns patterns.

![Supervised learning: raw data goes into an algorithm, which a supervisor guides with a training dataset and the desired output; after processing, the output is the data sorted into four groups.](/notes/neuroscience/figures/g8-supervised-pipeline.svg)

The slide’s diagram is of **supervised learning**. Raw data goes in as input to an algorithm. A “supervisor” guides the algorithm with a training dataset and the desired output. After processing, the output is the data sorted into groups (four, in the diagram).

What kind of predictions does machine learning make? Common types of predictive model:

- classifier models (for example, the multilayer perceptron, MLP);
- correlational and regression models;
- computer vision (convolutional neural networks, CNNs);
- principal components analysis (PCA);
- image and audio generation (generative adversarial networks, GANs);
- language and text generation (large language models, LLMs).

A graphic on the same slide sorts AI models into six types: machine learning models, deep learning models, generative models, hybrid models, natural language processing (NLP) models and computer vision models.

Examples in psychology and neuroscience:

- classifying patterns in EEG;
- recognizing tumors in MRI and CT scans;
- predicting depression from behavior;
- tracking behavior visually;
- eye-tracking in attention tasks;
- decoding neuronal activity;
- creating neural prosthetics and re-creating sensation;
- providing patient-centered care.

## Networks built from “neurons” and “synapses”

![A network asked “Is it a cat?”: a photo of a cat feeds three input units, then three, then two, then one output unit, joined by connections of different thickness. It answers 0.7; the error, 0.3, is sent back through the network, and over repeated passes the answer rises to 0.73, 0.77 and 0.93.](/notes/neuroscience/figures/g8-cat-network.svg)

The slide shows a small artificial neural network asked “Is it a cat?” A photo of a cat feeds into a layer of three units (“neurons”), then another three, then two, then a single output unit. The connections (“synapses”) between layers are drawn thicker or thinner according to their strength. The network’s first answer is 0.7. In the slide’s animation, the error (0.3, the distance from a confident “yes”) is sent back through the network, layer by layer, and the connection strengths are adjusted. After each pass the answer improves: 0.73, then 0.77, then 0.93, with the error shrinking to 0.07.

In the lecturer’s words, believe it or not, this is modeled on how your visual pathway, namely the ventral stream, works: different nodes of these regions and networks analyze different components of the visual information, and collectively reach a conclusion of recognition.

A second image shows a 3D visualization of an artificial network, glowing nodes joined by many lines, with counters reading 55 neurons and 330 synapses.

## Learning through experience

- A model learns from a **training** dataset, which lets it assess its own accuracy after each **epoch** (one full pass through the training data).
- Next, it is validated on a **test** dataset it has never seen before.
- It can also use **reinforcement learning**, which “rewards” the model for making correct decisions and “punishes” it for incorrect ones. This is common for learning to adapt and solve new problems.

The reinforcement-learning slide shows two simulations. In one, a blocky orange character named Albert, who can control each of his limbs, learns (with the clock sped up 400 times) to crawl across a room toward a green target square. In the other, a humanoid robot learns to walk.

## Types of machine learning

| Type | Description | Example |
|---|---|---|
| **Supervised** | labeled data → predict an outcome | predict depression (yes/no) |
| **Unsupervised** | no labels → find patterns | clustering patterns of symptoms |
| **Reinforcement** | learn through reward and punishment | a rat in a maze learns the route |

![Supervised and unsupervised learning. Supervised: labeled training data of owls, foxes and squirrels plus their labels go into training; the trained model predicts labels for unlabeled test data. Unsupervised: unlabeled training data goes into training, and the output is the animals sorted into three groups, one per kind.](/notes/neuroscience/figures/g8-supervised-unsupervised.svg)

The slide’s diagram makes the difference concrete with pictures of owls, foxes and squirrels. In **supervised learning**, the model trains on labeled data: the pictures together with their labels (owl, squirrel, fox). The trained model then predicts labels for unlabeled test pictures it has not seen. In **unsupervised learning**, the model trains on unlabeled pictures, and its output is the pictures sorted into three groups, one per kind of animal, without ever being told the names.

## Weights between nodes

The strength of each connection between two nodes (“neurons”) is a number called its **weight**. Learning means adjusting the weights.

![The same small network (two inputs, four hidden units, one output) after iteration 0 and after iteration 100. At iteration 0 all connections are thin; by iteration 100 several have grown thick, some positive and some negative.](/notes/neuroscience/figures/g8-weights.svg)

The slide’s animation shows a network with two input nodes (I), four hidden nodes (H) and one output node (O). Line thickness grows with the size of the weight, and positive and negative weights get different colors. At iteration 0 every weight is close to zero; over the training iterations most of them grow, some strongly positive and some strongly negative, while a few stay near zero. Numbering the inputs and hidden nodes from the top:

| Connection | After iteration 0 | After iteration 100 |
|---|---|---|
| I1 → H1 | $-0.02$ | $-3.54$ |
| I1 → H2 | $0$ | $0.17$ |
| I1 → H3 | $0$ | $-3.4$ |
| I1 → H4 | $-0.01$ | $-3.03$ |
| I2 → H1 | $-0.01$ | $2.8$ |
| I2 → H2 | $0$ | $0.09$ |
| I2 → H3 | $0.02$ | $-0.04$ |
| I2 → H4 | $-0.01$ | $-2.58$ |
| H1 → O | $0.02$ | $3.44$ |
| H2 → O | $0$ | $-0.41$ |
| H3 → O | $0$ | $-5.17$ |
| H4 → O | $0.01$ | $3.39$ |

A second animation shows a larger network reading a handwritten digit (a 7): 784 input nodes, two hidden layers, and ten output nodes labeled 0 to 9, one for each digit, with every node in one layer connected to every node in the next.

## Loss: how wrong were we?

:::definition
**Loss** is a number that represents how wrong the model’s prediction was. The goal of training is to **minimize loss**.
:::

Which measure of loss is used depends on the task. For example:

- regression → mean squared error;
- classification → cross-entropy.

(The corner of the slide carries the four-panel “Loss” meme, drawn in lines.)

## Loss graphs

![Two graphs of loss against training epoch. Left: training loss falls from about 2.6 to 0.5 over 100 epochs, while validation loss spikes early, drops to about 0.85 near epoch 20, then levels off near 1.0. Right: training loss falls from 1.0 to nearly 0 by about epoch 110, while validation loss stays around 0.8 throughout.](/notes/neuroscience/figures/g8-loss-curves.svg)

The slide shows two loss graphs, each tracking the loss on the training data and on validation data the model doesn’t train on, epoch by epoch. (In the redrawing, training loss is blue and validation loss orange in both graphs.)

- **Left:** over 100 epochs, the training loss falls from about 2.6 to about 0.5, still falling at the end. The validation loss jumps to about 3.25 in the first few epochs, drops to about 0.85 around epoch 20, then rises a little and levels off near 1.0.
- **Right:** over about 190 epochs, the training loss falls steadily from 1.0 to almost 0 by about epoch 110. The validation loss barely moves, staying around 0.8 the whole time.

In both, the model keeps getting better on the data it trains on, while getting no better on data it hasn’t seen.

## But like… how?

How does a model actually lower its loss? The slide’s one-word answer: math.

![Left: loss plotted against the value of a single weight is a U-shaped curve, and its lowest point marks the minimum loss and a good weight value. Right: the error surface of a linear neuron with two input weights, a bowl over the w1–w2 plane, rising from 0 at the center to 50 at the corners.](/notes/neuroscience/figures/g8-loss-minimum.svg)

Plot the loss against the value of one weight and you get a curve; its lowest point gives the minimum loss and a good weight value. With two weights, the loss becomes a surface. The slide’s example is the error surface of a linear neuron with two input weights, $w_1$ and $w_2$: a bowl whose error $E$ runs from 0 at the center up to 50 at the corners. Training means finding the weights at the bottom.

## Learning rate = “step size”

The **learning rate** is the step size: how far the model moves its weights at each update.

![A cost curve C(w) with several dips. At a point where the slope is positive the model steps left; at a point where the slope is negative it steps right; the steps bring it to rest in a local minimum in the middle, while a deeper dip lies further left.](/notes/neuroscience/figures/g8-step-size.svg)

The slide’s animation plots a cost $C(w)$ against a weight $w$. The curve has several dips, and the deepest one is far to the left. From the current weight, the model must decide whether to step left or right:

- where the slope of the curve is positive, step left;
- where the slope is negative, step right.

Step by step the weight settles into the bottom of a dip, a **local minimum**. The animation’s image for this: imagine a ball rolling down a hill. Starting where it does, the ball comes to rest in the middle dip, and never reaches the deeper dip to the left.

## Common model types

| Model type | Best for | Neuroscience example |
|---|---|---|
| **MLP** (multilayer perceptron) | tabular or simple structured data | behavioral surveys, trial data |
| **CNN** (convolutional neural network) | images | brain scans (fMRI, histology) |
| **RNN** (recurrent neural network) | time series | EEG, pupil dilation, stimulus tracking |
| **Transformer** | sequences, with attention | natural language processing (NLP), decoding MEG (magnetoencephalography), eye tracking |

## Computer vision

:::definition
**Computer vision** is the process of acquiring, processing and analyzing digital images using machine-learning algorithms.
:::

It is used for a wide variety of applications, including object recognition, visual estimation and image restoration. Self-driving cars do this in real time! The slide shows a self-driving car on a city street, and a view from a car in traffic with each object boxed and labeled by the software: car, bus, person, motorcycle.

## Built like the human visual system

Computer vision was modeled on our visual system. The sensory organs are replaced with sensors and cameras, and a sequence of mathematical steps and subsetting of the data takes the place of the sequence of visual brain regions that the information runs through on the way to recognizing what we see and deciding what to do about it.

The slide sets the two pathways side by side, step for step:

| Human visual pathway | Computer vision pathway |
|---|---|
| visual receptors | camera sensors |
| LGN (location) | CPU (data subsampling) |
| V1 (basic lines) | subsampling (divides data into simple components) |
| divergent pathways in ascending complexity (shape, color, contrast) | convolution (analyzes components by element) |
| identification and comprehension | readout (constructs an algorithmic representation of the visual image) |

The slide’s figure has four panels:

- **(a)** A side view of a monkey brain with the two visual pathways leaving V1: the dorsal pathway (“where”) up through V2 and MT, and the ventral pathway (“what”) forward through V4 to IT.
- **(b)** The hierarchy as boxes, redrawn below. From the retina, parvo and magno channels run side by side through the LGN, V1, V2 and V3. The ventral stream (gray, mostly parvo) reaches V4 from V2 and V3, then runs on to IT and “other ventral areas,” pictured by a teapot, an object to recognize. The dorsal stream (black, magno) runs from V1 straight to MT (which also gets input from V3 and trades signals with V4), then to MST and “other dorsal areas,” pictured by moving objects.
- **(c)** What each level encodes: simple line segments at the first level, corners and angles at the next, whole letters (A, B, C) at the top, with receptive fields growing larger at each level.
- **(d)** A convolutional network reading a photo: convolution (linear) then subsampling (nonlinear), twice over, then a readout.

![The hierarchy of visual areas: from the retina, parvo (gray) and magno (black) channels run up through the LGN, V1, V2 and V3. The gray ventral stream reaches V4 from V2 and V3, then IT and other ventral areas (objects). The black dorsal stream runs from V1 to MT, then MST and other dorsal areas (motion). V3 also feeds MT, and V4 and MT connect both ways.](/notes/neuroscience/figures/g8-visual-hierarchy.svg)

The slide also repeats the digit-reading network, with its 784 input nodes.

## CAPTCHA: robot blocker *and* trainer

There is a growing need to restrict computerized access to media, and CAPTCHAs are one answer: tests meant to tell humans from bots. The slide’s example asks you to “Click the flower” among six pictures (a car, a house, a glass of water, a group of children, a flower and a clock).

- Many CAPTCHAs are actually sourcing your answers for AI computer-vision training datasets.
- Modern “I’m not a robot” tests are actually based on your mouse movements and browser history.

As the lecturer put it: they’ve played us for absolute fools.

## Dr. Timnit Gebru

- Dr. Timnit Gebru came to the US as a refugee from Ethiopia and became a leading AI researcher at Google, where she co-led the Ethical AI team.
- In 2020 she co-wrote a paper warning that large AI language models, trained on enormous amounts of internet text, absorb the biases in that text, including against people who are not white.
- She was silenced and fired by Google.
- Members of Congress wrote to Google demanding answers, and Google’s chief executive apologized without admitting wrongdoing.

The slide also carries the logo of Proctorio, the online exam-proctoring software, without comment. The lecturer urged the class to look the story up: it was a disaster, and one of *many* issues at Google that year.

## ChatGPT and friends

ChatGPT is a large language model (LLM), and in the lecturer’s verdict it kinda sucks at neuroscience, to be honest. The lecturer’s rundown of the options:

- [ChatGPT](https://chat.openai.com/): pretty mid.
- [Perplexity](https://www.perplexity.ai/): actually cites its sources, and lies less.
- [Consensus](https://consensus.app/search/): gives the percentage of studies that say yes or no to a question, and cites its sources.
- [Latimer](https://app.latimer.ai/chat/): trained specifically on writing by BIPOC (Black, Indigenous and people of color) authors.

## Attention

The slide shows the first page of “Attention Is All You Need,” the 2017 paper by Ashish Vaswani and colleagues at Google Brain, Google Research and the University of Toronto (presented at NIPS 2017). Its abstract proposes the **Transformer**, a new network architecture based solely on attention mechanisms, dispensing with recurrence and convolutions entirely: the model in the last row of the table above.

:::definition
**Attention** is a technique that helps models prioritize the most important parts of the information they are given. It assigns dynamic “soft” weights to the components of an input, adjusting the model’s focus based on the input’s context, and it can consider all pieces of the input simultaneously.
:::

## Check yourself

:::question Memory check
What are some key similarities in how humans and AI process and act on information?

- (A) Learning from experience to refine pathways
- (B) Forms neurons, synapses and specialized “brain regions”
- (C) Analyzing smaller components to construct the “whole”
- (D) Uses past experience to solve new problems
- (E) All of the above

:::solution
(E) All of the above. Networks strengthen and weaken their “synapses” with experience, just as synaptic plasticity refines pathways (A); they are built from “neurons” and “synapses,” with different parts handling different components, as in the ventral stream (B); computer vision, like the visual pathway, builds the whole image from simple components (C); and a trained model applies what it learned to data it has never seen, or adapts through reinforcement (D).
:::
:::
