// BUD-E Calibration Questions Database
const CALIBRATION_QUESTIONS = {
  "Physics": {
    "Electric Charges and Fields": [
      {
        "question": "If the distance between two point charges is halved, the electrostatic force between them becomes:",
        "options": [
          "halved",
          "doubled",
          "four times",
          "one-fourth"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The electric field intensity at a distance $r$ from a point charge is inversely proportional to:",
        "options": [
          "$r$",
          "$r^2$",
          "$\\\\sqrt{r}$",
          "$r^3$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is a correct property of electric field lines?",
        "options": [
          "They form closed loops.",
          "They intersect each other at right angles.",
          "They are continuous curves without any breaks in a charge-free region.",
          "They start from a negative charge and end at a positive charge."
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The SI unit of electric dipole moment is:",
        "options": [
          "C m",
          "N/C",
          "C/m",
          "N m"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "An electric dipole placed in a uniform electric field experiences maximum torque when the angle between the dipole moment and the electric field is:",
        "options": [
          "$0^\\\\circ$",
          "$90^\\\\circ$",
          "$45^\\\\circ$",
          "$180^\\\\circ$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The electric flux through a flat surface of area $A$ placed parallel to a uniform electric field $E$ is:",
        "options": [
          "$EA$",
          "$EA / 2$",
          "Zero",
          "$E / A$"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "According to Gauss's law, the total electric flux through a closed surface depends upon:",
        "options": [
          "the shape of the closed surface",
          "the total charge enclosed by the surface",
          "the size of the closed surface",
          "the location of charges outside the surface"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The electric field due to an infinite thin plane sheet of charge is:",
        "options": [
          "independent of the distance from the sheet",
          "directly proportional to the distance from the sheet",
          "inversely proportional to the distance from the sheet",
          "inversely proportional to the square of the distance from the sheet"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "A point charge $q$ is placed at the center of a hollow spherical shell of radius $R$. If the radius of the shell is doubled while keeping the charge unchanged, the total electric flux through the shell will:",
        "options": [
          "become half",
          "remain the same",
          "become double",
          "become four times"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Electrostatic Potential and Capacitance": [
      {
        "question": "The electric potential at a distance $r$ from a point charge $q$ is proportional to:",
        "options": [
          "$r$",
          "$r^2$",
          "$\\\\frac{1}{r}$",
          "$\\\\frac{1}{r^2}$"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The SI unit of electric potential is:",
        "options": [
          "Joule",
          "Volt",
          "Coulomb",
          "Newton per Coulomb"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Equipotential surfaces for a single point charge are:",
        "options": [
          "planes parallel to each other",
          "concentric spheres centered at the charge",
          "cylindrical surfaces",
          "random irregular surfaces"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The work done in moving a test charge over an equipotential surface is:",
        "options": [
          "positive",
          "negative",
          "zero",
          "infinite"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The relation between electric field ($E$) and electric potential ($V$) is given by:",
        "options": [
          "$E = -\\\\frac{dV}{dr}$",
          "$E = \\\\frac{dV}{dr}$",
          "$V = -\\\\frac{dE}{dr}$",
          "$E = V \\\\cdot r$"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Inside a charged hollow spherical conductor, the electric potential is:",
        "options": [
          "zero everywhere",
          "maximum at the center",
          "constant and equal to its value at the surface",
          "directly proportional to the distance from the center"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The capacity of a parallel plate capacitor increases when:",
        "options": [
          "the distance between the plates is increased",
          "a dielectric slab is introduced between the plates",
          "the area of the plates is decreased",
          "air between the plates is replaced by a vacuum"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "When capacitors are connected in series, which of the following quantities remains the same across each capacitor?",
        "options": [
          "Potential difference",
          "Charge",
          "Capacitance",
          "Stored energy"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The energy stored in a capacitor of capacitance $C$ charged to a potential $V$ is given by:",
        "options": [
          "$CV$",
          "$\\\\frac{1}{2} CV$",
          "$\\\\frac{1}{2} CV^2$",
          "$C^2 V$"
        ],
        "answer": 2,
        "answerLetter": "C"
      }
    ],
    "Current Electricity": [
      {
        "question": "The electric current in a conductor is due to the flow of:",
        "options": [
          "positive ions only",
          "free electrons",
          "protons",
          "bound electrons"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The drift velocity ($v\\_d$) of free electrons in a conductor in terms of electric field ($E$) is proportional to:",
        "options": [
          "$\\\\sqrt{E}$",
          "$E$",
          "$E^2$",
          "$1/E$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Ohm's law is valid only when the \\_\\_\\_ of the conductor remains constant:",
        "options": [
          "length",
          "area of cross-section",
          "temperature",
          "resistance"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The resistivity of a metallic conductor typically depends upon:",
        "options": [
          "its shape and size",
          "its length",
          "its area of cross-section",
          "the material and temperature"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "When the temperature of a metallic conductor increases, its electrical resistance:",
        "options": [
          "decreases",
          "increases",
          "remains constant",
          "first increases and then decreases"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Kirchhoff's first law (junction rule) at a junction in an electrical circuit deals with the conservation of:",
        "options": [
          "energy",
          "momentum",
          "charge",
          "mass"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Kirchhoff's second law (loop rule) is based on the law of conservation of:",
        "options": [
          "charge",
          "energy",
          "momentum",
          "angular momentum"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The terminal potential difference ($V$) of a cell of emf $E$ and internal resistance $r$ delivering a current $I$ is given by:",
        "options": [
          "$V = E + Ir$",
          "$V = E - Ir$",
          "$V = Ir - E$",
          "$V = E / Ir$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "A potentiometer is preferred over a voltmeter for measuring the emf of a cell because:",
        "options": [
          "it is portable",
          "it draws no current from the cell at the balance point",
          "it has a low resistance",
          "it is cheaper"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "If three resistors, each of resistance $R$, are connected in parallel, their equivalent resistance is:",
        "options": [
          "$3R$",
          "$R / 3$",
          "$3 / R$",
          "$R$"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Moving Charges and Magnetism": [
      {
        "question": "The magnetic force $\\\\vec{F}$ acting on a charge $q$ moving with velocity $\\\\vec{v}$ in a uniform magnetic field $\\\\vec{B}$ is given by:",
        "options": [
          "$\\\\vec{F} = q(\\\\vec{E} + \\\\vec{v} \\\\times \\\\vec{B})$",
          "$\\\\vec{F} = q(\\\\vec{v} \\\\times \\\\vec{B})$",
          "$\\\\vec{F} = q(\\\\vec{B} \\\\times \\\\vec{v})$",
          "$\\\\vec{F} = \\\\frac{q(\\\\vec{v} \\\\times \\\\vec{B})}{B^2}$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The path of a charged particle moving perpendicular to a uniform magnetic field is:",
        "options": [
          "a straight line",
          "a parabola",
          "a circular path",
          "a helix"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The SI unit of magnetic field is:",
        "options": [
          "Weber",
          "Tesla",
          "Henry",
          "Ampere"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Biot-Savart law in vector form for the magnetic field $d\\\\vec{B}$ due to a current element $Id\\\\vec{l}$ at a distance $\\\\vec{r}$ is expressed as:",
        "options": [
          "$d\\\\vec{B} = \\\\frac{\\\\mu\\_0}{4\\\\pi} \\\\frac{Id\\\\vec{l} \\\\times \\\\vec{r}}{r^2}$",
          "$d\\\\vec{B} = \\\\frac{\\\\mu\\_0}{4\\\\pi} \\\\frac{Id\\\\vec{l} \\\\times \\\\vec{r}}{r^3}$",
          "$d\\\\vec{B} = \\\\frac{\\\\mu\\_0}{4\\\\pi} \\\\frac{Id\\\\vec{l} \\\\cdot \\\\vec{r}}{r^3}$",
          "$d\\\\vec{B} = \\\\frac{\\\\mu\\_0}{4\\\\pi} \\\\frac{\\\\vec{r} \\\\times Id\\\\vec{l}}{r^2}$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The magnetic field at the center of a circular current-carrying coil of radius $R$ and $N$ turns carrying current $I$ is given by:",
        "options": [
          "$B = \\\\frac{\\\\mu\\_0 NI}{2R}$",
          "$B = \\\\frac{\\\\mu\\_0 NI}{4R}$",
          "$B = \\\\frac{\\\\mu\\_0 NI}{2\\\\pi R}$",
          "$B = \\\\frac{2\\\\mu\\_0 NI}{R}$"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Ampere\u2019s circuital law is mathematically expressed as:",
        "options": [
          "$\\\\oint \\\\vec{B} \\\\cdot d\\\\vec{l} = \\\\mu\\_0 I$",
          "$\\\\oint \\\\vec{B} \\\\cdot d\\\\vec{l} = \\\\frac{I}{\\\\mu\\_0}$",
          "$\\\\oint \\\\vec{E} \\\\cdot d\\\\vec{l} = \\\\mu\\_0 I$",
          "$\\\\oint \\\\vec{B} \\\\cdot d\\\\vec{A} = 0$"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Two parallel wires carrying currents in the same direction:",
        "options": [
          "repel each other",
          "attract each other",
          "exert no force on each other",
          "rotate perpendicular to each other"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "A current-carrying rectangular loop placed in a uniform magnetic field experiences maximum torque when the angle between the normal to the loop and the magnetic field is:",
        "options": [
          "$0^\\\\circ$",
          "$45^\\\\circ$",
          "$90^\\\\circ$",
          "$180^\\\\circ$"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "To convert a galvanometer into an ammeter, we connect a:",
        "options": [
          "high resistance in series",
          "low resistance in parallel",
          "high resistance in parallel",
          "low resistance in series"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "A charged particle enters a region of uniform magnetic field at an angle of $45^\\\\circ$ to the field lines. The trajectory of the particle will be:",
        "options": [
          "a circle",
          "a straight line",
          "a parabola",
          "a helix"
        ],
        "answer": 3,
        "answerLetter": "D"
      }
    ],
    "Magnetism and Matter": [
      {
        "question": "Which of the following statements is true about magnetic field lines?",
        "options": [
          "They do not form closed loops.",
          "They intersect each other at neutral points.",
          "Outside a magnet, they point from the North pole to the South pole.",
          "They are discontinuous lines."
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The SI unit of magnetic dipole moment is:",
        "options": [
          "$\\\\text{A m}^{-2}$",
          "$\\\\text{A m}^2$",
          "$\\\\text{Wb m}$",
          "$\\\\text{N A}^{-1} \\\\text{m}^{-1}$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "A magnetic dipole of dipole moment $M$ is placed in a uniform magnetic field $B$. The torque acting on the dipole is maximum when the angle between $M$ and $B$ is:",
        "options": [
          "$0^\\\\circ$",
          "$45^\\\\circ$",
          "$90^\\\\circ$",
          "$180^\\\\circ$"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The potential energy of a magnetic dipole placed in a stable equilibrium position in a uniform magnetic field is:",
        "options": [
          "zero",
          "$-MB$",
          "$+MB$",
          "$2MB$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The angle of dip at the magnetic poles of the Earth is:",
        "options": [
          "$0^\\\\circ$",
          "$45^\\\\circ$",
          "$90^\\\\circ$",
          "$180^\\\\circ$"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "At a certain place, the horizontal component of Earth's magnetic field is $B\\_H$ and the angle of dip is $\\\\delta$. The total intensity of Earth's magnetic field $B$ is given by:",
        "options": [
          "$B\\_H \\\\cos\\\\delta$",
          "$B\\_H \\\\sin\\\\delta$",
          "$B\\_H / \\\\cos\\\\delta$",
          "$B\\_H / \\\\sin\\\\delta$"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The magnetic susceptibility of a diamagnetic substance is:",
        "options": [
          "small and positive",
          "small and negative",
          "large and positive",
          "infinite"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "According to Curie's law, the magnetic susceptibility of a paramagnetic material is inversely proportional to its:",
        "options": [
          "absolute temperature",
          "square of temperature",
          "magnetic field intensity",
          "density"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Above a certain temperature known as the Curie temperature, a ferromagnetic material becomes:",
        "options": [
          "diamagnetic",
          "paramagnetic",
          "non-magnetic entirely",
          "a superconductor"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "If a bar magnet is cut into two equal halves transverse to its length, the magnetic dipole moment of each piece becomes:",
        "options": [
          "twice the original value",
          "half of the original value",
          "zero",
          "equal to the original value"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Electromagnetic Induction": [
      {
        "question": "The phenomenon of production of induced current in a circuit due to a change in magnetic flux linked with it is called:",
        "options": [
          "Magnetic effect of current",
          "Electromagnetic induction",
          "Self-induction",
          "Magnetic polarization"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The SI unit of magnetic flux is:",
        "options": [
          "Tesla",
          "Weber",
          "Henry",
          "Gauss"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "According to Faraday\u2019s law of electromagnetic induction, the magnitude of the induced emf is directly proportional to the rate of change of:",
        "options": [
          "electric flux",
          "magnetic field",
          "magnetic flux",
          "resistance"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Lenz\u2019s law is a consequence of the law of conservation of:",
        "options": [
          "momentum",
          "charge",
          "mass",
          "energy"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "The direction of induced current is given by:",
        "options": [
          "Ampere\u2019s circuital law",
          "Biot-Savart law",
          "Lenz\u2019s law",
          "Coulomb\u2019s law"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The self-inductance of a coil depends upon:",
        "options": [
          "the magnitude of current flowing through it",
          "the geometric properties of the coil",
          "the potential difference across the coil",
          "the rate of change of current"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The dimensional formula for self-inductance is:",
        "options": [
          "$\\[M L^2 T^{-2} A^{-2}]$",
          "$\\[M L^2 T^{-1} A^{-1}]$",
          "$\\[M L T^{-2} A^{-1}]$",
          "$\\[M L^2 T^{-2} A^{-1}]$"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Eddy currents are produced when:",
        "options": [
          "a metal is kept in a steady magnetic field",
          "a metal is kept in a varying magnetic field",
          "a dielectric is kept in a magnetic field",
          "a charge is placed at rest in a magnetic field"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The back emf in a DC motor is maximum when the motor is:",
        "options": [
          "running at maximum speed",
          "just switched on (at rest)",
          "running at half speed",
          "overloaded"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "When a current in a coil changes from $2\\\\text{ A}$ to $4\\\\text{ A}$ in $0.05\\\\text{ s}$, an emf of $8\\\\text{ V}$ is induced in the coil. The self-inductance of the coil is:",
        "options": [
          "$0.2\\\\text{ H}$",
          "$0.4\\\\text{ H}$",
          "$0.1\\\\text{ H}$",
          "$0.8\\\\text{ H}$"
        ],
        "answer": 0,
        "answerLetter": "A"
      }
    ],
    "Alternating Current": [
      {
        "question": "The phase difference between the alternating current and alternating emf in a pure resistive circuit is:",
        "options": [
          "$0$",
          "$\\\\frac{\\\\pi}{2}$",
          "$\\\\pi$",
          "$\\\\frac{\\\\pi}{4}$"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "The root mean square (rms) value of an alternating current $I = I\\_0 \\\\sin(\\\\omega t)$ is given by:",
        "options": [
          "$\\\\frac{I\\_0}{2}$",
          "$\\\\frac{I\\_0}{\\\\sqrt{2}}$",
          "$I\\_0 \\\\sqrt{2}$",
          "$2I\\_0$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "In a pure inductive circuit, the alternating current lags behind the alternating emf by a phase angle of:",
        "options": [
          "$0$",
          "$\\\\frac{\\\\pi}{4}$",
          "$\\\\frac{\\\\pi}{2}$",
          "$\\\\pi$"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The reactance of an inductor of inductance $L$ for an alternating current of frequency $f$ is:",
        "options": [
          "$2\\\\pi f L$",
          "$\\\\frac{1}{2\\\\pi f L}$",
          "$\\\\pi f L$",
          "$\\\\frac{1}{\\\\pi f L}$"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "The capacitive reactance in a capacitive circuit is given by:",
        "options": [
          "$\\\\omega C$",
          "$\\\\frac{1}{\\\\omega C}$",
          "$\\\\omega^2 C$",
          "$\\\\frac{1}{\\\\omega^2 C}$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The impedance of a series LCR circuit is given by the formula:",
        "options": [
          "$Z = R + X\\_L + X\\_C$",
          "$Z = \\\\sqrt{R^2 + (X\\_L - X\\_C)^2}$",
          "$Z = \\\\sqrt{R^2 + X\\_L^2 + X\\_C^2}$",
          "$Z = R^2 + (X\\_L - X\\_C)^2$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "At resonance in a series LCR circuit, the phase angle between voltage and current is:",
        "options": [
          "$\\\\frac{\\\\pi}{2}$",
          "$\\\\pi$",
          "$0$",
          "$\\\\frac{\\\\pi}{4}$"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The resonant frequency of a series LCR circuit is given by:",
        "options": [
          "$\\\\frac{1}{2\\\\pi \\\\sqrt{LC}}$",
          "$2\\\\pi \\\\sqrt{LC}$",
          "$\\\\frac{1}{\\\\sqrt{LC}}$",
          "$\\\\frac{1}{2\\\\pi LC}$"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "The average power consumed in a pure inductive circuit over a complete cycle is:",
        "options": [
          "$E\\_{rms} I\\_{rms}$",
          "Zero",
          "$\\\\frac{1}{2} E\\_0 I\\_0$",
          "$\\\\frac{E\\_{rms} I\\_{rms}}{2}$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The transformer works on the principle of:",
        "options": [
          "self-induction",
          "mutual induction",
          "eddy currents",
          "thermoelectric effect"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Electromagnetic Waves": [
      {
        "question": "Which of the following electromagnetic waves has the shortest wavelength?",
        "options": [
          "Microwaves",
          "Ultraviolet rays",
          "X-rays",
          "Infrared waves"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Displacement current exists in a region in which there is:",
        "options": [
          "a uniform magnetic field",
          "a time-varying electric field",
          "a steady electric current",
          "no electric or magnetic field"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The speed of electromagnetic waves in a vacuum is given by the relation:",
        "options": [
          "$c = \\\\sqrt{\\\\mu\\_0 \\\\varepsilon\\_0}$",
          "$c = \\\\frac{1}{\\\\sqrt{\\\\mu\\_0 \\\\varepsilon\\_0}}$",
          "$c = \\\\frac{\\\\mu\\_0}{\\\\varepsilon\\_0}$",
          "$c = \\\\frac{\\\\varepsilon\\_0}{\\\\mu\\_0}$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Electromagnetic waves are transverse in nature, which is evident by the phenomenon of:",
        "options": [
          "interference",
          "diffraction",
          "polarization",
          "reflection"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following electromagnetic waves are used in radar systems for aircraft navigation?",
        "options": [
          "Infrared rays",
          "Microwaves",
          "Ultraviolet rays",
          "X-rays"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The ozone layer in the atmosphere absorbs which of the following radiations coming from the Sun?",
        "options": [
          "Infrared rays",
          "Ultraviolet rays",
          "Gamma rays",
          "Radio waves"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "In an electromagnetic wave, the oscillating electric and magnetic fields are related to each other by the expression:",
        "options": [
          "$E = B c$",
          "$B = E c$",
          "$E = \\\\frac{c}{B}$",
          "$E = B^2 c$"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following waves are produced by hot bodies and molecules?",
        "options": [
          "Microwaves",
          "Ultraviolet rays",
          "Infrared waves",
          "X-rays"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The frequency of a green light wave is of the order of $6 \\\\times 10^{14}$ Hz. Its corresponding wavelength is approximately:",
        "options": [
          "$500$ nm",
          "$50$ nm",
          "$5000$ nm",
          "$5$ nm"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which part of the electromagnetic spectrum is appropriately used for taking photographs of objects in foggy or misty conditions?",
        "options": [
          "X-rays",
          "Ultraviolet rays",
          "Infrared rays",
          "Gamma rays"
        ],
        "answer": 2,
        "answerLetter": "C"
      }
    ],
    "Ray Optics and Optical Instruments": [
      {
        "question": "The focal length of a concave mirror is $20\\\\text{ cm}$. Its radius of curvature is:",
        "options": [
          "$10\\\\text{ cm}$",
          "$-10\\\\text{ cm}$",
          "$40\\\\text{ cm}$",
          "$-40\\\\text{ cm}$"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Which of the following mirrors always forms a virtual, erect, and diminished image for any position of the real object?",
        "options": [
          "Concave mirror",
          "Convex mirror",
          "Plane mirror",
          "Parabolic mirror"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The relation between refractive index $n$, angle of incidence $i$, and angle of refraction $r$ is given by Snell's law as:",
        "options": [
          "$\\\\frac{\\\\sin i}{\\\\sin r} = \\\\text{constant}$",
          "$\\\\frac{\\\\sin r}{\\\\sin i} = \\\\text{constant}$",
          "$\\\\sin i \\\\cdot \\\\sin r = \\\\text{constant}$",
          "$\\\\frac{\\\\cos i}{\\\\cos r} = \\\\text{constant}$"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Total internal reflection can take place when light travels from:",
        "options": [
          "rarer medium to denser medium",
          "denser medium to rarer medium",
          "air to water",
          "vacuum to glass"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "0\\\\text{ D}$ is:",
        "options": [
          "$+50\\\\text{ cm}$",
          "$-50\\\\text{ cm}$",
          "$+200\\\\text{ cm}$",
          "$-200\\\\text{ cm}$"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "When a ray of white light passes through a glass prism, it splits into its constituent colors. This phenomenon is known as:",
        "options": [
          "Interference",
          "Diffraction",
          "Dispersion",
          "Scattering"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "For a normal human eye, the near point of distinct vision is approximately:",
        "options": [
          "$25\\\\text{ cm}$",
          "$50\\\\text{ cm}$",
          "Infinity",
          "$10\\\\text{ cm}$"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which defect of vision can be corrected by using a concave lens of suitable focal length?",
        "options": [
          "Hypermetropia (farsightedness)",
          "Myopia (nearsightedness)",
          "Presbyopia",
          "Astigmatism"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The magnifying power of a simple microscope of focal length $f$, when the image is formed at the least distance of distinct vision $D$, is given by:",
        "options": [
          "$1 + \\\\frac{D}{f}$",
          "$1 - \\\\frac{D}{f}$",
          "$\\\\frac{D}{f}$",
          "$1 + \\\\frac{f}{D}$"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "In a compound microscope, both the objective and the eye-piece are:",
        "options": [
          "concave lenses",
          "convex lenses",
          "one concave and one convex lens",
          "plane-parallel glass plates"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Wave Optics": [
      {
        "question": "The locus of all points in a medium having the same phase of oscillation is called a:",
        "options": [
          "wavefront",
          "ray",
          "fringe",
          "beam"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "The shape of the wavefront originating from a point source at a very large distance is:",
        "options": [
          "spherical",
          "cylindrical",
          "planar",
          "conical"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "According to Huygens' principle, each point on a wavefront acts as a source of secondary disturbances that emit secondary waves called:",
        "options": [
          "wavelets",
          "rays",
          "photons",
          "pulses"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "When light travels from a rarer medium to a denser medium, which of the following characteristics changes?",
        "options": [
          "Frequency",
          "Wavelength and speed",
          "Phase only",
          "Amplitude only"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Interference of light is based on the principle of conservation of:",
        "options": [
          "momentum",
          "energy",
          "mass",
          "charge"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "In Young's double-slit experiment, the fringe width is given by $\\\\beta = \\\\frac{\\\\lambda D}{d}$. If the wavelength $\\\\lambda$ is doubled, the fringe width becomes:",
        "options": [
          "halved",
          "same",
          "doubled",
          "quadrupled"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The bending of light around the corners of an obstacle or aperture into the region of geometrical shadow is known as:",
        "options": [
          "refraction",
          "interference",
          "diffraction",
          "polarization"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "For sustained interference of light, the two sources must be:",
        "options": [
          "coherent",
          "monochromatic only",
          "of different amplitudes",
          "located very far apart"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "In a single-slit diffraction pattern, the angular width of the central maximum depends on:",
        "options": [
          "the wavelength of light only",
          "the width of the slit only",
          "both the wavelength of light and the width of the slit",
          "the distance between the slit and the screen"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Unpolarized light of intensity $I\\_0$ passes through a polarizer. The intensity of the transmitted polarized light is:",
        "options": [
          "$I\\_0$",
          "$I\\_0 / 2$",
          "$I\\_0 / 4$",
          "Zero"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Dual Nature of Radiation and Matter": [
      {
        "question": "The minimum energy required by an electron to escape from the metal surface is called:",
        "options": [
          "Kinetic energy",
          "Work function",
          "Threshold frequency",
          "Stopping potential"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following particles has the shortest de Broglie wavelength for a given kinetic energy?",
        "options": [
          "Electron",
          "Proton",
          "Neutron",
          "Alpha particle"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "The stopping potential depends upon:",
        "options": [
          "the intensity of incident light",
          "the frequency of incident light and the nature of the metal surface",
          "the distance between the source and the cathode",
          "the area of the metal plate"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Threshold frequency for a metal is $v\\_0$. If light of frequency $2v\\_0$ is incident on the metal, the maximum velocity of emitted photoelectrons will be proportional to:",
        "options": [
          "$\\\\sqrt{v\\_0}$",
          "$v\\_0$",
          "$\\\\frac{1}{v\\_0}$",
          "$v\\_0^2$"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "According to Einstein's photoelectric equation, the maximum kinetic energy of emitted photoelectrons is linearly related to which of the following?",
        "options": [
          "Intensity of incident radiation",
          "Frequency of incident radiation",
          "Velocity of incident photons",
          "Time of exposure"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Davisson-Germer experiment proved:",
        "options": [
          "the particle nature of light",
          "the wave nature of electrons",
          "the quantization of charge",
          "the existence of photons"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "If the momentum of an electron is doubled, its de Broglie wavelength becomes:",
        "options": [
          "doubled",
          "four times",
          "halved",
          "unchanged"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Photons possess:",
        "options": [
          "energy and momentum",
          "only charge",
          "only rest mass",
          "both charge and momentum"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "When the intensity of incident light on a metal surface is increased, the photoelectric current:",
        "options": [
          "decreases",
          "increases",
          "remains constant",
          "becomes zero"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Atoms": [
      {
        "question": "Thomson\u2019s atomic model is commonly known as:",
        "options": [
          "Planetary model",
          "Plum pudding model",
          "Nuclear model",
          "Quantum model"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "In the Rutherford $\\\\alpha$-particle scattering experiment, most of the $\\\\alpha$-particles passed straight through the gold foil because:",
        "options": [
          "$\\\\alpha$-particles are heavy",
          "most part of the atom is empty space",
          "the nucleus is positively charged",
          "electrons revolve around the nucleus"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "According to Bohr's postulate, the angular momentum of an electron in a stationary orbit is quantized and equal to:",
        "options": [
          "$\\\\frac{h}{2\\\\pi}$",
          "$\\\\frac{nh}{2\\\\pi}$",
          "$nh\\\\pi$",
          "$\\\\frac{2\\\\pi}{nh}$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The total energy of an electron in the $n^{\\\\text{th}}$ orbit of a hydrogen atom is proportional to:",
        "options": [
          "$n$",
          "$\\\\frac{1}{n}$",
          "$n^2$",
          "$\\\\frac{1}{n^2}$"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Which of the following spectral series of hydrogen lies entirely in the ultraviolet region?",
        "options": [
          "Lyman series",
          "Balmer series",
          "Paschen series",
          "Brackett series"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "The spectral series of hydrogen that lies in the visible region of the electromagnetic spectrum is:",
        "options": [
          "Lyman series",
          "Balmer series",
          "Paschen series",
          "Pfund series"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The minimum wavelength of the spectral lines in the Lyman series of hydrogen atom corresponds to a transition from:",
        "options": [
          "$n = 2$ to $n = 1$",
          "$n = 3$ to $n = 1$",
          "$n = \\\\infty$ to $n = 1$",
          "$n = 1$ to $n = \\\\infty$"
        ],
        "answer": 2,
        "answerLetter": "C"
      }
    ],
    "Nuclei": [
      {
        "question": "A nucleus is represented by ${ }\\_Z^A\\\\text{X}$. The number of neutrons in this nucleus is given by:",
        "options": [
          "$Z$",
          "$A$",
          "$A + Z$",
          "$A - Z$"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "The radius $R$ of a nucleus is related to its mass number $A$ as:",
        "options": [
          "$R \\\\propto A$",
          "$R \\\\propto A^{1/3}$",
          "$R \\\\propto A^{2/3}$",
          "$R \\\\propto A^{-1/3}$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The density of nuclear matter is:",
        "options": [
          "dependent on the mass number of the nucleus",
          "directly proportional to $A$",
          "nearly constant for all nuclei",
          "inversely proportional to $A^{1/3}$"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The difference between the rest mass of a nucleus and the sum of the rest masses of its constituent nucleons is known as:",
        "options": [
          "Binding energy",
          "Mass defect",
          "Packing fraction",
          "Threshold energy"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following nuclei is the most stable?",
        "options": [
          "${ }\\_1^1\\\\text{H}$",
          "${ }\\_2^4\\\\text{He}$",
          "${ }\\_{26}^{56}\\\\text{Fe}$",
          "${ }\\_{92}^{238}\\\\text{U}$"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following statements about nuclear forces is incorrect?",
        "options": [
          "They are short-range forces.",
          "They are charge-independent.",
          "They are much stronger than electrostatic forces.",
          "They are central forces that obey the inverse-square law."
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "In an alpha ($\\\\alpha$) decay, the atomic number of the parent nucleus:",
        "options": [
          "decreases by 2",
          "decreases by 4",
          "increases by 2",
          "remains unchanged"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "The phenomenon in which a heavy nucleus splits into two or more intermediate-mass fragments is called:",
        "options": [
          "Nuclear fusion",
          "Nuclear fission",
          "Radioactive disintegration",
          "Pair annihilation"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The primary source of energy in the sun and other stars is:",
        "options": [
          "Nuclear fission",
          "Chemical reactions",
          "Nuclear fusion",
          "Radioactive decay"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "A radioactive substance has a half-life of $5$ years. The fraction of the radioactive substance that remains undecayed after $15$ years is:",
        "options": [
          "$1/2$",
          "$1/4$",
          "$1/8$",
          "$1/16$"
        ],
        "answer": 2,
        "answerLetter": "C"
      }
    ],
    "Semiconductor Electronics: Materials, Devices and Simple Circuits": [
      {
        "question": "At absolute zero temperature, a pure semiconductor acts as a:",
        "options": [
          "conductor",
          "insulator",
          "semiconductor",
          "super-conductor"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "In an intrinsic semiconductor, the number of free electrons ($n\\_e$) and the number of holes ($n\\_h$) are related as:",
        "options": [
          "$n\\_e > n\\_h$",
          "$n\\_e < n\\_h$",
          "$n\\_e = n\\_h$",
          "$n\\_e \\\\cdot n\\_h = 0$"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "To get an n-type extrinsic semiconductor, the impurity added to a pure germanium or silicon crystal is of:",
        "options": [
          "trivalent valence",
          "tetravalent valence",
          "pentavalent valence",
          "monovalent valence"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "In a forward-biased p-n junction diode, the depletion region:",
        "options": [
          "widens",
          "narrows",
          "remains unaffected",
          "disappears completely"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "During half-wave rectification, if the input frequency is $50\\\\text{ Hz}$, the output frequency of the rectified voltage is:",
        "options": [
          "$25\\\\text{ Hz}$",
          "$50\\\\text{ Hz}$",
          "$100\\\\text{ Hz}$",
          "$0\\\\text{ Hz}$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "A Zener diode is primarily used as a:",
        "options": [
          "rectifier",
          "voltage regulator",
          "amplifier",
          "oscillator"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "In a transistor, the region that is very thin and lightly doped is the:",
        "options": [
          "emitter",
          "base",
          "collector",
          "cathode"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "For a transistor, the relation between current gains $\\\\alpha$ and $\\\\beta$ is given by:",
        "options": [
          "$\\\\beta = \\\\frac{\\\\alpha}{1 - \\\\alpha}$",
          "$\\\\alpha = \\\\frac{\\\\beta}{1 - \\\\beta}$",
          "$\\\\beta = 1 - \\\\alpha$",
          "$\\\\alpha = 1 - \\\\beta$"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "?",
        "options": [
          "OR gate",
          "NOT gate",
          "NAND gate",
          "AND gate"
        ],
        "answer": 3,
        "answerLetter": "D"
      }
    ]
  },
  "Chemistry": {
    "Solutions": [
      {
        "question": "Which of the following concentration terms is independent of temperature?",
        "options": [
          "Molarity",
          "Molality",
          "Normality",
          "Volume percentage"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "According to Henry's law, the partial pressure of a gas in the vapour phase ($p$) is proportional to its mole fraction ($x$) in the solution ($p = K\\_H \\\\cdot x$). What happens to the value of Henry's law constant ($K\\_H$) with an increase in temperature?",
        "options": [
          "Increases",
          "Decreases",
          "Remains constant",
          "First increases then decreases"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Raoult's law states that for a solution of volatile liquids, the partial vapour pressure of each component in the solution is directly proportional to its:",
        "options": [
          "Mass percentage",
          "Mole fraction",
          "Molarity",
          "Molality"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following liquid pairs exhibits a positive deviation from Raoult's law?",
        "options": [
          "Acetone and Chloroform",
          "Ethanol and Acetone",
          "Phenol and Aniline",
          "Chloroform and Benzene"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is a colligative property?",
        "options": [
          "Vapour pressure",
          "Boiling point",
          "Osmotic pressure",
          "Freezing point"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The relative lowering of vapour pressure of a dilute solution is equal to the:",
        "options": [
          "Mole fraction of the solvent",
          "Mole fraction of the solute",
          "Molarity of the solution",
          "Molality of the solution"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The elevation in boiling point ($\\\\Delta T\\_b$) for a dilute solution is directly proportional to which concentration term?",
        "options": [
          "Molarity",
          "Molality",
          "Mole fraction",
          "Mass percentage"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The relationship between osmotic pressure ($\\\\pi$), concentration ($C$), gas constant ($R$), and temperature ($T$) is given by:",
        "options": [
          "$\\\\pi = CRT$",
          "$\\\\pi = \\\\frac{C}{RT}$",
          "$\\\\pi = RTV$",
          "$\\\\pi = \\\\frac{RT}{C}$"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "What is the expected value of the Van't Hoff factor ($i$) for a completely dissociated dilute solution of potassium chloride ($KCl$) in water?",
        "options": [
          "1",
          "2",
          "0.5",
          "3"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "When a solute undergoes association in a solution, the molar mass determined using a colligative property is found to be:",
        "options": [
          "Lower than the normal molar mass",
          "Higher than the normal molar mass",
          "Equal to the normal molar mass",
          "Zero"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Electrochemistry": [
      {
        "question": "Which of the following devices converts chemical energy of a spontaneous redox reaction into electrical energy?",
        "options": [
          "Electrolytic cell",
          "Galvanic cell",
          "Concentration cell",
          "Fuel cell"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Nernst equation for the electrode potential ($E$) of a general reduction reaction $M^{n+} + ne^- \\\\rightarrow M(s)$ at $298\\\\text{ K}$ is given by:",
        "options": [
          "$E = E^\\\\circ - \\\\frac{0.059}{n} \\\\log\\[M^{n+}]$",
          "$E = E^\\\\circ + \\\\frac{0.059}{n} \\\\log\\[M^{n+}]$",
          "$E = E^\\\\circ - \\\\frac{0.059}{n} \\\\ln\\[M^{n+}]$",
          "$E = \\\\frac{0.059}{n} \\\\log\\[M^{n+}] - E^\\\\circ$"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "The unit of electrical resistance is:",
        "options": [
          "Siemens",
          "Ohm",
          "Ohm centimeter",
          "Siemens centimeter squared per mole"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Conductivity ($\\\\kappa$) of a solution is defined as the inverse of its:",
        "options": [
          "Resistance",
          "Resistivity",
          "Cell constant",
          "Molar conductivity"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "With an increase in dilution, the molar conductivity of a weak electrolyte:",
        "options": [
          "Increases sharply",
          "Decreases sharply",
          "Remains constant",
          "First increases then decreases"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Kohlrausch's law of independent migration of ions states that limiting molar conductivity of an electrolyte can be represented as:",
        "options": [
          "The product of limiting molar conductivities of its individual cations and anions",
          "The sum of limiting molar conductivities of its individual cations and anions",
          "The difference between limiting molar conductivities of cations and anions",
          "The ratio of limiting molar conductivities of cations and anions"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Faraday's first law of electrolysis states that the mass ($m$) of a substance deposited at an electrode is proportional to:",
        "options": [
          "Time only",
          "Current only",
          "The total charge passed through the electrolyte",
          "Resistance of the solution"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following represents a primary battery that cannot be recharged?",
        "options": [
          "Lead storage battery",
          "Nickel-cadmium cell",
          "Mercury cell",
          "Lithium-ion cell"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "In the hydrogen-oxygen fuel cell, hydrogen and oxygen react to produce:",
        "options": [
          "Electricity and water vapour",
          "Only heat energy",
          "Hydrogen peroxide",
          "Acidic fumes"
        ],
        "answer": 0,
        "answerLetter": "A"
      }
    ],
    "Chemical Kinetics": [
      {
        "question": "Which of the following factors affects the rate of a chemical reaction?",
        "options": [
          "Temperature",
          "Catalyst",
          "Concentration of reactants",
          "All of the above"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "The unit of the rate constant for a zero-order reaction is:",
        "options": [
          "$\\\\text{s}^{-1}$",
          "$\\\\text{mol L}^{-1} \\\\text{s}^{-1}$",
          "$\\\\text{L mol}^{-1} \\\\text{s}^{-1}$",
          "$\\\\text{L}^2 \\\\text{mol}^{-2} \\\\text{s}^{-1}$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The rate law for a reaction is given by Rate = $k\\[A]^x\\[B]^y$. What is the overall order of the reaction?",
        "options": [
          "$x$",
          "$y$",
          "$x + y$",
          "$x - y$"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "For a first-order reaction, the half-life period ($t\\_{1/2}$) is:",
        "options": [
          "Directly proportional to initial concentration",
          "Inversely proportional to initial concentration",
          "Independent of initial concentration",
          "Proportional to the square of initial concentration"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following reactions is an example of a pseudo-first-order reaction?",
        "options": [
          "Decomposition of $\\\\text{N}\\_2\\\\text{O}\\_5$",
          "Hydrolysis of ethyl acetate",
          "Inversion of cane sugar",
          "Both (B) and (C)"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "According to the Arrhenius equation, the rate constant ($k$) is related to activation energy ($E\\_a$) and temperature ($T$) as $k = A e^{-E\\_a / RT}$. What does the term '$A$' represent?",
        "options": [
          "Activation energy",
          "Boltzmann constant",
          "Frequency factor or Arrhenius pre-exponential factor",
          "Rate of reaction"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What is the molecularity of an elementary reaction that involves three reactant molecules colliding simultaneously?",
        "options": [
          "Unimolecular",
          "Bimolecular",
          "Termolecular",
          "Zero-molecular"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The temperature coefficient for most of the reactions lies between:",
        "options": [
          "1 and 2",
          "2 and 3",
          "3 and 4",
          "4 and 5"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "A catalyst increases the rate of a chemical reaction by:",
        "options": [
          "Decreasing the activation energy",
          "Increasing the activation energy",
          "Changing the Gibbs free energy of the reaction",
          "Changing the equilibrium constant"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "For a complex reaction, the overall rate of the reaction is governed by:",
        "options": [
          "The fastest step",
          "The slowest step",
          "The intermediate step",
          "The average of all steps"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "The d- and f-Block Elements": [
      {
        "question": "Which of the following elements is not a transition element according to the general definition?",
        "options": [
          "Sc",
          "Zn",
          "Cu",
          "Fe"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following transition metal ions has the highest number of unpaired electrons in the 3d series?",
        "options": [
          "$Ti^{3+}$",
          "$V^{3+}$",
          "$Mn^{2+}$",
          "$Fe^{2+}$"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following ions is coloured in aqueous solution?",
        "options": [
          "$Sc^{3+}$",
          "$Ti^{4+}$",
          "$Zn^{2+}$",
          "$Ti^{3+}$"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Which of the following compounds acts as a strong oxidising agent in acidic medium?",
        "options": [
          "$KMnO\\_4$",
          "$K\\_2SO\\_4$",
          "$FeSO\\_4$",
          "$ZnSO\\_4$"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "The most common oxidation state exhibited by lanthanoids is:",
        "options": [
          "$+2$",
          "$+3$",
          "$+4$",
          "$+6$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The steady decrease in the atomic and ionic radii of lanthanoids with an increase in atomic number is known as:",
        "options": [
          "Actinoid contraction",
          "Lanthanoid contraction",
          "Zeigler-Natta effect",
          "Inner transition effect"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Mischmetal is an alloy consisting chiefly of:",
        "options": [
          "Lanthanoid metal and iron",
          "Transition metals only",
          "Actinoid metal and carbon",
          "Iron and copper"
        ],
        "answer": 0,
        "answerLetter": "A"
      }
    ],
    "Coordination Compounds": [
      {
        "question": "According to Werner's coordination theory, primary valencies are:",
        "options": [
          "Non-ionisable and directional",
          "Ionisable and non-directional",
          "Ionisable and directional",
          "Non-ionisable and non-directional"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What is the coordination number of the central metal ion in the complex $\\[Co(en)\\_3]Cl\\_3$?",
        "options": [
          "3",
          "4",
          "5",
          "6"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Which of the following ligands can exhibit linkage isomerism?",
        "options": [
          "$H\\_2O$",
          "$NH\\_3$",
          "$NO\\_2^-$",
          "$Cl^-$"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "\\_5Br]SO\\_4$?",
        "options": [
          "Linkage isomerism",
          "Coordination isomerism",
          "Ionisation isomerism",
          "Hydrate isomerism"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "According to Valence Bond Theory (VBT), what is the hybridization of the central metal ion in the square planar complex $\\[Ni(CN)\\_4]^{2-}$?",
        "options": [
          "$sp^3$",
          "$dsp^2$",
          "$sp^3d$",
          "$d^2sp^3$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following complexes is diamagnetic?",
        "options": [
          "$\\[Fe(CN)\\_6]^{3-}$",
          "$\\[CoF\\_6]^{3-}$",
          "$\\[NiCl\\_4]^{2-}$",
          "$\\[Fe(CN)\\_6]^{4-}$"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "According to Crystal Field Theory (CFT), in an octahedral crystal field, the $d$ orbitals split into:",
        "options": [
          "$t\\_{2g}$ and $e\\_g$ sets",
          "$e$ and $t\\_2$ sets",
          "$d\\_{xy}, d\\_{yz}, d\\_{zx}$ and $d\\_{x^2-y^2}, d\\_{z^2}$ without specific group names",
          "Three degenerate sets"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "What is the IUPAC name of the coordination compound $K\\_2\\[PtCl\\_6]$?",
        "options": [
          "Potassium hexachloroplatinate(IV)",
          "Potassium hexachloroplatinum(IV)",
          "Potassium hexachloro-plutonium(II)",
          "Potassium hexachloroplatinate(II)"
        ],
        "answer": 0,
        "answerLetter": "A"
      }
    ],
    "Haloalkanes and Haloarenes": [
      {
        "question": "Which of the following compounds has the highest boiling point?",
        "options": [
          "Chloromethane",
          "Bromomethane",
          "Iodomethane",
          "Chloromethane"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Alkyl halides are generally not soluble in water because:",
        "options": [
          "They are non-polar molecules",
          "They cannot form hydrogen bonds with water",
          "They react with water to form alcohols",
          "They have high molecular mass"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The reaction of secondary butyl chloride with alcoholic potassium hydroxide yields mainly:",
        "options": [
          "1-butene",
          "2-butene",
          "Butan-1-ol",
          "Butan-2-ol"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following reagents is used in the Finkelstein reaction for the preparation of alkyl iodides?",
        "options": [
          "NaI in dry acetone",
          "$AgF$",
          "$KBr$ in water",
          "$Cl\\_2$ in presence of $UV$ light"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Aryl halides are extremely less reactive towards nucleophilic substitution compared to alkyl halides due to:",
        "options": [
          "Resonance effect giving partial double bond character to the C-Cl bond",
          "$sp^3$ hybridised carbon attached to halogen",
          "Instability of the phenyl cation",
          "Greater stability of the reactant than the product"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "When chlorobenzene is treated with chlorine in the presence of anhydrous ferric chloride ($FeCl\\_3$), the major product formed is:",
        "options": [
          "1,2-dichlorobenzene",
          "1,3-dichlorobenzene",
          "1,4-dichlorobenzene",
          "Chlorobenzene does not react"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Wurtz-Fittig reaction is used for the preparation of:",
        "options": [
          "Alkylarenes",
          "Alkanes",
          "Diaryls",
          "Haloalkanes"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Elimination of a molecule of hydrogen halide from an alkyl halide in the presence of alcoholic KOH is an example of:",
        "options": [
          "Nucleophilic substitution reaction",
          "Electrophilic addition reaction",
          "$\\\\beta$-elimination reaction",
          "Free radical substitution reaction"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following compounds gives a racemic mixture on hydrolysis by an $S\\_N1$ mechanism?",
        "options": [
          "1-chlorobutane",
          "2-chlorobutane",
          "1-chloro-2-methylpropane",
          "Chloromethane"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Alcohols, Phenols and Ethers": [
      {
        "question": "Which of the following is classified as a secondary alcohol?",
        "options": [
          "Butan-1-ol",
          "Butan-2-ol",
          "2-Methylpropan-2-ol",
          "Methanol"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The IUPAC name of the compound $CH\\_3-CH(OH)-CH\\_3$ is:",
        "options": [
          "Propan-1-ol",
          "Propan-2-ol",
          "Propanone",
          "Isopropyl alcohol"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following reagents is used to distinguish between primary, secondary, and tertiary alcohols by Lucas test?",
        "options": [
          "Anhydrous $ZnCl\\_2$ and concentrated $HCl$",
          "Aqueous $NaOH$",
          "Acidified $KMnO\\_4$",
          "$CrO\\_3$ in anhydrous medium"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Phenol is more acidic than ethanol because:",
        "options": [
          "Phenoxide ion is more stable due to resonance",
          "Ethanol has a higher boiling point",
          "Phenol is less soluble in water",
          "Ethyl group shows a positive inductive effect"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Reimer-Tiemann reaction on phenol with chloroform and aqueous sodium hydroxide introduces which group at the ortho position?",
        "options": [
          "$-CHO$ (Aldehyde group)",
          "$-COOH$ (Carboxylic acid group)",
          "$-CH\\_3$ (Methyl group)",
          "$-CH\\_2OH$ (Alcohol group)"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "When phenol is treated with bromine water, the product formed is:",
        "options": [
          "o-Bromophenol",
          "p-Bromophenol",
          "2,4,6-Tribromophenol",
          "m-Bromophenol"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Williamson synthesis of ethers involves the reaction of:",
        "options": [
          "Alkyl halide and sodium alkoxide",
          "Alcohol and concentrated sulfuric acid",
          "Alkene and water",
          "Phenol and sodium hydroxide"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "The cleavage of an ether with cold hydroiodic acid ($HI$) yields:",
        "options": [
          "An alkyl iodide and an alcohol",
          "Two different alkyl iodides",
          "An alkene and water",
          "An aldehyde and an alkane"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following compounds gives a purple/violet colour with neutral ferric chloride ($FeCl\\_3$) solution?",
        "options": [
          "Ethanol",
          "Diethyl ether",
          "Phenol",
          "Methoxyethane"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Dehydration of ethanol with concentrated $H\\_2SO\\_4$ at $443\\\\text{ K}$ gives:",
        "options": [
          "Ethene",
          "Diethyl ether",
          "Ethanal",
          "Ethyl hydrogen sulphate"
        ],
        "answer": 0,
        "answerLetter": "A"
      }
    ],
    "Aldehydes, Ketones and Carboxylic Acids": [
      {
        "question": "Which of the following compounds will undergo aldol condensation?",
        "options": [
          "Formaldehyde",
          "Benzaldehyde",
          "Acetaldehyde",
          "2,2-Dimethylpropanal"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which reagent is used in Etard reaction to convert toluene to benzaldehyde?",
        "options": [
          "$CrO\\_3$ in ($CH\\_3CO)\\_2O$",
          "$CrO\\_2Cl\\_2$ in $CS\\_2$",
          "Alkaline $KMnO\\_4$",
          "$Anhydrous\\\\ AlCl\\_3 / HCl$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Addition of hydrogen cyanide to carbonyl compounds to form cyanohydrins is an example of which type of reaction?",
        "options": [
          "Nucleophilic substitution",
          "Electrophilic addition",
          "Nucleophilic addition",
          "Free radical substitution"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following compounds gives a positive Tollens' test?",
        "options": [
          "Acetone",
          "Benzaldehyde",
          "Benzophenone",
          "Ethyl acetate"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Rosenmund reduction is used for the preparation of:",
        "options": [
          "Alkanes from alkyl halides",
          "Aldehydes from acyl chlorides",
          "Ketones from nitriles",
          "Alcohols from aldehydes"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following aldehydes does not undergo Cannizzaro reaction?",
        "options": [
          "Formaldehyde",
          "Acetaldehyde",
          "Benzaldehyde",
          "2,2-Dimethylpropanal"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Carboxylic acids are higher boiling liquids than alcohols of comparable molecular masses due to:",
        "options": [
          "Stronger van der Waals forces",
          "Hydrophobic interactions",
          "More extensive intermolecular hydrogen bonding",
          "Formation of stable covalent dimers"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following acids is the strongest among the given options?",
        "options": [
          "Acetic acid ($CH\\_3COOH$)",
          "Chloroacetic acid ($ClCH\\_2COOH$)",
          "Dichloroacetic acid ($Cl\\_2CHCOOH$)",
          "Trichloroacetic acid ($Cl\\_3CCOOH$)"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "The reaction of carboxylic acids with alcohols in the presence of concentrated $H\\_2SO\\_4$ to form esters is known as:",
        "options": [
          "Esterification",
          "Saponification",
          "Decarboxylation",
          "Ammonolysis"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following reagents can selectively reduce a carboxylic acid group to a primary alcohol group without affecting other reducible groups?",
        "options": [
          "$NaBH\\_4$",
          "$LiAlH\\_4$",
          "$H\\_2 / Ni$",
          "Red $P / HI$"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Amines": [
      {
        "question": "The reduction of nitrobenzene with $\\\\text{Sn}$ and $\\\\text{HCl}$ primarily gives:",
        "options": [
          "Azobenzene",
          "Aniline",
          "Hydrazobenzene",
          "Phenol"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which reagent is used in the Carbylamine test to identify primary amines?",
        "options": [
          "$\\\\text{CHCl}\\_3$ and alcoholic $\\\\text{KOH}$",
          "$\\\\text{NaNO}\\_2$ and $\\\\text{HCl}$",
          "$\\\\text{CH}\\_3\\\\text{COCl}$",
          "$\\\\text{C}\\_6\\\\text{H}\\_5\\\\text{SO}\\_2\\\\text{Cl}$"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Hinsberg's reagent is chemically known as:",
        "options": [
          "Benzenesulphonyl chloride",
          "Benzoyl chloride",
          "Benzene sulphonic acid",
          "Acetyl chloride"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Gabriel Phthalimide synthesis is specifically used for the preparation of which type of amines?",
        "options": [
          "Primary aliphatic amines",
          "Secondary aliphatic amines",
          "Tertiary aliphatic amines",
          "Primary aromatic amines"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Reaction of aniline with nitrous acid ($\\\\text{NaNO}\\_2 + \\\\text{HCl}$) at $0-5^\\\\circ\\\\text{C}$ gives:",
        "options": [
          "Phenol",
          "Chlorobenzene",
          "Benzene diazonium chloride",
          "Nitrobenzene"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following amines does not react with Hinsberg's reagent?",
        "options": [
          "Primary amine",
          "Secondary amine",
          "Tertiary amine",
          "Both primary and secondary amines"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Electrophilic substitution in aniline (such as bromination) gives a tribromo derivative readily because the $-\\\\text{NH}\\_2$ group is:",
        "options": [
          "Strongly activating and ortho/para-directing",
          "Strongly deactivating and meta-directing",
          "Moderately activating and ortho/para-directing",
          "Strongly deactivating and ortho/para-directing"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "To prepare a mono-substituted derivative of aniline (like p-bromoaniline) via bromination, what is done first to control the activating effect of the $-\\\\text{NH}\\_2$ group?",
        "options": [
          "Nitration",
          "Acetylation",
          "Oxidation",
          "Alkylation"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Biomolecules": [
      {
        "question": "Which of the following carbohydrates is a reducing sugar?",
        "options": [
          "Sucrose",
          "Cellulose",
          "Glucose",
          "Starch"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following is an example of a monosaccharide that is a ketohexose?",
        "options": [
          "Glucose",
          "Fructose",
          "Ribose",
          "Galactose"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The glycosidic linkage present in sucrose between $\\\\alpha$-D-glucose and $\\\\beta$-D-fructose is:",
        "options": [
          "$C\\_1-C\\_4$",
          "$C\\_1-C\\_2$",
          "$C\\_1-C\\_6$",
          "$C\\_2-C\\_4$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which component of starch is water-soluble and is a branched polymer of $\\\\alpha$-D-glucose units?",
        "options": [
          "Amylose",
          "Amylopectin",
          "Cellulose",
          "Glycogen"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Proteins are polymers of which of the following monomers?",
        "options": [
          "$\\\\alpha$-hydroxy acids",
          "$\\\\alpha$-amino acids",
          "$\\\\beta$-amino acids",
          "Nucleotides"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following amino acids is optically inactive?",
        "options": [
          "Alanine",
          "Glycine",
          "Valine",
          "Serine"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The specific sequence of amino acids in a polypeptide chain describes which structure of a protein?",
        "options": [
          "Primary structure",
          "Secondary structure",
          "Tertiary structure",
          "Quaternary structure"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following bases is present in RNA but not in DNA?",
        "options": [
          "Adenine",
          "Guanine",
          "Cytosine",
          "Uracil"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Vitamin deficiency of which of the following causes the disease known as scurvy?",
        "options": [
          "Vitamin A",
          "Vitamin B1",
          "Vitamin C",
          "Vitamin D"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following vitamins is water-soluble?",
        "options": [
          "Vitamin A",
          "Vitamin B",
          "Vitamin D",
          "Vitamin K"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ]
  },
  "Maths": {
    "Relations and Functions": [
      {
        "question": "Let $R$ be a relation on the set $N$ of natural numbers defined by $R = \\\\{(x, y) : y = x + 5$ and $x < 4\\\\}$. The domain of relation $R$ is:",
        "options": [
          "$\\\\{1, 2, 3, 4, 5\\\\}$",
          "$\\\\{1, 2, 3\\\\}$",
          "$\\\\{6, 7, 8\\\\}$",
          "$\\\\{1, 2, 3, 4, 5, 6, 7, 8\\\\}$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "$ is:",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "\\\\}$. Choose the correct statement:",
        "options": [
          "$R$ is reflexive and symmetric but not transitive",
          "$R$ is reflexive and transitive but not symmetric",
          "$R$ is an equivalence relation",
          "$R$ is symmetric and transitive but not reflexive"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The maximum number of equivalence relations on the set $A = \\\\{1, 2, 3\\\\}$ is:",
        "options": [
          "1",
          "2",
          "3",
          "5"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Let $f: R \\\\to R$ be defined by $f(x) = 3x$. Choose the correct option:",
        "options": [
          "$f$ is one-one and onto",
          "$f$ is one-one but not onto",
          "$f$ is onto but not one-one",
          "$f$ is neither one-one nor onto"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Let $f: R \\\\to R$ be defined by $f(x) = x^2$. Choose the correct option:",
        "options": [
          "$f$ is one-one and onto",
          "$f$ is one-one but not onto",
          "$f$ is onto but not one-one",
          "$f$ is neither one-one nor onto"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Let $f: Z \\\\to Z$ be defined by $f(x) = x^2$. The function $f$ is:",
        "options": [
          "One-one and onto",
          "One-one but not onto",
          "Onto but not one-one",
          "Neither one-one nor onto"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Let $f: N \\\\to N$ be defined by $f(n) = \\\\begin{cases} \\\\frac{n+1}{2}, \\& \\\\text{if } n \\\\text{ is odd} \\\\\\\\ \\\\frac{n}{2}, \\& \\\\text{if } n \\\\text{ is even} \\\\end{cases}$ for all $n \\\\in N$. The function $f$ is:",
        "options": [
          "One-one and onto",
          "Many-one and onto",
          "One-one but not onto",
          "Neither one-one nor onto"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Let $f: R \\\\to R$ be defined as $f(x) = 3 - 4x$. The function $f$ is:",
        "options": [
          "One-one and onto",
          "One-one but not onto",
          "Onto but not one-one",
          "Neither one-one nor onto"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "$ which are reflexive and symmetric but not transitive is:",
        "options": [
          "0",
          "1",
          "2",
          "4"
        ],
        "answer": 0,
        "answerLetter": "A"
      }
    ],
    "Inverse Trigonometric Functions": [
      {
        "question": "What is the principal value branch of $\\\\sin^{-1}(x)$?",
        "options": [
          "$\\[0, \\\\pi]$",
          "$\\\\left\\[-\\\\frac{\\\\pi}{2}, \\\\frac{\\\\pi}{2}\\\\right]$",
          "$\\\\left(-\\\\frac{\\\\pi}{2}, \\\\frac{\\\\pi}{2}\\\\right)$",
          "$(0, \\\\pi)$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What is the value of $\\\\tan^{-1}(\\\\sqrt{3}) - \\\\cot^{-1}(-\\\\sqrt{3})$?",
        "options": [
          "$\\\\pi$",
          "$-\\\\frac{\\\\pi}{2}$",
          "$0$",
          "$2\\\\sqrt{3}$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The value of $\\\\cos\\\\left(\\\\sec^{-1}(x) + \\\\csc^{-1}(x)\\\\right)$ for $\\\\vert{}x\\\\vert{} \\\\ge 1$ is:",
        "options": [
          "$1$",
          "$-1$",
          "$0$",
          "$\\\\frac{\\\\pi}{2}$"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What is the principal value of $\\\\sin^{-1}\\\\left(-\\\\frac{1}{2}\\\\right)$?",
        "options": [
          "$\\\\frac{5\\\\pi}{6}$",
          "$-\\\\frac{\\\\pi}{3}$",
          "$-\\\\frac{\\\\pi}{6}$",
          "$\\\\frac{2\\\\pi}{3}$"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What is the range of the principal value branch of $\\\\sec^{-1}(x)$?",
        "options": [
          "$\\\\left\\[0, \\\\frac{\\\\pi}{2}\\\\right) \\\\cup \\\\left(\\\\frac{\\\\pi}{2}, \\\\pi\\\\right]$",
          "$\\\\left\\[-\\\\frac{\\\\pi}{2}, \\\\frac{\\\\pi}{2}\\\\right] - \\\\{0\\\\}$",
          "$(0, \\\\pi)$",
          "$\\\\left\\[-\\\\frac{\\\\pi}{2}, \\\\frac{\\\\pi}{2}\\\\right]$"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "+ \\\\cos^{-1}\\\\left(-\\\\frac{1}{2}\\\\right) + \\\\sin^{-1}\\\\left(-\\\\frac{1}{2}\\\\right)$ is:",
        "options": [
          "$\\\\frac{3\\\\pi}{4}$",
          "$\\\\frac{\\\\pi}{4}$",
          "$\\\\frac{3\\\\pi}{2}$",
          "$\\\\frac{\\\\pi}{2}$"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "If $\\\\sin\\\\left(\\\\sin^{-1}\\\\frac{1}{5} + \\\\cos^{-1}x\\\\right) = 1$, then the value of $x$ is:",
        "options": [
          "$1$",
          "$\\\\frac{1}{5}$",
          "$0$",
          "$\\\\frac{4}{5}$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What is the value of $\\\\tan^{-1}(x) + \\\\cot^{-1}(x)$ for any $x \\\\in \\\\mathbb{R}$?",
        "options": [
          "$\\\\pi$",
          "$0$",
          "$\\\\frac{\\\\pi}{2}$",
          "$1$"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The value of $\\\\sin\\\\left(\\\\frac{\\\\pi}{3} - \\\\sin^{-1}\\\\left(-\\\\frac{1}{2}\\\\right)\\\\right)$ is:",
        "options": [
          "$\\\\frac{1}{2}$",
          "$1$",
          "$\\\\frac{1}{3}$",
          "$\\\\frac{1}{4}$"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Matrices": [
      {
        "question": "If a matrix has 8 elements, what are the possible orders it can have?",
        "options": [
          "$1 \\\\times 8, 8 \\\\times 1, 2 \\\\times 4, 4 \\\\times 2$",
          "$1 \\\\times 8, 8 \\\\times 1, 3 \\\\times 3$",
          "$1 \\\\times 4, 4 \\\\times 1, 2 \\\\times 2$",
          "$1 \\\\times 8, 8 \\\\times 1, 2 \\\\times 3, 3 \\\\times 2$"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "If $A$ is a square matrix of order $3 \\\\times 3$ such that $\\\\vert{}A\\\\vert{} = 5$, then the value of $\\\\vert{}2A\\\\vert{}$ is:",
        "options": [
          "10",
          "15",
          "40",
          "25"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following matrices is a skew-symmetric matrix?",
        "options": [
          "$\\\\begin{pmatrix} 0 \\& 2 \\\\\\\\ -2 \\& 0 \\\\end{pmatrix}$",
          "$\\\\begin{pmatrix} 1 \\& 2 \\\\\\\\ 2 \\& 1 \\\\end{pmatrix}$",
          "$\\\\begin{pmatrix} 0 \\& 2 \\\\\\\\ 2 \\& 0 \\\\end{pmatrix}$",
          "$\\\\begin{pmatrix} 1 \\& 0 \\\\\\\\ 0 \\& 1 \\\\end{pmatrix}$"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "If $A$ and $B$ are symmetric matrices of the same order, then $AB - BA$ is a:",
        "options": [
          "Symmetric matrix",
          "Skew-symmetric matrix",
          "Zero matrix",
          "Identity matrix"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "For any square matrix $A$ with real number entries, $A + A'$ is always a:",
        "options": [
          "Skew-symmetric matrix",
          "Symmetric matrix",
          "Diagonal matrix",
          "Identity matrix"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "If $A = \\\\begin{pmatrix} \\\\cos\\\\alpha \\& -\\\\sin\\\\alpha \\\\\\\\ \\\\sin\\\\alpha \\& \\\\cos\\\\alpha \\\\end{pmatrix}$ and $A + A' = I$, then the value of $\\\\alpha$ is:",
        "options": [
          "$\\\\frac{\\\\pi}{6}$",
          "$\\\\frac{\\\\pi}{3}$",
          "$\\\\pi$",
          "$\\\\frac{\\\\pi}{3}$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Matrices $A$ and $B$ will be inverse of each other only if:",
        "options": [
          "$AB = BA$",
          "$AB = BA = 0$",
          "$AB = BA = I$",
          "$AB = I$ and $BA = 0$"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "If $A$ is an invertible matrix of order $3$, then $\\\\vert{}A^{-1}\\\\vert{}$ is equal to:",
        "options": [
          "$\\\\vert{}A\\\\vert{}$",
          "$\\\\frac{1}{\\\\vert{}A\\\\vert{}}$",
          "$\\\\vert{}A\\\\vert{}^2$",
          "$3\\\\vert{}A\\\\vert{}$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "If the order of matrix $A$ is $m \\\\times n$ and the order of $B$ is $n \\\\times p$, then the order of the matrix $AB$ is:",
        "options": [
          "$m \\\\times p$",
          "$p \\\\times m$",
          "$n \\\\times n$",
          "$m \\\\times n$"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "If $A = \\\\begin{pmatrix} 1 \\& 2 \\\\\\\\ 3 \\& 4 \\\\end{pmatrix}$, then the determinant of matrix $A$ (i.e., $\\\\vert{}A\\\\vert{}$ or $\\\\det A$) is:",
        "options": [
          "$-2$",
          "2",
          "10",
          "$-10$"
        ],
        "answer": 0,
        "answerLetter": "A"
      }
    ],
    "Determinants": [
      {
        "question": "If $A$ is a square matrix of order $3 \\\\times 3$, then $\\\\vert{}kA\\\\vert{}$ is equal to:",
        "options": [
          "$k\\\\vert{}A\\\\vert{}$",
          "$k^2\\\\vert{}A\\\\vert{}$",
          "$k^3\\\\vert{}A\\\\vert{}$",
          "$3k\\\\vert{}A\\\\vert{}$"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following is correct?",
        "options": [
          "Determinant is a square matrix.",
          "Determinant is a number associated to a matrix.",
          "Determinant is a number associated to a square matrix.",
          "None of these"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "If $A$ and $B$ are invertible matrices of the same order, then $(AB)^{-1}$ is equal to:",
        "options": [
          "$A^{-1}B^{-1}$",
          "$B^{-1}A^{-1}$",
          "$AB^{-1}$",
          "$A^{-1}B$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "$ is given by the absolute value of the determinant:",
        "options": [
          "$\\\\frac{1}{2} \\\\begin{vmatrix} x\\_1 \\& y\\_1 \\& 1 \\\\\\\\ x\\_2 \\& y\\_2 \\& 1 \\\\\\\\ x\\_3 \\& y\\_3 \\& 1 \\\\end{vmatrix}$",
          "$\\\\begin{vmatrix} x\\_1 \\& y\\_1 \\& 1 \\\\\\\\ x\\_2 \\& y\\_2 \\& 1 \\\\\\\\ x\\_3 \\& y\\_3 \\& 1 \\\\end{vmatrix}$",
          "$\\\\frac{1}{2} \\\\begin{vmatrix} x\\_1 \\& y\\_1 \\\\\\\\ x\\_2 \\& y\\_2 \\\\\\\\ x\\_3 \\& y\\_3 \\\\end{vmatrix}$",
          "$2 \\\\begin{vmatrix} x\\_1 \\& y\\_1 \\& 1 \\\\\\\\ x\\_2 \\& y\\_2 \\& 1 \\\\\\\\ x\\_3 \\& y\\_3 \\& 1 \\\\end{vmatrix}$"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "If $A$ is a square matrix of order $n$, then $A(\\\\text{adj } A)$ is equal to:",
        "options": [
          "$\\\\vert{}A\\\\vert{}I$",
          "$\\\\vert{}A\\\\vert{}^n I$",
          "$I$",
          "$O$"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "A square matrix $A$ is said to be singular if:",
        "options": [
          "$\\\\vert{}A\\\\vert{} = 0$",
          "$\\\\vert{}A\\\\vert{} \\\\neq 0$",
          "$\\\\vert{}A\\\\vert{} = 1$",
          "$\\\\vert{}A\\\\vert{} = -1$"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "If $\\\\begin{vmatrix} x \\& 2 \\\\\\\\ 18 \\& x \\\\end{vmatrix} = \\\\begin{vmatrix} 6 \\& 2 \\\\\\\\ 18 \\& 6 \\\\end{vmatrix}$, then the value of $x$ is:",
        "options": [
          "$6$",
          "$\\\\pm 6$",
          "$-6$",
          "$36$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "If $A$ is a non-singular square matrix of order $3$, then $\\\\vert{}\\\\text{adj } A\\\\vert{}$ is equal to:",
        "options": [
          "$\\\\vert{}A\\\\vert{}$",
          "$\\\\vert{}A\\\\vert{}^2$",
          "$\\\\vert{}A\\\\vert{}^3$",
          "$3\\\\vert{}A\\\\vert{}$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What is the minor of element $a\\_{21}$ in the determinant $\\\\begin{vmatrix} 1 \\& 2 \\& 3 \\\\\\\\ 4 \\& 5 \\& 6 \\\\\\\\ 7 \\& 8 \\& 9 \\\\end{vmatrix}$?",
        "options": [
          "$-6$",
          "$6$",
          "$-3$",
          "$3$"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "$ are collinear, then the value of $k$ is:",
        "options": [
          "$2$",
          "$3$",
          "$5$",
          "$4$"
        ],
        "answer": 2,
        "answerLetter": "C"
      }
    ],
    "Continuity and Differentiability": [
      {
        "question": "-\n\nQuestions1) For what value of $k$ is the function $f(x) = \\\\begin{cases} kx + 1, \\& \\\\text{if } x \\\\le \\\\pi \\\\\\\\ \\\\cos x, \\& \\\\text{if } x > \\\\pi \\\\end{cases}$ continuous at $x = \\\\pi$?",
        "options": [
          "$0$",
          "$\\\\frac{0}{\\\\pi}$",
          "$-\\\\frac{2}{\\\\pi}$",
          "$1$"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The area of the region bounded by the curve $y = x^2$, the $x$-axis, and the lines $x = 1$ and $x = 2$ is:",
        "options": [
          "$\\\\frac{7}{3}$ sq. units",
          "$\\\\frac{8}{3}$ sq. units",
          "$\\\\frac{5}{3}$ sq. units",
          "$\\\\frac{4}{3}$ sq. units"
        ],
        "answer": 0,
        "answerLetter": "A"
      }
    ],
    "Applications of Derivatives": [],
    "Integrals": [
      {
        "question": "-\n\nQuestions1) What is the antiderivative of $\\\\sec^2(x)$ with respect to $x$?",
        "options": [
          "$\\\\tan(x) + C$",
          "$-\\\\tan(x) + C$",
          "$\\\\sec(x)\\\\tan(x) + C$",
          "$\\\\ln\\\\vert{}\\\\sec(x)\\\\vert{} + C$"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "The area of the region bounded by the curve $y = x^2$, the $x$-axis, and the lines $x = 1$ and $x = 2$ is:",
        "options": [
          "$\\\\frac{7}{3}$ sq. units",
          "$\\\\frac{8}{3}$ sq. units",
          "$\\\\frac{5}{3}$ sq. units",
          "$\\\\frac{4}{3}$ sq. units"
        ],
        "answer": 0,
        "answerLetter": "A"
      }
    ],
    "Applications of Integrals": [],
    "Differential Equations": [
      {
        "question": "What is the order of the differential equation $\\\\frac{d^2y}{dx^2} + 5\\\\left(\\\\frac{dy}{dx}\\\\right)^3 + y = 0$?",
        "options": [
          "1",
          "2",
          "3",
          "Not defined"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What is the degree of the differential equation $\\\\left(\\\\frac{dy}{dx}\\\\right)^2 + \\\\frac{dy}{dx} - \\\\sin x = 0$?",
        "options": [
          "1",
          "2",
          "3",
          "Not defined"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The degree of the differential equation $\\\\frac{d^2y}{dx^2} + \\\\cos\\\\left(\\\\frac{dy}{dx}\\\\right) = 0$ is:",
        "options": [
          "1",
          "2",
          "0",
          "Not defined"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "The number of arbitrary constants in the general solution of a differential equation of order two is:",
        "options": [
          "0",
          "1",
          "2",
          "3"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The general solution of the differential equation $\\\\frac{dy}{dx} = \\\\frac{1+y^2}{1+x^2}$ is:",
        "options": [
          "$y - x = C(1 + xy)$",
          "$\\\\tan^{-1}y = \\\\tan^{-1}x + C$",
          "$\\\\tan^{-1}y - \\\\tan^{-1}x = \\\\tan^{-1}C$",
          "$y = x + C$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The integrating factor (I.F.) of the linear differential equation $\\\\frac{dy}{dx} + P y = Q$ is given by:",
        "options": [
          "$\\\\int P\\\\,dx$",
          "$e^{\\\\int P\\\\,dx}$",
          "$e^{\\\\int Q\\\\,dx}$",
          "$\\\\int Q\\\\,dx$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What is the integrating factor of the differential equation $x \\\\frac{dy}{dx} - y = 2x^2$?",
        "options": [
          "$x$",
          "$\\\\frac{1}{x}$",
          "$e^x$",
          "$\\\\log x$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The differential equation representing the family of curves $y = a \\\\sin x + b \\\\cos x$ (where $a, b$ are arbitrary constants) is of order:",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Vector Algebra": [
      {
        "question": "What is the magnitude of the vector $\\\\vec{a} = 3\\\\hat{i} - 2\\\\hat{j} + 6\\\\hat{k}$?",
        "options": [
          "7",
          "5",
          "$\\\\sqrt{35}$",
          "11"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "If $\\\\vec{a}$ and $\\\\vec{b}$ are two non-zero vectors such that $\\\\vert{}\\\\vec{a} \\\\cdot \\\\vec{b}\\\\vert{} = \\\\vert{}\\\\vec{a} \\\\times \\\\vec{b}\\\\vert{}$, then the angle between $\\\\vec{a}$ and $\\\\vec{b}$ is:",
        "options": [
          "$0^\\\\circ$",
          "$\\\\frac{\\\\pi}{4}$",
          "$\\\\frac{\\\\pi}{2}$",
          "$\\\\pi$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The position vector of a point $R$ which divides the line joining two points $P$ and $Q$ with position vectors $\\\\vec{p}$ and $\\\\vec{q}$ in the ratio $2:1$ internally is given by:",
        "options": [
          "$\\\\frac{\\\\vec{q} + 2\\\\vec{p}}{3}$",
          "$\\\\frac{2\\\\vec{q} + \\\\vec{p}}{3}$",
          "$2\\\\vec{q} - \\\\vec{p}$",
          "$\\\\frac{2\\\\vec{q} - \\\\vec{p}}{3}$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Projection of vector $\\\\vec{a} = 2\\\\hat{i} - 3\\\\hat{j} + \\\\hat{k}$ on the vector $\\\\vec{b} = \\\\hat{i} + 2\\\\hat{j} + 2\\\\hat{k}$ is:",
        "options": [
          "$-\\\\frac{2}{3}$",
          "$\\\\frac{2}{3}$",
          "$-\\\\frac{1}{3}$",
          "$\\\\frac{4}{3}$"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "If $\\\\hat{i}, \\\\hat{j}, \\\\hat{k}$ are orthogonal unit vectors, then the value of $\\\\hat{i} \\\\cdot (\\\\hat{j} \\\\times \\\\hat{k}) + \\\\hat{j} \\\\cdot (\\\\hat{i} \\\\times \\\\hat{k}) + \\\\hat{k} \\\\cdot (\\\\hat{i} \\\\times \\\\hat{j})$ is:",
        "options": [
          "3",
          "0",
          "1",
          "-1"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "If $\\\\vec{a}$ is a unit vector and $(\\\\vec{x} - \\\\vec{a}) \\\\cdot (\\\\vec{x} + \\\\vec{a}) = 8$, then $\\\\vert{}\\\\vec{x}\\\\vert{}$ is equal to:",
        "options": [
          "3",
          "$\\\\sqrt{7}$",
          "9",
          "8"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "If vectors $2\\\\hat{i} + 3\\\\hat{j} - \\\\hat{k}$ and $-4\\\\hat{i} - 6\\\\hat{j} + \\\\lambda\\\\hat{k}$ are parallel to each other, then the value of $\\\\lambda$ is:",
        "options": [
          "2",
          "-2",
          "4",
          "-4"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "For any vector $\\\\vec{a}$, the value of $\\\\vert{}\\\\vec{a} \\\\times \\\\hat{i}\\\\vert{}^2 + \\\\vert{}\\\\vec{a} \\\\times \\\\hat{j}\\\\vert{}^2 + \\\\vert{}\\\\vec{a} \\\\times \\\\hat{k}\\\\vert{}^2$ is equal to:",
        "options": [
          "$\\\\vert{}\\\\vec{a}\\\\vert{}^2$",
          "$2\\\\vert{}\\\\vec{a}\\\\vert{}^2$",
          "$3\\\\vert{}\\\\vec{a}\\\\vert{}^2$",
          "0"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "If $\\\\vert{}\\\\vec{a}\\\\vert{} = 2$, $\\\\vert{}\\\\vec{b}\\\\vert{} = 5$ and $\\\\vert{}\\\\vec{a} \\\\times \\\\vec{b}\\\\vert{} = 8$, then the value of $\\\\vec{a} \\\\cdot \\\\vec{b}$ can be:",
        "options": [
          "6",
          "-6",
          "$\\\\pm 6$",
          "$\\\\pm 8$"
        ],
        "answer": 2,
        "answerLetter": "C"
      }
    ],
    "Three Dimensional Geometry": [
      {
        "question": "What is the angle between the lines whose direction ratios are $a\\_1, b\\_1, c\\_1$ and $a\\_2, b\\_2, c\\_2$?",
        "options": [
          "$\\\\cos\\\\theta = \\\\frac{a\\_1a\\_2 + b\\_1b\\_2 + c\\_1c\\_2}{\\\\sqrt{a\\_1^2+b\\_1^2+c\\_1^2}\\\\sqrt{a\\_2^2+b\\_2^2+c\\_2^2}}$",
          "$\\\\sin\\\\theta = \\\\frac{a\\_1a\\_2 + b\\_1b\\_2 + c\\_1c\\_2}{\\\\sqrt{a\\_1^2+b\\_1^2+c\\_1^2}\\\\sqrt{a\\_2^2+b\\_2^2+c\\_2^2}}$",
          "$\\\\cos\\\\theta = \\\\frac{a\\_1a\\_1 + b\\_1b\\_2 + c\\_1c\\_2}{a\\_2 + b\\_2 + c\\_2}$",
          "$\\\\cos\\\\theta = a\\_1a\\_2 + b\\_1b\\_2 + c\\_1c\\_2$"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "If the direction cosines of a line are $l, m, n$, then which of the following relations is always true?",
        "options": [
          "$l + m + n = 1$",
          "$l^2 + m^2 + n^2 = 1$",
          "$l^2 + m^2 + n^2 = 0$",
          "$l + m + n = 0$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "$ from the origin?",
        "options": [
          "$x\\_1 + y\\_1 + z\\_1$",
          "$\\\\sqrt{x\\_1 + y\\_1 + z\\_1}$",
          "$\\\\sqrt{x\\_1^2 + y\\_1^2 + z\\_1^2}$",
          "$x\\_1^2 + y\\_1^2 + z\\_1^2$"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The condition for two lines with direction ratios $a\\_1, b\\_1, c\\_1$ and $a\\_2, b\\_2, c\\_2$ to be perpendicular to each other is:",
        "options": [
          "$\\\\frac{a\\_1}{a\\_2} = \\\\frac{b\\_1}{b\\_2} = \\\\frac{c\\_1}{c\\_2}$",
          "$a\\_1a\\_2 + b\\_1b\\_2 + c\\_1c\\_2 = 0$",
          "$a\\_1 + a\\_2 + b\\_1 + b\\_2 + c\\_1 + c\\_2 = 0$",
          "$a\\_1a\\_2 = b\\_1b\\_2 = c\\_1c\\_2$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The condition for two lines with direction ratios $a\\_1, b\\_1, c\\_1$ and $a\\_2, b\\_2, c\\_2$ to be parallel to each other is:",
        "options": [
          "$a\\_1a\\_2 + b\\_1b\\_2 + c\\_1c\\_2 = 0$",
          "$\\\\frac{a\\_1}{a\\_2} = \\\\frac{b\\_1}{b\\_2} = \\\\frac{c\\_1}{c\\_2}$",
          "$a\\_1 - a\\_2 = b\\_1 - b\\_2 = c\\_1 - c\\_2$",
          "$a\\_1b\\_2 - a\\_2b\\_1 = 0$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What is the equation of a plane passing through the origin?",
        "options": [
          "$Ax + By + Cz + D = 0$",
          "$Ax + By + Cz = 0$",
          "$x + y + z = D$",
          "$\\\\frac{x}{A} + \\\\frac{y}{B} + \\\\frac{z}{C} = 0$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What is the perpendicular distance of the plane $Ax + By + Cz + D = 0$ from the origin?",
        "options": [
          "$\\\\frac{D}{\\\\sqrt{A^2 + B^2 + C^2}}$",
          "$\\\\frac{\\\\vert{}D\\\\vert{}}{\\\\sqrt{A^2 + B^2 + C^2}}$",
          "$\\\\sqrt{A^2 + B^2 + C^2}$",
          "$\\\\frac{\\\\vert{}Ax\\_1 + By\\_1 + Cz\\_1 + D\\\\vert{}}{\\\\sqrt{A^2 + B^2 + C^2}}$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The angle $\\\\theta$ between two planes $A\\_1x + B\\_1y + C\\_1z + D\\_1 = 0$ and $A\\_2x + B\\_2y + C\\_2z + D\\_2 = 0$ is given by:",
        "options": [
          "$\\\\cos\\\\theta = \\\\frac{A\\_1A\\_2 + B\\_1B\\_2 + C\\_1C\\_2}{\\\\sqrt{A\\_1^2+B\\_1^2+C\\_1^2}\\\\sqrt{A\\_2^2+B\\_2^2+C\\_2^2}}$",
          "$\\\\sin\\\\theta = \\\\frac{A\\_1A\\_2 + B\\_1B\\_2 + C\\_1C\\_2}{\\\\sqrt{A\\_1^2+B\\_1^2+C\\_1^2}\\\\sqrt{A\\_2^2+B\\_2^2+C\\_2^2}}$",
          "$\\\\cos\\\\theta = A\\_1A\\_2 + B\\_1B\\_2 + C\\_1C\\_2$",
          "$\\\\cos\\\\theta = \\\\frac{A\\_1+A\\_2 + B\\_1+B\\_2 + C\\_1+C\\_2}{\\\\sqrt{A\\_1^2+B\\_1^2+C\\_1^2}+\\\\sqrt{A\\_2^2+B\\_2^2+C\\_2^2}}$"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "What is the shortest distance between two skew lines $\\\\vec{r} = \\\\vec{a\\_1} + \\\\lambda\\\\vec{b\\_1}$ and $\\\\vec{r} = \\\\vec{a\\_2} + \\\\mu\\\\vec{b\\_2}$?",
        "options": [
          "$\\\\frac{\\\\vert{}(\\\\vec{a\\_2} - \\\\vec{a\\_1}) \\\\cdot (\\\\vec{b\\_1} \\\\times \\\\vec{b\\_2})\\\\vert{}}{\\\\vert{}\\\\vec{b\\_1} \\\\times \\\\vec{b\\_2}\\\\vert{}}$",
          "$\\\\frac{(\\\\vec{a\\_2} - \\\\vec{a\\_1}) \\\\cdot (\\\\vec{b\\_1} \\\\times \\\\vec{b\\_2})}{\\\\vert{}\\\\vec{a\\_2} - \\\\vec{a\\_1}\\\\vert{}}$",
          "$\\\\frac{\\\\vert{}\\\\vec{b\\_1} \\\\times \\\\vec{b\\_2}\\\\vert{}}{\\\\vert{}(\\\\vec{a\\_2} - \\\\vec{a\\_1}) \\\\cdot (\\\\vec{b\\_1} \\\\times \\\\vec{b\\_2})\\\\vert{}}$",
          "$\\\\vert{}(\\\\vec{a\\_2} - \\\\vec{a\\_1}) \\\\times (\\\\vec{b\\_1} \\\\times \\\\vec{b\\_2})\\\\vert{}$"
        ],
        "answer": 0,
        "answerLetter": "A"
      }
    ],
    "Linear Programming": [
      {
        "question": "The region in the xy-plane defined by the constraints $x \\\\ge 0$, $y \\\\ge 0$ lies in the:",
        "options": [
          "First quadrant",
          "Second quadrant",
          "Third quadrant",
          "Fourth quadrant"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "In a linear programming problem, the linear function that is to be maximized or minimized is called:",
        "options": [
          "Constraint function",
          "Objective function",
          "Feasible function",
          "Optimal function"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The common region determined by all the given constraints of a linear programming problem is called the:",
        "options": [
          "Optimal region",
          "Infeasible region",
          "Feasible region",
          "Unbounded region"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Points within or on the boundary of the feasible region represent:",
        "options": [
          "Infeasible solutions",
          "Feasible solutions",
          "Optimal solutions only",
          "Objective values"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "If the feasible region for a linear programming problem is bounded, then the objective function Z always has:",
        "options": [
          "Only a maximum value",
          "Only a minimum value",
          "Neither a maximum nor a minimum value",
          "Both a maximum and a minimum value"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "In a linear programming problem, the constraints $x \\\\ge 0$ and $y \\\\ge 0$ are called:",
        "options": [
          "Linear constraints",
          "Non-negative constraints",
          "Objective constraints",
          "Optimal constraints"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Any point outside the feasible region is called a/an:",
        "options": [
          "Optimal point",
          "Feasible solution",
          "Infeasible solution",
          "Corner point"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The optimal value of the objective function always occurs at which part of the feasible region?",
        "options": [
          "Any interior point",
          "Corner points of the feasible region",
          "Origin only",
          "Midpoint of the boundary"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "If two corner points of the feasible region are both optimal solutions of the same objective function, then:",
        "options": [
          "The problem has no solution",
          "The maximum or minimum value occurs only at those two points",
          "Every point on the line segment joining these two points is also an optimal solution",
          "The objective function is zero everywhere"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following is not a type of linear programming problem?",
        "options": [
          "Manufacturing problem",
          "Diet problem",
          "Transportation problem",
          "Quadratic equation problem"
        ],
        "answer": 3,
        "answerLetter": "D"
      }
    ],
    "Probability": [
      {
        "question": "If $P",
        "options": [
          "= 0.6$, $P",
          "= 0.3$, and $P(A \\\\cap B) = 0.2$, what is the value of $P(A \\\\mid B)$?",
          "$\\\\frac{1}{3}$",
          "$\\\\frac{2}{3}$(C) $\\\\frac{1}{2}$(D) $\\\\frac{3}{5}$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Two events $A$ and $B$ will be independent if:",
        "options": [
          "$P(A \\\\cap B) = P",
          "+ P",
          "$",
          "$P(A \\\\cup B) = P(A)P(B)$(C) $P(A \\\\cap B) = P(A)P(B)$(D) $P(A \\\\mid B) = P(B)$"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "If $A$ and $B$ are two events such that $P",
        "options": [
          "\\\\neq 0$ and $P(B \\\\mid A) = 1$, then:",
          "$A \\\\subset B$",
          "$B \\\\subset A$",
          "$A = B$(D) $A \\\\cap B = \\\\phi$"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "If $P",
        "options": [
          "= 0.8$ and $P(B \\\\mid A) = 0.4$, then $P(A \\\\cap B)$ is equal to:",
          "$0.32$",
          "$0.5$",
          "$2$(D) $0.2$"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Let $A$ and $B$ be independent events with $P",
        "options": [
          "= 0.3$ and $P",
          "= 0.4$. What is the value of $P(A \\\\cup B)$?",
          "$0.12$",
          "$0.58$(C) $0.7$(D) $0.88$"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "If $P(A') = 0.7$, $P",
        "options": [
          "= 0.7$, and $P(B \\\\mid A) = 0.5$, find $P(A \\\\cup B)$.",
          "$0.45$",
          "$0.75$",
          "$0.85$(D) $0.95$"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What is the probability of getting 5 exactly twice in 7 throws of a die?",
        "options": [
          "$^{7}C\\_{2} \\\\left(\\\\frac{1}{6}\\\\right)^{2} \\\\left(\\\\frac{5}{6}\\\\right)^{5}$",
          "$\\\\left(\\\\frac{1}{6}\\\\right)^{2} \\\\left(\\\\frac{5}{6}\\\\right)^{5}$",
          "$^{7}C\\_{2} \\\\left(\\\\frac{5}{6}\\\\right)^{2} \\\\left(\\\\frac{1}{6}\\\\right)^{5}$",
          "$^{7}C\\_{5} \\\\left(\\\\frac{1}{6}\\\\right)^{5} \\\\left(\\\\frac{5}{6}\\\\right)^{2}$"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "If $P",
        "options": [
          "= \\\\frac{1}{2}$, $P",
          "= 0$, then $P(A \\\\mid B)$ is:",
          "$0$",
          "$\\\\frac{1}{2}$(C) Not defined(D) $1$"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "For a discrete probability distribution, the sum of probabilities of all possible outcomes is always equal to:",
        "options": [
          "$0$",
          "$0.5$",
          "$1$",
          "Infinitely large"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "If $E$ and $F$ are complementary events, then which of the following relations is always true?",
        "options": [
          "$P(E) + P(F) = 1$",
          "$P(E) = P(F)$",
          "$P(E) \\\\cdot P(F) = 1$",
          "$P(E) - P(F) = 1$"
        ],
        "answer": 0,
        "answerLetter": "A"
      }
    ]
  },
  "Biology": {
    "Sexual Reproduction in Flowering Plants": [
      {
        "question": "Which part of the stamen represents the microsporangium in flowering plants?",
        "options": [
          "Filament",
          "Connective",
          "Anther",
          "Pollen grain"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The innermost wall layer of the microsporangium that nourishes the developing pollen grains is:",
        "options": [
          "Epidermis",
          "Endothecium",
          "Middle layers",
          "Tapetum"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Sporopollenin, a very resistant organic material present in the exine of pollen grains, can withstand high temperatures and strong acids because:",
        "options": [
          "It is made of cellulose",
          "It is enzyme-resistant",
          "It contains pectin",
          "It is made of lignin"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "In a mature angiosperm pollen grain, the vegetative cell is:",
        "options": [
          "Smaller and floats in the cytoplasm of the generative cell",
          "Larger, has abundant food reserve, and a large irregularly shaped nucleus",
          "Spindle-shaped with dense cytoplasm",
          "Non-functional and degenerates early"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The functional megaspore in an angiosperm develops into:",
        "options": [
          "Embryo sac",
          "Endosperm",
          "Seed coat",
          "Fruit wall"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Filiform apparatus is a characteristic feature of:",
        "options": [
          "Antipodals",
          "Synergids",
          "Central cell",
          "Egg cell"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Transfer of pollen grains from the anther to the stigma of another flower of the same plant is called:",
        "options": [
          "Autogamy",
          "Geitonogamy",
          "Xenogamy",
          "Cleistogamy"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is an abiotic agent of pollination?",
        "options": [
          "Bees",
          "Wind",
          "Butterflies",
          "Bats"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The phenomenon of double fertilization, unique to flowering plants, involves:",
        "options": [
          "Syngamy only",
          "Triple fusion only",
          "Syngamy and triple fusion",
          "Apomixis and parthenocarpy"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Persistent nucellus in the seed is known as:",
        "options": [
          "Endosperm",
          "Perisperm",
          "Testa",
          "Tegmen"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Human Reproduction": [
      {
        "question": "Which of the following represents the primary sex organ in human males?",
        "options": [
          "Scrotum",
          "Testis",
          "Vas deferens",
          "Penis"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The finger-like projections present on the edges of the infundibulum of the fallopian tube are called:",
        "options": [
          "Ampulla",
          "Isthmus",
          "Fimbriae",
          "Cervix"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The layer of the uterine wall that undergoes cyclical breakdown during menstruation is the:",
        "options": [
          "Perimetrium",
          "Myometrium",
          "Endometrium",
          "Epimetrium"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The process of formation of mature female gamete (ovum) is known as:",
        "options": [
          "Spermatogenesis",
          "Oogenesis",
          "Parturition",
          "Gestation"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which hormone surge induces ovulation (rupture of the Graafian follicle) during the menstrual cycle?",
        "options": [
          "FSH surge",
          "LH surge",
          "Progesterone surge",
          "Estrogen surge"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The fluid-filled cavity inside a secondary or tertiary ovarian follicle is called:",
        "options": [
          "Antrum",
          "Acrosome",
          "Corona radiata",
          "Zona pellucida"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "During fertilization, the sperm comes in contact with which layer of the ovum block polyspermy?",
        "options": [
          "Corona radiata",
          "Zona pellucida",
          "Vitelline membrane",
          "Trophoblast"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The temporary endocrine structure formed from the ruptured follicle after ovulation is the:",
        "options": [
          "Corpus albicans",
          "Corpus luteum",
          "Placenta",
          "Primary follicle"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which hormone is secreted by the placenta and is used as the basis for pregnancy tests?",
        "options": [
          "Human chorionic gonadotropin (hCG)",
          "Human placental lactogen (hPL)",
          "Relaxin",
          "Oxytocin"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "The first milk produced during the initial days of lactation, which is rich in antibodies (IgA), is called:",
        "options": [
          "Colostrum",
          "Sebum",
          "Cerumen",
          "Meconium"
        ],
        "answer": 0,
        "answerLetter": "A"
      }
    ],
    "Reproductive Health": [
      {
        "question": "Which of the following is considered a natural method of contraception?",
        "options": [
          "Oral contraceptive pills",
          "Vasectomy",
          "Coitus interruptus",
          "Intrauterine device"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The statutory ban on amniocentesis in India was legally enacted to check:",
        "options": [
          "Genetic disorders",
          "Female foeticide",
          "Infertility",
          "Sexually transmitted infections"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is a hormone-releasing Intrauterine Device (IUD)?",
        "options": [
          "CuT",
          "Lippes loop",
          "Multiload 375",
          "LNG-20"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Saheli, the oral contraceptive pill for females developed in India, is taken:",
        "options": [
          "Daily",
          "Once a week",
          "Once a month",
          "Once a year"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Permanent methods of birth control in males and females are called:",
        "options": [
          "Barrier methods",
          "Surgical methods / sterilization",
          "Natural methods",
          "Chemical methods"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Medical Termination of Pregnancy (MTP) is considered relatively safe during which trimester of pregnancy?",
        "options": [
          "First trimester",
          "Second trimester",
          "Third trimester",
          "Throughout all trimesters equally"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following sexually transmitted infections (STIs) is completely curable if detected early and treated properly?",
        "options": [
          "Hepatitis-B",
          "Genital herpes",
          "Gonorrhoea",
          "HIV"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "In the GIFT (Gamete Intra Fallopian Transfer) technique, what is transferred into the fallopian tube?",
        "options": [
          "Zygote up to 8-blastomere stage",
          "Ovum collected from a donor",
          "Embryo with more than 8 blastomeres",
          "Spermatozoa directly"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The medical term used for infections or diseases transmitted through sexual intercourse is:",
        "options": [
          "RTI",
          "STI",
          "VD",
          "All of the above"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Assisted Reproductive Technology (ART) that involves the in vitro fertilisation of ova followed by the transfer of an embryo with more than 8 blastomeres into the uterus is known as:",
        "options": [
          "ZIFT",
          "GIFT",
          "IUT",
          "ICSI"
        ],
        "answer": 2,
        "answerLetter": "C"
      }
    ],
    "Principles of Inheritance and Variation": [
      {
        "question": "Which of the following terms describes the appearance of an organism resulting from its genetic constitution and environmental influence?",
        "options": [
          "Genotype",
          "Phenotype",
          "Allele",
          "Genome"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Mendel conducted his famous hybridization experiments on garden peas over how many years?",
        "options": [
          "3 years",
          "5 years",
          "7 years",
          "10 years"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "When a cross is made between a true-breeding tall plant and a true-breeding dwarf plant, the $F\\_1$ generation shows all tall plants. This phenomenon illustrates:",
        "options": [
          "Segregation",
          "Dominance",
          "Independent assortment",
          "Codominance"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The segregation of alleles during gamete formation is accounted for by which of Mendel's laws?",
        "options": [
          "Law of Dominance",
          "Law of Segregation (First Law)",
          "Law of Independent Assortment",
          "Law of Incomplete Dominance"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "In snapdragons (Antirrhinum majus), a cross between a red-flowered plant ($RR$) and a white-flowered plant ($rr$) yields pink-flowered plants ($Rr$) in the $F\\_1$ generation. This is an example of:",
        "options": [
          "Codominance",
          "Multiple allelism",
          "Incomplete dominance",
          "Polygenic inheritance"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Human ABO blood grouping is an excellent example of which genetic phenomenon?",
        "options": [
          "Incomplete dominance and multiple alleles",
          "Codominance and multiple alleles",
          "Pleiotropy and codominance",
          "Polygenic inheritance and dominance"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What is the phenotypic ratio observed in a typical Dihybrid cross in the $F\\_2$ generation?",
        "options": [
          "3:1",
          "1:2:1",
          "9:3:3:1",
          "1:1:1:1"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Who experimentally verified the chromosomal theory of inheritance by discovering linkage and recombination in Drosophila?",
        "options": [
          "Gregor Mendel",
          "Walter Sutton and Theodore Boveri",
          "Thomas Hunt Morgan",
          "Hugo de Vries"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following disorders is an example of an X-linked recessive trait?",
        "options": [
          "Phenylketonuria",
          "Sickle-cell anaemia",
          "Haemophilia",
          "Down's syndrome"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "A human female with Turner's syndrome has a chromosomal complement of:",
        "options": [
          "47, XXY",
          "45, XO",
          "47, +21",
          "46, XX"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Molecular Basis of Inheritance": [
      {
        "question": "Which of the following is the genetic material in most organisms?",
        "options": [
          "RNA",
          "DNA",
          "Protein",
          "Carbohydrate"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The nitrogenous base found in RNA instead of thymine is:",
        "options": [
          "Adenine",
          "Guanine",
          "Uracil",
          "Cytosine"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "In double-stranded DNA, the two strands are held together by which type of bonds between nitrogenous bases?",
        "options": [
          "Covalent bonds",
          "Peptide bonds",
          "Hydrogen bonds",
          "Phosphodiester bonds"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The enzyme responsible for transcription is:",
        "options": [
          "DNA polymerase",
          "RNA polymerase",
          "DNA ligase",
          "Helicase"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following codons acts as the initiation codon in protein synthesis?",
        "options": [
          "UAA",
          "UAG",
          "AUG",
          "UGA"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The flow of genetic information from DNA to mRNA and then to protein is known as:",
        "options": [
          "Reverse transcription",
          "Central dogma",
          "Translation",
          "Replication"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "DNA replication is:",
        "options": [
          "Conservative and dispersive",
          "Semi-conservative and unidirectional",
          "Semi-conservative and semi-discontinuous",
          "Dispersive and continuous"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The untranslated regions (UTRs) in mRNA are required for:",
        "options": [
          "DNA replication",
          "Efficient translation process",
          "Transcription termination",
          "Splicing"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which scientist(s) conclusively proved that DNA is the genetic material using bacteriophages?",
        "options": [
          "Griffith",
          "Avery, MacLeod, and McCarty",
          "Hershey and Chase",
          "Watson and Crick"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "In the lac operon model, the 'i' gene codes for which of the following?",
        "options": [
          "Repressor protein",
          "Beta-galactosidase",
          "Permease",
          "Transacetylase"
        ],
        "answer": 0,
        "answerLetter": "A"
      }
    ],
    "Evolution": [
      {
        "question": "Which of the following theories was proposed by Jean-Baptiste Lamarck regarding the evolution of life forms?",
        "options": [
          "Natural Selection",
          "Inheritance of Acquired Characters",
          "Mutation Theory",
          "Germplasm Theory"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The experiment conducted by S.L. Miller in 1953 to test the origin of life created which of the following molecules in a closed flask?",
        "options": [
          "Nucleic acids",
          "Amino acids",
          "Polysaccharides",
          "ATP molecules"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following anatomical structures represent analogous organs?",
        "options": [
          "Forelimbs of whales and cheetahs",
          "Thorns of Bougainvillea and tendrils of Cucurbita",
          "Wings of butterflies and wings of birds",
          "Hearts of bats and humans"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Homologous organs indicate which type of evolution?",
        "options": [
          "Convergent evolution",
          "Divergent evolution",
          "Parallel evolution",
          "Saltation"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following phenomena refers to the process where different species in a given geographical area start from a point and radiate to other geographical areas?",
        "options": [
          "Adaptive radiation",
          "Convergent evolution",
          "Genetic drift",
          "Saltation"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "According to the Hardy-Weinberg principle, the sum total of all allelic frequencies in a population is:",
        "options": [
          "0",
          "1",
          "2",
          "100"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following factors can affect the Hardy-Weinberg equilibrium by causing changes in allele frequencies by chance?",
        "options": [
          "Natural selection",
          "Gene migration",
          "Genetic drift",
          "Mutation"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The geological time period known as the \"Age of Fishes and Amphibians\" is:",
        "options": [
          "Mesozoic era",
          "Cenozoic era",
          "Paleozoic era",
          "Proterozoic era"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which ancestral form of human is believed to have walked upright, had a brain capacity of around 900 cc, and ate meat?",
        "options": [
          "Homo habilis",
          "Homo erectus",
          "Neanderthal man",
          "Australopithecus"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Hugo de Vries proposed the mutation theory of evolution, referring to single-step large mutations as:",
        "options": [
          "Natural selection",
          "Adaptive radiation",
          "Saltation",
          "Genetic recombination"
        ],
        "answer": 2,
        "answerLetter": "C"
      }
    ],
    "Human Health and Disease": [
      {
        "question": "Which of the following pathogens causes typhoid fever?",
        "options": [
          "Streptococcus pneumoniae",
          "Salmonella typhi",
          "Haemophilus influenzae",
          "Plasmodium vivax"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The disease common cold is caused by which group of viruses?",
        "options": [
          "Retroviruses",
          "Rhinoviruses",
          "Adenoviruses",
          "Enteroviruses"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which species of Plasmodium causes malignant malaria, which is the most serious and fatal type?",
        "options": [
          "Plasmodium vivax",
          "Plasmodium malariae",
          "Plasmodium ovale",
          "Plasmodium falciparum"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Which of the following organs is considered the primary lymphoid organ where lymphocytes mature and proliferate?",
        "options": [
          "Spleen",
          "Lymph nodes",
          "Thymus",
          "Tonsils"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which type of antibody is produced in response to allergic reactions and mediates hypersensitivity?",
        "options": [
          "IgA",
          "IgM",
          "IgE",
          "IgG"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "AIDS is caused by the Human Immunodeficiency Virus (HIV), which is a type of:",
        "options": [
          "DNA virus",
          "Retrovirus",
          "Bacteriophage",
          "Poxvirus"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is a malignant growth of lymphoid tissue?",
        "options": [
          "Carcinoma",
          "Sarcoma",
          "Lymphoma",
          "Leukemia"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Cannabinoids, which interact with receptors mainly present in the brain, are naturally obtained from:",
        "options": [
          "Papaver somniferum",
          "Erythroxylum coca",
          "Cannabis sativa",
          "Atropa belladonna"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following diagnostic tests is commonly used for the confirmation of HIV infection?",
        "options": [
          "Widal test",
          "ELISA test",
          "PCR test",
          "Mantoux test"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Colostrum secreted by the mother during the initial days of lactation provides which type of immunity to the newborn infant?",
        "options": [
          "Active immunity",
          "Passive immunity",
          "Cellular immunity",
          "Innate immunity"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Microbes in Human Welfare": [
      {
        "question": "Which of the following microbes is used in the production of Swiss cheese to give it its characteristic large holes?",
        "options": [
          "Lactobacillus",
          "Propionibacterium sharmanii",
          "Saccharomyces cerevisiae",
          "Penicillium notatum"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The starter or inoculum added to milk to convert it into curd contains which of the following bacteria?",
        "options": [
          "Acetic acid bacteria",
          "Lactic acid bacteria (LAB)",
          "Nitrogen-fixing bacteria",
          "Methane-producing bacteria"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Yeast (Saccharomyces cerevisiae) is commercially used for the production of:",
        "options": [
          "Ethanol",
          "Citric acid",
          "Cyclosporin A",
          "Statins"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following is an antibiotic produced by a fungus?",
        "options": [
          "Streptomycin",
          "Penicillin",
          "Tetracycline",
          "Erythromycin"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Cyclosporin A, an immunosuppressive agent used in organ transplant patients, is produced by which fungus?",
        "options": [
          "Aspergillus niger",
          "Trichoderma polysporum",
          "Monascus purpureus",
          "Penicillium chrysogenum"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Statins, which are used as blood-cholesterol lowering agents, are commercially produced by:",
        "options": [
          "Yeast (Monascus purpureus)",
          "Bacterium (Acetobacter aceti)",
          "Fungus (Aspergillus niger)",
          "Cyanobacterium (Nostoc)"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "During secondary treatment of sewage, the flocs are formed by:",
        "options": [
          "Masses of bacteria associated with fungal filaments",
          "Anaerobic bacteria and algae",
          "Fungal spores and protozoa",
          "Cyanobacteria and plant roots"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Methanogens are anaerobic bacteria that produce biogas. Which of the following gases is the primary component of biogas?",
        "options": [
          "Carbon dioxide",
          "Methane",
          "Hydrogen sulphide",
          "Nitrogen"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Biological control of pest and disease relies on natural predation rather than chemicals. Which bacterium is used as a bioinsecticide to control caterpillar pests in crops like brassicas and fruit trees?",
        "options": [
          "Bacillus thuringiensis",
          "Rhizobium meliloti",
          "Clostridium butylicum",
          "Glomus species"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Mycorrhiza is a symbiotic association between fungi and the roots of higher plants. Which fungal genus is commonly involved in forming mycorrhizae to help plants absorb phosphorus from the soil?",
        "options": [
          "Glomus",
          "Trichoderma",
          "Aspergillus",
          "Penicillium"
        ],
        "answer": 0,
        "answerLetter": "A"
      }
    ],
    "Biotechnology: Principles and Processes": [
      {
        "question": "Which of the following enzymes is used to cut DNA at specific recognition sites?",
        "options": [
          "DNA ligase",
          "Restriction endonuclease",
          "DNA polymerase",
          "Reverse transcriptase"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The convention for naming restriction endonucleases begins with the first letter of the genus followed by the first two letters of the:",
        "options": [
          "Species",
          "Strain",
          "Enzyme",
          "Restriction site"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which technique is commonly used to separate DNA fragments according to their size?",
        "options": [
          "Polymerase Chain Reaction",
          "Centrifugation",
          "Gel electrophoresis",
          "Transformation"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "In agarose gel electrophoresis, DNA fragments move towards the:",
        "options": [
          "Cathode (Negative electrode)",
          "Anode (Positive electrode)",
          "Center of the gel",
          "Any direction randomly"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is commonly used as a cloning vector in plants?",
        "options": [
          "Escherichia coli",
          "Agrobacterium tumefaciens",
          "Retrovirus",
          "Bacteriophage"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The tumbling or stirring of medium in a bioreactor helps to maintain which of the following?",
        "options": [
          "Constant temperature",
          "Oxygen availability throughout the bioreactor",
          "pH of the medium",
          "Cell concentration"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Plasmid DNA is used as a vector in recombinant DNA technology because it is:",
        "options": [
          "Circular and extrachromosomal",
          "Essential for bacterial survival",
          "Larger than host chromosome",
          "Unable to replicate independently"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "What is the role of selectable markers in cloning vectors?",
        "options": [
          "To help in the identification and elimination of non-transformants",
          "To cut DNA at specific sites",
          "To join DNA fragments",
          "To amplify the gene of interest"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "The process of introduction of foreign DNA into a host cell by using micro-injections involves injecting the DNA directly into the:",
        "options": [
          "Nucleus",
          "Cytoplasm",
          "Cell wall",
          "Vacuole"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following steps is NOT involved in Polymerase Chain Reaction (PCR)?",
        "options": [
          "Denaturation",
          "Annealing",
          "Ligation",
          "Extension"
        ],
        "answer": 2,
        "answerLetter": "C"
      }
    ],
    "Biotechnology and its Applications": [
      {
        "question": "Which bacteria is commonly used to produce a crystal protein that kills insect pests like corn borer?",
        "options": [
          "Agrobacterium tumefaciens",
          "Bacillus thuringiensis",
          "Escherichia coli",
          "Salmonella typhimurium"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What do the prefix \"cry\" and the capital letter/number (like cryIAc) stand for in the genes isolated from Bacillus thuringiensis?",
        "options": [
          "Cytotoxin gene",
          "Crystal protein gene",
          "Chromosomal gene",
          "Chloroplast gene"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which organism is responsible for causing crown gall tumors in plants by transferring a piece of DNA known as T-DNA?",
        "options": [
          "Bacillus thuringiensis",
          "Meloidogyne incognita",
          "Agrobacterium tumefaciens",
          "Retrovirus"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The method of RNA interference (RNAi) involves silencing of a specific mRNA due to a complementary:",
        "options": [
          "dsRNA molecule",
          "ssDNA molecule",
          "tRNA molecule",
          "rRNA molecule"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "In the process of RNA interference used to protect tobacco plants against the nematode Meloidogyne incognita, nematode-specific genes were introduced using:",
        "options": [
          "Retroviruses",
          "Agrobacterium vectors",
          "Plasmids from E. coli",
          "Bacteriophages"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The first human hormone produced using recombinant DNA technology by Eli Lilly in 1983 was:",
        "options": [
          "Growth hormone",
          "Thyroxine",
          "Insulin",
          "Adrenaline"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Proinsulin differs from mature human insulin because proinsulin contains an extra stretch of amino acids called:",
        "options": [
          "A-peptide",
          "B-peptide",
          "C-peptide",
          "S-peptide"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The introduction of a normal gene into individuals to take over the function of and compensate for a non-functional gene is known as:",
        "options": [
          "Gene cloning",
          "Gene therapy",
          "Molecular diagnosis",
          "Recombinant DNA technology"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following molecular diagnostic techniques is based on the principle of antigen-antibody interaction?",
        "options": [
          "Polymerase Chain Reaction (PCR)",
          "Recombinant DNA probe",
          "Enzyme-Linked Immunosorbent Assay (ELISA)",
          "Gel electrophoresis"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Transgenic animals have been manipulated to express foreign genes. What is the primary reason for producing transgenic animals like 'Rosie' (the first transgenic cow)?",
        "options": [
          "To produce alpha-1-antitrypsin for emphysema",
          "To produce human protein-enriched milk (alpha-lactalbumin)",
          "To test the safety of vaccines before use on humans",
          "To study complex human diseases like cancer"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Organisms and Populations": [
      {
        "question": "Which of the following interactions is detrimental to both interacting species?",
        "options": [
          "Mutualism",
          "Competition",
          "Parasitism",
          "Commensalism"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The interaction where one species is harmed and the other is unaffected is known as:",
        "options": [
          "Amensalism",
          "Commensalism",
          "Parasitism",
          "Predation"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following is an example of an ectoparasite?",
        "options": [
          "Tapeworm in human intestine",
          "Cuscuta on hedge plants",
          "Plasmodium in human red blood cells",
          "Ascaris in the gut"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "In a population, the percentage of individuals at a given time residing in specific age groups is called:",
        "options": [
          "Birth rate",
          "Death rate",
          "Age distribution",
          "Sex ratio"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following growth models represents a population growing under limited resource conditions?",
        "options": [
          "Exponential growth",
          "Geometric growth",
          "Logistic growth",
          "Linear growth"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "An association between roots of higher plants and fungi is called:",
        "options": [
          "Lichen",
          "Mycorrhiza",
          "Rhizosphere",
          "Endoparasitism"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following adaptations is shown by desert plants to prevent water loss?",
        "options": [
          "Broad, flat leaves with many stomata",
          "Presence of sunken stomata and thick cuticle",
          "Completely lacking roots",
          "Stomata open during the day"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Organisms that can tolerate a wide range of temperatures are called:",
        "options": [
          "Eurythermal",
          "Stenothermal",
          "Euryhaline",
          "Stenohaline"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "The 'Schl\u00f6sser rule' or Allen's rule states that mammals in colder climates generally have:",
        "options": [
          "Longer ears and limbs",
          "Shorter ears and limbs",
          "Larger body size only",
          "No fur or blubber"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following defines the term 'Niche' of an organism?",
        "options": [
          "Its physical geographical location",
          "The functional role and position it occupies in its environment",
          "Its breeding season only",
          "The type of nest it builds"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Ecosystems": [
      {
        "question": "Which of the following is an example of an abiotic component in an ecosystem?",
        "options": [
          "Plants",
          "Animals",
          "Temperature",
          "Decomposers"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The vertical distribution of different species occupying different levels in an ecosystem is known as:",
        "options": [
          "Stratification",
          "Zonation",
          "Succession",
          "Pyramiding"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following organisms acts as a primary consumer in a terrestrial ecosystem?",
        "options": [
          "Lion",
          "Cow",
          "Hawk",
          "Snake"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The rate of total production of organic matter during photosynthesis in an ecosystem is called:",
        "options": [
          "Net Primary Productivity",
          "Gross Primary Productivity",
          "Secondary Productivity",
          "Net Community Productivity"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following biogeochemical cycles is sedimentary in nature?",
        "options": [
          "Nitrogen cycle",
          "Carbon cycle",
          "Phosphorus cycle",
          "Oxygen cycle"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "In an aquatic ecosystem, the pyramid of biomass is typically:",
        "options": [
          "Always upright",
          "Always inverted",
          "Spindle-shaped",
          "Irregular"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The process of mineralization is carried out by:",
        "options": [
          "Producers",
          "Herbivores",
          "Carnivores",
          "Decomposers"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "What percentage of photosynthetically active radiation (PAR) is captured by plants for conversion into gross primary productivity?",
        "options": [
          "2-10%",
          "50%",
          "1-5%",
          "100%"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "The gradual and predictable change in the species composition of a given area over a period of time is called:",
        "options": [
          "Ecological evolution",
          "Ecological succession",
          "Biotic potential",
          "Homeostasis"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is considered a pioneer species in primary succession on bare rocks?",
        "options": [
          "Annual grasses",
          "Lichens",
          "Shrubs",
          "Trees"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Biodiversity and Conservation": [
      {
        "question": "Which of the following levels of biodiversity refers to the diversity shown by a single species at the genetic level over its distributional range?",
        "options": [
          "Genetic diversity",
          "Species diversity",
          "Ecological diversity",
          "Alpha diversity"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following groups has the maximum number of species among global biodiversity estimates?",
        "options": [
          "Fungi",
          "Angiosperms",
          "Insects",
          "Birds"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Alexander von Humboldt observed that within a region, species richness increases with increasing explored area, but only up to a limit. What is the shape of this species-area relationship on a logarithmic scale?",
        "options": [
          "Rectangular hyperbola",
          "Sigmoid curve",
          "Rectangular parabola",
          "Straight line"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "In the species-area relationship equation $\\\\log S = \\\\log C + Z \\\\log A$, what does $Z$ represent?",
        "options": [
          "Regression coefficient (slope of the line)",
          "Species richness",
          "Y-intercept",
          "Area of the region"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following is considered the most important cause driving animals and plants to extinction?",
        "options": [
          "Co-extinctions",
          "Over-exploitation",
          "Habitat loss and fragmentation",
          "Alien species invasions"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The Nile perch introduced into Lake Victoria in east Africa led to the extinction of an ecologically unique population of which fish?",
        "options": [
          "Catfish",
          "Cichlid fish",
          "Salmon",
          "Trout"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following represents an example of ex-situ conservation?",
        "options": [
          "National Park",
          "Biosphere Reserve",
          "Wildlife Sanctuary",
          "Botanical Garden"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Sacred groves are an example of which type of conservation strategy?",
        "options": [
          "Ex-situ conservation",
          "In-situ conservation",
          "Cryopreservation",
          "In vitro fertilization"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which international historic convention on Biological Diversity (The Earth Summit) was held in Rio de Janeiro in the year:",
        "options": [
          "1987",
          "1992",
          "2002",
          "2010"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ]
  },
  "Economics": {
    "Introduction to Macroeconomics": [
      {
        "question": "Macroeconomics deals with which of the following?",
        "options": [
          "Price of a single commodity",
          "Output of an individual firm",
          "Aggregate economic variables of the economy",
          "Demand of a specific household"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Who is generally regarded as the founder of modern macroeconomics with the publication of his book in 1936?",
        "options": [
          "Adam Smith",
          "John Maynard Keynes",
          "David Ricardo",
          "Karl Marx"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is considered a macroeconomic variable?",
        "options": [
          "Individual income",
          "National income",
          "Firm's profit",
          "Consumer preference"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "In capitalist economies, economic activities are mainly governed by:",
        "options": [
          "Central planning authority",
          "Government intervention",
          "Market forces of demand and supply",
          "Customs and traditions"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following is a characteristic feature of a centrally planned economy?",
        "options": [
          "Production is decided by profit motive",
          "Means of ownership are private",
          "Goods are produced for market sale only",
          "Government decides what to produce, how to produce, and for whom to produce"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Goods that are used up in the process of production or are meant for resale in the same year are called:",
        "options": [
          "Final goods",
          "Intermediate goods",
          "Capital goods",
          "Consumer goods"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is an example of a final good?",
        "options": [
          "Coal purchased by a factory for power generation",
          "Cotton purchased by a textile mill",
          "Milk purchased by a household for consumption",
          "Steel sheets used for making cars"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Goods that are durable and used by producers over a period of several years in production are known as:",
        "options": [
          "Intermediate goods",
          "Capital goods",
          "Non-durable consumer goods",
          "Single-use producer goods"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The net investment in an economy is equal to:",
        "options": [
          "Gross investment plus depreciation",
          "Gross investment minus depreciation",
          "Depreciation minus gross investment",
          "Gross investment multiplied by depreciation"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The flow of income in a simple two-sector economy shows that total production of goods and services in the economy is equal to:",
        "options": [
          "Total consumption expenditure only",
          "Total income received by households only",
          "Total expenditure and total income generated",
          "Total savings in the economy"
        ],
        "answer": 2,
        "answerLetter": "C"
      }
    ],
    "National Income Accounting": [
      {
        "question": "Which of the following is an example of a flow variable?",
        "options": [
          "Capital",
          "Wealth",
          "Investment",
          "Foreign exchange reserves"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "National Income is identically equal to:",
        "options": [
          "Net National Product at market price",
          "Net National Product at factor cost",
          "Gross National Product at factor cost",
          "Gross Domestic Product at market price"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following items is included in the estimation of National Income by the expenditure method?",
        "options": [
          "Purchase of old shares",
          "Government expenditure on defence",
          "Transfer payments",
          "Purchase of raw materials by a firm"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Net Indirect Taxes are calculated as:",
        "options": [
          "Indirect taxes + Subsidies",
          "Indirect taxes - Subsidies",
          "Subsidies - Indirect taxes",
          "Direct taxes - Indirect taxes"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is added to Domestic Income to obtain National Income?",
        "options": [
          "Net indirect taxes",
          "Depreciation",
          "Net factor income from abroad",
          "Net exports"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The difference between Gross Domestic Product at market price ($GDP\\_{MP}$) and Net Domestic Product at market price ($NDP\\_{MP}$) is:",
        "options": [
          "Net indirect taxes",
          "Depreciation",
          "Net factor income from abroad",
          "Subsidies"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is considered a final good in national income accounting?",
        "options": [
          "Purchase of wheat by a flour mill",
          "Purchase of a sewing machine by a tailoring shop",
          "Purchase of petrol by a taxi driver",
          "Purchase of a car by a household for personal use"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Value added is equal to:",
        "options": [
          "Value of output + Intermediate consumption",
          "Value of output - Intermediate consumption",
          "Sales + Change in stock",
          "Intermediate consumption - Value of output"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is an example of a transfer payment?",
        "options": [
          "Old age pension",
          "Salary paid to government employees",
          "Wages paid to a factory worker",
          "Interest paid on a public debt"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Nominal GDP is measured at:",
        "options": [
          "Constant prices",
          "Base year prices",
          "Current prices",
          "Factor cost"
        ],
        "answer": 2,
        "answerLetter": "C"
      }
    ],
    "Money and Banking": [
      {
        "question": "Which of the following is considered the primary function of money?",
        "options": [
          "Store of value",
          "Medium of exchange",
          "Standard of deferred payments",
          "Transfer of value"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The difficulty of 'double coincidence of wants' is the main limitation of which of the following systems?",
        "options": [
          "Banking system",
          "Barter system",
          "Monetary system",
          "Central banking system"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which institution has the sole monopoly of note issue in India?",
        "options": [
          "State Bank of India",
          "Ministry of Finance",
          "Reserve Bank of India",
          "World Bank"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Demand deposits include:",
        "options": [
          "Saving account deposits and fixed deposits",
          "Current account deposits and saving account deposits",
          "Fixed deposits and recurring deposits",
          "Currency held by the public and demand deposits"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Commercial banks create money through the process of:",
        "options": [
          "Printing currency notes",
          "Accepting deposits and granting loans",
          "Fixing the repo rate",
          "Minting coins"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "If the Legal Reserve Ratio (LRR) is 20%, what will be the value of the money multiplier?",
        "options": [
          "2",
          "4",
          "5",
          "20"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following is a quantitative instrument of monetary policy?",
        "options": [
          "Margin requirements",
          "Moral suasion",
          "Open market operations",
          "Selective credit controls"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "An increase in the Repo Rate by the Central Bank will generally lead to:",
        "options": [
          "An increase in the cost of borrowing for commercial banks",
          "A decrease in the lending rates of commercial banks",
          "An increase in money creation by commercial banks",
          "No effect on credit creation"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "The rate at which the Central Bank borrows short-term funds from commercial banks is known as:",
        "options": [
          "Repo Rate",
          "Bank Rate",
          "Reverse Repo Rate",
          "Statutory Liquidity Ratio"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which component is NOT a part of the narrow money measure ($M\\_1$) in India?",
        "options": [
          "Currency with the public",
          "Demand deposits with commercial banks",
          "Other deposits with the Reserve Bank of India",
          "Net time deposits with commercial banks"
        ],
        "answer": 3,
        "answerLetter": "D"
      }
    ],
    "Determination of Income and Employment": [
      {
        "question": "Which of the following is a component of aggregate demand in a two-sector economy?",
        "options": [
          "Consumption and Investment",
          "Consumption, Investment, and Government expenditure",
          "Consumption, Investment, Government expenditure, and Net exports",
          "Investment and Net exports"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "The consumption function is expressed as $C = \\\\bar{C} + bY$. What does $\\\\bar{C}$ represent in this equation?",
        "options": [
          "Marginal propensity to consume",
          "Autonomous consumption",
          "Induced consumption",
          "Total income"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What can be the maximum value of the Marginal Propensity to Consume (MPC)?",
        "options": [
          "Infinity",
          "Zero",
          "One",
          "Greater than one"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What is the relationship between the Marginal Propensity to Consume (MPC) and the Marginal Propensity to Save (MPS)?",
        "options": [
          "$MPC + MPS = 1$",
          "$MPC - MPS = 1$",
          "$MPC \\\\times MPS = 1$",
          "$MPC = MPS$"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following indicates the correct formula for the Investment Multiplier ($k$) in terms of Marginal Propensity to Consume ($MPC$)?",
        "options": [
          "$k = \\\\frac{1}{1 - MPC}$",
          "$k = 1 - MPC$",
          "$k = \\\\frac{1}{MPC}$",
          "$k = \\\\frac{MPC}{1 - MPC}$"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "If the value of the Marginal Propensity to Save (MPS) is 0.2, what will be the value of the Investment Multiplier ($k$)?",
        "options": [
          "2",
          "5",
          "0.2",
          "10"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "In Keynesian theory, equilibrium level of income and employment is determined where:",
        "options": [
          "Aggregate Demand is equal to Aggregate Supply ($AD = AS$)",
          "Saving is equal to Investment ($S = I$)",
          "Both",
          "and (B)(D) Aggregate Demand is greater than Aggregate Supply ($AD > AS$)"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What situation arises when Aggregate Demand is greater than Aggregate Supply ($AD > AS$) corresponding to full employment in the economy?",
        "options": [
          "Deficient demand",
          "Excess demand and inflationary gap",
          "Underemployment equilibrium",
          "Involuntary unemployment"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is a monetary measure to control excess demand in an economy?",
        "options": [
          "Increase in government expenditure",
          "Reduction in taxes",
          "Increase in bank rate and repo rate",
          "Decrease in cash reserve ratio (CRR)"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Voluntary unemployment refers to a situation where people are:",
        "options": [
          "Willing to work at the existing wage rate but do not get work",
          "Not willing to work at the existing wage rate",
          "Unable to work due to physical disability",
          "Laid off due to technological advancement"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Government Budget and the Economy": [
      {
        "question": "Which of the following is a revenue receipt of the government?",
        "options": [
          "Recovery of loans",
          "Borrowings from abroad",
          "Dividends received from public sector undertakings",
          "Sale of government shares in a public enterprise"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The budget which shows that estimated receipts are equal to estimated expenditures is known as a:",
        "options": [
          "Surplus budget",
          "Deficit budget",
          "Balanced budget",
          "Progressive budget"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following expenditures is categorized as capital expenditure in the government budget?",
        "options": [
          "Payment of salaries to government employees",
          "Payment of interest on national debt",
          "Construction of a multi-purpose dam",
          "Subsidies given on LPG cylinders"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Fiscal deficit is defined as the excess of:",
        "options": [
          "Total expenditure over total receipts excluding borrowings",
          "Revenue expenditure over revenue receipts",
          "Total expenditure over total receipts including borrowings",
          "Capital expenditure over capital receipts"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following measures indicates the total borrowing requirements of the government from all sources?",
        "options": [
          "Revenue deficit",
          "Fiscal deficit",
          "Primary deficit",
          "Budgetary deficit"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Primary deficit is equal to:",
        "options": [
          "Fiscal deficit minus interest payments",
          "Total expenditure minus total receipts",
          "Revenue deficit minus capital expenditure",
          "Capital receipts minus revenue receipts"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Borrowings in the government budget are treated as:",
        "options": [
          "Revenue receipts",
          "Capital receipts",
          "Revenue expenditure",
          "Capital expenditure"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "A government budget is presented in parliament by the:",
        "options": [
          "Governor of the Reserve Bank of India",
          "Prime Minister of India",
          "Finance Minister of India",
          "Comptroller and Auditor General of India"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following objectives is the government primarily trying to achieve by using progressive taxation and welfare schemes through the budget?",
        "options": [
          "Reallocation of resources",
          "Economic growth",
          "Reduction of inequalities in income and wealth",
          "Managing public enterprises"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "If the primary deficit is zero and the fiscal deficit is equal to \u20b910,000 crores, then the interest payment is:",
        "options": [
          "\u20b90",
          "\u20b95,000 crores",
          "\u20b910,000 crores",
          "Cannot be determined"
        ],
        "answer": 2,
        "answerLetter": "C"
      }
    ],
    "Open-Economy Macroeconomics": [
      {
        "question": "Which of the following transactions is recorded in the current account of the Balance of Payments (BoP)?",
        "options": [
          "Import of machinery",
          "Borrowings from abroad",
          "Foreign Direct Investment (FDI) inflow",
          "Portfolio investment by foreign institutional investors"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Balance of Payments (BoP) is an economic statement that records transactions between:",
        "options": [
          "Residents of a country and the rest of the world",
          "The government and the central bank",
          "Public sector enterprises and private sector enterprises",
          "Domestic producers and domestic consumers"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following is a component of the capital account of the Balance of Payments?",
        "options": [
          "Export of goods",
          "Import of services",
          "Unilateral transfers (gifts and grants)",
          "Foreign Direct Investment (FDI)"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Autonomous items in the Balance of Payments refer to international economic transactions that are undertaken for:",
        "options": [
          "Profit maximization or independent economic motives",
          "Maintaining balance in the BoP account",
          "Compensating for deficits by the monetary authority",
          "Government interventions to stabilize exchange rates"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Accommodating transactions in the Balance of Payments are also known as:",
        "options": [
          "Above-the-line items",
          "Below-the-line items",
          "Current account items",
          "Autonomous capital items"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Under the fixed exchange rate system, who determines or manages the value of the domestic currency in terms of foreign currency?",
        "options": [
          "Market forces of demand and supply",
          "The central bank or government",
          "International Monetary Fund (IMF) alone",
          "Commercial banks"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What is a flexible (or floating) exchange rate system?",
        "options": [
          "A system where exchange rates are permanently fixed to gold",
          "A system where exchange rates are determined by the market forces of demand and supply",
          "A system where the central bank fixes the daily exchange rate",
          "A system with no foreign exchange market"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Managed floating exchange rate system is a system in which:",
        "options": [
          "The exchange rate is totally fixed by the government",
          "The central bank intervenes in the foreign exchange market to manage fluctuations without a fixed target",
          "Market forces are completely ignored",
          "Exchange rates are determined entirely by commercial banks"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What happens to the demand for foreign exchange when the domestic currency depreciates in value?",
        "options": [
          "Increases",
          "Decreases",
          "Remains unaffected",
          "First decreases then becomes zero"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "An increase in the foreign price of domestic goods, other things remaining constant, leads to:",
        "options": [
          "An increase in the demand for domestic exports",
          "A decrease in the demand for domestic exports",
          "No change in international trade",
          "An immediate revaluation of the domestic currency"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Indian Economy on the Eve of Independence": [
      {
        "question": "On the eve of independence, the economic condition of India was characterized by which of the following?",
        "options": [
          "Stagnant and backward economy",
          "Highly industrialised and developed economy",
          "Rapidly growing capitalist economy",
          "Self-sufficient and booming agrarian economy"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which sector was the primary source of livelihood for a majority of the Indian population on the eve of independence?",
        "options": [
          "Industrial sector",
          "Service sector",
          "Agricultural sector",
          "Foreign trade sector"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The main reason for the stagnation in agriculture during the British rule was:",
        "options": [
          "Introduction of modern technology",
          "Land settlement systems like the Zamindari system",
          "High investment by the colonial government",
          "Expansion of irrigation facilities"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "India's first official census of population was taken in which year?",
        "options": [
          "1881",
          "1901",
          "1921",
          "1951"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "The year 1921 is regarded in demographic history as the:",
        "options": [
          "Year of Great Depression",
          "Year of the Great Divide",
          "Year of Industrial Awakening",
          "Year of Demographic Stability"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "During the British colonial rule, the demographic profile showed:",
        "options": [
          "High overall literacy and high female literacy",
          "Low mortality rate and high life expectancy",
          "High birth rate and high mortality rate",
          "Low birth rate and high infant survival rate"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The primary motive behind the infrastructural development (such as railways) by the British in India was to:",
        "options": [
          "Provide cheap transport for the Indian people",
          "Subserve the colonial interests of Britain",
          "Modernize the Indian agricultural sector",
          "Promote indigenous industries in India"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following traditional Indian industries suffered a major setback due to British colonial policies?",
        "options": [
          "Information technology industry",
          "Handicraft industries",
          "Automobile manufacturing industry",
          "Electronics sector"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "On the eve of independence, India's foreign trade was characterized by:",
        "options": [
          "Export of manufactured goods and import of primary products",
          "Export of primary products like raw silk, cotton, and sugar, and import of finished consumer goods from Britain",
          "Equal trade balance with all European nations",
          "Restriction of trade exclusively with the USA"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What was the status of occupational structure on the eve of independence?",
        "options": [
          "The manufacturing sector accounted for the largest share of employment",
          "The agricultural sector accounted for the largest share of workforce, showing little change across states",
          "The service sector dominated total employment",
          "Employment was evenly distributed across all sectors"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Indian Economy (1950\u20131990)": [
      {
        "question": "On what type of economic system was India's five-year plan framework primarily based after independence?",
        "options": [
          "Capitalist economy",
          "Socialist economy",
          "Mixed economy",
          "Traditional economy"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Who is known as the architect of Indian planning?",
        "options": [
          "Jawaharlal Nehru",
          "P. C. Mahalanobis",
          "Dr. B. R. Ambedkar",
          "Sardar Vallabhbhai Patel"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which five-year plan explicitly set the goal of \"growth with equity and self-reliance\"?",
        "options": [
          "First Five Year Plan",
          "Second Five Year Plan",
          "Third Five Year Plan",
          "Fourth Five Year Plan"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "What was the primary objective of introducing land reforms in India after independence?",
        "options": [
          "To increase industrial production",
          "To remove intermediaries and transfer ownership to actual tillers",
          "To promote foreign trade",
          "To encourage large-scale corporate farming"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following refers to the substantial increase in agricultural productivity resulting from the introduction of high-yielding variety (HYV) seeds?",
        "options": [
          "White Revolution",
          "Blue Revolution",
          "Green Revolution",
          "Operation Flood"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "In the context of industrial policy, what was the main purpose of the Industrial Policy Resolution of 1956 (IPR 1956)?",
        "options": [
          "To abolish the public sector completely",
          "To classify industries into three categories and give the state a dominant role",
          "To promote privatization and globalization",
          "To restrict small-scale industries"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What was the role of the 1955 Karve Committee (Village and Small-Scale Industries Committee)?",
        "options": [
          "To study the feasibility of large steel plants",
          "To examine the possibility of using small-scale industries for promoting rural development",
          "To regulate foreign exchange reserves",
          "To formulate the Second Five Year Plan"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which trade strategy was predominantly followed by India during the period 1950\u20131990, aiming to protect domestic industries from foreign competition?",
        "options": [
          "Export promotion",
          "Import substitution",
          "Free trade policy",
          "Laissez-faire policy"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What was the primary instrument used by the government to protect domestic goods through import substitution?",
        "options": [
          "Tariffs and quotas",
          "Subsidies and tax holidays",
          "Foreign direct investment limits",
          "Export bounties"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following statements about the public sector's role during 1950\u20131990 is correct?",
        "options": [
          "It played a secondary role while private industrialists drove the economy.",
          "It was given a pivotal role in industrializing the economy because the private sector lacked capital.",
          "It was completely barred from core infrastructure industries.",
          "It focused exclusively on luxury consumer goods production."
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Liberalisation, Privatisation, and Globalisation: An Appraisal": [
      {
        "question": "In which year was the New Economic Policy (NEP) introduced in India?",
        "options": [
          "1980",
          "1985",
          "1991",
          "1995"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following international organizations forced India to adopt structural adjustment policies in 1991?",
        "options": [
          "World Health Organization (WHO)",
          "World Bank and International Monetary Fund (IMF)",
          "World Trade Organization (WTO)",
          "United Nations (UN)"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Removal of entry and growth restrictions on the private sector under the 1991 reforms is a key feature of:",
        "options": [
          "Privatisation",
          "Globalisation",
          "Liberalisation",
          "Nationalisation"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The process of transferring ownership, management, and control of public sector enterprises to the private sector is known as:",
        "options": [
          "Globalisation",
          "Liberalisation",
          "Privatisation",
          "Disinvestment"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "When the government sells a part of the equity of public sector undertakings (PSUs) to the private sector, it is called:",
        "options": [
          "Liberalisation",
          "Disinvestment",
          "Outsourcing",
          "Globalization"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Integrating the domestic economy with the world economy through the free flow of goods, services, technology, and capital is termed as:",
        "options": [
          "Privatisation",
          "Globalisation",
          "Liberalisation",
          "Demonetisation"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following was NOT a part of the stabilization measures introduced in 1991?",
        "options": [
          "Controlling inflation",
          "Maintaining sufficient foreign exchange reserves",
          "Improving operational efficiency of industries",
          "Correcting balance of payments deficit"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which organization was established in 1995 as the successor to the General Agreement on Tariffs and Trade (GATT)?",
        "options": [
          "World Bank",
          "International Monetary Fund",
          "World Trade Organization",
          "Reserve Bank of India"
        ],
        "answer": 2,
        "answerLetter": "C"
      }
    ],
    "Poverty": [
      {
        "question": "Growth without adequate generation of employment opportunities in India during the post-reform period is often referred to as:",
        "options": [
          "Jobless growth",
          "Inclusive growth",
          "Balanced growth",
          "Sustainable growth"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following is considered the primary indicator used to identify poverty in India traditionally?",
        "options": [
          "Level of education",
          "Minimum calorie intake / Nutritional requirement",
          "Access to housing",
          "Ownership of motor vehicles"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The concept of poverty line in India is measured in terms of:",
        "options": [
          "Per capita income only",
          "Monthly Per Capita Consumption Expenditure (MPCE)",
          "Total national savings",
          "Gross Domestic Product"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which organization is responsible for estimating poverty lines and poverty rates in India historically based on large sample surveys?",
        "options": [
          "Reserve Bank of India (RBI)",
          "NITI Aayog (via NSSO data)",
          "Ministry of Finance",
          "Securities and Exchange Board of India (SEBI)"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Who among the following pioneered the \"jail cost of living\" method to estimate poverty in pre-independence India?",
        "options": [
          "Dadabhai Naoroji",
          "Mahatma Gandhi",
          "B. R. Ambedkar",
          "Jawaharlal Nehru"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which category of poverty refers to people who are always poor and those who are usually poor (such as casual laborers)?",
        "options": [
          "Transient poor",
          "Churning poor",
          "Chronic poor",
          "Never poor"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following defines absolute poverty?",
        "options": [
          "Inequality in the distribution of income among people",
          "Inability to attain the minimum requirement of basic necessities of life",
          "Comparison of living standards between different countries",
          "Relative deprivation of the richest 10% of the population"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following poverty alleviation programs was introduced to provide guaranteed wage employment to rural households?",
        "options": [
          "Pradhan Mantri Jan Dhan Yojana",
          "Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)",
          "Mid-Day Meal Scheme",
          "Pradhan Mantri Ujjwala Yojana"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What is the main objective of self-employment programs like DAY-NRLM (Deendayal Antyodaya Yojana - National Rural Livelihoods Mission)?",
        "options": [
          "Providing free electricity to farmers",
          "Organizing rural poor into Self-Help Groups (SHGs) to facilitate micro-credit and skill development",
          "Constructing national highways",
          "Providing free higher education abroad"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is a major factor responsible for poverty in India?",
        "options": [
          "High rate of population growth",
          "Surplus capital accumulation",
          "Excessive employment opportunities in the formal sector",
          "Rapid technological advancement in agriculture benefiting all uniformly"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "The multidimensional poverty approach looks beyond income to include deprivations in which of the following core dimensions?",
        "options": [
          "Health, education, and standard of living",
          "Stock market investments and foreign exchange reserves",
          "Industrial output and defense expenditure",
          "Urbanization rate and tax revenue"
        ],
        "answer": 0,
        "answerLetter": "A"
      }
    ],
    "Human Capital Formation in India": [
      {
        "question": "Which of the following is considered as the main source of human capital in a country?",
        "options": [
          "Expenditure on machinery",
          "Expenditure on education",
          "Expenditure on stock market",
          "Expenditure on luxury cars"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following agencies regulates the formal sector of education in India?",
        "options": [
          "RBI",
          "SEBI",
          "NCERT and UGC",
          "FICCI"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following is not a source of human capital formation?",
        "options": [
          "Expenditure on migration",
          "Expenditure on health",
          "On-the-job training",
          "Accumulation of physical gold"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Investment in human capital yields return in the form of:",
        "options": [
          "Higher productivity and earnings",
          "Purchase of fixed assets",
          "Increase in bank deposits",
          "Reduction in personal savings"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following problems is generally faced during rural-to-urban migration?",
        "options": [
          "High surplus of agricultural jobs",
          "Unemployment and overcrowding in slums",
          "Elimination of poverty across the nation immediately",
          "Complete absence of transport costs"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Preventive medicine, curative medicine, and social medicine are various forms of expenditure on:",
        "options": [
          "Education",
          "Health",
          "Training",
          "Information"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following organizations was set up in India to coordinate skill development efforts across the country?",
        "options": [
          "National Skill Development Corporation (NSDC)",
          "Planning Commission",
          "Central Bureau of Investigation (CBI)",
          "Telecom Regulatory Authority of India (TRAI)"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "What is the primary difference between human capital and physical capital?",
        "options": [
          "Human capital is tangible, whereas physical capital is intangible",
          "Human capital is completely separable from its owner, while physical capital is not",
          "Human capital creates both private and social benefits, while physical capital creates only private benefits",
          "Human capital is intangible and embodied in the owner, while physical capital is tangible and separate from its owner"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Which of the following is a major indicator used to measure educational achievement in a population?",
        "options": [
          "Per capita income",
          "Adult literacy rate and youth literacy rate",
          "Foreign direct investment",
          "Infant mortality rate"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following factors acts as a major impediment to human capital formation in developing nations like India?",
        "options": [
          "High levels of poverty and regional disparities",
          "Excessively high levels of technological advancement",
          "Complete eradication of illiteracy",
          "Surplus availability of highly specialized infrastructure everywhere"
        ],
        "answer": 0,
        "answerLetter": "A"
      }
    ],
    "Rural Development": [
      {
        "question": "Which trade strategy was predominantly followed by India during the period 1950\u20131990, aiming to protect domestic industries from foreign competition?",
        "options": [
          "Export promotion",
          "Import substitution",
          "Free trade policy",
          "Laissez-faire policy"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What was the primary instrument used by the government to protect domestic goods through import substitution?",
        "options": [
          "Tariffs and quotas",
          "Subsidies and tax holidays",
          "Foreign direct investment limits",
          "Export bounties"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following statements about the public sector's role during 1950\u20131990 is correct?",
        "options": [
          "It played a secondary role while private industrialists drove the economy.",
          "It was given a pivotal role in industrializing the economy because the private sector lacked capital.",
          "It was completely barred from core infrastructure industries.",
          "It focused exclusively on luxury consumer goods production."
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "In which year was the New Economic Policy (NEP) introduced in India?",
        "options": [
          "1980",
          "1985",
          "1991",
          "1995"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following international organizations forced India to adopt structural adjustment policies in 1991?",
        "options": [
          "World Health Organization (WHO)",
          "World Bank and International Monetary Fund (IMF)",
          "World Trade Organization (WTO)",
          "United Nations (UN)"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Removal of entry and growth restrictions on the private sector under the 1991 reforms is a key feature of:",
        "options": [
          "Privatisation",
          "Globalisation",
          "Liberalisation",
          "Nationalisation"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The process of transferring ownership, management, and control of public sector enterprises to the private sector is known as:",
        "options": [
          "Globalisation",
          "Liberalisation",
          "Privatisation",
          "Disinvestment"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "When the government sells a part of the equity of public sector undertakings (PSUs) to the private sector, it is called:",
        "options": [
          "Liberalisation",
          "Disinvestment",
          "Outsourcing",
          "Globalization"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Integrating the domestic economy with the world economy through the free flow of goods, services, technology, and capital is termed as:",
        "options": [
          "Privatisation",
          "Globalisation",
          "Liberalisation",
          "Demonetisation"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following was NOT a part of the stabilization measures introduced in 1991?",
        "options": [
          "Controlling inflation",
          "Maintaining sufficient foreign exchange reserves",
          "Improving operational efficiency of industries",
          "Correcting balance of payments deficit"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which organization was established in 1995 as the successor to the General Agreement on Tariffs and Trade (GATT)?",
        "options": [
          "World Bank",
          "International Monetary Fund",
          "World Trade Organization",
          "Reserve Bank of India"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What is a major criticism of the economic reforms of 1991 regarding the agricultural sector?",
        "options": [
          "Rapid increase in food grain production",
          "Neglect of agriculture compared to industry and services",
          "Excessive subsidies given to small farmers",
          "Complete removal of rural poverty"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Growth without adequate generation of employment opportunities in India during the post-reform period is often referred to as:",
        "options": [
          "Jobless growth",
          "Inclusive growth",
          "Balanced growth",
          "Sustainable growth"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following is considered the primary indicator used to identify poverty in India traditionally?",
        "options": [
          "Level of education",
          "Minimum calorie intake / Nutritional requirement",
          "Access to housing",
          "Ownership of motor vehicles"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The concept of poverty line in India is measured in terms of:",
        "options": [
          "Per capita income only",
          "Monthly Per Capita Consumption Expenditure (MPCE)",
          "Total national savings",
          "Gross Domestic Product"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which organization is responsible for estimating poverty lines and poverty rates in India historically based on large sample surveys?",
        "options": [
          "Reserve Bank of India (RBI)",
          "NITI Aayog (via NSSO data)",
          "Ministry of Finance",
          "Securities and Exchange Board of India (SEBI)"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Who among the following pioneered the \"jail cost of living\" method to estimate poverty in pre-independence India?",
        "options": [
          "Dadabhai Naoroji",
          "Mahatma Gandhi",
          "B. R. Ambedkar",
          "Jawaharlal Nehru"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which category of poverty refers to people who are always poor and those who are usually poor (such as casual laborers)?",
        "options": [
          "Transient poor",
          "Churning poor",
          "Chronic poor",
          "Never poor"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following defines absolute poverty?",
        "options": [
          "Inequality in the distribution of income among people",
          "Inability to attain the minimum requirement of basic necessities of life",
          "Comparison of living standards between different countries",
          "Relative deprivation of the richest 10% of the population"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following poverty alleviation programs was introduced to provide guaranteed wage employment to rural households?",
        "options": [
          "Pradhan Mantri Jan Dhan Yojana",
          "Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)",
          "Mid-Day Meal Scheme",
          "Pradhan Mantri Ujjwala Yojana"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What is the main objective of self-employment programs like DAY-NRLM (Deendayal Antyodaya Yojana - National Rural Livelihoods Mission)?",
        "options": [
          "Providing free electricity to farmers",
          "Organizing rural poor into Self-Help Groups (SHGs) to facilitate micro-credit and skill development",
          "Constructing national highways",
          "Providing free higher education abroad"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is a major factor responsible for poverty in India?",
        "options": [
          "High rate of population growth",
          "Surplus capital accumulation",
          "Excessive employment opportunities in the formal sector",
          "Rapid technological advancement in agriculture benefiting all uniformly"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "The multidimensional poverty approach looks beyond income to include deprivations in which of the following core dimensions?",
        "options": [
          "Health, education, and standard of living",
          "Stock market investments and foreign exchange reserves",
          "Industrial output and defense expenditure",
          "Urbanization rate and tax revenue"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following is considered as the main source of human capital in a country?",
        "options": [
          "Expenditure on machinery",
          "Expenditure on education",
          "Expenditure on stock market",
          "Expenditure on luxury cars"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following agencies regulates the formal sector of education in India?",
        "options": [
          "RBI",
          "SEBI",
          "NCERT and UGC",
          "FICCI"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following is not a source of human capital formation?",
        "options": [
          "Expenditure on migration",
          "Expenditure on health",
          "On-the-job training",
          "Accumulation of physical gold"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Investment in human capital yields return in the form of:",
        "options": [
          "Higher productivity and earnings",
          "Purchase of fixed assets",
          "Increase in bank deposits",
          "Reduction in personal savings"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following problems is generally faced during rural-to-urban migration?",
        "options": [
          "High surplus of agricultural jobs",
          "Unemployment and overcrowding in slums",
          "Elimination of poverty across the nation immediately",
          "Complete absence of transport costs"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Preventive medicine, curative medicine, and social medicine are various forms of expenditure on:",
        "options": [
          "Education",
          "Health",
          "Training",
          "Information"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following organizations was set up in India to coordinate skill development efforts across the country?",
        "options": [
          "National Skill Development Corporation (NSDC)",
          "Planning Commission",
          "Central Bureau of Investigation (CBI)",
          "Telecom Regulatory Authority of India (TRAI)"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "What is the primary difference between human capital and physical capital?",
        "options": [
          "Human capital is tangible, whereas physical capital is intangible",
          "Human capital is completely separable from its owner, while physical capital is not",
          "Human capital creates both private and social benefits, while physical capital creates only private benefits",
          "Human capital is intangible and embodied in the owner, while physical capital is tangible and separate from its owner"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Which of the following is a major indicator used to measure educational achievement in a population?",
        "options": [
          "Per capita income",
          "Adult literacy rate and youth literacy rate",
          "Foreign direct investment",
          "Infant mortality rate"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following factors acts as a major impediment to human capital formation in developing nations like India?",
        "options": [
          "High levels of poverty and regional disparities",
          "Excessively high levels of technological advancement",
          "Complete eradication of illiteracy",
          "Surplus availability of highly specialized infrastructure everywhere"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following is considered the key instrument for rural development in developing countries?",
        "options": [
          "Urbanization",
          "Agriculture and allied activities",
          "Heavy industrialization",
          "Information technology sector"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Rural credit can be broadly classified into how many types based on the duration of the loan?",
        "options": [
          "Two types",
          "Three types",
          "Four types",
          "Five types"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which institution was set up in 1982 as an apex body to coordinate the activities of all institutions involved in the rural financing system?",
        "options": [
          "Reserve Bank of India (RBI)",
          "State Bank of India (SBI)",
          "National Bank for Agriculture and Rural Development (NABARD)",
          "Regional Rural Banks (RRBs)"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following is an institutional source of rural credit?",
        "options": [
          "Moneylenders",
          "Traders and commission agents",
          "Landlords",
          "Cooperative credit societies"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Which of the following is NOT a component of agricultural marketing?",
        "options": [
          "Gathering and processing of produce",
          "Grading and standardizing the produce",
          "Storage and warehousing of produce",
          "Import of foreign agricultural machinery"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "The cooperative marketing system has emerged to protect farmers from:",
        "options": [
          "High market prices",
          "Distress sale of crops",
          "Government taxation",
          "Crop failure due to weather"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Diversification of agricultural activities involves shifting of workforce to which of the following sectors?",
        "options": [
          "Heavy manufacturing industries exclusively",
          "Allied activities, non-farm employment, and livestock",
          "Urban service sectors only",
          "Real estate development"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Operation Flood, which led to the \"White Revolution\" in India, is related to the rapid growth of which sector?",
        "options": [
          "Crop farming",
          "Fisheries",
          "Milk and dairy production",
          "Horticulture"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which system of organic farming relies on crop rotation, green manure, compost, and biological pest control, avoiding synthetic fertilizers and pesticides?",
        "options": [
          "Chemical farming",
          "Sustainable organic farming",
          "Conventional high-input farming",
          "Genetic modification farming"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is a major advantage of organic farming for farmers?",
        "options": [
          "It requires higher initial chemical investment",
          "It offers healthy chemical-free food and improves soil health sustainably",
          "It eliminates the need for any water supply",
          "It guarantees immediate high yields without any crop management"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Employment: Growth, Informalisation and Other Issues": [
      {
        "question": "Which of the following refers to a person who is engaged in some productive activity and earns a living?",
        "options": [
          "Unemployed person",
          "Worker",
          "Employer only",
          "Dependent"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What is the primary reason why a large section of the Indian workforce is found in the informal sector?",
        "options": [
          "High educational qualification",
          "Lack of adequate formal sector employment opportunities",
          "High government regulation",
          "Preference for low wages"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following sectors is characterized by job security, regular income, and social security benefits?",
        "options": [
          "Informal sector",
          "Primary sector",
          "Formal sector",
          "Unorganized sector"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The process of moving from self-employment and regular salaried employment to casual wage labor is known as:",
        "options": [
          "Formalisation",
          "Casualisation of workforce",
          "Informalisation of workforce",
          "Globalisation"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which type of unemployment is commonly found in rural areas where more people are engaged in an activity than actually required?",
        "options": [
          "Educated unemployment",
          "Structural unemployment",
          "Disguised unemployment",
          "Open unemployment"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Jobless growth refers to a situation where:",
        "options": [
          "Gross Domestic Product grows, but employment opportunities do not increase at the same rate",
          "Employment increases, but GDP falls",
          "There is zero unemployment in the economy",
          "Only agricultural employment increases"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following is considered part of the informal sector enterprises?",
        "options": [
          "A government bank",
          "A public sector undertaking",
          "A registered factory employing 50 workers",
          "A roadside garment vendor or small workshop employing fewer than 10 workers"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Worker-population ratio is defined as:",
        "options": [
          "Total number of workers divided by total population",
          "Total population divided by total number of workers",
          "Total unemployed people divided by total labor force",
          "Total labor force divided by total population"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following measures has been initiated by the government to improve the conditions of the workforce?",
        "options": [
          "Providing social security measures for informal sector workers",
          "Promoting informalisation",
          "Encouraging child labor",
          "Reducing formal sector jobs"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "In India, the majority of the workforce is engaged in which of the following broad sectors?",
        "options": [
          "Secondary sector",
          "Tertiary sector",
          "Primary sector",
          "Quaternary sector"
        ],
        "answer": 2,
        "answerLetter": "C"
      }
    ],
    "Infrastructure": [
      {
        "question": "In which year was the New Economic Policy (NEP) introduced in India?",
        "options": [
          "1980",
          "1985",
          "1991",
          "1995"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following international organizations forced India to adopt structural adjustment policies in 1991?",
        "options": [
          "World Health Organization (WHO)",
          "World Bank and International Monetary Fund (IMF)",
          "World Trade Organization (WTO)",
          "United Nations (UN)"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Removal of entry and growth restrictions on the private sector under the 1991 reforms is a key feature of:",
        "options": [
          "Privatisation",
          "Globalisation",
          "Liberalisation",
          "Nationalisation"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The process of transferring ownership, management, and control of public sector enterprises to the private sector is known as:",
        "options": [
          "Globalisation",
          "Liberalisation",
          "Privatisation",
          "Disinvestment"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "When the government sells a part of the equity of public sector undertakings (PSUs) to the private sector, it is called:",
        "options": [
          "Liberalisation",
          "Disinvestment",
          "Outsourcing",
          "Globalization"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Integrating the domestic economy with the world economy through the free flow of goods, services, technology, and capital is termed as:",
        "options": [
          "Privatisation",
          "Globalisation",
          "Liberalisation",
          "Demonetisation"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following was NOT a part of the stabilization measures introduced in 1991?",
        "options": [
          "Controlling inflation",
          "Maintaining sufficient foreign exchange reserves",
          "Improving operational efficiency of industries",
          "Correcting balance of payments deficit"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which organization was established in 1995 as the successor to the General Agreement on Tariffs and Trade (GATT)?",
        "options": [
          "World Bank",
          "International Monetary Fund",
          "World Trade Organization",
          "Reserve Bank of India"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What is a major criticism of the economic reforms of 1991 regarding the agricultural sector?",
        "options": [
          "Rapid increase in food grain production",
          "Neglect of agriculture compared to industry and services",
          "Excessive subsidies given to small farmers",
          "Complete removal of rural poverty"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Growth without adequate generation of employment opportunities in India during the post-reform period is often referred to as:",
        "options": [
          "Jobless growth",
          "Inclusive growth",
          "Balanced growth",
          "Sustainable growth"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following is considered the primary indicator used to identify poverty in India traditionally?",
        "options": [
          "Level of education",
          "Minimum calorie intake / Nutritional requirement",
          "Access to housing",
          "Ownership of motor vehicles"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The concept of poverty line in India is measured in terms of:",
        "options": [
          "Per capita income only",
          "Monthly Per Capita Consumption Expenditure (MPCE)",
          "Total national savings",
          "Gross Domestic Product"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which organization is responsible for estimating poverty lines and poverty rates in India historically based on large sample surveys?",
        "options": [
          "Reserve Bank of India (RBI)",
          "NITI Aayog (via NSSO data)",
          "Ministry of Finance",
          "Securities and Exchange Board of India (SEBI)"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Who among the following pioneered the \"jail cost of living\" method to estimate poverty in pre-independence India?",
        "options": [
          "Dadabhai Naoroji",
          "Mahatma Gandhi",
          "B. R. Ambedkar",
          "Jawaharlal Nehru"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which category of poverty refers to people who are always poor and those who are usually poor (such as casual laborers)?",
        "options": [
          "Transient poor",
          "Churning poor",
          "Chronic poor",
          "Never poor"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following defines absolute poverty?",
        "options": [
          "Inequality in the distribution of income among people",
          "Inability to attain the minimum requirement of basic necessities of life",
          "Comparison of living standards between different countries",
          "Relative deprivation of the richest 10% of the population"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following poverty alleviation programs was introduced to provide guaranteed wage employment to rural households?",
        "options": [
          "Pradhan Mantri Jan Dhan Yojana",
          "Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA)",
          "Mid-Day Meal Scheme",
          "Pradhan Mantri Ujjwala Yojana"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What is the main objective of self-employment programs like DAY-NRLM (Deendayal Antyodaya Yojana - National Rural Livelihoods Mission)?",
        "options": [
          "Providing free electricity to farmers",
          "Organizing rural poor into Self-Help Groups (SHGs) to facilitate micro-credit and skill development",
          "Constructing national highways",
          "Providing free higher education abroad"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is a major factor responsible for poverty in India?",
        "options": [
          "High rate of population growth",
          "Surplus capital accumulation",
          "Excessive employment opportunities in the formal sector",
          "Rapid technological advancement in agriculture benefiting all uniformly"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "The multidimensional poverty approach looks beyond income to include deprivations in which of the following core dimensions?",
        "options": [
          "Health, education, and standard of living",
          "Stock market investments and foreign exchange reserves",
          "Industrial output and defense expenditure",
          "Urbanization rate and tax revenue"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following is considered as the main source of human capital in a country?",
        "options": [
          "Expenditure on machinery",
          "Expenditure on education",
          "Expenditure on stock market",
          "Expenditure on luxury cars"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following agencies regulates the formal sector of education in India?",
        "options": [
          "RBI",
          "SEBI",
          "NCERT and UGC",
          "FICCI"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following is not a source of human capital formation?",
        "options": [
          "Expenditure on migration",
          "Expenditure on health",
          "On-the-job training",
          "Accumulation of physical gold"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Investment in human capital yields return in the form of:",
        "options": [
          "Higher productivity and earnings",
          "Purchase of fixed assets",
          "Increase in bank deposits",
          "Reduction in personal savings"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following problems is generally faced during rural-to-urban migration?",
        "options": [
          "High surplus of agricultural jobs",
          "Unemployment and overcrowding in slums",
          "Elimination of poverty across the nation immediately",
          "Complete absence of transport costs"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Preventive medicine, curative medicine, and social medicine are various forms of expenditure on:",
        "options": [
          "Education",
          "Health",
          "Training",
          "Information"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following organizations was set up in India to coordinate skill development efforts across the country?",
        "options": [
          "National Skill Development Corporation (NSDC)",
          "Planning Commission",
          "Central Bureau of Investigation (CBI)",
          "Telecom Regulatory Authority of India (TRAI)"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "What is the primary difference between human capital and physical capital?",
        "options": [
          "Human capital is tangible, whereas physical capital is intangible",
          "Human capital is completely separable from its owner, while physical capital is not",
          "Human capital creates both private and social benefits, while physical capital creates only private benefits",
          "Human capital is intangible and embodied in the owner, while physical capital is tangible and separate from its owner"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Which of the following is a major indicator used to measure educational achievement in a population?",
        "options": [
          "Per capita income",
          "Adult literacy rate and youth literacy rate",
          "Foreign direct investment",
          "Infant mortality rate"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following factors acts as a major impediment to human capital formation in developing nations like India?",
        "options": [
          "High levels of poverty and regional disparities",
          "Excessively high levels of technological advancement",
          "Complete eradication of illiteracy",
          "Surplus availability of highly specialized infrastructure everywhere"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following is considered the key instrument for rural development in developing countries?",
        "options": [
          "Urbanization",
          "Agriculture and allied activities",
          "Heavy industrialization",
          "Information technology sector"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Rural credit can be broadly classified into how many types based on the duration of the loan?",
        "options": [
          "Two types",
          "Three types",
          "Four types",
          "Five types"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which institution was set up in 1982 as an apex body to coordinate the activities of all institutions involved in the rural financing system?",
        "options": [
          "Reserve Bank of India (RBI)",
          "State Bank of India (SBI)",
          "National Bank for Agriculture and Rural Development (NABARD)",
          "Regional Rural Banks (RRBs)"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following is an institutional source of rural credit?",
        "options": [
          "Moneylenders",
          "Traders and commission agents",
          "Landlords",
          "Cooperative credit societies"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Which of the following is NOT a component of agricultural marketing?",
        "options": [
          "Gathering and processing of produce",
          "Grading and standardizing the produce",
          "Storage and warehousing of produce",
          "Import of foreign agricultural machinery"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "The cooperative marketing system has emerged to protect farmers from:",
        "options": [
          "High market prices",
          "Distress sale of crops",
          "Government taxation",
          "Crop failure due to weather"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Diversification of agricultural activities involves shifting of workforce to which of the following sectors?",
        "options": [
          "Heavy manufacturing industries exclusively",
          "Allied activities, non-farm employment, and livestock",
          "Urban service sectors only",
          "Real estate development"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Operation Flood, which led to the \"White Revolution\" in India, is related to the rapid growth of which sector?",
        "options": [
          "Crop farming",
          "Fisheries",
          "Milk and dairy production",
          "Horticulture"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which system of organic farming relies on crop rotation, green manure, compost, and biological pest control, avoiding synthetic fertilizers and pesticides?",
        "options": [
          "Chemical farming",
          "Sustainable organic farming",
          "Conventional high-input farming",
          "Genetic modification farming"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is a major advantage of organic farming for farmers?",
        "options": [
          "It requires higher initial chemical investment",
          "It offers healthy chemical-free food and improves soil health sustainably",
          "It eliminates the need for any water supply",
          "It guarantees immediate high yields without any crop management"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following refers to a person who is engaged in some productive activity and earns a living?",
        "options": [
          "Unemployed person",
          "Worker",
          "Employer only",
          "Dependent"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What is the primary reason why a large section of the Indian workforce is found in the informal sector?",
        "options": [
          "High educational qualification",
          "Lack of adequate formal sector employment opportunities",
          "High government regulation",
          "Preference for low wages"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following sectors is characterized by job security, regular income, and social security benefits?",
        "options": [
          "Informal sector",
          "Primary sector",
          "Formal sector",
          "Unorganized sector"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The process of moving from self-employment and regular salaried employment to casual wage labor is known as:",
        "options": [
          "Formalisation",
          "Casualisation of workforce",
          "Informalisation of workforce",
          "Globalisation"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which type of unemployment is commonly found in rural areas where more people are engaged in an activity than actually required?",
        "options": [
          "Educated unemployment",
          "Structural unemployment",
          "Disguised unemployment",
          "Open unemployment"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Jobless growth refers to a situation where:",
        "options": [
          "Gross Domestic Product grows, but employment opportunities do not increase at the same rate",
          "Employment increases, but GDP falls",
          "There is zero unemployment in the economy",
          "Only agricultural employment increases"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following is considered part of the informal sector enterprises?",
        "options": [
          "A government bank",
          "A public sector undertaking",
          "A registered factory employing 50 workers",
          "A roadside garment vendor or small workshop employing fewer than 10 workers"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Worker-population ratio is defined as:",
        "options": [
          "Total number of workers divided by total population",
          "Total population divided by total number of workers",
          "Total unemployed people divided by total labor force",
          "Total labor force divided by total population"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following measures has been initiated by the government to improve the conditions of the workforce?",
        "options": [
          "Providing social security measures for informal sector workers",
          "Promoting informalisation",
          "Encouraging child labor",
          "Reducing formal sector jobs"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "In India, the majority of the workforce is engaged in which of the following broad sectors?",
        "options": [
          "Secondary sector",
          "Tertiary sector",
          "Primary sector",
          "Quaternary sector"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following is an example of economic infrastructure?",
        "options": [
          "Schools",
          "Hospitals",
          "Railways",
          "Parks"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Infrastructure that contributes indirectly to the production process by improving the quality of human capital is known as:",
        "options": [
          "Economic infrastructure",
          "Social infrastructure",
          "Physical infrastructure",
          "Commercial infrastructure"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following sectors is primarily responsible for generating commercial energy in India?",
        "options": [
          "Coal",
          "Petroleum",
          "Electricity",
          "Natural gas"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Transmission and distribution losses (T\\&D losses) and theft of electricity are major problems associated with which sector?",
        "options": [
          "Agriculture",
          "Power sector",
          "Transport sector",
          "Health sector"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which health care system component operates at the village level in rural India to provide primary healthcare services?",
        "options": [
          "Community Health Centre (CHC)",
          "Primary Health Centre (PHC)",
          "Sub-centre / Village Health Worker",
          "District Hospital"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following is considered a key indicator of the health status of a country?",
        "options": [
          "Literacy rate",
          "Infant Mortality Rate (IMR)",
          "Per capita income",
          "Unemployment rate"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Indian system of medicine includes AYUSH, which stands for Ayurveda, Yoga \\& Naturopathy, Unani, Siddha, and:",
        "options": [
          "Surgery",
          "Homeopathy",
          "Allopathy",
          "Pharmacology"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What is the primary role of infrastructure in an economy?",
        "options": [
          "To increase unemployment",
          "To facilitate economic growth and development",
          "To reduce international trade",
          "To decrease government expenditure"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is a non-commercial source of energy?",
        "options": [
          "Coal",
          "Electricity",
          "Firewood, dried dung, and agricultural waste",
          "Petroleum"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Participation of private sector in infrastructure development through Public-Private Partnership (PPP) models is primarily encouraged because:",
        "options": [
          "Government has surplus funds",
          "It brings efficiency, capital, and better management",
          "Private sector provides free services",
          "It eliminates taxes completely"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Environment and Sustainable Development": [
      {
        "question": "Which of the following is considered a function of the environment?",
        "options": [
          "Supplying resources",
          "Generating economic growth without resource limits",
          "Eliminating poverty",
          "Regulating the money supply"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "The two major environmental issues facing the world today are:",
        "options": [
          "Inflation and unemployment",
          "Waste generation and resource extraction",
          "Global warming and ozone depletion",
          "Industrialisation and urbanisation"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Carrying capacity of the environment implies that:",
        "options": [
          "Resource extraction is below the rate of resource regeneration",
          "Waste generation is greater than the absorption capacity",
          "Population growth has no impact on nature",
          "Pollution can be eliminated permanently"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following is an example of a renewable resource?",
        "options": [
          "Coal",
          "Petroleum",
          "Trees in a forest",
          "Natural gas"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Opportunity cost of exploiting the environment refers to:",
        "options": [
          "Financial cost of installing pollution control equipment",
          "Reduced environmental quality and future resource availability",
          "Direct tax levied on carbon emissions",
          "Cost of transporting raw materials"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Sustainable development is best defined as development that meets the needs of the present without compromising the ability of:",
        "options": [
          "Future generations to meet their own needs",
          "Developed nations to maintain high consumption",
          "Present industries to expand production rapidly",
          "Governments to collect taxes efficiently"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following strategies helps achieve sustainable development?",
        "options": [
          "Increasing the use of chemical fertilizers and pesticides",
          "Relying solely on thermal power plants for electricity",
          "Adopting organic farming and using renewable energy sources",
          "Encouraging massive urban migration"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Global warming is primarily caused by an increase in the concentration of which gas in the atmosphere?",
        "options": [
          "Oxygen",
          "Nitrogen",
          "Carbon dioxide",
          "Argon"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What is the primary cause of ozone depletion in the stratosphere?",
        "options": [
          "Carbon monoxide emissions from vehicles",
          "Chlorofluorocarbons (CFCs) used in refrigerators and aerosols",
          "Heavy industrial wastewater discharge",
          "Deforestation in tropical regions"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following traditional practices in India is environmentally friendly and promotes sustainable agriculture?",
        "options": [
          "Monoculture farming",
          "Use of high-yielding variety seeds with heavy chemical inputs",
          "Mixed cropping and organic manure usage",
          "Deep tube-well irrigation without crop rotation"
        ],
        "answer": 2,
        "answerLetter": "C"
      }
    ],
    "Comparative Development Experiences of India and its Neighbours": [
      {
        "question": "Which of the following countries initiated its economic reforms first?",
        "options": [
          "India",
          "China",
          "Pakistan",
          "Nepal"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "In which year were economic reforms introduced in China?",
        "options": [
          "1947",
          "1978",
          "1980",
          "1991"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Pakistan introduced its structural economic reforms in which year?",
        "options": [
          "1978",
          "1988",
          "1991",
          "2001"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Great Leap Forward (GLF) campaign aimed at industrializing the country on a massive scale was launched in:",
        "options": [
          "India",
          "China",
          "Pakistan",
          "Sri Lanka"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Commune system, where land was collectively cultivated, was a prominent feature of the economy of:",
        "options": [
          "India",
          "China",
          "Pakistan",
          "Bangladesh"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following countries has the highest population density among India and its neighbours?",
        "options": [
          "China",
          "India",
          "Pakistan",
          "Nepal"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "One-child norm policy was introduced in which country to control population growth?",
        "options": [
          "India",
          "Pakistan",
          "China",
          "Bangladesh"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following nations has registered the highest annual growth rate of Gross Domestic Product (GDP) over the last few decades?",
        "options": [
          "India",
          "China",
          "Pakistan",
          "Both India and Pakistan"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Human Development Index (HDI) is relatively high in which of the following neighbouring nations compared to India?",
        "options": [
          "Pakistan",
          "Sri Lanka",
          "Bangladesh",
          "Myanmar"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Liberty and regional stability issues, along with over-dependence on public sector and remittances, have significantly affected the economic growth of:",
        "options": [
          "China",
          "India",
          "Pakistan",
          "Japan"
        ],
        "answer": 2,
        "answerLetter": "C"
      }
    ]
  },
  "Accounts": {
    "Accounting for Partnership: Basic Concepts": [
      {
        "question": "Which of the following accounts is opened when capitals are fluctuating in a partnership firm?",
        "options": [
          "Current Account only",
          "Capital Account only",
          "Both Capital and Current Accounts",
          "Profit and Loss Adjustment Account"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "In the absence of a partnership deed, interest on a partner's loan is allowed at which of the following rates?",
        "options": [
          "5% per annum",
          "6% per annum",
          "8% per annum",
          "No interest is allowed"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following items is recorded on the debit side of the Profit and Loss Appropriation Account?",
        "options": [
          "Interest on partners' capitals",
          "Share of profit transferred to partners",
          "Interest on partners' drawings",
          "Net profit from Profit and Loss Account"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "In the absence of a partnership deed, profits and losses are shared by the partners:",
        "options": [
          "In the ratio of their capitals",
          "Equally",
          "In the ratio of time devoted",
          "According to the discretion of the senior partner"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Interest on drawings is charged from the partners because it:",
        "options": [
          "Increases the firm's profits",
          "Compensates the firm for the loss of use of funds",
          "Reduces the capital of the partners",
          "Is a statutory requirement under the Companies Act"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Under which method of maintaining capital accounts is the balance of the capital account expected to remain constant every year, barring permanent addition or withdrawal of capital?",
        "options": [
          "Fluctuating Capital Method",
          "Fixed Capital Method",
          "Current Account Method",
          "Floating Capital Method"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is an appropriation of profit rather than a charge against profit?",
        "options": [
          "Rent paid to a partner",
          "Interest on a partner's loan",
          "Salary payable to a partner",
          "Manager's commission"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "When partners' capital accounts are fixed, where is the share of profit credited?",
        "options": [
          "Partner's Capital Account",
          "Partner's Current Account",
          "Profit and Loss Account",
          "General Reserve Account"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Guarantee of minimum profit to a partner is given:",
        "options": [
          "Always by all the partners equally",
          "Always by the firm from its total revenue",
          "By one or more partners, or by all partners in a specified ratio",
          "Only by the government"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following accounts is prepared to distribute net profit among the partners?",
        "options": [
          "Profit and Loss Account",
          "Trading Account",
          "Profit and Loss Appropriation Account",
          "Balance Sheet"
        ],
        "answer": 2,
        "answerLetter": "C"
      }
    ],
    "Reconstitution of a Partnership Firm \u2013 Admission of a Partner": [
      {
        "question": "When a new partner is admitted into a partnership firm, it results in:",
        "options": [
          "Dissolution of the firm",
          "Dissolution of partnership",
          "Termination of business",
          "No change in agreement"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What is the formula to calculate the new profit-sharing ratio when a new partner is admitted?",
        "options": [
          "Old Ratio - Sacrificing Ratio",
          "Old Ratio + Sacrificing Ratio",
          "Sacrificing Ratio - Old Ratio",
          "New Ratio - Old Ratio"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Sacrificing ratio is calculated as:",
        "options": [
          "Old Ratio - New Ratio",
          "New Ratio - Old Ratio",
          "Old Ratio + New Ratio",
          "New Ratio + Old Ratio"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Goodwill brought in by a new partner in cash is distributed among the old partners in their:",
        "options": [
          "New profit-sharing ratio",
          "Capital ratio",
          "Sacrificing ratio",
          "Equal ratio"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "When a new partner brings their share of goodwill in cash, the account credited is:",
        "options": [
          "Goodwill Account",
          "New Partner's Capital Account",
          "Premium for Goodwill Account",
          "Old Partners' Capital Accounts"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Unrecorded assets appearing at the time of admission of a partner are:",
        "options": [
          "Debited to Revaluation Account",
          "Credited to Revaluation Account",
          "Debited to Old Partners' Capital Accounts",
          "Ignored completely"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "A gain (profit) on revaluation at the time of admission of a partner is transferred to the capital accounts of:",
        "options": [
          "All partners in the new profit-sharing ratio",
          "Old partners in the old profit-sharing ratio",
          "Only the new partner",
          "Old partners in the new profit-sharing ratio"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Accumulated profits and reserves existing in the balance sheet at the time of admission are transferred to:",
        "options": [
          "Old partners' capital accounts in old ratio",
          "All partners' capital accounts in new ratio",
          "Revaluation account",
          "Goodwill account"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "If a partner takes over an asset of the firm at the time of admission, which account is debited?",
        "options": [
          "Revaluation Account",
          "Partner's Capital Account",
          "Asset Account",
          "Cash Account"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "When a new partner is admitted, the general reserve appearing in the balance sheet is transferred to:",
        "options": [
          "Revaluation Account",
          "New Partner's Capital Account",
          "Old Partners' Capital Accounts in their old profit-sharing ratio",
          "All Partners' Capital Accounts in their new profit-sharing ratio"
        ],
        "answer": 2,
        "answerLetter": "C"
      }
    ],
    "Reconstitution of a Partnership Firm \u2013 Retirement/Death of a Partner": [
      {
        "question": "On the retirement of a partner, the accumulated profits and reserves appearing in the balance sheet are transferred to the capital accounts of:",
        "options": [
          "All partners in their profit-sharing ratio",
          "Remaining partners in their new profit-sharing ratio",
          "Only the retiring partner",
          "Remaining partners in their sacrificing ratio"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Gaining ratio is calculated as:",
        "options": [
          "New Profit Share - Old Profit Share",
          "Old Profit Share - New Profit Share",
          "Old Profit Share - Sacrificing Share",
          "New Profit Share + Old Profit Share"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "In the absence of any specific agreement, the new profit-sharing ratio of the remaining partners, when a partner retires, is:",
        "options": [
          "Equal to their old profit-sharing ratio",
          "Equal to their gaining ratio",
          "Equal to their sacrificing ratio",
          "In the reverse of their capital ratio"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "The amount payable to the retiring partner is first computed by taking into account their capital balance, share of goodwill, share of accumulated profits/losses, and share of revaluation profit/loss. This total amount due is transferred to the retiring partner's:",
        "options": [
          "Current Account",
          "Loan Account",
          "Bank Account",
          "General Reserve Account"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following accounts is prepared to record the increase or decrease in the value of assets and liabilities at the time of retirement or death of a partner?",
        "options": [
          "Realisation Account",
          "Revaluation Account",
          "Profit and Loss Adjustment Account",
          "Memorandum Revaluation Account"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "A profit on revaluation at the time of retirement of a partner is credited to the capital accounts of:",
        "options": [
          "All partners in their old profit-sharing ratio",
          "Remaining partners in their new profit-sharing ratio",
          "Only the retiring partner",
          "Remaining partners in their gaining ratio"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "How is the retiring partner's share of goodwill treated in the books of accounts?",
        "options": [
          "Debited to remaining partners' capital accounts in their gaining ratio and credited to the retiring partner's capital account",
          "Credited to remaining partners' capital accounts and debited to the retiring partner's capital account",
          "Debited to all partners' capital accounts in their old ratio",
          "Credited to the profit and loss account"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "When a deceased partner's share of profit up to the date of death is calculated on the basis of sales, it is usually estimated using:",
        "options": [
          "Previous year's profit and sales",
          "Capital ratio of the partners",
          "Average profit of the last five years only",
          "Total assets of the firm"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which account is debited when the share of profit of a deceased partner is calculated up to the date of death using the time/sales basis during the middle of an accounting year?",
        "options": [
          "Profit and Loss Suspense Account",
          "Profit and Loss Appropriation Account",
          "Revaluation Account",
          "General Reserve Account"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Total amount due to a deceased partner is finally paid to their:",
        "options": [
          "Legal representatives or executors",
          "Remaining partners equally",
          "Working partner only",
          "Nominated bank directly without any account transfer"
        ],
        "answer": 0,
        "answerLetter": "A"
      }
    ],
    "Dissolution of Partnership Firm": [
      {
        "question": "Dissolution of a partnership firm implies:",
        "options": [
          "Closure of the business of the firm",
          "Change in the profit-sharing ratio",
          "Admission of a new partner",
          "Retirement of a partner"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "On the dissolution of a firm, Realisation Account is prepared to:",
        "options": [
          "Ascertain net profit or net loss",
          "Find out the cash balance",
          "Close the books of accounts and find out profit or loss on realization of assets and settlement of liabilities",
          "Ascertain the capital of partners"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following accounts is prepared at the time of dissolution of a partnership firm?",
        "options": [
          "Revaluation Account",
          "Profit and Loss Appropriation Account",
          "Realisation Account",
          "Balance Sheet"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "In the event of dissolution, how is an unrecorded asset usually treated?",
        "options": [
          "Credited to Realisation Account",
          "Debited to Realisation Account",
          "Credited to Cash Account",
          "Ignored completely"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "When realization expenses are paid by the firm on behalf of a partner, which account is debited?",
        "options": [
          "Realisation Account",
          "Cash/Bank Account",
          "Partner\u2019s Capital Account",
          "Profit and Loss Account"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Unrecorded liabilities, when paid on dissolution, are:",
        "options": [
          "Debited to Realisation Account",
          "Credited to Realisation Account",
          "Debited to Cash Account",
          "Credited to Partner\u2019s Capital Account"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "In the absence of any specific agreement, the partners' liability for the debts of the firm upon dissolution is:",
        "options": [
          "Limited to their capital contribution",
          "Unlimited",
          "Restricted to current assets",
          "Zero"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What is the correct sequence of payment of liabilities on the dissolution of a firm as per the Indian Partnership Act?",
        "options": [
          "Partner\u2019s loan $\\\\rightarrow$ Outside liabilities $\\\\rightarrow$ Partner\u2019s capital",
          "Outside liabilities $\\\\rightarrow$ Partner\u2019s loan $\\\\rightarrow$ Partner\u2019s capital",
          "Partner\u2019s capital $\\\\rightarrow$ Partner\u2019s loan $\\\\rightarrow$ Outside liabilities",
          "Outside liabilities $\\\\rightarrow$ Partner\u2019s capital $\\\\rightarrow$ Partner\u2019s loan"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "If a partner agrees to take over the payment of a liability of the firm, which account is credited?",
        "options": [
          "Realisation Account",
          "Partner\u2019s Capital Account",
          "Cash Account",
          "Liability Account"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "After all external liabilities and partners' loans have been paid off, the remaining surplus of the realization proceeds is used first to pay back:",
        "options": [
          "General reserve",
          "Accumulated profits",
          "Partners' capitals",
          "Realisation expenses"
        ],
        "answer": 2,
        "answerLetter": "C"
      }
    ],
    "Accounting for Share Capital": [
      {
        "question": "What is the maximum amount of capital that a company is authorized to raise by its memorandum of association called?",
        "options": [
          "Issued Capital",
          "Subscribed Capital",
          "Authorized Capital",
          "Called-up Capital"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "When shares are forfeited, the Share Capital account is debited with:",
        "options": [
          "Paid-up amount",
          "Called-up amount",
          "Face value of shares",
          "Amount not paid on shares"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The balance of the Share Forfeited Account, after the re-issue of forfeited shares, is transferred to which of the following accounts?",
        "options": [
          "Profit and Loss Account",
          "General Reserve Account",
          "Capital Reserve Account",
          "Statement of Profit and Loss"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following is not a part of 'Shareholder's Funds' in the Balance Sheet of a company as per Schedule III?",
        "options": [
          "Share Capital",
          "Reserves and Surplus",
          "Money received against share warrants",
          "Long-term Borrowings"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Premium received on the issue of shares can be used for which of the following purposes under Section 52 of the Companies Act, 2013?",
        "options": [
          "Payment of cash dividend",
          "Writing off preliminary expenses",
          "Purchase of raw materials for production",
          "Payment of interest on loans"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "When shares are issued to promoters for services rendered by them, which account is debited?",
        "options": [
          "Share Capital Account",
          "Promoters Account",
          "Incorporation Cost / Goodwill Account",
          "Securities Premium Account"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Calls-in-Arrears is shown in the Balance Sheet of a company under which head?",
        "options": [
          "Added to Subscribed Capital",
          "Deducted from Subscribed Capital",
          "Current Liabilities",
          "Non-Current Assets"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "If a share of \u20b910 is issued at \u20b912, it is said to be issued at:",
        "options": [
          "Par",
          "Premium",
          "Discount",
          "Over-subscription"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Pro-rata allotment of shares means:",
        "options": [
          "Allotment of shares in full to all applicants",
          "Allotment of shares in proportion to the shares applied for",
          "Rejection of all applications",
          "Allotment of shares only to directors"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which type of preference shares have the right to receive arrears of dividend out of future profits before any dividend is paid on equity shares?",
        "options": [
          "Non-cumulative Preference Shares",
          "Cumulative Preference Shares",
          "Redeemable Preference Shares",
          "Participating Preference Shares"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Issue and Redemption of Debentures": [
      {
        "question": "When debentures are issued at par and redeemable at premium, the loss on issue of debentures is debited to:",
        "options": [
          "Statement of Profit and Loss",
          "Loss on Issue of Debentures Account",
          "Premium on Redemption of Debentures Account",
          "Debentures Account"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Premium on redemption of debentures is a:",
        "options": [
          "Real Account",
          "Personal Account",
          "Nominal Account",
          "Asset Account"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Debentures that do not carry any charge or security on the assets of the company are called:",
        "options": [
          "Secured debentures",
          "Registered debentures",
          "Unsecured debentures",
          "Redeemable debentures"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Under the Companies Act, 2013, what is the minimum percentage of Debenture Redemption Reserve (DRR) required to be created out of profits available for dividend before the redemption of debentures commences for non-banking financial companies (NBFCs) registered with RBI and HFCs?",
        "options": [
          "25%",
          "10%",
          "50%",
          "Nil"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "When debentures are issued as collateral security, the entry for recording the issue of collateral security is:",
        "options": [
          "Debit Bank A/c and Credit Debentures A/c",
          "Debit Debenture Suspense A/c and Credit Percentage Debentures A/c",
          "No entry is passed in the books of accounts",
          "Debit Loss on Issue of Debentures A/c and Credit Debentures A/c"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Premium received on the issue of debentures can be utilized for which of the following purposes?",
        "options": [
          "Writing off discount on issue of shares or debentures",
          "Payment of dividend",
          "Purchase of fixed assets",
          "Meeting day-to-day operating expenses"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "What is the minimum percentage of the nominal (face) value of debentures maturing during the year that must be invested in specified securities on or before 30th April of that year for Debenture Redemption Investment (DRI)?",
        "options": [
          "10%",
          "15%",
          "25%",
          "50%"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Loss on issue of debentures is classified in the Balance Sheet under which head?",
        "options": [
          "Other Non-Current Assets",
          "Other Current Assets",
          "Long-term Borrowings",
          "Reserves and Surplus"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "When debentures are purchased from the open market for immediate cancellation, the profit on redemption/cancellation of debentures is transferred to:",
        "options": [
          "General Reserve",
          "Capital Reserve",
          "Statement of Profit and Loss",
          "Debenture Redemption Reserve"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "If a company issues 1,000 debentures of \u20b9100 each at a discount of 10%, redeemable at par after 5 years, the total amount of discount on issue of debentures to be written off is:",
        "options": [
          "\u20b91,000",
          "\u20b910,000",
          "\u20b91,00,000",
          "\u20b911,000"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Financial Statements of a Company": [
      {
        "question": "Under which major heading and sub-heading in the Balance Sheet of a company (as per Schedule III, Part I of the Companies Act, 2013) is \"Securities Premium Reserve\" shown?",
        "options": [
          "Non-Current Liabilities, Long-term Borrowings",
          "Current Liabilities, Short-term Provisions",
          "Shareholders' Funds, Reserves and Surplus",
          "Non-Current Assets, Other Non-Current Assets"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following is a sub-heading under the major heading \"Non-Current Assets\" in the Balance Sheet of a company?",
        "options": [
          "Inventories",
          "Trade Receivables",
          "Property, Plant and Equipment and Intangible Assets",
          "Cash and Cash Equivalents"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Under which major head and sub-head is \"Calls-in-Advance\" shown in a company's Balance Sheet?",
        "options": [
          "Shareholders' Funds, Share Capital",
          "Current Liabilities, Other Current Liabilities",
          "Non-Current Liabilities, Long-term Borrowings",
          "Current Liabilities, Short-term Borrowings"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "\"Long-term Borrowings\" includes which of the following items?",
        "options": [
          "Bank Overdraft",
          "Debentures",
          "Trade Payables",
          "Unpaid Dividend"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following items is shown under the head \"Current Assets\" as \"Cash and Cash Equivalents\"?",
        "options": [
          "Prepaid Expenses",
          "Bank Balance",
          "Bills Receivable",
          "Loose Tools"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "In the Statement of Profit and Loss of a company, \"Interest Earned\" is recorded under which main heading?",
        "options": [
          "Revenue from Operations",
          "Other Income",
          "Expenses",
          "Extraordinary Items"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is an example of \"Other Expenses\" in the Statement of Profit and Loss?",
        "options": [
          "Cost of materials consumed",
          "Depreciation",
          "Rent and Rates",
          "Interest on borrowings"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Loose Tools and Stores and Spares are classified under which sub-head of \"Current Assets\" in a company's Balance Sheet?",
        "options": [
          "Trade Receivables",
          "Inventories",
          "Other Current Assets",
          "Short-term Loans and Advances"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What is the objective of preparing financial statements of a company?",
        "options": [
          "To ascertain the tax liability",
          "To provide true and fair financial position and operating results to users",
          "To calculate individual employee salaries",
          "To manage daily cash operations"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is a tool or technique of financial statement analysis?",
        "options": [
          "Trial Balance",
          "Comparative Statements",
          "Ledger Accounts",
          "Cash Book"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Analysis of Financial Statements": [
      {
        "question": "Which of the following is considered the primary objective of Analysis of Financial Statements?",
        "options": [
          "To calculate the exact tax liability of the enterprise",
          "To assess the financial health, earning capacity, and operational efficiency of the business",
          "To determine the market value of the company's shares on a daily basis",
          "To manage the daily warehouse inventory levels"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is a limitation of Financial Statement Analysis?",
        "options": [
          "It provides information about past performance",
          "It ignores price level changes (inflation)",
          "It is affected by personal bias and window dressing",
          "All of the above"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Which tool of financial analysis involves the presentation of financial statements for a number of years side by side to facilitate comparison?",
        "options": [
          "Comparative Statements",
          "Common-size Statements",
          "Ratio Analysis",
          "Cash Flow Statement"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "In a Comparative Balance Sheet, the absolute change in each item is calculated by taking the difference between:",
        "options": [
          "Previous year's figure and Current year's figure",
          "Current year's figure and Previous year's figure",
          "Base year's figure and Average figure",
          "Highest figure and Lowest figure"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "In a Common-size Statement of Profit and Loss, each item of revenue and expense is expressed as a percentage of which of the following?",
        "options": [
          "Total Assets",
          "Net Profit",
          "Revenue from Operations (Net Sales)",
          "Cost of Revenue from Operations"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "In a Common-size Balance Sheet, Total Assets are assumed to be equal to:",
        "options": [
          "50",
          "100",
          "500",
          "1000"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following parties is generally most interested in analyzing the long-term solvency and liquidity of an enterprise?",
        "options": [
          "Short-term suppliers and trade creditors",
          "Long-term lenders, debenture holders, and financial institutions",
          "Internal audit staff",
          "Daily wage workers"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Under the Revised Schedule III of the Indian Companies Act, 2013, how are the assets in the Balance Sheet of a company classified?",
        "options": [
          "Fixed Assets and Current Assets",
          "Tangible Assets and Intangible Assets",
          "Non-Current Assets and Current Assets",
          "Liquid Assets and Fictitious Assets"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following statements is true regarding trend analysis?",
        "options": [
          "It requires financial data for only a single accounting year",
          "It helps in observing the direction of change (upward or downward) over a period of several years",
          "It is identical to common-size statement analysis",
          "It can only be applied to the Statement of Profit and Loss and never to the Balance Sheet"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is considered an external user of financial statements?",
        "options": [
          "Board of Directors",
          "Managing Director",
          "Potential Investors",
          "Plant Managers"
        ],
        "answer": 2,
        "answerLetter": "C"
      }
    ],
    "Accounting Ratios": [
      {
        "question": "Which of the following is considered a liquidity ratio?",
        "options": [
          "Debt-Equity Ratio",
          "Current Ratio",
          "Proprietary Ratio",
          "Interest Coverage Ratio"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The ideal Current Ratio for a business enterprise is generally considered to be:",
        "options": [
          "1 : 1",
          "2 : 1",
          "3 : 1",
          "0.5 : 1"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Quick Ratio is also known as:",
        "options": [
          "Solvency Ratio",
          "Acid Test Ratio",
          "Operating Ratio",
          "Turnover Ratio"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following assets is excluded while calculating the Quick Ratio from Current Assets?",
        "options": [
          "Trade Receivables",
          "Marketable Securities",
          "Prepaid Expenses",
          "Cash and Cash Equivalents"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Debt-Equity Ratio measures the relationship between long-term debt and:",
        "options": [
          "Total Assets",
          "Current Assets",
          "Shareholders' Funds",
          "Working Capital"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following ratios indicates the proportion of total assets financed by long-term debt?",
        "options": [
          "Proprietary Ratio",
          "Debt to Capital Employed Ratio",
          "Total Assets to Debt Ratio",
          "Debt to Total Assets Ratio"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Inventory Turnover Ratio is an example of which type of ratio?",
        "options": [
          "Liquidity Ratio",
          "Solvency Ratio",
          "Activity (Turnover) Ratio",
          "Profitability Ratio"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Operating Ratio is calculated by dividing Operating Cost by:",
        "options": [
          "Net Sales (Revenue from Operations)",
          "Cost of Revenue from Operations",
          "Gross Profit",
          "Total Assets"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following is a profitability ratio expressed in percentage?",
        "options": [
          "Inventory Turnover Ratio",
          "Net Profit Ratio",
          "Quick Ratio",
          "Debt-Equity Ratio"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "If the Gross Profit Ratio of a company is 25%, what will be the Cost of Revenue from Operations if Revenue from Operations is \u20b94,00,000?",
        "options": [
          "\u20b91,00,000",
          "\u20b92,00,000",
          "\u20b93,00,000",
          "\u20b94,00,000"
        ],
        "answer": 2,
        "answerLetter": "C"
      }
    ],
    "Cash Flow Statement": [
      {
        "question": "In a Comparative Balance Sheet, the absolute change in each item is calculated by taking the difference between:",
        "options": [
          "Previous year's figure and Current year's figure",
          "Current year's figure and Previous year's figure",
          "Base year's figure and Average figure",
          "Highest figure and Lowest figure"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "In a Common-size Statement of Profit and Loss, each item of revenue and expense is expressed as a percentage of which of the following?",
        "options": [
          "Total Assets",
          "Net Profit",
          "Revenue from Operations (Net Sales)",
          "Cost of Revenue from Operations"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "In a Common-size Balance Sheet, Total Assets are assumed to be equal to:",
        "options": [
          "50",
          "100",
          "500",
          "1000"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following parties is generally most interested in analyzing the long-term solvency and liquidity of an enterprise?",
        "options": [
          "Short-term suppliers and trade creditors",
          "Long-term lenders, debenture holders, and financial institutions",
          "Internal audit staff",
          "Daily wage workers"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Under the Revised Schedule III of the Indian Companies Act, 2013, how are the assets in the Balance Sheet of a company classified?",
        "options": [
          "Fixed Assets and Current Assets",
          "Tangible Assets and Intangible Assets",
          "Non-Current Assets and Current Assets",
          "Liquid Assets and Fictitious Assets"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following statements is true regarding trend analysis?",
        "options": [
          "It requires financial data for only a single accounting year",
          "It helps in observing the direction of change (upward or downward) over a period of several years",
          "It is identical to common-size statement analysis",
          "It can only be applied to the Statement of Profit and Loss and never to the Balance Sheet"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is considered an external user of financial statements?",
        "options": [
          "Board of Directors",
          "Managing Director",
          "Potential Investors",
          "Plant Managers"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following is considered a liquidity ratio?",
        "options": [
          "Debt-Equity Ratio",
          "Current Ratio",
          "Proprietary Ratio",
          "Interest Coverage Ratio"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The ideal Current Ratio for a business enterprise is generally considered to be:",
        "options": [
          "1 : 1",
          "2 : 1",
          "3 : 1",
          "0.5 : 1"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Quick Ratio is also known as:",
        "options": [
          "Solvency Ratio",
          "Acid Test Ratio",
          "Operating Ratio",
          "Turnover Ratio"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following assets is excluded while calculating the Quick Ratio from Current Assets?",
        "options": [
          "Trade Receivables",
          "Marketable Securities",
          "Prepaid Expenses",
          "Cash and Cash Equivalents"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Debt-Equity Ratio measures the relationship between long-term debt and:",
        "options": [
          "Total Assets",
          "Current Assets",
          "Shareholders' Funds",
          "Working Capital"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following ratios indicates the proportion of total assets financed by long-term debt?",
        "options": [
          "Proprietary Ratio",
          "Debt to Capital Employed Ratio",
          "Total Assets to Debt Ratio",
          "Debt to Total Assets Ratio"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Inventory Turnover Ratio is an example of which type of ratio?",
        "options": [
          "Liquidity Ratio",
          "Solvency Ratio",
          "Activity (Turnover) Ratio",
          "Profitability Ratio"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Operating Ratio is calculated by dividing Operating Cost by:",
        "options": [
          "Net Sales (Revenue from Operations)",
          "Cost of Revenue from Operations",
          "Gross Profit",
          "Total Assets"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following is a profitability ratio expressed in percentage?",
        "options": [
          "Inventory Turnover Ratio",
          "Net Profit Ratio",
          "Quick Ratio",
          "Debt-Equity Ratio"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "If the Gross Profit Ratio of a company is 25%, what will be the Cost of Revenue from Operations if Revenue from Operations is \u20b94,00,000?",
        "options": [
          "\u20b91,00,000",
          "\u20b92,00,000",
          "\u20b93,00,000",
          "\u20b94,00,000"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following is considered an operating activity for a manufacturing enterprise?",
        "options": [
          "Issue of equity shares",
          "Payment of dividend",
          "Purchase of machinery",
          "Cash received from trade receivables"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "According to AS-3 (Revised), Cash Flow Statement is mandatory for which of the following?",
        "options": [
          "Listed companies only",
          "All companies",
          "Enterprises covered under small and medium-sized enterprises (SMEs)",
          "Partnership firms only"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following transactions is classified under Investing Activities?",
        "options": [
          "Payment of wages",
          "Sale of patent",
          "Repayment of long-term borrowings",
          "Issue of debentures"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "In the preparation of a Cash Flow Statement, which of the following is treated as a Financing Activity?",
        "options": [
          "Purchase of goodwill",
          "Interest paid on debentures",
          "Dividend received",
          "Decrease in inventory"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following represents a non-cash item that is added back to Net Profit while calculating Cash Flow from Operating Activities?",
        "options": [
          "Interest received",
          "Gain on sale of machinery",
          "Depreciation",
          "Dividend received"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "An increase in the balance of Trade Payables during the accounting period is:",
        "options": [
          "Added to operating profit before working capital changes",
          "Subtracted from operating profit before working capital changes",
          "Treated as an investing outflow",
          "Ignored completely"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following items is included in Cash and Cash Equivalents?",
        "options": [
          "Bank overdraft",
          "Short-term investments highly liquid in nature",
          "Trade receivables",
          "Long-term investments"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "While computing operating profit before working capital changes, a transfer to General Reserve is:",
        "options": [
          "Subtracted from net profit",
          "Added back to net profit",
          "Ignored",
          "Subtracted from cash flow from financing activities"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Payment of income tax is classified under which activity in a Cash Flow Statement?",
        "options": [
          "Operating activities",
          "Investing activities",
          "Financing activities",
          "Cash and cash equivalents"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following is an example of cash outflow from financing activities?",
        "options": [
          "Issue of shares for cash",
          "Redemption of debentures",
          "Purchase of marketable securities",
          "Raising a short-term bank loan"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ]
  },
  "Business studies": {
    "Nature and Significance of Management": [
      {
        "question": "Which of the following is not a characteristic of management?",
        "options": [
          "Management is a goal-oriented process",
          "Management is all pervasive",
          "Management is a rigid process",
          "Management is a dynamic function"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Management is considered to be a series of continuous, interrelated functions. Which of the following is not included among them?",
        "options": [
          "Planning",
          "Organising",
          "Cooperating",
          "Controlling"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which level of management is responsible for the overall welfare and organizational goals of the enterprise?",
        "options": [
          "Operational management",
          "Middle-level management",
          "Top-level management",
          "Supervisory management"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Coordination is considered as the \"essence of management\" because:",
        "options": [
          "It is the first function of management",
          "It binds all other functions together to achieve common organizational goals",
          "It is performed only by top-level managers",
          "It is an optional activity in non-business organizations"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Efficiency is primarily concerned with:",
        "options": [
          "Doing the right task",
          "Doing things correctly with minimum cost",
          "Achieving targets at any cost",
          "Satisfying customer needs"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following features of a profession is fully present in management?",
        "options": [
          "Well-defined body of knowledge",
          "Restricted entry",
          "Professional association",
          "Ethical code of conduct"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Sales department, purchase department, and production department are under the control of which level of management?",
        "options": [
          "Top-level management",
          "Middle-level management",
          "Supervisory management",
          "Operational management"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Management ensures that the available resources are used in the best possible manner to achieve objectives. This refers to:",
        "options": [
          "Management as an art",
          "Management of operations",
          "Management of people",
          "Management of goals"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "\"Management is as old as civilization.\" Which characteristic of management does this statement highlight?",
        "options": [
          "Management is a continuous process",
          "Management is a dynamic function",
          "Management is a continuous and pervasive activity",
          "Management is a social process"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which function of management acts as the bridge between top-level management and operational-level workers?",
        "options": [
          "Controlling",
          "Middle-level management",
          "Staffing",
          "Directing"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Principles of Management": [
      {
        "question": "Who is known as the 'Father of Scientific Management'?",
        "options": [
          "Henri Fayol",
          "F.W. Taylor",
          "Peter Drucker",
          "Max Weber"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following principles of management given by Henri Fayol states that a subordinate should receive orders from and be accountable to only one superior?",
        "options": [
          "Division of Work",
          "Unity of Direction",
          "Unity of Command",
          "Order"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Management principles are flexible rather than absolute principles because:",
        "options": [
          "They deal with human behavior",
          "They are applied in laboratories",
          "They are permanent and unchanging",
          "They have no practical application"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "According to Taylor's scientific technique 'Standardisation and Simplification of Work', standardisation refers to:",
        "options": [
          "Setting up strict punishments for workers",
          "Keeping variety of products to a minimum",
          "Establishing benchmark standards for output, time, and working conditions",
          "Increasing the number of product lines"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which principle of management emphasizes that \"employee turnover should be minimized to maintain organizational efficiency\"?",
        "options": [
          "Stability of Personnel",
          "Remuneration of Employees",
          "Esprit de Corps",
          "Equity"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following techniques of scientific management is an extension of the principle of division of work and specialization to the shop floor?",
        "options": [
          "Time Study",
          "Functional Foremanship",
          "Motion Study",
          "Differential Piece Wage System"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which principle of Fayol highlights that management should promote a team spirit of unity and harmony among employees (using 'We' instead of 'I')?",
        "options": [
          "Centralisation and Decentralisation",
          "Initiative",
          "Esprit de Corps",
          "Subordination of Individual Interest to General Interest"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What does the study of 'Motion Study' primarily involve?",
        "options": [
          "Determining the standard time taken to perform a well-defined job",
          "Eliminating unnecessary and wasteful movements of workers and machines",
          "Minimizing the cost of production through material control",
          "Determining a fair day's work for employees"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which characteristic of management principles states that they are applicable to all types of organizations (business as well as non-business, small as well as large)?",
        "options": [
          "Universal applicability",
          "General guidelines",
          "Contingent",
          "Formed by practice and experimentation"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "According to Taylor's differential piece wage system, efficient workers are paid at a higher rate because:",
        "options": [
          "It reduces the total wage bill of the company",
          "It rewards high performance and incentivizes inefficient workers to improve",
          "It is a government regulation for all factories",
          "It prevents labor unions from striking"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Business Environment": [
      {
        "question": "Which of the following does not characterize the business environment?",
        "options": [
          "Uncertainty",
          "Employees",
          "Relativity",
          "Complexity"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The trend of increasing health consciousness among consumers, leading to a demand for organic food and gym memberships, is an example of which dimension of the business environment?",
        "options": [
          "Technological environment",
          "Political environment",
          "Social environment",
          "Legal environment"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Passage of customs duty regulations or orders issued by government tribunals are examples of which dimension of the business environment?",
        "options": [
          "Economic environment",
          "Legal environment",
          "Political environment",
          "Social environment"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is a feature of the economic environment in India?",
        "options": [
          "Public recognition of business values",
          "Rates of saving and investment",
          "Political stability",
          "Traditions and customs"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which economic reform policy introduced in India aimed at reducing the role of the public sector and giving greater space to the private sector?",
        "options": [
          "Globalization",
          "Privatization",
          "Liberalization",
          "Demonetization"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following terms refers to the integration of the domestic economy with the world economy?",
        "options": [
          "Privatization",
          "Liberalization",
          "Globalization",
          "Nationalization"
        ],
        "answer": 2,
        "answerLetter": "C"
      }
    ],
    "Planning": [],
    "Organising": [
      {
        "question": "Which level of management is responsible for the overall welfare and organizational goals of the enterprise?",
        "options": [
          "Operational management",
          "Middle-level management",
          "Top-level management",
          "Supervisory management"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Coordination is considered as the \"essence of management\" because:",
        "options": [
          "It is the first function of management",
          "It binds all other functions together to achieve common organizational goals",
          "It is performed only by top-level managers",
          "It is an optional activity in non-business organizations"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Efficiency is primarily concerned with:",
        "options": [
          "Doing the right task",
          "Doing things correctly with minimum cost",
          "Achieving targets at any cost",
          "Satisfying customer needs"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following features of a profession is fully present in management?",
        "options": [
          "Well-defined body of knowledge",
          "Restricted entry",
          "Professional association",
          "Ethical code of conduct"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Sales department, purchase department, and production department are under the control of which level of management?",
        "options": [
          "Top-level management",
          "Middle-level management",
          "Supervisory management",
          "Operational management"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Management ensures that the available resources are used in the best possible manner to achieve objectives. This refers to:",
        "options": [
          "Management as an art",
          "Management of operations",
          "Management of people",
          "Management of goals"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "\"Management is as old as civilization.\" Which characteristic of management does this statement highlight?",
        "options": [
          "Management is a continuous process",
          "Management is a dynamic function",
          "Management is a continuous and pervasive activity",
          "Management is a social process"
        ],
        "answer": 2,
        "answerLetter": "C"
      }
    ],
    "Staffing": [],
    "Directing": [
      {
        "question": "Who is known as the 'Father of Scientific Management'?",
        "options": [
          "Henri Fayol",
          "F.W. Taylor",
          "Peter Drucker",
          "Max Weber"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following principles of management given by Henri Fayol states that a subordinate should receive orders from and be accountable to only one superior?",
        "options": [
          "Division of Work",
          "Unity of Direction",
          "Unity of Command",
          "Order"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Management principles are flexible rather than absolute principles because:",
        "options": [
          "They deal with human behavior",
          "They are applied in laboratories",
          "They are permanent and unchanging",
          "They have no practical application"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "According to Taylor's scientific technique 'Standardisation and Simplification of Work', standardisation refers to:",
        "options": [
          "Setting up strict punishments for workers",
          "Keeping variety of products to a minimum",
          "Establishing benchmark standards for output, time, and working conditions",
          "Increasing the number of product lines"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which principle of management emphasizes that \"employee turnover should be minimized to maintain organizational efficiency\"?",
        "options": [
          "Stability of Personnel",
          "Remuneration of Employees",
          "Esprit de Corps",
          "Equity"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following techniques of scientific management is an extension of the principle of division of work and specialization to the shop floor?",
        "options": [
          "Time Study",
          "Functional Foremanship",
          "Motion Study",
          "Differential Piece Wage System"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which principle of Fayol highlights that management should promote a team spirit of unity and harmony among employees (using 'We' instead of 'I')?",
        "options": [
          "Centralisation and Decentralisation",
          "Initiative",
          "Esprit de Corps",
          "Subordination of Individual Interest to General Interest"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What does the study of 'Motion Study' primarily involve?",
        "options": [
          "Determining the standard time taken to perform a well-defined job",
          "Eliminating unnecessary and wasteful movements of workers and machines",
          "Minimizing the cost of production through material control",
          "Determining a fair day's work for employees"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which characteristic of management principles states that they are applicable to all types of organizations (business as well as non-business, small as well as large)?",
        "options": [
          "Universal applicability",
          "General guidelines",
          "Contingent",
          "Formed by practice and experimentation"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "According to Taylor's differential piece wage system, efficient workers are paid at a higher rate because:",
        "options": [
          "It reduces the total wage bill of the company",
          "It rewards high performance and incentivizes inefficient workers to improve",
          "It is a government regulation for all factories",
          "It prevents labor unions from striking"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following does not characterize the business environment?",
        "options": [
          "Uncertainty",
          "Employees",
          "Relativity",
          "Complexity"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The trend of increasing health consciousness among consumers, leading to a demand for organic food and gym memberships, is an example of which dimension of the business environment?",
        "options": [
          "Technological environment",
          "Political environment",
          "Social environment",
          "Legal environment"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Passage of customs duty regulations or orders issued by government tribunals are examples of which dimension of the business environment?",
        "options": [
          "Economic environment",
          "Legal environment",
          "Political environment",
          "Social environment"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is a feature of the economic environment in India?",
        "options": [
          "Public recognition of business values",
          "Rates of saving and investment",
          "Political stability",
          "Traditions and customs"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which economic reform policy introduced in India aimed at reducing the role of the public sector and giving greater space to the private sector?",
        "options": [
          "Globalization",
          "Privatization",
          "Liberalization",
          "Demonetization"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following terms refers to the integration of the domestic economy with the world economy?",
        "options": [
          "Privatization",
          "Liberalization",
          "Globalization",
          "Nationalization"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Freeing the Indian business and industry from unnecessary government controls and restrictions is known as:",
        "options": [
          "Privatization",
          "Liberalization",
          "Globalization",
          "Planning"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Understanding of the business environment enables the firm to identify opportunities and get the:",
        "options": [
          "First mover advantage",
          "Financial backing",
          "Tax exemption",
          "Monopolistic control"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following best indicates the importance of business environment for a enterprise?",
        "options": [
          "It helps in copying competitor strategies",
          "It helps in tapping useful resources",
          "It ensures guaranteed high profits",
          "It completely eliminates business risks"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Technological improvements and innovations resulting in new methods of producing goods and services are part of which environment?",
        "options": [
          "Technological environment",
          "Legal environment",
          "Political environment",
          "Economic environment"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following is the first step in the planning process?",
        "options": [
          "Identifying alternative courses of action",
          "Setting objectives",
          "Evaluating alternative courses",
          "Selecting an alternative"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Planning is a continuous process because:",
        "options": [
          "Business environment is static",
          "Business environment keeps changing",
          "It ensures smooth operations only for short term",
          "It eliminates all risks completely"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which feature of planning highlights that planning is required at all levels of management, though its scope may differ?",
        "options": [
          "Planning is futuristic",
          "Planning is continuous",
          "Planning is pervasive",
          "Planning involves decision making"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "A specific statement that informs what is to be done, leaving no scope for any discretion or flexibility, is called a:",
        "options": [
          "Policy",
          "Procedure",
          "Rule",
          "Strategy"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which type of plan prescribes the exact chronological steps for handling future activities?",
        "options": [
          "Method",
          "Procedure",
          "Rule",
          "Objective"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which limitation of planning suggests that employees may not be able to change or alter plans once formulated, leading to rigidity?",
        "options": [
          "Planning leads to rigidity",
          "Planning reduces creativity",
          "Planning cannot foresee dynamic changes",
          "Planning is a time-consuming process"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "What is the primary purpose of setting objectives in the planning process?",
        "options": [
          "To evaluate performance",
          "To define where the organization wants to reach",
          "To list down the steps of production",
          "To reduce financial costs"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following plans provides a broad outline of an organization's direction in response to the business environment and competitor actions?",
        "options": [
          "Budget",
          "Strategy",
          "Policy",
          "Rule"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "A financial plan expressed in numerical terms for a future period is known as a:",
        "options": [
          "Policy",
          "Procedure",
          "Budget",
          "Objective"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following is the final step in the planning process?",
        "options": [
          "Evaluating alternative courses",
          "Selecting an alternative",
          "Implementing the plan",
          "Follow-up action"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Which of the following is the first step in the process of organising?",
        "options": [
          "Departmentalisation",
          "Identification and division of work",
          "Assignment of duties",
          "Establishing reporting relationships"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Grouping of activities on the basis of functions (such as production, purchase, marketing, etc.) leads to the formation of which type of structure?",
        "options": [
          "Divisional structure",
          "Informal organisation",
          "Functional structure",
          "Matrix structure"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which type of organisational structure is most suitable for a multi-product enterprise manufacturing diverse lines of products?",
        "options": [
          "Functional structure",
          "Divisional structure",
          "Informal organisation",
          "Centralised structure"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The delegation of authority primarily flows from:",
        "options": [
          "Subordinate to superior",
          "Superior to subordinate",
          "Peer to peer",
          "Horizontal direction"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is NOT an element of delegation?",
        "options": [
          "Authority",
          "Responsibility",
          "Accountability",
          "Informal grouping"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "\"Responsibility cannot be entirely delegated.\" Which key principle regarding responsibility does this statement reflect?",
        "options": [
          "Principle of Authority",
          "Principle of Accountability",
          "Principle of Span of Management",
          "Principle of Centralisation"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Decentralisation refers to:",
        "options": [
          "Retention of decision-making authority at the top level",
          "Systematic dispersal of authority at all levels of management",
          "Complete elimination of middle management",
          "Transfer of responsibility without authority"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following networks emerges spontaneously as a result of social interactions among employees?",
        "options": [
          "Formal organisation",
          "Functional structure",
          "Divisional structure",
          "Informal organisation"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Span of management refers to:",
        "options": [
          "The total number of levels in an organisation",
          "The number of subordinates that can be effectively managed by a superior",
          "The geographic area covered by a business branch",
          "The time duration required to complete a project"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following statements best differentiates between delegation and decentralisation?",
        "options": [
          "Delegation is optional, whereas decentralisation is compulsory.",
          "Delegation is an extension of decentralisation.",
          "Delegation means passing authority from one superior to one subordinate, whereas decentralisation is a policy decision that extends throughout the organisation.",
          "Delegation deals with informal groups, whereas decentralisation deals with formal groups."
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following is the first step in the staffing process?",
        "options": [
          "Estimation of manpower requirements",
          "Recruitment",
          "Selection",
          "Placement and orientation"
        ],
        "answer": 0,
        "answerLetter": "A"
      }
    ],
    "Controlling": [
      {
        "question": "Which level of management is responsible for the overall welfare and organizational goals of the enterprise?",
        "options": [
          "Operational management",
          "Middle-level management",
          "Top-level management",
          "Supervisory management"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Coordination is considered as the \"essence of management\" because:",
        "options": [
          "It is the first function of management",
          "It binds all other functions together to achieve common organizational goals",
          "It is performed only by top-level managers",
          "It is an optional activity in non-business organizations"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Efficiency is primarily concerned with:",
        "options": [
          "Doing the right task",
          "Doing things correctly with minimum cost",
          "Achieving targets at any cost",
          "Satisfying customer needs"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following features of a profession is fully present in management?",
        "options": [
          "Well-defined body of knowledge",
          "Restricted entry",
          "Professional association",
          "Ethical code of conduct"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Sales department, purchase department, and production department are under the control of which level of management?",
        "options": [
          "Top-level management",
          "Middle-level management",
          "Supervisory management",
          "Operational management"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Management ensures that the available resources are used in the best possible manner to achieve objectives. This refers to:",
        "options": [
          "Management as an art",
          "Management of operations",
          "Management of people",
          "Management of goals"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "\"Management is as old as civilization.\" Which characteristic of management does this statement highlight?",
        "options": [
          "Management is a continuous process",
          "Management is a dynamic function",
          "Management is a continuous and pervasive activity",
          "Management is a social process"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which function of management acts as the bridge between top-level management and operational-level workers?",
        "options": [
          "Controlling",
          "Middle-level management",
          "Staffing",
          "Directing"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Who is known as the 'Father of Scientific Management'?",
        "options": [
          "Henri Fayol",
          "F.W. Taylor",
          "Peter Drucker",
          "Max Weber"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following principles of management given by Henri Fayol states that a subordinate should receive orders from and be accountable to only one superior?",
        "options": [
          "Division of Work",
          "Unity of Direction",
          "Unity of Command",
          "Order"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Management principles are flexible rather than absolute principles because:",
        "options": [
          "They deal with human behavior",
          "They are applied in laboratories",
          "They are permanent and unchanging",
          "They have no practical application"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "According to Taylor's scientific technique 'Standardisation and Simplification of Work', standardisation refers to:",
        "options": [
          "Setting up strict punishments for workers",
          "Keeping variety of products to a minimum",
          "Establishing benchmark standards for output, time, and working conditions",
          "Increasing the number of product lines"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which principle of management emphasizes that \"employee turnover should be minimized to maintain organizational efficiency\"?",
        "options": [
          "Stability of Personnel",
          "Remuneration of Employees",
          "Esprit de Corps",
          "Equity"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following techniques of scientific management is an extension of the principle of division of work and specialization to the shop floor?",
        "options": [
          "Time Study",
          "Functional Foremanship",
          "Motion Study",
          "Differential Piece Wage System"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which principle of Fayol highlights that management should promote a team spirit of unity and harmony among employees (using 'We' instead of 'I')?",
        "options": [
          "Centralisation and Decentralisation",
          "Initiative",
          "Esprit de Corps",
          "Subordination of Individual Interest to General Interest"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What does the study of 'Motion Study' primarily involve?",
        "options": [
          "Determining the standard time taken to perform a well-defined job",
          "Eliminating unnecessary and wasteful movements of workers and machines",
          "Minimizing the cost of production through material control",
          "Determining a fair day's work for employees"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which characteristic of management principles states that they are applicable to all types of organizations (business as well as non-business, small as well as large)?",
        "options": [
          "Universal applicability",
          "General guidelines",
          "Contingent",
          "Formed by practice and experimentation"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "According to Taylor's differential piece wage system, efficient workers are paid at a higher rate because:",
        "options": [
          "It reduces the total wage bill of the company",
          "It rewards high performance and incentivizes inefficient workers to improve",
          "It is a government regulation for all factories",
          "It prevents labor unions from striking"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following does not characterize the business environment?",
        "options": [
          "Uncertainty",
          "Employees",
          "Relativity",
          "Complexity"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The trend of increasing health consciousness among consumers, leading to a demand for organic food and gym memberships, is an example of which dimension of the business environment?",
        "options": [
          "Technological environment",
          "Political environment",
          "Social environment",
          "Legal environment"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Passage of customs duty regulations or orders issued by government tribunals are examples of which dimension of the business environment?",
        "options": [
          "Economic environment",
          "Legal environment",
          "Political environment",
          "Social environment"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is a feature of the economic environment in India?",
        "options": [
          "Public recognition of business values",
          "Rates of saving and investment",
          "Political stability",
          "Traditions and customs"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which economic reform policy introduced in India aimed at reducing the role of the public sector and giving greater space to the private sector?",
        "options": [
          "Globalization",
          "Privatization",
          "Liberalization",
          "Demonetization"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following terms refers to the integration of the domestic economy with the world economy?",
        "options": [
          "Privatization",
          "Liberalization",
          "Globalization",
          "Nationalization"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Freeing the Indian business and industry from unnecessary government controls and restrictions is known as:",
        "options": [
          "Privatization",
          "Liberalization",
          "Globalization",
          "Planning"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Understanding of the business environment enables the firm to identify opportunities and get the:",
        "options": [
          "First mover advantage",
          "Financial backing",
          "Tax exemption",
          "Monopolistic control"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following best indicates the importance of business environment for a enterprise?",
        "options": [
          "It helps in copying competitor strategies",
          "It helps in tapping useful resources",
          "It ensures guaranteed high profits",
          "It completely eliminates business risks"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Technological improvements and innovations resulting in new methods of producing goods and services are part of which environment?",
        "options": [
          "Technological environment",
          "Legal environment",
          "Political environment",
          "Economic environment"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following is the first step in the planning process?",
        "options": [
          "Identifying alternative courses of action",
          "Setting objectives",
          "Evaluating alternative courses",
          "Selecting an alternative"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Planning is a continuous process because:",
        "options": [
          "Business environment is static",
          "Business environment keeps changing",
          "It ensures smooth operations only for short term",
          "It eliminates all risks completely"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which feature of planning highlights that planning is required at all levels of management, though its scope may differ?",
        "options": [
          "Planning is futuristic",
          "Planning is continuous",
          "Planning is pervasive",
          "Planning involves decision making"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "A specific statement that informs what is to be done, leaving no scope for any discretion or flexibility, is called a:",
        "options": [
          "Policy",
          "Procedure",
          "Rule",
          "Strategy"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which type of plan prescribes the exact chronological steps for handling future activities?",
        "options": [
          "Method",
          "Procedure",
          "Rule",
          "Objective"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which limitation of planning suggests that employees may not be able to change or alter plans once formulated, leading to rigidity?",
        "options": [
          "Planning leads to rigidity",
          "Planning reduces creativity",
          "Planning cannot foresee dynamic changes",
          "Planning is a time-consuming process"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "What is the primary purpose of setting objectives in the planning process?",
        "options": [
          "To evaluate performance",
          "To define where the organization wants to reach",
          "To list down the steps of production",
          "To reduce financial costs"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following plans provides a broad outline of an organization's direction in response to the business environment and competitor actions?",
        "options": [
          "Budget",
          "Strategy",
          "Policy",
          "Rule"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "A financial plan expressed in numerical terms for a future period is known as a:",
        "options": [
          "Policy",
          "Procedure",
          "Budget",
          "Objective"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following is the final step in the planning process?",
        "options": [
          "Evaluating alternative courses",
          "Selecting an alternative",
          "Implementing the plan",
          "Follow-up action"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Which of the following is the first step in the process of organising?",
        "options": [
          "Departmentalisation",
          "Identification and division of work",
          "Assignment of duties",
          "Establishing reporting relationships"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Grouping of activities on the basis of functions (such as production, purchase, marketing, etc.) leads to the formation of which type of structure?",
        "options": [
          "Divisional structure",
          "Informal organisation",
          "Functional structure",
          "Matrix structure"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which type of organisational structure is most suitable for a multi-product enterprise manufacturing diverse lines of products?",
        "options": [
          "Functional structure",
          "Divisional structure",
          "Informal organisation",
          "Centralised structure"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The delegation of authority primarily flows from:",
        "options": [
          "Subordinate to superior",
          "Superior to subordinate",
          "Peer to peer",
          "Horizontal direction"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is NOT an element of delegation?",
        "options": [
          "Authority",
          "Responsibility",
          "Accountability",
          "Informal grouping"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "\"Responsibility cannot be entirely delegated.\" Which key principle regarding responsibility does this statement reflect?",
        "options": [
          "Principle of Authority",
          "Principle of Accountability",
          "Principle of Span of Management",
          "Principle of Centralisation"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Decentralisation refers to:",
        "options": [
          "Retention of decision-making authority at the top level",
          "Systematic dispersal of authority at all levels of management",
          "Complete elimination of middle management",
          "Transfer of responsibility without authority"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following networks emerges spontaneously as a result of social interactions among employees?",
        "options": [
          "Formal organisation",
          "Functional structure",
          "Divisional structure",
          "Informal organisation"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Span of management refers to:",
        "options": [
          "The total number of levels in an organisation",
          "The number of subordinates that can be effectively managed by a superior",
          "The geographic area covered by a business branch",
          "The time duration required to complete a project"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following statements best differentiates between delegation and decentralisation?",
        "options": [
          "Delegation is optional, whereas decentralisation is compulsory.",
          "Delegation is an extension of decentralisation.",
          "Delegation means passing authority from one superior to one subordinate, whereas decentralisation is a policy decision that extends throughout the organisation.",
          "Delegation deals with informal groups, whereas decentralisation deals with formal groups."
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following is the first step in the staffing process?",
        "options": [
          "Estimation of manpower requirements",
          "Recruitment",
          "Selection",
          "Placement and orientation"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Staffing is considered a part of which management function?",
        "options": [
          "Planning",
          "Directing",
          "Human Resource Management (HRM)",
          "Controlling"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Estimating manpower requirements involves analyzing which of the following?",
        "options": [
          "Workload analysis only",
          "Workforce analysis only",
          "Both workload and workforce analysis",
          "Financial budget analysis"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The process of searching for prospective employees and stimulating them to apply for jobs in an organization is known as:",
        "options": [
          "Selection",
          "Recruitment",
          "Training",
          "Placement"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is an internal source of recruitment?",
        "options": [
          "Advertisement",
          "Employment Exchange",
          "Transfer",
          "Campus recruitment"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following is a disadvantage of using internal sources of recruitment?",
        "options": [
          "It is less expensive",
          "It improves employee morale",
          "It leads to inbreeding and restricts new blood",
          "It simplifies the selection process"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Direct recruitment, placement agencies, and advertisements are examples of which source of recruitment?",
        "options": [
          "Internal sources",
          "External sources",
          "Informal sources",
          "Promotional sources"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The process of choosing the best candidate from among the pool of applicants is called:",
        "options": [
          "Recruitment",
          "Selection",
          "Training",
          "Orientation"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "A test that measures an individual's potential for learning new skills is known as a:",
        "options": [
          "Trade test",
          "Aptitude test",
          "Intelligence test",
          "Personality test"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following refers to the learning process that increases the skill of an employee for doing a particular job?",
        "options": [
          "Education",
          "Development",
          "Training",
          "Selection"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following is not an element of directing?",
        "options": [
          "Supervision",
          "Communication",
          "Delegation",
          "Motivation"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Directing takes place at which level of management?",
        "options": [
          "Top level only",
          "Middle level only",
          "Supervisory level only",
          "Every level of management"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "The process of converting a message into communication symbols is known as:",
        "options": [
          "Encoding",
          "Decoding",
          "Feedback",
          "Media"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which need in Maslow\u2019s Need Hierarchy Theory refers to the desire to become what one is capable of becoming?",
        "options": [
          "Safety need",
          "Esteem need",
          "Self-actualisation need",
          "Belonging need"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following is a financial incentive?",
        "options": [
          "Status",
          "Bonus",
          "Job security",
          "Employee participation"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "An autocratic leadership style is one in which the leader:",
        "options": [
          "Centrelises decision-making power",
          "Decentralises decision-making power",
          "Takes decisions in consultation with subordinates",
          "Avoids using authority"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Informal communication is also referred to as:",
        "options": [
          "Grapevine",
          "Scalar chain",
          "Official communication",
          "Vertical communication"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Semantic barriers to communication are related to:",
        "options": [
          "Psychological state of the receiver",
          "Problems and obstructions in the encoding and decoding of messages",
          "Rules and regulations of the organisation",
          "Personal factors of the sender or receiver"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following leadership styles is based on the use of authority and is best suited for quick decision-making?",
        "options": [
          "Democratic leadership",
          "Laissez-faire leadership",
          "Autocratic leadership",
          "Participative leadership"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Directing is described as a continuous process because:",
        "options": [
          "It happens only at the time of starting a business",
          "It takes place throughout the life of an organisation irrespective of changes in management",
          "It ends once the targets are achieved",
          "It is performed only by the top executives"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following functions of management involves measuring performance against standards and taking corrective actions?",
        "options": [
          "Planning",
          "Organizing",
          "Controlling",
          "Directing"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Controlling is a process that is:",
        "options": [
          "Backward-looking only",
          "Forward-looking only",
          "Both backward-looking and forward-looking",
          "Neither backward-looking nor forward-looking"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which step in the controlling process involves comparing actual performance with the established standards?",
        "options": [
          "Setting performance standards",
          "Measurement of actual performance",
          "Analyzing deviations",
          "Taking corrective action"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The principle of management control which states that \"an attempt to control everything results in controlling nothing\" is known as:",
        "options": [
          "Critical point control",
          "Management by exception",
          "Span of management",
          "Delegation of authority"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Key Result Areas (KRAs) are identified under which concept of controlling?",
        "options": [
          "Management by exception",
          "Critical point control",
          "Corrective action",
          "Zero-base budgeting"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is a quantitative standard used for measuring performance?",
        "options": [
          "Goodwill of the firm",
          "Employee morale",
          "Sales volume",
          "Industrial relations"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Deviations that are considered insignificant and can be ignored are handled through:",
        "options": [
          "Critical point control",
          "Management by exception",
          "Comparative analysis",
          "Benchmarking"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is the final step in the controlling process?",
        "options": [
          "Measurement of actual performance",
          "Analyzing deviations",
          "Taking corrective action",
          "Setting standards"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Controlling is considered to be a:",
        "options": [
          "Pervasive function",
          "One-time activity",
          "Non-economic activity",
          "Lower-level management function only"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "How does controlling help an organization in terms of resources?",
        "options": [
          "It wastes resources",
          "It ensures efficient use of resources",
          "It increases the cost of production",
          "It limits resource utilization"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Financial Management": [
      {
        "question": "Which of the following is considered as the primary objective of financial management?",
        "options": [
          "Maximization of profit",
          "Maximization of wealth of shareholders",
          "Ensuring availability of cash",
          "Minimization of cost of production"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Financial planning generally involves the estimation of:",
        "options": [
          "Only capital requirements",
          "Only sources of funds",
          "Both capital requirements and sources of funds",
          "Only net profits"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following refers to the long-term investment decision of a business?",
        "options": [
          "Dividend decision",
          "Capital budgeting decision",
          "Financing decision",
          "Working capital decision"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The decision regarding how much profit should be retained in the business and how much should be distributed as dividends is known as:",
        "options": [
          "Capital budgeting decision",
          "Financing decision",
          "Dividend decision",
          "Investment decision"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Financial leverage is said to be favorable when:",
        "options": [
          "Return on Investment is lower than the cost of debt",
          "Return on Investment is higher than the cost of debt",
          "Cost of debt is equal to Return on Investment",
          "Interest rate is very high"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following sources of finance involves fixed financial charges?",
        "options": [
          "Equity shares",
          "Retained earnings",
          "Debentures",
          "Preference shares with variable dividend"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Working capital refers to:",
        "options": [
          "Fixed assets minus current liabilities",
          "Excess of current assets over current liabilities",
          "Total assets minus total liabilities",
          "Share capital plus reserves"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following factors affects the working capital requirement of a business?",
        "options": [
          "Nature of business",
          "Scale of operations",
          "Business cycle",
          "All of the above"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "A trading concern (like a retail shop) generally requires:",
        "options": [
          "More fixed capital and less working capital",
          "Less fixed capital and more working capital",
          "Equal amounts of fixed and working capital",
          "No working capital"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Debt service coverage ratio (DSCR) is used to determine:",
        "options": [
          "Profitability of the firm",
          "Liquidity position of the firm",
          "Ability of the firm to meet its fixed financial obligations (interest and repayment)",
          "Efficiency of inventory management"
        ],
        "answer": 2,
        "answerLetter": "C"
      }
    ],
    "Financial Markets": [
      {
        "question": "Which of the following is not a function of a financial market?",
        "options": [
          "Mobilisation of savings",
          "Price discovery",
          "Providing liquidity to financial assets",
          "Formulation of monetary policy"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Capital market consists of which of the following?",
        "options": [
          "Development banks",
          "Commercial banks",
          "Stock exchange",
          "All of the above"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Which market deals in short-term, high-quality, liquid debt instruments?",
        "options": [
          "Capital market",
          "Money market",
          "Primary market",
          "Secondary market"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Treasury bills are issued by the Reserve Bank of India on behalf of the Central Government to meet short-term requirements of funds. What is the minimum amount for which T-bills are issued?",
        "options": [
          "Rs. 10,000",
          "Rs. 25,000",
          "Rs. 50,000",
          "Rs. 1,00,000"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following instruments is also known as zero-coupon bonds?",
        "options": [
          "Commercial Paper",
          "Treasury Bill",
          "Call Money",
          "Certificate of Deposit"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "A short-term, unsecured promissory note issued by large and creditworthy companies to raise short-term funds is known as:",
        "options": [
          "Commercial Bill",
          "Certificate of Deposit",
          "Commercial Paper",
          "Treasury Bill"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which market is also known as the new issue market where securities are sold for the first time?",
        "options": [
          "Secondary market",
          "Primary market",
          "Money market",
          "Spot market"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following methods of floatation in the primary market involves issuing securities to institutional investors and selected individuals rather than the general public?",
        "options": [
          "Offer through Prospectus",
          "Offer for Sale",
          "Private Placement",
          "Rights Issue"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which market provides a platform for the continuous buying and sale of previously issued securities?",
        "options": [
          "Primary market",
          "Secondary market",
          "Money market",
          "Foreign exchange market"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which regulatory body was established to protect the interests of investors in securities and to promote the development of the securities market?",
        "options": [
          "Reserve Bank of India (RBI)",
          "Securities and Exchange Board of India (SEBI)",
          "Ministry of Finance",
          "National Stock Exchange (NSE)"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Marketing": [
      {
        "question": "ng, etc.) leads to the formation of which type of structure?",
        "options": [
          "Divisional structure",
          "Informal organisation",
          "Functional structure",
          "Matrix structure"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which type of organisational structure is most suitable for a multi-product enterprise manufacturing diverse lines of products?",
        "options": [
          "Functional structure",
          "Divisional structure",
          "Informal organisation",
          "Centralised structure"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The delegation of authority primarily flows from:",
        "options": [
          "Subordinate to superior",
          "Superior to subordinate",
          "Peer to peer",
          "Horizontal direction"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is NOT an element of delegation?",
        "options": [
          "Authority",
          "Responsibility",
          "Accountability",
          "Informal grouping"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "\"Responsibility cannot be entirely delegated.\" Which key principle regarding responsibility does this statement reflect?",
        "options": [
          "Principle of Authority",
          "Principle of Accountability",
          "Principle of Span of Management",
          "Principle of Centralisation"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Decentralisation refers to:",
        "options": [
          "Retention of decision-making authority at the top level",
          "Systematic dispersal of authority at all levels of management",
          "Complete elimination of middle management",
          "Transfer of responsibility without authority"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following networks emerges spontaneously as a result of social interactions among employees?",
        "options": [
          "Formal organisation",
          "Functional structure",
          "Divisional structure",
          "Informal organisation"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Span of management refers to:",
        "options": [
          "The total number of levels in an organisation",
          "The number of subordinates that can be effectively managed by a superior",
          "The geographic area covered by a business branch",
          "The time duration required to complete a project"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following statements best differentiates between delegation and decentralisation?",
        "options": [
          "Delegation is optional, whereas decentralisation is compulsory.",
          "Delegation is an extension of decentralisation.",
          "Delegation means passing authority from one superior to one subordinate, whereas decentralisation is a policy decision that extends throughout the organisation.",
          "Delegation deals with informal groups, whereas decentralisation deals with formal groups."
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following is the first step in the staffing process?",
        "options": [
          "Estimation of manpower requirements",
          "Recruitment",
          "Selection",
          "Placement and orientation"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Staffing is considered a part of which management function?",
        "options": [
          "Planning",
          "Directing",
          "Human Resource Management (HRM)",
          "Controlling"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Estimating manpower requirements involves analyzing which of the following?",
        "options": [
          "Workload analysis only",
          "Workforce analysis only",
          "Both workload and workforce analysis",
          "Financial budget analysis"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The process of searching for prospective employees and stimulating them to apply for jobs in an organization is known as:",
        "options": [
          "Selection",
          "Recruitment",
          "Training",
          "Placement"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is an internal source of recruitment?",
        "options": [
          "Advertisement",
          "Employment Exchange",
          "Transfer",
          "Campus recruitment"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following is a disadvantage of using internal sources of recruitment?",
        "options": [
          "It is less expensive",
          "It improves employee morale",
          "It leads to inbreeding and restricts new blood",
          "It simplifies the selection process"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Direct recruitment, placement agencies, and advertisements are examples of which source of recruitment?",
        "options": [
          "Internal sources",
          "External sources",
          "Informal sources",
          "Promotional sources"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The process of choosing the best candidate from among the pool of applicants is called:",
        "options": [
          "Recruitment",
          "Selection",
          "Training",
          "Orientation"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "A test that measures an individual's potential for learning new skills is known as a:",
        "options": [
          "Trade test",
          "Aptitude test",
          "Intelligence test",
          "Personality test"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following refers to the learning process that increases the skill of an employee for doing a particular job?",
        "options": [
          "Education",
          "Development",
          "Training",
          "Selection"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following is not an element of directing?",
        "options": [
          "Supervision",
          "Communication",
          "Delegation",
          "Motivation"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Directing takes place at which level of management?",
        "options": [
          "Top level only",
          "Middle level only",
          "Supervisory level only",
          "Every level of management"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "The process of converting a message into communication symbols is known as:",
        "options": [
          "Encoding",
          "Decoding",
          "Feedback",
          "Media"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which need in Maslow\u2019s Need Hierarchy Theory refers to the desire to become what one is capable of becoming?",
        "options": [
          "Safety need",
          "Esteem need",
          "Self-actualisation need",
          "Belonging need"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following is a financial incentive?",
        "options": [
          "Status",
          "Bonus",
          "Job security",
          "Employee participation"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "An autocratic leadership style is one in which the leader:",
        "options": [
          "Centrelises decision-making power",
          "Decentralises decision-making power",
          "Takes decisions in consultation with subordinates",
          "Avoids using authority"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Informal communication is also referred to as:",
        "options": [
          "Grapevine",
          "Scalar chain",
          "Official communication",
          "Vertical communication"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Semantic barriers to communication are related to:",
        "options": [
          "Psychological state of the receiver",
          "Problems and obstructions in the encoding and decoding of messages",
          "Rules and regulations of the organisation",
          "Personal factors of the sender or receiver"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following leadership styles is based on the use of authority and is best suited for quick decision-making?",
        "options": [
          "Democratic leadership",
          "Laissez-faire leadership",
          "Autocratic leadership",
          "Participative leadership"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Directing is described as a continuous process because:",
        "options": [
          "It happens only at the time of starting a business",
          "It takes place throughout the life of an organisation irrespective of changes in management",
          "It ends once the targets are achieved",
          "It is performed only by the top executives"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following functions of management involves measuring performance against standards and taking corrective actions?",
        "options": [
          "Planning",
          "Organizing",
          "Controlling",
          "Directing"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Controlling is a process that is:",
        "options": [
          "Backward-looking only",
          "Forward-looking only",
          "Both backward-looking and forward-looking",
          "Neither backward-looking nor forward-looking"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which step in the controlling process involves comparing actual performance with the established standards?",
        "options": [
          "Setting performance standards",
          "Measurement of actual performance",
          "Analyzing deviations",
          "Taking corrective action"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The principle of management control which states that \"an attempt to control everything results in controlling nothing\" is known as:",
        "options": [
          "Critical point control",
          "Management by exception",
          "Span of management",
          "Delegation of authority"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Key Result Areas (KRAs) are identified under which concept of controlling?",
        "options": [
          "Management by exception",
          "Critical point control",
          "Corrective action",
          "Zero-base budgeting"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is a quantitative standard used for measuring performance?",
        "options": [
          "Goodwill of the firm",
          "Employee morale",
          "Sales volume",
          "Industrial relations"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Deviations that are considered insignificant and can be ignored are handled through:",
        "options": [
          "Critical point control",
          "Management by exception",
          "Comparative analysis",
          "Benchmarking"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is the final step in the controlling process?",
        "options": [
          "Measurement of actual performance",
          "Analyzing deviations",
          "Taking corrective action",
          "Setting standards"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Controlling is considered to be a:",
        "options": [
          "Pervasive function",
          "One-time activity",
          "Non-economic activity",
          "Lower-level management function only"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "How does controlling help an organization in terms of resources?",
        "options": [
          "It wastes resources",
          "It ensures efficient use of resources",
          "It increases the cost of production",
          "It limits resource utilization"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is considered as the primary objective of financial management?",
        "options": [
          "Maximization of profit",
          "Maximization of wealth of shareholders",
          "Ensuring availability of cash",
          "Minimization of cost of production"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Financial planning generally involves the estimation of:",
        "options": [
          "Only capital requirements",
          "Only sources of funds",
          "Both capital requirements and sources of funds",
          "Only net profits"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following refers to the long-term investment decision of a business?",
        "options": [
          "Dividend decision",
          "Capital budgeting decision",
          "Financing decision",
          "Working capital decision"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The decision regarding how much profit should be retained in the business and how much should be distributed as dividends is known as:",
        "options": [
          "Capital budgeting decision",
          "Financing decision",
          "Dividend decision",
          "Investment decision"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Financial leverage is said to be favorable when:",
        "options": [
          "Return on Investment is lower than the cost of debt",
          "Return on Investment is higher than the cost of debt",
          "Cost of debt is equal to Return on Investment",
          "Interest rate is very high"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following sources of finance involves fixed financial charges?",
        "options": [
          "Equity shares",
          "Retained earnings",
          "Debentures",
          "Preference shares with variable dividend"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Working capital refers to:",
        "options": [
          "Fixed assets minus current liabilities",
          "Excess of current assets over current liabilities",
          "Total assets minus total liabilities",
          "Share capital plus reserves"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following factors affects the working capital requirement of a business?",
        "options": [
          "Nature of business",
          "Scale of operations",
          "Business cycle",
          "All of the above"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "A trading concern (like a retail shop) generally requires:",
        "options": [
          "More fixed capital and less working capital",
          "Less fixed capital and more working capital",
          "Equal amounts of fixed and working capital",
          "No working capital"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Debt service coverage ratio (DSCR) is used to determine:",
        "options": [
          "Profitability of the firm",
          "Liquidity position of the firm",
          "Ability of the firm to meet its fixed financial obligations (interest and repayment)",
          "Efficiency of inventory management"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following is not a function of a financial market?",
        "options": [
          "Mobilisation of savings",
          "Price discovery",
          "Providing liquidity to financial assets",
          "Formulation of monetary policy"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Capital market consists of which of the following?",
        "options": [
          "Development banks",
          "Commercial banks",
          "Stock exchange",
          "All of the above"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Which market deals in short-term, high-quality, liquid debt instruments?",
        "options": [
          "Capital market",
          "Money market",
          "Primary market",
          "Secondary market"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Treasury bills are issued by the Reserve Bank of India on behalf of the Central Government to meet short-term requirements of funds. What is the minimum amount for which T-bills are issued?",
        "options": [
          "Rs. 10,000",
          "Rs. 25,000",
          "Rs. 50,000",
          "Rs. 1,00,000"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following instruments is also known as zero-coupon bonds?",
        "options": [
          "Commercial Paper",
          "Treasury Bill",
          "Call Money",
          "Certificate of Deposit"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "A short-term, unsecured promissory note issued by large and creditworthy companies to raise short-term funds is known as:",
        "options": [
          "Commercial Bill",
          "Certificate of Deposit",
          "Commercial Paper",
          "Treasury Bill"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which market is also known as the new issue market where securities are sold for the first time?",
        "options": [
          "Secondary market",
          "Primary market",
          "Money market",
          "Spot market"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following methods of floatation in the primary market involves issuing securities to institutional investors and selected individuals rather than the general public?",
        "options": [
          "Offer through Prospectus",
          "Offer for Sale",
          "Private Placement",
          "Rights Issue"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which market provides a platform for the continuous buying and sale of previously issued securities?",
        "options": [
          "Primary market",
          "Secondary market",
          "Money market",
          "Foreign exchange market"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which regulatory body was established to protect the interests of investors in securities and to promote the development of the securities market?",
        "options": [
          "Reserve Bank of India (RBI)",
          "Securities and Exchange Board of India (SEBI)",
          "Ministry of Finance",
          "National Stock Exchange (NSE)"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is NOT considered a core concept of marketing?",
        "options": [
          "Needs, wants, and demands",
          "Product or service",
          "Manufacturing machinery",
          "Exchange mechanism"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The process of classification of products into different groups on the basis of some of their important characteristics is known as:",
        "options": [
          "Standardization",
          "Grading",
          "Packaging",
          "Branding"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following elements of the marketing mix refers to the channel of distribution and physical distribution of goods?",
        "options": [
          "Product",
          "Price",
          "Place",
          "Promotion"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The use of names, terms, symbols, or designs to identify the seller's product and distinguish it from those of competitors is called:",
        "options": [
          "Packaging",
          "Labeling",
          "Branding",
          "Pricing"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following is a direct, personal communication tool used by marketers to build relationships and secure customer orders?",
        "options": [
          "Advertising",
          "Sales promotion",
          "Personal selling",
          "Public relations"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Designing and developing the container or wrapper for a product is known as:",
        "options": [
          "Branding",
          "Packaging",
          "Labeling",
          "Grading"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which pricing objective focuses on keeping the prices low to capture a larger share of the market and drive out competitors?",
        "options": [
          "Obtaining market share leadership",
          "Surviving in the competitive market",
          "Attaining product quality leadership",
          "Maximizing profits in the short run"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Short-term incentives designed to encourage buyers to make an immediate purchase of a product or service are collectively referred to as:",
        "options": [
          "Advertising",
          "Sales promotion",
          "Publicity",
          "Personal selling"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What is the term used to describe putting descriptive information, instructions, and details on the package of a product?",
        "options": [
          "Branding",
          "Grading",
          "Labeling",
          "Standardization"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which philosophy of marketing management emphasizes that mere availability and low price of a product cannot ensure high sales; rather, customers need aggressive selling and promotional efforts?",
        "options": [
          "Production concept",
          "Product concept",
          "Selling concept",
          "Marketing concept"
        ],
        "answer": 2,
        "answerLetter": "C"
      }
    ],
    "Consumer Protection": [
      {
        "question": "Which of the following is not a consumer right according to the Consumer Protection Act, 2019?",
        "options": [
          "Right to Safety",
          "Right to Information",
          "Right to Profit",
          "Right to Seek Redressal"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Under the Consumer Protection Act, 2019, a complaint can be filed by a consumer against the seller if the goods or services purchased have any:",
        "options": [
          "Defect or deficiency",
          "Standard packaging only",
          "Fixed market price",
          "High manufacturing cost"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following marks is found on agricultural and food products in India to ensure quality?",
        "options": [
          "ISI",
          "Hallmark",
          "FPO",
          "Woolmark"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Hallmark is the quality certification mark used for which of the following products?",
        "options": [
          "Electrical appliances",
          "Jewellery and precious metals",
          "Agricultural products",
          "Woolen products"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following agencies handles consumer grievances at the National level under the three-tier redressal machinery?",
        "options": [
          "District Commission",
          "State Commission",
          "National Consumer Disputes Redressal Commission",
          "Supreme Court of India"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "An aggrieved consumer can file an appeal against the order of the State Commission to which of the following authorities?",
        "options": [
          "District Commission",
          "National Commission",
          "Supreme Court",
          "High Court"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is considered a responsibility of a consumer rather than a right?",
        "options": [
          "Asking for a cash memo on purchase",
          "Right to be heard",
          "Right to consumer education",
          "Right to choose"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Consumer organizations and Non-Governmental Organizations (NGOs) play a major role in consumer protection by:",
        "options": [
          "Manufacturing quality goods",
          "Educating consumers about their rights and reliefs",
          "Fixing the market prices of commodities",
          "Providing loans to consumers"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Who among the following cannot file a complaint under the Consumer Protection Act, 2019?",
        "options": [
          "Any consumer",
          "Central Government or State Government",
          "A registered consumer association",
          "A business competitor wishing to defame a firm"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "The Consumer Protection Act, 2019 provides for the establishment of a central regulatory authority to promote, protect, and enforce the rights of consumers, known as:",
        "options": [
          "Central Consumer Protection Council",
          "Central Consumer Protection Authority (CCPA)",
          "National Consumer Commission",
          "Consumer Grievance Cell"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ]
  },
  "English (literature)": {
    "The Last Lesson": [
      {
        "question": "Who is the author of the story \"The Last Lesson\"?",
        "options": [
          "Charles Dickens",
          "Alphonse Daudet",
          "Selma Lagerl\u00f6f",
          "Louis Fischer"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Where does the story \"The Last Lesson\" take place?",
        "options": [
          "In a school in Berlin, Germany",
          "In a village school in Alsace, France",
          "In a high school in Zurich, Switzerland",
          "In a town hall in Lorraine, France"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Why was Franz reluctant to go to school on that particular morning?",
        "options": [
          "He wanted to go fishing in the river.",
          "He had not prepared his lesson on participles and feared a scolding from M. Hamel.",
          "It was a very warm and sunny day outside.",
          "He wanted to listen to the birds singing at the edge of the woods."
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What was unusual about the school on the day of the last lesson?",
        "options": [
          "The students were running around the playground.",
          "The school was as quiet as a Sunday morning.",
          "M. Hamel was absent from the class.",
          "There was a loud celebration going on in the hall."
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Who were the people sitting quietly on the back benches of the classroom?",
        "options": [
          "The village elders, including old Hauser, the former mayor, and the former postmaster",
          "Some German soldiers who had occupied the district",
          "Parents of the students who came to watch the final lecture",
          "Inspector general of education and school trustees"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "What order had come from Berlin that prompted this to be the last French lesson?",
        "options": [
          "That all schools in Alsace and Lorraine should introduce German instead of French",
          "That the school would be permanently closed down starting next week",
          "That all male students above the age of ten must join the army",
          "That French teachers must retire immediately"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "What did M. Hamel write on the blackboard at the end of the class before dismissing the school?",
        "options": [
          "Long Live France!",
          "Vive La France!",
          "Good-bye, My Children!",
          "Education is Freedom!"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "How did M. Hamel's attire differ on that particular day from ordinary days?",
        "options": [
          "He wore his bright green coat, his frilled shirt, and the little black all-silk embroidered cap.",
          "He wore a simple black cloak and a hat made of straw.",
          "He wore his old everyday grey suit with no special accessories.",
          "He wore a military uniform to show respect to the new rulers."
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "What did M. Hamel say about the French language during the class?",
        "options": [
          "It is the most beautiful, clearest, and most logical language in the world.",
          "It is the oldest and most difficult language to master.",
          "It is a dying language that has no practical use anymore.",
          "It is an easy language that everyone can learn in a few days."
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "According to M. Hamel, when a people are enslaved, what key is it to their prison?",
        "options": [
          "Their strong military defense",
          "Their native language",
          "Their religious faith and traditions",
          "Their wealth and resources"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Lost Spring": [
      {
        "question": "Who is the author of the story \"Lost Spring\"?",
        "options": [
          "William Douglas",
          "Anees Jung",
          "Selma Lagerl\u00f6f",
          "Louis Fischer"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What does \"Lost Spring\" metaphorically represent in the lives of the poor children?",
        "options": [
          "The season of spring in their hometown",
          "The lost opportunities of going to school",
          "The loss of their childhood and joyful years of growth",
          "The changing weather patterns in Seemapuri"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Where does Saheb and his family originally hail from?",
        "options": [
          "Delhi",
          "Dhaka, Bangladesh",
          "Firozabad",
          "Lahore, Pakistan"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What does garbage mean to the elders in Seemapuri compared to the children?",
        "options": [
          "A source of entertainment",
          "A means of survival for elders and a wonder/wrapped in wonder for children",
          "A useless waste for both",
          "A source of permanent employment"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What is the primary occupation of the people living in Firozabad?",
        "options": [
          "Ragpicking",
          "Agriculture",
          "Glass-blowing and bangle-making",
          "Weaving and tailoring"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What major health hazard do the children and workers of Firozabad face due to their work?",
        "options": [
          "Hearing loss",
          "Losing their eyesight in the dim light of glass furnaces",
          "Respiratory failure from cotton dust",
          "Skin allergies from chemicals"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Why are the bangle makers unable to organize themselves into a cooperative?",
        "options": [
          "They are too wealthy to care",
          "They are trapped in a vicious circle of sahukars, middlemen, policemen, and bureaucrats",
          "They prefer working individually",
          "The government has banned unions completely"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What is Mukesh's dream when he grows up?",
        "options": [
          "To continue his family's bangle-making legacy",
          "To become a motor mechanic and drive a car",
          "To move back to Bangladesh",
          "To become a politician"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "How many ragpickers live in Seemapuri according to the author?",
        "options": [
          "Around 5,000",
          "Around 10,000",
          "Around 50,000",
          "Around 100,000"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What does the author describe as a metaphor of poverty throughout the story?",
        "options": [
          "Wearing torn clothes",
          "Living in tents",
          "Not wearing chappals (shoes/footwear)",
          "Working in dark rooms"
        ],
        "answer": 2,
        "answerLetter": "C"
      }
    ],
    "Deep Water": [
      {
        "question": "Who is the author of the chapter \"Deep Water\"?",
        "options": [
          "William Shakespeare",
          "William Douglas",
          "Mark Twain",
          "Emily Dickinson"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "At what age did the author decide to learn to swim at the Y.M.C.A. pool?",
        "options": [
          "Three or four years old",
          "Ten or eleven years old",
          "Fifteen or sixteen years old",
          "Twenty years old"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Why was the Yakima River considered treacherous by the author's mother?",
        "options": [
          "It was very polluted",
          "Many people had drowned in it",
          "It was too shallow for swimming",
          "Its water was extremely cold"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What incident at the California beach when he was three or four years old developed an initial fear of water in the author?",
        "options": [
          "He was pushed into the deep end by a bully",
          "He was knocked down by a wave and swept over",
          "He fell off a boat into a lake",
          "He got caught in a whirlpool"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "How deep was the Y.M.C.A. pool at the shallow end?",
        "options": [
          "Two feet",
          "Three feet",
          "Nine feet",
          "Six feet"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Who threw the author into the deep end of the Y.M.C.A. pool?",
        "options": [
          "His father",
          "A big brawny boy",
          "A lifeguard",
          "His older brother"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What was the physical age and description of the boy who threw the author into the pool?",
        "options": [
          "About eighteen years old, with hairy chest",
          "About ten years old, thin and weak",
          "About fifteen years old, athletic",
          "An adult swimming instructor"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "What strategy did the author plan to use when he hit the bottom of the pool after being thrown in?",
        "options": [
          "Scream loudly for immediate help",
          "Make a big jump, come to the surface, and paddle to the edge",
          "Stay calm, hold his breath, and wait to be rescued",
          "Swim straight down to find an exit ladder"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "How long did the author practice with an instructor to overcome his fear of swimming?",
        "options": [
          "One month",
          "Three months",
          "Six months",
          "One full year"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Where did the author finally go to test whether all of his terror had left him completely?",
        "options": [
          "Warm Lake in the Rockies",
          "Lake Wentworth in New Hampshire",
          "The Pacific Ocean at California",
          "Yakima River"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "The Rattrap": [
      {
        "question": "What is the central theme of the story \"The Rattrap\"?",
        "options": [
          "Scientific inventions and discoveries",
          "Essential goodness in a human can be awakened through understanding and love",
          "Political conflicts during wartime",
          "Importance of wealth and social status"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What does the peddler compare the whole world to?",
        "options": [
          "A giant maze",
          "A big rattrap",
          "A bustling marketplace",
          "A dark tunnel"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Why did the peddler have to resort to begging and petty thievery?",
        "options": [
          "Because he was lazy and hated hard work",
          "Because business was slow and making rattraps was not profitable enough",
          "Because he was driven out of his country",
          "Because he wanted to become rich quickly"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Who offered shelter and hospitality to the peddler on a dark winter evening?",
        "options": [
          "The ironmaster",
          "Edla Willmansson",
          "An old lonely crofter",
          "The village blacksmith"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "How much money did the crofter show the peddler, and where did he keep it?",
        "options": [
          "Ten kronor in a leather pouch under his bed",
          "Thirty kronor hanging in a leather pouch near the window",
          "Fifty kronor in a wooden chest",
          "Twenty kronor in his pocket"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Why did the ironmaster mistake the peddler for an old regimental comrade (Captain von Stahle)?",
        "options": [
          "Because it was dark and he could not see him clearly",
          "Because the peddler looked exactly like him",
          "Because the peddler was wearing the captain's uniform",
          "Because the crofter had sent a letter describing him"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Why did the peddler initially refuse the ironmaster's invitation to the manor house?",
        "options": [
          "He was afraid of being recognized as a thief who had stolen thirty kronor",
          "He had important business to attend to",
          "He did not like rich people",
          "He wanted to stay at the forge"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Who finally persuaded the peddler to go with them to the manor house for Christmas?",
        "options": [
          "The ironmaster",
          "The blacksmith",
          "Edla Willmansson",
          "The crofter"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What did the peddler leave behind as a Christmas gift for Edla Willmansson?",
        "options": [
          "A letter of apology and a small rattrap containing thirty kronor and a note",
          "A gold watch and a note of gratitude",
          "A bundle of stolen clothes",
          "A wooden sculpture of a rat"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "What signature did the peddler use when he left the gift for Edla?",
        "options": [
          "Captain von Stahle",
          "Nils Olof",
          "The Tramp",
          "The Rattrap Maker"
        ],
        "answer": 0,
        "answerLetter": "A"
      }
    ],
    "Indigo": [
      {
        "question": "Who is the author of the chapter \"Indigo\"?",
        "options": [
          "Louis Fischer",
          "Selma Lagerl\u00f6f",
          "Alphonse Daudet",
          "Anees Jung"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Why did Louis Fischer visit Mahatma Gandhi in 1942 at his ashram in Sevagram?",
        "options": [
          "To interview him about Indian independence",
          "To ask him to set a date for the departure of the British",
          "To learn about the Champaran movement",
          "To write a biography on him"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Who was Rajkumar Shukla?",
        "options": [
          "A British landlord in Champaran",
          "A poor sharecropper from Champaran",
          "A lawyer from Patna",
          "A political leader of the Indian National Congress"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Where was the annual convention of the Indian National Congress party held in December 1916 where Gandhi was first approached about Champaran?",
        "options": [
          "Bombay",
          "Nagpur",
          "Lucknow",
          "Calcutta"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What was the chief commercial crop that the hapless peasants of Champaran were forced by British landlords to cultivate on 15 percent of their land?",
        "options": [
          "Cotton",
          "Indigo",
          "Jute",
          "Sugarcane"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What did the British landlords demand from the sharecroppers as compensation when synthetic indigo was developed in Germany?",
        "options": [
          "Double the rent for their land",
          "A heavy tax on their crops",
          "Money to be released from the old 15 percent agreement",
          "All of their harvest for two years"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Whose house did Gandhi stay at in Patna upon arriving before heading to Champaran?",
        "options": [
          "Rajendra Prasad",
          "J.B. Kripalani",
          "Professor Malkani",
          "Sir Edward Gait"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "What did the British official commissioner of the Tirhut division advise Gandhi to do upon arriving in Tirhut?",
        "options": [
          "Join the British administration",
          "Leave Tirhut immediately",
          "Pay a fine for entering the district",
          "Meet the Lieutenant-Governor"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What was the percentage of refund that Gandhi ultimately demanded and the landlords agreed to pay to the farmers?",
        "options": [
          "100 percent",
          "25 percent",
          "50 percent",
          "75 percent"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "According to Gandhi, what was the turning point in his life that convinced him to urge the departure of the British from India?",
        "options": [
          "The signing of the Champaran agreement",
          "The successful defiance of the court summons by thousands of peasants",
          "The meeting with Charles Freer Andrews",
          "The establishment of primary schools in Champaran villages"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Poets and Pancakes": [
      {
        "question": "Who is the author of the chapter \"Poets and Pancakes\"?",
        "options": [
          "Asokamitran",
          "Kamala Das",
          "Stephen Spender",
          "T.S. Eliot"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "What was the brand name of the make-up material that Gemini Studios bought in truckloads?",
        "options": [
          "Pancake",
          "Max Factor",
          "Lakme",
          "Maybelline"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Who was the office boy in the make-up department who had joined the studios hoping to become an actor, screen writer, director, or lyricist?",
        "options": [
          "Subbu",
          "Kothamangalam Subbu",
          "An unnamed frustrated young man",
          "The legal adviser"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Why was Kothamangalam Subbu referred to as a \"number two\" at Gemini Studios?",
        "options": [
          "He was second in command to the office boy",
          "He was always next to the Boss (S.S. Vasan) in his ability to look cheerful and solve problems",
          "He was the second best actor in Madras",
          "He ranked second in the scriptwriting department"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which department of Gemini Studios was considered a neutral place for gossip and political brainstorming?",
        "options": [
          "The make-up room",
          "The story department",
          "The canteen",
          "The legal adviser's office"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Who was the English poet and editor who visited Gemini Studios, leaving everyone baffled and perplexed about his identity?",
        "options": [
          "Frank Frankin",
          "Stephen Spender",
          "George Orwell",
          "W.B. Yeats"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What was the primary political ideology of the people who worked at or visited Gemini Studios, which made them naturally oppose the visiting English poet?",
        "options": [
          "Capitalism",
          "Communism",
          "Gandhism",
          "Fascism"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "How did the author, Asokamitran, spend most of his time in his cubicle at Gemini Studios?",
        "options": [
          "Writing screenplays",
          "Tearing up newspapers and collecting clippings",
          "Editing films",
          "Directing commercials"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What organization was the English visitor, Stephen Spender, actually associated with that the author discovered years later through a book titled The God That Failed?",
        "options": [
          "An anti-communist literary society",
          "The Moral Re-Armament army",
          "The British Broadcasting Corporation (BBC)",
          "The Communist Party of Great Britain"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "What was the legal adviser's official designation in the Story Department?",
        "options": [
          "Legal Consultant",
          "Lawyer",
          "Assembly member",
          "Public Prosecutor"
        ],
        "answer": 2,
        "answerLetter": "C"
      }
    ],
    "The Interview": [
      {
        "question": "Who is the author of the chapter \"The Interview\"?",
        "options": [
          "Louis Fischer",
          "Christopher Silvester",
          "William Douglas",
          "Alphonse Daudet"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Christopher Silvester is a writer, journalist, and a prominent feature writer for which newspaper?",
        "options": [
          "The New York Times",
          "The Guardian",
          "The Times, London",
          "The Washington Post"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The chapter \"The Interview\" is an excerpt from which of Christopher Silvester's works?",
        "options": [
          "The Penguin Book of Interviews",
          "Interviews with Eminent Writers",
          "Profiles in Courage",
          "Modern Journalism"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "In the chapter, who expresses an aversion to being interviewed, describing it as an unwarranted intrusion into their life?",
        "options": [
          "Rudyard Kipling",
          "H.G. Wells",
          "Saul Bellow",
          "Umberto Eco"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "How does Rudyard Kipling view an interview in the context of his comments quoted in the chapter?",
        "options": [
          "As a great honour",
          "As a crime, an assault, and an immoral act",
          "As a source of immense entertainment",
          "As a helpful tool for publicity"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Who famously referred to interviews as being like \"thumbprints on his windpipe\"?",
        "options": [
          "Saul Bellow",
          "Rudyard Kipling",
          "H.G. Wells",
          "Mark Twain"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What is the name of Umberto Eco's immensely successful novel that catapulted him into academic stardom?",
        "options": [
          "The Name of the Rose",
          "Foucault's Pendulum",
          "The Island of the Day Before",
          "Baudolino"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "What is the profession of Umberto Eco other than being a novelist?",
        "options": [
          "Professor at the University of Bologna in Italy",
          "A renowned investigative journalist",
          "A full-time political commentator",
          "A professional literary critic only"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "What term does Umberto Eco use to describe his non-fictional scholarly writings and academic essays?",
        "options": [
          "Scholarly treatises",
          "Interstices",
          "Philosophical discourses",
          "Academic pursuits"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "According to Umberto Eco, how was he able to write so many scholarly books while also writing novels?",
        "options": [
          "By ignoring all academic duties",
          "By utilizing empty spaces or \"interstices\" in his schedule, such as waiting for people",
          "By employing a team of researchers",
          "By working exclusively during vacations"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Going Places": [
      {
        "question": "Who is the author of the story \"Going Places\"?",
        "options": [
          "A. R. Barton",
          "Stephen Spender",
          "Howard Burnett",
          "Kamala Das"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What are the names of Sophie's two best friends in the story?",
        "options": [
          "Jansie and Geoff",
          "Jansie and Derek",
          "Jansie and Danny",
          "Sophie and Geoff"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What is Sophie's primary ambition in life, which Jansie finds unrealistic?",
        "options": [
          "To become a famous actress",
          "To own a boutique or become a manager/fashion designer",
          "To travel around the world with a rock band",
          "To become a wealthy novelist"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What is Sophie's older brother, Geoff, by profession?",
        "options": [
          "An apprentice mechanic",
          "A professional football player",
          "A factory worker",
          "A school teacher"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which famous young football player does Sophie daydream about meeting and dating?",
        "options": [
          "David Beckham",
          "Danny Casey",
          "Geoff Hurst",
          "Bobby Charlton"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "How does Sophie's father react when she tells him that she met Danny Casey?",
        "options": [
          "He believes her immediately and feels proud",
          "He warns her that her wild stories will get her into trouble",
          "He gets excited and asks her to introduce him",
          "He ignores her completely"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Where does Sophie go on Saturday evenings to watch Danny Casey play football?",
        "options": [
          "To the local cinema hall",
          "To the town stadium with her family",
          "To a pub in the neighborhood",
          "To the city park"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What does Jansie advise Sophie to do regarding her unrealistic dreams?",
        "options": [
          "To work harder and make them come true",
          "To be sensible and keep her feet on the ground because they belong to a working-class family",
          "To run away from home",
          "To share her secrets with everyone in the neighborhood"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following best describes Sophie's character?",
        "options": [
          "A grounded and practical girl who accepts her reality",
          "A daydreamer who escapes her harsh socio-economic reality into a world of fantasy",
          "A cynical and bitter individual who hates everyone around her",
          "A studious girl focused solely on academics"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "How does the story end?",
        "options": [
          "Sophie actually meets Danny Casey at the canal",
          "Sophie sits by the lonely canal, imagining Danny Casey's arrival, lost in her own illusion",
          "Sophie's father helps her open a boutique",
          "Geoff takes Sophie to see a live football match"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "My Mother at Sixty-six": [
      {
        "question": "Who is the poet of the poem \"My Mother at Sixty-six\"?",
        "options": [
          "John Keats",
          "Kamala Das",
          "Stephen Spender",
          "Robert Frost"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Where was the poet driving to when she looked at her mother?",
        "options": [
          "Cochin airport",
          "Mumbai airport",
          "Delhi railway station",
          "Her home in Trivandrum"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "What did the poet notice about her mother\u2019s face?",
        "options": [
          "It was glowing with health",
          "It looked pale and ashen like a corpse",
          "It was covered in wrinkles of joy",
          "It was bright red in anger"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The poet says her mother's face looked like that of a:",
        "options": [
          "Sleeping child",
          "Faded rose",
          "Late winter's moon",
          "Dried autumn leaf"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What familiar ache or childhood fear did the poet feel?",
        "options": [
          "Fear of travelling alone",
          "Fear of losing her mother to aging and death",
          "Fear of missing her flight",
          "Fear of failing exams"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "In order to distract her mind from the painful thoughts, what did the poet look at outside the car window?",
        "options": [
          "Dark, gloomy clouds",
          "Young trees sprinting and merry children spilling out of their homes",
          "Empty streets and stray animals",
          "A high mountain range"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What do the \"merry children spilling out of their homes\" symbolize in the poem?",
        "options": [
          "Youth, vitality, and exuberance",
          "Confusion and chaos",
          "Noise and disturbance",
          "Poverty and hardship"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "What does the imagery of \"young trees sprinting\" signify?",
        "options": [
          "The fast speed of the car",
          "The rapid passage of time and fleeting youth",
          "A joyful journey",
          "A race taking place outside"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What security check did the poet undergo at the airport?",
        "options": [
          "She had her luggage weighed",
          "She stood a few yards away from her mother",
          "She showed her passport and ticket",
          "She had to board the flight immediately"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What were the parting words of the poet to her mother at the airport?",
        "options": [
          "\"Goodbye, mother, I will miss you.\"",
          "\"Take care of your health, Amma.\"",
          "\"See you soon, Amma.\"",
          "\"Don't worry, I will be back soon.\""
        ],
        "answer": 2,
        "answerLetter": "C"
      }
    ],
    "Keeping Quiet": [
      {
        "question": "Who is the poet of the poem \"Keeping Quiet\"?",
        "options": [
          "John Keats",
          "Pablo Neruda",
          "Stephen Spender",
          "Kamala Das"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What does the poet ask everyone to count up to in the beginning of the poem?",
        "options": [
          "Ten",
          "Twelve",
          "Fifteen",
          "Twenty"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What kind of moment does the poet visualize when everyone is silent and still?",
        "options": [
          "A sad and gloomy moment",
          "An exotic and peaceful moment",
          "A dangerous and fearful moment",
          "A boring and dull moment"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "According to the poet, what language should we speak during this moment of stillness?",
        "options": [
          "English",
          "Our native language",
          "No language",
          "Sign language"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "For how long does the poet suggest we should keep still and not move our arms so much?",
        "options": [
          "For one whole day",
          "For a few hours",
          "For one second",
          "For an hour"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Whom does the poet mention would not hurt whales in that sudden darkness?",
        "options": [
          "The fishermen in the cold sea",
          "The pearl divers",
          "The sailors",
          "The ship merchants"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "What would the man gathering salt be able to look at during this quiet moment?",
        "options": [
          "The white clouds",
          "His hurt hands",
          "The deep ocean",
          "The rising sun"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What kind of wars does the poet mention people preparing for, which leave no survivors?",
        "options": [
          "Nuclear and biological wars",
          "Wars with gas, wars with fire",
          "World wars",
          "Civil wars"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What should those who prepare green wars, gas wars, and fire wars do instead?",
        "options": [
          "Walk about with their brothers in the shade doing nothing",
          "Plant more trees in the forest",
          "Sign a peace treaty",
          "Build schools and hospitals"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "What lesson does the Earth teach us, which the poet wants us to learn?",
        "options": [
          "That everything is dead and gone forever",
          "That there is life under apparent stillness",
          "That seasons always change rapidly",
          "That nature is unforgiving"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "A Thing of Beauty": [
      {
        "question": "According to the poet John Keats, what kind of object is \"A Thing of Beauty\"?",
        "options": [
          "A source of temporary joy",
          "A joy for ever",
          "A cause of eternal sorrow",
          "A fading dream"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What does a thing of beauty do to its loveliness?",
        "options": [
          "Decreases with time",
          "Passes into nothingness",
          "Never passes into nothingness",
          "Becomes painful to remember"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What kind of sleep does a thing of beauty provide us with?",
        "options": [
          "Full of troubled nightmares",
          "Restless and anxious",
          "Full of sweet dreams, health, and quiet breathing",
          "Lifeless and cold"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What are \"flowering bands\" binding us to in the context of the poem?",
        "options": [
          "To the fleeting pleasures of the world",
          "To the earth despite all suffering",
          "To our daily routines",
          "To our materialistic desires"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following causes the lack of noble natures and gloomy days according to the poet?",
        "options": [
          "The beauty of nature",
          "Inhuman dearth of noble natures and dark spirits",
          "The bright sunshine",
          "The cooling covert"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What does \"clear rills\" represent in the poem?",
        "options": [
          "Hot burning deserts",
          "Streams of clear water providing a cooling covert against the hot season",
          "Loud noisy thunderstorms",
          "Frozen ice sheets"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Where do the \"musk rose\" blooms grow?",
        "options": [
          "In a barren wasteland",
          "Amidst the thick forest green / mid the forest brake",
          "Inside dark indoor rooms",
          "On top of snowy mountains"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What is the \"grandeur of the dooms\" associated with?",
        "options": [
          "The pathetic failure of common people",
          "The mighty dead we have imagined for our-dead heroes",
          "The destruction of nature",
          "The fear of death"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What imagery does the poet use to describe the endless fountain of immortal drink?",
        "options": [
          "Pouring from heaven's brink",
          "Flowing from a dirty gutter",
          "Rising from a boiling volcano",
          "Dripping from a broken tap"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "According to John Keats, what does the immortal drink pour unto us from heaven's brink?",
        "options": [
          "A bitter poison",
          "An endless fountain of immortal drink",
          "Heavy rainstorms",
          "Scorching heat"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "A Roadside Stand": [
      {
        "question": "Who is the poet of the poem \"A Roadside Stand\"?",
        "options": [
          "John Keats",
          "Robert Frost",
          "Stephen Spender",
          "Kamala Das"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What was the primary motivation behind the owners setting up the roadside stand?",
        "options": [
          "To collect charity from rich people",
          "To earn some city money to support their livelihood",
          "To sell their land to city dwellers",
          "To showcase their handicrafts to tourists"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following items were not mentioned as being sold at the roadside stand?",
        "options": [
          "Wild berries",
          "Golden squash",
          "Handcrafted wooden toys",
          "Artless paint of signs with N and S turned wrong"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "How do the passing city cars react to the roadside stand, according to the poet?",
        "options": [
          "They stop frequently to buy goods and chat with the rural folk",
          "They complain about the poor quality of the products",
          "They pass by without stopping, or stop only to complain, turn around, or ask for directions",
          "They donate generous amounts of money out of pity"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What do \"N\" and \"S\" stand for on the painted signboards at the stand?",
        "options": [
          "North and South",
          "New and Special",
          "National and State",
          "Neat and Simple"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "What does the expression \"queer relief\" refer to in the poem?",
        "options": [
          "The brief satisfaction the rural folk get from daydreaming about city life",
          "The ironic or unexpected relief the government promises to give the poor",
          "The relief felt by city people when they finally pass the ugly stand",
          "The temporary calmness the poet feels after writing the poem"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "According to the poet, what kind of life are the greedy good-doers and beneficent beasts of prey planning for the rural people?",
        "options": [
          "A life of total independence and self-reliance",
          "A life where they are forced out of their homes and made to live near villages in theatres and stores",
          "A prosperous life with high-paying corporate jobs",
          "A peaceful life free from all worldly worries"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What does the poet mean by the phrase \"the polished traffic passed with a mind ahead\"?",
        "options": [
          "The cars were moving at a very high speed",
          "The city dwellers were thinking deeply about rural development",
          "The rich travelers were self-absorbed, indifferent, and focused only on their own destinations",
          "The drivers were planning to return later to shop"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What is the general tone of Robert Frost toward the plight of the rural people in \"A Roadside Stand\"?",
        "options": [
          "Indifferent and humorous",
          "Optimistic and cheerful",
          "Deeply sympathetic and critical of urban apathy",
          "Sarcastic and dismissive of the poor"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What solace does the poet ultimately seek for the people at the roadside stand at the end of the poem?",
        "options": [
          "Immediate government intervention and financial aid",
          "A sudden relief that will free him (the poet) from his painful thoughts about their suffering",
          "Complete relocation of all villagers to the big cities",
          "Permanent closure of the highway to stop the traffic"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Aunt Jennifer\u2019s Tigers": [
      {
        "question": "What are the tigers doing in the opening line of the poem?",
        "options": [
          "Sleeping peacefully under a tree",
          "Prancing across a screen in bright green colors",
          "Hunting prey in the dense forest",
          "Roaming freely in a zoo enclosure"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What do the tigers symbolize in the poem?",
        "options": [
          "Fear and cowardice",
          "Domination and cruelty",
          "Freedom, fearlessness, and spirit",
          "Agility and speed in sports"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "How are the tigers described in relation to the men beneath the tree?",
        "options": [
          "They are terrified of the men",
          "They do not fear the men",
          "They are hiding from the men",
          "They are friends with the men"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What do the words \"bright topaz denizens\" imply about the tigers?",
        "options": [
          "They are glowing jewels trapped in a cave",
          "They are inhabitants of the forest shining like yellow gemstones",
          "They are fierce creatures wearing gold ornaments",
          "They are artificial toys made of topaz stone"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Why does Aunt Jennifer find it hard to pull the ivory needle?",
        "options": [
          "The needle is extremely heavy and made of iron",
          "She has lost her eyesight completely",
          "The heavy weight of matrimonial burdens sits upon her hands",
          "She does not know how to sew or embroider"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What is meant by \"Uncle\u2019s wedding band\"?",
        "options": [
          "A happy symbol of true love and affection",
          "A heavy constraint and burden of married life",
          "A precious ring given as a wedding gift",
          "A musical band playing at their wedding ceremony"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What does the phrase \"ringed with ordeals\" suggest about Aunt Jennifer's life?",
        "options": [
          "She is surrounded by joyful circles of friends",
          "She is trapped and encircled by difficulties and sufferings",
          "She is wearing beautiful rings given by her uncle",
          "She is participating in a sports tournament ring"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What will happen to Aunt Jennifer\u2019s hands even after she dies?",
        "options": [
          "They will continue to embroider beautiful tigers",
          "They will remain terrified and burdened by her experiences",
          "They will become strong and fearless",
          "They will be buried with gold rings"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "How will the tigers behave even after Aunt Jennifer\u2019s death?",
        "options": [
          "They will vanish from the tapestry",
          "They will remain trapped forever",
          "They will go on prancing, proud and unafraid",
          "They will become real animals in the room"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What literary device is used in the phrase \"Sleek chivalric certainty\"?",
        "options": [
          "Simile",
          "Metaphor",
          "Alliteration",
          "Oxymoron"
        ],
        "answer": 2,
        "answerLetter": "C"
      }
    ],
    "The Third Level": [
      {
        "question": "Who is the central character and narrator of the story \"The Third Level\"?",
        "options": [
          "Sam Weiner",
          "Charley",
          "Louisa",
          "President Roosevelt"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What is the name of the railway station where Charley claims to have found the third level?",
        "options": [
          "Grand Central Station",
          "Penn Station",
          "Union Station",
          "Times Square Station"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "To which year does Charley believe the third level of the station transports him?",
        "options": [
          "1894",
          "1948",
          "1961",
          "1901"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "What was Charley's main hobby or collecting interest, which his psychiatrist friend called a \"waking-dream wish fulfillment\"?",
        "options": [
          "Coin collecting",
          "Stamp collecting",
          "Antique book collecting",
          "Postcard collecting"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What is the profession of Sam Weiner, Charley's close friend?",
        "options": [
          "School teacher",
          "Psychiatrist",
          "Railway clerk",
          "Lawyer"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Why did Charley go to the ticket counter at the third level to buy two tickets to Galesburg, Illinois?",
        "options": [
          "For a business trip with his office colleagues",
          "To escape with his wife Louisa from the modern world's stress",
          "To deliver a letter to his grandfather",
          "To investigate historical artifacts for a museum"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Why was Charley unable to purchase the tickets at the third level during his first visit there?",
        "options": [
          "The ticket window was permanently closed for renovation",
          "He did not have enough money in his pocket",
          "He did not possess the old-style currency demanded by the clerk",
          "The train had already departed the platform"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What evidence does Charley find to prove that the third level actually existed and that he had successfully traveled to 1894?",
        "options": [
          "An old pocket watch given by his grandfather",
          "A first-day cover mailed to his grandfather dated July 18, 1894",
          "A faded photograph of himself standing in Galesburg",
          "A ticket stub stamped with the year 1894"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What message was written inside the mysterious envelope found in his grandfather's stamp collection?",
        "options": [
          "A warning from Sam about his mental health",
          "An invitation from Sam stating he had found the third level and was living in 1894",
          "A note from Louisa asking him to return home immediately",
          "A letter from the ticket clerk explaining the train schedule"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "According to Sam's interpretation, what does Charley's obsession with finding the third level signify?",
        "options": [
          "A desire to study the history of rail transport",
          "A temporary loss of memory due to overwork",
          "An escape from a modern world burdened with insecurity, fear, war, and worry",
          "A medical condition caused by a lack of sleep"
        ],
        "answer": 2,
        "answerLetter": "C"
      }
    ],
    "The Tiger King": [
      {
        "question": "Who is the author of the story \"The Tiger King\"?",
        "options": [
          "Kalki",
          "Pearl S. Buck",
          "Tish Doshi",
          "John Updike"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "What is the actual name of the Tiger King?",
        "options": [
          "Sir Jilani Jung Jung Bahadur",
          "Maharaja of Pratibandapuram",
          "Rama Varma",
          "Both (A) and (B)"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "What prediction did the chief astrologer make about the Tiger King's death?",
        "options": [
          "He would die of old age",
          "He would be killed by the hundredth tiger",
          "He would die in a battle",
          "He would die of a mysterious illness"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "How old was the prince when he uttered the prophecy-defying question to the astrologers?",
        "options": [
          "Ten years old",
          "Five years old",
          "Ten days old",
          "One month old"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What special gift did the Maharaja buy for his son's third birthday, which ultimately led to his death?",
        "options": [
          "A real tiger cub",
          "A wooden tiger",
          "A silver toy car",
          "A mechanical watch"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Why did the Maharaja ban tiger hunting in the state of Pratibandapuram?",
        "options": [
          "To protect the wildlife ecosystem",
          "Except for the Maharaja himself, no one was allowed to hunt tigers under penalty of forfeiting wealth and property",
          "Tigers were considered sacred animals in the kingdom",
          "The tiger population was already declining rapidly"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "When the Maharaja found himself facing a shortage of tigers in his own state, how did he solve the problem?",
        "options": [
          "He imported tigers from foreign countries",
          "He decided to marry a girl from a state with a rich tiger population",
          "He stopped hunting completely",
          "He ordered his ministers to hunt secretly"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What caused the death of the hundredth tiger that the hunters shot in the forest?",
        "options": [
          "It died instantly from the bullet wound",
          "It had fainted from the shock of the bullet whizzing past",
          "It was already dead of old age",
          "It managed to escape into the thick brush"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What caused the infection that led to the Tiger King's death?",
        "options": [
          "A deep scratch from a real tiger's paw",
          "A silver splinter from the tail of the wooden tiger",
          "A wooden sliver piercing his right hand while playing with the toy",
          "An infected wound from a hunting accident"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What is the primary literary device or tone predominantly used throughout the story \"The Tiger King\"?",
        "options": [
          "Romantic and tragic",
          "Satire and dramatic irony",
          "Strictly historical and biographical",
          "Philosophical and didactic"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Journey to the End of the Earth": [
      {
        "question": "Who is the author of the chapter \"Journey to the End of the Earth\"?",
        "options": [
          "Tishani Doshi",
          "Kamala Das",
          "Susan Hill",
          "John Updike"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Name the student-on-ice programme mentioned in the chapter that takes high school students to the ends of the world.",
        "options": [
          "Antarctic Expedition",
          "Students on Ice",
          "Polar Pioneers",
          "Global Youth Voyage"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which vessel was the author travelling on to reach Antarctica?",
        "options": [
          "Akademik Shokalskiy",
          "Titanic",
          "MV Explorer",
          "Shokalskiy Cruise"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "According to the chapter, around 650 million years ago, a giant amalgamated southern supercontinent existed, known as:",
        "options": [
          "Pangaea",
          "Gondwana",
          "Laurasia",
          "Rodinia"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "How many hours did the author spend travelling in cars, aeroplanes, and a ship to finally reach Antarctica?",
        "options": [
          "50 hours",
          "72 hours",
          "100 hours",
          "120 hours"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Why is Antarctica considered crucial for understanding the earth's past, present, and future?",
        "options": [
          "Because it is covered in thick ice and has pristine records",
          "Because it has uninterrupted ice-cores and simple ecosystems",
          "Because it is heavily populated by wildlife",
          "Because it experiences extreme volcanic activity"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What are phytoplankton, which are frequently mentioned in the context of Antarctic marine life?",
        "options": [
          "Large marine mammals like whales",
          "Microscopic grasses that nourish and sustain the Southern Ocean's food chain",
          "Deep-sea carnivorous fish",
          "Ice algae trapped in glaciers"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What threat to phytoplankton does the author specifically highlight due to ozone layer depletion?",
        "options": [
          "Their growth is completely halted by low temperatures",
          "Activities of ozone depletion affect their photosynthesis and marine food chain",
          "They are eaten away by invading alien species",
          "They sink to the bottom of the ocean floor"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What did the author experience when her ship got wedged into a thick white stretch of ice between the peninsula and Tadpole Island?",
        "options": [
          "They were forced to turn back immediately",
          "They were instructed to walk on the ocean",
          "They found themselves knee-deep in water and snow",
          "They lost all communication with the outside world"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What is the ultimate goal of the \"Students on Ice\" programme run by Geoff Green?",
        "options": [
          "To provide students with leisure and adventure travel",
          "To provide inspiring educational opportunities to foster a new understanding and respect for our planet",
          "To train professional mountaineers and polar researchers",
          "To map uncharted territories of the South Pole"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "The Enemy": [
      {
        "question": "Who is the author of the story \"The Enemy\"?",
        "options": [
          "Pearl S. Buck",
          "Kamala Das",
          "T.S. Eliot",
          "John Updike"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "What is the name of the Japanese surgeon who finds an American prisoner of war washed ashore?",
        "options": [
          "General Takada",
          "Dr. Sadao Hoki",
          "Professor Harley",
          "Tom"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Where did Dr. Sadao meet his wife, Hana?",
        "options": [
          "In a local hospital in Japan",
          "At an American professor's house in America",
          "During a train journey in Tokyo",
          "At a medical conference in Germany"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Why did Dr. Sadao\u2019s father send him to America at the age of twenty-two?",
        "options": [
          "To study architecture and art",
          "To learn all that could be learned of surgery and medicine",
          "To join the American military",
          "To settle down permanently"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What was the name of the American wounded soldier found by Sadao and Hana?",
        "options": [
          "Arthur",
          "Tom",
          "Jim",
          "Michael"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Why did the General keep Dr. Sadao in Japan instead of sending him to the battlefield?",
        "options": [
          "Because the General did not trust any other doctor and might need Sadao for his own operation",
          "Because Sadao was secretly working as a spy",
          "Because Sadao had bribed the military officials",
          "Because the General hated the war"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "What did the servants do when Sadao and Hana decided to shelter the American soldier?",
        "options": [
          "They helped them nurse the soldier in secret",
          "They reported the matter to the police immediately",
          "They packed their belongings and left the house together",
          "They threatened to kill the soldier themselves"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What did the General promise Sadao regarding the American prisoner?",
        "options": [
          "To reward him with a medal of honor",
          "To send his private assassins to kill the man quietly and remove his body",
          "To deport the soldier back to America through a neutral ship",
          "To give the soldier a fair trial in a military court"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "How did Dr. Sadao finally help the American prisoner escape?",
        "options": [
          "By hiding him inside a military truck",
          "By giving him his own boat, food, bottled water, and instructions to go to a nearby island",
          "By disguising him as a Japanese monk",
          "By letting him swim across the bay under the cover of darkness"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Towards the end of the story, what does Dr. Sadao recall while looking out into the sea?",
        "options": [
          "The faces of the American professors who had been kind to him",
          "The harsh treatment he received from his father",
          "The various Americans he had known and why he could not hate them",
          "The warnings given by the General about treason"
        ],
        "answer": 2,
        "answerLetter": "C"
      }
    ],
    "On the Face of It": [
      {
        "question": "Who is the author of the play \"On the Face of It\"?",
        "options": [
          "Susan Hill",
          "Pearl S. Buck",
          "William Douglas",
          "Alphonse Daudet"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "What is the name of the old man living in the house with a garden?",
        "options": [
          "Mr. Lamb",
          "Mr. Henderson",
          "Mr. John",
          "Mr. Smith"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "How did Mr. Lamb lose one of his legs?",
        "options": [
          "In a car accident",
          "In a war, getting blown off",
          "In a train accident",
          "From a disease in his childhood"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What was made of tin on Mr. Lamb's body?",
        "options": [
          "His arm",
          "His leg",
          "His ear",
          "His nose"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Why is Derry initially afraid or hesitant to enter Mr. Lamb\u2019s garden?",
        "options": [
          "He thinks nobody lives there",
          "He is afraid of dogs",
          "He thinks he might trip over the crab apples and fall",
          "He wants to avoid people because of his burned face"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What is wrong with Derry's face?",
        "options": [
          "He was born with a scar",
          "It was burned by acid on one side",
          "It was injured in a fight at school",
          "He got burned by boiling water"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What fruit does Mr. Lamb gather in his garden to make jelly?",
        "options": [
          "Oranges",
          "Apples (crab apples)",
          "Mangoes",
          "Peaches"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "According to Mr. Lamb, what does the world look like?",
        "options": [
          "A place full of hatred",
          "A place where everyone is ugly",
          "Whatever one chooses to look at it",
          "A lonely and dark place"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What story does Mr. Lamb narrate to Derry to teach him a lesson about perspective?",
        "options": [
          "The story of the ugly duckling",
          "The story of a man who locked himself in his room in fear",
          "The story of a prince who lost his kingdom",
          "The story of a fox and the grapes"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "At the end of the play, what does Derry do?",
        "options": [
          "He runs away and never returns",
          "He stays at his mother's house forever",
          "He defies his mother and runs back to Mr. Lamb's house",
          "He moves to another city"
        ],
        "answer": 2,
        "answerLetter": "C"
      }
    ],
    "Memories of Childhood": [
      {
        "question": "Who is the author of the first part of \"Memories of Childhood\" titled \"The Cutting of My Long Hair\"?",
        "options": [
          "Bama",
          "Zitkala-Sa",
          "Kamala Das",
          "Pearl S. Buck"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What was the primary reason Zitkala-Sa was terrified when her long hair was cut?",
        "options": [
          "It was against her school's dress code",
          "In her community, shingled hair was worn only by cowards and mourners",
          "She wanted to donate her hair to charity",
          "Her mother had strictly forbidden her to comb it"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What was the name of the missionary school where Zitkala-Sa was taken?",
        "options": [
          "Carlisle Indian School",
          "St. Xavier's School",
          "Mission of Mercy",
          "Oakridge Academy"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "In the second part of \"Memories of Childhood\" (\"We Too Are Human Beings\"), what was Bama's real name?",
        "options": [
          "Annai",
          "Bama",
          "Rajam",
          "Mangai"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "How old was Bama when she witnessed the incident involving the elder carrying a green banana packet by its strings?",
        "options": [
          "In the third grade",
          "In the fourth grade",
          "In the sixth grade",
          "In the seventh grade"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Why did the elder hold the packet of vadai by its strings instead of touching it directly?",
        "options": [
          "Because the food was extremely hot",
          "Because he belonged to a lower caste and was considered 'untouchable'",
          "Because the landlord ordered him not to spill it",
          "Because the packet was greasy"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What advice did Bama's brother, Annan, give her to overcome the indignity of caste discrimination?",
        "options": [
          "To fight the landlords physically",
          "To leave the village and never return",
          "To study hard and make progress so that people would come to her",
          "To accept her fate silently"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What did Judwin attempt to warn Zitkala-Sa about upon their arrival at the school?",
        "options": [
          "The teachers were very strict with homework",
          "The paleface woman intended to cut their hair",
          "The food in the dining hall was inedible",
          "They would have to wear heavy woolen blankets"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "How did Bama usually spend her time walking home from school, which normally took ten minutes?",
        "options": [
          "By rushing home straight to finish her homework",
          "By stopping to watch all the novelty and entertainment on the street",
          "By playing hide-and-seek with her friends",
          "By helping vendors sell their items"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What common underlying theme connects the experiences of both Zitkala-Sa and Bama in \"Memories of Childhood\"?",
        "options": [
          "The joy of village festivals",
          "The struggle against oppression, marginalization, and cultural discrimination",
          "The importance of modern technology in education",
          "The benefits of boarding school life"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ]
  },
  "IP": {
    "Python Pandas-I": [
      {
        "question": "Which of the following is a primary one-dimensional data structure in Python Pandas?",
        "options": [
          "DataFrame",
          "Series",
          "Panel",
          "Array"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which library needs to be imported along with pandas for array operations or plotting often associated with it?",
        "options": [
          "math",
          "numpy",
          "random",
          "scipy"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What will be the output of pd.Series(\\[10, 20, 30]) if explicit indices are not specified?",
        "options": [
          "Indices will start from 1",
          "Indices will start from 0 by default",
          "Indices will be alphabetic (a, b, c)",
          "It will raise a ValueError"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which attribute of a Pandas Series returns the data types of the underlying data?",
        "options": [
          "shape",
          "index",
          "dtype",
          "values"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following can be used to create a Pandas Series?",
        "options": [
          "A Python dictionary",
          "A scalar value",
          "A NumPy ndarray",
          "All of the above"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "What is a two-dimensional, size-mutable, potentially heterogeneous tabular data structure in Pandas called?",
        "options": [
          "Series",
          "DataFrame",
          "Panel",
          "Matrix"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following methods can be used to view the first few rows of a DataFrame?",
        "options": [
          "tail()",
          "head()",
          "top()",
          "first()"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "How can you select a specific column named 'Name' from a DataFrame df?",
        "options": [
          "df.Name or df\\['Name']",
          "df.select('Name')",
          "df(Name)",
          "df.get\\_column('Name')"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which attribute returns a tuple representing the dimensionality (rows, columns) of a DataFrame?",
        "options": [
          "size",
          "shape",
          "ndim",
          "axes"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What happens when you perform mathematical operations on two Series with mismatched indices in Pandas?",
        "options": [
          "It raises an error",
          "It aligns the matching indices and fills unmatched indices with NaN",
          "It ignores unmatched indices completely",
          "It returns 0 for all unmatched indices"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Python Pandas-II": [
      {
        "question": "Which function is used to combine two DataFrames database-style based on matching columns or indices?",
        "options": [
          "join()",
          "merge()",
          "concat()",
          "combine()"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which function is primarily used to concatenate pandas objects along a particular axis with optional set logic along the other axes?",
        "options": [
          "merge()",
          "join()",
          "concat()",
          "append()"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which pandas method is used to split a DataFrame into groups based on specified column values to perform aggregations?",
        "options": [
          "split()",
          "groupby()",
          "aggregate()",
          "partition()"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What is the default type of join performed by the merge() function in pandas when no how parameter is specified?",
        "options": [
          "Left join",
          "Right join",
          "Outer join",
          "Inner join"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Which function is used to remove rows or columns containing missing (NaN) values in a DataFrame?",
        "options": [
          "removena()",
          "dropna()",
          "fillna()",
          "clear()"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which method is used to replace all missing (NaN) values in a DataFrame with a specified scalar value or filling method?",
        "options": [
          "replace\\_na()",
          "dropna()",
          "fillna()",
          "substitute()"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which function is used to sort a DataFrame by the values of one or more columns?",
        "options": [
          "sort\\_index()",
          "order()",
          "sort()",
          "sort\\_values()"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Which generator method allows iterating through the rows of a DataFrame as (index, Series) pairs?",
        "options": [
          "iterrows()",
          "itertuples()",
          "items()",
          "looprows()"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which parameter in the drop() function specifies whether the given labels refer to index rows (0) or columns (1)?",
        "options": [
          "level",
          "axis",
          "dimension",
          "direction"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which function is used to modify or rename specific index labels or column names in a DataFrame?",
        "options": [
          "changename()",
          "modify()",
          "rename()",
          "altname()"
        ],
        "answer": 2,
        "answerLetter": "C"
      }
    ],
    "Plotting with Pyplot": [
      {
        "question": "Which module is commonly imported for creating plots in Python?",
        "options": [
          "matplotlib.pyplot",
          "pandas.plot",
          "numpy.plot",
          "math.pyplot"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which function is used to display the plot on the screen?",
        "options": [
          "plt.display()",
          "plt.show()",
          "plt.render()",
          "plt.view()"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which function is used to create a bar chart in Matplotlib?",
        "options": [
          "plt.barplot()",
          "plt.bar()",
          "plt.histogram()",
          "plt.column()"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which function is used to give a title to the generated plot?",
        "options": [
          "plt.heading()",
          "plt.name()",
          "plt.title()",
          "plt.caption()"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which parameter in plt.plot() is used to change the thickness of the line?",
        "options": [
          "thickness",
          "size",
          "linewidth",
          "width"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which function is used to save a plot to an image file on disk?",
        "options": [
          "plt.save()",
          "plt.savefig()",
          "plt.writefile()",
          "plt.store()"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which type of plot is most suitable for showing the frequency distribution of a continuous variable?",
        "options": [
          "Line chart",
          "Bar chart",
          "Histogram",
          "Scatter plot"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which function is used to add a label to the X-axis?",
        "options": [
          "plt.xlabel()",
          "plt.axisX()",
          "plt.labelX()",
          "plt.set\\_x()"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "To show different lines or categories distinctly on a plot with a descriptive label box, which function is used?",
        "options": [
          "plt.box()",
          "plt.legend()",
          "plt.key()",
          "plt.tag()"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which argument is used with plt.plot() to specify markers at data points, such as circles?",
        "options": [
          "marker='o'",
          "point='circle'",
          "dot=True",
          "symbol='o'"
        ],
        "answer": 0,
        "answerLetter": "A"
      }
    ],
    "Importing/Exporting Data between CSV Files/MySQL and Pandas": [
      {
        "question": "Which of the following pandas functions is used to read data from a CSV file into a DataFrame?",
        "options": [
          "read\\_csv()",
          "load\\_csv()",
          "import\\_csv()",
          "open\\_csv()"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which parameter in read\\_csv() is used to specify a custom separator or delimiter instead of a comma?",
        "options": [
          "delimiter",
          "sep",
          "separator",
          "Both (A) and (B)"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "To export a pandas DataFrame to a CSV file without including the row index numbers, which parameter should be set to False?",
        "options": [
          "header",
          "index",
          "row\\_index",
          "columns"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which function is used to write or export the contents of a DataFrame into a CSV file?",
        "options": [
          "write\\_csv()",
          "save\\_csv()",
          "to\\_csv()",
          "export\\_csv()"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which Python library module is primarily required to establish a connection between Python and a MySQL database?",
        "options": [
          "pandas",
          "mysql.connector",
          "sql.db",
          "connection"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which method of a MySQL database connection object is used to create a cursor object for executing SQL queries?",
        "options": [
          "execute()",
          "cursor()",
          "get\\_cursor()",
          "connect()"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which function from the pandas library is used to read the result of a SQL query directly into a DataFrame?",
        "options": [
          "read\\_sql()",
          "read\\_query()",
          "read\\_database()",
          "fetch\\_sql()"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "What is the correct sequence of steps to fetch data from a MySQL database into a pandas DataFrame using Python?",
        "options": [
          "Connect to database $\\\\rightarrow$ Create cursor $\\\\rightarrow$ Execute SQL query $\\\\rightarrow$ Pass query and connection to read\\_sql()",
          "Create cursor $\\\\rightarrow$ Connect to database $\\\\rightarrow$ Pass connection to read\\_sql() $\\\\rightarrow$ Execute query",
          "Use read\\_sql() directly without any connection or cursor",
          "Export database to CSV first $\\\\rightarrow$ Use read\\_csv()"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "..) as column names?",
        "options": [
          "header = False",
          "names = None",
          "header = None",
          "index\\_col = None"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which method is called on the database connection object to permanently save changes made to the MySQL database during an insertion, update, or deletion operation?",
        "options": [
          "save()",
          "commit()",
          "apply()",
          "update()"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "MySQL Revision Tour": [
      {
        "question": "Which of the following is not a DDL (Data Definition Language) command in MySQL?",
        "options": [
          "CREATE",
          "ALTER",
          "INSERT",
          "DROP"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which SQL command is used to display the structure (columns and data types) of an existing table?",
        "options": [
          "SHOW TABLES",
          "DESCRIBE",
          "SELECT",
          "DISPLAY"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which operator is used in a WHERE clause to search for a specified pattern in a column?",
        "options": [
          "BETWEEN",
          "IN",
          "LIKE",
          "IS NULL"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What will be the output of the function: SELECT ROUND(45.923, 1);?",
        "options": [
          "45.9",
          "46.0",
          "45.92",
          "45"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following aggregate functions returns the total number of rows in a table or the number of non-NULL values in a column?",
        "options": [
          "SUM()",
          "TOTAL()",
          "COUNT()",
          "NUMBER()"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which clause is used with aggregate functions to group the result set by one or more columns?",
        "options": [
          "ORDER BY",
          "GROUP BY",
          "HAVING",
          "WHERE"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What type of SQL function is UPPER()?",
        "options": [
          "Aggregate function",
          "Mathematical function",
          "String function",
          "Date function"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following clauses is used to filter records after the GROUP BY clause has been applied?",
        "options": [
          "WHERE",
          "HAVING",
          "FILTER",
          "LIMIT"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What is the default ordering order when using the ORDER BY clause?",
        "options": [
          "Ascending (ASC)",
          "Descending (DESC)",
          "Random",
          "Alphabetical by length"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following statements is true regarding NULL values in a MySQL table?",
        "options": [
          "NULL is the same as zero (0)",
          "NULL is the same as an empty string ('')",
          "NULL represents a missing or unknown value",
          "Arithmetic operations with NULL result in 1"
        ],
        "answer": 2,
        "answerLetter": "C"
      }
    ],
    "MySQL Functions": [
      {
        "question": "Which of the following functions is used to find the length of a string in MySQL?",
        "options": [
          "LENGTH()",
          "COUNT()",
          "MID()",
          "SIZE()"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "What will be the output of the MySQL query: SELECT LOWER(\"CBSE-CLASS-12\");?",
        "options": [
          "cbse-class-12",
          "CBSE-CLASS-12",
          "CBSE CLASS 12",
          "cbse class 12"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which string function is used to extract a substring from a given string in MySQL?",
        "options": [
          "SUBSTR()",
          "EXTRACT()",
          "PART()",
          "CUT()"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "What will be the output of the MySQL query: SELECT ROUND(45.923, 1);?",
        "options": [
          "45.9",
          "46.0",
          "45.92",
          "46"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which mathematical function returns the greatest integer less than or equal to a given number?",
        "options": [
          "CEIL()",
          "FLOOR()",
          "ROUND()",
          "TRUNCATE()"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What will be the output of the MySQL query: SELECT MOD(17, 3);?",
        "options": [
          "5",
          "2",
          "3",
          "1"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which function is used to get the current date and time in MySQL?",
        "options": [
          "CURRENT\\_DATE()",
          "NOW()",
          "SYSDATE()",
          "Both (B) and (C)"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "What does the DAYNAME() function return when passed a specific date?",
        "options": [
          "The numeric day of the month (1-31)",
          "The day of the week as a text string (e.g., Monday)",
          "The numeric day of the year (1-366)",
          "The name of the month"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following functions is an aggregate (group) function in MySQL?",
        "options": [
          "POW()",
          "UCASE()",
          "MAX()",
          "INSTR()"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What will be the output of the MySQL query: SELECT COUNT(\\*); when executed on a table containing 50 rows, assuming 5 rows contain NULL values in a specific column?",
        "options": [
          "45",
          "50",
          "55",
          "0"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Querying using SQL": [
      {
        "question": "Which of the following is a DDL (Data Definition Language) command in SQL?",
        "options": [
          "SELECT",
          "INSERT",
          "CREATE TABLE",
          "UPDATE"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which SQL clause is used to filter the rows retrieved by a SELECT statement based on a specified condition?",
        "options": [
          "GROUP BY",
          "ORDER BY",
          "HAVING",
          "WHERE"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Which aggregate function in SQL is used to count the total number of rows in a table, including those with NULL values?",
        "options": [
          "COUNT(column\\_name)",
          "COUNT(\\*)",
          "SUM()",
          "AVG()"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following SQL operators is used for wildcard matching to find a pattern in a text column?",
        "options": [
          "IN",
          "BETWEEN",
          "LIKE",
          "IS NULL"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which string function in SQL is used to return a specified number of characters from the left side of a given string?",
        "options": [
          "LOWER()",
          "SUBSTR()",
          "LEFT()",
          "LENGTH()"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which mathematical function in SQL returns the integer value rounded up to the next nearest integer?",
        "options": [
          "ROUND()",
          "TRUNCATE()",
          "MOD()",
          "CEIL()"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Which clause is used along with aggregate functions to divide the result set into groups of rows?",
        "options": [
          "ORDER BY",
          "GROUP BY",
          "WHERE",
          "DISTINCT"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What will be the output of the SQL query: SELECT ROUND(45.923, 2);?",
        "options": [
          "45.92",
          "45.9",
          "46",
          "45.93"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which SQL constraint or operator is used to ensure that all values in a column are unique and do not contain any NULLs?",
        "options": [
          "UNIQUE",
          "CHECK",
          "PRIMARY KEY",
          "DEFAULT"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which type of relationship is combined when two tables are joined using a condition based on equality between columns?",
        "options": [
          "Equi-join",
          "Natural join",
          "Cross join",
          "Outer join"
        ],
        "answer": 0,
        "answerLetter": "A"
      }
    ],
    "Joins and Set Operations": [
      {
        "question": "Which SQL clause is used to combine rows from two or more tables based on a related column between them?",
        "options": [
          "GROUP BY",
          "JOIN",
          "ORDER BY",
          "HAVING"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which type of join returns all records when there is a match in either the left or the right table?",
        "options": [
          "INNER JOIN",
          "LEFT JOIN",
          "RIGHT JOIN",
          "FULL OUTER JOIN"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Which join returns all records from the left table, and the matched records from the right table?",
        "options": [
          "LEFT JOIN",
          "RIGHT JOIN",
          "INNER JOIN",
          "CROSS JOIN"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "What is another name for INNER JOIN in SQL?",
        "options": [
          "Outer Join",
          "Simple Join",
          "Cartesian Join",
          "Full Join"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which set operation is used to combine the result sets of two or more SELECT statements while removing duplicate rows?",
        "options": [
          "UNION ALL",
          "UNION",
          "INTERSECT",
          "MINUS"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which set operation returns only the rows that are common to both SELECT statements, retaining duplicates if they exist in both?",
        "options": [
          "UNION",
          "INTERSECT",
          "UNION ALL",
          "EXCEPT"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What is the default join type if you simply use the keyword JOIN without specifying INNER, LEFT, or RIGHT in standard SQL?",
        "options": [
          "LEFT JOIN",
          "CROSS JOIN",
          "INNER JOIN",
          "FULL JOIN"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "If Table A has 4 rows and Table B has 3 rows, what will be the number of rows resulting from a CROSS JOIN between Table A and Table B?",
        "options": [
          "1",
          "7",
          "12",
          "0"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which set operation returns the rows from the first query that are not present in the output of the second query?",
        "options": [
          "UNION",
          "INTERSECT",
          "MINUS (or EXCEPT)",
          "UNION ALL"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What condition is primarily required to perform a natural join or an equijoin between two tables?",
        "options": [
          "The tables must have the same number of columns.",
          "There must be a matching column or common attribute between the tables.",
          "Both tables must have the same number of rows.",
          "The primary keys must be identical."
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Introduction to Computer Network": [
      {
        "question": "Which of the following topologies requires a central controller or hub/switch to connect all devices?",
        "options": [
          "Bus topology",
          "Star topology",
          "Ring topology",
          "Mesh topology"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What does ARPANET stand for?",
        "options": [
          "Advanced Research Projects Agency Network",
          "Automated Radio Processing and Network Evaluation Technology",
          "Advanced Remote Protocol and Networked Exchange Technology",
          "American Research Projects Academic Network"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which switching technique establishes a dedicated and complete physical path between the communicating devices before communication begins?",
        "options": [
          "Packet switching",
          "Message switching",
          "Circuit switching",
          "Datagram switching"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following transmission media has the highest data transmission speed and is immune to electromagnetic interference?",
        "options": [
          "Twisted pair cable",
          "Coaxial cable",
          "Optical fiber cable",
          "Unshielded twisted pair cable"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which device operates at the physical layer of the OSI model and simply regenerates and amplifies weak signals to extend the network reach?",
        "options": [
          "Router",
          "Switch",
          "Repeater",
          "Gateway"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which network device is intelligent enough to forward data packets specifically to the intended destination device using MAC addresses rather than broadcasting them to all ports?",
        "options": [
          "Hub",
          "Repeater",
          "Switch",
          "Modem"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What is the primary function of a router in a computer network?",
        "options": [
          "Amplifying signals over long distances",
          "Connecting completely different networks and forwarding packets using IP addresses",
          "Converting digital signals to analog signals",
          "Connecting nodes in a local star topology"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following protocols is responsible for assigning IP addresses dynamically to devices on a network?",
        "options": [
          "TCP",
          "HTTP",
          "DHCP",
          "FTP"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What is the full form of VoIP, a technology that allows voice communication over the Internet?",
        "options": [
          "Voice over Internet Protocol",
          "Video over Internet Packet",
          "Virtual Internet Operating Protocol",
          "Verified Optical Information Path"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which unique 48-bit hardware address is hardcoded into the Network Interface Card (NIC) by the manufacturer?",
        "options": [
          "IP address",
          "MAC address",
          "URL",
          "Port address"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Introduction to Internet and Web": [
      {
        "question": "Which of the following terms refers to a global network of interconnected computer networks?",
        "options": [
          "Intranet",
          "Extranet",
          "Internet",
          "Local Area Network"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Who is widely credited with inventing the World Wide Web (WWW) in 1989?",
        "options": [
          "Charles Babbage",
          "Tim Berners-Lee",
          "Vint Cerf",
          "Alan Turing"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What does URL stand for in the context of web addresses?",
        "options": [
          "Uniform Resource Locator",
          "Universal Record Link",
          "Unified Retrieval Language",
          "Unique Reference Locator"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which protocol is primarily used for transferring hypertext documents securely across the World Wide Web?",
        "options": [
          "FTP",
          "SMTP",
          "HTTPS",
          "TCP/IP"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following is a software application used to access and view information on the World Wide Web?",
        "options": [
          "Web Server",
          "Web Browser",
          "Web Hosting",
          "Web Compiler"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What is the primary function of a Web Server?",
        "options": [
          "To display web pages to the user",
          "To store and deliver web pages to users upon request",
          "To design and write HTML code",
          "To translate domain names into IP addresses"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following components uniquely identifies a specific web page or resource on the internet?",
        "options": [
          "IP Address",
          "URL",
          "MAC Address",
          "Subnet Mask"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What does ISP stand for in internet terminology?",
        "options": [
          "Internet Service Provider",
          "Internal System Protocol",
          "Information Security Program",
          "International Standard Port"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following is an example of a web browser?",
        "options": [
          "Apache",
          "Nginx",
          "Google Chrome",
          "Linux"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What is the purpose of an IP (Internet Protocol) address?",
        "options": [
          "To format text in a web browser",
          "To uniquely identify a device connected to a network",
          "To encrypt data during transmission",
          "To manage website graphics"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Societal Impacts": [
      {
        "question": "Which of the following refers to the legal rights granted to creators for their literary and artistic works?",
        "options": [
          "Patent",
          "Trademark",
          "Copyright",
          "Trade secret"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What term is used to describe software that is freely available for use, modification, and redistribution without restriction?",
        "options": [
          "Proprietary software",
          "Open source software",
          "Shareware",
          "Freeware"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Stealing someone else's idea, work, or intellectual property and passing it off as one's own is known as:",
        "options": [
          "Phishing",
          "Plagiarism",
          "Hacking",
          "Cyberstalking"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is a moral principle or code of conduct that governs a person's behavior regarding the use of computers and information technology?",
        "options": [
          "Copyright law",
          "Computer ethics",
          "Open source licensing",
          "Digital divide"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which type of license allows users to run, modify, and redistribute software, but requires the modified version to be distributed under the same terms?",
        "options": [
          "Proprietary license",
          "Copyleft license",
          "Freeware license",
          "Commercial license"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What refers to the gap between people who have regular, effective access to digital technologies and those who do not?",
        "options": [
          "Digital footprint",
          "Digital citizenship",
          "Digital divide",
          "E-waste"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "The trail of data or information left behind by a user while using the internet is called a:",
        "options": [
          "Digital signature",
          "Digital footprint",
          "Digital certificate",
          "Digital right"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following represents discarded electronic appliances and devices, posing environmental and health hazards?",
        "options": [
          "Plastic waste",
          "E-waste",
          "Chemical waste",
          "Biodegradable waste"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What term describes the legal protection given to a unique invention, giving the owner the exclusive right to prevent others from making, using, or selling it?",
        "options": [
          "Copyright",
          "Patent",
          "Trademark",
          "Plagiarism"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following practices helps in reducing energy consumption and carbon footprint associated with computing?",
        "options": [
          "Leaving computers running 24/7",
          "Green computing",
          "Excessive printing",
          "Unnecessary cloud storage"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ]
  },
  "CS": {
    "Python Revision Tour-1": [
      {
        "question": "Which of the following is a valid Python identifier?",
        "options": [
          "2value",
          "total\\_marks",
          "class",
          "total-marks"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What will be the output of the following Python statement?\n\n\n\nprint(17 // 5)",
        "options": [
          "3.4",
          "2",
          "3",
          "4"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following data types is immutable in Python?",
        "options": [
          "List",
          "Dictionary",
          "Set",
          "Tuple"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "What will be the output of the following code?\n\n\n\nx = 10\n\nx += 5\n\nprint(x)",
        "options": [
          "10",
          "15",
          "5",
          "105"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which operator is used for exponentiation in Python?",
        "options": [
          "^",
          "//",
          "\\*\\*",
          "%"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What will be the output of the following code?\n\n\n\nprint(10 % 3)",
        "options": [
          "3",
          "1",
          "0",
          "3.33"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following statements about Python variables is correct?",
        "options": [
          "A variable must be declared with its data type before use.",
          "A variable can store a value without an explicit type declaration.",
          "A variable can store only integer values.",
          "A variable name must always begin with a number."
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What will be the output of the following code?\n\n\n\nx = 5\n\ny = 2\n\nprint(x > 3 and y < 5)",
        "options": [
          "True",
          "False",
          "5",
          "2"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which Python function is used to determine the data type of a value?",
        "options": [
          "input()",
          "print()",
          "type()",
          "id()"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What will be the output of the following code?\n\n\n\nx = 5\n\ny = 2\n\nprint(x / y)",
        "options": [
          "2",
          "2.5",
          "3",
          "1"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Python Revision Tour-2": [
      {
        "question": "Which of the following is a valid way to create a string in Python?",
        "options": [
          "s = 'Python'",
          "s = Python",
          "s = {Python}",
          "s = (Python)"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "What will be the output of the following code?\n\n\n\ns = \"COMPUTER\"\n\nprint(s\\[2:5])",
        "options": [
          "COM",
          "MPU",
          "MPUT",
          "PUT"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following methods is used to convert a string into a list of words?",
        "options": [
          "join()",
          "append()",
          "split()",
          "insert()"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What will be the output of the following code?\n\n\n\nL = \\[10, 20, 30]\n\nL.append(40)\n\nprint(L)",
        "options": [
          "\\[10, 20, 30]",
          "\\[40, 10, 20, 30]",
          "\\[10, 20, 30, 40]",
          "\\[10, 20, 40, 30]"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following statements about tuples in Python is correct?",
        "options": [
          "Tuples are mutable.",
          "Tuples are immutable.",
          "Tuples can contain only integers.",
          "Tuples cannot contain duplicate values."
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What will be the output of the following code?\n\n\n\nT = (10, 20, 30, 40)\n\nprint(T\\[-1])",
        "options": [
          "10",
          "20",
          "30",
          "40"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Which of the following is used to access the value associated with a key in a dictionary named student?",
        "options": [
          "student\\[0]",
          "student(key)",
          "student\\[key]",
          "student.key"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What will be the output of the following code?\n\n\n\nD = {'A': 10, 'B': 20}\n\nprint('A' in D)",
        "options": [
          "True",
          "False",
          "10",
          "20"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which sorting technique repeatedly compares adjacent elements and swaps them when they are in the wrong order?",
        "options": [
          "Insertion sort",
          "Bubble sort",
          "Binary search",
          "Linear search"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What will be the output of the following code?\n\n\n\nL = \\[30, 10, 20]\n\nL.sort()\n\nprint(L)",
        "options": [
          "\\[30, 20, 10]",
          "\\[10, 20, 30]",
          "\\[20, 10, 30]",
          "\\[30, 10, 20]"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Working with Functions": [
      {
        "question": "Which of the following is a valid way to define a user-defined function in Python?",
        "options": [
          "function add(a, b):",
          "def add(a, b):",
          "define add(a, b):",
          "func add(a, b):"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "In the following function, which are the parameters?\n\n\n\ndef multiply(x, y):\n\n&#x20;   return x \\* y",
        "options": [
          "multiply and return",
          "x and y",
          "x \\* y",
          "return x \\* y"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What will be the output of the following code?\n\n\n\ndef show(a, b):\n\n&#x20;   print(a + b)\n\n\n\nshow(4, 6)",
        "options": [
          "4",
          "6",
          "10",
          "46"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which type of argument is passed according to the position of the argument in the function call?",
        "options": [
          "Keyword argument",
          "Default argument",
          "Positional argument",
          "Global argument"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What will be the output of the following code?\n\n\n\ndef greet(name=\"Student\"):\n\n&#x20;   print(\"Hello\", name)\n\n\n\ngreet()",
        "options": [
          "Hello",
          "Hello Student",
          "Student Hello",
          "Error"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following function calls correctly uses a keyword argument for the function below?\n\n\n\ndef display(name, age):\n\n&#x20;   print(name, age)",
        "options": [
          "display(name=\"Aman\", age=17)",
          "display(\"Aman\", age=17)",
          "display(age=17, name=\"Aman\")",
          "All of the above"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "What is the purpose of the return statement in a function?",
        "options": [
          "It defines a function",
          "It passes a value back to the calling statement",
          "It prints a value on the screen",
          "It takes input from the user"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "A variable declared inside a function generally has which scope?",
        "options": [
          "Global scope",
          "Local scope",
          "Module scope",
          "Permanent scope"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following statements about default arguments is correct?",
        "options": [
          "A default argument must always be followed by another non-default argument.",
          "A default value is used when the corresponding argument is not supplied.",
          "Default arguments cannot be used in Python functions.",
          "Default arguments can only store integer values."
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What will be the output of the following code?\n\n\n\ndef calculate(a, b=5):\n\n&#x20;   return a + b\n\n\n\nprint(calculate(10))",
        "options": [
          "10",
          "5",
          "15",
          "Error"
        ],
        "answer": 2,
        "answerLetter": "C"
      }
    ],
    "Using Functions Defined in Modules": [
      {
        "question": "Which of the following is the correct way to import the math module in Python?",
        "options": [
          "include math",
          "import math",
          "using math",
          "load math"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which statement is used to import only the sqrt() function from the math module?",
        "options": [
          "import math.sqrt",
          "from math import sqrt",
          "include math.sqrt",
          "from sqrt import math"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What will be the output of the following statement?\n\n\n\nimport math\n\nprint(math.sqrt(25))",
        "options": [
          "5",
          "5.0",
          "25.0",
          "625"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following functions returns the smallest integer greater than or equal to a given number?",
        "options": [
          "math.floor()",
          "math.ceil()",
          "math.fabs()",
          "math.sqrt()"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What will be the output of the following code?\n\n\n\nimport math\n\nprint(math.floor(7.8))",
        "options": [
          "7",
          "8",
          "7.8",
          "6"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following functions from the random module returns a random integer between two specified integers, including both endpoints?",
        "options": [
          "random()",
          "randrange()",
          "randint()",
          "uniform()"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What type of value is returned by random.random()?",
        "options": [
          "A random integer from 0 to 1",
          "A random floating-point number from 0.0 to 1.0",
          "A fixed integer value",
          "A Boolean value"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which module is used for calculating the arithmetic mean, median, and mode of numerical data?",
        "options": [
          "math",
          "random",
          "statistics",
          "numbers"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What will be the output of the following code?\n\n\n\nfrom math import ceil\n\nprint(ceil(6.2))",
        "options": [
          "6",
          "6.2",
          "7",
          "7.2"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following statements is correct about importing a function using the from statement?",
        "options": [
          "The function must always be called with the module name.",
          "Only the specified function(s) can be imported from the module.",
          "The entire Python library is imported.",
          "The module cannot contain any other functions."
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Exception Handling": [
      {
        "question": "Which of the following keywords is used to handle an exception in Python?",
        "options": [
          "catch",
          "except",
          "error",
          "handle"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which block contains the statements that may generate an exception?",
        "options": [
          "except",
          "finally",
          "try",
          "raise"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What happens if an exception occurs inside a try block and there is a matching except block?",
        "options": [
          "The program always terminates",
          "The exception is handled by the matching except block",
          "The try block is executed again",
          "The finally block is skipped"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is the correct basic syntax for exception handling?",
        "options": [
          "try-except",
          "try-catch",
          "do-except",
          "check-error"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which exception is raised when an attempt is made to divide a number by zero?",
        "options": [
          "ValueError",
          "TypeError",
          "ZeroDivisionError",
          "NameError"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which block is executed whether an exception occurs or not?",
        "options": [
          "try",
          "except",
          "else",
          "finally"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Which exception is generally raised when an operation or function receives an argument of an inappropriate type?",
        "options": [
          "TypeError",
          "IndexError",
          "NameError",
          "ZeroDivisionError"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "What will happen when the following code is executed?\n\n\n\ntry:\n\n&#x20;   print(10 / 0)\n\nexcept ZeroDivisionError:\n\n&#x20;   print(\"Error\")",
        "options": [
          "10",
          "0",
          "Error",
          "The program produces no output"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which statement is used to explicitly raise an exception in Python?",
        "options": [
          "throw",
          "raise",
          "error",
          "except"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Consider the following code:\n\n\n\ntry:\n\n&#x20;   x = int(\"ABC\")\n\nexcept ValueError:\n\n&#x20;   print(\"Invalid\")\n\n\n\nWhat will be printed?",
        "options": [
          "ABC",
          "Invalid",
          "ValueError",
          "Nothing"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "File Handling": [
      {
        "question": "Which of the following modes opens a text file for reading only?",
        "options": [
          "w",
          "r",
          "a",
          "w+"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which function is used to open a file in Python?",
        "options": [
          "file()",
          "open()",
          "read()",
          "openfile()"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which method reads a single line from a text file?",
        "options": [
          "read()",
          "readlines()",
          "readline()",
          "readlineall()"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which method returns the current position of the file pointer?",
        "options": [
          "seek()",
          "tell()",
          "position()",
          "pointer()"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which statement is used to open a binary file for reading?",
        "options": [
          "open(\"data.dat\", \"r\")",
          "open(\"data.dat\", \"w\")",
          "open(\"data.dat\", \"rb\")",
          "open(\"data.dat\", \"br\")"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which module is used for storing and retrieving Python objects in a binary file?",
        "options": [
          "csv",
          "pickle",
          "binary",
          "file"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which function of the pickle module is used to write an object into a binary file?",
        "options": [
          "load()",
          "read()",
          "dump()",
          "write()"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which function is used to read records from a CSV file?",
        "options": [
          "csv.read()",
          "csv.reader()",
          "csv.load()",
          "csv.get()"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which mode is used to open a text file for adding new data at the end without deleting existing data?",
        "options": [
          "r",
          "w",
          "a",
          "r+"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Consider the following code:\n\n\n\nf = open(\"data.txt\", \"w\")\n\nf.write(\"Python\")\n\nf.close()\n\n\n\nf = open(\"data.txt\", \"r\")\n\nprint(f.read())\n\nf.close()\n\n\n\nWhat will be displayed?",
        "options": [
          "data.txt",
          "Python",
          "write",
          "Nothing"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Data Structures": [
      {
        "question": "Which data structure follows the LIFO (Last In, First Out) principle?",
        "options": [
          "Queue",
          "Stack",
          "Array",
          "Linked List"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which Python data structure can be used to implement a stack?",
        "options": [
          "List",
          "Tuple",
          "String",
          "Dictionary"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which operation is used to add an element to the top of a stack?",
        "options": [
          "pop()",
          "push()",
          "append()",
          "insert()"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which operation removes the topmost element from a stack implemented using a Python list?",
        "options": [
          "delete()",
          "remove()",
          "pop()",
          "discard()"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What does the peek operation in a stack do?",
        "options": [
          "Adds an element to the stack",
          "Removes the bottom element",
          "Displays the top element without removing it",
          "Deletes all elements from the stack"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Consider the following code:\n\n\n\nstack = \\[]\n\nstack.append(10)\n\nstack.append(20)\n\nstack.append(30)\n\nprint(stack.pop())\n\n\n\nWhat will be the output?",
        "options": [
          "10",
          "20",
          "30",
          "\\[]"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What is the condition called when an attempt is made to remove an element from an empty stack?",
        "options": [
          "Overflow",
          "Underflow",
          "Collision",
          "Traversal"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Consider the following stack:\n\n\n\nstack = \\[10, 20, 30]\n\n\n\nIf stack.pop() is executed once, what will the stack contain?",
        "options": [
          "\\[20, 30]",
          "\\[10, 20]",
          "\\[10, 30]",
          "\\[30]"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which Python list method is most appropriate for adding an element to the top of a stack?",
        "options": [
          "append()",
          "pop()",
          "sort()",
          "reverse()"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "A stack contains the elements \\[5, 10, 15], where 15 is the top element. If 15 is popped and then 20 is pushed, which element will be at the top?",
        "options": [
          "5",
          "10",
          "15",
          "20"
        ],
        "answer": 3,
        "answerLetter": "D"
      }
    ],
    "Computer Networks-1": [
      {
        "question": "Which of the following is a type of computer network?",
        "options": [
          "LAN",
          "MAN",
          "WAN",
          "All of the above"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "Which network covers a small geographical area, such as a room, building, or school?",
        "options": [
          "WAN",
          "LAN",
          "MAN",
          "PAN"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which device is used to connect different networks and forward data packets between them?",
        "options": [
          "Switch",
          "Hub",
          "Router",
          "Repeater"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following is a wired transmission medium?",
        "options": [
          "Radio waves",
          "Infrared",
          "Optical fibre",
          "Microwaves"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which transmission medium uses light signals to transmit data?",
        "options": [
          "Twisted pair cable",
          "Coaxial cable",
          "Optical fibre",
          "Radio waves"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following devices broadcasts data to all the connected devices in a network?",
        "options": [
          "Hub",
          "Router",
          "Gateway",
          "Modem"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which protocol is primarily used for transferring web pages over the Internet?",
        "options": [
          "FTP",
          "HTTP",
          "SMTP",
          "POP3"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which protocol is used for sending e-mails?",
        "options": [
          "SMTP",
          "FTP",
          "HTTP",
          "TELNET"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following is an example of a wireless transmission medium?",
        "options": [
          "Coaxial cable",
          "Twisted pair cable",
          "Optical fibre",
          "Radio waves"
        ],
        "answer": 3,
        "answerLetter": "D"
      },
      {
        "question": "A computer in a school lab needs to communicate with other computers located within the same building. Which type of network would be most appropriate?",
        "options": [
          "LAN",
          "MAN",
          "WAN",
          "PAN"
        ],
        "answer": 0,
        "answerLetter": "A"
      }
    ],
    "Computer Networks-2": [
      {
        "question": "Which device is used to connect two or more networks that use different protocols?",
        "options": [
          "Hub",
          "Switch",
          "Gateway",
          "Repeater"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which network topology connects every device to a central device?",
        "options": [
          "Bus",
          "Star",
          "Ring",
          "Mesh"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which protocol is used for transferring web pages over the Internet?",
        "options": [
          "FTP",
          "HTTP",
          "SMTP",
          "POP3"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is used to uniquely identify a device on a network at the network layer?",
        "options": [
          "IP address",
          "MAC address",
          "URL",
          "Domain name"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which protocol is primarily used for sending e-mails?",
        "options": [
          "FTP",
          "HTTP",
          "SMTP",
          "TELNET"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which device forwards data packets between different networks?",
        "options": [
          "Repeater",
          "Router",
          "Hub",
          "Switch"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What is the main function of DNS?",
        "options": [
          "To transfer files between computers",
          "To convert domain names into IP addresses",
          "To encrypt e-mails",
          "To connect computers using Bluetooth"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following is a wireless communication technology commonly used for short-range communication between devices?",
        "options": [
          "Bluetooth",
          "Ethernet",
          "Fibre optic",
          "Coaxial cable"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which protocol is used for transferring files between computers over a network?",
        "options": [
          "FTP",
          "SMTP",
          "HTTP",
          "POP3"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "A school wants to connect computers in different rooms within the same building. Which type of network would be most appropriate?",
        "options": [
          "PAN",
          "LAN",
          "MAN",
          "WAN"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Relational Databases": [
      {
        "question": "In a relational database, a row in a table is also called a:",
        "options": [
          "Attribute",
          "Tuple",
          "Domain",
          "Field"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The number of attributes (columns) in a relation is called its:",
        "options": [
          "Cardinality",
          "Degree",
          "Domain",
          "Tuple"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "The number of tuples (rows) in a relation is called its:",
        "options": [
          "Degree",
          "Domain",
          "Cardinality",
          "Attribute"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which of the following can uniquely identify each record in a table?",
        "options": [
          "Primary key",
          "Domain",
          "Attribute name",
          "Table name"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following is true about a candidate key?",
        "options": [
          "It can contain duplicate values.",
          "It is always a foreign key.",
          "It is eligible to be selected as a primary key.",
          "It must contain all attributes of a table."
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "If a table has two candidate keys and one of them is selected as the primary key, the other candidate key is called:",
        "options": [
          "Foreign key",
          "Alternate key",
          "Composite key",
          "Super key"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which key is used to establish a link between two related tables?",
        "options": [
          "Primary key",
          "Candidate key",
          "Foreign key",
          "Alternate key"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Consider a table STUDENT with 5 columns and 20 rows. What are its degree and cardinality respectively?",
        "options": [
          "20 and 5",
          "5 and 20",
          "5 and 5",
          "20 and 20"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which of the following represents the possible values that an attribute can have?",
        "options": [
          "Tuple",
          "Domain",
          "Cardinality",
          "Degree"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "A table has RollNo, Name, Class, and Section as attributes. If RollNo uniquely identifies every student, which of the following is the most appropriate choice for the primary key?",
        "options": [
          "Name",
          "Class",
          "Section",
          "RollNo"
        ],
        "answer": 3,
        "answerLetter": "D"
      }
    ],
    "Simple Queries in SQL": [
      {
        "question": "Which SQL command is used to retrieve data from a table?",
        "options": [
          "GET",
          "SELECT",
          "FETCH",
          "DISPLAY"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which clause is used to specify the table from which data is to be retrieved?",
        "options": [
          "FROM",
          "WHERE",
          "TABLE",
          "SOURCE"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which SQL query displays all columns and all rows from a table named STUDENT?",
        "options": [
          "SELECT ALL FROM STUDENT;",
          "SELECT \\* FROM STUDENT;",
          "DISPLAY \\* FROM STUDENT;",
          "SELECT STUDENT FROM \\*;"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which clause is used to filter records according to a specified condition?",
        "options": [
          "ORDER BY",
          "GROUP BY",
          "WHERE",
          "HAVING"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which SQL operator is used to check whether a value lies within a specified range?",
        "options": [
          "IN",
          "BETWEEN",
          "LIKE",
          "RANGE"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which SQL clause is used to arrange the result of a query in ascending or descending order?",
        "options": [
          "SORT BY",
          "ORDER BY",
          "ARRANGE BY",
          "GROUP BY"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which SQL query will display the names of students whose marks are greater than 80?",
        "options": [
          "SELECT Name FROM Student WHERE Marks > 80;",
          "SELECT Name FROM Student IF Marks > 80;",
          "SELECT Student FROM Name WHERE Marks > 80;",
          "SELECT Name WHERE Marks > 80 FROM Student;"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which operator is used with the LIKE clause to represent any sequence of zero or more characters?",
        "options": [
          "\\_",
          "%",
          "\\*",
          "#"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What does the following SQL query return?\n\n\n\nSELECT DISTINCT City\n\nFROM Student;",
        "options": [
          "All cities, including duplicate values",
          "Only the first city in the table",
          "Unique city values without duplicates",
          "The number of cities in the table"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which SQL query correctly displays the Name and Marks of students having marks between 60 and 80, including both 60 and 80?",
        "options": [
          "SELECT Name, Marks FROM Student WHERE Marks > 60 AND Marks < 80;",
          "SELECT Name, Marks FROM Student WHERE Marks BETWEEN 60 AND 80;",
          "SELECT Name, Marks FROM Student WHERE Marks IN 60 AND 80;",
          "SELECT Name, Marks FROM Student WHERE Marks = 60 AND 80;"
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Table Creation and Data Manipulation Commands": [
      {
        "question": "Which SQL command is used to create a new table in a database?",
        "options": [
          "MAKE TABLE",
          "CREATE TABLE",
          "NEW TABLE",
          "ADD TABLE"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which SQL command is used to select a database for use?",
        "options": [
          "USE",
          "SELECT",
          "OPEN",
          "ACCESS"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following is the correct SQL statement to create a table named Student with columns RollNo and Name?",
        "options": [
          "CREATE Student (RollNo INT, Name VARCHAR(20));",
          "CREATE TABLE Student (RollNo INT, Name VARCHAR(20));",
          "TABLE Student CREATE (RollNo INT, Name VARCHAR(20));",
          "CREATE Student TABLE (RollNo INT, Name VARCHAR(20));"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which SQL command is used to add a new column to an existing table?",
        "options": [
          "UPDATE TABLE",
          "ADD TABLE",
          "ALTER TABLE",
          "MODIFY TABLE"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which SQL command is used to insert a new record into a table?",
        "options": [
          "INSERT INTO",
          "ADD INTO",
          "ENTER INTO",
          "UPDATE INTO"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which of the following is the correct statement to insert a record into a table named Student?",
        "options": [
          "INSERT Student VALUES (1, 'Aman');",
          "INSERT INTO Student VALUES (1, 'Aman');",
          "ADD INTO Student VALUES (1, 'Aman');",
          "INSERT VALUES INTO Student (1, 'Aman');"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which SQL command is used to modify existing records in a table?",
        "options": [
          "CHANGE",
          "MODIFY",
          "UPDATE",
          "ALTER"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which SQL command is used to remove selected records from a table?",
        "options": [
          "REMOVE",
          "DELETE",
          "DROP",
          "CLEAR"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What will the following command do?\n\n\n\nDELETE FROM Student;",
        "options": [
          "Deletes the Student table",
          "Deletes all records from the Student table",
          "Deletes only the first record",
          "Deletes the first column of the table"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which SQL command is used to permanently remove an existing table along with its structure and data?",
        "options": [
          "DELETE TABLE Student;",
          "REMOVE TABLE Student;",
          "DROP TABLE Student;",
          "CLEAR TABLE Student;"
        ],
        "answer": 2,
        "answerLetter": "C"
      }
    ],
    "Grouping Records, Joins in SQL": [
      {
        "question": "Which SQL clause is used to arrange rows into groups based on one or more columns?",
        "options": [
          "ORDER BY",
          "GROUP BY",
          "HAVING",
          "WHERE"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which SQL function is used to count the number of rows in a table?",
        "options": [
          "SUM()",
          "COUNT()",
          "TOTAL()",
          "NUMBER()"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which SQL function returns the average value of a numeric column?",
        "options": [
          "AVG()",
          "MEAN()",
          "AVERAGE()",
          "MID()"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which clause is used to apply a condition on groups created using GROUP BY?",
        "options": [
          "WHERE",
          "ORDER BY",
          "HAVING",
          "FROM"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "What will the following SQL statement return?\n\n\n\nSELECT MAX(Marks) FROM STUDENT;",
        "options": [
          "The average marks",
          "The minimum marks",
          "The maximum marks",
          "The total marks"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which SQL clause is used to sort the result of a query?",
        "options": [
          "GROUP BY",
          "ORDER BY",
          "HAVING",
          "SORT BY"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which type of JOIN returns only those records that have matching values in both tables?",
        "options": [
          "LEFT JOIN",
          "RIGHT JOIN",
          "INNER JOIN",
          "FULL JOIN"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Consider two tables, STUDENT and MARKS, having a common column RollNo. Which clause can be used to combine records from these tables based on RollNo?",
        "options": [
          "ON",
          "ORDER BY",
          "HAVING",
          "GROUP BY"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which SQL statement correctly finds the total salary of employees in each department?",
        "options": [
          "SELECT Dept, SUM(Salary) FROM Employee GROUP BY Dept;",
          "SELECT SUM(Dept), Salary FROM Employee GROUP BY Salary;",
          "SELECT Dept, TOTAL(Salary) FROM Employee;",
          "SELECT Dept, SUM(Salary) FROM Employee ORDER BY Dept;"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which statement correctly describes the difference between WHERE and HAVING?",
        "options": [
          "WHERE is used only with JOIN, while HAVING is used only with ORDER BY.",
          "WHERE filters individual rows, while HAVING filters groups.",
          "WHERE sorts rows, while HAVING groups rows.",
          "WHERE and HAVING always perform exactly the same function."
        ],
        "answer": 1,
        "answerLetter": "B"
      }
    ],
    "Interface Python with MySQL": [
      {
        "question": "Which Python module is commonly used to connect Python with MySQL?",
        "options": [
          "mysql.connector",
          "mysql.database",
          "mysql.connect",
          "mysql.python"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which function is used to establish a connection between Python and MySQL?",
        "options": [
          "mysql.connect()",
          "mysql.open()",
          "mysql.database()",
          "mysql.cursor()"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Which method is used to create a cursor object in Python while working with MySQL?",
        "options": [
          "connection.execute()",
          "connection.cursor()",
          "connection.create()",
          "connection.query()"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which method is used to execute an SQL query through a cursor object?",
        "options": [
          "cursor.run()",
          "cursor.query()",
          "cursor.execute()",
          "cursor.sql()"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which method is used to retrieve all records returned by a SELECT query?",
        "options": [
          "fetchone()",
          "fetchall()",
          "getall()",
          "readall()"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "Which SQL command is used to add a new record to a table?",
        "options": [
          "UPDATE",
          "INSERT",
          "ALTER",
          "CREATE"
        ],
        "answer": 1,
        "answerLetter": "B"
      },
      {
        "question": "What is the purpose of commit() in a Python-MySQL program?",
        "options": [
          "To close the database connection",
          "To create a cursor",
          "To permanently save changes made to the database",
          "To retrieve records from the database"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which statement correctly retrieves the first record from the result of a SELECT query?",
        "options": [
          "cursor.fetchone()",
          "cursor.fetchall()",
          "cursor.getone()",
          "cursor.first()"
        ],
        "answer": 0,
        "answerLetter": "A"
      },
      {
        "question": "Consider the following code:\n\n\n\nimport mysql.connector as mysql\n\ncon = mysql.connect(host=\"localhost\", user=\"root\", password=\"tiger\", database=\"school\")\n\ncur = con.cursor()\n\ncur.execute(\"SELECT \\* FROM student\")\n\ndata = cur.fetchall()\n\n\n\nWhat is stored in data?",
        "options": [
          "The database connection",
          "The cursor object",
          "All records returned by the query",
          "Only the first record returned by the query"
        ],
        "answer": 2,
        "answerLetter": "C"
      },
      {
        "question": "Which statement is used to close an established MySQL connection in Python?",
        "options": [
          "con.stop()",
          "con.end()",
          "con.close()",
          "con.exit()"
        ],
        "answer": 2,
        "answerLetter": "C"
      }
    ]
  }
};
