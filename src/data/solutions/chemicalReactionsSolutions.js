import { createSolutionPack } from './createSolutionPack.js'

const solutionGroups = [
  [
    {
      steps: [
        'A chemical reaction is a process in which one or more reactants change into new substances called products.',
        'The products formed have properties different from the reactants.',
      ],
      finalAnswer:
        'Answer: A chemical reaction is a process in which reactants form new substances with different properties.',
    },
    {
      steps: [
        'Some common indicators are change in colour, evolution of gas, change in temperature, and change in state.',
      ],
      finalAnswer:
        'Answer: Any two indicators are change in colour and evolution of gas.',
    },
    {
      steps: [
        'A word equation represents a reaction using the names of reactants and products instead of their chemical formulae.',
      ],
      finalAnswer:
        'Answer: A word equation shows a reaction using words, for example Magnesium + Oxygen -> Magnesium oxide.',
    },
    {
      steps: [
        'When magnesium burns, it reacts with oxygen to form magnesium oxide.',
        'The balanced chemical equation is 2Mg + O2 -> 2MgO.',
      ],
      finalAnswer:
        'Answer: 2Mg + O2 -> 2MgO.',
    },
    {
      steps: [
        'An unbalanced chemical equation is called a skeletal chemical equation.',
        'It shows only the formulae of reactants and products, but the number of atoms is not equal on both sides.',
      ],
      finalAnswer:
        'Answer: A skeletal chemical equation is an unbalanced equation.',
    },
    {
      steps: [
        'A balanced chemical equation has an equal number of atoms of each element on both sides of the arrow.',
      ],
      finalAnswer:
        'Answer: A balanced chemical equation has equal atoms of each element on both sides.',
    },
    {
      steps: [
        'The law of conservation of mass states that mass can neither be created nor destroyed in a chemical reaction.',
      ],
      finalAnswer:
        'Answer: Mass remains constant during a chemical reaction.',
    },
    {
      steps: [
        '(s) means solid.',
        '(l) means liquid.',
        '(g) means gas.',
        '(aq) means aqueous or dissolved in water.',
      ],
      finalAnswer:
        'Answer: (s) solid, (l) liquid, (g) gas, (aq) aqueous solution.',
    },
    {
      steps: [
        'A combination reaction is a reaction in which two or more substances combine to form a single product.',
      ],
      finalAnswer:
        'Answer: In a combination reaction, two or more reactants form one product.',
    },
    {
      steps: [
        'Corrosion is the slow destruction of metals due to air, moisture, or chemicals.',
        'Rusting of iron is the most common example.',
      ],
      finalAnswer:
        'Answer: Corrosion is the gradual damage of a metal by chemical action, such as rusting.',
    },
  ],
  [
    {
      steps: [
        'Change in state: for example ice changes to water or water changes to steam.',
        'Change in colour: iron in copper sulphate solution changes the blue solution to green.',
        'Evolution of gas: zinc reacts with dilute acid and gives hydrogen gas.',
        'Change in temperature: CaO reacts with water and releases heat.',
      ],
      finalAnswer:
        'Answer: Four indicators are change in state, change in colour, gas evolution, and change in temperature.',
    },
    {
      steps: [
        'A word equation uses names of substances, for example Magnesium + Oxygen -> Magnesium oxide.',
        'A chemical equation uses symbols and formulae, for example 2Mg + O2 -> 2MgO.',
        'Chemical equations are shorter and more useful for calculations and balancing.',
      ],
      finalAnswer:
        'Answer: Word equations use names, while chemical equations use symbols and formulae.',
    },
    {
      steps: [
        'Start with Mg + O2 -> MgO.',
        'There are 2 oxygen atoms on the left but only 1 on the right.',
        'Put coefficient 2 before MgO: Mg + O2 -> 2MgO.',
        'Now magnesium becomes unbalanced, so put 2 before Mg.',
      ],
      finalAnswer:
        'Answer: 2Mg + O2 -> 2MgO.',
    },
    {
      steps: [
        'Chemical equations must be balanced to obey the law of conservation of mass.',
        'The number of atoms of each element must remain the same before and after the reaction.',
      ],
      finalAnswer:
        'Answer: Equations are balanced so that total atoms, and therefore mass, remain conserved.',
    },
    {
      steps: [
        'An aqueous solution is a substance dissolved in water.',
        'For example, NaCl(aq) means sodium chloride dissolved in water.',
      ],
      finalAnswer:
        'Answer: An aqueous solution is a substance dissolved in water, for example NaCl(aq).',
    },
    {
      steps: [
        'Exothermic reactions release heat to the surroundings.',
        'Endothermic reactions absorb heat from the surroundings.',
        'Example of exothermic reaction: CH4 + 2O2 -> CO2 + 2H2O + heat.',
        'Example of endothermic reaction: CaCO3 -> CaO + CO2.',
      ],
      finalAnswer:
        'Answer: Exothermic reactions release heat, while endothermic reactions absorb heat.',
    },
    {
      steps: [
        'Thermal decomposition occurs by heating.',
        'Example: CaCO3 -> CaO + CO2.',
        'Photochemical decomposition occurs in the presence of light.',
        'Example: 2AgCl -> 2Ag + Cl2.',
      ],
      finalAnswer:
        'Answer: Thermal decomposition example: CaCO3 -> CaO + CO2; photochemical decomposition example: 2AgCl -> 2Ag + Cl2.',
    },
    {
      steps: [
        'In a displacement reaction, a more reactive element displaces a less reactive element from its compound.',
        'Example: Fe + CuSO4 -> FeSO4 + Cu.',
      ],
      finalAnswer:
        'Answer: A displacement reaction is Fe + CuSO4 -> FeSO4 + Cu.',
    },
    {
      steps: [
        'A precipitation reaction is a reaction in which an insoluble solid is formed.',
        'Example: Na2SO4 + BaCl2 -> BaSO4 + 2NaCl.',
        'Here BaSO4 is the white precipitate.',
      ],
      finalAnswer:
        'Answer: A precipitation reaction forms an insoluble solid, such as BaSO4 in Na2SO4 + BaCl2 -> BaSO4 + 2NaCl.',
    },
    {
      steps: [
        'Oxidation means gain of oxygen or loss of hydrogen.',
        'Reduction means loss of oxygen or gain of hydrogen.',
      ],
      finalAnswer:
        'Answer: Oxidation is gain of oxygen or loss of hydrogen, while reduction is loss of oxygen or gain of hydrogen.',
    },
  ],
  [
    {
      steps: [
        'Start with Fe + H2O -> Fe3O4 + H2.',
        'To balance oxygen, put 4 before H2O: Fe + 4H2O -> Fe3O4 + H2.',
        'Now hydrogen becomes 8 on the left, so put 4 before H2: Fe + 4H2O -> Fe3O4 + 4H2.',
        'Finally, balance iron by putting 3 before Fe.',
      ],
      finalAnswer:
        'Answer: 3Fe + 4H2O -> Fe3O4 + 4H2.',
    },
    {
      steps: [
        'Magnesium ribbon burns with a dazzling white flame.',
        'A white powder of magnesium oxide is formed.',
        'Heat is also produced.',
        'These observations show that a new substance is formed, so it is a chemical reaction.',
      ],
      finalAnswer:
        'Answer: Burning magnesium gives bright light, white MgO powder, and heat, showing a chemical reaction.',
    },
    {
      steps: [
        'CaO + H2O -> Ca(OH)2 combines two reactants to form one product.',
        'Therefore it is a combination reaction.',
        'It also releases heat, so it is exothermic as well.',
      ],
      finalAnswer:
        'Answer: It is a combination reaction because two substances form a single product.',
    },
    {
      steps: [
        'During respiration, glucose reacts with oxygen to form carbon dioxide and water.',
        'Energy is released in the process.',
        'Any reaction that releases heat or energy is called exothermic.',
      ],
      finalAnswer:
        'Answer: Respiration is exothermic because it releases energy.',
    },
    {
      steps: [
        'Electrolytic decomposition is decomposition caused by electric current.',
        'A common example is decomposition of water:',
        '2H2O -> 2H2 + O2.',
      ],
      finalAnswer:
        'Answer: Electrolytic decomposition occurs by passing electricity, for example 2H2O -> 2H2 + O2.',
    },
    {
      steps: [
        'Silver chloride decomposes in sunlight.',
        'It forms silver metal and chlorine gas.',
        'The deposited silver is grey in colour.',
      ],
      finalAnswer:
        'Answer: AgCl turns grey because it decomposes to silver in sunlight.',
    },
    {
      steps: [
        'Na2SO4 + BaCl2 -> BaSO4 + 2NaCl involves exchange of ions between two compounds.',
        'Ba^2+ combines with SO4^2- to form insoluble BaSO4.',
        'Because ions exchange partners, it is a double displacement reaction.',
      ],
      finalAnswer:
        'Answer: It is a double displacement reaction because the ions are exchanged and BaSO4 precipitate forms.',
    },
    {
      steps: [
        'In CuO + H2 -> Cu + H2O, CuO loses oxygen and becomes Cu, so CuO is reduced.',
        'Hydrogen gains oxygen and becomes H2O, so H2 is oxidised.',
        'Since oxidation and reduction happen together, the reaction is redox.',
      ],
      finalAnswer:
        'Answer: It is a redox reaction because CuO is reduced and H2 is oxidised at the same time.',
    },
    {
      steps: [
        'Corrosion can be prevented by painting, oiling, greasing, galvanisation, and alloying.',
      ],
      finalAnswer:
        'Answer: Methods include painting, greasing, oiling, galvanisation, and alloying.',
    },
    {
      steps: [
        'Rancidity is the oxidation of fats and oils in food, causing unpleasant smell and taste.',
        'It can be prevented by adding antioxidants, using airtight containers, flushing with nitrogen, and refrigeration.',
      ],
      finalAnswer:
        'Answer: Rancidity is oxidation of oils and fats, and it can be prevented by airtight packing, nitrogen flushing, antioxidants, and refrigeration.',
    },
  ],
  [
    {
      steps: [
        'Start with C2H6 + O2 -> CO2 + H2O.',
        'Balance carbon first: put 4 before CO2 for 2 molecules of C2H6.',
        'Balance hydrogen: put 6 before H2O.',
        'Now oxygen atoms on the right = 8 + 6 = 14, so put 7 before O2.',
        'To remove fractional coefficients, put 2 before C2H6.',
      ],
      finalAnswer:
        'Answer: 2C2H6 + 7O2 -> 4CO2 + 6H2O.',
    },
    {
      steps: [
        'Step 1: Write the equation Fe + H2O -> Fe3O4 + H2.',
        'Step 2: Balance oxygen by putting 4 before H2O.',
        'Step 3: Balance hydrogen by putting 4 before H2.',
        'Step 4: Balance iron by putting 3 before Fe.',
        'Step 5: Check that Fe, H, and O atoms are equal on both sides.',
      ],
      finalAnswer:
        'Answer: The balanced equation is 3Fe + 4H2O -> Fe3O4 + 4H2.',
    },
    {
      steps: [
        'Subscripts are part of the chemical formula and tell us the composition of the substance.',
        'Changing a subscript changes the substance itself.',
        'While balancing, only coefficients should be changed so the identity of the substances remains the same.',
      ],
      finalAnswer:
        'Answer: Changing subscripts changes the actual compounds, so only coefficients should be changed while balancing.',
    },
    {
      steps: [
        'In a displacement reaction, one element replaces another element in a compound.',
        'Example: Fe + CuSO4 -> FeSO4 + Cu.',
        'In a double displacement reaction, two compounds exchange ions.',
        'Example: Na2SO4 + BaCl2 -> BaSO4 + 2NaCl.',
      ],
      finalAnswer:
        'Answer: Displacement involves one element replacing another, while double displacement involves exchange of ions between two compounds.',
    },
    {
      steps: [
        'Combination: CaO + H2O -> Ca(OH)2',
        'Decomposition: CaCO3 -> CaO + CO2',
        'Displacement: Fe + CuSO4 -> FeSO4 + Cu',
        'Double displacement: Na2SO4 + BaCl2 -> BaSO4 + 2NaCl',
        'Redox: CuO + H2 -> Cu + H2O',
      ],
      finalAnswer:
        'Answer: One example each is CaO + H2O -> Ca(OH)2, CaCO3 -> CaO + CO2, Fe + CuSO4 -> FeSO4 + Cu, Na2SO4 + BaCl2 -> BaSO4 + 2NaCl, and CuO + H2 -> Cu + H2O.',
    },
    {
      steps: [
        'When zinc reacts with hydrochloric acid, bubbles of hydrogen gas are formed.',
        'There is a rise in temperature.',
        'A new substance, zinc chloride, is also formed.',
      ],
      finalAnswer:
        'Answer: Zn + HCl is a chemical reaction because gas is evolved, heat changes, and a new substance forms.',
    },
    {
      steps: [
        'In CuO + H2 -> Cu + H2O, hydrogen gains oxygen to form water, so hydrogen is oxidised.',
        'CuO loses oxygen to form copper, so CuO is reduced.',
      ],
      finalAnswer:
        'Answer: H2 is oxidised and CuO is reduced.',
    },
    {
      steps: [
        'When lead nitrate solution is mixed with potassium iodide solution, a yellow precipitate of lead iodide is formed.',
        'The reaction is Pb(NO3)2 + 2KI -> PbI2 + 2KNO3.',
        'This is a double displacement reaction and also a precipitation reaction.',
      ],
      finalAnswer:
        'Answer: A yellow precipitate of PbI2 forms, and the reaction is double displacement (precipitation).',
    },
    {
      steps: [
        'CaCO3 decomposes only when heat is supplied.',
        'Since heat is absorbed to break the compound into CaO and CO2, the reaction is endothermic.',
      ],
      finalAnswer:
        'Answer: It is endothermic because heat is absorbed during decomposition.',
    },
    {
      steps: [
        'Physical states tell us whether a substance is solid, liquid, gas, or aqueous.',
        'They help us understand the actual conditions of the reaction, such as gas evolution or precipitation.',
      ],
      finalAnswer:
        'Answer: Physical states make the chemical equation clearer and more informative.',
    },
    {
      steps: [
        'Galvanisation means coating iron with a thin layer of zinc.',
        'This zinc layer prevents air and moisture from directly reaching the iron surface.',
      ],
      finalAnswer:
        'Answer: Galvanisation protects iron by giving it a zinc coating that prevents rusting.',
    },
    {
      steps: [
        'Chips contain oil or fat, which can become rancid by oxidation.',
        'Nitrogen is an unreactive gas and prevents oxidation inside the packet.',
      ],
      finalAnswer:
        'Answer: Chips packets are flushed with nitrogen to prevent rancidity.',
    },
    {
      steps: [
        'Rusting is oxidation of metals, especially iron, in the presence of air and moisture.',
        'Rancidity is oxidation of fats and oils in food.',
        'Rusting damages metals, while rancidity spoils food quality and taste.',
      ],
      finalAnswer:
        'Answer: Rusting affects metals, whereas rancidity affects fats and oils in food.',
    },
    {
      steps: [
        'Combustion of methane: CH4 + 2O2 -> CO2 + 2H2O.',
        'Formation of water from hydrogen and oxygen: 2H2 + O2 -> 2H2O.',
      ],
      finalAnswer:
        'Answer: CH4 + 2O2 -> CO2 + 2H2O and 2H2 + O2 -> 2H2O.',
    },
    {
      steps: [
        'Reaction conditions are special requirements needed for a reaction to occur, such as heat, pressure, sunlight, or a catalyst.',
        'These are usually written above the arrow in the equation.',
        'Example: heat above CaCO3 -> CaO + CO2 or sunlight above 2AgCl -> 2Ag + Cl2.',
      ],
      finalAnswer:
        'Answer: Reaction conditions are the required factors like heat, pressure, catalyst, or sunlight written above the arrow.',
    },
    {
      steps: [
        'Iron is more reactive than copper.',
        'So iron can displace copper from copper sulphate solution.',
      ],
      finalAnswer:
        'Answer: Iron displaces copper because iron is more reactive than copper.',
    },
    {
      steps: [
        'On strong heating, ferrous sulphate decomposes.',
        'The products formed are ferric oxide, sulphur dioxide, and sulphur trioxide.',
        'Balanced equation: 2FeSO4 -> Fe2O3 + SO2 + SO3.',
      ],
      finalAnswer:
        'Answer: The products are Fe2O3, SO2, and SO3.',
    },
    {
      steps: [
        'Gas evolution is identified by bubbles or effervescence during the reaction.',
        'The gas can be tested further if needed, such as a pop sound for hydrogen.',
      ],
      finalAnswer:
        'Answer: A gas-evolving reaction shows bubbles or effervescence, and the gas can be confirmed by tests.',
    },
    {
      steps: [
        'Balancing ensures the same number of atoms of each element on both sides.',
        'This is required because matter is neither created nor destroyed in a reaction.',
      ],
      finalAnswer:
        'Answer: Balancing is based on the law of conservation of mass because atoms must remain equal on both sides.',
    },
    {
      steps: [
        'Oxidation has important effects in daily life such as corrosion and rancidity.',
        'Corrosion damages metals like iron, copper, and silver.',
        'Rancidity spoils food containing fats and oils.',
        'Both can be reduced by preventive methods such as galvanisation, airtight packing, and use of antioxidants.',
      ],
      finalAnswer:
        'Answer: The main daily-life effects of oxidation are corrosion of metals and rancidity of food.',
    },
  ],
]

export const chapterSolutions = createSolutionPack(
  'science',
  'chemical-reactions-and-equations',
  'Detailed worked answers for every Chemical Reactions and Equations practice question, aligned with the same order as the chapter practice set.',
  solutionGroups,
)
