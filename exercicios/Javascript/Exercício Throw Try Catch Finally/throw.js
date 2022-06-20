class weapon{
    constructor(nameWeapon){
      this.nameWeapon = nameWeapon;
      this.ammunation = 10
    }
    shoot(){
      if(this.ammunation > 0){
      console.log("Bang");
      this.ammunation -= 1;
      }else{
        throw new Error(this.nameWeapon+ " está sem munição");
      }
    }
    reload(){
      this.ammunation = 10;
    }
  }
  
  let Weapon = new weapon("FireFox");
  try{
    Weapon.shoot();
    Weapon.shoot();
    Weapon.shoot();
    Weapon.shoot();
    Weapon.shoot();
    Weapon.shoot();
    Weapon.shoot();
    Weapon.shoot();
    Weapon.shoot();
    Weapon.shoot();
    Weapon.shoot();
    Weapon.shoot();
  }catch(e){
    console.log(e.message);
    Weapon.reload();
    console.log("Arma recarregada!")
  }finally{
    console.log("Arma testada com sucesso!!!");
  }
  console.log(Weapon);