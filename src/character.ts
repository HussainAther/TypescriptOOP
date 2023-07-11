// Define an interface for characters that can attack
interface Attackable {
  attack(): void;
}

// Define an interface for characters that can defend
interface Defendable {
  defend(): void;
}

// Define a base abstract class for characters
abstract class Character implements Attackable, Defendable {
  protected gold: number = 0;

  constructor() {}

  // Method for collecting gold
  collectGold(amount: number) {
    this.gold += amount;
    console.log(`${this.constructor.name} collected ${amount} gold.`);
  }

  // Abstract method for attacking
  abstract attack(): void;

  // Abstract method for defending
  abstract defend(): void;
}

// Ogre class
class Ogre extends Character {
  constructor() {
    super();
  }

  // Implement the attack method for Ogres
  attack() {
    console.log("Ogre attacks with a club.");
  }

  // Implement the defend method for Ogres
  defend() {
    console.log("Ogre defends with a shield.");
  }
}

// Peon class
class Peon extends Character {
  constructor() {
    super();
  }

  // Implement the attack method for Peons
  attack() {
    console.log("Peon attacks with a club.");
  }

  // Implement the defend method for Peons
  defend() {
    console.log("Peon defends with a shield.");
  }
}

// Knight class
class Knight extends Character {
  constructor() {
    super();
  }

  // Implement the attack method for Knights
  attack() {
    console.log("Knight attacks with a sword.");
  }

  // Implement the defend method for Knights
  defend() {
    console.log("Knight defends with armor.");
  }
}

// Archer class
class Archer extends Character {
  constructor() {
    super();
  }

  // Implement the attack method for Archers
  attack() {
    console.log("Archer attacks with a bow and arrow.");
  }

  // Implement the defend method for Archers
  defend() {
    console.log("Archer defends with a tunic.");
  }
}

// Mage class
class Mage extends Character {
  constructor() {
    super();
  }

  // Implement the attack method for Mages
  attack() {
    console.log("Mage casts a powerful spell.");
  }

  // Implement the defend method for Mages
  defend() {
    console.log("Mage creates a magical shield.");
  }
}

// Ranger class
class Ranger extends Character {
  constructor() {
    super();
  }

  // Implement the attack method for Rangers
  attack() {
    console.log("Ranger attacks with a bow and arrows.");
  }

  // Implement the defend method for Rangers
  defend() {
    console.log("Ranger takes cover and evades attacks.");
  }
}

// Druid class
class Druid extends Character {
  constructor() {
    super();
  }

  // Implement the attack method for Druids
  attack() {
    console.log("Druid summons the power of nature.");
  }

  // Implement the defend method for Druids
  defend() {
    console.log("Druid transforms into a bear form for defense.");
  }
}

// Barbarian class
class Barbarian extends Character {
  constructor() {
    super();
  }

  // Implement the attack method for Barbarians
  attack() {
    console.log("Barbarian delivers a powerful axe swing.");
  }

  // Implement the defend method for Barbarians
  defend() {
    console.log("Barbarian relies on sheer toughness and endurance.");
  }
}

// Cleric class
class Cleric extends Character {
  constructor() {
    super();
  }

  // Implement the attack method for Clerics
  attack() {
    console.log("Cleric invokes divine magic to smite enemies.");
  }

  // Implement the defend method for Clerics
  defend() {
    console.log("Cleric calls upon healing spells to protect allies.");
  }
}

// Monk class
class Monk extends Character {
  constructor() {
    super();
  }

  // Implement the attack method for Monks
  attack() {
    console.log("Monk uses martial arts to strike swiftly.");
  }

  // Implement the defend method for Monks
  defend() {
    console.log("Monk employs evasive techniques to avoid damage.");
  }
}

// Bard class
class Bard extends Character {
  constructor() {
    super();
  }

  // Implement the attack method for Bards
  attack() {
    console.log("Bard performs a rousing musical performance.");
  }

  // Implement the defend method for Bards
  defend() {
    console.log("Bard uses inspiring words to bolster allies.");
  }
}

// Usage
const ogre = new Ogre();
ogre.attack();
ogre.defend();
ogre.collectGold(10);

const peon = new Peon();
peon.attack();
peon.defend();
peon.collectGold(5);

const knight = new Knight();
knight.attack();
knight.defend();
knight.collectGold(15);

const archer = new Archer();
archer.attack();
archer.defend();
archer.collectGold(7);

const mage = new Mage();
mage.attack();
mage.defend();
mage.collectGold(20);

const ranger = new Ranger();
ranger.attack();
ranger.defend();
ranger.collectGold(12);

const druid = new Druid();
druid.attack();
druid.defend();
druid.collectGold(8);

const barbarian = new Barbarian();
barbarian.attack();
barbarian.defend();
barbarian.collectGold(14);

const cleric = new Cleric();
cleric.attack();
cleric.defend();
cleric.collectGold(18);

const monk = new Monk();
monk.attack();
monk.defend();
monk.collectGold(9);

const bard = new Bard();
bard.attack();
bard.defend();
bard.collectGold(11);

