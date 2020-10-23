/*
 * Il existe une infinité de façons de résoudre un même problème.
 * Ces solutions ne sont que des exemples. Si vous avez utilisé un autre moyen
 * et que ça fonctionne, votre solution est valide aussi !
 */

// Exercice 0
function concat0(tableau1, tableau2) {
  return tableau1.concat(tableau2);
}

// Exercice 1
function concat1(tableau, valeur1, valeur2, valeur3) {
  return tableau.concat(valeur1, valeur2, valeur3);
}

// Exercice 2
function fill0(tableau, valeur) {
  return tableau.fill(valeur);
}

// Exercice 3
function fill1(tableau, valeur, index) {
  return tableau.fill(valeur, index);
}

// Exercice 4
function fill2(tableau, valeur, debut, fin) {
  return tableau.fill(valeur, debut, fin + 1);
}

// Exercice 5
function fill3(tableau, valeur) {
  return tableau.fill(valeur, -3);
}

// Exercice 6
function includes0(tableau, valeur) {
  return tableau.includes(valeur);
}

// Exercice 7
function includes1(tableau, valeur, debut) {
  return tableau.includes(valeur, debut);
}

// Exercice 8
function includes2(tableau, valeur) {
  return tableau.includes(valeur, -4);
}

// Exercice 9
function indexOf0(tableau, valeur) {
  return tableau.indexOf(valeur);
}

// Exercice 10
function indexOf1(tableau, valeur, debut) {
  return tableau.indexOf(valeur, debut);
}

// Exercice 11
function indexOf2(tableau, valeur) {
  return tableau.indexOf(valeur, -2);
}

// Exercice 12
function join0(tableau) {
  return tableau.join();
}

// Exercice 13
function join1(tableau, separateur) {
  return tableau.join(separateur);
}

// Exercice 14
function lastIndexOf0(tableau, valeur) {
  return tableau.lastIndexOf(valeur);
}

// Exercice 15
function lastIndexOf1(tableau, valeur) {
  return tableau.lastIndexOf(valeur, 3);
}

// Exercice 16
function lastIndexOf2(tableau, valeur) {
  return tableau.lastIndexOf(valeur, -3);
}

// Exercice 17
function pop0(tableau) {
  return tableau.pop();
}

// Exercice 18
function pop1(tableau) {
  tableau.pop();
  return tableau;
}

// Exercice 19
function push0(tableau, valeur) {
  tableau.push(valeur);
  return tableau;
}

// Exercice 20
function push1(tableau, valeur1, valeur2) {
  tableau.push(valeur1, valeur2);
  return tableau;
}

// Exercice 21
function reverse0(tableau) {
  return tableau.reverse();
}

// Exercice 22
function shift0(tableau) {
  return tableau.shift();
}

// Exercice 23
function shift1(tableau) {
  tableau.shift();
  return tableau;
}

// Exercice 24
function slice0(tableau) {
  return tableau.slice(2);
}

// Exercice 25
function slice1(tableau, debut, fin) {
  return tableau.slice(debut, fin);
}

// Exercice 26
function slice2(tableau) {
  return tableau.slice(-3);
}

// Exercice 27
function slice3(tableau) {
  return tableau.slice(2,-2);
}

// Exercice 28
function splice0(tableau) {
  tableau.splice(2,1);
  return tableau;
}

// Exercice 29
function splice1(tableau) {
  tableau.splice(1,3);
  return tableau;
}

// Exercice 30
function splice2(tableau) {
  tableau.splice(-3,2);
  return tableau;
}

// Exercice 31
function splice3(tableau, debut, valeur) {
  tableau.splice(debut, 0, valeur);
  return tableau;
}

// Exercice 32
function splice4(tableau, debut, valeur1, valeur2) {
  tableau.splice(debut, 0, valeur1, valeur2);
  return tableau;
}

// Exercice 33
function splice5(tableau, valeur1, valeur2) {
  tableau.splice(-2, 0, valeur1, valeur2);
  return tableau;
}

// Exercice 34
function splice6(tableau, valeur1, valeur2) {
  tableau.splice(1, 3, valeur1, valeur2);
  return tableau;
}

// Exercice 35
function unshift0(tableau, valeur) {
  tableau.unshift(valeur);
  return tableau;
}

// Exercice 36
function unshift1(tableau, valeur1, valeur2) {
  tableau.unshift(valeur1, valeur2);
  return tableau;
}

/********************/
/* Exercices finaux */
/********************/

// Exercice 0 — Entrelacement
function entrelacement(tableau1, tableau2) {
  const resultat = [];
  for (let i = 0; i < tableau1.length; i++) {
    resultat.push(tableau1[i], tableau2[i]);
  }
  return resultat;
}

// Exercice 1


// Exercice 2


// Exercice 3


// Exercice 4


// Exercice 5


// Exercice 6


// Exercice 7


// Exercice 8


// Exercice 9


// Exercice 10


// Exercice 11


// Exercice 12


// Exercice 13


// Exercice 14


// Exercice 15


// Exercice 16


// Exercice 17


// Exercice 18


// Exercice 19


// Exercice 20


// Exercice 21


// Exercice 22


// Exercice 23


// Exercice 24


// Exercice 25


// Exercice 26

