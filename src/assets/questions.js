var stoich,
  atomic,
  periodicity,
  bonding,
  energetics,
  kinetics,
  equilibrium,
  acidBase,
  redox,
  organic,
  measurement,
  optionC;
stoich = [
  {
    question:
      "How many moles of H2O are produced when 2.5 moles of O2 are consumed?",
    answer: "5.0 moles of H2O",
  },
  {
    question:
      "Ammonium perchlorate is an ionic compound (NH4ClO4) that reacts with aluminium to make aluminium oxide(Al2O3), aluminium chloride (AlCl3​), nitrogen monoxide gas (NO), and water at room temperature. \n a) State the balanced chemical equation, including state symbols \n b) Outline why a chemical equation must be balanced. \n c) Outline what you would expect to observe about the mass of the products compared to the mass of the reactants in this reaction.",
    answer:
      "a) 3 NH4CLO4(s) + 3 Al(s) → Al2O3(s) + 3 NO(g) + 6 H2O(l) \n b) Chemical equations must be balanced to abide by the law of conservation of mass or matter. \n c) The mass of the products will be equal to the mass of the reactants (mass is conserved).",
  },
];
atomic = [
  {
    question: "What is the atomic number of carbon?",
    answer: "6",
  },
  {
    question: "What is the atomic number of oxygen?",
    answer: "8",
  },
  {
    question:
      "Arrange infrared, ultraviolet and visible light in order of increasing wavelength.",
    answer: "UV < Vis < IR",
  },
  {
    question:
      "Arrange infrared, gamma and microwaves light in order of increasing frequency.",
    answer: "IR < Microwaves < Gamma",
  },
  {
    question: "What is the formula for frequency?",
    answer: "f = c/λ",
  },
  {
    question: "What is the formula for energy of a photon?",
    answer: "E = hf",
  },
  {
    question: "Why can zinc not be seen on a colorimeter?",
    answer:
      "Zinc is not a transition metal, and therefore has no visible absorption spectrum. (No d-orbital splitting)",
  },
  {
    question: "What is the full electron configuration of Br?",
    answer: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p5",
  },
  {
    question: "What is the abbreviated electron configuration of Cu?",
    answer: "[Ar] 4s1 3d10",
  },
  {
    question: "What is the isoelectronic equivalent of Ar?",
    answer: "K+ or Cl-",
  },
  {
    question:
      "What is the evidence for the existence of sublevels using first ionization energy?",
    answer:
      "Full, half full, or empty sublevels have lower energy \n Removal of e- from O or S (-p4) leaves -p3 a half full sublevel \n Removal of e- from B or Al (-p1) leaves an empty p sublevel and a full s sublevel",
  },
  {
    question:
      "What is the evidence for the existence of main energy levels using first ionization energy?",
    answer:
      "Full, half full, or empty sublevels and main energy levels have lower energy \n Lowest first ionization energy in any period is the first element e- configuration (e.g Li, Na, K etc.) removal of one e- leaves p6 and a full main energy level",
  },
];
periodicity = [
  {
    question: "What is the significance of shielding?",
    answer:
      "Shielding is the repulsion of electrons in the same energy level. \n Shielding increases down a group and remains constant across a period",
  },
  {
    question: "What is the significance of effective nuclear charge?",
    answer:
      "Effective nuclear charge is the net positive charge experienced by valence electrons. \n Effective nuclear charge increases across a period and remains constant down a group",
  },
  {
    question: "What is the periodic trend for atomic radius?",
    answer:
      "Atomic radius decreases across a period and increases down a group",
  },
  {
    question: "What is the periodic trend for ionization energy?",
    answer:
      "Ionization energy increases across a period and decreases down a group",
  },
  {
    question: "What is the periodic trend for electronegativity?",
    answer:
      "Electronegativity increases across a period and decreases down a group",
  },
  {
    question: "What is the periodic trend for electron affinity?",
    answer:
      "Electron affinity increases across a period and decreases down a group",
  },
  {
    question: "What is the periodic trend for metallic character?",
    answer:
      "Metallic character decreases across a period and increases down a group",
  },
  {
    question: "What is the periodic trend for ionic radius?",
    answer: "Ionic radius decreases across a period and increases down a group",
  },
  {
    question: "What is the periodic trend for melting point?",
    answer:
      "Melting point increases across a period and decreases down a group",
  },
  {
    question: "What is the periodic trend for boiling point?",
    answer:
      "Boiling point increases across a period and decreases down a group",
  },
  {
    question: "Why is group 1 and group 17 the most reactive?",
    answer:
      "Group 1 and group 17 are the most reactive because they have the lowest ionization energy and the highest electron affinity respectively.",
  },
  {
    question: "Why are some of the trends flipped for group 1 and group 17?",
    answer:
      "Some of the trends are flipped for group 1 and group 17 because they are the most reactive elements. \n e.g. ionization energy decreases down a group, but increases down group 1 because the outermost electron is further away from the nucleus, but the electron is more easily removed because of the shielding effect.",
  },
];
bonding = [
  {
    question: "What is the formal charge formula?",
    answer:
      "FC = V - (L + S/2), \n FC = formal charge, V = valence electrons, L = lone pair electrons, S = shared electrons",
  },
  {
    question:
      "Draw the Lewis Structure for SO2. \n What is the formal charge of each element in SO2?",
    answer:
      "O=S-O \n Right O: FC = 6 - 6 - 1 = -1 \n Sulfur: FC = 6 - 2 - 3 = 1 \n Left O: FC = 6 - (4 + 4/2) = 0",
  },
  {
    question: "What is the bond angle of a tetrahedral molecule?",
    answer: "109.5 degrees",
  },
  {
    question: "What is the bond angle of a trigonal planar molecule?",
    answer: "120 degrees",
  },
  {
    question: "Define sigma bond and give an example.",
    answer:
      "A sigma bond is a bond formed by the overlap of two orbitals along the bond axis. \n e.g. C-C, C-H, C-O, C-N, C-Cl, C-Br, C-I",
  },
  {
    question: "Define pi bond and give an example.",
    answer:
      "A pi bond is a bond formed by the sideways overlap of two p orbitals. \n e.g. C=C, C=O, C=N, C=Cl, C=Br, C=I",
  },
  {
    question:
      "What is the hybridization of a molecule with 2 sigma bonds and 2 lone pairs?",
    answer: "sp3",
  },
  {
    question:
      "What is the hybridization of a molecule with 3 sigma bonds and 1 lone pair?",
    answer: "sp3",
  },
  {
    question:
      "What is the hybridization of a molecule with 4 sigma bonds and 0 lone pairs?",
    answer: "sp3",
  },
  {
    question: "When is a molecule considered polar?",
    answer:
      "A molecule is considered polar when the dipole moments do not cancel out.",
  },
  {
    question: "What is the significance of the dipole moment?",
    answer:
      "The dipole moment is a measure of the polarity of a bond. The larger the dipole moment, the more polar the bond.",
  },
  {
    question: "What is the significance of delocalized electrons?",
    answer:
      "Delocalized electrons are electrons that are not confined to a single atom or bond. They are free to move around the molecule. \n e.g. benzene",
  },
  {
    question: "What is the significance of resonance structures?",
    answer:
      "Resonance structures are structures that can be drawn for a molecule that differ only in the placement of electrons. \n e.g. benzene",
  },
];
energetics = [
  {
    question: "What is the formula for enthalpy change?",
    answer: "ΔH = H(products) - H(reactants)",
  },
  {
    question: "What is the formula for bond enthalpy?",
    answer: "ΔH = ΣH(bonds broken) - ΣH(bonds formed)",
  },
  {
    question: "What is the formula for enthalpy of combustion?",
    answer: "ΔH = H(products) - H(reactants)",
  },
  {
    question: "What is the formula for enthalpy of formation?",
    answer: "ΔH = H(products) - H(reactants)",
  },
  {
    question: "What is the formula for enthalpy of neutralisation?",
    answer: "ΔH = H(products) - H(reactants)",
  },
];
kinetics = [
  {
    question: "What is the formula for rate of reaction?",
    answer: "rate = Δconcentration/Δtime",
  },
  {
    question: "What is the formula for rate constant?",
    answer: "k = Ae^(-Ea/RT)",
  },
  {
    question: "What are the gas laws?",
    answer:
      "Boyle's Law: P1V1 = P2V2 \n Charles' Law: V1/T1 = V2/T2 \n Avogadro's Law: V1/n1 = V2/n2 \n Ideal Gas Law: PV = nRT",
  },
  {},
];
equilibrium = [
  {
    question: "What is the formula for equilibrium constant?",
    answer: "aA + bB → cC + dD \n Kc = [C]^c[D]^d/[A]^a[B]^b",
  },
  {
    question:
      "What is the formula for equilibrium constant in terms of partial pressure?",
    answer: "aA + bB → cC + dD \n Kp = (PC)^c(PD)^d/(PA)^a(PB)^b",
  },
  {
    question: "",
  },
];
acidBase = [
  {
    question: "What is the formula for pH?",
    answer: "pH = -log[H+]",
  },
  {
    question: "What is the formula for pOH?",
    answer: "pOH = -log[OH-] OR pOH = 14 - pH",
  },
  {
    question:
      "22.275 g CaCl2 are dissolved to a final volume of 0.5750 dm3 of solution. Determine the molar concentration of the solution.",
    answer:
      "c = n/v \n n = 22.275gCaCl2 x 1molCaCl2/110.98gCaCl2 = 0.204992mol \n v = 0.5750 dm3 \n c = n/v = 0.3565 mol/dm3",
  },
  {},
];
redox = [
  {
    question: "What is the formula for oxidation number?",
    answer: "Oxidation number = charge of ion",
  },
  {
    question: "What is the formula for oxidation number of an element?",
    answer: "Oxidation number = 0",
  },
  {
    question: "What are the oxidation numbers of the elements in H2O?",
    answer: "H = +1, O = -2",
  },
  {
    question: "Define electroplating.",
    answer:
      "Electroplating is the process of coating a metal with another metal using electrolysis.",
  },
  {
    question: "What is the formula for Faraday's constant?",
    answer: "F = 96500 C/mol",
  },
  {
    question:
      "What are the differences between galvanic cells and electrolytic cells?",
    answer:
      "Galvanic cells are spontaneous, electrolytic cells are non-spontaneous \n Galvanic cells have a positive cell potential, electrolytic cells have a negative cell potential \n Galvanic cells have a positive ΔG, electrolytic cells have a negative ΔG \n Galvanic cells have a negative ΔG, electrolytic cells have a positive ΔG \n Galvanic cells have a negative Ecell, electrolytic cells have a positive Ecell \n Galvanic cells have a positive Ecell, electrolytic cells have a negative Ecell",
  },
  {
    question:
      "In the electroplating of a copper penny, the current, I, is 0.26A for 40.0 minutes \n a) What is the charge? \n b) What is the number of moles of electrons? \n c) What is the mass gained at the cathode?",
    answer:
      "a) Q = It = 0.26A x 40.0min x 60s/1min = 624C \n b) n = Q/F = 624C/96500C/mol = 0.00646mol \n c)From the half-reactions, we know that 2 moles of electrons are needed to produce 1 mole of copper \n 2 mol e- / 6.466 x 10-3 mol e- = 1 mol Cu(s) / nCu(s) \n nCu(s) = 3.233 x 10-3 mol \n mCu(s) = (nCu)(Ar(Cu)) = (3.233 x 10-3 mol)(63.55 g/mol) = 0.2054 g (even down)",
  },
];
organic = [
  {
    question: "Define aliphatics.",
    answer:
      "Aliphatics are organic compounds that do not contain benzene rings.",
  },
  {
    question: "Define aromatics.",
    answer: "Aromatics are organic compounds that contain benzene rings.",
  },
  {
    question: "Define saturated hydrocarbons.",
    answer:
      "Saturated hydrocarbons are hydrocarbons that contain only single bonds.",
  },
  {
    question:
      "How many hydrogen atoms in a hydrocarbon consisting of 23C, 2 double bonds and 3 triple bonds?",
    answer: "CnH(2n+2-2d-4t) = C23H(2(23) + 2 - 2(2) - 4(3)) = C23H32",
  },
];
measurement = [
  {
    question:
      "Calculate the percentage uncertainty of rain water where pH = 5.1 ± 0.1.",
    answer: "Percentage uncertainty = (0.1/5.1) x 100% = 1.96%",
  },
  {
    question: "Where do you calculate the volume in a graduated cylinder?",
    answer: "The bottom of the meniscus",
  },
  {
    question: "What are some potential errors in a titration?",
    answer:
      "Not calibrating the pH meter correctly \n Overshooting the titrant",
  },
  {
    question: "What are some potential errors in a colorimeter?",
    answer:
      "Not calibrating the colorimeter correctly \n Not using the same cuvette for the blank and the sample \n Not using the same volume of sample for the blank and the sample \n Not using the same wavelength for the blank and the sample \n Not using the same cuvette for the blank and the sample \n Not using the same volume of sample for the blank and the sample \n Not using the same wavelength for the blank and the sample",
  },
];
optionC = [
  {
    question: "Describe how photovoltaic cells work.",
    answer:
      "Photovoltaic cells are made of semiconductors. When light hits the semiconductor, electrons are excited from the valence band to the conduction band. The electrons are then conducted through the circuit, and the holes are filled by electrons from the n-type semiconductor. \n e.g. Si, Ge",
  },
  {
    question: "Describe how solar thermal power stations work.",
    answer:
      "Solar thermal power stations use mirrors to focus sunlight onto a receiver. The receiver heats up and transfers the heat to a fluid. The fluid is then used to heat water, which produces steam. The steam is used to turn a turbine, which generates electricity.",
  },
  {
    question:
      "What are the key differences between nuclear fusion and fission?",
    answer:
      "Nuclear fusion is the combination of two light nuclei to form a heavier nucleus. Nuclear fission is the splitting of a heavy nucleus into two lighter nuclei. \n Nuclear fusion releases more energy than nuclear fission. \n Nuclear fusion requires high temperatures and pressures, while nuclear fission does not. \n Nuclear fusion produces less radioactive waste than nuclear fission. \n Nuclear fusion is more difficult to control than nuclear fission.",
  },
  {
    question: "What are the advantages and disadvantages of nuclear power?",
    answer:
      "Advantages: \n - Nuclear power is a clean energy source \n - Nuclear power is a reliable energy source \n - Nuclear power is a cheap energy source \n Disadvantages: \n - Nuclear power produces radioactive waste \n - Nuclear power is difficult to control \n - Nuclear power is dangerous",
  },
  {
    question: "Describe the process of harvesting fossil fuels.",
    answer:
      "Fossil fuels are formed from the remains of dead organisms. The remains are buried under layers of sediment, and are subjected to high temperatures and pressures. The remains are then converted into fossil fuels.",
  },
];

export {
  stoich,
  atomic,
  periodicity,
  bonding,
  energetics,
  kinetics,
  equilibrium,
  acidBase,
  redox,
  organic,
  measurement,
  optionC,
};
