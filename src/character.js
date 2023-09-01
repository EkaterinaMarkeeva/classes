import typesOfClasses from './dataList';

export default class Character {
  constructor(name, type) {
    
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error("Имя должно быть не менее 2 и не более 10 символов");
    }
    if (!typesOfClasses[type]) {
      throw new Error("Тип не найден");
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = typesOfClasses[type].attack;
    this.defence = typesOfClasses[type].defence;
  }
}
