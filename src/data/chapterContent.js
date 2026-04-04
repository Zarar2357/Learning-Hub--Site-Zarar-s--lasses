export const chapterContent = {
  mathematics: {
    'real-numbers': {
      heroLabel: 'Detailed Notes + Question Bank',
      notesTitle: 'Teacher-grade notes',
      notesIntro:
        'A clean, structured explanation of every core idea from Real Numbers, designed for revision, classroom teaching, and test preparation.',
      questionsTitle: 'Practice sets',
      questionsIntro:
        'Fifty questions arranged from easy to competitive level so students can build confidence step by step.',
      notes: [
        {
          title: '1. Real Numbers',
          definition:
            'Real numbers are all numbers that can be represented on the number line.',
          bullets: [
            'Natural Numbers (N): 1, 2, 3, ...',
            'Whole Numbers (W): 0, 1, 2, ...',
            'Integers (Z): ..., -2, -1, 0, 1, 2, ...',
            'Rational Numbers (Q): numbers of the form p/q where q is not 0',
            'Irrational Numbers: numbers that cannot be written as p/q',
          ],
          examples: ['Rational: 1/2, -3/4', 'Irrational: sqrt(2), pi'],
        },
        {
          title: '2. Euclid\'s Division Lemma',
          definition:
            'For any two positive integers a and b, there exist unique integers q and r such that a = bq + r, where 0 <= r < b.',
          bullets: [
            'The remainder is always less than the divisor.',
            'This lemma works only for positive integers.',
          ],
          examples: ['37 = 5 x 7 + 2'],
        },
        {
          title: '3. Euclid\'s Division Algorithm',
          definition:
            'A method to find HCF (Highest Common Factor) by using Euclid\'s lemma repeatedly.',
          bullets: [
            'Divide the larger number by the smaller number.',
            'Replace dividend with divisor and divisor with remainder.',
            'Continue the process until the remainder becomes 0.',
            'The last divisor is the HCF.',
          ],
          examples: [
            '657 = 306 x 2 + 45',
            '306 = 45 x 6 + 36',
            '45 = 36 x 1 + 9',
            '36 = 9 x 4 + 0',
            'HCF = 9',
          ],
        },
        {
          title: '4. Fundamental Theorem of Arithmetic',
          definition:
            'Every composite number can be written as a product of prime numbers, and this factorization is unique.',
          bullets: [
            'Prime Number: a number with exactly 2 factors.',
            'Composite Number: a number with more than 2 factors.',
          ],
          examples: ['84 = 2 x 2 x 3 x 7'],
        },
        {
          title: '5. Prime Factorization',
          definition: 'Prime factorization means breaking a number into its prime factors.',
          examples: ['180 = 2^2 x 3^2 x 5'],
        },
        {
          title: '6. HCF (Highest Common Factor)',
          definition:
            'The HCF is the largest number that divides all the given numbers exactly.',
          examples: [
            '24 = 2^3 x 3',
            '36 = 2^2 x 3^2',
            'HCF = 2^2 x 3 = 12',
          ],
        },
        {
          title: '7. LCM (Lowest Common Multiple)',
          definition:
            'The LCM is the smallest number that is divisible by all the given numbers.',
          examples: ['LCM of 24 and 36 = 2^3 x 3^2 = 72'],
          formula: 'Important identity: HCF x LCM = Product of the numbers',
        },
        {
          title: '8. Rational Numbers',
          definition: 'A rational number is of the form p/q where q is not 0.',
          examples: ['2/3', '-5/7'],
        },
        {
          title: '9. Decimal Expansion of Rational Numbers',
          definition: 'Decimal expansion means the decimal representation of a rational number.',
          bullets: [
            'Terminating decimal: ends after a finite number of digits.',
            'A rational number has a terminating decimal when its denominator in lowest form has only 2 and/or 5 as prime factors.',
            'Non-terminating recurring decimal: infinite decimal that repeats a pattern.',
            'If the denominator is of the form 2^n x 5^m, the decimal terminates; otherwise, it recurs.',
          ],
          examples: ['3/8 = 0.375', '2/3 = 0.666...'],
        },
      ],
      summary: [
        'Euclid\'s Lemma gives the division formula.',
        'Euclid\'s Algorithm is used to find HCF.',
        'Prime factorization is the base concept for HCF and LCM.',
        'HCF uses the smallest powers of common prime factors.',
        'LCM uses the highest powers of prime factors.',
        'Decimal expansion depends on the denominator in lowest form.',
      ],
      questionGroups: [
        {
          title: 'Easy',
          accent: 'from-emerald-400 to-lime-400',
          questions: [
            'Write Euclid\'s Division Lemma.',
            'Find remainder when 45 is divided by 6.',
            'Check if 17 is prime.',
            'Find HCF of 12 and 16.',
            'Find LCM of 4 and 6.',
            'Write prime factors of 20.',
            'Is 1/8 terminating or recurring?',
            'Write 0.25 as fraction.',
            'Find HCF of 15 and 25.',
            'Write two irrational numbers.',
          ],
        },
        {
          title: 'Medium',
          accent: 'from-amber-400 to-orange-400',
          questions: [
            'Use Euclid algorithm to find HCF of 135 and 225.',
            'Find HCF and LCM of 18 and 24.',
            'Verify HCF x LCM = product for 6 and 8.',
            'Find prime factorization of 144.',
            'Check if 7/50 is terminating.',
            'Find HCF of 36 and 54.',
            'Express 0.125 as fraction.',
            'Find LCM of 12 and 15.',
            'Is sqrt(3) rational or irrational?',
            'Find HCF of 27 and 36.',
          ],
        },
        {
          title: 'Hard',
          accent: 'from-rose-400 to-orange-500',
          questions: [
            'Use Euclid algorithm to find HCF of 867 and 255.',
            'Find LCM and HCF of 72 and 120.',
            'Prove that HCF x LCM = product for 20 and 30.',
            'Check if 13/3125 is terminating.',
            'Find HCF of 306 and 657.',
            'Find prime factorization of 630.',
            'Find smallest number divisible by 6, 8, and 12.',
            'Express 0.375 as fraction.',
            'Determine if 7/45 is terminating.',
            'Find HCF of 56 and 98.',
          ],
        },
        {
          title: 'Very Hard (Competitive Level)',
          accent: 'from-fuchsia-500 to-pink-500',
          questions: [
            'Use Euclid algorithm to find HCF of 12345 and 54321.',
            'Find LCM of 24, 36, and 54.',
            'Prove that sqrt(5) is irrational.',
            'Find the greatest number that divides 306 and 657 leaving remainder 9.',
            'Find HCF of 3 numbers: 96, 144, 192.',
            'Find least number divisible by 8, 12, and 15.',
            'If HCF = 12 and LCM = 180, find the numbers when one number is 36.',
            'Prove that product of two consecutive numbers is divisible by 2.',
            'Find whether 77/210 has terminating decimal.',
            'Express 0.123123... as fraction.',
            'Find smallest number divisible by 3, 5, and 7.',
            'Prove sqrt(7) is irrational.',
            'Find LCM of 45, 60, and 75.',
            'Find HCF of 3 numbers using Euclid method.',
            'Find least number which when divided by 12 and 15 leaves remainder 5.',
            'Check if 2^n x 5^m always gives terminating decimal.',
            'Prove that square of any odd number is odd.',
            'Find largest number dividing 125 and 145 leaving the same remainder.',
            'Find HCF of 1024 and 640.',
            'Express 0.272727... as fraction.',
          ],
        },
      ],
    },
    polynomials: {
      heroLabel: 'Detailed Notes + Question Bank',
      notesTitle: 'Teacher-grade notes',
      notesIntro:
        'A clean, structured explanation of every core idea from Polynomials, designed for revision, classroom teaching, and test preparation.',
      questionsTitle: 'Practice sets',
      questionsIntro:
        'Fifty questions arranged from easy to competitive level so students can build confidence step by step.',
      notes: [
        {
          title: '1. Polynomial',
          definition:
            'A polynomial in one variable x is an algebraic expression of the form a0 + a1x + a2x^2 + ... + anx^n, where n is a whole number and the coefficients are real numbers.',
          bullets: [
            'The powers of the variable in a polynomial are always whole numbers.',
            'A polynomial can have one term, two terms, three terms, or more.',
            'Expressions containing negative powers, fractions in powers, or variables in denominators are not polynomials.',
          ],
          examples: ['3x^2 + 5x - 7', '2x^3 - x + 9', '5'],
        },
        {
          title: '2. Terms, Coefficients, and Constant Term',
          definition:
            'Each separate part of a polynomial joined by plus or minus signs is called a term. The number multiplying the variable is called its coefficient, and the term without a variable is called the constant term.',
          bullets: [
            'In 4x^2 - 3x + 6, the terms are 4x^2, -3x, and 6.',
            'The coefficient of x^2 is 4 and the coefficient of x is -3.',
            'The constant term in this polynomial is 6.',
          ],
        },
        {
          title: '3. Degree of a Polynomial',
          definition:
            'The highest power of the variable present in a polynomial with non-zero coefficient is called its degree.',
          bullets: [
            'Degree 0 polynomial is called a constant polynomial.',
            'Degree 1 polynomial is called a linear polynomial.',
            'Degree 2 polynomial is called a quadratic polynomial.',
            'Degree 3 polynomial is called a cubic polynomial.',
          ],
          examples: ['7 has degree 0', '2x + 5 has degree 1', 'x^2 - 4x + 1 has degree 2'],
        },
        {
          title: '4. Types of Polynomials by Number of Terms',
          definition:
            'Polynomials can also be classified by the number of non-zero terms they contain.',
          bullets: [
            'Monomial: one term, for example 5x^2',
            'Binomial: two terms, for example x + 3',
            'Trinomial: three terms, for example x^2 + 2x + 1',
          ],
        },
        {
          title: '5. Value of a Polynomial',
          definition:
            'The value of a polynomial is obtained by substituting a given value of the variable into the polynomial and simplifying.',
          bullets: [
            'To find p(2), replace x by 2 in p(x).',
            'Use proper order of operations while simplifying.',
          ],
          examples: ['If p(x) = x^2 - 3x + 2, then p(2) = 4 - 6 + 2 = 0'],
        },
        {
          title: '6. Zeroes of a Polynomial',
          definition:
            'A zero of a polynomial p(x) is a value of x for which p(x) = 0.',
          bullets: [
            'Zeroes are also called roots of the polynomial.',
            'Graphically, zeroes are the x-coordinates where the graph meets the x-axis.',
            'A linear polynomial has one zero, while a quadratic polynomial can have up to two zeroes.',
          ],
          examples: ['For p(x) = x - 5, the zero is 5', 'For p(x) = x^2 - 1, the zeroes are 1 and -1'],
        },
        {
          title: '7. Geometrical Meaning of Zeroes',
          definition:
            'The zeroes of a polynomial correspond to the points where the graph of y = p(x) intersects the x-axis.',
          bullets: [
            'A linear polynomial graph is a straight line and cuts the x-axis at one point.',
            'A quadratic polynomial graph is a parabola and may cut the x-axis at two points, touch it at one point, or not meet it at all.',
          ],
        },
        {
          title: '8. Relationship Between Zeroes and Coefficients of a Quadratic Polynomial',
          definition:
            'For a quadratic polynomial ax^2 + bx + c with zeroes alpha and beta, the sum and product of zeroes are linked to the coefficients.',
          bullets: [
            'alpha + beta = -b/a',
            'alpha x beta = c/a',
            'These relations help in checking answers and forming polynomials from given zeroes.',
          ],
          examples: ['For x^2 - 5x + 6, sum of zeroes = 5 and product of zeroes = 6'],
        },
        {
          title: '9. Forming a Quadratic Polynomial from Given Zeroes',
          definition:
            'If alpha and beta are the zeroes of a quadratic polynomial, then the polynomial can be written as x^2 - (alpha + beta)x + alpha beta.',
          bullets: [
            'First find the sum and product of the given zeroes.',
            'Substitute them into the standard form x^2 - (sum)x + product.',
            'If needed, multiply by a non-zero constant to get another polynomial with the same zeroes.',
          ],
          examples: ['If zeroes are 2 and 3, the polynomial is x^2 - 5x + 6'],
        },
      ],
      summary: [
        'A polynomial has only whole number powers of the variable.',
        'Degree tells the highest power in the polynomial.',
        'Polynomials can be classified by degree and by number of terms.',
        'The value of a polynomial is found by substitution.',
        'A zero of a polynomial makes the polynomial equal to zero.',
        'For a quadratic polynomial, sum and product of zeroes are related to coefficients.',
      ],
      questionGroups: [
        {
          title: 'Easy',
          accent: 'from-emerald-400 to-lime-400',
          questions: [
            'Define a polynomial.',
            'Write the degree of 5x^2 + 3x + 1.',
            'Is 7 a polynomial?',
            'Find the constant term of x^2 + 4x + 9.',
            'Classify x + 5 by degree.',
            'Find p(1) for p(x) = x^2 + 2x + 3.',
            'Write one monomial example.',
            'Write one binomial example.',
            'Find the zero of x - 8.',
            'State the number of zeroes of a linear polynomial.',
          ],
        },
        {
          title: 'Medium',
          accent: 'from-amber-400 to-orange-400',
          questions: [
            'Find the value of p(-2) if p(x) = x^2 - 3x + 4.',
            'Check whether 2 is a zero of x^2 - 5x + 6.',
            'Find the degree and classify 4x^3 - x + 7.',
            'Write the coefficients of x^2 - 7x + 10.',
            'Find the zeroes of x^2 - 9 by factorization.',
            'State the geometrical meaning of the zeroes of a polynomial.',
            'Find the sum and product of zeroes of x^2 - 4x + 3.',
            'Form a quadratic polynomial whose zeroes are 1 and 4.',
            'Is 1/x + 2 a polynomial? Give reason.',
            'Find p(3) if p(x) = 2x^2 - x - 6.',
          ],
        },
        {
          title: 'Hard',
          accent: 'from-rose-400 to-orange-500',
          questions: [
            'Find the zeroes of 2x^2 - 7x + 3.',
            'Verify the relation between zeroes and coefficients for x^2 - 6x + 8.',
            'Form a quadratic polynomial whose sum of zeroes is 7 and product is 12.',
            'Find the value of k if 2 is a zero of x^2 + kx + 2.',
            'Find whether x = -1 is a zero of 2x^3 + x^2 - x - 2.',
            'Form a polynomial with zeroes -2 and 5.',
            'Find the zeroes of x^2 + x - 12.',
            'If alpha and beta are zeroes of a quadratic polynomial and alpha + beta = 3, alpha beta = -10, form the polynomial.',
            'Find p(-1) for p(x) = x^3 - 4x + 1.',
            'Explain why x^(1/2) + 3 is not a polynomial.',
          ],
        },
        {
          title: 'Very Hard (Competitive Level)',
          accent: 'from-fuchsia-500 to-pink-500',
          questions: [
            'Find the zeroes of 3x^2 - 11x - 4.',
            'If one zero of 2x^2 - 5x + k is 2, find k and the other zero.',
            'Form a quadratic polynomial whose zeroes are 3/2 and -4.',
            'Find a quadratic polynomial whose sum and product of zeroes are -1 and -6 respectively.',
            'If alpha and beta are zeroes of x^2 - px + 12 and alpha + beta = 7, find p.',
            'Determine whether x^4 + 2x^2 + 1 can have any real zeroes.',
            'Find the zeroes of x^2 - 2x - 15 and verify alpha + beta and alpha beta.',
            'If 1 and -1 are zeroes of a quadratic polynomial, form the polynomial.',
            'Find the value of m if x + 2 is a factor of x^2 + mx + 8.',
            'Show that if k is a zero of p(x), then x - k is a factor of p(x) for the given polynomial x^2 - 5x + 6.',
            'Find the zeroes of 4x^2 - 4x - 3.',
            'If zeroes of a quadratic polynomial are equal, what can you say about its graph?',
            'Form a polynomial with zeroes 5 and -3 and then verify the coefficient relation.',
            'Find p(1), p(2), and p(3) for p(x) = x^2 - 6x + 8 and identify the zeroes.',
            'Explain the difference between a polynomial and a rational expression.',
            'A quadratic polynomial has zeroes 2 and -5. Find a polynomial whose zeroes are twice these values.',
            'If alpha and beta are zeroes of x^2 + 6x + 8, find alpha^2 + beta^2.',
            'Find the quadratic polynomial whose zeroes are the reciprocals of 2 and 3.',
            'For p(x) = x^3 - 6x^2 + 11x - 6, check whether 1, 2, and 3 are zeroes.',
            'Explain why the polynomial x^2 + 1 has no real zeroes even though it is quadratic.',
          ],
        },
      ],
    },
  },
}

export function getChapterContent(subjectId, chapterId) {
  return chapterContent[subjectId]?.[chapterId] ?? null
}
